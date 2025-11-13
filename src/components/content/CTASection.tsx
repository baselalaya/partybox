import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from '../ui/Section';
import { routes } from '@/lib/routes';
import { MessageCircle, Phone } from 'lucide-react';
import Container from '../layout/Container';

export default function CTASection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-r from-[#FF7E5F] via-[#FF9F6E] to-[#FFD38D] px-6 md:px-10 py-10 md:py-12 text-white shadow-[0_30px_80px_rgba(255,126,95,0.45)] text-center">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm md:text-base text-white/90 leading-7">
              Get in touch with us today for a personalized quote. Let's make some memories!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#FF7E5F] hover:bg-slate-100">
                <a href="https://wa.me/971501234567" target="_blank">
                  <MessageCircle/>
                  Get Quote on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/70 text-white hover:bg-white/10">
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
