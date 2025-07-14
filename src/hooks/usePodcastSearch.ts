import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@/hooks/useDebounce';
import { Podcast, Episode } from '@/types';

interface SearchResponse {
  podcasts: Podcast[];
  episodes: Episode[];
}

interface UsePodcastSearchOptions {
  searchTerm: string;
  enabled?: boolean;
  debounceMs?: number;
}

export function usePodcastSearch({ 
  searchTerm, 
  enabled = true, 
  debounceMs = 500 
}: UsePodcastSearchOptions) {
  const debouncedSearchTerm = useDebounce(searchTerm, debounceMs);
  
  const {
    data,
    isLoading,
    error,
    refetch,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['podcast-search', debouncedSearchTerm],
    queryFn: async (): Promise<SearchResponse> => {
      if (!debouncedSearchTerm.trim()) {
        return { podcasts: [], episodes: [] };
      }

      const response = await fetch(`/api/podcasts/search?term=${encodeURIComponent(debouncedSearchTerm)}`);
      
      if (!response.ok) {
        throw new Error(`Search failed: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Handle different response formats
      if (data.success === false) {
        // Error response format: { success: false, error: string, details: unknown, status: number }
        throw new Error(data.error || 'Search failed');
      }
      
      // Success response format: SearchApiResponse (direct object with podcasts, message, etc.)
      if (!data.podcasts) {
        throw new Error(data.message || 'Search failed - no podcasts found');
      }

      // Process episodes and deduplicate them
      const allEpisodes = data.podcasts?.flatMap((podcast: Podcast) => 
        podcast.episodes?.map((episode: Episode) => ({
          ...episode,
          podcastName: podcast.collectionName,
          podcastArtist: podcast.artistName,
          podcastArtwork: podcast.artworkUrl100
        })) || []
      ) || [];

      // Deduplicate episodes based on a unique identifier
      const uniqueEpisodes = allEpisodes.filter((episode: Episode, index: number, self: Episode[]) => {
        const episodeKey = episode.guid || episode.id || `${episode.podcastId}-${episode.title}`;
        return index === self.findIndex(e => {
          const eKey = e.guid || e.id || `${e.podcastId}-${e.title}`;
          return eKey === episodeKey;
        });
      });

      return {
        podcasts: data.podcasts || [],
        episodes: uniqueEpisodes
      };
    },
    enabled: enabled && debouncedSearchTerm.trim().length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  return {
    data,
    isLoading: isLoading || isFetching,
    error,
    refetch,
    isError,
    debouncedSearchTerm,
    hasSearched: debouncedSearchTerm.trim().length > 0,
  };
} 