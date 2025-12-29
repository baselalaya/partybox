"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";

type BookingDialogProps = {
  boothTitle?: string;
  boothSlug?: string;
  triggerLabel?: string;
  triggerClassName?: string;
};

export function BookingDialog({
  boothTitle,
  boothSlug,
  triggerLabel = "Book Now",
  triggerClassName,
}: BookingDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="sm"
          className={cn(
            "rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
            triggerClassName
          )}
        >
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-md sm:max-w-lg rounded-3xl border border-slate-200/80 bg-white/95 p-4 sm:p-6 shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-slate-900">
            {boothTitle ? `Book ${boothTitle}` : "Book your booth"}
          </DialogTitle>
          <DialogDescription className="mt-1 text-sm text-slate-600">
            Share your details and we&apos;ll get back to you with availability and pricing.
          </DialogDescription>
          {boothTitle && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-800 self-start">
              <span className="text-slate-500 uppercase tracking-[0.16em]">
                Booth
              </span>
              <span className="truncate">{boothTitle}</span>
            </div>
          )}
        </DialogHeader>
        <form
          className="mt-6 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = {
              name: formData.get('name') as string,
              email: formData.get('email') as string,
              phone: formData.get('phone') as string,
              message: formData.get('message') as string,
              boothInterest: boothTitle || 'General Inquiry',
            };

            setLoading(true);
            try {
              const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              });

              if (!res.ok) throw new Error('Failed to submit');

              setOpen(false);
              router.push(routes.thankYou);

            } catch (err) {
              toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
              });
            } finally {
              setLoading(false);
            }
          }}
        >
          {boothSlug && (
            <input type="hidden" name="booth" value={boothSlug} />
          )}
          {boothTitle && (
            <input type="hidden" name="boothTitle" value={boothTitle} />
          )}

          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                  Full Name
                </label>
                <input
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-offset-0 transition focus:border-slate-300 focus:ring-2 focus:ring-[#FF9F6E]/50"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-offset-0 transition focus:border-slate-300 focus:ring-2 focus:ring-[#FF9F6E]/50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                Mobile
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+971 50 000 0000"
                className="w-full rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-offset-0 transition focus:border-slate-300 focus:ring-2 focus:ring-[#FF9F6E]/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                Idea / Notes
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-offset-0 transition focus:border-slate-300 focus:ring-2 focus:ring-[#FF9F6E]/50"
                placeholder="Share your event idea, date, or any specific requirements..."
              />
            </div>
          </div>

          <DialogFooter className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="text-[11px] text-slate-500 sm:flex-1 sm:text-right">
              We usually reply within 24 hours.
            </p>
            <Button
              type="submit"
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              {loading ? 'Sending...' : 'Send Request'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
