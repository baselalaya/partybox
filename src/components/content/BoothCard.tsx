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
        <Card className="group flex flex-col h-full overflow-hidden transition-all duration-300 ease-out shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_34px_70px_rgba(0,0,0,0.08)]">
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
            <CardContent className="flex flex-1 flex-col p-6 md:p-7">
                <Badge variant="outline" className="w-fit uppercase text-xs tracking-widest font-medium">
                    {booth.boothType}
                </Badge>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{booth.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600 leading-relaxed">{booth.excerpt}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-6 md:p-7 pt-0">
                <p className="text-base font-semibold text-primary">
                from AED {booth.startingPrice}
                </p>
                <div className="text-sm font-medium text-primary inline-flex items-center">
                View Details
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </CardFooter>
        </Card>
    </Link>
  );
}
