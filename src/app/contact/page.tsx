import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Hero from '@/components/content/Hero';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import ContactForm from './ContactForm';

export const metadata: Metadata = generateSeoMetadata({
  title: "Contact Us | Dubai Photo Booths",
  description: "Get in touch with Dubai Booths for a quote or inquiry. Contact us via form, WhatsApp, or phone for your next event in Dubai.",
  path: routes.contact,
});


export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="We'd love to hear about your event. Fill out the form below or contact us directly."
      />
      <Section>
        <Breadcrumbs items={[{ name: 'Contact', href: routes.contact }]} />
        <ContactForm />
      </Section>
    </>
  );
}
