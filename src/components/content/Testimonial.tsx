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
import { Star } from 'lucide-react';

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
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <Card className="h-full bg-white border border-slate-200 rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.05)] flex flex-col">
              <CardContent className="flex h-full flex-col p-6 md:p-7 gap-4">
                <div className="flex text-[#FEB47B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm md:text-base text-slate-700 leading-relaxed flex-grow">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <div className="mt-4 flex items-center gap-4">
                  <Image
                    className="h-11 w-11 rounded-full object-cover"
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    width={44}
                    height={44}
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.eventType}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[-50px] hidden md:inline-flex" />
      <CarouselNext className="right-[-50px] hidden md:inline-flex" />
    </Carousel>
  );
}
