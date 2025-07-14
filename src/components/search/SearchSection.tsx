'use client';

import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { useSearchContext } from '@/contexts/SearchContext';

const SearchSection = () => {
  const { searchTerm, handleSearchChange } = useSearchContext();
  
  return (
      <Card className='border-none shadow-none'>
        <CardContent>
            <div className='flex items-center gap-2 relative'>
              <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none' />
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search for podcasts, episodes, or creators..."
                className='border-border pl-10'
              />
            </div>
        </CardContent>
      </Card>
  );
} 

export default SearchSection;