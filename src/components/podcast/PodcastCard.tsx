"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Podcast } from "@/types";
import { StringUtils } from "@/utils";
import { MoreVertical, EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import Image from 'next/image';

interface PodcastCardProps {
    podcast: Podcast;
    className?: string;
    index: number;
}

const PodcastCard = ({
    podcast,
    className = "",
    index,
}: PodcastCardProps) => {
    const [isHidden, setIsHidden] = useState(false);
    
    const authorColors = [
        "text-author-1",
        "text-author-2",
        "text-author-3",
        "text-author-4",
        "text-author-5",
    ];
    const authorColor = authorColors[index % authorColors.length];
    
    const handleHide = () => {
        setIsHidden(true);
    };
    
    const handleUnhide = () => {
        setIsHidden(false);
    };
    
    if (isHidden) {
        return (
            <Card
                className={`w-full max-w-[200px] min-h-[300px] border-none shadow-none ${className}`}
            >
                <CardContent className="p-0 flex flex-col h-full gap-2">
                    <div className="flex-1 relative min-h-[200px] bg-muted rounded-lg flex items-center justify-center" />
                    <div className="flex justify-between relative">
                        <span className={`text-index text-sm mr-2 shrink-0`}>
                            #{index + 1}
                        </span>
                        <div className="flex flex-col flex-1 min-w-0 pr-8">
                            <h3 className="font-semibold text-sm line-clamp-1 truncate capitalize text-muted-foreground">
                                Hidden
                            </h3>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-6 w-6 flex-shrink-0 hover:bg-transparent !p-0 absolute right-0 top-0">
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
                </CardContent>
            </Card>
        );
    }
    
    return (
        <Card
            className={`w-full max-w-[200px] min-h-[300px] border-none shadow-none ${className}`}
        >
            <CardContent className="p-0 flex flex-col h-full gap-2">
                <div className="flex-1 relative min-h-[200px]">
                    {podcast.artworkUrl100 ? (
                        <Image
                            src={podcast.artworkUrl100}
                            alt={StringUtils.cleanXmlContent(podcast.collectionName || '')}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    ) : (
                        <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-muted-foreground text-sm">
                                No Image
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex justify-between relative">
                    <span className={`text-index text-sm mr-2 shrink-0`}>
                        #{index + 1}
                    </span>
                    <div className="flex flex-col flex-1 min-w-0 pr-8">
                        <h3 className="font-semibold text-sm line-clamp-1 truncate capitalize">
                            {StringUtils.cleanXmlContent(podcast.collectionName || '')}
                        </h3>
                        <p
                            className={`text-xs line-clamp-1 mt-0.5 ${authorColor} capitalize`}
                        >
                            {StringUtils.cleanXmlContent(podcast.artistName || '')}
                        </p>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-6 w-6 flex-shrink-0 hover:bg-transparent !p-0 absolute right-0 top-0">
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
            </CardContent>
        </Card>
    );
}

export default PodcastCard;
