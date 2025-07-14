# Search Components

This folder contains React components for handling search functionality and displaying search results in the podcast discovery application.

## Components

### SearchClient
The main search client component that orchestrates the search experience and handles different states.

**Features:**
- Manages loading states for both trending data and search results
- Displays error states with retry functionality
- Shows "no results found" state when search yields no results
- Integrates with search context for state management
- Uses Framer Motion for smooth animations and transitions

**Props:**
- `initialTrendingData: { podcasts: Podcast[], episodes: Episode[] }` - Initial trending data to display

**Usage:**
```tsx
import { SearchClient } from '@/components/search';

<SearchClient initialTrendingData={trendingData} />
```

### SearchResults
Displays search results with podcasts and episodes in organized sections.

**Features:**
- Shows search statistics (result count, episode count, saved count)
- Displays timestamp of last update
- Renders podcasts and episodes in separate sections
- Supports both search mode and trending mode
- Handles load more functionality for both content types
- Flattens episode data with podcast metadata for better display

**Props:**
- `searchResults: SearchResult` - The search results data
- `displayedPodcasts: Podcast[]` - Currently displayed podcasts
- `displayedEpisodes: Episode[]` - Currently displayed episodes
- `displayedTopEpisodes: Episode[]` - Currently displayed top episodes
- `hasMorePodcasts: boolean` - Whether more podcasts are available
- `hasMoreEpisodes: boolean` - Whether more episodes are available
- `hasMoreTopEpisodes: boolean` - Whether more top episodes are available
- `isSearchMode: boolean` - Whether in search or trending mode
- `onLoadMorePodcasts: () => void` - Callback for loading more podcasts
- `onLoadMoreEpisodes: () => void` - Callback for loading more episodes
- `onLoadMoreTopEpisodes: () => void` - Callback for loading more top episodes

**Usage:**
```tsx
import { SearchResults } from '@/components/search';

<SearchResults 
  searchResults={results}
  displayedPodcasts={podcasts}
  displayedEpisodes={episodes}
  displayedTopEpisodes={topEpisodes}
  hasMorePodcasts={true}
  hasMoreEpisodes={false}
  hasMoreTopEpisodes={true}
  isSearchMode={true}
  onLoadMorePodcasts={handleLoadMorePodcasts}
  onLoadMoreEpisodes={handleLoadMoreEpisodes}
  onLoadMoreTopEpisodes={handleLoadMoreTopEpisodes}
/>
```

### SearchSection
A search input component with integrated search functionality.

**Features:**
- Search input with placeholder text
- Search icon positioned inside the input
- Integrates with search context for state management
- Styled with Tailwind CSS and UI components
- Responsive design

**Usage:**
```tsx
import { SearchSection } from '@/components/search';

<SearchSection />
```

### SearchLayout
A layout wrapper that provides the search interface structure.

**Features:**
- Sticky search section at the top
- Main content area for search results
- Proper z-index management for sticky positioning
- Responsive layout structure

**Props:**
- `children: React.ReactNode` - Content to render in the main area

**Usage:**
```tsx
import { SearchLayout } from '@/components/search';

<SearchLayout>
  <SearchResults {...props} />
</SearchLayout>
```

## State Management

The search components integrate with the SearchContext for:
- Search term management
- Search results storage
- Loading states
- Error handling
- Search history

## Search Modes

### Search Mode
- Displays results based on user search query
- Shows search-specific statistics
- Filters content based on search term
- Updates results dynamically as user types

### Trending Mode
- Displays trending/popular content
- Shows general statistics
- No search filtering applied
- Static content display

## Data Flow

1. **SearchSection** captures user input and updates search context
2. **SearchClient** manages the overall search experience and state
3. **SearchResults** displays the actual search results
4. **SearchLayout** provides the structural wrapper

## Integration

- Uses the SearchContext for state management
- Integrates with PodcastGrid and EpisodeGrid for content display
- Utilizes FormatUtils for time formatting
- Compatible with the global UI component library
- Supports Framer Motion for animations

## Error Handling

- Displays user-friendly error messages
- Provides retry functionality
- Handles network errors gracefully
- Shows appropriate loading states

## Accessibility

- Proper form labels and placeholders
- Keyboard navigation support
- Screen reader friendly structure
- Focus management for interactive elements 