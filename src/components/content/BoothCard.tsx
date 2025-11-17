import Link from 'next/link';
import Image from 'next/image';
import type { Booth } from '@/types';
import { routes } from '@/lib/routes';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn, formatPrice } from '@/lib/utils';
import { BookingDialog } from '@/components/content/BookingDialog';

type BoothCardProps = {
  booth: Booth;
  highlight?: boolean;
};

export default function BoothCard({ booth, highlight = false }: BoothCardProps) {
  const formattedPrice = formatPrice(booth.startingPrice);

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white text-left shadow-sm",
        "transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]",
        highlight && "border-transparent shadow-[0_32px_90px_rgba(255,156,156,0.45)]"
      )}
    >
      <Badge
        variant="secondary"
        className="absolute left-10 top-4 z-10 rounded-full border border-white/60 bg-black/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_25px_rgba(15,23,42,0.45)] backdrop-blur-sm"
      >
        {booth.boothType}
      </Badge>
      <CardHeader className="p-0">
        <Link href={routes.booths.detail(booth.slug)}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[24px] bg-slate-100 sm:aspect-[3/4]">
            <Image
              src={booth.thumbnailImage.url}
              alt={booth.thumbnailImage.alt}
              fill
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {booth.features.length > 0 && (
              <div className="pointer-events-none absolute inset-x-3 bottom-3 flex flex-wrap gap-2 sm:inset-x-4 sm:bottom-4">
                {booth.features.slice(0, 3).map((feature) => (
                  <span
                    key={feature.text}
                    className="inline-flex max-w-full items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-900 shadow-sm backdrop-blur"
                  >
                    <span className="truncate">{feature.text}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-2.5 px-5 pb-4 pt-2 md:gap-3.5 md:px-6 md:pb-5 md:pt-3">
        <h3 className="line-clamp-2 text-base md:text-lg font-semibold tracking-tight text-slate-900">
          {booth.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600 line-clamp-2">
          {booth.excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 border-t border-slate-100 p-5 pt-4 md:p-6 md:pt-4">
        <div className="flex items-baseline gap-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
            Starting at
          </span>
          <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs md:text-sm font-semibold text-slate-900">
            <Image
              src="/UAE_Dirham_Symbol.svg"
              alt="UAE dirham"
              width={14}
              height={14}
              className="inline-block mr-1"
            />
            {formattedPrice}
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
          <BookingDialog
            boothTitle={booth.title}
            boothSlug={booth.slug}
            triggerLabel="Book Now"
            triggerClassName="w-full justify-center sm:w-auto"
          />
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full border-slate-200 bg-slate-50 text-slate-800 transition-colors group-hover:border-[#FF6C8B]/60 group-hover:bg-white group-hover:text-slate-900 sm:w-auto"
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
