import Link from 'next/link';
import { Zap, Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { routes } from '@/lib/routes';
import Container from './Container';

const footerNav = [
  { label: 'Booths', href: routes.booths.list },
  { label: 'Events', href: routes.events.list },
  { label: 'Rates', href: routes.rates },
  { label: 'Contact', href: routes.contact },
  { label: 'Privacy Policy', href: routes.privacyPolicy },
  { label: 'Terms of Service', href: routes.termsOfService },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href={routes.home} className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">Dubai Booths</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Premium photo booth experiences in Dubai & Abu Dhabi.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground">Navigation</h3>
                <ul className="mt-4 space-y-2">
                  {footerNav.slice(0, 4).map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Legal</h3>
                <ul className="mt-4 space-y-2">
                  {footerNav.slice(4).map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Contact Us</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+971 50 123 4567</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@dubaibooths.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Dubai Booths. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
