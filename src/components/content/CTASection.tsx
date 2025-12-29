import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "../ui/Section";
import { routes } from "@/lib/routes";
import Container from "../layout/Container";

export default function CTASection() {
  return (
    <Section id="final-cta" className="bg-gradient-to-b from-[#FFF6EC] via-white to-[#FFF6EC]">
      <Container className="max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/95 px-6 py-8 md:px-10 md:py-10 shadow-[0_24px_70px_rgba(255,153,113,0.32)] backdrop-blur-sm">
          <div className="relative space-y-6 text-center">
            <div>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Ready to make your brand stand out?
              </h2>
              <p className="mt-4 text-sm md:text-base text-slate-700">
                High-value solutions within your budget. Let&apos;s create something amazing together.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="mt-2 rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <a href="/contact">
                  Get In Touch
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="mt-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <a href="https://wa.me/971521955327" target="_blank">
                  Chat on WhatsApp
                </a>
              </Button>
              <a
                href="tel:+97144488556"
                className="mt-2 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                📞 +971 4 448 8556
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
