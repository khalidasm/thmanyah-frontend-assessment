'use client';

import { LoadingSpinner } from '@/components/common';
import { ContentSections } from '@/components/common';
import { Podcast, Episode } from '@/types';
import { useTrendingData } from '@/hooks';
import { useSearchContext } from '@/contexts/SearchContext';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Search } from 'lucide-react';

interface SearchClientProps {
  initialTrendingData: {
    podcasts: Podcast[];
    episodes: Episode[];
  };
}

const SearchClient = ({ initialTrendingData }: SearchClientProps) => {
  const { isLoading: trendingLoading, error: trendingError } = useTrendingData(initialTrendingData);
  const { 
    searchTerm,
    searchResults,
    hasSearched,
    isLoading: searchLoading, 
    error: searchError
  } = useSearchContext();
  
  const isLoading = trendingLoading || (searchLoading && hasSearched);
  const error = trendingError || searchError;

  interface SearchResultsType {
    podcasts: unknown[];
    episodes: unknown[];
  }
  const typedSearchResults = searchResults as SearchResultsType | undefined;
  const searchResultsPodcasts = typedSearchResults?.podcasts || [];
  const searchResultsEpisodes = typedSearchResults?.episodes || [];

  return (
    <div className='flex flex-col gap-4'>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div>
            <LoadingSpinner />
          </motion.div>
        )}
        {error && (
          <motion.div>
            <div>
              <div>
                <AlertCircle />
              </div>
              <h3>Something went wrong</h3>
              <p>{error.message}</p>
              <button onClick={() => window.location.reload()}>
                Try Again
              </button>
            </div>
          </motion.div>
        )}
        {!isLoading && !error && (
          <motion.div className='flex flex-col gap-4'>
            <ContentSections initialTrendingData={initialTrendingData} />
          </motion.div>
        )}
        {!isLoading && hasSearched && searchResultsPodcasts.length === 0 && 
         searchResultsEpisodes.length === 0 && (
          <motion.div className='flex flex-col gap-4'>
            <div>
              <div>
                <Search />
              </div>
              <h3>No results found</h3>
              <p>No podcasts or episodes found for &quot;{searchTerm}&quot;</p>
              <p>Try adjusting your search terms or browse trending content</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 

export default SearchClient;