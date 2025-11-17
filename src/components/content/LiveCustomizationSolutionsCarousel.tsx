"use client";

import { useEffect, useState } from "react";
import type { Booth } from "@/types";
import BoothCard from "@/components/content/BoothCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type LiveCustomizationSolutionsCarouselProps = {
  booths: Booth[];
};

export function LiveCustomizationSolutionsCarousel({
  booths,
}: LiveCustomizationSolutionsCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="relative mt-6 px-4 md:px-2"
      setApi={setApi}
    >
      <CarouselContent className="pb-6 md:-ml-4">
        {booths.map((booth) => (
          <CarouselItem
            key={booth.id}
            className="basis-full pb-4 sm:basis-1/2 lg:basis-1/3 md:pl-4"
          >
            <div className="h-full px-2">
              <BoothCard booth={booth} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-md backdrop-blur-sm hover:bg-white sm:flex" />
      <CarouselNext className="-right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-md backdrop-blur-sm hover:bg-white sm:flex" />
    </Carousel>
  );
}

