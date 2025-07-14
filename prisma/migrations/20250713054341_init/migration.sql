-- CreateTable
CREATE TABLE "podcasts" (
    "id" TEXT NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,
    "artistName" TEXT,
    "collectionName" TEXT NOT NULL,
    "trackName" TEXT NOT NULL,
    "collectionViewUrl" TEXT,
    "feedUrl" TEXT,
    "artworkUrl30" TEXT,
    "artworkUrl60" TEXT,
    "artworkUrl100" TEXT,
    "artworkUrl600" TEXT,
    "releaseDate" TIMESTAMP(3),
    "trackTimeMillis" INTEGER,
    "country" TEXT,
    "currency" TEXT,
    "primaryGenreName" TEXT,
    "contentAdvisoryRating" TEXT,
    "artworkUrl30_2x" TEXT,
    "artworkUrl60_2x" TEXT,
    "artworkUrl100_2x" TEXT,
    "artworkUrl600_2x" TEXT,
    "artistViewUrl" TEXT,
    "trackCensoredName" TEXT,
    "collectionCensoredName" TEXT,
    "artistId" INTEGER,
    "collectionPrice" DOUBLE PRECISION,
    "trackPrice" DOUBLE PRECISION,
    "collectionHdPrice" DOUBLE PRECISION,
    "trackHdPrice" DOUBLE PRECISION,
    "trackHdRentalPrice" DOUBLE PRECISION,
    "collectionExplicitness" TEXT,
    "trackExplicitness" TEXT,
    "trackCount" INTEGER,
    "copyright" TEXT,
    "description" TEXT,
    "shortDescription" TEXT,
    "longDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "searchHistoryId" TEXT,

    CONSTRAINT "podcasts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "episodes" (
    "id" TEXT NOT NULL,
    "podcastId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "duration" INTEGER,
    "pubDate" TIMESTAMP(3),
    "guid" TEXT,
    "enclosureUrl" TEXT,
    "enclosureType" TEXT,
    "enclosureLength" INTEGER,
    "itunesDuration" TEXT,
    "itunesExplicit" BOOLEAN,
    "itunesImage" TEXT,
    "itunesOrder" INTEGER,
    "itunesSubtitle" TEXT,
    "itunesSummary" TEXT,
    "itunesKeywords" TEXT,
    "itunesAuthor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "episodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "search_history" (
    "id" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    "resultCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "search_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenreToPodcast" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_GenreToPodcast_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "podcasts_collectionId_key" ON "podcasts"("collectionId");

-- CreateIndex
CREATE UNIQUE INDEX "podcasts_trackId_key" ON "podcasts"("trackId");

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "episodes_guid_key" ON "episodes"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "search_history_term_key" ON "search_history"("term");

-- CreateIndex
CREATE INDEX "_GenreToPodcast_B_index" ON "_GenreToPodcast"("B");

-- AddForeignKey
ALTER TABLE "podcasts" ADD CONSTRAINT "podcasts_searchHistoryId_fkey" FOREIGN KEY ("searchHistoryId") REFERENCES "search_history"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episodes" ADD CONSTRAINT "episodes_podcastId_fkey" FOREIGN KEY ("podcastId") REFERENCES "podcasts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToPodcast" ADD CONSTRAINT "_GenreToPodcast_A_fkey" FOREIGN KEY ("A") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToPodcast" ADD CONSTRAINT "_GenreToPodcast_B_fkey" FOREIGN KEY ("B") REFERENCES "podcasts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
