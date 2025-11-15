"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { routes } from '@/lib/routes';

const navLinks = [
  { href: '/#solutions', label: 'Solutions' },
  { href: '/#ai-features', label: 'AI Features' },
  { href: '/live-customization', label: 'Live Customization' },
  { href: '/gallery', label: 'Gallery' },
];

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("hidden md:flex items-center gap-6 lg:gap-8", className)}
      {...props}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-slate-900",
            pathname.startsWith(link.href) ? "text-slate-900" : "text-slate-600"
          )}
        >
          {link.label}
        </Link>
      ))}
      <div className="flex items-center gap-3 pl-3 border-l border-slate-200/80">
 
        <Button
          asChild
          size="sm"
          className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <Link href={routes.contact}>Get In Touch</Link>
        </Button>
      </div>
    </nav>
  );
}
