"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '@/lib/routes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: routes.booths.list, label: 'Photo Booths' },
  { href: routes.events.list, label: 'Events' },
  { href: routes.rates, label: 'Rates' },
  { href: routes.blog.list, label: 'Blog' },
];

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("hidden md:flex items-center space-x-6 lg:space-x-8", className)}
      {...props}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname.startsWith(link.href) ? "text-primary" : "text-slate-600"
          )}
        >
          {link.label}
        </Link>
      ))}
       <Button asChild className="ml-4" size="sm">
         <Link href={routes.contact}>Book Now</Link>
       </Button>
    </nav>
  );
}
