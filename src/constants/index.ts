import { AppConfig } from '@/types';

// Application Configuration
export const APP_CONFIG: AppConfig = {
  country: 'SA',
  defaultLimit: 50,
  debounceDelay: 500,
  itemsPerPage: 12,
  maxEpisodesPerPodcast: 5,
};

// iTunes API Configuration
export const ITUNES_API_CONFIG = {
  baseUrl: 'https://itunes.apple.com',
  searchEndpoint: '/search',
  lookupEndpoint: '/lookup',
  timeout: 10000,
  userAgent: 'Mozilla/5.0 (compatible; PodcastBot/1.0)',
};

// RSS Feed Configuration
export const RSS_CONFIG = {
  timeout: 15000,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  maxEpisodes: 10,
  maxRetries: 2,
  retryDelay: 2000,
  acceptHeaders: 'application/rss+xml, application/xml, text/xml, application/atom+xml, */*',
  enabled: true, // Set to false to disable RSS fetching entirely
  skipOnError: true, // Skip RSS fetching for podcasts that have failed before
};

// Search Configuration
export const SEARCH_CONFIG = {
  fallbackTerms: ['podcast', 'news', 'technology', 'business', 'entertainment'],
  maxRetries: 3,
  retryDelay: 1000,
};

// Error Messages
export const ERROR_MESSAGES = {
  ITUNES_API_ERROR: 'Failed to fetch data from iTunes API',
  RSS_FEED_ERROR: 'Failed to fetch podcast episodes',
  DATABASE_ERROR: 'Database operation failed',
  VALIDATION_ERROR: 'Invalid input data',
  NOT_FOUND: 'Resource not found',
  RATE_LIMIT: 'Rate limit exceeded',
  NETWORK_ERROR: 'Network connection failed',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  PODCASTS_LOADED: 'Podcasts loaded successfully',
  EPISODES_LOADED: 'Episodes loaded successfully',
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const; 