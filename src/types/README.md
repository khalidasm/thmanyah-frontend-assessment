# Types Directory

This folder contains all TypeScript type definitions for the application, including API types, database types, and shared interfaces.

## Usage

Import types from this folder to ensure type safety across your codebase.

Example:
```ts
import { Podcast, Episode, ApiResponse } from '@/types';
```

## Files
- `index.ts`: Main type definitions for the app (API, frontend, config, error types, etc.).
- `database.ts`: Database-specific types matching Prisma models. 