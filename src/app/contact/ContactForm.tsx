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
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  eventType: z.string().min(2, { message: "Please specify the event type." }),
  eventDate: z.string().min(1, { message: "Please select a date." }),
  location: z.string().optional(),
  notes: z.string().optional(),
});

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      location: "",
      notes: "",
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
    <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 font-headline text-slate-900">Send us a message</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
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
                            name="eventType"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Event Type</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., Wedding, Corporate" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="eventDate"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Event Date</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Tell us more about your event..." className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" size="lg">Send Message</Button>
                </form>
            </Form>
        </div>
        <div>
            <h2 className="text-2xl font-bold mb-4 font-headline text-slate-900">Other Ways to Reach Us</h2>
            <Card>
                <CardContent className="p-6 space-y-4">
                    <Link href="https://wa.me/971501234567" target="_blank" className="flex items-center gap-4 group">
                         <MessageCircle className="h-6 w-6 text-fuchsia-600" />
                         <div>
                            <p className="font-semibold text-slate-900 group-hover:text-fuchsia-600">WhatsApp</p>
                            <p className="text-sm text-slate-500">+971 50 123 4567</p>
                         </div>
                    </Link>
                     <div className="border-t"/>
                     <a href="tel:+971501234567" className="flex items-center gap-4 group">
                         <Phone className="h-6 w-6 text-fuchsia-600" />
                         <div>
                            <p className="font-semibold text-slate-900 group-hover:text-fuchsia-600">Phone</p>
                            <p className="text-sm text-slate-500">+971 50 123 4567</p>
                         </div>
                    </a>
                     <div className="border-t"/>
                     <a href="mailto:hello@dubaibooths.com" className="flex items-center gap-4 group">
                         <Mail className="h-6 w-6 text-fuchsia-600" />
                         <div>
                            <p className="font-semibold text-slate-900 group-hover:text-fuchsia-600">Email</p>
                            <p className="text-sm text-slate-500">hello@dubaibooths.com</p>
                         </div>
                    </a>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
