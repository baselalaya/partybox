import type { Metadata } from "next";
import Image from "next/image";
import { generateSeoMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { getAllBooths } from "@/lib/payload";
import { LiveCustomizationStats } from "@/components/content/LiveCustomizationStats";
import { LiveCustomizationProductsCarousel } from "@/components/content/LiveCustomizationProductsCarousel";
import { LiveCustomizationSolutionsCarousel } from "@/components/content/LiveCustomizationSolutionsCarousel";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import LaserEngravingEffect from "@/components/content/LaserEngravingEffect";

export const dynamic = 'force-dynamic';

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
        <Container className="flex flex-col items-center gap-6 pt-6 pb-4 text-center md:pt-10 md:pb-6">
          <div className="flex w-full justify-center">
            <Breadcrumbs
              items={[{ name: "Live Customization", href: routes.liveCustomization }]}
            />
          </div>
          <div className="max-w-2xl space-y-3">
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
            <div className="pt-2 flex w-full flex-col items-stretch justify-center gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <Button
                className="w-full rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-auto"
                size="lg"
                asChild
              >
                <a href={routes.contact}>View Integration</a>
              </Button>
            </div>
          </div>

          {/* Laser Engraving Effect */}
          <div className="w-full mt-4 md:mt-6">
            <LaserEngravingEffect />
          </div>
        </Container>
      </Section>

      {/* Customization Methods */}
      <Section className="bg-gradient-to-b from-white via-[#FFF6EC] to-white pt-0 pb-12 md:pt-0 md:pb-16">
        <Container className="space-y-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Customization Methods
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-700">
              Professional-grade equipment and expert operators deliver flawless personalization in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

            {/* 1. Fusion Print */}
            <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white/90 shadow-md p-6 md:p-8 gap-4 transition-all duration-200 hover:shadow-lg">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/fusion-print.jpg"
                  alt="Fusion Print"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-slate-900 text-xl md:text-2xl">Fusion Print</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-200 bg-slate-50 px-2 py-0.5 rounded-full">Instant. Personal.</span>
                </div>
                <p className="text-slate-700 text-sm md:text-base">
                  Full-color personalization created live at your event. Photos, graphics, and branding are heat-fused onto select materials for a vibrant, durable finish within minutes.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Suitable for:</p>
                <div className="flex flex-wrap gap-2">
                  {["Apparel", "Bags", "Stationery", "Drinkware", "Desk Accessories"].map((item) => (
                    <span key={item} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{item}</span>
                  ))}
                  <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-md">Event Souvenirs</span>
                </div>
              </div>
            </div>

            {/* 2. Laser Etching */}
            <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white/90 shadow-md p-6 md:p-8 gap-4 transition-all duration-200 hover:shadow-lg">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/laser-etching.jpg"
                  alt="Laser Etching"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-slate-900 text-xl md:text-2xl">Laser Etching</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-200 bg-slate-50 px-2 py-0.5 rounded-full">Clean. Precise.</span>
                </div>
                <p className="text-slate-700 text-sm md:text-base">
                  Permanent engraving on wood, metal, bamboo, and more. A refined, tactile finish that elevates corporate gifting and premium event merchandise.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Suitable for:</p>
                <div className="flex flex-wrap gap-2">
                  {["Wooden Gifts", "Tech Accessories", "Eco Merchandise", "Lifestyle Items"].map((item) => (
                    <span key={item} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Hot Foil Stamping */}
            <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white/90 shadow-md p-6 md:p-8 gap-4 transition-all duration-200 hover:shadow-lg">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/hot-foil.jpg"
                  alt="Hot Foil Stamping"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-slate-900 text-xl md:text-2xl">Hot Foil Stamping</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-200 bg-slate-50 px-2 py-0.5 rounded-full">Metallic. Elegant.</span>
                </div>
                <p className="text-slate-700 text-sm md:text-base">
                  Heat-applied foils create a shimmering, embossed-style imprint. Perfect for luxury experiences, VIP activations, and beautifully elevated keepsakes.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Suitable for:</p>
                <div className="flex flex-wrap gap-2">
                  {["Stationery", "Luxury Packaging", "Bags", "Premium Gifts", "Event Merchandise"].map((item) => (
                    <span key={item} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Badge Making */}
            <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white/90 shadow-md p-6 md:p-8 gap-4 transition-all duration-200 hover:shadow-lg">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/badge.jpg"
                  alt="Badge Making"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-slate-900 text-xl md:text-2xl">Badge Making</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-200 bg-slate-50 px-2 py-0.5 rounded-full">Fun. Collectible.</span>
                </div>
                <p className="text-slate-700 text-sm md:text-base">
                  Instant creation of personalized fridge magnets and pin badges using a live badge press. A highly interactive and memorable on-site experience.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Suitable for:</p>
                <div className="flex flex-wrap gap-2">
                  {["Fridge Magnets", "Pin Badges", "Event Souvenirs", "Corporate Giveaways", "Festivals"].map((item) => (
                    <span key={item} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Bring Your Own Product (Spans 2) */}
            <div className="relative flex flex-col md:flex-row md:col-span-2 rounded-2xl border border-slate-200 bg-white/90 shadow-md p-6 md:p-8 gap-6 md:items-center transition-all duration-200 hover:shadow-lg">
              <div className="relative w-full md:w-1/3 aspect-[16/9] md:aspect-square rounded-xl overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src="/images/byop.jpg"
                  alt="Bring Your Own Product"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-semibold text-slate-900 text-xl md:text-2xl">Bring Your Own Product</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-200 bg-slate-50 px-2 py-0.5 rounded-full">Personalised. On the spot.</span>
                </div>
                <p className="text-slate-700 text-sm md:text-base">
                  We also personalize client-supplied items. Simply share the product with us in advance, and we’ll assess which process - Fusion Print, Laser Etching, Hot Foil Stamping, or Badge Making can be safely applied on-site.
                </p>
                <div className="mt-2 pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Suitable for:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Select Accessories", "Tech Items", "Packaging", "Lifestyle Goods", "Corporate Merchandise"].map((item) => (
                      <span key={item} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Why Live Customization Wins */}
      <Section className="bg-gradient-to-b from-white via-[#FFF6EC] to-[#FDF6EC] py-12 md:py-16">
        <Container className="space-y-6 text-center">
          <div className="mx-auto max-w-3xl space-y-3">
            <p className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600">
              Why it matters
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Why live customization wins
            </h2>
            <p className="text-sm md:text-base text-slate-700">
              Personalization turns giveaways into moments. These are the numbers we typically see
              when brands plug live customization into their campaigns.
            </p>
          </div>
          <LiveCustomizationStats />
          <ul className="mx-auto max-w-xl space-y-1.5 text-sm md:text-base text-slate-700 text-left list-disc pl-6">
            <li>Instant brand connection at the point of gifting.</li>
            <li>Built-in social amplification as guests share their items.</li>
            <li>Stronger event impact with memorable, personalized products.</li>
          </ul>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section id="final-cta" className="bg-gradient-to-b from-[#FFF6EC] via-white to-[#FFF6EC] py-12 md:py-16">
        <Container className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200/70 bg-white/95 px-6 py-8 md:px-10 md:py-10 shadow-[0_24px_70px_rgba(255,153,113,0.25)] backdrop-blur-sm">
            <div className="relative space-y-5 text-center">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                  Ready to make your brand stand out?
                </h2>
                <p className="text-sm md:text-base text-slate-700">
                  High-value solutions within your budget. Let&apos;s create something amazing together.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  <a href={routes.contact}>Get In Touch</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  <a href="https://wa.me/97144488556" target="_blank">
                    Chat on WhatsApp
                  </a>
                </Button>
                <a
                  href="tel:+97144488556"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  📞 +971 4 448 8556
                </a>
              </div>
              <p className="text-xs md:text-sm text-slate-600 pt-1">
                10+ Years Experience • 5K+ Activations • AI-First Tech
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
