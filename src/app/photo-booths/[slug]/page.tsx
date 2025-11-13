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
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-8 items-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
            <Image 
              src={booth.thumbnailImage.url} 
              alt={booth.thumbnailImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <Badge variant="secondary" className="uppercase tracking-wider font-semibold">{booth.boothType}</Badge>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mt-4">{booth.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{booth.excerpt}</p>
            <p className="mt-6 text-3xl font-semibold text-fuchsia-600">From AED {booth.startingPrice}</p>
          </div>
        </div>
      </Section>
      <Section id="details" className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Key Features</h2>
                <ul className="space-y-4">
                    {booth.features.map(feature => (
                        <li key={feature.text} className="flex items-center gap-3">
                            <CheckCircle className="h-6 w-6 text-fuchsia-600" />
                            <span className="text-slate-700 text-base">{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                 <h2 className="text-2xl md:text-3xl font-semibold mb-6">Overview</h2>
                 <div className="prose max-w-none text-slate-600 prose-h2:font-semibold prose-h2:text-slate-900 prose-h3:font-semibold prose-h3:text-slate-900 prose-a:text-fuchsia-600 hover:prose-a:text-fuchsia-700 prose-strong:text-slate-800" dangerouslySetInnerHTML={{ __html: booth.content }} />
            </div>
        </div>
      </Section>
       {booth.galleryImages.length > 0 && (
        <Section id="gallery" className="bg-white">
            <h2 className="text-center text-3xl font-semibold mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {booth.galleryImages.map((image, index) => (
                    <div key={index} className="relative aspect-video w-full overflow-hidden rounded-2xl">
                        <Image src={image.url} alt={image.alt} fill className="object-cover"/>
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
