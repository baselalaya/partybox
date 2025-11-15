import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from '../ui/Section';
import { routes } from '@/lib/routes';
import { MessageCircle, Phone } from 'lucide-react';
import Container from '../layout/Container';

export default function CTASection() {
  return (
    <Section className="bg-gradient-to-b from-white via-[#FFF6EC] to-white">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-900 px-6 py-10 md:px-10 md:py-12 text-center text-white shadow-[0_26px_70px_rgba(15,23,42,0.45)]">
          <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-gradient-to-tr from-[#FF9F6E] via-[#FFD45A] to-[#4F8BFF] opacity-60 blur-2xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-32 w-44 rounded-full bg-gradient-to-r from-[#25C7C9] to-[#FF6C8B] opacity-60 blur-2xl" />
          <div className="relative mx-auto max-w-lg space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Ready to make your event unforgettable?
            </h2>
            <p className="mx-auto max-w-xl text-sm md:text-base text-white/85 leading-7">
              Share your brief, budget, and dates — we&apos;ll recommend the right Partybox setup and
              AI features to match your brand, venue, and audience.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-slate-900 px-6 py-2.5 text-sm font-semibold shadow hover:bg-slate-100 hover:shadow-lg"
              >
                <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer">
                  <MessageCircle />
                  Get Quote on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/70 bg-transparent px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                <Link href={routes.contact}>
                  <Phone />
                  Contact Us
                </Link>
              </Button>
            </div>
            <p className="mt-2 text-xs md:text-sm text-white/70">
              10+ Years Experience • 5K+ Activations • AI-First Tech
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
