import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { getAllEvents } from '@/lib/wordpress';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Hero from '@/components/content/Hero';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import EventCard from '@/components/content/EventCard';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const title = "Photo Booths for Any Event | Weddings, Corporate, Parties";
  const description = "We provide photo booth rentals for all types of events in Dubai, including weddings, corporate functions, birthday parties, and more. Find the perfect package for your occasion.";
  return generateSeoMetadata({ title, description, path: routes.events.list });
}

export default async function EventsPage() {
  const events = await getAllEvents();

  return (
    <>
      <Hero
        title="For Any Event Imaginable"
        subtitle="Whatever you're celebrating, a photo booth brings the fun."
      />
      <Section>
        <Breadcrumbs items={[{ name: 'Events', href: routes.events.list }]} />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>
    </>
  );
}
