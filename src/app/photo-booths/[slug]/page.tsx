import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getAllBooths, getBoothBySlug } from '@/lib/wordpress';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import FAQAccordion from '@/components/content/FAQAccordion';
import CTASection from '@/components/content/CTASection';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const booths = await getAllBooths();
  return booths.map((booth) => ({
    slug: booth.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const booth = await getBoothBySlug(params.slug);
  if (!booth) {
    return {};
  }
  return generateSeoMetadata({
    seo: booth.seo,
    path: routes.booths.detail(booth.slug),
    image: booth.thumbnailImage.url,
  });
}

export default async function BoothDetailPage({ params }: Props) {
  const booth = await getBoothBySlug(params.slug);

  if (!booth) {
    notFound();
  }
  
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": booth.title,
    "name": `Rent ${booth.title}`,
    "description": booth.excerpt,
    "provider": {
      "@type": "Organization",
      "name": "Dubai Booths"
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    }
  };


  return (
    <>
      <JsonLd data={serviceSchema} />
      <Section className="pt-8 md:pt-12 bg-white">
        <Breadcrumbs items={[
          { name: 'Photo Booths', href: routes.booths.list },
          { name: booth.title, href: routes.booths.detail(booth.slug) }
        ]} />
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-8 items-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-slate-900 shadow-[0_26px_80px_rgba(15,23,42,0.18)] transition-all duration-300 ease-out hover:shadow-[0_34px_100px_rgba(15,23,42,0.28)] animate-fade-in-up" style={{animationDelay: '80ms'}}>
            <Image 
              src={booth.thumbnailImage.url} 
              alt={booth.thumbnailImage.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '140ms'}}>
            <Badge variant="secondary" className="uppercase tracking-wider font-semibold shadow-sm hover:shadow-md transition">{booth.boothType}</Badge>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mt-4 text-slate-900">
              {booth.title}
            </h1>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-teal-400 rounded-full" />
            <p className="mt-4 text-lg text-slate-600 max-w-prose">{booth.excerpt}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground text-sm font-semibold hover:scale-[1.02] transition">
              From AED {booth.startingPrice}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><svg className="h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v-2a4 4 0 014-4h10"/><path d="M8 12a4 4 0 004 4h8"/></svg> Instant sharing</span>
              <span className="inline-flex items-center gap-2"><svg className="h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Unlimited sessions</span>
              <span className="inline-flex items-center gap-2"><svg className="h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg> On-site attendant</span>
            </div>
            <div className="mt-6">
              <Link href={routes.contact} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:shadow-xl hover:scale-[1.02]">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Section id="details" className="bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Key Features</h2>
                <ul className="space-y-4 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                    {booth.features.map(feature => (
                        <li key={feature.text} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 mt-1 text-primary" />
                            <span className="text-slate-700 text-base">{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                 <h2 className="text-2xl md:text-3xl font-semibold mb-6">Overview</h2>
                 <div className="prose max-w-none text-slate-600 prose-h2:font-semibold prose-h2:text-slate-900 prose-h3:font-semibold prose-h3:text-slate-900 prose-a:text-primary hover:prose-a:opacity-80 prose-strong:text-slate-800" dangerouslySetInnerHTML={{ __html: booth.content }} />
            </div>
        </div>
      </Section>
       {booth.galleryImages.length > 0 && (
        <Section id="gallery" className="bg-white">
            <h2 className="text-center text-3xl font-semibold mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {booth.galleryImages.map((image, index) => (
                    <div key={index} className="group relative aspect-video w-full overflow-hidden rounded-2xl">
                        <Image src={image.url} alt={image.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105"/>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                ))}
            </div>
        </Section>
      )}

      {booth.faqs.length > 0 && (
        <Section id="faq" className="bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-3xl font-semibold mb-8">
              {booth.title} FAQs
            </h2>
            <FAQAccordion faqs={booth.faqs} />
          </div>
        </Section>
      )}
      <CTASection />
    </>
  );
}
