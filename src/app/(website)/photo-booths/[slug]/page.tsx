import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getAllBooths, getBoothBySlug } from '@/lib/payload';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import FAQAccordion from '@/components/content/FAQAccordion';
import CTASection from '@/components/content/CTASection';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import BoothCard from '@/components/content/BoothCard';
import { StickyBoothCtaBar } from '@/components/content/StickyBoothCtaBar';
import { formatPrice } from '@/lib/utils';
import { BookingDialog } from '@/components/content/BookingDialog';

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

const productDetails: Record<string, {
  intro: string;
  features: string[];
  specs: string[];
  useCases: string[];
  technology: string[];
}> = {
  "partybox-retro": {
    intro: "Partybox Retro brings timeless photo strips into the modern era. With integrated AI, professional lighting, and sleek branding options, it captures nostalgia while delivering studio-quality engagement at every event.",
    features: [
      "Retro-inspired design with modern hardware and UX.",
      "Compact footprint that fits into tight retail and event spaces.",
      "Large touchscreen interface for fast, intuitive guest flow.",
      "Full branding panels and on-screen branding opportunities.",
      "Fast print and digital output for high-traffic events.",
    ],
    specs: [
      "Dimensions: optimized for malls, pop-ups, and indoor activations.",
      "Power: standard single power outlet.",
      "Capacity: continuous sessions for high-traffic environments.",
      "Technology: integrated AI enhancement and instant sharing.",
      "Support: on-site operator and remote monitoring.",
      "Setup time: efficient setup to minimise venue disruption.",
    ],
    useCases: [
      "Retro-themed brand activations and launches.",
      "Lifestyle and fashion campaigns looking for nostalgia with polish.",
      "Mall and retail events where space and footfall matter.",
      "Heritage and anniversary events that want a classic feel.",
    ],
    technology: [
      "Built-in AI enhancement tuned to your brand look.",
      "Optimised for strong engagement within practical budgets.",
      "Ready for data capture and future CRM integrations.",
    ],
  },
  "partybox-original": {
    intro: "Partybox Original is the versatile all-rounder — a modern photo booth built for brands that need dependable performance across different event types without over-complicating production.",
    features: [
      "Clean, modern design that fits most brand environments.",
      "Flexible footprint suitable for both compact and open spaces.",
      "High-quality camera and lighting for consistent output.",
      "Custom-branded overlays and layouts tailored to your campaign.",
      "Supports both prints and digital-only journeys.",
    ],
    specs: [
      "Dimensions: event-friendly size with flexible backdrop options.",
      "Power: single standard outlet.",
      "Capacity: designed for continuous activations over long event days.",
      "Technology: robust software stack with AI-ready pipelines.",
      "Support: on-site operations team with remote support as needed.",
      "Setup time: streamlined install and derig windows.",
    ],
    useCases: [
      "Corporate events and internal engagements.",
      "Roadshows and regional tours needing a reliable workhorse.",
      "Mixed-audience events where accessibility and ease-of-use matter.",
      "Brand experiences that need a simple, solid booth experience.",
    ],
    technology: [
      "AI-ready engine for filters, enhancements, and templates.",
      "Configurable flows for future data capture and integrations.",
      "Optimised to deliver value-driven, brand-safe outputs.",
    ],
  },
  "partybox-classic": {
    intro: "Partybox Classic is the signature photo booth built for brand impact and high-traffic events. It combines a strong physical presence with fast, reliable performance and AI-first visuals.",
    features: [
      "Signature tower design that stands out on the floor.",
      "High-output lighting and optics for premium-quality images.",
      "Custom-wrapped body and branded interface elements.",
      "High-throughput guest flow for busy activations and roadshows.",
      "Supports a wide range of AI looks and campaign templates.",
    ],
    specs: [
      "Dimensions: statement presence with adjustable layout options.",
      "Power: standard outlet (with managed power distribution).",
      "Capacity: built for continuous, high-volume usage.",
      "Technology: AI-first capture and processing pipeline.",
      "Support: dedicated on-site team for setup and live optimisation.",
      "Setup time: planned installs to align with venue operations.",
    ],
    useCases: [
      "High-traffic brand activations and large-scale events.",
      "Product launches and media events needing a strong hero booth.",
      "Experiential campaigns with heavy social coverage.",
      "Roadshows across malls, expos, and festivals.",
    ],
    technology: [
      "AI-enhanced capture for on-brand, eye-catching visuals.",
      "Advanced sharing and export options for social and post-event use.",
      "Ready to integrate with live customization and engagement layers.",
    ],
  },
  "partybox-360": {
    intro: "Partybox 360 delivers cinematic 360° video moments with AI-powered effects that amplify your brand across social channels.",
    features: [
      "Dynamic 360° capture platform with secure guest access.",
      "High-frame-rate video capture for smooth slow-motion output.",
      "Customizable overlays, music, and motion graphics.",
      "Optimised workflow for fast capture and export at events.",
      "Flexible footprint and safety-optimised setup.",
    ],
    specs: [
      "Platform size: suitable for 1–3 guests per spin (configurable).",
      "Power: dedicated outlet with stable supply.",
      "Capacity: high-frequency spins with efficient crew-led operations.",
      "Technology: AI-ready processing for effects and filters.",
      "Support: experienced 360 operations team and safety protocols.",
      "Setup time: planned rigging with venue guidelines in mind.",
    ],
    useCases: [
      "Social-first campaigns aiming for viral-ready video content.",
      "Launch events, premieres, and red-carpet experiences.",
      "Brand booths at exhibitions and conferences.",
      "Experiences where wow-factor and shareability are key.",
    ],
    technology: [
      "AI-powered video effects and stylised looks.",
      "Template-driven overlays and animations tuned to your brand.",
      "Optimised export settings for Instagram, TikTok, and Reels.",
    ],
  },
  "partybox-mirror": {
    intro: "Partybox Mirror is a glamorous, interactive mirror booth that turns every capture into a styled, AI-enhanced moment.",
    features: [
      "Full-length mirror interface with interactive prompts.",
      "Premium framing that adds instant glam to any space.",
      "Touch-driven journey with animations and on-screen guidance.",
      "Custom-branded frames, signatures, and overlays.",
      "Print and digital output options for guests.",
    ],
    specs: [
      "Footprint: designed for entrances, VIP areas, and feature zones.",
      "Power: standard outlet.",
      "Capacity: ideal for small groups and solo captures.",
      "Technology: AI-enhanced filters and intelligent framing.",
      "Support: on-site host to guide guests and manage the flow.",
      "Setup time: coordinated install with venue access windows.",
    ],
    useCases: [
      "Fashion, beauty, and lifestyle events needing a glam focal point.",
      "VIP lounges and hospitality suites.",
      "Weddings and premium private events with a brand layer.",
      "Retail launches and in-store experiences.",
    ],
    technology: [
      "AI beautification and style filters tuned to your brand.",
      "Interactive prompts that can be themed per campaign.",
      "Configurable flows for future engagement and data capture.",
    ],
  },
  "sketch-arm": {
    intro: "Sketch Arm is an AI-powered sketch artistry experience that uses a robotic arm to create live, personalised portraits and artwork.",
    features: [
      "Robotic arm that draws portraits or illustrations in real-time.",
      "AI-driven sketch generation based on photos or prompts.",
      "Configurable art styles aligned with your brand or campaign.",
      "Physical takeaway artwork guests can keep and share.",
      "Branded media, paper, or card stock options.",
    ],
    specs: [
      "Footprint: compact yet visually striking hardware setup.",
      "Power: dedicated outlet with stable supply.",
      "Capacity: optimised throughput for continuous drawing cycles.",
      "Technology: AI sketch generation and robotic control system.",
      "Support: on-site specialist plus remote technical backup.",
      "Setup time: scheduled installation and calibration period.",
    ],
    useCases: [
      "Innovation-led brand activations highlighting AI and creativity.",
      "Tech, art, and design-focused events.",
      "Retail and mall activations with dwell-time objectives.",
      "Corporate events looking for a unique talking point.",
    ],
    technology: [
      "AI-supported sketch generation tailored to your brand look.",
      "Programmable styles that can change per event or segment.",
      "Data-ready flows for capturing guest preferences or stories.",
    ],
  },
  "scribble-booth": {
    intro: "Scribble Booth is a creative drawing booth where guests leave handwritten and sketched messages that are captured, digitised, and ready to share.",
    features: [
      "Physical drawing surface for guests to create their own messages.",
      "Live capture of each drawing into a digital asset.",
      "Optional prompts and templates to guide creativity.",
      "Flexible formats for print, projection, or digital sharing.",
      "Brandable frame and surrounding area.",
    ],
    specs: [
      "Footprint: adaptable to small or medium spaces.",
      "Power: standard outlet for capture hardware.",
      "Capacity: continuous guest flow with quick turnover.",
      "Technology: capture pipeline with optional AI clean-up.",
      "Support: on-site facilitator to encourage participation.",
      "Setup time: straightforward installation with test phase.",
    ],
    useCases: [
      "Community and CSR-focused events where stories matter.",
      "Brand launches wanting authentic, guest-created content.",
      "Education, culture, and family events.",
      "Hybrid physical-digital campaigns collecting guest input.",
    ],
    technology: [
      "Optional AI enhancement to clean and stylise drawings.",
      "Digital archiving for post-event content and storytelling.",
      "Configurable flows for future data tagging and analysis.",
    ],
  },
  "catch-the-baton": {
    intro: "Catch the Baton is an interactive reflex-based game that grabs attention, drives participation, and can be configured to capture valuable data.",
    features: [
      "Fast-paced physical engagement that draws crowds.",
      "Configurable difficulty levels and scoring logic.",
      "Brandable hardware, visuals, and on-screen prompts.",
      "Leaderboard and prize mechanics to encourage repeat play.",
      "Option to tie participation to data capture journeys.",
    ],
    specs: [
      "Footprint: compact game footprint suitable for high-traffic zones.",
      "Power: standard outlet.",
      "Capacity: high churn with short, replayable rounds.",
      "Technology: responsive sensors and game logic engine.",
      "Support: on-site game host and technical operator.",
      "Setup time: efficient install calibrated to the venue space.",
    ],
    useCases: [
      "Exhibitions and trade shows where you need to stop passers-by.",
      "Retail and mall activations focused on dwell-time and data.",
      "Youth and sports-focused campaigns.",
      "Any event needing an energy spike and talking point.",
    ],
    technology: [
      "Configurable data capture flows (sign-ups, surveys, lead forms).",
      "Integration-ready event data for CRM and analytics.",
      "Option to pair with photo or video capture for content.",
    ],
  },
};

