import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "../layout/Container";

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
    <div className={cn("relative overflow-hidden bg-white", className)}>
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-white/40" />
        </>
      )}
      <div className="relative">
        <Container className="py-24 sm:py-32 lg:py-40 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-10 flex items-center justify-center gap-x-4">
              {children}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}
