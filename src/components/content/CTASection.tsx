import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from '../ui/Section';
import { routes } from '@/lib/routes';
import { Phone, MessageCircle } from 'lucide-react';
import Container from '../layout/Container';

export default function CTASection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="relative rounded-2xl bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-rose-500 px-6 py-16 text-center shadow-lg sm:px-16">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-fuchsia-100">
              Get in touch with us today for a personalized quote. Let's make some memories!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <Button asChild size="lg" variant="secondary" className="bg-white/90 text-fuchsia-700 hover:bg-white">
                <Link href="https://wa.me/971501234567" target="_blank">
                  <MessageCircle/>
                  Get Quote on WhatsApp
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
                <Link href={routes.contact}>
                  <Phone/>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
