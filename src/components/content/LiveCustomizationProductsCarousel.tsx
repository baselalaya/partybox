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

const PRODUCT_ITEMS = [
  {
    title: "Beauty & Cosmetics",
    body: "Lipsticks, compacts, fragrances, and gifting kits customized live.",
    image: "/images/brand-filter.jpg",
    alt: "Beauty and cosmetics products with customized branding",
  },
  {
    title: "Fashion & Apparel",
    body: "Totes, caps, patches, and wearables that guests co-create.",
    image: "/images/original.jpg",
    alt: "Customized fashion and apparel items",
  },
  {
    title: "Tech & Accessories",
    body: "Phone cases, gadgets, and desk accessories with on-brand personalization.",
    image: "/images/rotating.jpg",
    alt: "Customized tech accessories on display",
  },
  {
    title: "Lifestyle & Gifts",
    body: "Mugs, notebooks, bottles, and keepsakes designed around your story.",
    image: "/images/themed-effect.jpg",
    alt: "Lifestyle and gift items with custom designs",
  },
];

export function LiveCustomizationProductsCarousel() {
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
      className="relative mt-4 px-4 md:px-2"
      setApi={setApi}
    >
      <CarouselContent className="pb-6 md:-ml-4">
        {PRODUCT_ITEMS.map((item) => (
          <CarouselItem
            key={item.title}
            className="basis-full pb-4 sm:basis-1/2 lg:basis-1/3 md:pl-4"
          >
            <div className="h-full px-2">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col px-4 py-3.5">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-slate-700">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-md backdrop-blur-sm hover:bg-white sm:flex" />
      <CarouselNext className="-right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-md backdrop-blur-sm hover:bg-white sm:flex" />
    </Carousel>
  );
}

