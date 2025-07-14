import { useQuery } from '@tanstack/react-query';
import { Podcast, Episode } from '@/types';

interface TrendingResponse {
  podcasts: Podcast[];
  episodes: Episode[];
}

export function useTrendingData(initialData: TrendingResponse) {
  const {
    data,
    isLoading,
    error,
    refetch,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['trending-data'],
    queryFn: async (): Promise<TrendingResponse> => {
      const response = await fetch('/api/podcasts/search');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch trending data: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Handle different response formats
      if (data.success === false) {
        // Error response format: { success: false, error: string, details: unknown, status: number }
        throw new Error(data.error || 'Failed to fetch trending data');
      }
      
      // Success response format: SearchApiResponse (direct object with podcasts, message, etc.)
      if (!data.podcasts) {
        throw new Error(data.message || 'Failed to fetch trending data - no podcasts found');
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
    initialData,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });

  return {
    data,
    isLoading: isLoading || isFetching,
    error,
    refetch,
    isError,
  };
} 