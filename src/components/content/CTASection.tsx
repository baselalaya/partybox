import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from '../ui/Section';
import { routes } from '@/lib/routes';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <Section className="bg-slate-50 rounded-xl">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Ready to Make Your Event Unforgettable?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Get in touch with us today for a personalized quote. Let's make some memories!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="https://wa.me/971501234567" target="_blank">
              <MessageCircle className="mr-2 h-5 w-5"/>
              Get Quote on WhatsApp
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={routes.contact}>
              <Phone className="mr-2 h-5 w-5"/>
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