export async function generateStaticParams() {
  const booths = await getAllBooths();
  return booths.map((booth) => ({
    slug: booth.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const booth = await getBoothBySlug(slug);
  if (!booth) {
    return {};
  }
  return generateSeoMetadata({
    seo: booth.seo,
    path: routes.booths.detail(booth.slug),
    image: booth.thumbnailImage.url,
  });
}

export default async function BoothDetailPage({ params }: Props) {
  const { slug } = await params;
  const booth = await getBoothBySlug(slug);

  if (!booth) {
    notFound();
  }

  const formattedStartingPrice = formatPrice(booth.startingPrice);

  const allBooths = await getAllBooths();
  const crossSellBooths = allBooths.filter((b) => b.slug !== booth.slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": booth.title,
    "name": `Rent ${booth.title}`,
    "description": booth.excerpt,
    "provider": {
      "@type": "Organization",
      "name": "Dubai Booths"
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    }
  };


  return (
    <>
      <JsonLd data={serviceSchema} />
      <Section className="pt-8 md:pt-12 bg-gradient-to-b from-[#FDF6EC] via-white to-[#ffffff]">
        <Breadcrumbs
          items={[
            { name: 'Photo Booths', href: routes.booths.list },
            { name: booth.title, href: routes.booths.detail(booth.slug) },
          ]}
        />
        <div className="mt-8 grid items-start gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div
            className="relative aspect-[3/4] w-full overflow-hidden rounded-[32px] bg-slate-900 ring-1 ring-white/10 animate-fade-in-up"
            style={{ animationDelay: "80ms" }}
          >
            <Image
              src={booth.thumbnailImage.url}
              alt={booth.thumbnailImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: "140ms" }}
          >
            <Badge
              variant="secondary"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm"
            >
              {booth.boothType}
            </Badge>
            <h1 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              {booth.title}
            </h1>
            <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#FF9F6E] via-[#FFD45A] to-[#FF6C8B]" />
            <p className="mt-4 max-w-prose text-sm md:text-base text-slate-700">
              {booth.excerpt}
            </p>
            <div className="mt-6 inline-flex items-baseline gap-2 text-sm md:text-base text-slate-800">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                Starting at
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900 shadow-sm">
                <Image
                  src="/UAE_Dirham_Symbol.svg"
                  alt="UAE dirham"
                  width={14}
                  height={14}
                  className="inline-block mr-1"
                />
                {formattedStartingPrice}
              </span>
            </div>

            <div id="booth-hero-cta" className="mt-6 flex flex-wrap gap-3">
              <BookingDialog
                boothTitle={booth.title}
                boothSlug={booth.slug}
                triggerLabel="Book This Booth"
              />
              <Link
                href={routes.contact}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300"
              >
                Ask About Availability
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-700 pt-6">
              {booth.features.slice(0, 3).map((feature) => (
                <span
                  key={feature.text}
                  className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-800"
                >
                  {feature.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {booth.content && (
        <Section className="bg-white">
          <div
            className="prose max-w-none text-slate-700"
            dangerouslySetInnerHTML={{ __html: booth.content }}
          />
        </Section>
      )}

      {/* {productDetails[booth.slug] && (
        <Section className="bg-white">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="rounded-[24px] border border-slate-200/80 bg-[#FFF6EC] p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                Technical Specifications
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {productDetails[booth.slug].specs.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-slate-200/80 bg-[#FFF6EC] p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                Use Cases
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {productDetails[booth.slug].useCases.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-slate-200/80 bg-[#FFF6EC] p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                Key Technology &amp; Customization
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {productDetails[booth.slug].technology.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      )} */}
      {booth.galleryImages.length > 0 && (
        <Section id="gallery" className="bg-white">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Real output
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Gallery</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
            {booth.galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative aspect-video w-full overflow-hidden rounded-[24px] border border-slate-200/70 bg-slate-200 shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.18)] ${index % 2 === 0 ? "mt-2" : "mb-2"
                  }`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </Section>
      )}

      {booth.faqs.length > 0 && (
        <Section id="faq" className="bg-[#FFF6EC]">
          <div className="mx-auto max-w-3xl rounded-[24px] border border-slate-200/80 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl md:text-3xl font-semibold">
              {booth.title} FAQs
            </h2>
            <FAQAccordion faqs={booth.faqs} />
          </div>
        </Section>
      )}
      {crossSellBooths.length > 0 && (
        <Section className="bg-white">
          <div className="mx-auto max-w-5xl space-y-6">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                More Options
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Explore other Partybox setups
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {crossSellBooths.map((other) => (
                <div
                  key={other.id}
                  className="opacity-0 animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
                >
                  <BoothCard booth={other} />
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}
      <CTASection />

      <StickyBoothCtaBar boothTitle={booth.title} boothSlug={booth.slug} />

      {/* Sticky bottom CTA bar */}

    </>
  );
}
