import { Sparkles } from "lucide-react";

const ITEMS = [
  "AI-First Booth Journeys",
  "Brand-Matched Templates & Layouts",
  "Live Sharing & Lead Capture",
  "Mall, Retail & Roadshow Ready",
  "Production-Friendly Setups",
  "Trusted by 500+ Brands",
];

export function HeroPropsStrip() {
  return (
    <div className="mt-5 mb-20 pt-4 pb-4">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FDF6EC] via-[#FDF6EC] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FDF6EC] via-[#FDF6EC] to-transparent" />
        <div className="hero-strip flex items-center gap-12 whitespace-nowrap text-[50px] font-black text-black leading-none">
          {[...ITEMS, ...ITEMS].map((label, index) => (
            <span
              key={`${label}-${index}`}
              className="inline-flex items-center gap-10 text-black"
            >
              <span className="text-black">{label}</span>
              <Sparkles className="h-10 w-10 text-primary/20" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
