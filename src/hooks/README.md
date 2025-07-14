# Hooks Directory

This folder contains all custom React hooks used throughout the application. Each file provides a reusable hook for state management, data fetching, or UI logic.

## Usage

Import hooks directly from this folder or from the main index for grouped exports.

Example:
```tsx
import { useDebounce, usePodcastSearch } from '@/hooks';
```

## Hooks
- `useDebounce`: Debounces a value for delayed updates.
- `usePodcastSearch`: Handles podcast search logic and state.
- `useTrendingData`: Fetches trending podcast data.
- `useSearchState`: Manages search state and actions. 