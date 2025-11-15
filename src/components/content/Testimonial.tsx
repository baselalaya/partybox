import Image from "next/image";
import type { Testimonial as TestimonialType } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getTestimonials } from "@/lib/wordpress";
import { Star } from "lucide-react";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="mx-auto w-full max-w-5xl"
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <Card className="flex h-full flex-col rounded-[24px] border border-slate-200/80 bg-white shadow-sm transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <CardContent className="flex h-full flex-col gap-4 p-6 md:p-7">
                <div className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                  <span className="flex text-[#FEB47B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </span>
                  <span>Partner feedback</span>
                </div>
                <blockquote className="flex-grow text-sm leading-relaxed text-slate-700 md:text-base">
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
                    <p className="text-sm font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {testimonial.eventType}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[-40px] hidden md:inline-flex" />
      <CarouselNext className="right-[-40px] hidden md:inline-flex" />
    </Carousel>
  );
}
