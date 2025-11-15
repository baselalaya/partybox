'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { routes } from '@/lib/routes';

type StickyBoothCtaBarProps = {
  boothTitle: string;
};

export function StickyBoothCtaBar({ boothTitle }: StickyBoothCtaBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById('booth-hero-cta');
    if (!heroCta) {
      return;
    }

    const onScroll = () => {
      const rect = heroCta.getBoundingClientRect();
      // Show bar only after the hero CTA block has fully scrolled past the top
      const heroBelowTop = rect.bottom > 0;
      setVisible(!heroBelowTop);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="pointer-events-auto border-t border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 text-sm md:text-base">
          <div className="hidden md:block">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Ready to book?
            </p>
            <p className="text-sm font-medium text-slate-900">
              Lock in {boothTitle} for your next activation.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-end gap-2 md:flex-none">
            <Link
              href={routes.contact}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs md:text-sm font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300 md:flex-none md:px-5"
            >
              Ask About Availability
            </Link>
            <Link
              href={routes.contact}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-4 py-2 text-xs md:text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF9F6E] md:flex-none md:px-5"
            >
              Book This Booth
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
