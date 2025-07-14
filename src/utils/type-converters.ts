import { 
  DatabasePodcast, 
  DatabaseEpisode, 
  DatabaseGenre, 
  DatabaseSearchHistory,
  Podcast, 
  Episode, 
  Genre, 
  SearchHistory,
  EpisodeData 
} from '@/types';

export class TypeConverters {
  /**
   * Convert database podcast to frontend podcast
   */
  static toPodcast(dbPodcast: DatabasePodcast): Podcast {
    return {
      id: dbPodcast.id,
      collectionId: dbPodcast.collectionId,
      collectionName: dbPodcast.collectionName,
      artistName: dbPodcast.artistName,
      primaryGenreName: dbPodcast.primaryGenreName,
      description: dbPodcast.description,
      artworkUrl100: dbPodcast.artworkUrl100,
      feedUrl: dbPodcast.feedUrl,
      genres: dbPodcast.genres?.map(genre => TypeConverters.toGenre(genre)) || [],
      episodes: dbPodcast.episodes?.map(episode => TypeConverters.toEpisode(episode)) || [],
      createdAt: dbPodcast.createdAt,
      updatedAt: dbPodcast.updatedAt,
    };
  }

  /**
   * Convert database episode to frontend episode
   */
  static toEpisode(dbEpisode: DatabaseEpisode): Episode {
    return {
      id: dbEpisode.id,
      title: dbEpisode.title,
      description: dbEpisode.description,
      duration: dbEpisode.duration,
      pubDate: dbEpisode.pubDate,
      guid: dbEpisode.guid,
      enclosureUrl: dbEpisode.enclosureUrl,
      enclosureType: dbEpisode.enclosureType,
      enclosureLength: dbEpisode.enclosureLength,
      itunesDuration: dbEpisode.itunesDuration,
      itunesExplicit: dbEpisode.itunesExplicit,
      itunesImage: dbEpisode.itunesImage,
      itunesOrder: dbEpisode.itunesOrder,
      itunesSubtitle: dbEpisode.itunesSubtitle,
      itunesSummary: dbEpisode.itunesSummary,
      itunesKeywords: dbEpisode.itunesKeywords,
      itunesAuthor: dbEpisode.itunesAuthor,
      podcastId: dbEpisode.podcastId,
      createdAt: dbEpisode.createdAt,
      updatedAt: dbEpisode.updatedAt,
    };
  }

  /**
   * Convert database genre to frontend genre
   */
  static toGenre(dbGenre: DatabaseGenre): Genre {
    return {
      id: dbGenre.id,
      name: dbGenre.name,
      createdAt: dbGenre.createdAt,
      updatedAt: dbGenre.updatedAt,
    };
  }

  /**
   * Convert database search history to frontend search history
   */
  static toSearchHistory(dbSearchHistory: DatabaseSearchHistory): SearchHistory {
    return {
      id: dbSearchHistory.id,
      term: dbSearchHistory.term,
      resultCount: dbSearchHistory.resultCount,
      podcasts: dbSearchHistory.podcasts?.map(podcast => TypeConverters.toPodcast(podcast)),
      createdAt: dbSearchHistory.createdAt,
      updatedAt: dbSearchHistory.updatedAt,
    };
  }

  /**
   * Convert episode data to frontend episode with podcast info
   */
  static episodeDataToEpisode(
    episodeData: EpisodeData, 
    podcastName: string, 
    podcastArtist: string, 
    podcastArtwork?: string
  ): Episode {
    return {
      id: episodeData.guid || `episode_${Date.now()}_${Math.random()}`,
      title: episodeData.title,
      description: episodeData.description || null,
      duration: episodeData.duration || null,
      pubDate: episodeData.pubDate || null,
      guid: episodeData.guid || null,
      enclosureUrl: episodeData.enclosureUrl || null,
      enclosureType: episodeData.enclosureType || null,
      enclosureLength: episodeData.enclosureLength || null,
      itunesDuration: episodeData.itunesDuration || null,
      itunesExplicit: episodeData.itunesExplicit || null,
      itunesImage: episodeData.itunesImage || null,
      itunesOrder: episodeData.itunesOrder || null,
      itunesSubtitle: episodeData.itunesSubtitle || null,
      itunesSummary: episodeData.itunesSummary || null,
      itunesKeywords: episodeData.itunesKeywords || null,
      itunesAuthor: episodeData.itunesAuthor || null,
      podcastId: `podcast_${Date.now()}`,
      podcastName,
      podcastArtist,
      podcastArtwork,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  /**
   * Convert array of database podcasts to frontend podcasts
   */
  static toPodcasts(dbPodcasts: DatabasePodcast[]): Podcast[] {
    return dbPodcasts.map(this.toPodcast);
  }

  /**
   * Convert array of database episodes to frontend episodes
   */
  static toEpisodes(dbEpisodes: DatabaseEpisode[]): Episode[] {
    return dbEpisodes.map(this.toEpisode);
  }

  /**
   * Convert array of database genres to frontend genres
   */
  static toGenres(dbGenres: DatabaseGenre[]): Genre[] {
    return dbGenres.map(this.toGenre);
  }
} 