import Link from 'next/link';
import Image from 'next/image';
import type { EventType } from '@/types';
import { routes } from '@/lib/routes';

type EventCardProps = {
  event: EventType;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={routes.events.detail(event.slug)} className="group block transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={event.heroImage.url}
          alt={event.heroImage.alt}
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-lg font-semibold text-white">{event.title}</h3>
          <p className="mt-1 text-sm text-slate-100/90">{event.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
