import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";

export const metadata: Metadata = generateSeoMetadata({
  title: "Newsletter | Partybox Updates",
  description:
    "Sign up to receive Partybox news, product updates, and ideas for smarter brand experiences.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <>
      <Section className="bg-white">
        <Container className="space-y-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Newsletter
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Stay in the Partybox Loop
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              This page is ready to be wired to your email service and CMS so
              visitors can subscribe to updates, product launches, and new case
              studies.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

