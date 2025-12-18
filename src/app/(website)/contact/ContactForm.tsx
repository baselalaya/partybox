"use client";

import { useForm } from 'react-hook-form';
import { useEffect, useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phoneNumber: z.string().min(4, { message: "Please add your phone number." }),
  company: z.string().optional(),
  interest: z.string().optional(),
  eventDetails: z.string().min(6, { message: "Please tell us a bit about your event." }),
  booth: z.string().optional(),
  boothTitle: z.string().optional(),
  honeypot: z.string().optional(),
});

export default function ContactForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const booth = searchParams.get('booth') ?? '';
  const boothTitle = searchParams.get('boothTitle') ?? '';

  const mountTimeRef = useRef<number | null>(null);

  useEffect(() => {
    mountTimeRef.current = performance.now();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      company: "",
      interest: booth ? "photo" : "",
      eventDetails: boothTitle
        ? `Interested in ${boothTitle}. Please share availability and options for this booth.\n\nEvent details:`
        : "",
      booth,
      boothTitle,
      honeypot: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const now = performance.now();
    const mountedAt = mountTimeRef.current ?? now;
    const elapsed = now - mountedAt;

    // Simple client-side spam protection: ignore submissions that happen too fast
    if (elapsed < 1500) {
      return;
    }

    // Honeypot field should remain empty – bots often fill everything
    if (values.honeypot && values.honeypot.trim().length > 0) {
      return;
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.fullName,
          email: values.email,
          phone: values.phoneNumber,
          message: `Company: ${values.company || 'N/A'}\nInterest: ${values.interest || 'N/A'}\n\n${values.eventDetails}`,
          boothInterest: values.boothTitle || values.interest,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="mt-8 grid gap-8 rounded-[24px] border border-slate-200/80 bg-white/70 p-6 md:grid-cols-3 md:p-8">
      <div className="md:col-span-2">
        <h2 className="mb-2 text-2xl font-semibold text-slate-900">Tell Us About Your Event</h2>
        <p className="text-sm text-slate-500">Share a few details and we&apos;ll recommend the best setup for your brand, budget, and timeline.</p>
        {boothTitle && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-800">
            <span className="text-slate-500 uppercase tracking-[0.16em]">
              Selected booth
            </span>
            <span className="truncate">{boothTitle}</span>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot field – hidden from real users */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
              {...form.register("honeypot")}
            />
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name<span className="text-[#FF6C8B]">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address<span className="text-[#FF6C8B]">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number<span className="text-[#FF6C8B]">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="+971 50 123 4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What interests you?</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select your interest</option>
                      <option value="photo">Photo Booths</option>
                      <option value="video">Video Booths</option>
                      <option value="engagement">Engagement Tech</option>
                      <option value="live-customization">Live Customization</option>
                      <option value="other">Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="eventDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tell us about your event</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your event, objectives, budget, and timeline..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                size="lg"
                className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                Send Message
              </Button>
              <p className="text-[11px] text-slate-500">
                We typically reply within one business day.
              </p>
            </div>
          </form>
        </Form>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">Other Ways to Reach Us</h2>
        <Card className="rounded-[20px] border border-slate-200/80 bg-white shadow-sm">
          <CardContent className="space-y-4 p-6">
            <Link href="https://wa.me/97144488556" target="_blank" className="group flex items-center gap-4">
              <MessageCircle className="h-6 w-6 text-[#FF6C8B]" />
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-[#FF6C8B]">WhatsApp</p>
                <p className="text-sm text-slate-500">+971 4 448 8556</p>
              </div>
            </Link>
            <div className="border-t" />
            <Link href="tel:+97144488556" target="_blank" className="group flex items-center gap-4">
              <Phone className="h-6 w-6 text-[#FF6C8B]" />
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-[#FF6C8B]">Phone</p>
                <p className="text-sm text-slate-500">+971 4 448 8556</p>
              </div>
            </Link>
            <div className="border-t" />
            <Link href="mailto:info@partybox.ae" target="_blank" className="group flex items-center gap-4">
              <Mail className="h-6 w-6 text-[#FF6C8B]" />
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-[#FF6C8B]">Email</p>
                <p className="text-sm text-slate-500">info@partybox.ae</p>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
