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
import LaserEngravingEffect from "@/components/content/LaserEngravingEffect";

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
              ON-SITE PERSONALIZATION TECHNOLOGY

            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
Live Customization That Creates Lasting Connections
            </h1>
            <p className="text-base md:text-lg font-medium text-slate-900/90">
              Transform ordinary giveaways into unforgettable brand moments.
            </p>
            <p className="text-sm md:text-base text-slate-700">
 With laser engraving, heat transfer printing, and embroidery, every item is personalized on-site so guests leave with something truly theirs.


            </p>
            <div className="mt-4 flex w-full flex-col items-stretch justify-center gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <Button
                className="w-full rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto"
                size="lg"
                asChild
              >
                <a href={routes.contact}>View Integration</a>
              </Button>
              {/* <Button
                variant="outline"
                className="w-full rounded-full border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto"
                size="lg"
                asChild
              >
                <a href={routes.booths.list}>Explore Products</a>
              </Button> */}
            </div>

          </div>
                <LaserEngravingEffect />
          {/* <div className="relative w-full max-w-sm md:max-w-md">
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
          </div> */}
        </Container>
      </Section>
      {/* How it works */}
      <Section className="bg-gradient-to-b from-white via-[#FFF6EC] to-white">
        <Container className="space-y-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Customization Methods
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-700">
              Professional-grade equipment and expert operators deliver flawless personalization in real-time.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-7"
          >
            {/* Laser Engraving - Large tile */}
            <div className="relative flex flex-col rounded-3xl border border-slate-200 bg-white/90 shadow-lg px-12 py-12 justify-between min-h-[360px] md:min-h-[400px]">
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-[16/9] mb-8 rounded-3xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/live-laser-lipstick.jpg"
                    alt="Laser Engraving"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 text-2xl">Laser Engraving</h3>
                <p className="text-slate-700 text-base">
                  Precision laser etching on metal, wood, leather, and glass. Permanent, elegant customization that elevates any product.
                </p>
              </div>
              <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1 mt-3">
                <li>Water bottles &amp; drinkware</li>
                <li>Tech accessories</li>
                <li>Leather goods</li>
                <li>Corporate gifts</li>
              </ul>
            </div>
            {/* Heat Transfer Printing - Tall tile */}
            <div className="relative flex flex-col rounded-3xl border border-slate-200 bg-white/90 shadow-lg px-12 py-12 justify-between min-h-[400px] md:min-h-[460px]">
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-[16/9] mb-8 rounded-3xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/live-heat-transfer-new.jpg"
                    alt="Heat Transfer Printing"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 text-2xl">Heat Transfer Printing</h3>
                <p className="text-slate-700 text-base">
                  Vibrant, full-color designs on apparel and fabric products. Fast turnaround with photo-quality results.
                </p>
              </div>
              <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1 mt-3">
                <li>T-shirts &amp; hoodies</li>
                <li>Tote bags</li>
                <li>Caps &amp; headwear</li>
                <li>Fabric accessories</li>
              </ul>
            </div>
            {/* Live Embroidery - Wide tile */}
            <div className="relative flex flex-col rounded-3xl border border-slate-200 bg-white/90 shadow-lg px-12 py-12 justify-between min-h-[360px] md:min-h-[400px]">
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-[16/9] mb-8 rounded-3xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/live-embroidery-shirt.jpg"
                    alt="Live Embroidery"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 text-2xl">Live Embroidery</h3>
                <p className="text-slate-700 text-base">
                  Premium stitched customization for a luxury feel. Perfect for corporate branding and high-end activations.
                </p>
              </div>
              <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1 mt-3">
                <li>Baseball caps</li>
                <li>Polo shirts</li>
                <li>Jackets &amp; outerwear</li>
                <li>Premium apparel</li>
              </ul>
            </div>
            {/* Custom Design Software - Square tile */}
            <div className="relative flex flex-col rounded-3xl border border-slate-200 bg-white/90 shadow-lg px-12 py-12 justify-between items-start min-h-[300px] md:min-h-[320px]">
              <div className="w-full flex flex-col gap-4 items-start">
                <div className="relative w-full aspect-[16/9] mb-8 rounded-3xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/custom-design.jpeg"
                    alt="Custom Design Software"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 text-2xl text-left">Custom Design Software</h3>
                <p className="text-slate-700 text-base text-left">
                  Branded touchscreen kiosks with intuitive design interfaces. Guests create, preview, and approve their designs before production.
                </p>
              </div>
              <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1 mt-3 text-left w-full">
                <li>Touchscreen design stations</li>
                <li>Real-time preview</li>
                <li>Order management</li>
                <li>SMS notifications</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* What it is */}
      {/* <Section className="bg-white">
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
      </Section> */}
{/* 
      <Section className="bg-white">
        <Container className="max-w-5xl space-y-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Products you can personalize
            </h2>
            <LiveCustomizationProductsCarousel />
          </div>

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
      </Section> */}

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
