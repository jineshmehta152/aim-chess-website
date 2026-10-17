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
  Quote,
  Clock,
  Calendar,
  Users,
  MapPin,
  Phone
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
      name: "IM PRANTIK ROY",
      role: "International Master & Masterclass Mentor",
      ratingBadge: "INTERNATIONAL MASTER (IM)",
      fullHeading: "IM Prantik Roy – Cross 1800+ Initiative Leader",
      image: "/images/coaches/im-prantik-roy.jpg",
      experience: "15+ YRS",
      tag: "MASTERCLASS LEADER",
      bio: "Renowned International Master heading the exclusive 'Cross 1800+ Initiative' Master Sessions at AIM Chess Academy Barasat. Mentors ambitious tournament contenders in advanced opening repertoire, middlegame strategies, calculation depth, and psychological resilience.",
      pillars: ["Cross 1800+ Initiative", "Deep Tactical Calculation", "Grandmaster Opening Prep"],
      whatsappMsg: "Hi IM Prantik Roy, I would like to inquire about the Cross 1800+ Master Session at AIM Chess Academy Barasat."
    },
    {
      name: "SOUVICK ROY CHOWDHURY",
      role: "Senior Tournament Coach & Tactical Strategist",
      ratingBadge: "FIDE RATING: 1966",
      fullHeading: "Souvick Roy Chowdhury (FIDE Rating: 1966)",
      image: "/souvick.jpeg",
      experience: "10+ YRS",
      tag: "ELITE TOURNAMENT COACH",
      bio: "Accomplished tournament player and senior trainer boasting an impressive 1966 FIDE rating. Souvick specializes in competitive match preparation, middlegame tactical sharpness, calculation trees, and tournament clock psychology.",
      pillars: ["1966 FIDE Peak Mastery", "Advanced Tactical Calculation", "Tournament Clock Psychology"],
      whatsappMsg: "Hi Coach Souvick, I would like to inquire about competitive tournament coaching batches at AIM Chess Academy."
    },
    {
      name: "SOMNATH BANERJEE",
      role: "Strategic Coach & Foundation Specialist",
      ratingBadge: "FIDE RATING: 1646",
      fullHeading: "Somnath Banerjee (FIDE Rating: 1646)",
      image: "/somnath.jpeg",
      experience: "8+ YRS",
      tag: "FOUNDATION SPECIALIST",
      bio: "An experienced chess coach with a proven track record of developing numerous FIDE-rated players. His strategic training methods help students build a strong foundation and excel in competitive chess.",
      pillars: ["Opening Repertoire", "FIDE Rating Preparation", "Interactive Analysis"],
      whatsappMsg: "Hi Coach Somnath, I would like to inquire about foundation and competitive chess coaching."
    },
    {
      name: "COACH GANESH VENNA",
      role: "Competitive Coach & Positional Specialist",
      ratingBadge: "FIDE RATING: 1601",
      fullHeading: "Coach Ganesh Venna (FIDE Rating: 1601)",
      image: "/ganesh.jpeg",
      experience: "7+ YRS",
      tag: "POSITIONAL SPECIALIST",
      bio: "A dedicated competitive trainer with a 1601 FIDE rating, Coach Ganesh focuses on helping students develop sound positional understanding, active piece coordination, and resilient endgame technique to cross key rating thresholds.",
      pillars: ["Positional Understanding", "Middlegame Strategy", "Active Piece Play & Defense"],
      whatsappMsg: "Hi Coach Ganesh, I would like to inquire about coaching batches at AIM Chess Academy."
    },
    {
      name: "SARBOJEET BHOWMICK",
      role: "Development Coach & Foundation Specialist",
      ratingBadge: "FIDE RATING: 1567",
      fullHeading: "Sarbojeet Bhowmick (FIDE Rating: 1567)",
      image: "/sabojit.jpeg",
      experience: "6+ YRS",
      tag: "FOUNDATION & TACTICS",
      bio: "Holding an active 1567 FIDE rating, Sarbojeet specializes in nurturing young minds with structured tactical foundations, error diagnostics, and patient habit-building required to graduate from beginner to rated tournament player.",
      pillars: ["Tactical Awareness & Calculation", "Junior Tournament Foundations", "Patience & Blunder Prevention"],
      whatsappMsg: "Hi Coach Sarbojeet, I would like to inquire about foundation and junior chess training at AIM Chess Academy."
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
      pillars: ["National Team Pedagogy", "Elite Masterclasses", "High Performance Guidance"],
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
        {/* 2. BARASAT OFFLINE MASTER SESSION WITH IM PRANTIK ROY (Authentic Event)  */}
        {/* ========================================================================= */}
        <div className="relative rounded-[32px] bg-[#042047] text-white border-[3.5px] border-[#ffe80a] shadow-[8px_8px_0px_0px_#ffe80a] p-6 sm:p-10 overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00aeef]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ffe80a]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-left">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#ffe80a] text-[#042047] text-xs font-black uppercase tracking-wider border border-[#042047]">
                  FOR THE FIRST TIME AT AIM CHESS ACADEMY BARASAT
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#ffe80a] text-xs font-black uppercase tracking-wider border border-white/20">
                  🎯 CROSS 1800+ INITIATIVE
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase leading-tight">
                  Master Session with <span className="text-[#ffe80a]">IM Prantik Roy</span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-medium max-w-2xl leading-relaxed">
                  Take your game to the next level with expert guidance. Learn, Improve, and Achieve through intensive 3-hour offline masterclasses designed to break through the 1800+ Elo barrier.
                </p>
              </div>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/15 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#ffe80a] uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-[#ffe80a]" />
                    <span>Per Session</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-white mt-0.5">3 Hours Long</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/15 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#ffe80a] uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-[#ffe80a]" />
                    <span>Total Format</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-white mt-0.5">2 Sessions</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/15 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#ffe80a] uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5 text-[#ffe80a]" />
                    <span>Class Size</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-white mt-0.5">Max 10 Only</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/15 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#ffe80a] uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-[#ffe80a]" />
                    <span>Format</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-white mt-0.5">Offline Barasat</div>
                </div>
              </div>

              {/* What You Will Learn Bullets */}
              <div className="p-4 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                <div className="text-xs font-black text-[#ffe80a] uppercase tracking-wider">
                  What You Will Learn Under IM Prantik Roy:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0" />
                    <span>Opening Repertoire & Preparation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0" />
                    <span>Middlegame Plans & Strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0" />
                    <span>Tactical Awareness & Calculation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0" />
                    <span>Positional Understanding & Strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0" />
                    <span>Endgame Techniques & Conversion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0" />
                    <span>Practical Rating Tips & Interactive Q&A</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Pricing & Booking Box */}
            <div className="lg:col-span-4 bg-white text-[#042047] rounded-2xl sm:rounded-[28px] border-[3px] border-[#ffe80a] p-6 text-center space-y-5 shadow-xl">
              
              <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-wider border border-red-300">
                ⚠️ LIMITED SEATS · SERIOUS PLAYERS ONLY
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-sky-50 border border-[#00aeef]/40">
                  <div className="text-[11px] font-black text-[#0c71c3] uppercase tracking-wider">
                    AIM Chess Academy Players
                  </div>
                  <div className="text-lg sm:text-xl font-black text-[#042047] mt-0.5">
                    Enrolled Academy Rate
                  </div>
                  <div className="text-xs font-bold text-slate-500">
                    Contact for seat fee &amp; schedule
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300">
                  <div className="text-[11px] font-black text-amber-800 uppercase tracking-wider">
                    Outside Players
                  </div>
                  <div className="text-lg sm:text-xl font-black text-[#042047] mt-0.5">
                    Open Guest Rate
                  </div>
                  <div className="text-xs font-bold text-slate-500">
                    Contact for seat fee &amp; schedule
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={getWhatsAppUrl("Hi AIM Chess Academy, I would like to reserve a seat for the IM Prantik Roy Master Session (Cross 1800+ Initiative) at Barasat.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#042047] hover:bg-[#0c71c3] text-[#ffe80a] font-black text-sm py-3.5 px-4 rounded-xl shadow-md transition-all uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4 text-[#ffe80a]" />
                  <span>Reserve Masterclass Seat</span>
                </a>

                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600">
                  <Phone className="w-3.5 h-3.5 text-[#00aeef]" />
                  <span>Call / WhatsApp: <a href="tel:9903452493" className="text-[#0c71c3] hover:underline font-black">9903452493</a></span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. EXPERT COACHING PANEL (FIDE-Certified & International Masters)          */}
        {/* ========================================================================= */}
        <div className="pt-4 space-y-8">
          
          {/* Section Divider & Header */}
          <div className="flex items-center gap-4">
            <div className="h-[3px] bg-[#042047] flex-1" />
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#042047] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_0px_#ffe80a]">
              <Sparkles className="w-4 h-4 text-[#ffe80a]" />
              <span>EXPERT COACHING PANEL ({coaches.length} CERTIFIED MENTORS)</span>
            </div>
            <div className="h-[3px] bg-[#042047] flex-1" />
          </div>

          {/* Coach Cards Grid */}
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
