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
                    <h2 className="text-3xl font-bold text-center font-headline mb-8">{tier.boothType} Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {tier.packages.map(pkg => (
                            <Card key={pkg.name} className={cn("flex flex-col", pkg.isPopular && "border-primary ring-2 ring-primary")}>
                                {pkg.isPopular && (
                                    <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider text-center py-1 rounded-t-lg flex items-center justify-center gap-1">
                                        <Star className="w-4 h-4"/> Most Popular
                                    </div>
                                )}
                                <CardHeader className="text-center">
                                    <CardTitle className="text-2xl font-headline">{pkg.name}</CardTitle>
                                    <CardDescription className="text-4xl font-bold text-primary">{pkg.price}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-3">
                                        {pkg.features.map(feature => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full" variant={pkg.isPopular ? 'default' : 'secondary'}>
                                        <Link href={routes.contact}>Book {pkg.name}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
