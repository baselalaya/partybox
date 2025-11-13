import Link from 'next/link';
import Image from 'next/image';
import type { Booth } from '@/types';
import { routes } from '@/lib/routes';
import { ArrowRight, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

type BoothCardProps = {
  booth: Booth;
};

export default function BoothCard({ booth }: BoothCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 rounded-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={booth.thumbnailImage.url}
            alt={booth.thumbnailImage.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-6">
        <Badge variant="secondary" className="w-fit">
          <Tag className="mr-1 h-3 w-3" />
          {booth.boothType}
        </Badge>
        <h3 className="mt-4 text-xl font-bold font-headline text-slate-900">{booth.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{booth.excerpt}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6 pt-0">
        <p className="text-lg font-semibold text-fuchsia-600">
          from AED {booth.startingPrice}
        </p>
        <Link href={routes.booths.detail(booth.slug)} className="text-sm font-medium text-fuchsia-600 inline-flex items-center group-hover:underline">
          View Details
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
