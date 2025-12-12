"use client";

import Image from "next/image";
import { GALLERY_IMAGES } from "./gallery-data";

export function GalleryVerticalWall() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/30 bg-[#f5f5f7] p-6 shadow-[0_35px_70px_rgba(15,23,42,0.12)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_IMAGES.map((image) => (
          <div
            key={image.src}
            className="overflow-hidden rounded-[30px] border border-white/60 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:-translate-y-1"
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: `${image.width} / ${image.height}` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={70}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
