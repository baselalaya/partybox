import { getPricing } from '@/lib/wordpress';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import { routes } from '@/lib/routes';
import { cn } from '@/lib/utils';

export default async function PricingTable() {
    const pricingTiers = await getPricing();

    return (
        <div className="space-y-12">
            {pricingTiers.map(tier => (
                <div key={tier.boothType}>
                    <h2 className="text-3xl font-bold text-center font-headline mb-8 text-slate-900">{tier.boothType} Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {tier.packages.map(pkg => (
                            <div key={pkg.name} className={cn(
                                "group relative",
                                pkg.isPopular && "",
                            )}>
                                <div className={cn(
                                    "absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                                    pkg.isPopular ? "bg-gradient-to-br from-primary to-fuchsia-400 opacity-100" : "bg-slate-200"
                                )} />
                                <Card className={cn(
                                    "relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 backdrop-blur shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-300",
                                    "hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]",
                                    pkg.isPopular && "ring-1 ring-primary"
                                )}>
                                    {pkg.isPopular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
                                            <Star className="w-3.5 h-3.5"/> Most Popular
                                        </div>
                                    )}
                                    <CardHeader className="text-center pb-2">
                                        <CardTitle className="text-2xl font-headline text-slate-900">{pkg.name}</CardTitle>
                                        <CardDescription className="mt-2 text-slate-600">Perfect for {pkg.name.toLowerCase()} events</CardDescription>
                                        <div className="mt-4 flex items-baseline justify-center gap-2">
                                            <div className="text-4xl font-bold tracking-tight text-slate-900">
                                                {pkg.price}
                                            </div>
                                            <span className="text-sm text-slate-500">all-in</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1 pt-2">
                                        <ul className="space-y-3">
                                            {pkg.features.map(feature => (
                                                <li key={feature} className="flex items-start gap-3">
                                                    <Check className="h-5 w-5 text-teal-500 mt-1 shrink-0" />
                                                    <span className="text-slate-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="pt-0">
                                        <Button asChild className={cn("w-full", pkg.isPopular ? "bg-primary hover:bg-fuchsia-700 text-primary-foreground" : "")}
                                            variant={pkg.isPopular ? 'default' : 'secondary'}>
                                            <Link href={routes.contact}>Book {pkg.name}</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
