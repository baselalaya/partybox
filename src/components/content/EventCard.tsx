import Link from 'next/link';
import Image from 'next/image';
import type { EventType } from '@/types';
import { routes } from '@/lib/routes';

type EventCardProps = {
  event: EventType;
};

function getEventAccent(title: string) {
  const t = title.toLowerCase();
  if (t.includes('corporate') || t.includes('brand')) return 'bg-[#25C4D8]';
  if (t.includes('wedding')) return 'bg-[#FF6C8B]';
  if (t.includes('birthday')) return 'bg-[#FFC642]';
  return 'bg-[#26C281]';
}

export default function EventCard({ event }: EventCardProps) {
  const accentClass = getEventAccent(event.title);

  return (
    <Link
      href={routes.events.detail(event.slug)}
      className="group block transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]"
    >
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
        <div className={`absolute inset-x-0 top-0 h-1.5 ${accentClass}`} />
        <Image
          src={event.heroImage.url}
          alt={event.heroImage.alt}
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl"
        />
        <div className="px-5 pb-5 pt-4">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
            Event
          </span>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">{event.title}</h3>
          <p className="mt-2 text-sm text-slate-600 line-clamp-2">{event.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
