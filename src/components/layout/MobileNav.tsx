"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { routes } from "@/lib/routes"

const navLinks = [
  { href: routes.booths.list, label: 'Photo Booths' },
  { href: routes.events.list, label: 'Events' },
  { href: routes.rates, label: 'Rates' },
  { href: routes.blog.list, label: 'Blog' },
  { href: routes.contact, label: 'Contact' },
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
            <Zap className="h-6 w-6 text-fuchsia-600" />
            <span className="font-bold text-slate-900">Dubai Booths</span>
        </Link>
        
        <div className="mt-8 flex flex-col space-y-5">
            {navLinks.map(
                (item) =>
                item.href && (
                    <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg text-slate-700 transition-colors hover:text-fuchsia-600"
                    onClick={() => setOpen(false)}
                    >
                    {item.label}
                    </Link>
                )
            )}
        </div>
        <div className="absolute bottom-8 left-6 right-6">
            <Button asChild className="w-full" size="lg">
                <Link href={routes.contact} onClick={() => setOpen(false)}>Book Now</Link>
            </Button>
        </div>

      </SheetContent>
    </Sheet>
  )
}
