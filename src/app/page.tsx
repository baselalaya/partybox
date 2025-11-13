import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Hero from '@/components/content/Hero';
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
import { Eye, MessageCircle } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import Container from '@/components/layout/Container';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Party Box",
  "url": "https://dubaibooths.com",
  "logo": "/logo.svg",
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
    { name: 'Google', src: 'https://via.placeholder.com/100x40?text=Google' },
    { name: 'Amazon', src: 'https://via.placeholder.com/100x40?text=Amazon' },
    { name: 'Microsoft', src: 'https://via.placeholder.com/100x40?text=Microsoft' },
    { name: 'Netflix', src: 'https://via.placeholder.com/100x40?text=Netflix' },
    { name: 'Meta', src: 'https://via.placeholder.com/100x40?text=Meta' },
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
      <Hero
        title="Smart Photo Booths for Brands in Dubai & Abu Dhabi."
        subtitle="AI-powered photo booths for brand activations, launches, and events — professional quality without premium pricing."
        backgroundImage={undefined}
        mediaVideoSrc="https://websites-cdn.s3.eu-central-1.amazonaws.com/partybox.ae/videos/partybox.mp4"
      >
        <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition">
          <a href="https://wa.me/971501234567" target="_blank">
            <MessageCircle />
            Get Instant Quote
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50 transition">
          <Link href={routes.rates}>
            <Eye />
            View Packages
          </Link>
        </Button>
      </Hero>

       <Section id="trusted-by" className="py-12 bg-slate-100">
        <h3 className="text-center text-sm font-medium text-slate-500 mb-6">TRUSTED BY INDUSTRY LEADERS</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4">
            {trustedByLogos.map(logo => (
                <div key={logo.name} className="h-8">
                     <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        width={100}
                        height={32}
                        className="object-contain h-full w-auto opacity-60 grayscale"
                      />
                </div>
            ))}
        </div>
      </Section>

      <Section id="why-us" className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Why Choose Us?</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            We deliver more than just photos; we deliver unforgettable experiences.
          </p>
        </div>
        <div className="mt-12">
          <FeatureList />
        </div>
      </Section>

      <Section id="booths" className="bg-slate-50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Photo Booths</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
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

      <Section id="events" className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Events We Cover</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
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
                <h2 className="text-3xl md:text-4xl font-semibold">Gallery of Fun</h2>
                <p className="mt-4 text-base md:text-lg text-slate-600">
                    See the smiles and unforgettable moments we've captured.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
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
          <p className="mt-4 text-base md:text-lg text-slate-600">
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
                <h2 className="text-3xl md:text-4xl font-semibold">Frequently Asked Questions</h2>
                <p className="mt-4 text-base md:text-lg text-slate-600">
                    Have questions? We have answers. Here are some common ones.
                </p>
            </div>
            <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                <FAQAccordion faqs={faqs.slice(0, 5)} />
            </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
