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
  ],
   'Legal': [
    { label: 'Privacy Policy', href: routes.privacyPolicy },
    { label: 'Terms of Service', href: routes.termsOfService },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#FFF6E9]">
      <Container>
        <div className="py-20 grid grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <Link href={routes.home} className="flex items-center space-x-2">
              <Zap className="h-7 w-7 text-primary" />
              <span className="text-lg font-semibold text-slate-900">Dubai Booths</span>
            </Link>
            <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
              Premium photo booth experiences in Dubai & Abu Dhabi.
            </p>
             <div className="flex space-x-5 pt-2">
                <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Instagram className="w-5 h-5"/></a>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Facebook className="w-5 h-5"/></a>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerNav).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm text-slate-600 hover:text-primary transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Get In Touch</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <Mail className="w-5 h-5 mt-0.5 text-slate-500 shrink-0" />
                  <a href="mailto:hello@dubaibooths.com" className="text-slate-600 hover:text-primary transition-colors">hello@dubaibooths.com</a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Phone className="w-5 h-5 mt-0.5 text-slate-500 shrink-0" />
                  <a href="tel:+971501234567" className="text-slate-600 hover:text-primary transition-colors">+971 50 123 4567</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="border-t border-orange-200/50 py-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dubai Booths. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
