export const revalidate = 2592000;
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/common";
import { SearchClient } from "@/components/search";

async function getTrendingData() {
    try {
        const response = await fetch(
            `${
                process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
            }/api/podcasts/search`,
            {
                next: {
                    revalidate
                },
            }
        );

        if (!response.ok) {
            return { podcasts: [], episodes: [] };
        }

        const data = await response.json();
        return {
            podcasts: data.podcasts || [],
            episodes: data.topEpisodes || [],
        };
    } catch (error) {
        console.error("Error fetching trending data:", error);
        return { podcasts: [], episodes: [] };
    }
}

export default async function HomePage() {
    const trendingData = await getTrendingData();

    return (
        <div className="w-full">
            <Suspense fallback={<LoadingSpinner />}>
                <SearchClient initialTrendingData={trendingData} />
            </Suspense>
        </div>
    );
}
