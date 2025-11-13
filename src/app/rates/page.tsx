import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Hero from '@/components/content/Hero';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PricingTable from '@/components/content/PricingTable';
import CTASection from '@/components/content/CTASection';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const title = "Rates & Packages | Dubai Photo Booth Rentals";
  const description = "Find transparent pricing and packages for our photo booth rentals in Dubai. Choose the perfect package for your event duration and needs.";
  return generateSeoMetadata({ title, description, path: routes.rates });
}

export default async function RatesPage() {
  return (
    <>
      <Hero
        title="Our Rates & Packages"
        subtitle="Simple, transparent pricing to fit your event perfectly."
      />
      <Section>
        <Breadcrumbs items={[{ name: 'Rates', href: routes.rates }]} />
        <div className="mt-8">
            <PricingTable />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
