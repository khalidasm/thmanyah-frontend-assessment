# Thmanyah - Frontend Assessment

A modern Next.js application for discovering and exploring podcasts with real-time search capabilities and trending content.

## 🚀 Features

- **Real-time Search**: Search for podcasts, episodes, and creators with instant results
- **Trending Content**: Discover popular podcasts and episodes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Type Safety**: Full TypeScript support throughout the application
- **Database Integration**: Prisma ORM with PostgreSQL for data persistence
- **State Management**: React Query for server state and Context API for client state
- **Animations**: Smooth transitions with Framer Motion

## 📁 Project Structure

```
thmanyah/
├── prisma/                          # Database schema and migrations
│   ├── migrations/                  # Database migration files
│   ├── schema.prisma               # Prisma schema definition
│   └── migration_lock.toml         # Migration lock file
├── public/                         # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── placeholder-podcast.png
│   ├── placeholder-podcast.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── api/                    # API routes
│   │   │   └── podcasts/
│   │   │       ├── search/         # Search API endpoint
│   │   │       └── trending/       # Trending API endpoint
│   │   ├── actions.ts              # Server actions (removed)
│   │   ├── favicon.ico
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Home page
│   ├── components/                 # React components
│   │   ├── common/                 # Shared components
│   │   │   ├── ContentSections.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── QueryLoadingState.tsx
│   │   │   ├── QueryProvider.tsx
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   ├── episode/                # Episode-related components
│   │   │   ├── EpisodeCard.tsx
│   │   │   ├── EpisodeGrid.tsx
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   ├── podcast/                # Podcast-related components
│   │   │   ├── PodcastCard.tsx
│   │   │   ├── PodcastGrid.tsx
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   ├── search/                 # Search-related components
│   │   │   ├── SearchClient.tsx
│   │   │   ├── SearchLayout.tsx
│   │   │   ├── SearchResults.tsx
│   │   │   ├── SearchSection.tsx
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   ├── ui/                     # UI components (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── constants/                  # Application constants
│   │   ├── index.ts
│   │   └── README.md
│   ├── contexts/                   # React contexts
│   │   ├── SearchContext.tsx
│   │   └── README.md
│   ├── generated/                  # Prisma generated files
│   │   ├── client.d.ts
│   │   ├── client.js
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── libquery_engine-darwin-arm64.dylib.node
│   │   ├── package.json
│   │   ├── runtime/
│   │   ├── schema.prisma
│   │   └── wasm.d.ts
│   ├── hooks/                      # Custom React hooks
│   │   ├── useDebounce.ts
│   │   ├── usePodcastSearch.ts
│   │   ├── useSearchState.ts
│   │   ├── useTrendingData.ts
│   │   ├── index.ts
│   │   └── README.md
│   ├── lib/                        # Utility libraries
│   │   ├── query-client.ts
│   │   └── utils.ts
│   ├── services/                   # API services
│   │   ├── episode-service.ts
│   │   ├── itunes-api.ts
│   │   ├── podcast-service.ts
│   │   └── README.md
│   ├── types/                      # TypeScript type definitions
│   │   ├── database.ts
│   │   ├── index.ts
│   │   └── README.md
│   └── utils/                      # Utility functions
│       ├── api-response-builder.ts
│       ├── type-converters.ts
│       ├── index.ts
│       └── README.md
├── components.json                 # shadcn/ui configuration
├── eslint.config.mjs              # ESLint configuration
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies and scripts
├── postcss.config.mjs             # PostCSS configuration
├── tsconfig.json                  # TypeScript configuration
└── PROJECT_STRUCTURE.md           # Detailed project structure
```

## 🛠️ Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd thmanyah
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/thmanyah"
   ITUNES_API_BASE_URL="https://itunes.apple.com"
   ```
   
   **PostgreSQL connection string format:**
   ```
   postgresql://username:password@host:port/database_name
   ```
   
   **Example for cloud services:**
   - **Supabase**: `postgresql://postgres:[password]@[host]:5432/postgres`
   - **Neon**: `postgresql://[user]:[password]@[host]/[database]?sslmode=require`
   - **Railway**: `postgresql://postgres:[password]@[host]:5432/railway`

## 🗄️ Database Setup

This project uses Prisma with PostgreSQL for data persistence.

1. **Set up PostgreSQL database**
   
   You can use a local PostgreSQL installation or a cloud service like:
   - [Supabase](https://supabase.com) (free tier available)
   - [Neon](https://neon.tech) (free tier available)
   - [Railway](https://railway.app) (free tier available)
   - Local PostgreSQL installation



2. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

3. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

4. **Seed the database (optional)**
   ```bash
   npx prisma db seed
   ```

5. **Open Prisma Studio (optional)**
   ```bash
   npx prisma studio
   ```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

### Other Available Scripts

```bash
npm run lint          # Run ESLint
npm run type-check    # Run TypeScript type checking
npm run db:generate   # Generate Prisma client
npm run db:migrate    # Run database migrations
npm run db:studio     # Open Prisma Studio
```

## 🔧 Configuration

### Next.js Configuration

The application is configured in `next.config.ts` with:
- Image optimization for external domains
- TypeScript support
- ESLint integration

### Prisma Configuration

Database configuration is in `prisma/schema.prisma`:
- PostgreSQL database for development and production
- Podcast and Episode models
- Proper relationships and indexes

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://username:password@localhost:5432/thmanyah` |
| `ITUNES_API_BASE_URL` | iTunes API base URL | `https://itunes.apple.com` |

## 🏗️ Architecture

### Frontend Architecture
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Framer Motion** for animations

### State Management
- **React Query** for server state
- **Context API** for client state
- **Custom hooks** for reusable logic

### Data Flow
1. User interacts with search components
2. Search context updates state
3. Custom hooks fetch data from APIs
4. Components render with updated data
5. Results are cached and displayed

### API Integration
- **iTunes API** for podcast data
- **Custom API routes** for search and trending
- **Prisma** for database operations

## 📝 API Documentation

### Search API
- **Endpoint**: `/api/podcasts/search`
- **Method**: GET
- **Query Parameters**
- **Response**: Podcast and episode search results

