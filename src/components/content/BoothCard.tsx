import Link from 'next/link';
import Image from 'next/image';
import type { Booth } from '@/types';
import { routes } from '@/lib/routes';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

type BoothCardProps = {
  booth: Booth;
};

export default function BoothCard({ booth }: BoothCardProps) {
  return (
    <Link href={routes.booths.detail(booth.slug)}>
      <Card className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur-md text-left shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
        {/* Animated gradient border on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(244,114,182,0.35),rgba(255,255,255,0))]" />
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={booth.thumbnailImage.url}
              alt={booth.thumbnailImage.alt}
              fill
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Hover overlay for trendy look */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
             {booth.isFeatured && (
                <Badge variant="secondary" className="absolute left-4 top-4 rounded-full shadow-md">Featured</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col p-6 md:p-7">
          <Badge variant="secondary" className="w-fit uppercase text-[11px] tracking-[0.18em] font-semibold rounded-full shadow-sm">
            {booth.boothType}
          </Badge>
          <h3 className="mt-4 text-2xl font-semibold text-slate-900 tracking-tight">{booth.title}</h3>
          <p className="mt-2 flex-1 text-sm text-slate-600 leading-relaxed line-clamp-2">{booth.excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-6 md:p-7 pt-0">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-500">Starting From</p>
            <p className="text-lg font-bold text-slate-900">AED {booth.startingPrice}</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-white">
            View details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
