import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Breadcrumbs from '@/components/content/Breadcrumbs';

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    title: "Our Privacy Commitment | Party Box",
    description: "At PartyBox, we are committed to protecting your privacy. Learn how we collect, use, and safeguard your data.",
    path: routes.privacyPolicy,
  });
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section className="py-12">
        <Breadcrumbs items={[{ name: 'Privacy Policy', href: routes.privacyPolicy }]} />
        <h1 className="text-4xl font-bold mt-8 mb-4">Our Privacy Commitment</h1>
        <div className="prose max-w-none text-slate-700">
          <p>
            At PartyBox, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you engage with our products, platforms, activations, and services—including photo booths, vending machines, AI experiences, SaaS solutions, and custom event technologies.
          </p>
          <p>
            We comply with GDPR and other applicable data protection laws. By using our services, you consent to the practices described in this policy.
          </p>

          <h2>Information We Collect</h2>

          <h3>Personal Information You Provide</h3>
          <ul>
            <li>Account registration details (name, email, company info)</li>
            <li>Payment and billing information</li>
            <li>Profile settings and preferences</li>
            <li>Customer support inquiries and feedback</li>
            <li>Event details and activation configurations</li>
          </ul>

          <h3>Information Collected Through Activations & Events</h3>
          <ul>
            <li>Photos, videos, and media captured during sessions</li>
            <li>Guest contact details (when shared voluntarily)</li>
            <li>Social media handles and sharing preferences</li>
            <li>Participation, engagement, and redemption data (e.g., prize unlocks, QR scans, codes used)</li>
          </ul>

          <h3>Technical Information</h3>
          <ul>
            <li>Device and browser details</li>
            <li>IP address and geolocation data</li>
            <li>Usage patterns and interaction data</li>
            <li>Cookies and tracking technologies</li>
          </ul>

          <h2>How We Use Your Information</h2>

          <h3>Service Provision</h3>
          <ul>
            <li>Deliver and maintain PartyBox products and services</li>
            <li>Process payments and manage subscriptions/contracts</li>
            <li>Enable event activations, prize distribution, and content sharing</li>
            <li>Power AI personalization and interactive experiences</li>
          </ul>

          <h3>Communication & Support</h3>
          <ul>
            <li>Respond to inquiries and technical requests</li>
            <li>Send important updates, alerts, and notifications</li>
            <li>Share relevant product and service information</li>
            <li>Collect and process feedback for service improvement</li>
          </ul>

          <h3>Analytics & Innovation</h3>
          <ul>
            <li>Measure campaign impact and ROI for brands</li>
            <li>Optimize user and guest experiences</li>
            <li>Develop new AI effects, hardware, and features</li>
            <li>Detect fraud and enhance system security</li>
          </ul>

          <h2>Information Sharing & Disclosure</h2>
          <p>We do not sell or trade your data. We share it only when necessary:</p>
          <ul>
            <li><strong>Service Providers</strong> – payment processors, hosting/cloud storage, analytics tools, communication platforms</li>
            <li><strong>Legal Requirements</strong> – if required by law, or to protect rights, safety, or security</li>
            <li><strong>Business Transfers</strong> – in mergers, acquisitions, or restructuring</li>
          </ul>

          <h2>Data Security</h2>
          <p>Your data is safeguarded using industry-standard measures:</p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Secure cloud hosting and physical access controls</li>
            <li>Regular security audits and monitoring</li>
            <li>Employee training on data protection</li>
            <li>Multi-factor authentication for sensitive accounts</li>
          </ul>
          <p>No system is 100% secure, but we continuously enhance protections.</p>

          <h2>Your Privacy Rights</h2>
          <p>Under GDPR and other laws, you may request:</p>
          <ul>
            <li>Access to your data</li>
            <li>Correction of inaccurate details</li>
            <li>Deletion of your personal data</li>
            <li>Portability of data to another service</li>
            <li>Restriction of processing</li>
            <li>Objection to certain processing</li>
            <li>Withdrawal of Consent</li>
          </ul>
          <p>Contact us to exercise these rights—we respond within 30 days.</p>

          <h2>Data Retention</h2>
          <p>We keep personal data only as long as necessary:</p>
          <ul>
            <li><strong>Account Data:</strong> Until account deletion or 3 years after last use</li>
            <li><strong>Event Media:</strong> As defined in activation settings or until deletion request</li>
            <li><strong>Payment Data:</strong> Up to 7 years (legal compliance)</li>
            <li><strong>Technical Logs:</strong> Typically 12 months</li>
          </ul>
          <p>After retention, data is securely deleted or anonymized.</p>

          <h2>Cookies & Tracking</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Ensure core functionality</li>
            <li>Monitor performance and analytics</li>
            <li>Remember user preferences</li>
            <li>Provide insights into usage and engagement</li>
          </ul>
          <p>You may manage cookie settings in your browser. Certain features may not work without them.</p>

          <h2>Children’s Privacy</h2>
          <p>PartyBox services are designed for brands, businesses, and events—not children under 13. If we become aware of data collected from a child under 13, we delete it promptly.</p>

          <h2>International Data Transfers</h2>
          <p>Your data may be processed outside your country of residence. We use safeguards such as Standard Contractual Clauses to ensure compliance with global privacy regulations.</p>

          <h2>Policy Updates</h2>
          <p>We may update this Privacy Policy when our practices, technologies, or regulations change. Updates will appear here with a revised “Last updated” date.</p>

          <h2>Contact Us</h2>
          <p>
            📧 <a href="mailto:info@partybox.ae">info@partybox.ae</a><br />
            📞 <a href="tel:+971521955327">+971 52 195 5327</a><br />
            Data Protection Officer: Available for GDPR-related inquiries.<br />
            Response Time: Within 30 days.
          </p>
        </div>
      </Section>
    </>
  );
}
