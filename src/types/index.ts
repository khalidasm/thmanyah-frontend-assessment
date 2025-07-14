// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface SearchApiResponse {
  message: string;
  source: 'itunes';
  searchTerm: string;
  country: string;
  podcasts: Podcast[];
  resultCount: number;
  savedCount?: number;
  cached: boolean;
  searchHistoryId?: string;
  timestamp?: string;
  topEpisodes?: Episode[];
}

// iTunes API Types
export interface iTunesPodcastResult {
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionViewUrl: string;
  feedUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl600: string;
  releaseDate: string;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl30_2x: string;
  artworkUrl60_2x: string;
  artworkUrl100_2x: string;
  artworkUrl600_2x: string;
  artistViewUrl: string;
  trackCensoredName: string;
  collectionCensoredName: string;
  artistId: number;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  trackHdPrice: number;
  trackHdRentalPrice: number;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  copyright: string;
  description: string;
  shortDescription: string;
  longDescription: string;
  genres: string[];
}

export interface iTunesApiResponse {
  resultCount: number;
  results: iTunesPodcastResult[];
}

// Frontend Types (for API responses)
export interface Podcast {
  id: string;
  collectionId: number;
  collectionName: string;
  artistName: string | null;
  primaryGenreName: string | null;
  description?: string | null;
  artworkUrl100?: string | null;
  feedUrl?: string | null;
  episodes?: Episode[];
  genres: Genre[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Genre {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Episode {
  id: string;
  title: string;
  description?: string | null;
  duration?: number | null;
  pubDate?: Date | null;
  guid?: string | null;
  enclosureUrl?: string | null;
  enclosureType?: string | null;
  enclosureLength?: number | null;
  itunesDuration?: string | null;
  itunesExplicit?: boolean | null;
  itunesImage?: string | null;
  itunesOrder?: number | null;
  itunesSubtitle?: string | null;
  itunesSummary?: string | null;
  itunesKeywords?: string | null;
  itunesAuthor?: string | null;
  podcastId: string;
  podcastName?: string | null;
  podcastArtist?: string | null;
  podcastArtwork?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface EpisodeData {
  title: string;
  description?: string;
  duration?: number;
  pubDate?: Date;
  guid?: string;
  enclosureUrl?: string;
  enclosureType?: string;
  enclosureLength?: number;
  itunesDuration?: string;
  itunesExplicit?: boolean;
  itunesImage?: string;
  itunesOrder?: number;
  itunesSubtitle?: string;
  itunesSummary?: string;
  itunesKeywords?: string;
  itunesAuthor?: string;
}

// Search Types
export interface SearchHistory {
  id: string;
  term: string;
  resultCount: number;
  podcasts?: Podcast[];
  createdAt: Date;
  updatedAt: Date;
}

// Frontend Types
export interface SearchResult {
  message: string;
  source: 'itunes';
  searchTerm: string;
  country: string;
  podcasts: Podcast[];
  resultCount: number;
  savedCount?: number;
  cached: boolean;
  searchHistoryId?: string;
  timestamp?: string;
  topEpisodes?: Episode[];
}

// Configuration Types
export interface AppConfig {
  country: string;
  defaultLimit: number;
  debounceDelay: number;
  itemsPerPage: number;
  maxEpisodesPerPodcast: number;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: unknown;
  timestamp: Date;
}

// Service Response Types
export interface ServiceResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: AppError;
}

export interface PodcastServiceResponse {
  searchHistory: SearchHistory;
  savedPodcasts: Podcast[];
}

// Re-export database types
export * from './database'; 