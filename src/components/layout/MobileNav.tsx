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
import { cn } from "@/lib/utils"

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
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6 text-slate-800" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 bg-white">
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2"
          onClick={() => setOpen(false)}
        >
          <Zap className="h-6 w-6 text-fuchsia-600" />
          <span className="font-bold text-slate-900">Dubai Booths</span>
        </Link>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {navLinks.map(
              (item) =>
                item.href && (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-slate-600 transition-colors hover:text-fuchsia-600"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
            )}
             <Button asChild className="mt-4" variant="default">
                <Link href={routes.contact} onClick={() => setOpen(false)}>Book Now</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
