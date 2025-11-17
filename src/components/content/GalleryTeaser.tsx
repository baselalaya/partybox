"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80",
];

export function GalleryTeaserCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      setApi={setApi}
      className="relative w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {GALLERY_IMAGES.map((src) => (
          <CarouselItem
            key={src}
            className="basis-2/3 sm:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
          >
            <div className="group relative h-80 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white">
              <div className="absolute inset-0 m-1 overflow-hidden rounded-[20px] bg-slate-200">
                <Image
                  src={src}
                  alt="Partybox activation gallery image"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="left-0 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-md backdrop-blur-sm hover:bg-white sm:-left-3 sm:h-10 sm:w-10 md:-left-4"
      />
      <CarouselNext
        className="right-0 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-md backdrop-blur-sm hover:bg-white sm:-right-3 sm:h-10 sm:w-10 md:-right-4"
      />
    </Carousel>
  );
}
