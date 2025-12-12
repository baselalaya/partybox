import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/components/content/gallery-data";

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
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Gallery
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Real activations across the UAE
            </h2>
            <p className="text-sm text-slate-700">
              This masonry grid mixes portrait and landscape shots so you get a feel for the variety of Partybox experiences.
            </p>
          </div>
          <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
            {GALLERY_IMAGES.map((image) => (
              <div
                key={image.src}
                className="mb-5 break-inside-avoid overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.1)]"
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: `${image.width} / ${image.height}` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={70}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
