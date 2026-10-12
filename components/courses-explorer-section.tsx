"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  GraduationCap, 
  Award, 
  MessageCircle, 
  ShieldCheck, 
  BarChart3, 
  Activity,
  Check
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

export default function CoursesExplorerSection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();
  
  const [activeTab, setActiveTab] = useState<number>(0);

  const programs = [
    {
      id: "beginner",
      programNumber: "PROGRAM 01",
      tabTitle: "BEGINNER COURSE",
      badgeTag: "FOUNDATIONAL RULES & PIECE ACTIVATION",
      title: "BEGINNER COURSE",
      subtitle: "Master piece movement, fundamental rules, spatial reasoning, and basic checkmate patterns under expert guidance.",
      detailsSummary: "Weekly 2 classes · Fundamentals · FIDE Certified Trainer",
      image: "/beginner.jpeg",
      cognitiveFocus: "SPATIAL REASONING",
      masteryCurve: "85%",
      outcomes: [
        "Board Vision & Piece Movement Mastery",
        "Core Opening Principles (Center Control & Castling)",
        "Essential Checkmate Patterns (Rook & Queen Mate)",
        "Basic Tactical Safety & En Passant Rules"
      ],
      highlights: [
        "Weekly 2 Live Classes",
        "FIDE Certified Trainer",
        "Max 6 Students per batch",
        "Monthly practice tournaments"
      ],
      whatsappMsg: "Hi, I would like to book a trial for the Beginner Course."
    },
    {
      id: "intermediate",
      programNumber: "PROGRAM 02",
      tabTitle: "INTERMEDIATE COURSE",
      badgeTag: "TACTICAL PRECISION & STRATEGIC PLANNING",
      title: "INTERMEDIATE COURSE",
      subtitle: "Eliminate blunder habits, calculate combinations with confidence, and execute winning positional middle-game plans.",
      detailsSummary: "Weekly 2 classes · Advanced strategies · FIDE Certified Trainer",
      image: "/inter.jpg",
      cognitiveFocus: "TACTICAL PATTERN RECOGNITION",
      masteryCurve: "90%",
      outcomes: [
        "Forks, Pins, Skewers & Discovered Attack Motifs",
        "Middle-Game Outpost Creation & Pawn Levers",
        "Standard Opening Systems (Italian, Sicilian & French)",
        "Essential Theoretical King & Pawn and Rook Endgames"
      ],
      highlights: [
        "Weekly 2 Live Classes",
        "Monthly Clock Tournaments",
        "Personalized PGN Game Reviews",
        "FIDE Certified Trainer"
      ],
      whatsappMsg: "Hi, I would like to book a trial for the Intermediate Course."
    },
    {
      id: "advanced",
      programNumber: "PROGRAM 03",
      tabTitle: "ADVANCED COURSE",
      badgeTag: "COMPETITIVE PREPARATION & CALCULATION DEPTH",
      title: "ADVANCED COURSE",
      subtitle: "Deepen calculation trees, master theoretical endgames, and prepare tournament repertoires against rated opponents.",
      detailsSummary: "In-depth tactics · Endgames · Competitive Prep",
      image: "/adv.jpg",
      cognitiveFocus: "DEEP CALCULATION & ENDGAMES",
      masteryCurve: "94%",
      outcomes: [
        "Candidate Move Discipline & Tree Calculation",
        "Positional Sacrifices & Prophylactic Defense",
        "Theoretical Endgame Mastery (Lucena & Philidor)",
        "Tournament Clock Management & Psychological Stamina"
      ],
      highlights: [
        "Weekly 2 Live Classes",
        "Master-level Tactical Vault",
        "Pre-round opponent scouting",
        "Comprehensive PGN diagnostics"
      ],
      whatsappMsg: "Hi, I would like to book a trial for the Advanced Course."
    },
    {
      id: "expert",
      programNumber: "PROGRAM 04",
      tabTitle: "EXPERT COURSE",
      badgeTag: "TITLE PLAYER ANALYSIS & NOVELTIES",
      title: "EXPERT COURSE",
      subtitle: "Dissect modern Super-GM novelties, imbalanced structures, and masterclasses designed by International Masters.",
      detailsSummary: "Title Player Analysis · Exclusive Strategies",
      image: "/images/achievement-2.jpg",
      cognitiveFocus: "DYNAMIC IMBALANCE & ENGINE PREP",
      masteryCurve: "98%",
      outcomes: [
        "Modern Super-GM Game Innovation & Novelties",
        "Imbalanced Pawn Structures & Dynamic Compensation",
        "Complex Minor Piece & Queen Endgame Conversions",
        "Opening Database Research & Engine Validation"
      ],
      highlights: [
        "Weekly 2 Live Classes + Masterclass",
        "Sessions by IM Vishal Sareen",
        "Elite opening repertoire files",
        "Priority tournament coaching"
      ],
      whatsappMsg: "Hi, I would like to book a trial for the Expert Course."
    },
    {
      id: "individual",
      programNumber: "PROGRAM 05",
      tabTitle: "INDIVIDUAL CLASSES",
      badgeTag: "100% PERSONALIZED 1-ON-1 MENTORSHIP",
      title: "INDIVIDUAL CLASSES",
      subtitle: "Completely personalized private coaching designed around your child's specific playing style, strengths, and rating goals.",
      detailsSummary: "Weekly 1 session · One-on-one training · Flexible Timing",
      image: "/images/prize-6.jpg",
      cognitiveFocus: "CUSTOM WEAKNESS ELIMINATION",
      masteryCurve: "96%",
      outcomes: [
        "Micro-Analysis of Student's Personal Tournament PGNs",
        "Custom Opening Repertoire Tailored to Playing Style",
        "Targeted Blunder Elimination & Tactical Workouts",
        "Real-Time Sparring with Live Coach Move Critique"
      ],
      highlights: [
        "Weekly 1-on-1 Dedicated Session",
        "100% Flexible Scheduling",
        "Dedicated Parent Progress Calls",
        "Direct Coach WhatsApp Support"
      ],
      whatsappMsg: "Hi, I would like to apply for Individual 1-on-1 Classes."
    },
    {
      id: "fide-group",
      programNumber: "PROGRAM 06",
      tabTitle: "FIDE RATING (GROUP)",
      badgeTag: "OFFICIAL FIDE RATING ACCELERATION",
      title: "FIDE RATING COURSE (GROUP)",
      subtitle: "Structured group training dedicated to breaking through the rating barrier and earning official international FIDE Elo.",
      detailsSummary: "Weekly 2 classes · Focused on achieving FIDE rating",
      image: "/images/prize-1.jpg",
      cognitiveFocus: "TOURNAMENT TEMPERAMENT",
      masteryCurve: "95%",
      outcomes: [
        "Structured FIDE Tournament Roadmap & Calendar Planning",
        "Anti-Club Player Opening Systems Preparation",
        "Monthly Classical Games with Clocks & Score Sheets",
        "Time Scramble Decision-Making & Emotional Endurance"
      ],
      highlights: [
        "Weekly 2 Live Classes",
        "Official FIDE Rating Roadmap",
        "Rated Practice Simulation Rounds",
        "Tournament Entry Guidance"
      ],
      whatsappMsg: "Hi, I would like to apply for the FIDE Rating Course (Group)."
    },
    {
      id: "fide-individual",
      programNumber: "PROGRAM 07",
      tabTitle: "FIDE RATING (1-ON-1)",
      badgeTag: "ELITE 1-ON-1 FIDE ELO BENCHMARKS",
      title: "FIDE RATING COURSE (INDIVIDUAL)",
      subtitle: "Private senior coach guidance tailored for targeted Elo milestones (1400, 1600, 1800+ Elo) with live tournament support.",
      detailsSummary: "Weekly 1 session · Personalized FIDE rating guidance",
      image: "/images/achievement-3.jpg",
      cognitiveFocus: "RATING BENCHMARK ACCELERATION",
      masteryCurve: "99%",
      outcomes: [
        "Custom Elo Milestone Roadmap (1400 / 1600 / 1800+)",
        "Pre-Round Opponent Scouting & Antidote Prep",
        "Comprehensive Blunder Diagnostic & Heatmap Tracking",
        "Live Consultation Support During Official Tournaments"
      ],
      highlights: [
        "Weekly 1-on-1 Senior Coach Session",
        "Pre-round Opponent Scouting",
        "Continuous Performance Analytics",
        "Live Tournament Phone Guidance"
      ],
      whatsappMsg: "Hi, I would like to apply for the FIDE Rating Course (Individual)."
    }
  ];

  const currentProgram = programs[activeTab];

  return (
    <section className="relative py-14 sm:py-20 bg-[#f8fafc] text-[#042047] overflow-hidden" id="courses">
      
      {/* Ambient background glows with brand colors */}
      <div className="absolute top-16 -left-28 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 -right-28 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/35 text-[#0c71c3] font-black text-xs uppercase tracking-wider shadow-xs">
            <GraduationCap className="w-4 h-4 text-[#00aeef]" />
            <span>ISO CERTIFIED CHESS CURRICULUM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
            Select Your{" "}
            <span className="bg-[#ffe80a] text-[#042047] px-4 py-1 rounded-2xl inline-block shadow-sm">
              Chess Program
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
            Click across our structured curriculum programs below to inspect the learning outcomes, cognitive focus, and live class schedules.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MAIN BRAND NEO-BRUTALIST COURSE SELECTOR CARD                             */}
        {/* ========================================================================= */}
        <div className="rounded-[28px] sm:rounded-[40px] bg-white border-[3.5px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[8px_8px_0px_0px_#042047] overflow-hidden">
          
          {/* TOP HORIZONTAL PROGRAM SELECTOR TABS BAR (Brand Navy & Yellow Theme) */}
          <div className="bg-[#042047] border-b-[3.5px] border-[#042047] overflow-x-auto scrollbar-none touch-pan-x">
            <div className="flex items-stretch min-w-max divide-x-2 divide-[#00aeef]/20">
              {programs.map((prog, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={prog.id}
                    onClick={() => setActiveTab(idx)}
                    type="button"
                    className={`px-4 xs:px-5 sm:px-7 py-3 xs:py-3.5 sm:py-4.5 text-left transition-all cursor-pointer flex flex-col justify-center min-w-[155px] xs:min-w-[170px] sm:min-w-[190px] relative ${
                      isActive
                        ? "bg-[#ffe80a] text-[#042047] shadow-inner"
                        : "bg-[#042047] text-slate-300 hover:bg-[#092c5c] hover:text-white"
                    }`}
                  >
                    {/* Active highlight indicator in sky cyan */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00aeef]" />
                    )}

                    <span className={`text-[9px] xs:text-[10px] font-black uppercase tracking-wider ${
                      isActive ? "text-[#042047]/75" : "text-[#00aeef]"
                    }`}>
                      {prog.programNumber}
                    </span>

                    <span className={`text-xs sm:text-sm font-black uppercase tracking-tight mt-0.5 whitespace-nowrap ${
                      isActive ? "text-[#042047]" : "text-white"
                    }`}>
                      {prog.tabTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN CARD BODY: 2-COLUMN DISPLAY */}
          <div className="p-5 xs:p-7 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: Featured Image + Floating Program Badge + Cognitive Focus Bar */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Image Frame */}
                <div className="relative w-full aspect-[4/3.5] rounded-[24px] sm:rounded-[28px] overflow-hidden border-[3px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] bg-slate-100 group">
                  <Image
                    src={currentProgram.image}
                    alt={currentProgram.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 450px"
                    priority
                  />

                  {/* Top-Left Floating Program Pill (Brand Cyan & White) */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <div className="bg-[#00aeef] text-white font-black text-xs uppercase px-3.5 py-1 rounded-full border-2 border-white shadow-md tracking-wider">
                      {currentProgram.programNumber}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Cognitive Focus & Mastery Curve Bar */}
                <div className="rounded-2xl border-[2.5px] border-[#042047] p-3.5 sm:p-4 bg-white shadow-[3px_3px_0px_0px_#042047] flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 xs:gap-4">
                  
                  {/* Cognitive Focus */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#ffe80a] text-[#042047] border border-[#042047] flex items-center justify-center shrink-0">
                      <Activity className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        COGNITIVE FOCUS
                      </div>
                      <div className="text-xs sm:text-sm font-black text-[#042047] truncate uppercase tracking-tight">
                        {currentProgram.cognitiveFocus}
                      </div>
                    </div>
                  </div>

                  {/* Mastery Curve Progress in Brand Gradient */}
                  <div className="text-right shrink-0">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1 justify-end">
                      <BarChart3 className="w-3 h-3 text-[#0c71c3]" />
                      <span>MASTERY CURVE</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 justify-end">
                      <div className="w-16 sm:w-20 h-2.5 rounded-full bg-slate-100 overflow-hidden border border-[#042047]/20">
                        <div 
                          className="h-full bg-gradient-to-r from-[#ffe80a] via-[#00aeef] to-[#0c71c3] rounded-full" 
                          style={{ width: currentProgram.masteryCurve }}
                        />
                      </div>
                      <span className="text-xs font-black text-[#042047]">
                        {currentProgram.masteryCurve}
                      </span>
                    </div>
                  </div>

                </div>

              </div>

              {/* RIGHT COLUMN: Typography, Description, Learning Outcomes Box & Big CTA Button */}
              <div className="lg:col-span-7 space-y-5 text-left">
                
                {/* Top Ribbon Eyebrow (Brand Cyan/Navy) */}
                <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#0c71c3] uppercase">
                  <Award className="w-4 h-4 stroke-[2.5] text-[#00aeef]" />
                  <span>{currentProgram.badgeTag}</span>
                </div>

                {/* Big Italic Title */}
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black italic text-[#042047] tracking-tight uppercase leading-tight">
                    {currentProgram.title}
                  </h3>
                  <div className="text-xs font-bold text-[#0c71c3]">
                    {currentProgram.detailsSummary}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {currentProgram.subtitle}
                </p>

                {/* LEARNING OUTCOMES BOX */}
                <div className="rounded-2xl bg-white border-[2.5px] border-[#042047] p-4 sm:p-5 shadow-[3px_3px_0px_0px_#042047] space-y-3">
                  
                  {/* Box Header */}
                  <div className="flex items-center gap-2 text-xs font-black text-[#042047] uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-[#042047] fill-[#ffe80a]" />
                    <span>LEARNING OUTCOMES:</span>
                  </div>

                  {/* 2-Column Grid of Outcomes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {currentProgram.outcomes.map((item, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <span className="w-2 h-2 rounded-full bg-[#00aeef] shrink-0 mt-1" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Highlights Tags in Brand Soft Cyan */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {currentProgram.highlights.map((h, hIdx) => (
                    <span 
                      key={hIdx} 
                      className="px-3 py-1 rounded-lg bg-[#e0f2fe]/80 border border-[#00aeef]/30 text-[11px] font-bold text-[#042047]"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>

                {/* BIG ACTION BUTTONS IN BRAND COLORS */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openBookingModal()}
                    type="button"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#ffe80a] hover:bg-[#ffd600] text-[#042047] font-black text-xs sm:text-sm py-4 px-6 rounded-2xl border-[2.5px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all cursor-pointer uppercase tracking-wider text-center"
                  >
                    <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                    <span>BOOK TRIAL FOR {currentProgram.title}</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>

                  <a
                    href={getWhatsAppUrl(currentProgram.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm py-4 px-5 rounded-2xl border-[2.5px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WHATSAPP</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
