"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { MainNav } from './MainNav';
import { MobileNav } from './MobileNav';
import { routes } from '@/lib/routes';
import { cn } from '@/lib/utils';
import Container from './Container';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all",
      isScrolled ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "border-transparent bg-transparent"
    )}>
      <Container className="flex h-16 items-center">
        <MobileNav />
        <Link href={routes.home} className="hidden items-center space-x-2 md:flex">
          <Zap className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">
            Dubai Booths
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <MainNav />
        </div>
      </Container>
    </header>
  );
}
