import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PillProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export function Pill({ children, className, ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-[0.12em] uppercase",
        "bg-white text-slate-900 shadow-sm border border-slate-900/10",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

