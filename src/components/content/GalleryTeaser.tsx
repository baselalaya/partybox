"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { GALLERY_IMAGES } from "./gallery-data";

const getLayout = (width: number) => {
  if (width >= 1024) {
    return { columns: 3, columnWidth: 230 };
  }
  if (width >= 768) {
    return { columns: 2, columnWidth: 220 };
  }

  return { columns: 1, columnWidth: 320 };
};

export function GalleryTeaserWaterfall() {
  const [layout, setLayout] = useState(getLayout(1024));

  useEffect(() => {
    const handleResize = () => setLayout(getLayout(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns = useMemo(
    () =>
      Array.from({ length: layout.columns }, (_, columnIndex) =>
        GALLERY_IMAGES.filter((_, imageIndex) => imageIndex % layout.columns === columnIndex)
      ),
    [layout.columns]
  );

  const duplicatedColumns = [...columns, ...columns];

  return (
    <div className="relative h-[56vh] max-h-[56vh] overflow-hidden rounded-[32px] border border-white/30 bg-[#f5f5f7] shadow-[0_35px_70px_rgba(15,23,42,0.15)]">
      <div
        className="gallery-scroll flex min-w-[max-content] gap-5 px-4 py-8"
        style={{ minWidth: `${layout.columns * layout.columnWidth * 2}px` }}
      >
        {duplicatedColumns.map((column, columnIndex) => (
          <div
            key={`col-${columnIndex}`}
            className="flex flex-col gap-5"
            style={{ flex: `0 0 ${layout.columnWidth}px`, width: layout.columnWidth }}
          >
            {column.map((image) => {
              const isLandscape = image.width >= image.height;
              return (
                <div
                  key={`${image.src}-${columnIndex}`}
                  className="overflow-hidden rounded-[30px] border border-white/60 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
                >
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: `${image.width} / ${image.height}`,
                      minHeight: isLandscape ? "140px" : "220px",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      quality={65}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 45vw, (max-width: 1200px) 22vw, 24vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
