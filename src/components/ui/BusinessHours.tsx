"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

export function BusinessHours() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkStatus = () => {
            // Create date object for current time in UAE
            const now = new Date();

            // UAE Time is UTC+4
            // We can use toLocaleString with timeZone to be precise irrespective of user location
            const uaeTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Dubai" }));

            const day = uaeTime.getDay(); // 0 is Sunday, 6 is Saturday
            const hour = uaeTime.getHours();

            // Open: Mon-Fri (1-5), 9AM - 6PM (18:00)
            // Assuming closed on weekends (Sat-Sun)? Or just closed outside 9-6?
            // "9AM - 6PM Dubai,Abu Dhabi UAE Time/zone"
            // Standard UAE work week is Mon-Fri usually now, but event businesses might be 7 days.
            // Defaulting to "Open Daily 9-6" unless specified otherwise, but strict "business hours" usually implies working days.
            // Let's assume 7 days for now or Mon-Sat?
            // Most logical for "PartyBox" (events) is likely answering calls 9-6 daily.
            // Condition: 9 <= hour < 18

            const isWorkingHours = hour >= 9 && hour < 18;
            setIsOpen(isWorkingHours);
        };

        checkStatus();
        // Update every minute
        const interval = setInterval(checkStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null; // Hydration mismatch prevention

    return (
        <div className="flex flex-col gap-2 items-center text-sm text-slate-700">
            <div className="flex items-center gap-3">
                <div className={cn(
                    "flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide border shadow-sm",
                    isOpen
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-slate-50 text-slate-500 border-slate-200"
                )}>
                    <span className={cn("relative flex h-2 w-2")}>
                        <span className={cn(
                            "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
                            isOpen ? "bg-emerald-500" : "hidden"
                        )}></span>
                        <span className={cn(
                            "relative inline-flex rounded-full h-2 w-2",
                            isOpen ? "bg-emerald-500" : "bg-slate-400"
                        )}></span>
                    </span>
                    {isOpen ? "Open Now" : "Closed Now"}
                </div>
                <span className="text-slate-500 font-medium text-xs">9AM - 6PM (UAE)</span>
            </div>

            <div className="flex flex-col items-center gap-1 mt-1">
                {isOpen ? (
                    <p className="font-medium text-slate-900">
                        Call us: <a href="tel:+971521955327" className="text-[#FF6C8B] hover:text-[#FF9F6E] transition-colors text-base font-bold ml-1">+971 52 195 5327</a>
                    </p>
                ) : (
                    <p className="font-medium text-slate-900">
                        Email us: <a href="mailto:info@partybox.ae" className="text-[#FF6C8B] hover:text-[#FF9F6E] transition-colors text-base font-bold ml-1">info@partybox.ae</a>
                    </p>
                )}
            </div>
        </div>
    );
}
