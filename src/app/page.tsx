import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import BoothCard from '@/components/content/BoothCard';
import EventCard from '@/components/content/EventCard';
import CTASection from '@/components/content/CTASection';
import Testimonials from '@/components/content/Testimonial';
import FAQAccordion from '@/components/content/FAQAccordion';
import FeatureList from '@/components/content/FeatureList';
import { getFeaturedBooths, getAllEvents, getFaqs } from '@/lib/wordpress';
import { routes } from '@/lib/routes';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Eye, Star } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import Container from '@/components/layout/Container';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dubai Booths",
  "url": "https://dubaibooths.com",
  "logo": PlaceHolderImages.find(img => img.id === 'logo')?.imageUrl,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-50-123-4567",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/dubaibooths",
    "https://www.instagram.com/dubaibooths"
  ]
};

const trustedByLogos = [
    { name: 'Google', src: 'https://via.placeholder.com/120x40?text=Google' },
    { name: 'Amazon', src: 'https://via.placeholder.com/120x40?text=Amazon' },
    { name: 'Microsoft', src: 'https://via.placeholder.com/120x40?text=Microsoft' },
    { name: 'Netflix', src: 'https://via.placeholder.com/120x40?text=Netflix' },
    { name: 'Meta', src: 'https://via.placeholder.com/120x40?text=Meta' },
]

export default async function Home() {
  const featuredBooths = await getFeaturedBooths();
  const events = await getAllEvents();
  const faqs = await getFaqs();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <>
      <JsonLd data={organizationSchema} />
      <div className="relative bg-sunset-light pt-28 pb-32">
        <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
                        Cost-Effective Photo Booths for Brand Activations.
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base md:text-lg text-slate-600 leading-relaxed">
                        AI, 360 & Mirror Booths for weddings, corporate events, and parties in Dubai & Abu Dhabi. Create unforgettable moments.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <Button asChild size="lg">
                            <Link href={routes.contact}>
                                Get Instant Quote
                                <ArrowRight />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href={routes.rates}>
                                <Eye />
                                View Packages
                            </Link>
                        </Button>
                    </div>
                </div>
                 <div className="relative h-80 md:h-auto md:aspect-[5/4] animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            priority
                        />
                    )}
                </div>
            </div>
        </Container>
      </div>

       <Section id="trusted-by" className="py-12 bg-[#FAFAFA]">
        <h3 className="text-center text-xs uppercase tracking-[0.15em] text-slate-500 mb-8">TRUSTED BY INDUSTRY LEADERS</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-16 gap-y-6">
            {trustedByLogos.map(logo => (
                <div key={logo.name} className="h-8">
                     <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        width={120}
                        height={32}
                        className="object-contain h-full w-auto opacity-50 grayscale"
                      />
                </div>
            ))}
        </div>
      </Section>

      <Section id="why-us" className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Why Choose Us?</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            We deliver more than just photos; we deliver unforgettable experiences.
          </p>
        </div>
        <div className="mt-16">
          <FeatureList />
        </div>
      </Section>

      <Section id="booths" className="bg-slate-50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Photo Booths</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            From futuristic AI to classic fun, we have the perfect booth for any vibe.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredBooths.map((booth) => (
            <BoothCard key={booth.id} booth={booth} />
          ))}
        </div>
        <div className="mt-16 text-center">
            <Button asChild variant="secondary" size="lg">
                <Link href={routes.booths.list}>View All Booths</Link>
            </Button>
        </div>
      </Section>

      <Section id="events" className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Events We Cover</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Weddings, corporate launches, birthdays - we add the fun to any occasion.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      {galleryImages.length > 0 && (
        <Section id="gallery" className="bg-slate-50">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold">Gallery of Fun</h2>
                <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                    See the smiles and unforgettable moments we've captured.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map(image => (
                    <div key={image.id} className="group relative aspect-square overflow-hidden rounded-2xl">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                ))}
            </div>
        </Section>
      )}

      <Section id="testimonials" className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">What Our Clients Say</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            We're proud to have been part of so many amazing events.
          </p>
        </div>
        <div className="mt-16">
          <Testimonials />
        </div>
      </Section>

      <Section id="faq" className="bg-slate-50">
        <div className="max-w-3xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-semibold">Frequently Asked Questions</h2>
                <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                    Have questions? We have answers. Here are some common ones.
                </p>
            </div>
            <div className="mt-12">
                <FAQAccordion faqs={faqs.slice(0, 5)} />
            </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
