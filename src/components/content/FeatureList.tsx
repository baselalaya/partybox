import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Share2, Printer, Smile, LucideProps } from "lucide-react";
import { FC } from "react";

const iconMap: { [key: string]: FC<LucideProps> } = {
  Sparkles,
  Share2,
  Printer,
  Smile,
};

type Feature = {
  icon: string;
  label: string;
  title: string;
  description: string;
  color: 'orange' | 'teal';
};

const features: Feature[] = [
  {
    icon: 'Sparkles',
    label: 'Smart pricing',
    title: 'Smart Pricing for Smart Brands',
    description: 'Professional quality, pocket-friendly costs. Get premium features without the premium price tag.',
    color: 'orange',
  },
  {
    icon: 'Share2',
    label: 'Instant sharing',
    title: 'Instant Social Sharing',
    description: 'Share your memories instantly to social media, email, or WhatsApp right from the booth.',
    color: 'teal',
  },
  {
    icon: 'Printer',
    label: 'Unlimited prints',
    title: 'Unlimited High-Quality Prints',
    description: 'Take home unlimited lab-quality prints as a timeless souvenir from your event.',
    color: 'orange',
  },
  {
    icon: 'Smile',
    label: 'On-site support',
    title: 'Professional On-Site Operator',
    description: 'A friendly attendant ensures everything runs smoothly, so you can focus on the fun.',
    color: 'teal',
  },
];

const colorClasses = {
    orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-500',
    },
    teal: {
        bg: 'bg-teal-50',
        text: 'text-teal-500',
    }
}

export default function FeatureList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => {
        const IconComponent = iconMap[feature.icon];
        const colors = colorClasses[feature.color];
        return (
          <Card
            key={feature.title}
            className="relative text-left bg-white rounded-2xl border border-slate-200/70 p-6 md:p-7 shadow-[0_16px_40px_rgba(15,23,42,0.04)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
          >
            <div className={`h-1.5 w-10 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
            <CardHeader className="p-0">
              <div className="flex mb-4 mt-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${colors.bg} ${colors.text}`}>
                  {IconComponent && <IconComponent className="h-5 w-5" />}
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500 mb-1">
                {feature.label}
              </p>
              <CardTitle className="text-lg font-semibold text-slate-900">{feature.title}</CardTitle>
              <CardDescription className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
