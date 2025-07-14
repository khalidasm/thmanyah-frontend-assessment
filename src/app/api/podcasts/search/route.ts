import { NextRequest, NextResponse } from 'next/server';
import { itunesApi } from '@/services/itunes-api';
import { podcastService } from '@/services/podcast-service';
import { EpisodeService } from '@/services/episode-service';
import { APP_CONFIG, ERROR_MESSAGES } from '@/constants';
import { HttpUtils, AppErrorHandler, ApiResponseBuilder } from '@/utils';
import { Episode, Podcast } from '@/types';

const UNIFIED_CONFIG = {
  MAX_EPISODES: 20,
  CACHE_KEY_PREFIX: 'trending_podcasts',
  DEFAULT_LIMIT: 50,
} as const;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get('term');
    const country = searchParams.get('country') || APP_CONFIG.country;
    const limit = parseInt(searchParams.get('limit') || UNIFIED_CONFIG.DEFAULT_LIMIT.toString());

    if (limit > 100 || limit < 1) {
      return NextResponse.json(
        ApiResponseBuilder.createErrorResponse('Invalid limit parameter. Must be between 1 and 100.', term || 'trending', country),
        { status: 400 }
      );
    }

    if (!term || term.trim() === '') {
      return await handleTrendingContent(country);
    }

    return await handleSearchTerm(term, country);

  } catch (error) {
    const appError = AppErrorHandler.handleApiError(error);
    return NextResponse.json(
      HttpUtils.createErrorResponse(appError),
      { status: 500 }
    );
  }
}

function extractTrendingEpisodes(podcasts: Podcast[]): Episode[] {
  try {
    const allEpisodes = podcasts.flatMap(podcast => 
      podcast.episodes?.map(episode => ({
        ...episode,
        podcastName: podcast.collectionName,
        podcastArtist: podcast.artistName,
        podcastArtwork: podcast.artworkUrl100
      })) || []
    );

    const uniqueEpisodes = allEpisodes.filter((episode, index, self) => {
      const episodeKey = episode.guid || episode.id || `${episode.podcastId}-${episode.title}`;
      return index === self.findIndex(e => {
        const eKey = e.guid || e.id || `${episode.podcastId}-${episode.title}`;
        return eKey === episodeKey;
      });
    });

    return uniqueEpisodes
      .filter(episode => episode.pubDate)
      .sort((a, b) => new Date(b.pubDate!).getTime() - new Date(a.pubDate!).getTime())
      .slice(0, UNIFIED_CONFIG.MAX_EPISODES);
  } catch (error) {
    return [];
  }
}

async function handleTrendingContent(country: string): Promise<NextResponse> {
  const iTunesResponse = await itunesApi.getPodcastsWithFallback();
  
  if (!iTunesResponse.success || !iTunesResponse.data || iTunesResponse.data.resultCount === 0) {
    return NextResponse.json(
      ApiResponseBuilder.createErrorResponse(ERROR_MESSAGES.NOT_FOUND, 'trending', country)
    );
  }

  const cacheKey = `${UNIFIED_CONFIG.CACHE_KEY_PREFIX}_${country}`;
  const { searchHistory, savedPodcasts } = await podcastService.saveTopPodcasts(cacheKey, iTunesResponse.data.results);

  const podcastsWithEpisodes = await EpisodeService.fetchAndSaveEpisodesForPodcasts(savedPodcasts);

  const topEpisodes = extractTrendingEpisodes(podcastsWithEpisodes);

  const response = ApiResponseBuilder.createSearchResponse(
    podcastsWithEpisodes,
    'trending',
    country,
    {
      resultCount: iTunesResponse.data.resultCount,
      savedCount: savedPodcasts.length,
      searchHistoryId: searchHistory.id,
      timestamp: new Date().toISOString(),
      topEpisodes: topEpisodes
    }
  );

  return NextResponse.json(response);
}

async function handleSearchTerm(term: string, country: string): Promise<NextResponse> {
  const iTunesResponse = await itunesApi.searchPodcasts(term);
  
  if (!iTunesResponse.success) {
    const appError = iTunesResponse.error || AppErrorHandler.createError('SEARCH_FAILED', `Failed to search for "${term}"`);
    return NextResponse.json(
      HttpUtils.createErrorResponse(appError),
      { status: 500 }
    );
  }

  if (!iTunesResponse.data || iTunesResponse.data.resultCount === 0) {
    return NextResponse.json(
      ApiResponseBuilder.createErrorResponse(`No podcasts found for "${term}"`, term, country)
    );
  }

  const { searchHistory, savedPodcasts } = await podcastService.saveSearchResults(term, iTunesResponse.data.results);

  const podcastsWithEpisodes = await EpisodeService.fetchAndSaveEpisodesForPodcasts(savedPodcasts);

  const response = ApiResponseBuilder.createSearchResponse(
    podcastsWithEpisodes,
    term,
    country,
    {
      resultCount: iTunesResponse.data.resultCount,
      savedCount: savedPodcasts.length,
      searchHistoryId: searchHistory.id,
      timestamp: new Date().toISOString()
    }
  );

  return NextResponse.json(response);
}

 