"use client";

import Image from "next/image";

type ImageType = {
  src: string;
  width: number;
  height: number;
  alt: string;
  type?: 'image' | 'video';
}

export function GalleryTeaserWaterfall({ images }: { images: ImageType[] }) {
  if (!images || images.length === 0) return null;

  // Create a seamless loop by duplicating the images
  // We assume the total width of images is greater than the viewport
  const loopItems = [...images, ...images];

  return (
    <div className="group relative flex w-full flex-col overflow-hidden">

      {/* Marquee Track */}
      <div
        className="flex w-max animate-marquee items-center gap-4 hover:[animation-play-state:paused]"
        style={{
          // Inline style fallback if custom CSS not loaded
          animation: 'marquee 60s linear infinite'
        }}
      >
        {loopItems.map((image, index) => {
          const hasAspectRatio = image.width && image.height;
          // Use 350px height as base for the row
          const height = 350;
          const width = hasAspectRatio ? (image.width / image.height) * height : 350;

          return (
            <div
              key={`${image.src}-${index}`}
              className="relative flex-shrink-0 overflow-hidden rounded-[20px] bg-slate-100 shadow-sm transition-opacity duration-300"
              style={{
                height: `${height}px`,
                width: `${width}px`,
              }}
            >
              {image.type === 'video' ? (
                <video
                  src={image.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt || 'Gallery Project'}
                  fill
                  sizes="500px"
                  className="object-cover"
                />
              )}

              {/* Optional: Hover overlay provided by group-hover on container? 
                        Maybe simple hover effect on item itself.
                    */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 hover:bg-black/10" />
            </div>
          )
        })}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
