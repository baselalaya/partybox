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
            Reliable event technology for brands and agencies.
          </h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Partybox delivers affordable, brand-ready photo, video, and engagement technology for events and activations across Dubai and other emirates. Built for brands and agencies that need clean execution, reliable technology, and realistic budgets, our solutions are designed to remove stress from on-ground activations. We focus on performance, consistency, and outputs that brands can confidently put their name on.
          </p>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">What We Do</h2>
              <p className="text-slate-700 leading-relaxed">
                We deliver plug-and-play photo, video, and engagement experiences with full creative, technical, and analytics support. Our in-house team briefs, designs, and operates each setup for launches, malls, activations, and hospitality properties.
              </p>
              <ul className="space-y-3 pt-2 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Concepting and creative direction for every brand moment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Onsite field team with certified technical operators</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Data capture, auto-sharing, and social-ready output per campaign</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Why Brands Trust Us</h2>
              <p className="text-slate-700 leading-relaxed">
                Since 2015, Partybox has delivered over 5,000 activations for 500+ brands across the UAE. Our track record is built on straightforward pricing, proven reliability, and technology designed for real-world events.
              </p>
              <p className="text-slate-700 leading-relaxed">
                AI is built into every experience, shaping visuals and outputs so brands get differentiated results without added complexity or surprises.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
