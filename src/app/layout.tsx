import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { generateSeoMetadata } from '@/lib/seo';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = generateSeoMetadata({
  title: 'Dubai Booths | AI, 360 & Mirror Photo Booth Rentals in Dubai',
  description: 'Top-rated photo booth rentals in Dubai & Abu Dhabi. We offer AI, 360, and Mirror booths for weddings, corporate events, and parties. Get an instant quote!',
  path: '/',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(plusJakartaSans.variable)}>
      <head />
      <body className={cn("min-h-screen bg-white font-sans text-slate-700")}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
