"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MainNav } from './MainNav';
import { MobileNav } from './MobileNav';
import { routes } from '@/lib/routes';
import { cn } from '@/lib/utils';
import Container from './Container';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "border-b border-slate-200/80 bg-white/80 backdrop-blur-xl" 
        : "border-b border-transparent"
    )}>
      <Container className="flex h-20 items-center">
        <Link href={routes.home} className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="Party Box" width={150} height={150} className="h-12 w-12" />
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <MainNav />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
