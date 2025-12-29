import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { getGalleryImages } from "@/lib/payload";
import { getLatestYouTubeVideos } from "@/lib/youtube";
import { LatestVideos } from "@/components/content/LatestVideos";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = generateSeoMetadata({
  title: "Gallery | Partybox in Action",
  description:
    "See Partybox in action across brand activations, launches, and events. Real photos and videos from real events.",
  path: routes.gallery,
});

export default async function GalleryPage() {
  const galleryImages = await getGalleryImages(100);
  const latestVideos = await getLatestYouTubeVideos('UCcQO558crfsFZzU2tg3iJhQ', 15);

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
            {galleryImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
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
      <Section className="bg-[#f7f7f9]">
        <Container className="space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Watch Us Live
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Latest from our Channel
            </h2>
          </div>

          <div className="flex justify-center pt-2 pb-6">
            <a
              href="https://www.youtube.com/channel/UCcQO558crfsFZzU2tg3iJhQ?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-6 py-2.5 text-sm font-medium text-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe on YouTube
            </a>
          </div>

          <LatestVideos videos={latestVideos} />
        </Container>
      </Section>

    </>
  );
}
