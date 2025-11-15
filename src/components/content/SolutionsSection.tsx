'use client';

import { useState } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import type { Booth } from "@/types";
import BoothCard from "@/components/content/BoothCard";

type SolutionsSectionProps = {
  booths: Booth[];
};

export function SolutionsSection({ booths }: SolutionsSectionProps) {
  type Filter = "all" | "photo" | "video" | "engagement";

  const getFilterForBooth = (booth: Booth): Filter => {
    const type = booth.boothType.toLowerCase();
    if (type.includes("video")) return "video";
    if (type.includes("engagement")) return "engagement";
    return "photo";
  };

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "photo", label: "Photo Booths" },
    { id: "video", label: "Video Booths" },
    { id: "engagement", label: "Engagement Tech" },
  ];

  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const visibleBooths =
    activeFilter === "all"
      ? booths
      : booths.filter((booth) => getFilterForBooth(booth) === activeFilter);

  return (
    <Section
      id="solutions"
      className="bg-gradient-to-b from-[#FDF6EC] via-white to-white"
    >
      <Container className="space-y-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
            Solutions
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Photo, Video &amp; Engagement Tech Built for Brands
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-700">
            Choose from photo booths, video booths, and engagement technology – all designed to be brand-ready, AI-first, and budget-conscious.
          </p>
        </div>

        <div className="mt-4 inline-flex w-full flex-wrap items-center justify-center gap-2">
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

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
          {visibleBooths.map((booth) => (
   
              <BoothCard key={booth.id} booth={booth} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
