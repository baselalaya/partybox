import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Home, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { routes } from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Thank You | Party Box',
    description: 'Thank you for your inquiry. We will get back to you shortly.',
};

export default function ThankYouPage() {
    return (
        <div className="min-h-[80vh] flex flex-col justify-center">
            <Section className="py-20 md:py-32">
                <Container className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto">

                    {/* Success Icon Animation Wrapper */}
                    <div className="relative mb-4">
                        <div className="absolute inset-0 bg-green-100 rounded-full scale-150 animate-pulse opacity-50" />
                        <div className="relative bg-green-50 p-6 rounded-full border-2 border-green-100 shadow-xl">
                            <CheckCircle2 className="w-16 h-16 text-green-600" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                            Thank You!
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed md:px-12">
                            Your message has been successfully received. Our team is already reviewing your details and will be in touch shortly to make your event unforgettable.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Link href={routes.home}>
                                <Home className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="rounded-full px-8 h-12 text-base border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                        >
                            <Link href={routes.gallery}>
                                Explore Gallery
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <p className="pt-8 text-sm text-slate-400">
                        Have an urgent request? Call us directly at <a href="tel:+97144488556" className="text-slate-600 hover:text-slate-900 font-medium underline underline-offset-2">+971 4 448 8556</a>
                    </p>

                </Container>
            </Section>
        </div>
    );
}
