import { Podcast } from '@/types';
import { podcastService } from './podcast-service';
import { TypeConverters } from '@/utils';
import { APP_CONFIG } from '@/constants';

export class EpisodeService {
  static async fetchAndSaveEpisodesForPodcasts(podcasts: Podcast[]): Promise<Podcast[]> {
    return await Promise.all(
      podcasts.map(async (podcast) => {
        try {
          if (podcast.feedUrl && podcast.id) {
            const savedEpisodes = await podcastService.fetchAndSavePodcastEpisodes(podcast.id, podcast.feedUrl);
            
            const convertedEpisodes = savedEpisodes
              .slice(0, APP_CONFIG.maxEpisodesPerPodcast)
              .map(dbEpisode => TypeConverters.toEpisode(dbEpisode));
            
            return {
              ...podcast,
              episodes: convertedEpisodes
            };
          }
          return {
            ...podcast,
            episodes: []
          };
        } catch (error) {
          console.error(`Failed to fetch and save episodes for ${podcast.collectionName}:`, error);
          return {
            ...podcast,
            episodes: []
          };
        }
      })
    );
  }

  static getTotalEpisodeCount(podcasts: Podcast[]): number {
    return podcasts.reduce((total, podcast) => total + (podcast.episodes?.length || 0), 0);
  }

  static getAllEpisodes(podcasts: Podcast[]) {
    return podcasts.flatMap(podcast => 
      podcast.episodes?.map(episode => ({
        ...episode,
        podcastName: podcast.collectionName,
        podcastArtist: podcast.artistName,
        podcastArtwork: podcast.artworkUrl100
      })) || []
    );
  }
} 