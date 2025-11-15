import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "../layout/Container";
import { Check, Share2, Sparkles, MessageCircle } from "lucide-react";
import { HeroPropsStrip } from "./HeroPropsStrip";
import { StatChip } from "../ui/StatChip";

type HeroProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundImage?: {
    src: string;
    alt: string;
  };
  backgroundVideoSrc?: string;
  backgroundPosterSrc?: string;
  mediaVideoSrc?: string;
  className?: string;
};

export default function Hero({
  title,
  subtitle,
  children,
  backgroundImage,
  backgroundVideoSrc,
  backgroundPosterSrc,
  mediaVideoSrc,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-[#FDF6EC]" />
      <div className="absolute inset-y-10 right-[-10%] w-[60%] rounded-[48px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,159,110,0.25),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(37,199,201,0.22),transparent_60%)] opacity-70 blur-2xl" />
      <div className="relative">
        <Container className="pt-16 md:pt-20 pb-24 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_minmax(0,1fr)]">
            {/* Left: text */}
            <div className="max-w-xl">
              <p
                className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-700 animate-fade-in-up"
                style={{ animationDelay: "120ms" }}
              >
                High-impact booth solutions for brands
              </p>
              <h1
                className="mt-2 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[0.95] animate-fade-in-up"
                style={{ animationDelay: "160ms" }}
              >
                <span className="block text-[0.92em] text-slate-800">
                  Affordable, Brand-Ready Booths.
                </span>
              </h1>
              <p
                className="mt-4 max-w-xl text-sm md:text-base text-slate-700 animate-fade-in-up"
                style={{ animationDelay: "240ms" }}
              >
                Built for brands and agencies that want clean, reliable, brand-ready booths at
                realistic budgets — not the weak experiences you see all over the UAE.
              </p>
              <p
                className="mt-4 inline-flex items-center gap-2 text-xs md:text-sm text-slate-800 animate-fade-in-up"
                style={{ animationDelay: "280ms" }}
              >
                <span className="text-slate-500">High-impact solutions starting at</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs md:text-sm font-semibold text-slate-900">
                  <Image
                    src="/UAE_Dirham_Symbol.svg"
                    alt="UAE dirham"
                    width={14}
                    height={14}
                    className="inline-block"
                  />
                  2,000
                </span>
              </p>

              <div
                className="mt-4 flex flex-wrap items-center gap-3 animate-fade-in-up"
                style={{ animationDelay: "320ms" }}
              >
                {children}
              </div>

              {/* Removed stat chips row here; value props now live in bottom marquee */}
            </div>

            {/* Right: collage */}
            <div className="relative">
              <div className="relative mx-auto max-w-lg group">
                {/* Ambient glow behind video */}
                <div className="pointer-events-none absolute -inset-4 rounded-[40px] bg-[radial-gradient(circle_at_10%_0,rgba(255,159,110,0.28),transparent_60%),radial-gradient(circle_at_90%_100%,rgba(79,139,255,0.26),transparent_60%)] opacity-70 blur-2xl" />
                <div className="relative aspect-[4/4.5] w-full rounded-[32px] border border-white/15 bg-slate-950/90 shadow-[0_26px_70px_rgba(15,23,42,0.55)] overflow-hidden backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.015] group-hover:-translate-y-1">
                  {mediaVideoSrc || backgroundVideoSrc ? (
                    <>
                      <video
                        className="h-full w-full object-cover"
                        src={mediaVideoSrc || backgroundVideoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster={backgroundPosterSrc}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(255,159,110,0.18),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(79,139,255,0.2),transparent_55%)]" />
                      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
                    </>
                  ) : backgroundImage ? (
                    <>
                      <Image
                        src={backgroundImage.src}
                        alt={backgroundImage.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(255,159,110,0.18),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(79,139,255,0.2),transparent_55%)]" />
                    </>
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
                  )}
                </div>

                {/* Overlapping tiles – stacked fading captions */}
                <div className="pointer-events-none">
                  <div className="absolute -bottom-6 left-1/2 w-[88%] max-w-sm -translate-x-1/2 sm:-bottom-8 md:-bottom-9">
                    <div className="relative h-[100px] sm:h-[108px]">
                      {/* Card 1 */}
                      <div className="hero-caption-card hero-caption-card-1 flex items-center gap-3 rounded-[20px] border border-white/60 bg-white/80 backdrop-blur-md px-4 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#FF9F6E]/10">
                          <Sparkles className="h-4 w-4 text-[#FF9F6E]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-tight text-slate-900">
                            Brand-Matched AI Styles
                          </p>
                          <p className="mt-1 text-[11px] text-slate-600">
                            Characters, filters, and frames tuned precisely to your brand.
                          </p>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="hero-caption-card hero-caption-card-2 flex items-center gap-3 rounded-[20px] border border-white/60 bg-white/80 backdrop-blur-md px-4 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#4F8BFF]/10">
                          <Share2 className="h-4 w-4 text-[#4F8BFF]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-tight text-slate-900">
                            Intelligent Guest Experiences
                          </p>
                          <p className="mt-1 text-[11px] text-slate-600">
                            Smart photo &amp; video features that elevate interaction &amp; engagement.
                          </p>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="hero-caption-card hero-caption-card-3 flex items-center gap-3 rounded-[20px] border border-white/60 bg-white/80 backdrop-blur-md px-4 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#25C7C9]/10">
                          <Check className="h-4 w-4 text-[#25C7C9]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-tight text-slate-900">
                            Built for Real Events
                          </p>
                          <p className="mt-1 text-[11px] text-slate-600">
                            Reliable hardware &amp; workflows designed for production timelines.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative shapes */}
              <div className="pointer-events-none" aria-hidden="true">
                <div className="absolute -right-20 bottom-4 h-40 w-40 rounded-full bg-gradient-to-br from-[#4F8BFF]/20 via-[#25C7C9]/15 to-transparent blur-2xl" />
                <div className="absolute -left-10 top-10 h-28 w-28 rounded-[28px] border border-dashed border-[#FF9F6E]/45" />
                <div className="absolute right-10 -top-6 h-8 w-8 rounded-full bg-[#FF6C8B]/25" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
