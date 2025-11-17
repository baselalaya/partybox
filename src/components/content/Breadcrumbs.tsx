import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { routes } from '@/lib/routes';
import { cn } from '@/lib/utils';

type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const allItems = [{ name: 'Home', href: routes.home }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}${item.href}`
    }))
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("mb-4 text-sm", className ?? "text-slate-500")}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center gap-2">
        {allItems.map((item, index) => (
          <li key={item.href}>
            <div className="flex items-center">
              {index > 0 && (
                <ChevronRight className="mx-1 h-4 w-4 shrink-0 opacity-60" />
              )}
              <Link
                href={item.href}
                className="transition-colors hover:text-primary"
                aria-current={index === allItems.length - 1 ? 'page' : undefined}
              >
                {item.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
