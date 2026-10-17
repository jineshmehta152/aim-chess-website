"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
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
  Check,
  Clock,
  BookOpen,
  Globe,
  Layers,
  ChevronRight,
  TrendingUp
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
      tabTitle: "BEGINNER (BG1–BG3)",
      badgeTag: "FOUNDATIONS & RULES · LEVELS BG1, BG2 & BG3",
      title: "BEGINNER COURSE (BG1, BG2 & BG3)",
      subtitle: "Master piece movement, fundamental rules, spatial reasoning, and basic checkmate patterns under expert guidance. Designed for young minds (ages 5+) starting from zero.",
      detailsSummary: "Weekly 2 classes · 24 Weeks (48 Sessions) · ISO Certified",
      image: "/22.png",
      cognitiveFocus: "SPATIAL REASONING & BOARD VISION",
      masteryCurve: "88%",
      duration: "24 Weeks (48 Sessions)",
      frequency: "2 Live Classes / Week",
      mode: "Online (Global) & Offline (Barasat)",
      certificateBadge: "ISO 9001:2015 Cert.",
      fees: "Available on Request",
      levels: [
        {
          code: "BG1",
          title: "Introduction & Board Vision",
          desc: "Board coordinates, piece movements & values, rules of check, checkmate, stalemate, and board geometry."
        },
        {
          code: "BG2",
          title: "Opening Rules & Basic Checkmates",
          desc: "Castling, En Passant, center control principles, Scholar's Mate defense, Queen & Rook ladder checkmates."
        },
        {
          code: "BG3",
          title: "Fundamental Tactical Motifs",
          desc: "Single-move tactical motifs (Forks, Pins, Skewers, Hanging pieces), basic King & Pawn endgames, and chess clock basics."
        }
      ],
      progressionRule: "Students pass a diagnostic evaluation game with a senior coach + internal Swiss practice tournament to advance into IM1.",
      outcomes: [
        "Board Vision & Piece Movement Mastery (BG1)",
        "Core Opening Principles: Center Control & Castling (BG2)",
        "Essential Checkmate Patterns: Rook & Queen Mates (BG2)",
        "Single-Move Tactical Safety & En Passant Rules (BG3)"
      ],
      highlights: [
        "Weekly 2 Live Classes (Small batches max 4-6)",
        "Complete Progression: BG1, BG2 & BG3",
        "FIDE Certified Trainer Guidance",
        "Monthly Internal Practice Tournaments",
        "Official ISO Course Completion Certificate"
      ],
      whatsappMsg: "Hi, I would like to book a free demo for the Beginner Course (BG1-BG3)."
    },
    {
      id: "intermediate",
      programNumber: "PROGRAM 02",
      tabTitle: "INTERMEDIATE (IM1–IM6)",
      badgeTag: "TACTICAL PRECISION & STRATEGY · LEVELS IM1 TO IM6",
      title: "INTERMEDIATE COURSE (IM1 – IM6)",
      subtitle: "Eliminate blunder habits, calculate combinations with confidence, execute winning positional middle-game plans, and master theoretical endgames.",
      detailsSummary: "Weekly 2 classes · 36 Weeks (72 Sessions) · ISO Certified",
      image: "/25.png",
      cognitiveFocus: "TACTICAL PATTERN RECOGNITION",
      masteryCurve: "92%",
      duration: "36 Weeks (72 Sessions)",
      frequency: "2 Live Classes / Week",
      mode: "Online (Global) & Offline (Barasat)",
      certificateBadge: "ISO Intermediate Cert.",
      fees: "Available on Request",
      levels: [
        {
          code: "IM1–IM2",
          title: "Combinations & Core Openings",
          desc: "Multi-move tactics (Discovered attacks, double checks, decoys, deflections) and opening systems (Italian Game, Scotch, Sicilian principles)."
        },
        {
          code: "IM3–IM4",
          title: "Middlegame Strategy & Endgames",
          desc: "Outpost creation, pawn levers, open files, piece coordination, and essential King & Pawn / Rook endgames."
        },
        {
          code: "IM5–IM6",
          title: "Calculation Discipline & Tournaments",
          desc: "Candidate move discipline, blunder check rituals, clock management, and official notation score sheets."
        }
      ],
      progressionRule: "Students achieve 1100–1200+ internal academy rating and pass comprehensive tactical benchmark to enter Advanced 1.",
      outcomes: [
        "Forks, Pins, Skewers & Discovered Attack Motifs (IM1)",
        "Middle-Game Outpost Creation & Pawn Levers (IM3)",
        "Standard Opening Systems: Italian, Sicilian & French (IM2)",
        "Essential Theoretical King & Pawn and Rook Endgames (IM4)"
      ],
      highlights: [
        "Weekly 2 Live Classes (Batches max 4-6)",
        "Complete Progression: IM1 through IM6",
        "Monthly Clock Tournaments with Notation",
        "Personalized Move-by-Move PGN Game Reviews",
        "ISO Intermediate Mastery Certificate"
      ],
      whatsappMsg: "Hi, I would like to book a free demo for the Intermediate Course (IM1-IM6)."
    },
    {
      id: "advanced",
      programNumber: "PROGRAM 03",
      tabTitle: "ADVANCED (ADV 1–3)",
      badgeTag: "COMPETITIVE PREPARATION · LEVELS ADV 1 TO ADV 3",
      title: "ADVANCED COURSE (ADV 1 – ADV 3)",
      subtitle: "Deepen calculation trees, master theoretical endgames (Lucena & Philidor), and prepare customized tournament opening repertoires against rated opponents.",
      detailsSummary: "Weekly 2 classes · 24 Weeks (48 Sessions) · FIDE Prep",
      image: "/23.png",
      cognitiveFocus: "DEEP CALCULATION & ENDGAMES",
      masteryCurve: "95%",
      duration: "24 Weeks (48 Sessions)",
      frequency: "2 Live Classes / Week (90 mins)",
      mode: "Online (Global) & Offline (Barasat)",
      certificateBadge: "FIDE Prep Certificate",
      fees: "Available on Request",
      levels: [
        {
          code: "Adv 1",
          title: "Modern Repertoires & Space",
          desc: "Dynamic opening systems (Sicilian variations, 1.d4 setups), space advantage management, and prophylactic thinking."
        },
        {
          code: "Adv 2",
          title: "Positional Sacrifices & Complexes",
          desc: "Weak square color complexes, exchange sacrifices, dynamic compensation, and candidate move visualization trees."
        },
        {
          code: "Adv 3",
          title: "Theoretical Endgames & FIDE Sprint",
          desc: "Lucena & Philidor Rook endings, minor piece endings, psychological tournament stamina, and clock control."
        }
      ],
      progressionRule: "Active rated tournament participation and coach benchmark score for progression to Expert 1.",
      outcomes: [
        "Candidate Move Discipline & Tree Calculation (3–5 ply)",
        "Positional Sacrifices & Prophylactic Defense",
        "Theoretical Endgame Mastery (Lucena & Philidor)",
        "Tournament Clock Management & Psychological Stamina"
      ],
      highlights: [
        "Weekly 2 Intensive Live Classes",
        "Complete Progression: Adv 1, Adv 2 & Adv 3",
        "Master-level Tactical Problem Vault",
        "Pre-round Opponent Scouting & Diagnostics",
        "Official FIDE Rating Roadmap Entry"
      ],
      whatsappMsg: "Hi, I would like to book a trial for the Advanced Course (Adv 1-3)."
    },
    {
      id: "expert",
      programNumber: "PROGRAM 04",
      tabTitle: "EXPERT (EXP 1–6)",
      badgeTag: "TITLE PLAYER ANALYSIS & NOVELTIES · LEVELS EXP 1 TO EXP 6",
      title: "EXPERT COURSE (EXP 1 – EXP 6)",
      subtitle: "Dissect modern Super-GM novelties, dynamic imbalances, and masterclasses under the direct mentorship of senior FIDE Certified Trainers and titled players.",
      detailsSummary: "Weekly 2 classes + Masterclasses · 48 Weeks · Master Level",
      image: "/17.png",
      cognitiveFocus: "DYNAMIC IMBALANCE & ENGINE PREP",
      masteryCurve: "98%",
      duration: "48 Weeks (Mastery Cycles)",
      frequency: "2 Classes / Week + Masterclasses",
      mode: "Online (Worldwide)",
      certificateBadge: "Master Level Diploma",
      fees: "Available on Request",
      levels: [
        {
          code: "Exp 1–2",
          title: "Master Calculation & Imbalances",
          desc: "Visualization beyond 5 ply, dynamic sacrifices, material vs initiative compensation, and deep tactical workouts."
        },
        {
          code: "Exp 3–4",
          title: "Engine Lab & Super-GM Novelties",
          desc: "Modern Super-GM game innovation, opening database research, engine validation, and counter-attacking systems."
        },
        {
          code: "Exp 5–6",
          title: "Classical Conditioning & Titled Prep",
          desc: "4-hour classical tournament stamina, opponent antidote preparation, path to 1600–2000+ FIDE Elo."
        }
      ],
      progressionRule: "Achieving official international FIDE rating milestones (1400 / 1600 / 1800+ Elo).",
      outcomes: [
        "Modern Super-GM Game Innovation & Novelties",
        "Imbalanced Pawn Structures & Dynamic Compensation",
        "Complex Minor Piece & Queen Endgame Conversions",
        "Opening Database Research & Engine Validation"
      ],
      highlights: [
        "Weekly 2 Classes + Exclusive Masterclasses",
        "Complete Progression: Expert 1 through Expert 6",
        "Elite Opening Repertoire Files (.PGN)",
        "Priority Tournament Coaching & Phone Support",
        "Target: 1600–2000+ Official FIDE Elo"
      ],
      whatsappMsg: "Hi, I would like to book a trial for the Expert Course (Exp 1-6)."
    },
    {
      id: "individual",
      programNumber: "PROGRAM 05",
      tabTitle: "INDIVIDUAL (1-ON-1)",
      badgeTag: "100% PERSONALIZED 1-ON-1 MENTORSHIP · BG1 TO EXP 6",
      title: "INDIVIDUAL 1-ON-1 COACHING",
      subtitle: "Completely personalized private coaching designed around your child's specific playing style, strengths, and rating goals across any level.",
      detailsSummary: "Weekly 1 session · One-on-one training · Flexible Timing",
      image: "/18.png",
      cognitiveFocus: "CUSTOM WEAKNESS ELIMINATION",
      masteryCurve: "96%",
      duration: "Customized & Flexible",
      frequency: "1 or 2 Private Sessions / Week",
      mode: "Online (Global) & Offline (Barasat)",
      certificateBadge: "Level Certificate",
      fees: "Available on Request",
      levels: [
        {
          code: "Module A",
          title: "Personalized Skill Roadmap",
          desc: "Tailored curriculum advancing systematically through BG1 to Exp 6 at the student's personal learning pace."
        },
        {
          code: "Module B",
          title: "Tournament PGN Game Dissection",
          desc: "Every external tournament game analyzed move-by-move to eradicate individual recurring tactical mistakes."
        },
        {
          code: "Module C",
          title: "Custom Opening Repertoire",
          desc: "Bespoke opening preparation tailored to the student's natural aggressive or positional inclinations."
        }
      ],
      progressionRule: "Continuous personalized milestone assessments with immediate level promotion upon coach sign-off.",
      outcomes: [
        "Micro-Analysis of Student's Personal Tournament PGNs",
        "Custom Opening Repertoire Tailored to Playing Style",
        "Targeted Blunder Elimination & Tactical Workouts",
        "Real-Time Sparring with Live Coach Move Critique"
      ],
      highlights: [
        "Weekly 1-on-1 Dedicated Session (60 mins)",
        "100% Flexible Scheduling Across Time Zones",
        "Dedicated Monthly Parent Progress Calls",
        "Direct Senior Coach WhatsApp Support"
      ],
      whatsappMsg: "Hi, I would like to apply for Individual 1-on-1 Classes."
    },
    {
      id: "fide-group",
      programNumber: "PROGRAM 06",
      tabTitle: "FIDE RATING (GROUP)",
      badgeTag: "OFFICIAL FIDE RATING ACCELERATION · GROUP COHORT",
      title: "FIDE RATING COURSE (GROUP)",
      subtitle: "Structured group training dedicated to breaking through the rating barrier, entering rated tournaments, and securing official international FIDE Elo.",
      detailsSummary: "Weekly 2 classes · FIDE Tournament Roadmap",
      image: "/11.png",
      cognitiveFocus: "TOURNAMENT TEMPERAMENT",
      masteryCurve: "95%",
      duration: "24 Weeks (48 Sessions)",
      frequency: "2 Live Classes / Week",
      mode: "Online & Offline",
      certificateBadge: "FIDE Recognition",
      fees: "Available on Request",
      levels: [
        {
          code: "Stage 1",
          title: "Official FIDE Roadmap",
          desc: "Structured AICF & FIDE tournament entry preparation and tournament calendar selection."
        },
        {
          code: "Stage 2",
          title: "Clock & Notation Simulations",
          desc: "Classical time controls (60m+30s, 90m+30s) with official score sheet notation habits."
        },
        {
          code: "Stage 3",
          title: "Anti-Club Opening Weapons",
          desc: "Eliminating common club player tricks and establishing resilient fighting repertoires."
        }
      ],
      progressionRule: "Participating in official FIDE rated events with target initial Elo score.",
      outcomes: [
        "Structured FIDE Tournament Roadmap & Calendar Planning",
        "Anti-Club Player Opening Systems Preparation",
        "Monthly Classical Games with Clocks & Score Sheets",
        "Time Scramble Decision-Making & Emotional Endurance"
      ],
      highlights: [
        "Weekly 2 Live Classes (Cohort max 6)",
        "Official FIDE Rating Roadmap & Guidance",
        "Rated Practice Simulation Rounds with Clocks",
        "Tournament Entry & Registration Assistance"
      ],
      whatsappMsg: "Hi, I would like to apply for the FIDE Rating Course (Group)."
    },
    {
      id: "fide-individual",
      programNumber: "PROGRAM 07",
      tabTitle: "FIDE RATING (1-ON-1)",
      badgeTag: "ELITE 1-ON-1 FIDE ELO BENCHMARKS",
      title: "FIDE RATING COURSE (INDIVIDUAL)",
      subtitle: "Private senior coach guidance tailored for targeted Elo milestones (1200, 1400, 1600+ Elo) with live tournament support and opponent scouting.",
      detailsSummary: "Weekly 1 session · Senior Coach · Tournament Support",
      image: "/15.png",
      cognitiveFocus: "RATING BENCHMARK ACCELERATION",
      masteryCurve: "99%",
      duration: "Ongoing Tournament Support",
      frequency: "Weekly 1-on-1 Session + Calls",
      mode: "Online (Global)",
      certificateBadge: "Elite Elo Diploma",
      fees: "Available on Request",
      levels: [
        {
          code: "Milestone 1",
          title: "Custom Elo Milestone Roadmap",
          desc: "Targeted rating goals (1200 / 1400 / 1600+ Elo) with round-by-round point projections."
        },
        {
          code: "Milestone 2",
          title: "Pre-Round Opponent Scouting",
          desc: "Dissecting opponent tournament games in databases and preparing customized antidotes."
        },
        {
          code: "Milestone 3",
          title: "Live Tournament Phone Guidance",
          desc: "Real-time psychological and tactical debriefing between classical tournament rounds."
        }
      ],
      progressionRule: "Attaining official international FIDE Elo rating benchmarks (1400, 1600, 1800+ Elo).",
      outcomes: [
        "Custom Elo Milestone Roadmap (1200 / 1400 / 1600+)",
        "Pre-Round Opponent Scouting & Antidote Prep",
        "Comprehensive Blunder Diagnostic & Heatmap Tracking",
        "Live Consultation Support During Official Tournaments"
      ],
      highlights: [
        "Weekly 1-on-1 Senior Coach Session",
        "Pre-round Opponent Scouting from Database",
        "Continuous Performance Analytics & PGN Heatmaps",
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
            <span>STRUCTURED CURRICULUM · BG1 TO EXP 6</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
            Select Your{" "}
            <span className="bg-[#ffe80a] text-[#042047] px-4 py-1 rounded-2xl inline-block shadow-sm">
              Chess Program
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
            Explore our complete progression from <strong>BG1–BG3</strong> to <strong>IM1–IM6</strong>, <strong>Adv 1–3</strong>, and <strong>Exp 1–6</strong>. Click each tab below to view level topics, duration, weekly frequency, and curriculum details.
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
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

                  {/* Top-Left Floating Program Pill */}
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

                {/* Quick Course Key Parameters Matrix */}
                <div className="rounded-2xl border-[2.5px] border-[#042047] p-4 bg-slate-50/80 shadow-[3px_3px_0px_0px_#042047] space-y-2 text-xs">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#0c71c3] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#00aeef]" />
                    <span>COURSE PARAMETERS</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-700 font-medium">
                    <div className="p-2 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 block uppercase">Duration</span>
                      <strong className="text-xs text-[#042047]">{currentProgram.duration}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 block uppercase">Frequency</span>
                      <strong className="text-xs text-[#042047]">{currentProgram.frequency}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 block uppercase">Mode</span>
                      <strong className="text-xs text-[#042047]">{currentProgram.mode}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 block uppercase">Fee Structure</span>
                      <strong className="text-xs text-[#042047]">{currentProgram.fees}</strong>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Typography, Description, Level Breakdown, Outcomes & Big CTA */}
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

                {/* LEVEL PROGRESSION & SYLLABUS TOPICS BOX */}
                <div className="rounded-2xl bg-white border-[2.5px] border-[#042047] p-4 sm:p-5 shadow-[3px_3px_0px_0px_#042047] space-y-3">
                  
                  {/* Box Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2 text-xs font-black text-[#042047] uppercase tracking-wide">
                      <BookOpen className="w-4 h-4 text-[#00aeef]" />
                      <span>LEVEL BREAKDOWN & SYLLABUS TOPICS:</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#0c71c3] uppercase bg-sky-50 px-2 py-0.5 rounded-md border border-[#00aeef]/30">
                      Tier Modules
                    </span>
                  </div>

                  {/* Level Progression Rows */}
                  <div className="space-y-2.5 pt-1">
                    {currentProgram.levels.map((lvl, lIdx) => (
                      <div 
                        key={lIdx} 
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00aeef]/50 transition-colors flex flex-col sm:flex-row sm:items-start gap-2.5"
                      >
                        <div className="shrink-0 flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-lg bg-[#042047] text-[#ffe80a] text-xs font-black tracking-wider uppercase border border-[#042047]">
                            {lvl.code}
                          </span>
                          <span className="sm:hidden font-black text-xs text-[#042047]">
                            {lvl.title}
                          </span>
                        </div>
                        <div className="min-w-0 space-y-0.5">
                          <div className="hidden sm:block font-black text-xs text-[#042047]">
                            {lvl.title}
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-medium">
                            {lvl.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progression Mechanics Banner */}
                  <div className="p-3 rounded-xl bg-[#e0f2fe]/60 border border-[#00aeef]/30 text-xs text-[#042047] flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-black text-[#0c71c3] uppercase text-[10px] block">
                        HOW STUDENTS PROGRESS TO NEXT LEVEL:
                      </strong>
                      <span className="text-[11px] font-medium leading-relaxed">
                        {currentProgram.progressionRule}
                      </span>
                    </div>
                  </div>

                </div>

                {/* LEARNING OUTCOMES BOX */}
                <div className="rounded-2xl bg-white border-[2.5px] border-[#042047] p-4 sm:p-5 shadow-[3px_3px_0px_0px_#042047] space-y-3">
                  
                  {/* Box Header */}
                  <div className="flex items-center gap-2 text-xs font-black text-[#042047] uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-[#042047] fill-[#ffe80a]" />
                    <span>KEY LEARNING OUTCOMES:</span>
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

                {/* Dedicated Course Page Link */}
                <div className="pt-2">
                  <Link
                    href={`/courses/${currentProgram.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#042047] hover:bg-[#082b5d] text-white font-black text-xs sm:text-sm py-3.5 px-6 rounded-2xl border-[2.5px] border-[#042047] shadow-[3px_3px_0px_0px_#00aeef] hover:translate-x-0.5 hover:translate-y-0.5 transition-all uppercase tracking-wider text-center group cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-[#ffe80a]" />
                    <span>View Dedicated {currentProgram.tabTitle} Page &amp; Full Syllabus</span>
                    <ArrowRight className="w-4 h-4 text-[#ffe80a] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* BIG ACTION BUTTONS IN BRAND COLORS */}
                <div className="pt-1 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openBookingModal(currentProgram.title)}
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
