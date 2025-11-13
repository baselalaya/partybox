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
      <Section className="pt-8 md:pt-12">
        <Breadcrumbs items={[
          { name: 'Photo Booths', href: routes.booths.list },
          { name: booth.title, href: routes.booths.detail(booth.slug) }
        ]} />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-8">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg">
            <Image 
              src={booth.thumbnailImage.url} 
              alt={booth.thumbnailImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <Badge variant="secondary">{booth.boothType}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 font-headline">{booth.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{booth.excerpt}</p>
            <p className="mt-6 text-2xl font-bold text-primary">From AED {booth.startingPrice}</p>
          </div>
        </div>
      </Section>
      <Section id="details" className="bg-card">
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-2xl font-bold font-headline mb-4">Key Features</h2>
                <ul className="space-y-3">
                    {booth.features.map(feature => (
                        <li key={feature.text} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-muted-foreground">{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                 <h2 className="text-2xl font-bold font-headline mb-4">Overview</h2>
                 <div className="prose prose-invert max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: booth.content }} />
            </div>
        </div>
      </Section>
       {booth.galleryImages.length > 0 && (
        <Section id="gallery">
            <h2 className="text-center text-3xl font-bold font-headline mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {booth.galleryImages.map((image, index) => (
                    <div key={index} className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Image src={image.url} alt={image.alt} fill className="object-cover"/>
                    </div>
                ))}
            </div>
        </Section>
      )}

      {booth.faqs.length > 0 && (
        <Section id="faq" className="bg-card">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-3xl font-bold font-headline mb-8">
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
