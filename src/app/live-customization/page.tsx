import type { Metadata } from "next";
import Image from "next/image";
import { generateSeoMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { getAllBooths } from "@/lib/wordpress";
import { LiveCustomizationStats } from "@/components/content/LiveCustomizationStats";
import { LiveCustomizationProductsCarousel } from "@/components/content/LiveCustomizationProductsCarousel";
import { LiveCustomizationSolutionsCarousel } from "@/components/content/LiveCustomizationSolutionsCarousel";
import Breadcrumbs from "@/components/content/Breadcrumbs";

export const metadata: Metadata = generateSeoMetadata({
  title: "AI-Powered Live Customization | Partybox",
  description:
    "Turn products into experiences with AI-powered live customization. On-site engraving, printing, and personalization built for brand activations.",
  path: routes.liveCustomization,
});

export default async function LiveCustomizationPage() {
  const booths = await getAllBooths();
  const solutionBoothSlugs = [
    "partybox-retro-photo-booth",
    "partybox-classic-photo-booth",
    "partybox-mirror-photo-booth",
    "partybox-360-video-booth",
    "sketch-arm",
  ] as const;
  const solutionBooths = solutionBoothSlugs
    .map((slug) => booths.find((booth) => booth.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-white via-[#FFF6EC] to-white text-slate-900">
        <Container className="flex flex-col items-center gap-8 pt-8 pb-6 text-center md:pt-12 md:pb-8">
          <div className="flex w-full justify-center">
            <Breadcrumbs
              items={[{ name: "Live Customization", href: routes.liveCustomization }]}
            />
          </div>
          <div className="max-w-2xl space-y-4">
            <p className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600">
              Live Customization
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              AI-Powered Live Customization
            </h1>
            <p className="text-base md:text-lg font-medium text-slate-900/90">
              Turn products into experiences guests talk about.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              We turn giveaways into brand moments. From laser engraving to instant printing,
              every product is personalized live — so guests walk away with something that
              feels personal and proudly connected to your brand.
            </p>
            <div className="mt-4 flex w-full flex-col items-stretch justify-center gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <Button
                className="w-full rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto"
                size="lg"
                asChild
              >
                <a href={routes.contact}>Personalize for My Event</a>
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-full border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto"
                size="lg"
                asChild
              >
                <a href={routes.booths.list}>Explore Products</a>
              </Button>
            </div>

          </div>

          <div className="relative w-full max-w-sm md:max-w-md">
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_0_0,rgba(255,159,110,0.18),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(37,199,201,0.2),transparent_55%)] opacity-80 blur-3xl" />
            <div className="relative rounded-[28px] bg-transparent">
              <div className="relative m-3 aspect-[3/4] w-auto overflow-hidden rounded-[24px] bg-transparent">
                <Image
                  src="/images/station-snapshot.png"
                  alt="Partybox live customization station in action"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating feature chips */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-20 top-8 hidden max-w-[190px] -translate-x-full items-center gap-1.5 rounded-full border border-slate-200 bg-white/95 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.16)] sm:flex md:max-w-[220px]">
                  On-site engraving &amp; printing stations
                </div>
                <div className="absolute right-20 top-16 hidden max-w-[190px] translate-x-full items-center gap-1.5 rounded-full border border-slate-200 bg-white/95 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.16)] sm:flex md:max-w-[220px]">
                  AI-supported personalization flows
                </div>
                <div className="absolute left-20 bottom-20 hidden max-w-[190px] -translate-x-full items-center gap-1.5 rounded-full border border-slate-200 bg-white/95 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.16)] sm:flex md:max-w-[220px]">
                  Branded interfaces &amp; data capture
                </div>
                <div className="absolute right-20 bottom-20 hidden max-w-[190px] translate-x-full items-center gap-1.5 rounded-full border border-slate-200 bg-white/95 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.16)] sm:flex md:max-w-[220px]">
                  Automated fulfillment &amp; giveaway systems
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* How it works */}
      <Section className="bg-gradient-to-b from-white via-[#FFF6EC] to-white">
        <Container className="space-y-6 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              How it works at your event
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-700">
              A simple four-step flow designed for busy retail floors, pop-ups, and brand activations.
            </p>
          </div>
          <ol className="mx-auto grid max-w-4xl gap-4 text-left text-sm md:grid-cols-4 md:text-base text-slate-700">
            <li className="flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FF9F6E]/15 text-xs font-semibold text-[#FF9F6E] shadow-[0_4px_12px_rgba(248,113,113,0.45)] md:h-10 md:w-10">
                1
              </div>
              <div>
                <p className="font-semibold text-slate-900">Guests interact.</p>
                <p className="mt-1 text-xs md:text-sm text-slate-600">
                  They scan a QR code or use an on-site screen to personalize their item.
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#4F8BFF]/15 text-xs font-semibold text-[#4F8BFF] shadow-[0_4px_12px_rgba(59,130,246,0.45)] md:h-10 md:w-10">
                2
              </div>
              <div>
                <p className="font-semibold text-slate-900">AI generates.</p>
                <p className="mt-1 text-xs md:text-sm text-slate-600">
                  The system designs or processes the customization instantly, staying on-brand.
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25C7C9]/15 text-xs font-semibold text-[#25C7C9] shadow-[0_4px_12px_rgba(45,212,191,0.45)] md:h-10 md:w-10">
                3
              </div>
              <div>
                <p className="font-semibold text-slate-900">Live production.</p>
                <p className="mt-1 text-xs md:text-sm text-slate-600">
                  Engraving, printing, or digital personalization happens in real time at the station.
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-500 shadow-[0_4px_12px_rgba(16,185,129,0.45)] md:h-10 md:w-10">
                4
              </div>
              <div>
                <p className="font-semibold text-slate-900">Instant collection.</p>
                <p className="mt-1 text-xs md:text-sm text-slate-600">
                  Guests receive a branded product they helped create — built to be kept and shared.
                </p>
              </div>
            </li>
          </ol>
        </Container>
      </Section>

      {/* What it is */}
      <Section className="bg-white">
        <Container className="grid max-w-6xl gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
          <div className="relative order-2 md:order-1 md:justify-self-center">
            <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-[radial-gradient(circle_at_0_0,rgba(255,159,110,0.18),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(37,199,201,0.22),transparent_55%)] opacity-70 blur-2xl" />
            <div className="relative rounded-[24px]">
              <div className="relative m-3 aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[20px] md:max-w-md lg:max-w-lg">
                <Image
                  src="/images/smart-custom.png"
                  alt="Smart live customization workflow"
                  width={640}
                  height={853}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="order-1 space-y-4 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Smart customization, built for brands
            </h2>
            <p className="text-sm md:text-base text-slate-700">
              At Partybox, we combine AI, automation, and interactive hardware to bring real-time
              product personalization to your activations. Every setup is designed for efficiency,
              scalability, and maximum brand visibility — no unnecessary complexity, no hidden
              costs. Built for brands that need impact within realistic budgets.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-2 rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <a href={routes.contact}>Talk to us about live customization</a>
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="max-w-5xl space-y-10">
          {/* Products you can personalize */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Products you can personalize
            </h2>
            <LiveCustomizationProductsCarousel />
          </div>

          {/* Works seamlessly with Partybox solutions */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Works seamlessly with Partybox solutions
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              Plug live customization into your favorite Partybox setups to create a single,
              cohesive brand experience.
            </p>
            <LiveCustomizationSolutionsCarousel booths={solutionBooths} />
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-b from-white via-[#FFF6EC] to-[#FDF6EC]">
        <Container className="space-y-8 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600">
              Why it matters
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Why live customization wins
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-700">
              Personalization turns giveaways into moments. These are the numbers we typically see
              when brands plug live customization into their campaigns.
            </p>
            <LiveCustomizationStats />
            <ul className="mt-6 space-y-2 text-sm md:text-base text-slate-700">
              <li>Instant brand connection at the point of gifting.</li>
              <li>Built-in social amplification as guests share their items.</li>
              <li>Stronger event impact with memorable, personalized products.</li>
            </ul>
          </div>
        </Container>
      </Section>

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
                  <a href={routes.contact}>
                    Get In Touch
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="mt-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  <a href="https://wa.me/97144488556" target="_blank">
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
