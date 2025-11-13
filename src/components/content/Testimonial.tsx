import Image from 'next/image';
import type { Testimonial as TestimonialType } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getTestimonials } from '@/lib/wordpress';

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-full bg-white border-slate-200 rounded-xl shadow-sm">
                <CardContent className="flex h-full flex-col items-start justify-between p-6">
                  <blockquote className="text-slate-600">
                    <p>“{testimonial.quote}”</p>
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                    />
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.eventType}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
