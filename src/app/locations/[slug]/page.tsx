import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllLocations, getLocationBySlug } from '@/lib/wordpress';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Hero from '@/components/content/Hero';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import CTASection from '@/components/content/CTASection';
import { CheckCircle } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export const revalidate = 300;

export async function generateStaticParams() {
  const locations = await getAllLocations();
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = await getLocationBySlug(params.slug);
  if (!location) {
    return {};
  }
  return generateSeoMetadata({
    seo: location.seo,
    path: routes.locations.detail(location.slug),
  });
}

export default async function LocationDetailPage({ params }: Props) {
  const location = await getLocationBySlug(params.slug);
  if (!location) {
    notFound();
  }

  return (
    <>
      <Hero
        title={`Photo Booths in ${location.name}`}
        subtitle={location.description}
      />
      <Section>
        <Breadcrumbs items={[
          { name: 'Locations', href: routes.locations.list },
          { name: location.name, href: routes.locations.detail(location.slug) }
        ]} />
        
        <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-2xl font-bold font-headline mb-4">Areas We Serve in {location.name}</h2>
                <ul className="space-y-3">
                    {location.serviceAreas.map(area => (
                        <li key={area} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-muted-foreground">{area}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                 <h2 className="text-2xl font-bold font-headline mb-4">Your Event Partner in {location.name}</h2>
                 <p className="text-muted-foreground">
                    Whether you're hosting a glamorous wedding on the Palm Jumeirah, a corporate gala in Business Bay, or a birthday bash in a private villa, we provide reliable and professional photo booth services across {location.name}. Our team is familiar with all major venues and ensures a timely and seamless setup.
                 </p>
            </div>
        </div>

      </Section>
      <CTASection />
    </>
  );
}
