import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { routes } from "@/lib/routes";
import Container from "./Container";

const footerNav = {
  Solutions: [
    { label: "Solutions", href: routes.solutions },
    { label: "Photo Booths", href: routes.solutions },
    { label: "Video Booths", href: routes.solutions},
    { label: "Engagement Tech", href: routes.solutions },
    { label: "Live Customization", href: "#" },
  ],
  "AI & Technology": [
    { label: "AI Features", href: "#" },
    { label: "AI Filters & Effects", href: "#" },
    { label: "Custom Branding Toolkit", href: "#" },
    { label: "Data Capture & Analytics", href: "#" },
  ],
  Company: [
    { label: "About Party Box", href: routes.about},
    { label: "Blog / Resources", href: routes.blog.list },
    { label: "Case Studies", href: "#" },
    { label: "Privacy Policy", href: routes.privacyPolicy },
    { label: "Terms & Conditions", href: routes.termsOfService },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#ffffff]">
      <Container className="py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-4 space-y-4 md:col-span-1">
            <Link href={routes.home} className="flex items-center gap-2">
              <div className="relative flex items-center justify-center rounded-[999px] px-3 py-2">
                <Image
                  src="/logo.svg"
                  alt="Party Box"
                  width={40}
                  height={40}
                  className="h-12 w-12"
                />
              </div>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-slate-700">
              Affordable, brand-ready photo & video booth experiences for events and activations in Dubai & Abu Dhabi.
            </p>
            <div className="pt-2 space-y-1 text-xs text-slate-700">
              <p>Dubai, United Arab Emirates</p>
              <p>
                Phone: <span className="font-medium text-slate-900">+971 4 448 8556</span>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@partybox.ae"
                  className="font-medium text-slate-900 underline-offset-2 hover:underline"
                >
                  info@partybox.ae
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-800 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-800 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <Facebook className="h-4 w-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div className="col-span-4 grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            {Object.entries(footerNav).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-slate-700 transition-colors hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Party Box. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
