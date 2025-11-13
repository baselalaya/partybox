import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "../layout/Container";
import { Check, Share2, Sparkles } from "lucide-react";

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

export default function Hero({ title, subtitle, children, backgroundImage, backgroundVideoSrc, backgroundPosterSrc, mediaVideoSrc, className }: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-b from-slate-900/40 via-white/80 to-white", className)}>
      {backgroundVideoSrc ? (
        <>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={backgroundPosterSrc}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-white/80 to-white" />
        </>
      ) : backgroundImage ? (
        <>
          <Image src={backgroundImage.src} alt={backgroundImage.alt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-white/80 to-white" />
        </>
      ) : null}

      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur animate-fade-in-up" style={{animationDelay: '80ms'}}>
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Cost-Effective Photo Booths for Brand Activations
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 animate-fade-in-up" style={{animationDelay: '160ms'}}>
                Smart Photo Booths for Brands in Dubai & Abu Dhabi.
              </h1>
              <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-600 animate-fade-in-up" style={{animationDelay: '240ms'}}>
                AI-powered photo booths for brand activations, launches, and events — professional quality without premium pricing.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{animationDelay: '320ms'}}>
                {children}
              </div>

              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-slate-600 animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <span className="inline-flex items-center gap-2"><Share2 className="h-4 w-4 text-slate-500"/> Instant sharing</span>
                <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-slate-500"/> Unlimited sessions</span>
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-slate-500"/> On-site attendant</span>
              </div>
            </div>

            {/* Right: video card */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.45)]">
              {mediaVideoSrc ? (
                <>
                  <video
                    className="h-full w-full object-cover"
                    src={mediaVideoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={backgroundPosterSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
                </>
              ) : backgroundVideoSrc ? (
                <>
                  <video
                    className="h-full w-full object-cover"
                    src={backgroundVideoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={backgroundPosterSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
                </>
              ) : backgroundImage ? (
                <Image src={backgroundImage.src} alt={backgroundImage.alt} fill className="object-cover" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
