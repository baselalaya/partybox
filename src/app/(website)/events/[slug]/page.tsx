import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllEvents, getEventBySlug } from '@/lib/wordpress';
import { getAllBooths } from '@/lib/payload';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Hero from '@/components/content/Hero';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import CTASection from '@/components/content/CTASection';
import BoothCard from '@/components/content/BoothCard';

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

// export async function generateStaticParams() {
//   const events = await getAllEvents();
//   return events.map((event) => ({
//     slug: event.slug,
//   }));
// }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) {
    return {};
  }
  return generateSeoMetadata({
    seo: event.seo,
    path: routes.events.detail(event.slug),
    image: event.heroImage.url,
  });
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) {
    notFound();
  }

  const allBooths = await getAllBooths();
  const recommendedBooths = allBooths.filter(booth => event.featuredBooths.includes(booth.id));

  return (
    <>
      <Hero
        title={`Photo Booth for ${event.title} in Dubai`}
        subtitle={event.excerpt}
        backgroundImage={{ src: event.heroImage.url, alt: event.heroImage.alt }}
      />
      <Section>
        <Breadcrumbs items={[
          { name: 'Events', href: routes.events.list },
          { name: event.title, href: routes.events.detail(event.slug) }
        ]} />
        <div className="mt-8 prose max-w-none text-slate-700" dangerouslySetInnerHTML={{ __html: event.content }} />
      </Section>
      {recommendedBooths.length > 0 && (
        <Section id="recommended-booths" className="bg-slate-50">
          <h2 className="text-center text-3xl font-bold font-headline mb-8">Recommended Booths for {event.title}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {recommendedBooths.map((booth) => (
              <BoothCard key={booth.id} booth={booth} />
            ))}
          </div>
        </Section>
      )}
      <CTASection />
    </>
  );
}
