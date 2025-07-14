# Services Directory

This folder contains business logic and data-fetching services for the application. Each file provides a service for interacting with APIs, databases, or external resources.

## Usage

Import services directly from this folder to use in your application logic or API routes.

Example:
```ts
import { podcastService } from '@/services/podcast-service';
```

## Services
- `itunes-api.ts`: Handles iTunes API integration and podcast search.
- `podcast-service.ts`: Manages podcast and episode data, caching, and database operations.
- `episode-service.ts`: Fetches and processes episode data for podcasts. 