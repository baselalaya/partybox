import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  body: string;
  icon?: ReactNode;
  tone?: "blue" | "pink" | "yellow" | "teal" | "neutral";
} & HTMLAttributes<HTMLDivElement>;

export function FeatureCard({
  title,
  body,
  icon,
  tone = "neutral",
  className,
  ...props
}: FeatureCardProps) {
  const toneClass =
    tone === "blue"
      ? "bg-sky-50"
      : tone === "pink"
      ? "bg-rose-50"
      : tone === "yellow"
      ? "bg-amber-50"
      : tone === "teal"
      ? "bg-teal-50"
      : "bg-white";

  return (
    <div
      className={cn(
        "rounded-[24px] border border-slate-200/80 p-5 md:p-6",
        toneClass,
        "shadow-sm transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]",
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-2xl bg-white/70 text-slate-800 shadow-sm">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-sm md:text-base font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-xs md:text-sm text-slate-700">{body}</p>
        </div>
      </div>
    </div>
  );
}

