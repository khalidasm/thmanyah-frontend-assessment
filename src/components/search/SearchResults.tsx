import { SearchResult, Podcast, Episode } from '@/types';
import { FormatUtils } from '@/utils';
import PodcastGrid from '@/components/podcast/PodcastGrid';
import EpisodeGrid from '@/components/episode/EpisodeGrid';

interface SearchResultsProps {
  searchResults: SearchResult;
  displayedPodcasts: Podcast[];
  displayedEpisodes: Episode[];
  displayedTopEpisodes: Episode[];
  hasMorePodcasts: boolean;
  hasMoreEpisodes: boolean;
  hasMoreTopEpisodes: boolean;
  isSearchMode: boolean;
  onLoadMorePodcasts: () => void;
  onLoadMoreEpisodes: () => void;
  onLoadMoreTopEpisodes: () => void;
}

const SearchResults = ({
  searchResults,
  displayedPodcasts,
  displayedEpisodes,
  displayedTopEpisodes,
  hasMorePodcasts,
  hasMoreEpisodes,
  hasMoreTopEpisodes,
  isSearchMode,
  onLoadMorePodcasts,
  onLoadMoreEpisodes,
  onLoadMoreTopEpisodes,
}: SearchResultsProps) => {
  const formatTimeAgo = (dateString?: string) => {
    return FormatUtils.formatTimeAgo(dateString || '');
  };

  const allEpisodes = searchResults.podcasts ? 
    searchResults.podcasts.flatMap(podcast => 
      podcast.episodes?.map(episode => ({
        ...episode,
        podcastName: podcast.collectionName,
        podcastArtist: podcast.artistName,
        podcastArtwork: podcast.artworkUrl100
      })) || []
    ) : [];

  return (
    <>
      <div className="mb-4 text-sm text-gray-600">
        Found {searchResults.resultCount} podcasts with {allEpisodes.length} episodes
        {searchResults.savedCount && `, saved ${searchResults.savedCount} new ones`}
        {searchResults.timestamp && (
          <span className="ml-2 text-blue-600">
            • Last updated: {formatTimeAgo(searchResults.timestamp)}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-4'>
        {displayedPodcasts.length > 0 && (
          <section>
            <PodcastGrid
              podcasts={displayedPodcasts}
              context={isSearchMode ? "search" : "trending"}
              hasMore={hasMorePodcasts}
              onLoadMore={onLoadMorePodcasts}
              remainingCount={searchResults.podcasts ? searchResults.podcasts.length - displayedPodcasts.length : 0}
            />
          </section>
        )}
        
        {((!isSearchMode && displayedTopEpisodes.length > 0) || (isSearchMode && displayedEpisodes.length > 0)) && (
          <section>
            <EpisodeGrid
              episodes={isSearchMode ? displayedEpisodes : displayedTopEpisodes}
              context={isSearchMode ? "search" : "trending"}
              hasMore={isSearchMode ? hasMoreEpisodes : hasMoreTopEpisodes}
              onLoadMore={isSearchMode ? onLoadMoreEpisodes : onLoadMoreTopEpisodes}
              remainingCount={isSearchMode 
                ? allEpisodes.length - displayedEpisodes.length
                : searchResults.topEpisodes ? searchResults.topEpisodes.length - displayedTopEpisodes.length : 0
              }
            />
          </section>
        )}
      </div>
    </>
  );
} 

export default SearchResults;