'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Episode } from '@/types';
import EpisodeCard from './EpisodeCard';
import { useId } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useSearchContext } from '@/contexts/SearchContext';

interface EpisodeGridProps {
  episodes: Episode[];
  context?: 'trending' | 'search';
  hasMore?: boolean;
  onLoadMore?: () => void;
  remainingCount?: number;
}

interface GridState {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  isGrid: boolean;
  itemsShown: number;
}

const EpisodeGrid = ({ 
  episodes, 
  context = 'trending',
  hasMore = false, 
  onLoadMore = () => {}, 
  remainingCount 
}: EpisodeGridProps) => {
  const { searchTerm } = useSearchContext();
  const baseId = useId();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [state, setState] = useState<GridState>({
    canScrollLeft: false,
    canScrollRight: true,
    isGrid: true,
    itemsShown: 20,
  });
  
  useEffect(() => {
    handleScroll();
  }, [episodes]);
  
  useEffect(() => {
    if (!state.isGrid) {
      setState(prev => ({ ...prev, itemsShown: 20 }));
    }
  }, [state.isGrid]);
  
  if (!episodes || episodes.length === 0) return null;

  const getTitle = () => {
    switch (context) {
      case 'search':
        return `Top Episodes for "${searchTerm}"`;
      case 'trending':
      default:
        return "Top Trending Episodes in all genres";
    }
  };
  
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setState(prev => ({
        ...prev,
        canScrollLeft: scrollLeft > 0,
        canScrollRight: scrollLeft < scrollWidth - clientWidth - 1,
      }));
    }
  };
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };
  
  const handleLoadMoreGrid = () => {
    setState(prev => ({ ...prev, itemsShown: prev.itemsShown + 20 }));
  };
  
  const toggleLayout = () => {
    setState(prev => ({ 
      ...prev, 
      isGrid: !prev.isGrid,
      itemsShown: prev.isGrid ? 20 : prev.itemsShown 
    }));
  };
  
  const displayedEpisodes = state.isGrid ? episodes.slice(0, state.itemsShown) : episodes;
  const hasMoreGrid = state.isGrid && state.itemsShown < episodes.length;
  
  return (
      <div className='relative'>
         <div className='sticky top-[80px] bg-background z-20 pb-2 border-b-2 border-border'>
          <Card className='border-none shadow-none py-2'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <CardTitle>{getTitle()}</CardTitle>
                <div className='flex items-center gap-2'>
                  {!state.isGrid && (
                    <>
                      <Button onClick={() => scroll('left')} disabled={!state.canScrollLeft}>
                        <ChevronLeft />
                      </Button>
                      <Button onClick={() => scroll('right')} disabled={!state.canScrollRight}>
                        <ChevronRight />
                      </Button>
                    </>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='flex items-center gap-2 hover:bg-transparent !pr-0'>
                        <MoreVertical className='h-4 w-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      {state.isGrid ? (
                        <DropdownMenuItem onClick={toggleLayout}>
                          Scroll View
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem onClick={toggleLayout}>
                          Grid View
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
        <Card className='border-none'>
          <CardContent>
          {state.isGrid ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
              {displayedEpisodes.map((episode, index) => {
                const relativeIndex = index % 20;
                return (
                  <motion.div 
                    key={`${baseId}-episode-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: relativeIndex * 0.05 }}
                    className='w-full flex justify-center items-center'
                  >
                    <EpisodeCard episode={episode} className='w-full' index={index} />
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className='relative'>
              <div 
                ref={scrollRef} 
                onScroll={handleScroll} 
                className='flex gap-3 overflow-x-scroll custom-scrollbar'
              >
                {displayedEpisodes.map((episode, index) => (
                  <motion.div 
                    key={`${baseId}-episode-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className='flex-shrink-0'
                  >
                    <EpisodeCard episode={episode} className='min-w-[400px]' index={index} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          {hasMoreGrid && (
            <motion.div className='mt-6 text-center'>
              <Button onClick={handleLoadMoreGrid} variant='outline'>
                Load More Episodes ({episodes.length - state.itemsShown} remaining)
              </Button>
            </motion.div>
          )}
          {!state.isGrid && hasMore && (
            <motion.div className='mt-6 text-center'>
              <Button onClick={onLoadMore} variant='outline'>
                Load More Episodes {remainingCount && `(${remainingCount} remaining)`}
              </Button>
            </motion.div>
          )}
        </CardContent>
        </Card>
      </div>
  );
} 

export default EpisodeGrid; 