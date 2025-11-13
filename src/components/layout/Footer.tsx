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
    <footer className="bg-slate-100 border-t border-slate-200">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href={routes.home} className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-fuchsia-600" />
                <span className="text-xl font-bold text-slate-900">Dubai Booths</span>
              </Link>
              <p className="text-sm text-slate-600">
                Premium photo booth experiences in Dubai & Abu Dhabi.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-500 hover:text-fuchsia-600"><Instagram /></Link>
                <Link href="#" className="text-slate-500 hover:text-fuchsia-600"><Facebook /></Link>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900">Navigation</h3>
                <ul className="mt-4 space-y-2">
                  {footerNav.slice(0, 4).map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm text-slate-600 hover:text-fuchsia-600">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Legal</h3>
                <ul className="mt-4 space-y-2">
                  {footerNav.slice(4).map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm text-slate-600 hover:text-fuchsia-600">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Contact Us</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="w-4 h-4 text-fuchsia-600" />
                  <span>+971 50 123 4567</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail className="w-4 h-4 text-fuchsia-600" />
                  <span>hello@dubaibooths.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Dubai Booths. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
