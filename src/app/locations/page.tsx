import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSeoMetadata } from '@/lib/seo';
import { getAllLocations } from '@/lib/wordpress';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Hero from '@/components/content/Hero';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, ArrowRight } from 'lucide-react';

export const revalidate = 300; // Locations don't change often

export async function generateMetadata(): Promise<Metadata> {
  const title = "Our Service Areas | Dubai, Abu Dhabi & UAE";
  const description = "We provide photo booth rentals across the UAE, with primary services in Dubai and Abu Dhabi. Contact us for events in other Emirates.";
  return generateSeoMetadata({ title, description, path: routes.locations.list });
}

export default async function LocationsPage() {
  const locations = await getAllLocations();

  return (
    <>
      <Hero
        title="Serving the UAE"
        subtitle="Bringing the fun to your event, wherever it may be."
      />
      <Section>
        <Breadcrumbs items={[{ name: 'Locations', href: routes.locations.list }]} />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {locations.map((location) => (
            <Link key={location.id} href={routes.locations.detail(location.slug)}>
              <Card className="group flex h-full items-center justify-between p-6 transition-all duration-300 hover:border-fuchsia-200 hover:shadow-md hover:-translate-y-1 rounded-xl">
                <div>
                    <CardHeader className="p-0">
                        <div className="flex items-center gap-4">
                             <MapPin className="h-8 w-8 text-fuchsia-600" />
                            <CardTitle className="font-headline text-2xl text-slate-900">{location.name}</CardTitle>
                        </div>
                        <CardDescription className="mt-2 text-slate-600">{location.description}</CardDescription>
                    </CardHeader>
                </div>
                <ArrowRight className="h-6 w-6 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-fuchsia-600" />
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
