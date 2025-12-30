import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GoogleTagManager } from '@/components/layout/GoogleTagManager';
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { cn } from '@/lib/utils';
import { generateSeoMetadata } from '@/lib/seo';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = generateSeoMetadata({
  title: 'Party Box | AI, 360 & Mirror Photo Booth Rentals in Dubai',
  description: 'Top-rated photo booth rentals in Dubai & Abu Dhabi. We offer AI, 360, and Mirror booths for weddings, corporate events, and parties. Get an instant quote!',
  path: '/',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable)}>
      <head />
      <body
        className={cn(
          "min-h-screen bg-[#FDF6EC] font-sans text-slate-700 antialiased",
          "flex flex-col"
        )}
      >
        <GoogleTagManager />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Chatbot widget placeholder */}
        <div id="partybox-chatbot-root" data-source="partybox-marketing" />
        <Toaster />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
