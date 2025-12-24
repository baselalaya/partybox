"use client";

import { useState } from "react";
import type { Booth } from "@/types";
import BoothCard from "@/components/content/BoothCard";

type Filter = "all" | "photo" | "video" | "engagement";

type BoothListingProps = {
  booths: Booth[];
};

function getFilterForBooth(booth: Booth): Filter {
  const type = booth.boothType.toLowerCase();
  if (type.includes("video")) return "video";
  if (type.includes("engagement")) return "engagement";
  return "photo";
}

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "photo", label: "Photo Booths" },
  { id: "video", label: "Video Booths" },
  { id: "engagement", label: "Engagement Tech" },
];

export function BoothListing({ booths }: BoothListingProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const visibleBooths =
    activeFilter === "all"
      ? booths
      : booths.filter((booth) => getFilterForBooth(booth) === activeFilter);

  return (
    <>
      <div className="mt-6 inline-flex w-full flex-wrap items-center justify-start gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            data-active={activeFilter === filter.id}
            className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-slate-300 hover:bg-slate-50 data-[active=true]:bg-slate-900 data-[active=true]:text-[#FDF6EC]"
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {visibleBooths.map((booth, idx) => (
          <div
            key={booth.id}
            className="opacity-0 animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <BoothCard booth={booth} />
          </div>
        ))}
      </div>
    </>
  );
}
