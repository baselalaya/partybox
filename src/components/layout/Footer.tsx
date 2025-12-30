import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { routes } from "@/lib/routes";
import Container from "./Container";
import { BusinessHours } from "../ui/BusinessHours";

const footerNav = {
  Solutions: [
    { label: "Solutions", href: routes.solutions },
    { label: "Photo Booths", href: routes.solutions },
    { label: "Video Booths", href: routes.solutions },
    { label: "Engagement Tech", href: routes.solutions },
    { label: "Live Customization", href: routes.liveCustomization },
  ],
  Company: [
    { label: "About Party Box", href: routes.about },
    { label: "Blog / Resources", href: routes.blog.list },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Privacy Policy", href: routes.privacyPolicy },
    { label: "Terms & Conditions", href: routes.termsOfService },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#ffffff]">
      <Container className="py-10 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <Link href={routes.home} className="inline-block">
                <div className="relative flex items-center justify-start rounded-[999px] py-2">
                  <Image
                    src="/logo.svg"
                    alt="Party Box"
                    width={40}
                    height={40}
                    className="h-12 w-12"
                  />
                </div>
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-slate-600">
                Affordable, brand-ready photo & video booth experiences for events and activations in Dubai & Abu Dhabi.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.instagram.com/partyboxuae/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:border-[#FF6C8B] hover:text-[#FF6C8B]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/partyboxuae"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:border-[#FF6C8B] hover:text-[#FF6C8B]"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCcQO558crfsFZzU2tg3iJhQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:border-[#FF6C8B] hover:text-[#FF6C8B]"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Solutions
            </h3>
            <ul className="space-y-4">
              {footerNav.Solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-[#FF6C8B]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Company
            </h3>
            <ul className="space-y-4">
              {footerNav.Company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-[#FF6C8B]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact / Business Hours */}
          <div className="flex flex-col items-start">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              We are open
            </h3>
            <BusinessHours />
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          <p>
            &copy; 2025 PartyBox • 10+ Years Experience • 5K+ Activations • AI-First Tech • Available for bookings • Made with ❤️ in Dubai.
          </p>
        </div>
      </Container>
    </footer>
  );
}
