import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PricingTable from '@/components/content/PricingTable';
import CTASection from '@/components/content/CTASection';
import { CheckCircle2, Sparkles, Share2, Users } from 'lucide-react';
import Testimonials from '@/components/content/Testimonial';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const title = "Rates & Packages | Party Box Photo Booth Rentals";
  const description = "Find transparent pricing and packages for our photo booth rentals in Dubai. Choose the perfect package for your event duration and needs.";
  return generateSeoMetadata({ title, description, path: routes.rates });
}

export default async function RatesPage() {
  return (
    <>
      <Section className="bg-white">
        <Breadcrumbs items={[{ name: 'Rates', href: routes.rates }]} />
        <div className="mt-6 grid gap-10">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Pricing
            </p>
            <h1 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Our Rates &amp; Packages
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              Simple, transparent pricing to fit your event perfectly—no hidden fees, unlimited sessions, and on-site support.
            </p>
            <div className="mt-5 inline-flex flex-wrap gap-2 text-xs md:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                • No hidden fees
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sky-700">
                Unlimited sessions
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-violet-700">
                On-site attendant
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F5F7FB]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500 text-center">
            Packages
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-center text-slate-900">
            Choose Your Package
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 text-center mb-8">
            Pick the perfect fit for your event’s size and schedule. Upgrade anytime.
          </p>
          <PricingTable />
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              What’s included
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
              Every package, fully loaded
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              A clear view of everything that’s built into every booking—from setup to sharing.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Before the event
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Design & setup
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  Custom-branded templates and overlays
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  Pre-event consultation on flow
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  Delivery, setup & teardown included
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    During the event
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Guest experience
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  Unlimited sessions and retakes
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  On-site professional attendant
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  Studio-grade lighting & equipment
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Share2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    After the event
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Sharing & recap
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  Instant digital sharing via QR / WhatsApp
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  Access to full event gallery
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  Optional analytics & engagement recap
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
            Social proof
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
            Loved by Event Planners
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Trusted results, smooth setups, and share-worthy moments—every time.
          </p>
        </div>
        <Testimonials />
      </Section>
      <CTASection />
    </>
  );
}
