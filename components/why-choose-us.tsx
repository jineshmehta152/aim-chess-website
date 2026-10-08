"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { 
  Sparkles, 
  ShieldCheck, 
  Trophy, 
  Award, 
  Zap, 
  Brain, 
  Clock, 
  UserCheck, 
  Crown,
  Calendar,
  ArrowRight
} from "lucide-react";

export function WhyChooseUsSection() {
  const { openBookingModal } = useBookingModal();

  const leftPillars = [
    {
      icon: Crown,
      iconBg: "bg-[#ffe80a]",
      iconColor: "text-[#042047]",
      title: "FIDE CERTIFIED TRAINERS",
      desc: "Direct personalized instruction by international chess federation certified coaches with tournament mastery."
    },
    {
      icon: Zap,
      iconBg: "bg-[#00aeef]",
      iconColor: "text-white",
      title: "TACTICS & PUZZLE VAULT",
      desc: "Extensive tactical databases, opening repertoires, and strategic blunder elimination exercises."
    },
    {
      icon: Brain,
      iconBg: "bg-[#0c71c3]",
      iconColor: "text-white",
      title: "INTERACTIVE DIGITAL BOARDS",
      desc: "Live interactive analysis and demonstration on modern high-speed digital chess learning platforms."
    }
  ];

  const rightPillars = [
    {
      icon: UserCheck,
      iconBg: "bg-[#ffe80a]",
      iconColor: "text-[#042047]",
      title: "PARENT PROGRESS REPORTS",
      desc: "Periodic performance report cards, coach consultations, and rating milestone tracking for your child."
    },
    {
      icon: Clock,
      iconBg: "bg-[#a855f7]",
      iconColor: "text-white",
      title: "MONTHLY TOURNAMENTS",
      desc: "Regular internal clock practice tournaments building competitive stamina, courage, and FIDE readiness."
    },
    {
      icon: Award,
      iconBg: "bg-[#f43f5e]",
      iconColor: "text-white",
      title: "ISO CERTIFIED CURRICULUM",
      desc: "Step-by-step modular lessons with official ISO course completion certificates awarded to each student."
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#fffdf5] via-white to-[#f8fafc] text-[#042047] overflow-hidden">
      
      {/* Background Subtle Accent Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Eyebrow Label with Lightning Icon */}
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#042047] uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4 text-[#ffe80a] fill-[#ffe80a]" />
            <span>THE AIM CHESS ACADEMY EXPERIENCE</span>
          </div>

          {/* Main Headline with Highlight Pills */}
          <h2 className="text-3xl xs:text-4xl sm:text-4xl font-black text-[#042047] tracking-tight leading-[1.2]">
            6 Core Pillars of{" "}
            <span className="bg-[#ffe80a] text-[#042047] font-black px-4 py-1 rounded-2xl inline-block shadow-xs">
              Excellence
            </span>
            <br />
            At{" "}
            <span className="bg-[#00aeef] text-white font-black px-4 py-1 rounded-2xl inline-block shadow-xs mt-1">
              Aim Chess Academy
            </span>
          </h2>

          {/* Subtitle in quotes */}
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium italic">
            &ldquo;Structured pedagogy, international master mentorship, and personal attention for every student.&rdquo;
          </p>

        </div>

        {/* 6 Pillars Interactive Layout: 3 Left + Center Ring + 3 Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center max-w-[1320px] mx-auto">
          
          {/* Left 3 Cards */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            {leftPillars.map((item, index) => (
              <div 
                key={index}
                className="rounded-[24px] sm:rounded-[28px] border-2 border-[#042047] p-4 sm:p-5 bg-white shadow-[0_5px_0_0_#042047] hover:shadow-[0_8px_0_0_#042047] hover:-translate-y-1 transition-all duration-200 flex items-center gap-4 relative overflow-hidden group cursor-pointer"
                onClick={() => openBookingModal()}
              >
                {/* Tiny Star at top right */}
                <div className="absolute top-2.5 right-3 text-[#ffe80a] pointer-events-none group-hover:scale-125 transition-transform">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                </div>

                {/* Left Icon Square */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-[#042047] ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 shadow-xs group-hover:rotate-6 transition-transform`}>
                  <item.icon className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Text Content */}
                <div className="space-y-1 pr-2">
                  <h4 className="text-xs sm:text-sm font-black italic tracking-wide text-[#042047] uppercase">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Circular Logo Emblem */}
          <div className="lg:col-span-4 flex items-center justify-center relative py-6 lg:py-0">
            
            {/* Outer Dotted Orbit Circle */}
            <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border-2 border-dashed border-[#00aeef]/40 absolute inset-0 m-auto flex items-center justify-center pointer-events-none animate-spin-slow duration-[30000ms]" />

            {/* Main Central Yellow Circle */}
            <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-[#ffe80a] border-4 border-[#042047] shadow-2xl flex flex-col items-center justify-center relative p-6 transition-transform duration-300 hover:scale-105 z-10">
              
              {/* White Inner Logo Card */}
              <div className="w-28 h-28 sm:w-34 sm:h-34 rounded-3xl bg-white border-3 border-[#042047] shadow-md flex items-center justify-center p-3 relative">
                <Image 
                  src="/logo.png" 
                  alt="AIM Chess Academy" 
                  width={110} 
                  height={110} 
                  className="w-auto h-20 sm:h-24 object-contain"
                  priority
                />

                {/* Sparkle Badge Top Right */}
                <div className="w-6 h-6 rounded-full bg-[#042047] text-[#ffe80a] absolute -top-2 -right-2 border-2 border-white flex items-center justify-center shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>

              {/* Bottom Pill Badge */}
              <div className="mt-3 bg-[#042047] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                AIM CHESS ACADEMY
              </div>

            </div>

          </div>

          {/* Right 3 Cards */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            {rightPillars.map((item, index) => (
              <div 
                key={index}
                className="rounded-[24px] sm:rounded-[28px] border-2 border-[#042047] p-4 sm:p-5 bg-white shadow-[0_5px_0_0_#042047] hover:shadow-[0_8px_0_0_#042047] hover:-translate-y-1 transition-all duration-200 flex items-center gap-4 relative overflow-hidden group cursor-pointer"
                onClick={() => openBookingModal()}
              >
                {/* Tiny Star at top right */}
                <div className="absolute top-2.5 right-3 text-[#ffe80a] pointer-events-none group-hover:scale-125 transition-transform">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                </div>

                {/* Left Icon Square */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-[#042047] ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 shadow-xs group-hover:rotate-6 transition-transform`}>
                  <item.icon className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Text Content */}
                <div className="space-y-1 pr-2">
                  <h4 className="text-xs sm:text-sm font-black italic tracking-wide text-[#042047] uppercase">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom CTA Row */}
        <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openBookingModal()}
            type="button"
            className="inline-flex items-center gap-2 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black px-8 py-3.5 rounded-full text-sm sm:text-base border-2 border-[#042047] shadow-[0_4px_0_0_#042047] hover:shadow-[0_6px_0_0_#042047] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#042047]" />
            <span>Book a Free Demo Class</span>
          </button>
          
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#042047] font-bold px-7 py-3.5 rounded-full text-sm sm:text-base border-2 border-[#042047]/30 shadow-xs hover:border-[#042047] transition-all"
          >
            <span>Explore All Courses &amp; Batches</span>
            <ArrowRight className="w-4 h-4 text-[#00aeef]" />
          </Link>
        </div>

      </div>

    </section>
  );
}
export default WhyChooseUsSection;
