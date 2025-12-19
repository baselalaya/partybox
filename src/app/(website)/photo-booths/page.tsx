import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { getAllBooths } from '@/lib/payload';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import { BoothListing } from '@/components/content/BoothListing';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const title = "Our Photo Booths | AI, 360, Mirror & More";
  const description = "Explore our wide range of photo booths available for rent in Dubai. From cutting-edge AI booths to classic party favorites, find the perfect fit for your event.";
  return generateSeoMetadata({ title, description, path: routes.booths.list });
}

export default async function PhotoBoothsPage() {
  const booths = await getAllBooths();

  return (
    <>
      <Section className="bg-[#FDF6EC]">
        <Breadcrumbs items={[{ name: 'Photo Booths', href: routes.booths.list }]} />
        <div className="mt-6 max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
            Photo Booths
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Our Photo Booths
          </h1>
          <p className="text-sm md:text-base text-slate-700">
            Discover AI-powered photo, video, and engagement experiences built for real brand activations across Dubai and the region.
          </p>
        </div>
        <BoothListing booths={booths} />
      </Section>
    </>
  );
}
