"use client";

import Image from "next/image";

export function WhatsAppFloat() {
    const WHATSAPP_NUMBER = "971521955327"; // Replace with actual number

    return (
        <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:scale-110 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]"
            aria-label="Chat on WhatsApp"
        >
            <div className="relative h-8 w-8">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    fill
                    className="object-contain invert brightness-0 [filter:brightness(0)_invert(1)]"
                />
            </div>
        </a>
    );
}
