"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";
import { 
  Calendar, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Trophy, 
  Star,
  Award,
  Zap,
  ArrowRight
} from "lucide-react";

export default function CtaSection() {
  const { openBookingModal } = useBookingModal();
  const { phone, getPhoneUrl, getWhatsAppUrl } = useSiteSettings();

  return (
    <section className="relative py-12 sm:py-16 bg-[#f8fafc] text-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Unique Floating CTA Card */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#042047] via-[#082956] to-[#041a38] border-3 border-[#00aeef] shadow-[0_6px_0_0_#042047] sm:shadow-[0_10px_0_0_#042047] p-5 xs:p-7 sm:p-10 lg:p-12 overflow-hidden">
          
          {/* Ambient Glows Inside Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00aeef]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading, Badges & Quick Trust Points */}
            <div className="lg:col-span-7 space-y-4 text-left">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00aeef]/20 border border-[#00aeef]/40 text-[#ffe80a] text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 fill-[#ffe80a]" />
                <span>ADMISSIONS OPEN · ALL AGE GROUPS (5+)</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Unleash Your Inner{" "}
                <span className="bg-[#ffe80a] text-[#042047] font-black px-3 py-0.5 rounded-xl inline-block shadow-xs">
                  Grandmaster
                </span>
                <br className="hidden sm:inline" />
                With A 30-Min Free Demo
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-xl">
                Experience engaging chess training under FIDE-Certified Trainers. We evaluate your child&apos;s level and provide a custom learning roadmap.
              </p>

              {/* Quick Trust Chips */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] sm:text-xs font-bold text-slate-200">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00aeef]" />
                  <span>FIDE Trainers</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <Award className="w-3.5 h-3.5 text-[#ffe80a]" />
                  <span>ISO Certified</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <Star className="w-3.5 h-3.5 text-[#ffe80a] fill-[#ffe80a]" />
                  <span>5.0★ Google Rated</span>
                </span>
              </div>

            </div>

            {/* Right Column: Compact Action Buttons & Direct Support */}
            <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
              
              {/* Primary Demo Button */}
              <button
                onClick={() => openBookingModal()}
                type="button"
                className="w-full py-4 px-6 rounded-2xl bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-sm sm:text-base border-2 border-[#042047] shadow-lg shadow-[#ffe80a]/20 transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                <Calendar className="w-5 h-5 text-[#042047]" />
                <span>Book 30-Min Free Demo</span>
              </button>

              {/* WhatsApp and Call Direct Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#00aeef] hover:bg-[#009cd7] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-1.5 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={getPhoneUrl()}
                  className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/25 backdrop-blur-md transition-all hover:scale-[1.02] flex items-center justify-center gap-1.5 text-center"
                >
                  <Phone className="w-4 h-4 text-[#ffe80a]" />
                  <span>Call Coach</span>
                </a>
              </div>

              <div className="text-center text-[10px] text-slate-300 font-medium">
                🔒 100% Free · No credit card or commitment required
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
