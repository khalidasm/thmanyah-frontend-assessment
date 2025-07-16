import axios, { AxiosInstance } from 'axios';
import { 
  iTunesApiResponse, 
  ServiceResponse 
} from '@/types';
import { 
  ITUNES_API_CONFIG, 
  SEARCH_CONFIG
} from '@/constants';
import { 
  AppErrorHandler, 
  ValidationUtils, 
  HttpUtils 
} from '@/utils';

export class iTunesApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: ITUNES_API_CONFIG.baseUrl,
      timeout: ITUNES_API_CONFIG.timeout,
      headers: {
        'User-Agent': ITUNES_API_CONFIG.userAgent,
      },
    });
  }

  async searchPodcasts(
    term: string
  ): Promise<ServiceResponse<iTunesApiResponse>> {
    try {
      if (!ValidationUtils.isValidSearchTerm(term)) {
        return {
          success: false,
          error: AppErrorHandler.handleValidationError('Invalid search term'),
        };
      }

      const sanitizedTerm = ValidationUtils.sanitizeSearchTerm(term);
      
      const response = await HttpUtils.retryOperation(async () => {
        return this.client.get(ITUNES_API_CONFIG.searchEndpoint, {
          params: {
            term: sanitizedTerm,
            media: 'podcast',
          },
        });
      });

      const data: iTunesApiResponse = response.data;
      
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: AppErrorHandler.handleApiError(error),
      };
    }
  }

  async getTopPodcasts(): Promise<ServiceResponse<iTunesApiResponse>> {
    try {

      const response = await HttpUtils.retryOperation(async () => {
        return this.client.get(ITUNES_API_CONFIG.searchEndpoint, {
          params: {
            media: 'podcast',
          },
        });
      });

      const data: iTunesApiResponse = response.data;
      
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: AppErrorHandler.handleApiError(error),
      };
    }
  }

  async getTrendingPodcasts(): Promise<ServiceResponse<iTunesApiResponse>> {
    try {

      const response = await HttpUtils.retryOperation(async () => {
        return this.client.get(ITUNES_API_CONFIG.searchEndpoint, {
          params: {
            media: 'podcast',
            attribute: 'ratingIndex',
          },
        });
      });

      const data: iTunesApiResponse = response.data;
      
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: AppErrorHandler.handleApiError(error),
      };
    }
  }

  async getPodcastById(
    collectionId: number
  ): Promise<ServiceResponse<iTunesApiResponse>> {
    try {
      if (!collectionId || collectionId <= 0) {
        return {
          success: false,
          error: AppErrorHandler.handleValidationError('Invalid collection ID'),
        };
      }

      const response = await HttpUtils.retryOperation(async () => {
        return this.client.get(ITUNES_API_CONFIG.lookupEndpoint, {
          params: {
            id: collectionId,
            entity: 'podcast',
          },
        });
      });

      const data: iTunesApiResponse = response.data;
      
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: AppErrorHandler.handleApiError(error),
      };
    }
  }

  async searchWithFallback(
    primaryTerm: string
  ): Promise<ServiceResponse<iTunesApiResponse>> {
    const primaryResult = await this.searchPodcasts(primaryTerm);
    if (primaryResult.success && primaryResult.data && primaryResult.data.resultCount > 0) {
      return primaryResult;
    }

    for (const fallbackTerm of SEARCH_CONFIG.fallbackTerms) {
      const fallbackResult = await this.searchPodcasts(fallbackTerm);
      if (fallbackResult.success && fallbackResult.data && fallbackResult.data.resultCount > 0) {
        return fallbackResult;
      }
    }

    return await this.getTrendingPodcasts();
  }

  async getPodcastsWithFallback(): Promise<ServiceResponse<iTunesApiResponse>> {
    const popularTerms = ['podcast', 'news', 'technology', 'business', 'entertainment', 'comedy', 'true crime'];
    
    for (const term of popularTerms) {
      const searchResult = await this.searchPodcasts(term);
      if (searchResult.success && searchResult.data && searchResult.data.resultCount > 0) {
        return searchResult;
      }
    }

    return {
      success: false,
      error: AppErrorHandler.createError('NO_RESULTS', 'No podcasts found with any strategy'),
    };
  }

  async getTopEpisodes(): Promise<ServiceResponse<iTunesApiResponse>> {
    try {
      const popularTerms = ['podcast', 'news', 'technology', 'business'];
      
      for (const term of popularTerms) {
        const response = await HttpUtils.retryOperation(async () => {
          return this.client.get(ITUNES_API_CONFIG.searchEndpoint, {
            params: {
              term: term,
              media: 'podcast',
              entity: 'podcastEpisode',
            },
          });
        });

        const data: iTunesApiResponse = response.data;
        
        if (data.resultCount > 0) {
          return {
            success: true,
            data,
          };
        }
      }

      return {
        success: false,
        error: AppErrorHandler.createError('NO_RESULTS', 'No episodes found'),
      };
    } catch (error) {
      return {
        success: false,
        error: AppErrorHandler.handleApiError(error),
      };
    }
  }
}

export const itunesApi = new iTunesApiService(); 