import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Hero from '@/components/content/Hero';
import Breadcrumbs from '@/components/content/Breadcrumbs';

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    title: "Terms of Service | Party Box",
    description: "Read the Terms of Service for using the Party Box website.",
    path: routes.termsOfService,
  });
}

export default function TermsOfServicePage() {
  return (
    <>
      <Hero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our service."
      />
      <Section>
        <Breadcrumbs items={[{ name: 'Terms of Service', href: routes.termsOfService }]} />
        <div className="mt-8 prose max-w-none text-slate-700">
            <h2>1. Agreement to Terms</h2>
            <p>By accessing our website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.</p>

            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Party Box's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            
            <h2>3. Disclaimer</h2>
            <p>The materials on Party Box's website are provided on an 'as is' basis. Party Box makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h2>4. Limitations</h2>
            <p>In no event shall Party Box or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Party Box's website.</p>
            
            <h2>5. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>
      </Section>
    </>
  );
}
