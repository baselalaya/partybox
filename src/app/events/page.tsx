import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { getAllEvents } from '@/lib/wordpress';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
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
      <Section className="bg-white">
        <Breadcrumbs items={[{ name: 'Events', href: routes.events.list }]} />
        <div className="mt-6 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
            Use cases
          </p>
          <h1 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Events We Cover
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Whatever you're celebrating, a photo booth brings the fun—from weddings and corporate galas to launch parties and activations.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>
    </>
  );
}
