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
    <div className="mt-0 mb-0 pt-0 pb-0">
      <div className="relative overflow-hidden rounded-lg">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FDF6EC] via-[#FDF6EC] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FDF6EC] via-[#FDF6EC] to-transparent" />
        <div className="hero-strip-led-frame">
            <div className="hero-strip-led-inner">
            <div className="hero-strip flex items-center gap-12 whitespace-nowrap text-[40px] md:text-[48px] font-black text-white/90 leading-none px-8 uppercase">
              {[...ITEMS, ...ITEMS].map((label, index) => (
                <span
                  key={`${label}-${index}`}
                  className="inline-flex items-center gap-8"
                >
                  <span>{label}</span>
                  <Sparkles className="h-8 w-8 md:h-9 md:w-9 text-[#FF9F6E]" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
