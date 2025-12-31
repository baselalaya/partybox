import { Button } from '@/components/ui/button';
import Hero from '@/components/content/Hero';
import Section from '@/components/ui/Section';
import JsonLd from '@/components/seo/JsonLd';
import Container from '@/components/layout/Container';
import { SolutionsSection } from '@/components/content/SolutionsSection';
import { MessageCircle, Award, BarChart3, Sparkles } from 'lucide-react';
import Testimonials from '@/components/content/Testimonial';
import { HeroPropsStrip } from '@/components/content/HeroPropsStrip';
import { GalleryTeaserWaterfall } from '@/components/content/GalleryTeaser';
import { getAllBooths, getGalleryImages } from '@/lib/payload';
import Image from 'next/image';


export const dynamic = 'force-dynamic';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Party Box",
  "url": "https://partybox.ae",
  "logo": "/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-50-123-4567",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/partyboxae",
    "https://www.instagram.com/partyboxae"
  ]
};

export default async function Home() {
  const booths = await getAllBooths();
  const galleryImages = await getGalleryImages();
  return (
    <>
      <JsonLd data={organizationSchema} />

      <Hero
        title="Affordable, Brand-Ready Booths."
        subtitle="Built for brands and agencies that want clean, reliable, brand-ready booths at realistic budgets all over the UAE."
        mediaVideoSrc="/hero-video.mp4"
      >
        <Button
          asChild
          size="lg"
          className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-3 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <a href="/solutions">
            Explore Booths &amp; Tech
          </a>
        </Button>
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300"
        >
          <MessageCircle className="h-4 w-4 text-slate-500" />
          Get In Touch
        </a>
      </Hero>
      {/* Features Marquee */}


      <SolutionsSection booths={booths} />


      {/* Proof / Social Proof */}
      <Section
        id="proof"
        className="bg-gradient-to-b from-[#ffffff] via-white to-[#ffffff]"
      >

        <Container className="relative space-y-10 pt-4">
          <div className="pointer-events-none absolute inset-x-6 -top-6 h-40 rounded-[32px] bg-[radial-gradient(circle_at_10%_0,rgba(255,159,110,0.18),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(37,199,201,0.18),transparent_55%)] opacity-70 blur-2xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600">
              Proof
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Built for brands that expect results.
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-700">
              Since 2015, Partybox has powered 5,000+ events for 500+ premium brands across
              the UAE. We focus on reliable, on-brand experiences that actually move the
              needle, not just pretty booths.
            </p>
          </div>

          <div className="relative mx-auto grid max-w-5xl gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="group flex h-full flex-col justify-between rounded-[20px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.08)] md:p-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-600">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FF9F6E]/10">
                    <Award className="h-3 w-3 text-[#FF9F6E]" />
                  </span>
                  Track Record
                </div>
                <p className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
                  10+ YEARS
                </p>
                <p className="mt-1 text-xs md:text-sm text-slate-600">
                  of brand activations and events across the UAE.
                </p>
              </div>
            </div>

            <div className="group flex h-full flex-col justify-between rounded-[20px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.08)] md:p-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-600">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4F8BFF]/10">
                    <BarChart3 className="h-3 w-3 text-[#4F8BFF]" />
                  </span>
                  Proven Volume
                </div>
                <p className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
                  5K+ EVENTS
                </p>
                <p className="mt-1 text-xs md:text-sm text-slate-600">
                  with global brands, agencies, and venues that demand reliability.
                </p>
              </div>
            </div>

            <div className="group flex h-full flex-col justify-between rounded-[20px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.08)] md:p-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-600">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#25C7C9]/10">
                    <Sparkles className="h-3 w-3 text-[#25C7C9]" />
                  </span>
                  Built-In AI
                </div>
                <p className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
                  AI-FIRST TECH
                </p>
                <p className="mt-1 text-xs md:text-sm text-slate-600">
                  tailored looks, flows, and outputs for each campaign brief.
                </p>
              </div>
            </div>
          </div>
        </Container>

      </Section>

      {/* AI Features */}
      <Section
        id="ai-features"
        className="bg-gradient-to-b from-white via-[#E0F7F9] to-[#ffffff]"
      >

        <Container className="space-y-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600">
              AI Features
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              AI built into every photo booth, not bolted on.
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-700">
              Others treat AI as an add-on. With Partybox, AI-powered looks, characters, and
              intelligent enhancements are part of the core product — tuned to your campaign so
              your brand doesn&apos;t look like everyone else&apos;s.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto text-center">
            <p className="text-xs md:text-sm text-slate-700">
              Tell us the AI look you want — we&apos;ll design styles, flows, and outputs around
              your guidelines, from photo journeys to data-ready exports.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3 text-xs md:text-sm text-slate-800">
              <span className="inline-flex items-center rounded-[999px] bg-white/90 px-3 py-1.5 border border-slate-200 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                Character &amp; avatar journeys
              </span>
              <span className="inline-flex items-center rounded-[999px] bg-white/90 px-3 py-1.5 border border-slate-200 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                Brand-matched filters &amp; frames
              </span>
              <span className="inline-flex items-center rounded-[999px] bg-white/90 px-3 py-1.5 border border-slate-200 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                Themed effects &amp; looks
              </span>
              <span className="inline-flex items-center rounded-[999px] bg-white/90 px-3 py-1.5 border border-slate-200 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                Data-ready, social-first exports
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Action Figure",
                  body: "Turn guests into on-brand characters that match your campaign world.",
                  imageSrc: "/images/ai-action-figure.png",
                  imageAlt: "AI character creation preview",
                },
                {
                  title: "AI Scene Portrait",
                  body: "Filters built around your visual identity — not generic presets.",
                  imageSrc: "/images/ai-scene-portrait.png",
                  imageAlt: "Brand-matched filter example",
                },
                {
                  title: "AI Background Removal",
                  body: "Custom backdrops and effects aligned with your event theme.",
                  imageSrc: "/images/ai-brand-filter.webp",
                  imageAlt: "Themed AI effects preview",
                },
                {
                  title: "AI Face Swap",
                  body: "Pre-built looks for lifestyle, fashion, F&B, retail, and more.",
                  imageSrc: "/images/ai-face-swap.webp",
                  imageAlt: "Template library preview",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[20px] border border-white/70 bg-white/90 p-4 shadow-[0_14px_35px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]"
                >
                  <div className="relative mb-3 aspect-[9/16] w-full overflow-hidden rounded-[16px] bg-slate-200">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-slate-700">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="max-w-2xl text-center text-xs md:text-sm text-slate-700">
                Tell us the AI look you want — we'll design styles, flows, and outputs around your guidelines, from photo journeys to data-ready exports.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <a href="/contact">
                  Talk to us about AI
                </a>
              </Button>
            </div>
          </div>
        </Container>

      </Section>

      {/* Gallery teaser */}
      <Section
        id="gallery-teaser"
        className="bg-[#f7f7f9] py-16 md:py-24"
      >

        <Container className="space-y-10 text-slate-900">
          <HeroPropsStrip />

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              See Partybox in Action
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              See Partybox in Action
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              Real activations. Real impact. Real results.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white p-4 md:p-5 shadow-[0_25px_60px_rgba(15,23,42,0.2)]">
            <GalleryTeaserWaterfall images={galleryImages} />
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <a href="/gallery">Open Gallery</a>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Testimonials / Social Proof (temporarily hidden) */}
      {false && (
        <Section id="proof">
          <Container className="space-y-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                Social Proof
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Trusted by brands across the region
              </h2>
              <p className="mt-4 text-sm md:text-base text-slate-600">
                A sample of feedback from agencies and brands that use Partybox for their launches, roadshows, and always-on activations.
              </p>
            </div>
            <Testimonials />
          </Container>
        </Section>
      )}

      {/* Live Customization (temporarily hidden) */}
      {false && (
        <Section
          id="live-customization-preview"
          className="relative overflow-hidden bg-[#050816] text-white"
        >
          <div className="pointer-events-none absolute inset-0">
            <div
              className="h-full w-full bg-[url('/images/bg-gradient@4x.png')] bg-cover bg-center opacity-60"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(255,159,110,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(37,199,201,0.2),transparent_60%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
          </div>
          <Container className="relative space-y-10">
            <div className="max-w-4xl">
              <p className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-100">
                Live Customization
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
                AI-supported live customization that sits beside your shelves.
              </h2>
              <p className="mt-4 text-sm md:text-base text-slate-100">
                Plug a live customization station into your product displays or gifting bar. AI helps
                guests choose looks, copy, and layouts — your team focuses on the experience while the
                system handles artwork, data, and exports.
              </p>
            </div>

            <div className="grid gap-8 items-start">
              {/* Left: flow steps */}
              <div className="space-y-6 rounded-[28px] border border-slate-200/80 bg-white/95 p-5 md:p-6 text-slate-900 shadow-[0_26px_70px_rgba(15,23,42,0.35)]">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  How the station works
                </p>
                <div className="text-sm md:text-base">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF9F6E]/20 text-[11px] font-semibold text-[#FFEDD5]">
                        1
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          Guest scans a product or picks a theme.
                        </p>
                        <p className="mt-1 text-xs md:text-sm text-slate-600">
                          Guests start at the station, choosing a product, collection, or themed prompt from a branded on-screen menu.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4F8BFF]/25 text-[11px] font-semibold text-[#DBEAFE]">
                        2
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          AI designs the look in seconds.
                        </p>
                        <p className="mt-1 text-xs md:text-sm text-slate-600">
                          The station suggests layouts, copy, and looks that stay on-brand — ready for engraving, printing, or digital outputs.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25C7C9]/25 text-[11px] font-semibold text-[#CCFBF1]">
                        3
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          Your team approves &amp; personalizes live.
                        </p>
                        <p className="mt-1 text-xs md:text-sm text-slate-600">
                          The station outputs ready-to-run artwork and guest details so your team can focus on the craft, product handling, and handover moment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 text-xs md:text-sm text-slate-800 sm:grid-cols-3">
                  <span className="inline-flex items-center rounded-2xl bg-slate-100 px-3 py-2 border border-slate-200">
                    1–2 staff
                  </span>
                  <span className="inline-flex items-center rounded-2xl bg-slate-100 px-3 py-2 border border-slate-200">
                    60–80 custom pieces / hr
                  </span>
                  <span className="inline-flex items-center rounded-2xl bg-slate-100 px-3 py-2 border border-slate-200">
                    CRM &amp; consent-ready flows
                  </span>
                </div>
              </div>

              {/* Right: station card */}
              <div className="relative">
                <div className="pointer-events-none absolute -inset-3 rounded-[30px] bg-[radial-gradient(circle_at_0_0,rgba(255,159,110,0.2),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(79,139,255,0.25),transparent_60%)] opacity-70 blur-2xl" />
                <div className="relative rounded-[28px] border border-slate-200/80 bg-white/95 p-5 md:p-6 text-slate-900 backdrop-blur-md shadow-[0_26px_70px_rgba(15,23,42,0.4)]">
                  <div className="grid items-center gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                    <div className="relative aspect-[1/1] w-full overflow-hidden rounded-[20px] bg-slate-200">
                      <Image
                        src="/images/station-snapshot.png"
                        alt="Partybox live customization station snapshot"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Station snapshot
                      </p>
                      <p className="text-sm md:text-base text-slate-700">
                        A compact, brand-wrapped station with a touch display guests use to pick styles
                        and personalize products — while AI handles the heavy lifting in the background.
                      </p>
                      <div className="grid grid-cols-1 gap-2 text-xs md:text-sm text-slate-800 sm:grid-cols-2">
                        <span className="rounded-2xl bg-slate-100 px-3 py-2 border border-slate-200">
                          On-site engraving &amp; printing
                        </span>
                        <span className="rounded-2xl bg-slate-100 px-3 py-2 border border-slate-200">
                          AI-assisted layouts &amp; copy
                        </span>
                        <span className="rounded-2xl bg-slate-100 px-3 py-2 border border-slate-200">
                          Guest details &amp; preferences
                        </span>
                        <span className="rounded-2xl bg-slate-100 px-3 py-2 border border-slate-200">
                          Export-ready files for your team
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-slate-900 px-6 py-2.5 text-sm font-medium shadow hover:bg-slate-100 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <a href="/live-customization">
                  Learn About Live Customization
                </a>
              </Button>
            </div>
          </Container>
        </Section>
      )}

      {/* Final CTA / Get In Touch */}
      <Section id="final-cta" className="bg-gradient-to-b from-[#FFF6EC] via-white to-[#FFF6EC]">
        <Container className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/95 px-6 py-8 md:px-10 md:py-10 shadow-[0_24px_70px_rgba(255,153,113,0.32)] backdrop-blur-sm">
            <div className="relative space-y-6 text-center">
              <div>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                  Ready to make your brand stand out?
                </h2>
                <p className="mt-4 text-sm md:text-base text-slate-700">
                  High-value solutions within your budget. Let&apos;s create something amazing together.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="mt-2 rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  <a href="/contact">
                    Get In Touch
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="mt-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  <a href="https://wa.me/971521955327" target="_blank">
                    Chat on WhatsApp
                  </a>
                </Button>
                <a
                  href="tel:+97144488556"
                  className="mt-2 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  📞 +971 4 448 8556
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
