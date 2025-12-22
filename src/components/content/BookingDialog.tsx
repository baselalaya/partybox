"use client";

import { useState } from "react";
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
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [noDateYet, setNoDateYet] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const steps = [
    { id: 1 as const, label: "Event basics" },
    { id: 2 as const, label: "Event details" },
    { id: 3 as const, label: "Your contact" },
  ];

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (!nextOpen) {
          setStep(1);
        }
      }}
    >
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
            Share a few details about your event and we&apos;ll get back to you with
            availability, pricing, and next steps.
          </DialogDescription>
          {boothTitle && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-800">
              <span className="text-slate-500 uppercase tracking-[0.16em]">
                Booth
              </span>
              <span className="truncate">{boothTitle}</span>
            </div>
          )}
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
            Step {step} of 3 · {steps.find((s) => s.id === step)?.label}
          </p>
        </DialogHeader>
        <form
          className="mt-4 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = {
              name: formData.get('name') as string,
              email: formData.get('email') as string,
              phone: formData.get('phone') as string,
              company: formData.get('eventType') as string, // Mapping eventType to company/context
              message: `Date: ${formData.get('date') || 'No date yet'}\nEvent Type: ${formData.get('eventType')}\nMessage: ${formData.get('message')}`,
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

              toast({
                title: "Request Sent!",
                description: "We'll get back to you shortly with availability.",
              });
              setOpen(false);
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

          {/* Step 1 – Event basics */}
          <div className={cn("space-y-4", step !== 1 && "hidden")}>
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-800">
                First, when is your event and what kind of event is it?
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                    Event date
                  </label>
                  <input
                    type="date"
                    name="date"
                    disabled={noDateYet}
                    className={cn(
                      "w-full rounded-full border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none ring-offset-0 transition",
                      noDateYet
                        ? "bg-slate-50 text-slate-400 opacity-70"
                        : "bg-white text-slate-900 focus:border-slate-300 focus:ring-2 focus:ring-[#FF9F6E]/50"
                    )}
                  />
                  <label className="mt-1 inline-flex cursor-pointer items-center gap-2 text-[11px] font-medium text-slate-600">
                    <input
                      type="checkbox"
                      className="h-[14px] w-[14px] rounded border border-slate-300 text-[#FF6C8B] shadow-sm focus:ring-1 focus:ring-[#FF9F6E] focus:ring-offset-1"
                      checked={noDateYet}
                      onChange={(e) => setNoDateYet(e.target.checked)}
                    />
                    <span className={cn(noDateYet && "text-slate-500")}>
                      I don&apos;t know the date yet
                    </span>
                  </label>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                    What kind of event is it?
                  </label>
                  <input
                    name="eventType"
                    placeholder="Brand activation, mall pop-up, wedding, corporate, etc."
                    className="w-full rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-offset-0 transition focus:border-slate-300 focus:ring-2 focus:ring-[#FF9F6E]/50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 – Event details */}
          <div className={cn("space-y-4", step !== 2 && "hidden")}>
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-800">
                Great. Anything we should know about the brand, venue, or timings?
              </p>
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                  Anything we should know?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-offset-0 transition focus:border-slate-300 focus:ring-2 focus:ring-[#FF9F6E]/50"
                  placeholder="Share details about your brand, venue, timings, or ideas."
                />
              </div>
            </div>
          </div>

          {/* Step 3 – Your contact */}
          <div className={cn("space-y-4", step !== 3 && "hidden")}>
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-800">
                Finally, how can we reach you with availability and pricing?
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                    Your name
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Add your name"
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
                    placeholder="name@company.com"
                    className="w-full rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-offset-0 transition focus:border-slate-300 focus:ring-2 focus:ring-[#FF9F6E]/50"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                  Phone / WhatsApp
                </label>
                <input
                  name="phone"
                  placeholder="For quick updates about your booking"
                  className="w-full rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-offset-0 transition focus:border-slate-300 focus:ring-2 focus:ring-[#FF9F6E]/50"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="text-[11px] text-slate-500 sm:flex-1 sm:text-right">
              We typically reply within one business day with availability, pricing, and next steps.
            </p>
            <div className="flex justify-end gap-2">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                  onClick={() => setStep((prev) => (prev > 1 ? (prev - 1) as 1 | 2 | 3 : prev))}
                  disabled={loading}
                >
                  Back
                </Button>
              )}
              {step < 3 && (
                <Button
                  type="button"
                  className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  onClick={() => setStep((prev) => (prev < 3 ? (prev + 1) as 1 | 2 | 3 : prev))}
                >
                  Next
                </Button>
              )}
              {step === 3 && (
                <Button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  {loading ? 'Sending...' : 'Send booking request'}
                </Button>
              )}
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
