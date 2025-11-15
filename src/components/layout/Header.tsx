"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MainNav } from './MainNav';
import { MobileNav } from './MobileNav';
import { routes } from '@/lib/routes';
import { cn } from '@/lib/utils';
import Container from './Container';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const lastScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 20;

      // Only trigger when the header scroll state actually changes
      if (nextIsScrolled !== lastScrolled.current) {
        lastScrolled.current = nextIsScrolled;
        setIsScrolled(nextIsScrolled);

        // Trigger a short bounce animation on state change
        setIsBouncing(true);
        window.setTimeout(() => setIsBouncing(false), 420);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      isScrolled
        ? "border-slate-200/80 bg-white/80 backdrop-blur"
        : "border-b-0 bg-[#FDF6EC]/90 backdrop-blur"
    )}>
      <Container className="flex h-16 md:h-24 items-center gap-6">
        <div className="flex items-center gap-3">
          <Link href={routes.home} className="flex items-center gap-2">
            <div className="relative flex items-center justify-center px-3 py-2">
              <Image
                src="/logo.svg"
                alt="Party Box"
                width={150}
                height={150}
                className={cn(
                  "h-[64px] w-auto transform transition-transform duration-800 ease-in-out will-change-transform",
                  isScrolled
                    ? "scale-75 translate-y-0"
                    : "scale-125 translate-y-0 md:translate-y-0",
                  isBouncing && "logo-bounce"
                )}
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-3">
          <MainNav />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
