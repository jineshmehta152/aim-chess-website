"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";
import { 
  Sparkles, 
  Calendar, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap
} from "lucide-react";

export default function ContactCtaSection() {
  const { openBookingModal } = useBookingModal();
  const { phone, getPhoneUrl, getWhatsAppUrl } = useSiteSettings();

  return (
    <section className="relative py-8 sm:py-12 bg-[#f8fafc] text-[#042047] overflow-hidden" id="contact-cta">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Neo-Brutalist Banner */}
        <div className="rounded-2xl sm:rounded-[32px] bg-[#042047] text-white border-[2.5px] sm:border-[3px] border-[#00aeef] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[6px_6px_0px_0px_#042047] p-5 xs:p-6 sm:p-8 lg:p-9 relative overflow-hidden">
          
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#00aeef]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#ffe80a]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            
            {/* Left Side: Content & Badges */}
            <div className="space-y-3 text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00aeef]/20 border border-[#00aeef]/40 text-[#ffe80a] text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 fill-[#ffe80a]" />
                <span>FREE 30-MIN EVALUATION · AGES 5+</span>
              </div>

              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Ready To Start Your Child&apos;s{" "}
                <span className="bg-[#ffe80a] text-[#042047] px-2.5 xs:px-3 py-0.5 rounded-xl inline-block shadow-sm">
                  Chess Journey?
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Connect with our FIDE-certified trainers for a 1-on-1 level assessment, customized roadmap, and batch recommendation.
              </p>

              {/* Inline Bullet Perks */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-[11px] sm:text-xs font-bold text-slate-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef]" />
                  <span>1-on-1 Diagnostic</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef]" />
                  <span>Global Timezones</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef]" />
                  <span>100% Free · No Card Needed</span>
                </span>
              </div>
            </div>

            {/* Right Side: Compact Action Buttons */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <button
                onClick={() => openBookingModal()}
                type="button"
                className="w-full sm:w-auto lg:w-72 inline-flex items-center justify-center gap-2 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm border-2 border-[#042047] shadow-[3px_3px_0px_0px_#ffe80a] hover:shadow-[4px_4px_0px_0px_#ffe80a] transition-all cursor-pointer uppercase tracking-wider text-center"
              >
                <GraduationCap className="w-4 h-4 text-[#042047]" />
                <span>Book 30-Min Free Demo</span>
              </button>

              <div className="flex items-center gap-2 w-full lg:w-72">
                <a
                  href={getWhatsAppUrl("Hi Coach, I would like to inquire about chess classes for my child.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider transition-all text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={getPhoneUrl()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-3 rounded-xl text-xs border border-white/20 transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ffe80a]" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
