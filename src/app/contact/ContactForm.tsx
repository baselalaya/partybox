"use client";

import { useForm } from 'react-hook-form';
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

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phoneNumber: z.string().min(4, { message: "Please enter a phone number." }),
  company: z.string().optional(),
  interest: z.string().min(2, { message: "Please select what interests you." }),
  eventDetails: z.string().min(10, { message: "Please tell us a bit more about your event." }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      company: "",
      interest: "",
      eventDetails: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // In a real app, you'd send this to a server
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="mt-8 grid gap-8 rounded-[24px] border border-slate-200/80 bg-white/70 p-6 md:grid-cols-3 md:p-8">
        <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">Tell Us About Your Project</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
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
                                <FormLabel>Email Address</FormLabel>
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
                                <FormLabel>Phone Number</FormLabel>
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
                                <FormLabel>Company (optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your company name" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
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
                                <option value="">Select an option</option>
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
                    </div>
                    <FormField
                        control={form.control}
                        name="eventDetails"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Tell us about your event</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Describe your event, objectives, budget, and timeline..." className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-[#FF9F6E] to-[#FF6C8B] px-6 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg motion-safe:hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    >
                      Send Message
                    </Button>
                </form>
            </Form>
        </div>
        <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">Other Ways to Reach Us</h2>
            <Card className="rounded-[20px] border border-slate-200/80 bg-white shadow-sm">
                <CardContent className="space-y-4 p-6">
                    <Link href="https://wa.me/971501234567" target="_blank" className="group flex items-center gap-4">
                         <MessageCircle className="h-6 w-6 text-[#FF6C8B]" />
                         <div>
                            <p className="font-semibold text-slate-900 group-hover:text-[#FF6C8B]">WhatsApp</p>
                            <p className="text-sm text-slate-500">+971 50 123 4567</p>
                         </div>
                    </Link>
                     <div className="border-t"/>
                     <a href="tel:+971501234567" className="group flex items-center gap-4">
                         <Phone className="h-6 w-6 text-[#FF6C8B]" />
                         <div>
                            <p className="font-semibold text-slate-900 group-hover:text-[#FF6C8B]">Phone</p>
                            <p className="text-sm text-slate-500">+971 50 123 4567</p>
                         </div>
                    </a>
                     <div className="border-t"/>
                     <a href="mailto:hello@dubaibooths.com" className="group flex items-center gap-4">
                         <Mail className="h-6 w-6 text-[#FF6C8B]" />
                         <div>
                            <p className="font-semibold text-slate-900 group-hover:text-[#FF6C8B]">Email</p>
                            <p className="text-sm text-slate-500">hello@dubaibooths.com</p>
                         </div>
                    </a>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
