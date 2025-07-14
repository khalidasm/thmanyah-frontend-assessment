"use client";

import { Card } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Episode } from "@/types";
import { FormatUtils, StringUtils } from "@/utils";
import { Play, MoreVertical, EyeOff, Eye } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import Image from 'next/image';

interface EpisodeCardProps {
    episode: Episode;
    className?: string;
    index: number;
}

const authorColors = [
    "text-author-1",
    "text-author-2",
    "text-author-3",
    "text-author-4",
    "text-author-5",
];

const authorBackgroundColors = [
    "bg-author-1/10",
    "bg-author-2/10",
    "bg-author-3/10",
    "bg-author-4/10",
    "bg-author-5/10",
];

const EpisodeCard = ({ episode, className = "", index }: EpisodeCardProps) => {
    const [isHidden, setIsHidden] = useState(false);

    const formatDuration = (seconds?: number) => {
        return FormatUtils.formatDuration(seconds);
    };

    const authorColor = authorColors[index % authorColors.length];
    const authorBackgroundColor =
        authorBackgroundColors[index % authorBackgroundColors.length];

    const handleHide = () => {
        setIsHidden(true);
    };

    const handleUnhide = () => {
        setIsHidden(false);
    };

    if (isHidden) {
        return (
            <Card
                className={`flex flex-row items-stretch ${authorBackgroundColor} rounded-2xl w-[240px] h-[110px] max-w-full shadow-none border-none ${className} !py-0 gap-1`}
            >
                <div className="w-[110px] h-[110px] flex-shrink-0 relative overflow-hidden rounded-l-2xl bg-muted">
                    <div className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center"></div>
                </div>
                <div className="flex flex-col justify-between p-2 flex-1 min-w-0 h-[110px]">
                    <div className="flex items-start justify-between">
                        <span
                            className={`${authorColor} text-xs font-medium mb-1 truncate max-w-[70%]`}
                        >
                            Hidden
                        </span>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 flex-shrink-0 hover:bg-transparent !p-0"
                                >
                                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={handleUnhide}>
                                    <Eye className="h-4 w-4 mr-2" />
                                    Unhide
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card
            className={`flex flex-row items-stretch ${authorBackgroundColor} rounded-2xl w-[240px] h-[110px] max-w-full shadow-none border-none ${className} !py-0 gap-1`}
        >
            <div className="w-[110px] h-[110px] flex-shrink-0 relative overflow-hidden rounded-l-2xl bg-muted">
                {episode.itunesImage ? (
                    <Image
                        src={episode.itunesImage}
                        alt={episode.title}
                        layout="fill"
                        objectFit="contain"
                    />
                ) : episode.podcastArtwork ? (
                    <Image
                        src={episode.podcastArtwork}
                        alt={episode.podcastName || "Podcast"}
                        layout="fill"
                        objectFit="contain"
                    />
                ) : (
                    <div className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center">
                        <Play className="w-8 h-8 text-muted-foreground" />
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-between p-2 flex-1 min-w-0 h-[110px]">
                <div className="flex items-start justify-between">
                    <span
                        className={`${authorColor} text-xs font-medium mb-1 truncate max-w-[70%]`}
                    >
                        {StringUtils.cleanXmlContent(
                            episode.podcastArtist || ""
                        )}
                    </span>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 flex-shrink-0 hover:bg-transparent !p-0"
                            >
                                <MoreVertical className="w-4 h-4 text-muted-foreground" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={handleHide}>
                                <EyeOff className="h-4 w-4 mr-2" />
                                Hide
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="mt-1 mb-2">
                    <span
                        className="block text-base font-bold text-white truncate"
                        title={StringUtils.cleanXmlContent(episode.title || "")}
                    >
                        {StringUtils.cleanXmlContent(episode.title || "")}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                    <span>{moment(episode.pubDate).format("D MMM")}</span>
                    <span>
                        {typeof episode.duration === "number" &&
                        !isNaN(episode.duration)
                            ? formatDuration(episode.duration)
                            : "—"}
                    </span>
                </div>
            </div>
        </Card>
    );
};

export default EpisodeCard;
