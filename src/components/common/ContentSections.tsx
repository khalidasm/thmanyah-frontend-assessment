'use client';

import { PodcastGrid } from '@/components/podcast';
import { EpisodeGrid } from '@/components/episode';
import { Podcast, Episode } from '@/types';
import { useTrendingData } from '@/hooks';
import { useSearchContext } from '@/contexts/SearchContext';

interface ContentSectionsProps {
  initialTrendingData: {
    podcasts: Podcast[];
    episodes: Episode[];
  };
}

interface SearchResultsType {
  podcasts: Podcast[];
  episodes: Episode[];
}

const ContentSections = ({ initialTrendingData }: ContentSectionsProps) => {
  const { data: trendingData } = useTrendingData(initialTrendingData);
  const { searchResults, hasSearched, isLoading, error } = useSearchContext();

  const podcasts = hasSearched ? (searchResults as SearchResultsType)?.podcasts || [] : trendingData?.podcasts || [];
  const episodes = hasSearched ? (searchResults as SearchResultsType)?.episodes || [] : trendingData?.episodes || [];
  const context = hasSearched ? 'search' : 'trending';

  return (
    <div className='flex flex-col gap-4'>
      {isLoading && hasSearched && (
        <div className="text-center py-8">
          <p>Searching for podcasts...</p>
        </div>
      )}

      {error && hasSearched && (
        <div className="text-center py-8 text-red-600">
          <p>Error: {error.message}</p>
        </div>
      )}

      {hasSearched && !isLoading && !error && podcasts.length === 0 && episodes.length === 0 && (
        <div className="text-center py-8">
          <p>No podcasts or episodes found for your search.</p>
        </div>
      )}

      {podcasts.length > 0 && (
        <section>
          <PodcastGrid 
            podcasts={podcasts} 
            context={context}
          />
        </section>
      )}
      {episodes.length > 0 && (
        <section>
          <EpisodeGrid 
            episodes={episodes} 
            context={context}
          />
        </section>
      )}
    </div>
  );
} 

export default ContentSections;