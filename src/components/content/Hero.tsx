import { cn } from "@/lib/utils";
import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundImage?: {
    src: string;
    alt: string;
  };
  className?: string;
};

export default function Hero({ title, subtitle, children, backgroundImage, className }: HeroProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-background/50" />
        </>
      )}
      <div className="relative py-24 sm:py-32 lg:py-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
