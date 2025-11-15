import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";

export const metadata: Metadata = generateSeoMetadata({
  title: "Gallery | Partybox in Action",
  description:
    "See Partybox in action across brand activations, launches, and events. Real photos and videos from real events.",
  path: routes.gallery,
});

export default function GalleryPage() {
  return (
    <>
      <Section className="bg-[#FDF6EC]">
        <Container className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Gallery
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              See Partybox in Action
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-700">
              Real activations. Real impact. Real results. This gallery will be
              home to case studies, highlight clips, and standout brand moments
              from across the region.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="space-y-8">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-[#FDF6EC] p-4 md:p-5">
            <div className="pointer-events-none absolute inset-y-6 left-0 w-16 bg-gradient-to-r from-white via-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-6 right-0 w-16 bg-gradient-to-l from-white via-white to-transparent" />
            <div className="flex gap-4 overflow-x-auto pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none]">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className={`relative h-44 min-w-[11rem] overflow-hidden rounded-[24px] border border-slate-200/70 bg-slate-200 shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] ${
                    index % 2 === 0 ? "mt-4" : "mb-4"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-[24px] border border-slate-200/80 bg-[#FFF6EC] p-5 shadow-sm"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    Case Study Placeholder
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-slate-900">
                    Brand activation slot #{index + 1}
                  </h2>
                  <p className="mt-2 text-sm text-slate-700">
                    This tile will be replaced by a CMS-powered gallery item
                    (photo, video, or case study) once content is connected.
                  </p>
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  CMS-powered gallery item placeholder.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
