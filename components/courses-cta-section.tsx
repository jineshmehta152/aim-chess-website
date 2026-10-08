"use client";

import React from "react";
import Image from "next/image";
import { 
  Calendar, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Crown,
  CheckCircle2,
  Award,
  Zap
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

export default function CoursesCtaSection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();

  return (
    <section className="relative py-10 sm:py-14 bg-[#f8fafc] text-[#042047] overflow-hidden" id="final-cta">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-80 h-80 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-80 h-80 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact & Unique Neo-Brutalist Card */}
        <div className="relative rounded-[32px] bg-[#042047] text-white border-[3px] border-[#00aeef] shadow-[6px_6px_0px_0px_#042047] p-6 sm:p-8 lg:p-10 overflow-hidden">
          
          {/* Ambient Glows Inside */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#00aeef]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#ffe80a]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left/Middle Column (Content & CTAs) */}
            <div className="lg:col-span-8 space-y-4 text-left">
              
              {/* Compact Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00aeef]/20 border border-[#00aeef]/40 text-[#ffe80a] text-[11px] font-black uppercase tracking-wider shadow-xs">
                <Crown className="w-3.5 h-3.5 fill-[#ffe80a]" />
                <span>EVALUATION &amp; ADMISSIONS</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Ready to Find Your Child&apos;s{" "}
                <span className="bg-[#ffe80a] text-[#042047] px-3 py-0.5 rounded-xl inline-block shadow-sm">
                  Chess Level?
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-xl">
                Whether your child is making their first move or preparing for their next tournament, we have a program designed for their next stage of development.
              </p>

              {/* Compact Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openBookingModal()}
                  type="button"
                  className="inline-flex items-center gap-2 bg-[#ffe80a] hover:bg-[#ffd600] text-[#042047] font-black text-xs sm:text-sm px-6 py-3 rounded-xl border-2 border-[#042047] shadow-[3px_3px_0px_0px_#ffffff] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all cursor-pointer uppercase tracking-wider"
                >
                  <Calendar className="w-4 h-4 stroke-[2.5]" />
                  <span>Book a Trial Class</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>

                <a
                  href={getWhatsAppUrl("Hi Coach, I would like to find my child's chess level and discuss the best course.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm px-5 py-3 rounded-xl border-2 border-white/20 shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Talk to a Coach</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffe80a]" />
                  30-Min Free Evaluation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef]" />
                  FIDE Certified Trainers
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffe80a]" />
                  Custom Roadmap
                </span>
              </div>

            </div>

            {/* Right Column (Compact Framed Image with Floating Badge) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3.4] rounded-2xl overflow-hidden border-[3px] border-[#00aeef] shadow-[4px_4px_0px_0px_#ffe80a] bg-slate-900 group">
                <Image
                  src="/aim1.jpg"
                  alt="Aim Chess Academy Live Coaching"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 300px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Bottom Badge */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md rounded-xl py-1.5 px-3 border border-white/60 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0c71c3] fill-[#ffe80a]" />
                    <span className="text-[11px] font-black text-[#042047] uppercase tracking-tight">
                      Free Trial Class
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-[#0c71c3] bg-[#e0f2fe] px-2 py-0.5 rounded-md border border-[#00aeef]/30 uppercase">
                    100% Free
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
