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
    <footer className="bg-[#FFF6E9] border-t border-orange-100">
      <Container className="py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-4 md:col-span-1 space-y-4">
            <Link href={routes.home} className="flex items-center space-x-2">
              <Zap className="h-7 w-7 text-primary" />
              <span className="text-lg font-semibold text-slate-900">Dubai Booths</span>
            </Link>
            <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
              Premium photo booth experiences in Dubai & Abu Dhabi.
            </p>
             <div className="flex space-x-4 pt-2">
                <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Instagram className="w-5 h-5"/></a>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Facebook className="w-5 h-5"/></a>
            </div>
          </div>

          <div className="col-span-4 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
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
          </div>

        </div>
        <div className="border-t border-orange-200/50 mt-8 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dubai Booths. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
