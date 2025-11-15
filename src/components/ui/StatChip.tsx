import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type StatChipProps = {
  label: string;
  value: string;
  icon?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function StatChip({ label, value, icon, className, ...props }: StatChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs md:text-sm",
        "border border-slate-200/80 shadow-sm backdrop-blur",
        "transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]",
        className
      )}
      {...props}
    >
      {icon && <span className="text-slate-800">{icon}</span>}
      <span className="text-[11px] uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}

