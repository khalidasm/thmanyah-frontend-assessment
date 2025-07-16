import { PrismaClient } from '@prisma/client';
import { 
  iTunesPodcastResult, 
  EpisodeData, 
  PodcastServiceResponse,
  DatabasePodcast,
  DatabaseSearchHistory,
  Podcast,
  SearchHistory,
  DatabaseEpisode
} from '@/types';
import { 
  RSS_CONFIG
} from '@/constants';
import { 
  AppErrorHandler, 
  ValidationUtils, 
  HttpUtils,
  TypeConverters,
  StringUtils
} from '@/utils';
import axios from 'axios';

export class PodcastService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async saveTopPodcasts(
    term: string, 
    podcasts: iTunesPodcastResult[]
  ): Promise<PodcastServiceResponse> {
    try {
      const searchHistory = await this.prisma.searchHistory.upsert({
        where: { term },
        update: {
          resultCount: podcasts.length,
          updatedAt: new Date()
        },
        create: {
          term,
          resultCount: podcasts.length
        }
      });

      const savedPodcasts = await this.savePodcastsToDatabase(podcasts, searchHistory.id);

      return {
        searchHistory: TypeConverters.toSearchHistory(searchHistory as DatabaseSearchHistory),
        savedPodcasts: TypeConverters.toPodcasts(savedPodcasts)
      };
    } catch (error) {
      throw AppErrorHandler.handleDatabaseError(error);
    }
  }

  async saveSearchResults(
    term: string, 
    podcasts: iTunesPodcastResult[]
  ): Promise<PodcastServiceResponse> {
    try {
      const sanitizedTerm = ValidationUtils.sanitizeSearchTerm(term);
      
      const searchHistory = await this.prisma.searchHistory.upsert({
        where: { term: sanitizedTerm },
        update: {
          resultCount: podcasts.length,
          updatedAt: new Date()
        },
        create: {
          term: sanitizedTerm,
          resultCount: podcasts.length
        }
      });

      const savedPodcasts = await this.savePodcastsToDatabase(podcasts, searchHistory.id);

      return {
        searchHistory: TypeConverters.toSearchHistory(searchHistory as DatabaseSearchHistory),
        savedPodcasts: TypeConverters.toPodcasts(savedPodcasts)
      };
    } catch (error) {
      throw AppErrorHandler.handleDatabaseError(error);
    }
  }

  private async savePodcastsToDatabase(
    podcasts: iTunesPodcastResult[], 
    searchHistoryId: string
  ): Promise<DatabasePodcast[]> {
    const savedPodcasts: DatabasePodcast[] = [];

    for (const podcast of podcasts) {
      try {
        const existingPodcast = await this.prisma.podcast.findUnique({
          where: { collectionId: podcast.collectionId }
        });

        if (existingPodcast) {
          if (existingPodcast.searchHistoryId !== searchHistoryId) {
            await this.prisma.podcast.update({
              where: { id: existingPodcast.id },
              data: { searchHistoryId }
            });
          }
          savedPodcasts.push(existingPodcast as DatabasePodcast);
          continue;
        }

        const genreConnections = await this.handleGenres(podcast.genres);

        const releaseDate = podcast.releaseDate ? new Date(podcast.releaseDate) : null;

        const savedPodcast = await this.prisma.podcast.create({
          data: {
            collectionId: podcast.collectionId,
            trackId: podcast.trackId,
            artistName: podcast.artistName,
            collectionName: podcast.collectionName,
            trackName: podcast.trackName,
            collectionViewUrl: podcast.collectionViewUrl,
            feedUrl: podcast.feedUrl,
            artworkUrl30: podcast.artworkUrl30,
            artworkUrl60: podcast.artworkUrl60,
            artworkUrl100: podcast.artworkUrl100,
            artworkUrl600: podcast.artworkUrl600,
            releaseDate: releaseDate,
            trackTimeMillis: podcast.trackTimeMillis,
            country: podcast.country,
            currency: podcast.currency,
            primaryGenreName: podcast.primaryGenreName,
            contentAdvisoryRating: podcast.contentAdvisoryRating,
            artworkUrl30_2x: podcast.artworkUrl30_2x,
            artworkUrl60_2x: podcast.artworkUrl60_2x,
            artworkUrl100_2x: podcast.artworkUrl100_2x,
            artworkUrl600_2x: podcast.artworkUrl600_2x,
            artistViewUrl: podcast.artistViewUrl,
            trackCensoredName: podcast.trackCensoredName,
            collectionCensoredName: podcast.collectionCensoredName,
            artistId: podcast.artistId,
            collectionPrice: podcast.collectionPrice,
            trackPrice: podcast.trackPrice,
            collectionHdPrice: podcast.collectionHdPrice,
            trackHdPrice: podcast.trackHdPrice,
            trackHdRentalPrice: podcast.trackHdRentalPrice,
            collectionExplicitness: podcast.collectionExplicitness,
            trackExplicitness: podcast.trackExplicitness,
            trackCount: podcast.trackCount,
            copyright: podcast.copyright,
            description: podcast.description,
            shortDescription: podcast.shortDescription,
            longDescription: podcast.longDescription,
            searchHistoryId,
            genres: {
              connect: genreConnections
            }
          },
          include: {
            genres: true
          }
        });

        savedPodcasts.push(savedPodcast as DatabasePodcast);

      } catch (error) {
        console.error(`Error saving podcast ${podcast.collectionName}:`, error);
      }
    }

    return savedPodcasts;
  }

  private async saveEpisodesToDatabase(
    episodes: EpisodeData[], 
    podcastId: string
  ): Promise<DatabaseEpisode[]> {
    const savedEpisodes: DatabaseEpisode[] = [];

    for (const episodeData of episodes) {
      try {
        if (episodeData.guid) {
          const existingEpisode = await this.prisma.episode.findFirst({
            where: { guid: episodeData.guid }
          });

          if (existingEpisode) {
            savedEpisodes.push(existingEpisode as DatabaseEpisode);
            continue;
          }
        }

        const savedEpisode = await this.prisma.episode.create({
          data: {
            podcastId,
            title: episodeData.title,
            description: episodeData.description,
            duration: episodeData.duration,
            pubDate: episodeData.pubDate,
            guid: episodeData.guid,
            enclosureUrl: episodeData.enclosureUrl,
            enclosureType: episodeData.enclosureType,
            enclosureLength: episodeData.enclosureLength,
            itunesDuration: episodeData.itunesDuration,
            itunesExplicit: episodeData.itunesExplicit,
            itunesImage: episodeData.itunesImage,
            itunesOrder: episodeData.itunesOrder,
            itunesSubtitle: episodeData.itunesSubtitle,
            itunesSummary: episodeData.itunesSummary,
            itunesKeywords: episodeData.itunesKeywords,
            itunesAuthor: episodeData.itunesAuthor
          }
        });

        savedEpisodes.push(savedEpisode as DatabaseEpisode);
      } catch (error) {
        console.error(`Error saving episode ${episodeData.title}:`, error);
      }
    }

    return savedEpisodes;
  }

  async fetchAndSavePodcastEpisodes(podcastId: string, feedUrl: string): Promise<DatabaseEpisode[]> {
    try {
      const episodes = await this.fetchPodcastEpisodes(feedUrl);
      return await this.saveEpisodesToDatabase(episodes, podcastId);
    } catch (error) {
      console.error(`Error fetching and saving episodes for podcast ${podcastId}:`, error);
      return [];
    }
  }

  async fetchPodcastEpisodes(feedUrl: string): Promise<EpisodeData[]> {
    try {
      if (!RSS_CONFIG.enabled) {
        console.log('RSS fetching is disabled in configuration');
        return [];
      }

      if (!ValidationUtils.isValidUrl(feedUrl)) {
        throw new Error('Invalid RSS feed URL');
      }

      const response = await HttpUtils.retryOperation(async () => {
        return axios.get(feedUrl, {
          timeout: RSS_CONFIG.timeout,
          headers: {
            'User-Agent': RSS_CONFIG.userAgent,
            'Accept': RSS_CONFIG.acceptHeaders,
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Referer': new URL(feedUrl).origin,
          },
          maxRedirects: 5,
          validateStatus: (status) => status < 500,
        });
      }, RSS_CONFIG.maxRetries, RSS_CONFIG.retryDelay);

      const xmlText = response.data;
      const episodes: EpisodeData[] = [];

      const itemMatches = xmlText.match(/<item[^>]*>([\s\S]*?)<\/item>/gi);
      
      if (itemMatches) {
        for (const item of itemMatches.slice(0, RSS_CONFIG.maxEpisodes)) {
          try {
            const episode = this.parseEpisodeFromRSS(item);
            if (episode) {
              episodes.push(episode);
            }
          } catch (error) {
            console.error('Error parsing episode:', error);
          }
        }
      }

      return episodes;
    } catch (error: unknown) {
      const axiosError = error as { response?: { status?: number }; code?: string; message?: string };
      if (axiosError.response?.status === 403) {
        console.warn(`Access forbidden (403) for RSS feed: ${feedUrl}. This feed may require authentication or have strict access controls.`);
      } else if (axiosError.response?.status === 404) {
        console.warn(`RSS feed not found (404): ${feedUrl}`);
      } else if (axiosError.code === 'ECONNABORTED') {
        console.warn(`RSS feed request timeout: ${feedUrl}`);
      } else {
        console.error(`Error fetching episodes from ${feedUrl}:`, axiosError.message || error);
      }
      return [];
    }
  }

  private parseEpisodeFromRSS(itemXml: string): EpisodeData | null {
    try {
      const getTextContent = (tag: string): string | undefined => {
        const match = itemXml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
        return match ? match[1].trim() : undefined;
      };

      const getAttribute = (tag: string, attribute: string): string | undefined => {
        const match = itemXml.match(new RegExp(`<${tag}[^>]*${attribute}=["']([^"']*)["'][^>]*>`, 'i'));
        return match ? match[1] : undefined;
      };

      const rawTitle = getTextContent('title');
      if (!rawTitle) return null;

      const title = StringUtils.cleanXmlContent(rawTitle);
      const description = StringUtils.cleanXmlContent(getTextContent('description') || getTextContent('summary') || '');
      const pubDateStr = getTextContent('pubDate');
      const pubDate = pubDateStr ? new Date(pubDateStr) : undefined;
      
      const guid = getTextContent('guid');
      const enclosureUrl = getAttribute('enclosure', 'url');
      const enclosureType = getAttribute('enclosure', 'type');
      const enclosureLengthStr = getAttribute('enclosure', 'length');
      const enclosureLength = enclosureLengthStr ? parseInt(enclosureLengthStr) : undefined;

      const itunesDuration = getTextContent('itunes\\:duration');
      const itunesExplicitStr = getTextContent('itunes\\:explicit');
      const itunesExplicit = itunesExplicitStr ? itunesExplicitStr.toLowerCase() === 'true' : undefined;
      const itunesImage = getAttribute('itunes\\:image', 'href');
      const itunesOrderStr = getTextContent('itunes\\:order');
      const itunesOrder = itunesOrderStr ? parseInt(itunesOrderStr) : undefined;
      const itunesSubtitle = StringUtils.cleanXmlContent(getTextContent('itunes\\:subtitle') || '');
      const itunesSummary = StringUtils.cleanXmlContent(getTextContent('itunes\\:summary') || '');
      const itunesKeywords = StringUtils.cleanXmlContent(getTextContent('itunes\\:keywords') || '');
      const itunesAuthor = StringUtils.cleanXmlContent(getTextContent('itunes\\:author') || '');

      let duration: number | undefined;
      if (itunesDuration) {
        const durationMatch = itunesDuration.match(/(\d+):(\d+):(\d+)/);
        if (durationMatch) {
          duration = parseInt(durationMatch[1]) * 3600 + parseInt(durationMatch[2]) * 60 + parseInt(durationMatch[3]);
        } else {
          const simpleMatch = itunesDuration.match(/(\d+):(\d+)/);
          if (simpleMatch) {
            duration = parseInt(simpleMatch[1]) * 60 + parseInt(simpleMatch[2]);
          }
        }
      } else if (enclosureLength) {
        duration = Math.round(enclosureLength / 1000);
      }

      return {
        title,
        description,
        duration,
        pubDate,
        guid,
        enclosureUrl,
        enclosureType,
        enclosureLength,
        itunesDuration,
        itunesExplicit,
        itunesImage,
        itunesOrder,
        itunesSubtitle,
        itunesSummary,
        itunesKeywords,
        itunesAuthor
      };
    } catch (error) {
      console.error('Error parsing episode from RSS:', error);
      return null;
    }
  }

  private async handleGenres(genreNames: string[]) {
    const genreConnections = [];

    for (const genreName of genreNames) {
      if (!genreName) continue;

      try {
        const genre = await this.prisma.genre.upsert({
          where: { name: genreName },
          update: {},
          create: { name: genreName }
        });

        genreConnections.push({ id: genre.id });
      } catch (error) {
        console.error(`Error handling genre ${genreName}:`, error);
      }
    }

    return genreConnections;
  }

  async getAllPodcasts(): Promise<Podcast[]> {
    try {
      const dbPodcasts = await this.prisma.podcast.findMany({
        include: {
          genres: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return TypeConverters.toPodcasts(dbPodcasts as DatabasePodcast[]);
    } catch (error) {
      throw AppErrorHandler.handleDatabaseError(error);
    }
  }

  async getPodcastById(id: string): Promise<Podcast | null> {
    try {
      const dbPodcast = await this.prisma.podcast.findUnique({
        where: { id },
        include: {
          genres: true,
          episodes: true
        }
      });

      return dbPodcast ? TypeConverters.toPodcast(dbPodcast as DatabasePodcast) : null;
    } catch (error) {
      throw AppErrorHandler.handleDatabaseError(error);
    }
  }

  async searchPodcasts(query: string): Promise<Podcast[]> {
    try {
      const dbPodcasts = await this.prisma.podcast.findMany({
        where: {
          OR: [
            { collectionName: { contains: query, mode: 'insensitive' } },
            { artistName: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } }
          ]
        },
        include: {
          genres: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return TypeConverters.toPodcasts(dbPodcasts as DatabasePodcast[]);
    } catch (error) {
      throw AppErrorHandler.handleDatabaseError(error);
    }
  }

  async getSearchHistory(): Promise<SearchHistory[]> {
    try {
      const dbSearchHistory = await this.prisma.searchHistory.findMany({
        include: {
          podcasts: {
            include: {
              genres: true
            }
          }
        },
        orderBy: {
          updatedAt: 'desc'
        }
      });

      return dbSearchHistory.map((sh: unknown) => TypeConverters.toSearchHistory(sh as DatabaseSearchHistory));
    } catch (error) {
      throw AppErrorHandler.handleDatabaseError(error);
    }
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}

export const podcastService = new PodcastService(); 