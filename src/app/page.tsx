import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import Hero from '@/components/content/Hero';
import BoothCard from '@/components/content/BoothCard';
import EventCard from '@/components/content/EventCard';
import CTASection from '@/components/content/CTASection';
import Testimonials from '@/components/content/Testimonial';
import FAQAccordion from '@/components/content/FAQAccordion';
import FeatureList from '@/components/content/FeatureList';
import { getFeaturedBooths, getAllEvents, getFaqs } from '@/lib/wordpress';
import { routes } from '@/lib/routes';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MessageCircle, Eye } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

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

export default async function Home() {
  const featuredBooths = await getFeaturedBooths();
  const events = await getAllEvents();
  const faqs = await getFaqs();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <>
      <JsonLd data={organizationSchema} />
      <Hero
        title="Photo Booth Rental in Dubai & Abu Dhabi"
        subtitle="AI, 360 & Mirror Booths – The Ultimate Experience for Your Event."
        backgroundImage={heroImage ? { src: heroImage.imageUrl, alt: heroImage.description } : undefined}
      >
        <Button asChild size="lg">
          <Link href="https://wa.me/971501234567" target="_blank">
            <MessageCircle className="mr-2 h-5 w-5"/>
            Get Instant Quote
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={routes.rates}>
            <Eye className="mr-2 h-5 w-5" />
            View Packages
          </Link>
        </Button>
      </Hero>

      <Section id="why-us">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-slate-600">
            We deliver more than just photos; we deliver unforgettable experiences.
          </p>
        </div>
        <div className="mt-12">
          <FeatureList />
        </div>
      </Section>

      <Section id="booths" className="bg-slate-50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Photo Booths</h2>
          <p className="mt-4 text-lg text-slate-600">
            From futuristic AI to classic fun, we have the perfect booth for any vibe.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredBooths.map((booth) => (
            <BoothCard key={booth.id} booth={booth} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild variant="secondary">
                <Link href={routes.booths.list}>View All Booths</Link>
            </Button>
        </div>
      </Section>

      <Section id="events">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Events We Cover</h2>
          <p className="mt-4 text-lg text-slate-600">
            Weddings, corporate launches, birthdays - we add the fun to any occasion.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      {galleryImages.length > 0 && (
        <Section id="gallery" className="bg-slate-50">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Gallery of Fun</h2>
                <p className="mt-4 text-lg text-slate-600">
                    See the smiles and unforgettable moments we've captured.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map(image => (
                    <div key={image.id} className="group relative aspect-square overflow-hidden rounded-lg">
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

      <Section id="testimonials">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-slate-600">
            We're proud to have been part of so many amazing events.
          </p>
        </div>
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      <Section id="faq" className="bg-slate-50">
        <div className="max-w-3xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 text-lg text-slate-600">
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
