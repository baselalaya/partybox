import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { getAllBooths } from '@/lib/wordpress';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Hero from '@/components/content/Hero';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import BoothCard from '@/components/content/BoothCard';

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata(): Promise<Metadata> {
  const title = "Our Photo Booths | AI, 360, Mirror & More";
  const description = "Explore our wide range of photo booths available for rent in Dubai. From cutting-edge AI booths to classic party favorites, find the perfect fit for your event.";
  return generateSeoMetadata({ title, description, path: routes.booths.list });
}

export default async function PhotoBoothsPage() {
  const booths = await getAllBooths();

  return (
    <>
      <Hero
        title="Our Photo Booths"
        subtitle="Discover the perfect interactive experience for your event."
      />
      <Section>
        <Breadcrumbs items={[{ name: 'Photo Booths', href: routes.booths.list }]} />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {booths.map((booth) => (
            <BoothCard key={booth.id} booth={booth} />
          ))}
        </div>
      </Section>
    </>
  );
}
