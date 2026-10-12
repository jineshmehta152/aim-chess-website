"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Crown, 
  Swords, 
  Brain, 
  Target, 
  Trophy, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Lightbulb, 
  Zap, 
  BookOpen, 
  Layers, 
  Check,
  Compass,
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

export default function WhatStudentsLearnSection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();
  const [selectedSkill, setSelectedSkill] = useState<number>(0);

  const skills = [
    {
      id: "opening",
      number: "01",
      title: "Opening",
      badge: "THE FOUNDATION",
      badgeBg: "bg-[#ffe80a] text-[#042047]",
      tagline: "Build strong positions from the first move.",
      icon: BookOpen,
      iconBg: "bg-[#ffe80a]",
      iconColor: "text-[#042047]",
      accentBorder: "border-[#ffe80a]",
      desc: "We teach students how to start the game with purpose, avoiding early blunders and establishing aggressive, harmonious piece development.",
      keyTopics: [
        "Control the center with pawns & active pieces",
        "Early King safety & timely castling principles",
        "Solid opening repertoires (Italian, Sicilian, French & 1.d4 systems)",
        "Recognizing and punishing early opponent opening mistakes"
      ],
      practicalOutcome: "Students start every game with confidence and a solid spatial advantage without relying on blind memorization."
    },
    {
      id: "tactics",
      number: "02",
      title: "Tactics",
      badge: "THE WEAPON",
      badgeBg: "bg-[#00aeef] text-white",
      tagline: "Recognise combinations, threats and opportunities.",
      icon: Swords,
      iconBg: "bg-[#00aeef]",
      iconColor: "text-white",
      accentBorder: "border-[#00aeef]",
      desc: "Tactics decide over 90% of games. Students train their eyes to spot winning combinations, undefended pieces, and sudden checkmating nets.",
      keyTopics: [
        "Forks, Pins, Skewers & Discovered Attacks",
        "Decoys, Deflections, Overloading & Double Attacks",
        "Tactical motif pattern recognition across 1,000+ curated puzzles",
        "Blunder prevention check before executing any move"
      ],
      practicalOutcome: "Sharp tactical instincts that instantly capitalize on opponent mistakes and convert winning strikes."
    },
    {
      id: "strategy",
      number: "03",
      title: "Strategy",
      badge: "THE MASTERPLAN",
      badgeBg: "bg-[#0c71c3] text-white",
      tagline: "Understand plans and positional decisions.",
      icon: Brain,
      iconBg: "bg-[#0c71c3]",
      iconColor: "text-white",
      accentBorder: "border-[#0c71c3]",
      desc: "Strategy provides the long-term roadmap. Students learn how to formulate coherent middle-game plans and systematically dismantle opponent defenses.",
      keyTopics: [
        "Outpost creation & occupying open and semi-open files",
        "Exploiting weak color complexes, doubled & backward pawns",
        "Prophylaxis: anticipating and neutralizing opponent plans early",
        "Coordinating minor pieces to create dynamic winning pressure"
      ],
      practicalOutcome: "Intuitive understanding of 'what to do' in quiet, complex positions when there are no immediate tactical blows."
    },
    {
      id: "calculation",
      number: "04",
      title: "Calculation",
      badge: "THE ENGINE",
      badgeBg: "bg-[#042047] text-[#ffe80a]",
      tagline: "Think several moves ahead with accuracy.",
      icon: Target,
      iconBg: "bg-[#042047]",
      iconColor: "text-[#ffe80a]",
      accentBorder: "border-[#042047]",
      desc: "Calculation is the calculating engine of every chess master. Students learn systematic visualization techniques to calculate variations deeply and accurately.",
      keyTopics: [
        "Candidate move generation & systematic branch calculation",
        "Forcing moves priority (Checks, Captures, Threats)",
        "Visualizing future positions 3 to 7 moves ahead without moving pieces",
        "Calculating under tournament clock time scrambles without panicking"
      ],
      practicalOutcome: "Laser-sharp calculation discipline that eliminates hallucination and sudden blunder blunders."
    },
    {
      id: "endgames",
      number: "05",
      title: "Endgames",
      badge: "THE CLOSER",
      badgeBg: "bg-emerald-600 text-white",
      tagline: "Convert advantages and handle critical positions.",
      icon: Trophy,
      iconBg: "bg-emerald-500",
      iconColor: "text-white",
      accentBorder: "border-emerald-500",
      desc: "Great players are made in the endgame. Students master theoretical conversions to turn slight pawn advantages into guaranteed tournament victories.",
      keyTopics: [
        "King activity, opposition rules & key pawn breakthrough squares",
        "Fundamental theoretical Rook endgames (Lucena & Philidor positions)",
        "Minor piece endgame techniques (Good vs Bad Bishop, Knight outposts)",
        "Defensive drawing fortresses in down-material positions"
      ],
      practicalOutcome: "Flawless endgame execution that safely converts advantages into tournament podium points."
    },
    {
      id: "analysis",
      number: "06",
      title: "Game Analysis",
      badge: "THE EVOLUTION",
      badgeBg: "bg-purple-600 text-white",
      tagline: "Learn from mistakes and understand better decisions.",
      icon: Search,
      iconBg: "bg-purple-600",
      iconColor: "text-white",
      accentBorder: "border-purple-500",
      desc: "Every loss contains the blueprint for the next victory. Students analyze tournament games with FIDE coaches to uncover psychological and tactical weak points.",
      keyTopics: [
        "Move-by-move PGN diagnostics after every internal & official match",
        "Identifying psychological tipping points and time management flaws",
        "Studying classical games by World Champions (Kasparov, Fischer, Carlsen)",
        "Actionable homework routines designed around individual weakness patterns"
      ],
      practicalOutcome: "Continuous rating growth through rigorous self-reflection and personalized coach feedback."
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-[#042047] overflow-hidden" id="curriculum">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-18">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#042047] text-[#ffe80a] font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#ffe80a] border-2 border-[#042047]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STRUCTURED VISUAL CURRICULUM</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
            What Students Learn:{" "}
            <span className="bg-[#ffe80a] text-[#042047] px-2.5 xs:px-4 py-0.5 xs:py-1 rounded-xl xs:rounded-2xl inline-block shadow-sm">
              Core Chess Skills
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base font-medium leading-relaxed max-w-2xl mx-auto px-1">
            Instead of rote memorization, our visual curriculum trains the 6 indispensable pillars of chess mastery to build intuitive, complete chess players.
          </p>

        </div>

        {/* ========================================================================= */}
        {/* 6 CORE CHESS SKILLS GRID                                                  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isSelected = selectedSkill === index;
            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(index)}
                className={`relative rounded-2xl sm:rounded-[32px] bg-white border-[2.5px] sm:border-[3px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[6px_6px_0px_0px_#042047] hover:shadow-[2px_2px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all p-5 xs:p-6 sm:p-7 flex flex-col justify-between group overflow-hidden cursor-pointer ${
                  isSelected ? "ring-4 ring-[#ffe80a]/60 bg-amber-50/20" : ""
                }`}
              >
                {/* Top Header Row: Icon + Number + Badge */}
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${skill.iconBg} ${skill.iconColor} border-2 border-[#042047] shadow-[2px_2px_0px_0px_#042047] flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                      <Icon className="w-6 h-6 stroke-[2.3]" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-lg font-black text-[10px] uppercase tracking-wider border border-[#042047]/30 ${skill.badgeBg}`}>
                        {skill.badge}
                      </span>
                      <span className="text-xs font-black text-[#042047]/40">
                        #{skill.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-[#042047] tracking-tight group-hover:text-[#0c71c3] transition-colors uppercase">
                      {skill.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-bold text-[#0c71c3] leading-snug">
                      {skill.tagline}
                    </p>
                  </div>

                  {/* Description Box */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    {skill.desc}
                  </p>

                  {/* Key Topics List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#042047] flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#00aeef]" />
                      <span>Modules &amp; Training Focus:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                      {skill.keyTopics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0 mt-0.5" />
                          <span className="leading-snug">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Footer: Practical Outcome */}
                <div className="pt-4 mt-5 border-t-2 border-slate-100 space-y-2">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    PRACTICAL RESULT
                  </div>
                  <div className="text-xs font-bold text-[#042047] bg-[#e0f2fe]/60 p-2.5 rounded-xl border border-[#00aeef]/25 leading-tight">
                    💡 {skill.practicalOutcome}
                  </div>
                </div>

              </div>
            );
          })}
        </div>


      </div>

    </section>
  );
}
