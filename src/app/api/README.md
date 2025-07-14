# API Directory

This folder contains all Next.js API route handlers for the application. These routes handle server-side logic, external API calls, and data processing.

## Structure

- `podcasts/`: Podcast-related API endpoints
  - `search/route.ts`: Main search endpoint that handles both podcast search and trending content

## Usage

API routes are automatically available at `/api/[route-name]`. For example:
- `/api/podcasts/search` - Main search endpoint

## Endpoints

### GET /api/podcasts/search

Handles podcast search and trending content requests.

**Query Parameters:**
- `term` (optional): Search term for podcasts
- `country` (optional): Country code (defaults to app config)

**Response:**
- Returns podcasts with episodes when searching
- Returns trending podcasts when no search term provided 