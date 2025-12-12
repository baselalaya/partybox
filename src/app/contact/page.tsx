import type { Metadata } from 'next';
import { Suspense } from 'react';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import ContactForm from './ContactForm';

export const metadata: Metadata = generateSeoMetadata({
  title: "Contact Us | Dubai Photo Booths",
  description: "Get in touch with Party Box for a quote or inquiry. Contact us via form, WhatsApp, or phone for your next event in Dubai.",
  path: routes.contact,
});


export default function ContactPage() {
  return (
    <>
      <Section className="bg-[#FDF6EC]">
        <Breadcrumbs items={[{ name: 'Contact', href: routes.contact }]} />
        <div className="mt-6 max-w-3xl space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Contact
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Get in touch
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-700">
              Reliable, affordable, and built for impact. Let’s create high-value experiences that fit your budget
and elevate your brand.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
