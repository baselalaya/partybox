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
          <Card key={feature.title} className="text-center bg-card/50 border-border/50">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                </div>
              </div>
              <CardTitle className="font-headline">{feature.title}</CardTitle>
              <CardDescription className="mt-2">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
