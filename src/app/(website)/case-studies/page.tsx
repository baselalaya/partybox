import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";

export const metadata: Metadata = generateSeoMetadata({
  title: "Case Studies | Partybox Brand Activations",
  description:
    "In-depth looks at how brands use Partybox photo booths, video booths, and engagement tech to drive real results.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="bg-white">
        <Container className="space-y-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Case Studies
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Brand Activations, Powered by Partybox
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              This section will be powered by CMS-driven case studies, giving
              your SEO and content teams space to tell deeper stories about
              specific campaigns and results.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

