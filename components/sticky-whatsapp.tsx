"use client";

import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useSiteSettings } from "@/context/site-settings-context";

export default function StickyWhatsApp() {
  const { whatsapp_display, getWhatsAppUrl } = useSiteSettings();

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={getWhatsAppUrl("Hello AIM Chess Academy! I would like to inquire about chess classes and book a Free Demo Session.")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackWhatsAppClick({
            location: "floating_sticky_widget",
            phone: whatsapp_display || "+91 99034 52493",
          });
        }}
        className="flex items-center gap-2.5 bg-[#00aeef] hover:bg-[#009cd7] text-white font-black px-4 py-3 rounded-full shadow-2xl hover:shadow-[#00aeef]/40 transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer border-2 border-white"
        aria-label="Chat directly on WhatsApp with AIM Chess Academy"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-white text-[#00aeef]" />
        </div>
        <span className="hidden sm:inline text-xs font-black tracking-wide">
          WhatsApp Demo
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe80a] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#ffe80a] border-2 border-[#042047]"></span>
        </span>
      </a>
    </aside>
  );
}
