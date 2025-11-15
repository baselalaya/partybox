import Link from 'next/link';
import Image from 'next/image';
import type { Booth } from '@/types';
import { routes } from '@/lib/routes';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type BoothCardProps = {
  booth: Booth;
  highlight?: boolean;
};

function getBoothAccent(boothType: string) {
  const type = boothType.toLowerCase();
  if (type.includes('ai')) return 'bg-[#635AFF]';
  if (type.includes('360')) return 'bg-[#25C4D8]';
  if (type.includes('mirror')) return 'bg-[#FF6C8B]';
  return 'bg-[#FFC642]';
}

export default function BoothCard({ booth, highlight = false }: BoothCardProps) {
  const accentBarClass = getBoothAccent(booth.boothType);

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white text-left shadow-sm",
        "transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]",
        highlight && "border-transparent shadow-[0_32px_90px_rgba(255,156,156,0.45)]"
      )}
    >
      <CardHeader className="p-0">
        <Link href={routes.booths.detail(booth.slug)}>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[24px] bg-slate-100">
            <Image
              src={booth.thumbnailImage.url}
              alt={booth.thumbnailImage.alt}
              fill
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <Badge
              variant="secondary"
              className="absolute left-4 top-4 rounded-full border border-white/50 bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_25px_rgba(15,23,42,0.45)] backdrop-blur-sm"
            >
              {booth.boothType}
            </Badge>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
          {booth.title}
        </h3>
        <p className="mt-2 flex-1 text-sm md:text-base leading-relaxed text-slate-600 line-clamp-2">
          {booth.excerpt}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {booth.features.slice(0, 3).map((feature) => (
            <span
              key={feature.text}
              className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-800"
            >
              {feature.text}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 p-6 pt-0 md:p-7">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
            Starting at
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs md:text-sm font-semibold text-slate-900">
            <Image
              src="/UAE_Dirham_Symbol.svg"
              alt="UAE dirham"
              width={14}
              height={14}
              className="inline-block mr-1"
            />
            {booth.startingPrice}
          </span>
        </div>
        <div className="mt-1 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <Link href={`${routes.contact}?booth=${encodeURIComponent(booth.slug)}`}>
              Book Now
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-slate-200 bg-slate-50 text-slate-800 group-hover:border-[#FF6C8B]/60 group-hover:bg-white group-hover:text-slate-900"
          >
            <Link href={routes.booths.detail(booth.slug)} className="inline-flex items-center gap-2">
              View details
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
