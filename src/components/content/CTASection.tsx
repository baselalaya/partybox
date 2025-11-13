import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from '../ui/Section';
import { routes } from '@/lib/routes';
import { ArrowRight, Phone } from 'lucide-react';
import Container from '../layout/Container';

export default function CTASection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="relative rounded-2xl bg-sunset-button px-6 py-20 text-center shadow-lg sm:px-16 overflow-hidden">
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/10 rounded-full" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full" />
          <div className="relative mx-auto max-w-lg">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/90">
              Get in touch with us today for a personalized quote. Let's make some memories!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-white/90">
                <Link href={routes.contact}>
                  Get a Quote
                  <ArrowRight/>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
                <a href="tel:+971501234567">
                  <Phone/>
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
