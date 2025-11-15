"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { routes } from "@/lib/routes"

const navLinks = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#ai-features", label: "AI Features" },
  { href: "/live-customization", label: "Live Customization" },
  { href: "/gallery", label: "Gallery" },
  { href: routes.contact, label: "Get In Touch" },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6 text-slate-800" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 bg-white w-full max-w-sm">
        <Link
          href="/"
          className="flex items-center space-x-2 border-b pb-4"
          onClick={() => setOpen(false)}
          >
            <Image src="/logo.svg" alt="Party Box" width={24} height={24} className="h-6 w-6" />
            <span className="font-bold text-slate-900">Party Box</span>
        </Link>
        
        <div className="mt-8 flex flex-col space-y-5">
            {navLinks.map(
                (item) =>
                item.href && (
                    <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg text-slate-700 transition-colors hover:text-[#635AFF]"
                    onClick={() => setOpen(false)}
                    >
                    {item.label}
                    </Link>
                )
            )}
        </div>
        <div className="absolute bottom-8 left-6 right-6">
        <Button
          asChild
          className="w-full rounded-full bg-[#635AFF] hover:bg-[#5148f5] shadow hover:shadow-md transition"
          size="lg"
        >
          <Link href={routes.contact} onClick={() => setOpen(false)}>
            Get In Touch
          </Link>
        </Button>
        </div>

      </SheetContent>
    </Sheet>
  )
}
