"use client";

import React from "react";
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Video, 
  BookOpen, 
  Swords, 
  Search, 
  FileText, 
  BarChart3, 
  Trophy, 
  MessageSquare, 
  Layers,
  Crown,
  MessageCircle,
  Users,
  UserCheck,
  Calendar,
  Clock,
  Compass,
  Globe2,
  Zap,
  CheckCircle2
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

export default function WhatsIncludedSection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();

  const includedItems = [
    {
      id: "live-coaching",
      title: "Live Coaching",
      desc: "Real-time interactive instruction by certified FIDE trainers and titled master coaches.",
      icon: Video
    },
    {
      id: "curriculum",
      title: "Structured Curriculum",
      desc: "ISO-certified, step-by-step curriculum graded from BG1 to Exp 6 and international FIDE rating.",
      icon: BookOpen
    },
    {
      id: "tactics",
      title: "Tactical Exercises",
      desc: "Extensive access to 1,000+ tactical puzzles, candidate move drills, and daily puzzles.",
      icon: Swords
    },
    {
      id: "analysis",
      title: "Game Analysis",
      desc: "Move-by-move diagnostic dissection of student tournament PGN games to eliminate blunders.",
      icon: Search
    },
    {
      id: "homework",
      title: "Homework & Practice Positions",
      desc: "Targeted weekly assignments and curated endgame positions to reinforce classroom learning.",
      icon: FileText
    },
    {
      id: "tracking",
      title: "Progress Tracking",
      desc: "Regular quarterly skill evaluations and Elo rating milestone progress reports for parents.",
      icon: BarChart3
    },
    {
      id: "guidance",
      title: "Tournament Guidance",
      desc: "Official tournament calendar planning, entry consultation, and round-by-round strategy.",
      icon: Trophy
    },
    {
      id: "feedback",
      title: "Coach Feedback",
      desc: "Direct, constructive one-on-one evaluations, weakness diagnostics, and coach consultations.",
      icon: MessageSquare
    },
    {
      id: "resources",
      title: "Training Resources",
      desc: "Complete digital opening repertoires, masterclass study notes, and PGN database access.",
      icon: Layers
    }
  ];

  const packageComparisons = [
    {
      id: "group",
      title: "Interactive Group Classes",
      badge: "MOST POPULAR FOR SOCIAL LEARNING",
      badgeBg: "bg-[#00aeef] text-white",
      popular: false,
      price: "Available on Request",
      period: "",
      intlPrice: "Flexible pricing for India & International students",
      summary: "Peer sparring, collaborative tactical problem solving, and healthy competitive motivation in intimate cohorts.",
      classSize: "Small Batches (4-6 Students)",
      frequency: "2 Live Classes / Week (60–75 mins)",
      duration: "24–36 Weeks per Level Tier",
      mode: "Online Worldwide & Offline (Barasat)",
      inclusions: [
        "Instruction by FIDE Certified Trainers",
        "Strictly matched peer skill levels (BG1–Exp 6)",
        "Weekly homework and tactical puzzle assignments",
        "Monthly internal clock tournaments with clocks",
        "Quarterly parent progress evaluation cards",
        "Official ISO 9001:2015 Course Completion Certificate"
      ],
      ctaText: "Book Free Group Demo",
      btnClass: "bg-[#00aeef] hover:bg-[#009cd7] text-white border-2 border-[#042047]"
    },
    {
      id: "individual",
      title: "1-on-1 Dedicated Mentorship",
      badge: "100% PERSONALIZED & FAST-TRACK",
      badgeBg: "bg-[#ffe80a] text-[#042047]",
      popular: true,
      price: "Available on Request",
      period: "",
      intlPrice: "Custom 1-on-1 scheduling & flexible plans",
      summary: "Personalized coaching tailored solely to the student's unique playing style, strengths, and specific tournament goals.",
      classSize: "1-on-1 Dedicated Private Coaching",
      frequency: "1 or 2 Private Sessions / Week (60 mins)",
      duration: "Flexible Custom Learning Pace",
      mode: "Online Worldwide & Offline (Barasat)",
      inclusions: [
        "Dedicated Senior FIDE Certified Coach",
        "Custom opening repertoire tailored to student's style",
        "Move-by-move micro-analysis of personal tournament PGNs",
        "100% flexible scheduling across international time zones",
        "Direct parent-coach WhatsApp communication channel",
        "Immediate level promotion upon benchmark mastery"
      ],
      ctaText: "Apply For 1-on-1 Mentorship",
      btnClass: "bg-[#ffe80a] hover:bg-[#ffd600] text-[#042047] border-2 border-[#042047]"
    },
    {
      id: "fide",
      title: "FIDE Rating Accelerator",
      badge: "TOURNAMENT COMPETITORS",
      badgeBg: "bg-[#042047] text-[#ffe80a]",
      popular: false,
      price: "Available on Request",
      period: "",
      intlPrice: "Tournament prep & rating milestone tracks",
      summary: "Intensive training dedicated to breaking through the rating barrier and securing official international FIDE Elo.",
      classSize: "Elite Cohort or 1-on-1 Senior Coach",
      frequency: "2 Intensive Sessions / Wk + Event Support",
      duration: "24 Weeks Intensive or Ongoing",
      mode: "Online & Offline Competition Prep",
      inclusions: [
        "Official FIDE rating milestone roadmap (1200–1800+ Elo)",
        "Classical time control simulations & score sheet drills",
        "Pre-round opponent scouting from database records",
        "Live telephone consultation between tournament rounds",
        "Post-round error diagnostic and blunder heatmaps",
        "Official FIDE tournament entry and registration assistance"
      ],
      ctaText: "Join FIDE Rating Program",
      btnClass: "bg-[#042047] hover:bg-[#092c5c] text-white border-2 border-[#042047]"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-[#042047] overflow-hidden" id="whats-included">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        
        {/* ========================================================================= */}
        {/* PART 1: INCLUDED IN EVERY PROGRAM (9-ITEM CHECKLIST)                      */}
        {/* ========================================================================= */}
        <div className="space-y-10 sm:space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#042047] text-[#ffe80a] font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#ffe80a] border-2 border-[#042047]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSPARENT VALUE · NO HIDDEN FEES</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
              What&apos;s Included in{" "}
              <span className="bg-[#ffe80a] text-[#042047] px-2.5 xs:px-4 py-0.5 xs:py-1 rounded-xl xs:rounded-2xl inline-block shadow-sm">
                Every Program
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-base font-medium leading-relaxed max-w-2xl mx-auto px-1">
              A comprehensive, all-inclusive chess training ecosystem provided with every course enrollment.
            </p>
          </div>

          {/* 9-Item Clean Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
            {includedItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative rounded-2xl sm:rounded-[24px] bg-slate-50/70 border-2 sm:border-[2.5px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] sm:shadow-[4px_4px_0px_0px_#042047] hover:shadow-[1px_1px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all p-4 xs:p-5 sm:p-6 flex items-start gap-3.5 sm:gap-4 group"
                >
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-[#042047] text-[#ffe80a] border-2 border-[#042047] flex items-center justify-center shrink-0 shadow-xs group-hover:rotate-6 transition-transform">
                    <Check className="w-5 h-5 stroke-[3] text-[#ffe80a]" />
                  </div>

                  <div className="space-y-1 min-w-0 text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-black text-[#042047] tracking-tight group-hover:text-[#0c71c3] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* PART 2: PACKAGE COMPARISON (GROUP VS 1-ON-1 VS FIDE ACCELERATOR)          */}
        {/* ========================================================================= */}
        <div className="space-y-8 sm:space-y-10 pt-4 border-t-2 border-slate-100">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/35 text-[#0c71c3] font-black text-xs uppercase tracking-wider shadow-xs">
              <Layers className="w-4 h-4 text-[#00aeef]" />
              <span>CLEAR & TRANSPARENT PACKAGES</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#042047] tracking-tight leading-tight">
              Compare Our{" "}
              <span className="bg-[#ffe80a] text-[#042047] px-3.5 py-0.5 rounded-2xl inline-block shadow-sm">
                Coaching Packages
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Select the coaching format that best matches your child&apos;s learning style, weekly schedule, and competitive chess ambitions.
            </p>
          </div>

          {/* 3 Package Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {packageComparisons.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-[28px] sm:rounded-[34px] border-[3px] bg-white p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group text-left ${
                  pkg.popular
                    ? "border-[#ffe80a] shadow-[6px_6px_0px_0px_#042047] ring-4 ring-[#ffe80a]/30 lg:-translate-y-2"
                    : "border-[#042047] shadow-[4px_4px_0px_0px_#042047] hover:shadow-[6px_6px_0px_0px_#042047] hover:-translate-y-1"
                }`}
              >
                {/* Popular Pill */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#042047] text-[#ffe80a] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full border-2 border-[#ffe80a] shadow-md flex items-center gap-1.5 whitespace-nowrap z-20">
                    <Sparkles className="w-3.5 h-3.5 fill-[#ffe80a]" />
                    <span>Most Enrolled</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Badge */}
                  <div className={`inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${pkg.badgeBg}`}>
                    {pkg.badge}
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mt-1">
                      {pkg.summary}
                    </p>
                  </div>

                  {/* Fee Display */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-black text-[#042047]">
                        {pkg.price}
                      </span>
                      {pkg.period ? (
                        <span className="text-xs font-bold text-slate-500">
                          {pkg.period}
                        </span>
                      ) : null}
                    </div>
                    <div className="text-[11px] font-bold text-[#0c71c3] mt-0.5">
                      {pkg.intlPrice}
                    </div>
                  </div>

                  {/* Quick Specs - Redesigned Eye-Catching Feature Grid */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 pt-2">
                    {/* Batch Size */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00aeef]/40 transition-colors flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-100 text-[#0c71c3] flex items-center justify-center shrink-0 mt-0.5">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                          Batch Size
                        </span>
                        <span className="text-xs font-black text-[#042047] leading-tight line-clamp-2 block mt-0.5">
                          {pkg.classSize}
                        </span>
                      </div>
                    </div>

                    {/* Frequency */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00aeef]/40 transition-colors flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                          Frequency
                        </span>
                        <span className="text-xs font-black text-[#042047] leading-tight line-clamp-2 block mt-0.5">
                          {pkg.frequency}
                        </span>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00aeef]/40 transition-colors flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                          Duration
                        </span>
                        <span className="text-xs font-black text-[#042047] leading-tight line-clamp-2 block mt-0.5">
                          {pkg.duration}
                        </span>
                      </div>
                    </div>

                    {/* Training Mode */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00aeef]/40 transition-colors flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Globe2 className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                          Training Mode
                        </span>
                        <span className="text-xs font-black text-[#042047] leading-tight line-clamp-2 block mt-0.5">
                          {pkg.mode}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Inclusions List - Redesigned with Polished Feature Badges */}
                  <div className="space-y-2.5 pt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/60 inline-flex items-center gap-1.5">
                        <ShieldCheck className="w-3 h-3 text-[#00aeef]" />
                        <span>PACKAGE INCLUSIONS:</span>
                      </span>
                      <div className="h-px bg-slate-200/80 flex-1" />
                    </div>

                    <ul className="space-y-2 text-xs text-slate-800">
                      {pkg.inclusions.map((inc, iIdx) => (
                        <li 
                          key={iIdx} 
                          className="flex items-start gap-2.5 p-2 rounded-xl bg-gradient-to-r from-slate-50/90 to-transparent border border-slate-200/60 hover:border-[#00aeef]/30 hover:bg-sky-50/30 transition-all duration-150"
                        >
                          <div className="w-4 h-4 rounded-full bg-[#00aeef]/15 text-[#00aeef] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3.5] text-[#0c71c3]" />
                          </div>
                          <span className="leading-snug font-semibold text-slate-700">
                            {inc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => openBookingModal(pkg.title)}
                    type="button"
                    className={`w-full py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 ${pkg.btnClass}`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
