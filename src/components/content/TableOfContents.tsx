"use client"

import { useEffect, useState } from 'react';
import { slugify } from '@/lib/utils'; // We'll add this utility function
import { cn } from '@/lib/utils';

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function TableOfContents({ contentSelector }: { contentSelector: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const contentElement = document.querySelector(contentSelector);
    if (!contentElement) return;

    const headingElements = Array.from(contentElement.querySelectorAll('h2, h3'));
    const newHeadings = headingElements.map((heading) => {
      const text = heading.textContent || '';
      const id = slugify(text);
      heading.id = id;
      return {
        id,
        text,
        level: Number(heading.tagName.substring(1)),
      };
    });
    setHeadings(newHeadings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [contentSelector]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24">
        <h3 className="font-semibold mb-2">On this page</h3>
        <ul className="space-y-2 text-sm">
            {headings.map((heading) => (
            <li key={heading.id}>
                <a
                href={`#${heading.id}`}
                className={cn(
                    'transition-colors hover:text-primary',
                    heading.level === 3 ? 'ml-4' : '',
                    activeId === heading.id ? 'text-primary font-medium' : 'text-muted-foreground'
                )}
                >
                {heading.text}
                </a>
            </li>
            ))}
        </ul>
    </div>
  );
}
