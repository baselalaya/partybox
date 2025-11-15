import { Button } from '@/components/ui/button';
import Hero from '@/components/content/Hero';
import Section from '@/components/ui/Section';
import JsonLd from '@/components/seo/JsonLd';
import Container from '@/components/layout/Container';
import { SolutionsSection } from '@/components/content/SolutionsSection';
import { MessageCircle } from 'lucide-react';
import Testimonials from '@/components/content/Testimonial';
import { HeroPropsStrip } from '@/components/content/HeroPropsStrip';
import { getAllBooths } from '@/lib/wordpress';
import Image from 'next/image';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Party Box",
  "url": "https://dubaibooths.com",
  "logo": "/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-50-123-4567",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/dubaibooths",
    "https://www.instagram.com/dubaibooths"
  ]
};

export default async function Home() {
  const booths = await getAllBooths();
  return (
    <>
      <JsonLd data={organizationSchema} />

      <Hero
        title="Affordable, Brand-Ready Booths."
        subtitle="Built for brands and agencies that want clean, reliable, brand-ready booths at realistic budgets — not the weak experiences you see all over the UAE."
        mediaVideoSrc="https://websites-cdn.s3.eu-central-1.amazonaws.com/partybox.ae/videos/partybox.mp4"
      >
        <Button
          asChild
          size="lg"
          className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-3 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <a href="#solutions">
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
        <HeroPropsStrip />

        <Container className="relative space-y-10 pt-4">
          <div className="absolute inset-x-6 -top-6 h-40 rounded-[32px] bg-[radial-gradient(circle_at_10%_0,rgba(255,159,110,0.18),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(37,199,201,0.18),transparent_55%)] opacity-70 blur-2xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center">
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

          <div className="relative grid gap-4 md:gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="group rounded-[20px] border border-slate-200/70 bg-white/90 px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Track Record
              </p>
              <p className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">
                10+ years
              </p>
              <p className="mt-1 text-xs md:text-sm text-slate-600">
                of brand activations and events across the UAE.
              </p>
            </div>

            <div className="group rounded-[20px] border border-slate-200/70 bg-white/90 px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Proven Volume
              </p>
              <p className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">
                5K+ events
              </p>
              <p className="mt-1 text-xs md:text-sm text-slate-600">
                with global brands, agencies, and venues that demand reliability.
              </p>
            </div>

            <div className="group rounded-[20px] border border-slate-200/70 bg-white/90 px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Built-In AI
              </p>
              <p className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">
                AI-first tech
              </p>
              <p className="mt-1 text-xs md:text-sm text-slate-600">
                tailored looks, flows, and outputs for each campaign brief.
              </p>
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
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600">
              AI Features
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              AI built into every booth, not bolted on.
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
                  title: "Character creation",
                  body: "Turn guests into on-brand characters that match your campaign world.",
                  imageSrc: "/images/charcter.jpg",
                  imageAlt: "AI character creation preview",
                },
                {
                  title: "Brand filters",
                  body: "Filters built around your visual identity — not generic presets.",
                  imageSrc: "/images/brand-filter.jpg",
                  imageAlt: "Brand-matched filter example",
                },
                {
                  title: "Themed effects",
                  body: "Custom backdrops and effects aligned with your event theme.",
                  imageSrc: "/images/themed-effect.jpg",
                  imageAlt: "Themed AI effects preview",
                },
                {
                  title: "Template library",
                  body: "Pre-built looks for lifestyle, fashion, F&B, retail, and more.",
                  imageSrc: "/images/template-lib.png",
                  imageAlt: "Template library preview",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[20px] border border-white/70 bg-white/90 p-4 shadow-[0_14px_35px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]"
                >
                  <div className="relative mb-3 aspect-[3/4] w-full overflow-hidden rounded-[16px] bg-slate-200">
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
                Data-ready journeys, beautification, and social-first export settings come as standard
                — ready for CRM, UTM tracking, and deeper integrations when you need them.
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
        className="bg-gradient-to-b from-white via-[#FFF6EC] to-white"
      >
        <Container className="space-y-8">
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
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-4 md:p-5">
            <div className="pointer-events-none absolute inset-y-6 left-0 w-16 bg-gradient-to-r from-[#FDF6EC] via-[#FDF6EC] to-transparent" />
            <div className="pointer-events-none absolute inset-y-6 right-0 w-16 bg-gradient-to-l from-[#FDF6EC] via-[#FDF6EC] to-transparent" />
            <div className="flex gap-4 overflow-x-auto pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none]">
              {[
                "/gallery/strip-1.jpg",
                "/gallery/strip-2.jpg",
                "/gallery/strip-3.jpg",
                "/gallery/strip-4.jpg",
                "/gallery/strip-5.jpg",
                "/gallery/strip-6.jpg",
              ].map((src, index) => (
                <div
                  key={src}
                  className={`relative h-40 min-w-[11rem] overflow-hidden rounded-[24px] border border-slate-200/70 bg-slate-200 shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] ${
                    index % 2 === 0 ? "mt-4" : "mb-4"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border border-slate-900/10 bg-white px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <a href="/gallery">Open Gallery</a>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Testimonials / Social Proof */}
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

      {/* Live Customization preview */}
      <Section
        id="live-customization-preview"
        className="bg-gradient-to-r from-[#0B1020] via-[#111827] to-[#020617] text-white"
      >
        <Container className="grid items-center gap-10 md:grid-cols-[1.2fr,1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
              Live Customization
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              AI-supported live customization.
            </h2>
            <h3 className="mt-2 text-base md:text-lg font-medium">
              Turn products into experiences.
            </h3>
            <p className="mt-4 text-sm md:text-base text-slate-100/90">
              Engraving, printing, personalization — AI-powered live customization that transforms giveaways into interactive brand experiences. Every product is customized live, so guests walk away with something that feels personal and proudly connected to your brand.
            </p>
            <div className="mt-6">
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
          </div>
          <div className="relative">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                Preview
              </p>
              <p className="mt-3 text-sm md:text-base text-slate-100">
                Designed to sit beside product displays, gifting bars, and hero shelves — plugged into AI flows, CRM capture, and automated fulfillment as you grow.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs md:text-sm text-slate-100/90">
                <span className="rounded-2xl bg-white/10 px-3 py-2">
                  On-site engraving
                </span>
                <span className="rounded-2xl bg-white/10 px-3 py-2">
                  Live printing
                </span>
                <span className="rounded-2xl bg-white/10 px-3 py-2">
                  AI-assisted designs
                </span>
                <span className="rounded-2xl bg-white/10 px-3 py-2">
                  Simple data capture
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-4 -top-4 h-10 w-24 rounded-full bg-gradient-to-r from-[#FFD45A] to-[#FF6C8B] opacity-80 shadow-lg" />
          </div>
        </Container>
      </Section>

      {/* Final CTA / Get In Touch */}
      <Section id="final-cta" className="bg-[#FDF6EC]">
        <Container className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white px-6 py-8 md:px-10 md:py-10">
            <div className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full bg-gradient-to-tr from-[#4F8BFF] via-[#25C7C9] to-[#FFD45A] opacity-40 blur-xl" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-20 w-40 rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] opacity-40 blur-xl" />
            <div className="relative space-y-6 text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Get In Touch
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                  Ready to Make Your Brand Stand Out?
                </h2>
                <p className="mt-4 text-sm md:text-base text-slate-700">
                  High-value solutions within your budget. Let&apos;s create something amazing together.
                </p>
              </div>
              <div className="space-y-2 text-sm md:text-base text-slate-800">
                <p className="font-medium">
                  Get in Touch
                </p>
                <p className="text-slate-700">
                  📞 +971 4 448 8556 | 💬 WhatsApp
                </p>
              </div>
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  <a href="/contact">
                    Get In Touch
                  </a>
                </Button>
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                10+ Years Experience • 5K+ Activations • AI-First Tech
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
