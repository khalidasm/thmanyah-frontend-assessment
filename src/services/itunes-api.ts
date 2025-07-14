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

  /**
   * Search for podcasts using iTunes API
   */
  async searchPodcasts(
    term: string
  ): Promise<ServiceResponse<iTunesApiResponse>> {
    try {
      // Validate inputs
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

  /**
   * Get top podcasts for a specific country
   */
  async getTopPodcasts(): Promise<ServiceResponse<iTunesApiResponse>> {
    try {

      const response = await HttpUtils.retryOperation(async () => {
        return this.client.get(ITUNES_API_CONFIG.searchEndpoint, {
          params: {
            media: 'podcast',
            // Remove country, entity, and limit to match direct iTunes API behavior
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

  /**
   * Get trending podcasts for a specific country
   */
  async getTrendingPodcasts(): Promise<ServiceResponse<iTunesApiResponse>> {
    try {

      const response = await HttpUtils.retryOperation(async () => {
        return this.client.get(ITUNES_API_CONFIG.searchEndpoint, {
          params: {
            media: 'podcast',
            attribute: 'ratingIndex',
            // Remove country, entity, and limit to match direct iTunes API behavior
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

  /**
   * Get podcast details by collection ID
   */
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

  /**
   * Try multiple search terms to find podcasts
   */
  async searchWithFallback(
    primaryTerm: string
  ): Promise<ServiceResponse<iTunesApiResponse>> {
    // Try primary term first
    const primaryResult = await this.searchPodcasts(primaryTerm);
    if (primaryResult.success && primaryResult.data && primaryResult.data.resultCount > 0) {
      return primaryResult;
    }

    // Try fallback terms
    for (const fallbackTerm of SEARCH_CONFIG.fallbackTerms) {
      const fallbackResult = await this.searchPodcasts(fallbackTerm);
      if (fallbackResult.success && fallbackResult.data && fallbackResult.data.resultCount > 0) {
        return fallbackResult;
      }
    }

    // Try trending podcasts as last resort
    return await this.getTrendingPodcasts();
  }

  /**
   * Get podcasts with multiple fallback strategies
   */
  async getPodcastsWithFallback(): Promise<ServiceResponse<iTunesApiResponse>> {
    // Try popular search terms to get top podcasts
    const popularTerms = ['podcast', 'news', 'technology', 'business', 'entertainment', 'comedy', 'true crime'];
    
    for (const term of popularTerms) {
      const searchResult = await this.searchPodcasts(term);
      if (searchResult.success && searchResult.data && searchResult.data.resultCount > 0) {
        return searchResult;
      }
    }

    // Since we removed country-specific behavior, we don't need the US fallback anymore
    // The API will return global results by default

    return {
      success: false,
      error: AppErrorHandler.createError('NO_RESULTS', 'No podcasts found with any strategy'),
    };
  }

  /**
   * Get top episodes
   */
  async getTopEpisodes(): Promise<ServiceResponse<iTunesApiResponse>> {
    try {
      // Try to get episodes by searching for popular podcast terms
      const popularTerms = ['podcast', 'news', 'technology', 'business'];
      
      for (const term of popularTerms) {
        const response = await HttpUtils.retryOperation(async () => {
          return this.client.get(ITUNES_API_CONFIG.searchEndpoint, {
            params: {
              term: term,
              media: 'podcast',
              entity: 'podcastEpisode',
              // Remove country and limit to match direct iTunes API behavior
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

// Export singleton instance
export const itunesApi = new iTunesApiService(); 