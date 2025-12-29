import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Breadcrumbs from '@/components/content/Breadcrumbs';

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    title: "Terms & Conditions | Party Box",
    description: "Read the Terms of Service for using the Party Box website.",
    path: routes.termsOfService,
  });
}

export default function TermsOfServicePage() {
  return (
    <>
      <Section className="py-12">
        <Breadcrumbs items={[{ name: 'Terms of Service', href: routes.termsOfService }]} />
        <h1 className="text-4xl font-bold mt-8 mb-4">Terms & Conditions</h1>
        <div className="prose max-w-none text-slate-700">
          <p>
            Partybox is operated by Studio 94 DMCC. Throughout the site, software, links, the terms "we", "us" and "our" refer to Studio 94 DMCC. Studio 94 DMCC offers all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
          </p>

          <h2>Terms</h2>
          <p>
            By accessing this website, you are agreeing to be bound by these website terms and conditions of use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this website. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to use / download copy of the information materials on Partybox websites for personal or commercial use. However, this is the grant of a license, not a transfer of title, and under this license as a client you may not:
          </p>
          <ul>
            <li>Use / modify or copy the materials for any other purpose without our written consent and approval</li>
            <li>Attempt to decompile or reverse engineer any software contained on Partybox web site</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server without our written consent and approval</li>
            <li>Let your clients resell our services or promote this service as their own without our written consent and approval</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Partybox at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The materials on the Partybox website are provided "as is". Partybox makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Partybox does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall Partybox or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Partybox website. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </p>

          <h2>Revisions</h2>
          <p>
            The materials appearing on the Partybox website could include technical, typographical, or photographic errors. Partybox does not warrant that any of the materials on its website are accurate, complete, or current. Partybox may make changes to the materials contained on its web site at any time without notice. Partybox does not, however, make any commitment to update the materials.
          </p>

          <h2>Links</h2>
          <p>
            Partybox has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Partybox of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2>Site terms of use modifications</h2>
          <p>
            Partybox may revise these terms of use for its web site at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms and conditions of use.
          </p>

          <h2>Privacy Policy</h2>
          <p>
            Your privacy is very important to us. Accordingly, we have developed this policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy:
          </p>
          <ul>
            <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
            <li>We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
            <li>We will only retain personal information as long as necessary for the fulfillment of those purposes.</li>
            <li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
            <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
            <li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
            <li>We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.</li>
          </ul>

          <h2>Governing law</h2>
          <p>
            Any claim relating to the Partybox website shall be governed by the laws of the Dubai, United Arab Emirates without regard to its conflict of law provisions.
          </p>
        </div>
      </Section>
    </>
  );
}
