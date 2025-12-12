import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Container from '@/components/layout/Container';
import { routes } from '@/lib/routes';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'About Party Box | Dubai Booth Rentals',
  description:
    'Party Box is Dubai’s go-to booth partner for AI-powered photo, video, and engagement experiences built for brands, agencies, and venues.',
  path: routes.about,
});

export default function AboutPage() {
  return (
    <>
      <Section className="bg-[#FDF6EC]">
        <Container className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">About Party Box</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            High-impact experiences powered by people, tech, and heart.
          </h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Since 2015, we have helped premium brands across Dubai and the UAE turn events into share-ready moments. From AI-driven photo booths to cinematic 360 rigs and mirror walls, we pair every setup with on-site support, production-ready crew, and creative direction.
          </p>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-3 rounded-[32px] border border-slate-100 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">What we do</h2>
              <p className="text-sm text-slate-700">
                We deliver plug-and-play booth experiences with full creative, technical, and analytics support. Our in-house team briefs, designs, and operates booths for launches, malls, activations, and hospitality properties.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Concepting and creative direction for every brand moment.</li>
                <li>• Onsite field team with certified booth experts.</li>
                <li>• Data capture, auto-sharing, and social-ready output per campaign.</li>
              </ul>
            </div>
            <div className="space-y-3 rounded-[32px] border border-slate-100 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Why brands trust us</h2>
              <p className="text-sm text-slate-700">
                Our equipment, AI pipelines, and crew are calibrated for efficiency, safety, and wow factor. We build for the hospitality and luxury sectors, meaning timelines, approvals, and budgets are respected without compromising the magic.
              </p>
              <p className="text-sm text-slate-700">
                Every engagement is backed by 24/7 support — from installation to post-event reporting.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
