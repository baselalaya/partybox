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
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: 'Sparkles',
    title: 'Cutting-Edge AI Effects',
    description: 'Transform your photos into masterpieces with unique AI-powered filters and styles.',
  },
  {
    icon: 'Share2',
    title: 'Instant Social Sharing',
    description: 'Share your memories instantly to social media, email, or WhatsApp right from the booth.',
  },
  {
    icon: 'Printer',
    title: 'Unlimited High-Quality Prints',
    description: 'Take home unlimited lab-quality prints as a timeless souvenir from your event.',
  },
  {
    icon: 'Smile',
    title: 'Professional On-Site Operator',
    description: 'A friendly attendant ensures everything runs smoothly, so you can focus on the fun.',
  },
];

export default function FeatureList() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => {
        const IconComponent = iconMap[feature.icon];
        return (
          <Card key={feature.title} className="text-center bg-white border-none rounded-2xl transition-all duration-300 ease-out shadow-[0_18px_45px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <CardHeader className="p-6 md:p-7">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-fuchsia-50 flex items-center justify-center text-fuchsia-600">
                  {IconComponent && <IconComponent className="h-6 w-6" />}
                </div>
              </div>
              <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              <CardDescription className="mt-2 text-sm text-slate-600 leading-relaxed">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
