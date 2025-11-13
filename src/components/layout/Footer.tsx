import Link from 'next/link';
import { Zap, Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { routes } from '@/lib/routes';
import Container from './Container';

const footerNav = {
  'Explore': [
    { label: 'Booths', href: routes.booths.list },
    { label: 'Events', href: routes.events.list },
    { label: 'Rates', href: routes.rates },
    { label: 'Blog', href: routes.blog.list },
  ],
  'Company': [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: routes.contact },
    { label: 'Privacy Policy', href: routes.privacyPolicy },
    { label: 'Terms of Service', href: routes.termsOfService },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <Container>
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            <Link href={routes.home} className="flex items-center space-x-2">
              <Zap className="h-7 w-7 text-fuchsia-600" />
              <span className="text-lg font-semibold text-slate-900">Dubai Booths</span>
            </Link>
            <p className="text-sm text-slate-600 max-w-xs">
              Premium photo booth experiences in Dubai & Abu Dhabi.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerNav).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm text-slate-600 hover:text-fuchsia-600 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Connect</h3>
              <ul className="mt-4 space-y-4">
                 <li className="flex items-center gap-3">
                  <a href="#" className="text-slate-500 hover:text-fuchsia-600 transition-colors"><Instagram className="w-5 h-5"/></a>
                  <a href="#" className="text-slate-500 hover:text-fuchsia-600 transition-colors"><Facebook className="w-5 h-5"/></a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Mail className="w-5 h-5 mt-0.5 text-slate-500" />
                  <a href="mailto:hello@dubaibooths.com" className="text-slate-600 hover:text-fuchsia-600 transition-colors">hello@dubaibooths.com</a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Phone className="w-5 h-5 mt-0.5 text-slate-500" />
                  <a href="tel:+971501234567" className="text-slate-600 hover:text-fuchsia-600 transition-colors">+971 50 123 4567</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="border-t border-slate-200 py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dubai Booths. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href={routes.privacyPolicy} className="hover:text-fuchsia-600">Privacy Policy</Link>
            <Link href={routes.termsOfService} className="hover:text-fuchsia-600">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
