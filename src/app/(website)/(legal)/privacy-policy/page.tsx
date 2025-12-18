import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Breadcrumbs from '@/components/content/Breadcrumbs';

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    title: "Privacy Policy | Party Box",
    description: "Read the privacy policy for Party Box to understand how we collect, use, and protect your personal information.",
    path: routes.privacyPolicy,
  });
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section className="py-12">
        <Breadcrumbs items={[{ name: 'Privacy Policy', href: routes.privacyPolicy }]} />
        <h1 className="text-4xl font-bold mt-8 mb-4">Privacy Policy</h1>
        <div className="prose max-w-none text-slate-700">
          <h2>1. Introduction</h2>
          <p>Welcome to Party Box. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you use our contact form.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>

          <h2>3. Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to respond to your inquiries and provide customer support.</p>

          <h2>4. Security of Your Information</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

          <h2>5. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at: hello@partybox.ae</p>
        </div>
      </Section>
    </>
  );
}
