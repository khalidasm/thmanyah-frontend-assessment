# Episode Components

This folder contains components specifically designed for displaying podcast episodes in various layouts and formats.

## Components

### EpisodeCard
Individual episode card component that displays episode information in a compact, visually appealing format.

**Features:**
- Episode artwork display with fallback
- Episode title and podcast artist
- Publication date and duration
- Hide/unhide functionality
- Dropdown menu for actions

**Props:**
- `episode`: Episode data object
- `className` (optional): Additional CSS classes
- `index`: Index for styling variations

### EpisodeGrid
Container component that displays multiple episodes in either grid or scrollable layout.

**Features:**
- Toggle between grid and scroll view
- Load more functionality
- Responsive grid layout
- Smooth animations with Framer Motion
- Scroll navigation controls

**Props:**
- `episodes`: Array of episode objects
- `context` (optional): Display context ('trending' or 'search')
- `hasMore` (optional): Whether more episodes are available
- `onLoadMore` (optional): Function to load more episodes
- `remainingCount` (optional): Number of remaining episodes

## Usage

Import components directly from this folder:

```tsx
import { EpisodeCard, EpisodeGrid } from '@/components/episode';
```

Or from the main components index:

```tsx
import { EpisodeCard, EpisodeGrid } from '@/components';
``` 