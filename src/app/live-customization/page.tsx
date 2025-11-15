import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateSeoMetadata({
  title: "AI-Powered Live Customization | Partybox",
  description:
    "Turn products into experiences with AI-powered live customization. On-site engraving, printing, and personalization built for brand activations.",
  path: routes.liveCustomization,
});

export default function LiveCustomizationPage() {
  return (
    <>
      <Section className="bg-gradient-to-r from-[#0B1020] via-[#111827] to-[#020617] text-white">
        <Container className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">
              Live Customization
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">
              AI-Powered Live Customization
            </h1>
            <h2 className="mt-3 text-lg md:text-xl font-medium text-white">
              Turn Products Into Experiences
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-100/90">
              We turn giveaways into brand moments. From laser engraving to
              instant printing, every product is personalized live — so guests
              walk away with something that feels personal and proudly connected
              to your brand.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                size="lg"
                asChild
              >
                <a href={routes.contact}>Personalize for My Event</a>
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/70 bg-white/5 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                size="lg"
                asChild
              >
                <a href={routes.booths.list}>Explore Products</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-r from-[#E0F7F9] via-[#FFF6EC] to-[#FFE4F2]">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Smart Customization, Built for Brands
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              At Partybox, we combine AI, automation, and interactive hardware
              to bring real-time product personalization to your activations.
              Every setup is designed for efficiency, scalability, and maximum
              brand visibility — no unnecessary complexity, no hidden costs.
              Built for brands that need impact within realistic budgets.
            </p>
            <ul className="mt-6 space-y-3 text-sm md:text-base text-slate-700">
              <li>• On-site engraving and printing stations</li>
              <li>• AI-supported personalization flows</li>
              <li>• Branded interfaces and data capture</li>
              <li>• Fully automated fulfillment and giveaway systems</li>
            </ul>
          </div>
          <div className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              How It Works
            </h3>
            <ol className="mt-4 space-y-4 text-sm md:text-base text-slate-700">
              <li>
                <strong>1. Guests Interact</strong> — Scan a QR code or use an
                on-site screen to personalize their item.
              </li>
              <li>
                <strong>2. AI Generates</strong> — The system designs or
                processes the customization instantly.
              </li>
              <li>
                <strong>3. Live Production</strong> — Engraving, printing, or
                digital personalization happens in real time.
              </li>
              <li>
                <strong>4. Instant Collection</strong> — Guests receive a
                branded product they helped create.
              </li>
            </ol>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Products You Can Personalize
            </h2>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-slate-700">
              <li>
                <strong>Beauty &amp; Cosmetics</strong> — Lipsticks, compacts,
                fragrances, and gifting kits customized live.
              </li>
              <li>
                <strong>Fashion &amp; Apparel</strong> — Totes, caps, patches,
                and wearables that guests co-create.
              </li>
              <li>
                <strong>Tech &amp; Accessories</strong> — Phone cases, gadgets,
                and desk accessories with on-brand personalization.
              </li>
              <li>
                <strong>Lifestyle &amp; Gifts</strong> — Mugs, notebooks,
                bottles, and keepsakes designed around your story.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Works Seamlessly with Partybox Solutions
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              Live customization can be paired with your favorite Partybox
              setups to create a single, cohesive brand experience.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-800">
              <span className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                Partybox Retro
              </span>
              <span className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                Partybox Classic
              </span>
              <span className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                Partybox Original
              </span>
              <span className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                Partybox Mirror
              </span>
              <span className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                Sketch Arm
              </span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-r from-[#E0F7F9] via-[#FFF6EC] to-[#FFE4F2]">
        <Container className="space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Why Live Customization Wins
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
              <div className="rounded-[24px] bg-white p-4 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">95%</p>
                <p className="mt-1 text-xs text-slate-600">Higher Engagement</p>
              </div>
              <div className="rounded-[24px] bg-white p-4 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">4x</p>
                <p className="mt-1 text-xs text-slate-600">Brand Recall</p>
              </div>
              <div className="rounded-[24px] bg-white p-4 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">98%</p>
                <p className="mt-1 text-xs text-slate-600">Keep Rate</p>
              </div>
              <div className="rounded-[24px] bg-white p-4 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">79%</p>
                <p className="mt-1 text-xs text-slate-600">Social Shares</p>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm md:text-base text-slate-700">
              <li>• Instant brand connection at the point of gifting.</li>
              <li>• Built-in social amplification as guests share their items.</li>
              <li>• Stronger event impact with memorable, personalized products.</li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#FDF6EC]">
        <Container className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white px-6 py-8 text-center md:px-10 md:py-10">
            <div className="pointer-events-none absolute -right-10 top-0 h-24 w-24 rounded-full bg-gradient-to-tr from-[#4F8BFF] via-[#25C7C9] to-[#FFD45A] opacity-40 blur-xl" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-20 w-40 rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] opacity-40 blur-xl" />
            <div className="relative space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Ready to Personalize Your Next Event?
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                Join leading brands using Partybox Live Customization to create
                smarter, more personal experiences that engage guests and amplify
                your brand visibility.
              </p>
              <div className="flex justify-center gap-3">
                <Button
                  className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  size="lg"
                  asChild
                >
                  <a href={routes.contact}>Talk to Our Team</a>
                </Button>
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                📞 +971 4 448 8556 | 💬 WhatsApp
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
