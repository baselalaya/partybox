"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

type LatestVideosProps = {
    videos: string[];
};

export function LatestVideos({ videos }: LatestVideosProps) {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    if (!videos || videos.length === 0) {
        return (
            <div className="col-span-full text-center text-slate-500">
                No videos found at the moment.
            </div>
        );
    }

    return (
        <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((videoId) => (
                    <div
                        key={videoId}
                        className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-slate-900 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                        onClick={() => setSelectedVideo(videoId)}
                    >
                        {/* Thumbnail */}
                        <Image
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt="Video thumbnail"
                            fill
                            className="object-cover opacity-90 transition-opacity group-hover:opacity-75"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/30">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg">
                                    <Play className="ml-1 h-4 w-4 fill-current" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
                <DialogContent className="max-w-4xl border-none bg-black p-0 overflow-hidden text-white shadow-2xl">
                    {/* Added VisuallyHidden Title for accessibility compliance without visual clutter */}
                    <VisuallyHidden.Root>
                        <DialogTitle>Video Player</DialogTitle>
                        <DialogDescription>
                            YouTube video playback
                        </DialogDescription>
                    </VisuallyHidden.Root>

                    <div className="aspect-video w-full">
                        {selectedVideo && (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="h-full w-full"
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
