import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function SectionShell({
  overline,
  title,
  subtitle,
  align = "left",
  children,
  className,
  ...props
}: SectionShellProps) {
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div
      className={cn(
        "flex flex-col gap-3 md:gap-4 max-w-3xl",
        alignmentClass,
        className
      )}
      {...props}
    >
      {overline && (
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{overline}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-slate-700">{subtitle}</p>
      )}
      {children}
    </div>
  );
}

