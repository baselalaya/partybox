"use client";

import { useEffect, useRef, useState } from "react";

type StatConfig = {
  label: string;
  value: number;
  suffix?: string;
};

const STATS: StatConfig[] = [
  { label: "Higher engagement", value: 95, suffix: "%" },
  { label: "Brand recall", value: 4, suffix: "x" },
  { label: "Keep rate", value: 98, suffix: "%" },
  { label: "Social shares", value: 79, suffix: "%" },
];

export function LiveCustomizationStats() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentValues, setCurrentValues] = useState<number[]>(
    () => STATS.map(() => 0)
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCurrentValues(
        STATS.map((stat) => Math.round(stat.value * eased))
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4"
    >
      {STATS.map((stat, index) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-between rounded-[24px] border border-white/80 bg-white/95 p-4 text-center shadow-[0_18px_45px_rgba(15,23,42,0.1)]"
        >
          <div className="bg-gradient-to-r from-[#FF9F6E] via-[#FF6C8B] to-[#4F8BFF] bg-clip-text text-transparent">
            <p className="text-2xl md:text-3xl font-extrabold">
              {currentValues[index]}
              {stat.suffix}
            </p>
          </div>
          <p className="mt-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
