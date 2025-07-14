# Common Components

This folder contains shared components used throughout the application for common UI patterns and functionality.

## Components

### ContentSections
Main content display component that handles both trending and search results. Automatically switches between trending content and search results based on user interaction.

**Props:**
- `initialTrendingData`: Initial trending podcasts and episodes data

### ErrorBoundary
React error boundary component that catches JavaScript errors and displays a fallback UI instead of crashing the app.

**Props:**
- `children`: React components to wrap
- `fallback` (optional): Custom error component

### LoadingSpinner
Animated loading indicator with customizable message and smooth animations using Framer Motion.

**Props:**
- `message` (optional): Loading message text (default: "Loading...")

### QueryLoadingState
Wrapper component that shows loading state for React Query operations.

**Props:**
- `isLoading`: Boolean indicating loading state
- `children`: Content to show when not loading
- `fallback` (optional): Custom loading component

### QueryProvider
React Query provider wrapper that provides the query client to the app.

**Props:**
- `children`: React components to wrap

## Usage

Import components directly from this folder:

```tsx
import { ErrorBoundary, QueryProvider } from '@/components/common';
import LoadingSpinner from '@/components/common/LoadingSpinner';
``` 