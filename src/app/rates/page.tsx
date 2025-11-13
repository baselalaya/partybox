import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Hero from '@/components/content/Hero';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PricingTable from '@/components/content/PricingTable';
import CTASection from '@/components/content/CTASection';
import FeatureList from '@/components/content/FeatureList';
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
      <Hero
        title="Our Rates & Packages"
        subtitle="Simple, transparent pricing to fit your event perfectly."
      >
        <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-700 md:grid-cols-3">
          <div className="rounded-xl bg-white/70 px-4 py-2 backdrop-blur ring-1 ring-slate-200">No hidden fees</div>
          <div className="rounded-xl bg-white/70 px-4 py-2 backdrop-blur ring-1 ring-slate-200">Unlimited sessions</div>
          <div className="rounded-xl bg-white/70 px-4 py-2 backdrop-blur ring-1 ring-slate-200">On-site attendant</div>
        </div>
      </Hero>

      <Section>
        <Breadcrumbs items={[{ name: 'Rates', href: routes.rates }]} />
        <div className="mt-10 grid gap-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-headline font-semibold text-slate-900">What’s Included</h2>
            <p className="mt-3 text-slate-600">Every package comes loaded with essentials guests love and organizers rely on.</p>
          </div>
          <FeatureList />
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center font-headline mb-3 text-slate-900">Choose Your Package</h2>
          <p className="text-center text-slate-600 mb-8">Pick the perfect fit for your event’s size and schedule. Upgrade anytime.</p>
          <PricingTable />
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-headline font-semibold text-slate-900">Loved by Event Planners</h2>
          <p className="mt-3 text-slate-600">Trusted results, smooth setups, and share-worthy moments—every time.</p>
        </div>
        <Testimonials />
      </Section>
      <CTASection />
    </>
  );
}
