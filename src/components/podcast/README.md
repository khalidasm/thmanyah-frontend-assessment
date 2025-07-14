# Podcast Components

This folder contains React components for displaying and managing podcast data in the application.

## Components

### PodcastCard
A reusable card component for displaying individual podcast information.

**Features:**
- Displays podcast artwork, title, and artist name
- Supports hiding/unhiding podcasts with dropdown menu
- Responsive design with proper image handling
- Color-coded author names for visual distinction
- XML content cleaning for proper text display

**Props:**
- `podcast: Podcast` - The podcast data object
- `className?: string` - Additional CSS classes
- `index: number` - Position index for styling and numbering

**Usage:**
```tsx
import { PodcastCard } from '@/components/podcast';

<PodcastCard 
  podcast={podcastData} 
  className="custom-class" 
  index={0} 
/>
```

### PodcastGrid
A comprehensive grid component for displaying multiple podcasts with layout options.

**Features:**
- Dual layout modes: horizontal scroll and grid view
- Sticky header with context-aware titles
- Scroll navigation controls for horizontal view
- Load more functionality for both layouts
- Smooth animations with Framer Motion
- Responsive grid columns (2-8 columns based on screen size)
- Integration with search context for dynamic titles

**Props:**
- `podcasts: Podcast[]` - Array of podcast data
- `context?: 'trending' | 'search'` - Display context for title generation
- `hasMore?: boolean` - Whether more podcasts are available to load
- `onLoadMore?: () => void` - Callback for loading more podcasts
- `remainingCount?: number` - Number of remaining podcasts to load

**Usage:**
```tsx
import { PodcastGrid } from '@/components/podcast';

<PodcastGrid 
  podcasts={podcastList}
  context="trending"
  hasMore={true}
  onLoadMore={handleLoadMore}
  remainingCount={50}
/>
```

## Layout Modes

### Horizontal Scroll Mode (Default)
- Displays podcasts in a horizontal scrollable list
- Shows navigation arrows when content overflows
- Optimized for browsing through many podcasts
- Load more button appears at the bottom

### Grid Mode
- Displays podcasts in a responsive grid layout
- Automatically adjusts columns based on screen size
- Shows 20 podcasts initially with load more functionality
- Better for overview and comparison

## State Management

The components use local state for:
- Hidden/shown podcast visibility
- Layout mode switching (grid vs scroll)
- Scroll position tracking
- Items displayed count (for grid mode)

## Styling

- Uses Tailwind CSS for styling
- Custom color classes for author names (`text-author-1` through `text-author-5`)
- Responsive design with mobile-first approach
- Custom scrollbar styling for horizontal scroll
- Smooth transitions and hover effects

## Integration

- Integrates with the search context for dynamic titles
- Uses the StringUtils utility for XML content cleaning
- Compatible with the global UI component library
- Supports Next.js Image component for optimized image loading

## Accessibility

- Proper alt text for images
- Keyboard navigation support
- Screen reader friendly structure
- Focus management for interactive elements 