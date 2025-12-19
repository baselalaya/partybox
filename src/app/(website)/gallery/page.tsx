import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { getGalleryImages } from "@/lib/payload";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = generateSeoMetadata({
  title: "Gallery | Partybox in Action",
  description:
    "See Partybox in action across brand activations, launches, and events. Real photos and videos from real events.",
  path: routes.gallery,
});

export default async function GalleryPage() {
  const galleryImages = await getGalleryImages(100);

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

          <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="mb-5 break-inside-avoid overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.1)]"
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: `${image.width} / ${image.height}` }}
                >
                  {image.type === 'video' ? (
                    <video
                      src={image.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="object-cover w-full h-full"
                    />
                  ) : (
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
