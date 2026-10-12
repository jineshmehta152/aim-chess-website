"use client";

import React from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Award, 
  Trophy, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Crown,
  Compass,
  Brain,
  Zap,
  UserCheck,
  Flame,
  Target,
  Quote
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

export default function FounderProfileSection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();

  const founderPillars = [
    {
      icon: Target,
      title: "PRACTICAL PLAY & TACTICS",
      desc: "High-level calculation & tournament clock mastery"
    },
    {
      icon: Brain,
      title: "POSITIONAL MASTERY",
      desc: "Deep opening repertoires & end-game precision"
    },
    {
      icon: Zap,
      title: "MODERN DIGITAL TOOLS",
      desc: "Live digital analysis & personalized PGN game reviews"
    },
    {
      icon: UserCheck,
      title: "CHILD-FRIENDLY MENTORSHIP",
      desc: "Encouraging communication & psychological resilience"
    }
  ];

  const coaches = [
    {
      name: "SOMNATH BANERJEE",
      role: "Strategic Coach & Foundation Specialist",
      ratingBadge: "FIDE RATING: 1646",
      fullHeading: "Somnath Banerjee (FIDE Rating: 1646)",
      image: "/somnath.jpeg",
      experience: "8+ YRS",
      tag: "FOUNDATION SPECIALIST",
      bio: "An experienced chess coach with a proven track record of developing numerous FIDE-rated players. His strategic training methods help students build a strong foundation and excel in competitive chess.",
      pillars: ["Opening Repertoire", "FIDE Rating Preparation"],
      whatsappMsg: "Hi Coach Somnath, I would like to inquire about foundation and competitive chess coaching."
    },
    {
      name: "IM VISHAL SAREEN",
      role: "Indian Women's Team Coach & International Master",
      ratingBadge: "INTERNATIONAL MASTER",
      fullHeading: "IM Vishal Sareen – Expert Coach & Curriculum Designer",
      image: "/vishal.jpeg",
      experience: "20+ YRS",
      tag: "NATIONAL TEAM COACH",
      bio: "A renowned international master, Vishal Sareen is the Indian Women's Team Coach and a leading chess curriculum designer. His expert classes provide high-level training, making him one of the best coaches in the country.",
      pillars: ["National Team Pedagogy", "Elite Masterclasses"],
      whatsappMsg: "Hi IM Vishal Sareen, I would like to know more about the advanced masterclasses."
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#f8fafc] text-[#042047] overflow-hidden">
      
      {/* Subtle geometric dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#042047_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />
      
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO FOUNDER SHOWCASE (Neo-Brutalist Bold Sporty Aesthetic)             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Framed Founder Image with floating badges & offset shadow */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[430px]">
              
              {/* Outer Shadow Offset Block */}
              <div className="absolute inset-0 bg-[#042047] rounded-[36px] translate-x-3 translate-y-3.5" />

              {/* Main Photo Container */}
              <div className="relative rounded-[34px] overflow-hidden border-[3.5px] border-[#042047] bg-white aspect-[4/4.8] z-10 shadow-lg">
                <Image
                  src="/sauman.jpeg"
                  alt="Soumen Banerjee – Senior Coach & Founder"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 90vw, 430px"
                  priority
                />

                {/* Top-Left Floating Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-[#ffe80a] text-[#042047] font-black text-xs uppercase italic px-4 py-1.5 rounded-lg border-2 border-[#042047] shadow-[3px_3px_0px_0px_#042047] tracking-wider">
                    THE FOUNDER
                  </div>
                </div>

                {/* Subtle Image bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom-Right Circular Badge */}
              <div className="absolute -bottom-4 xs:-bottom-5 -right-2 xs:-right-4 sm:-right-6 z-20 w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full bg-[#042047] text-white border-[3px] border-[#ffe80a] shadow-[3px_3px_0px_0px_#ffe80a] sm:shadow-[4px_4px_0px_0px_#ffe80a] flex flex-col items-center justify-center text-center p-2 transform hover:rotate-6 transition-transform">
                <span className="text-lg xs:text-xl sm:text-2xl font-black text-[#ffe80a] leading-none">
                  12+
                </span>
                <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-200 mt-0.5 leading-tight">
                  Years<br />Expertise
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT: Typography, Biography, 2x2 Feature Grid & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Bold Eyebrow */}
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl lg:text-3xl font-black italic tracking-wider text-[#042047] uppercase leading-none">
                MEET OUR
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tight text-[#042047] uppercase leading-none drop-shadow-[0_2px_0_#ffe80a]">
                <span className="relative inline-block text-transparent [-webkit-text-stroke:2px_#042047]">
                  FOUNDER
                </span>
              </div>
            </div>

            {/* Name Block with Yellow Offset Shadow */}
            <div className="pt-1">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-[#ffe80a] rounded-xl translate-x-1.5 xs:translate-x-2 translate-y-1.5 xs:translate-y-2" />
                <div className="relative bg-[#042047] text-white font-black text-xl xs:text-2xl sm:text-3xl lg:text-4xl px-4 xs:px-5 sm:px-7 py-2 sm:py-2.5 rounded-xl border-2 border-[#042047] uppercase tracking-wide">
                  SOUMEN BANERJEE
                </div>
              </div>
              <div className="text-xs sm:text-sm font-black text-[#0c71c3] uppercase tracking-widest mt-3 flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#ffe80a] fill-[#ffe80a]" />
                <span>Senior Coach &amp; Founder (FIDE Trainer)</span>
              </div>
            </div>

            {/* Bio Box with Left Accent Bar */}
            <div className="relative rounded-2xl bg-white border-2 border-[#042047]/10 p-5 sm:p-6 shadow-sm border-l-[6px] border-l-[#042047]">
              <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                A child-friendly mentor with an excellent communication approach, Soumen has successfully nurtured many rated players. As a FIDE Trainer, he focuses on structured training to enhance students&apos; competitive edge.
              </p>
            </div>

            {/* 2x2 Neo-Brutalist Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {founderPillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3.5 bg-white border-[2.5px] border-[#042047] rounded-2xl p-3.5 shadow-[3px_3px_0px_0px_#042047] hover:shadow-[1px_1px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#ffe80a] text-[#042047] border-2 border-[#042047] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-[13px] font-black text-[#042047] uppercase tracking-tight truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-bold truncate">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => openBookingModal()}
                type="button"
                className="inline-flex items-center gap-2 bg-[#ffe80a] hover:bg-[#ffd600] text-[#042047] font-black text-xs sm:text-sm px-7 py-3.5 rounded-xl border-[2.5px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] hover:shadow-[2px_2px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all cursor-pointer uppercase tracking-wider"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <a
                href={getWhatsAppUrl("Hi Coach Soumen, I would like to know more about chess coaching at Aim Chess Academy.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl border-[2.5px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] hover:shadow-[2px_2px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. SIDE-BY-SIDE COACH PROFILES (Matching Bold Sporty Design)              */}
        {/* ========================================================================= */}
        <div className="pt-4 space-y-8">
          
          {/* Section Divider & Header */}
          <div className="flex items-center gap-4">
            <div className="h-[3px] bg-[#042047] flex-1" />
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#042047] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_0px_#ffe80a]">
              <Sparkles className="w-4 h-4 text-[#ffe80a]" />
              <span>EXPERT COACHING PANEL</span>
            </div>
            <div className="h-[3px] bg-[#042047] flex-1" />
          </div>

          {/* 2 Side-by-Side Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coaches.map((coach, index) => (
              <div
                key={index}
                className="relative rounded-[32px] bg-white border-[3px] border-[#042047] shadow-[6px_6px_0px_0px_#042047] hover:shadow-[3px_3px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-slate-100">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#ffe80a] text-[#042047] font-black text-xs uppercase tracking-wide border-2 border-[#042047] shadow-[2px_2px_0px_0px_#042047]">
                    <Award className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>{coach.ratingBadge}</span>
                  </div>
                  <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    {coach.tag}
                  </div>
                </div>

                {/* Main Content: Split Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center py-5">
                  
                  {/* Left Text */}
                  <div className="sm:col-span-7 space-y-3 text-left order-2 sm:order-1">
                    <h4 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight leading-tight uppercase">
                      {coach.name}
                    </h4>
                    
                    <div className="text-xs font-bold text-[#0c71c3]">
                      {coach.role}
                    </div>

                    <div className="border-l-4 border-[#042047] pl-3 py-1 bg-slate-50/70 rounded-r-xl">
                      <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                        {coach.bio}
                      </p>
                    </div>

                    {/* Quick highlights */}
                    <div className="space-y-1.5 pt-1">
                      {coach.pillars.map((p, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-[#042047]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="sm:col-span-5 order-1 sm:order-2 flex justify-center">
                    <div className="relative w-full max-w-[200px] sm:max-w-none aspect-[4/4.4] rounded-2xl overflow-hidden border-[2.5px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] bg-slate-100 group">
                      <Image
                        src={coach.image}
                        alt={coach.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 200px, 220px"
                      />
                      
                      {/* Floating corner experience badge */}
                      <div className="absolute top-2 right-2 bg-[#042047] text-[#ffe80a] font-black text-[10px] px-2 py-0.5 rounded-md border border-[#ffe80a]">
                        {coach.experience}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-black text-[#042047] uppercase tracking-wider">
                    AIM CHESS ACADEMY
                  </span>
                  
                  <a
                    href={getWhatsAppUrl(coach.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#042047] hover:text-[#0c71c3] transition-colors uppercase tracking-wider group"
                  >
                    <span>Connect with Coach</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
