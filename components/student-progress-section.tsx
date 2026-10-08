"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Trophy, 
  BarChart3, 
  Brain, 
  Search, 
  Award, 
  MessageSquare, 
  Crown,
  Zap,
  Activity,
  Milestone,
  Check
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

export default function StudentProgressSection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();

  const progressionStages = [
    {
      stage: "01",
      title: "Starting Level",
      badge: "DIAGNOSTIC ASSESSMENT",
      badgeColor: "bg-slate-200 text-[#042047]",
      desc: "Initial evaluation of rules, board vision, piece movement speed, and natural calculation instincts.",
      milestones: [
        "Diagnostic baseline assessment game with coach",
        "Identification of tactical blindspots & opening habits",
        "Placement into the ideal peer training cohort"
      ]
    },
    {
      stage: "02",
      title: "Current Level",
      badge: "ACTIVE EVOLUTION",
      badgeColor: "bg-[#00aeef] text-white",
      desc: "Structured weekly classes, tactics vault workouts, clock matches, and coach PGN reviews.",
      milestones: [
        "Continuous blunder heatmap reduction",
        "Quarterly skill report cards and parent briefings",
        "Internal academy tournament match experience"
      ]
    },
    {
      stage: "03",
      title: "Next Goal",
      badge: "PODIUMS & FIDE RATING",
      badgeColor: "bg-[#ffe80a] text-[#042047]",
      desc: "Breaking rating thresholds (1000+, 1400+, 1800+ Elo) and achieving official FIDE recognition.",
      milestones: [
        "Official FIDE rating qualification and entry",
        "State and National junior championship podiums",
        "Mastery of tournament psychological stamina"
      ]
    }
  ];

  const progressPillars = [
    {
      id: "assessments",
      title: "Skill Assessments",
      desc: "Periodic diagnostic tactical tests and calculation challenges to measure speed and accuracy.",
      icon: Target,
      tag: "DIAGNOSTICS"
    },
    {
      id: "feedback",
      title: "Coach Feedback",
      desc: "Move-by-move constructive critique after internal clock matches and tournament rounds.",
      icon: MessageSquare,
      tag: "1-ON-1 REVIEWS"
    },
    {
      id: "rating",
      title: "Rating Progress",
      desc: "Milestone-driven roadmap from novice to club rated and official international FIDE Elo.",
      icon: TrendingUp,
      tag: "ELO BENCHMARKS"
    },
    {
      id: "performance",
      title: "Tournament Performance",
      desc: "Simulated tournament rounds with official digital clocks, touch-move, and notation score sheets.",
      icon: Trophy,
      tag: "COMPETITIVE MATCHES"
    },
    {
      id: "tactical",
      title: "Tactical Improvement",
      desc: "Measurable growth in tactical pattern recognition, calculation depth, and blunder elimination.",
      icon: Zap,
      tag: "BLUNDER HEATMAPS"
    },
    {
      id: "progression",
      title: "Level Progression",
      desc: "Clear graduation criteria transitioning students systematically from Beginner to Champion.",
      icon: Crown,
      tag: "GRADUATION ROADMAP"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#f8fafc] text-[#042047] overflow-hidden" id="student-progress">
      
      {/* Ambient background glows */}
      <div className="absolute top-20 -right-28 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-28 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-18">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/35 text-[#0c71c3] font-black text-xs uppercase tracking-wider shadow-xs">
            <TrendingUp className="w-4 h-4 text-[#00aeef]" />
            <span>MEASURABLE CHESS GROWTH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
            Your Progress.{" "}
            <span className="bg-[#ffe80a] text-[#042047] px-4 py-1 rounded-2xl inline-block shadow-sm">
              Your Next Move.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            We don’t believe in guesswork. Every student’s journey is tracked with scientific milestones, PGN diagnostics, and tangible rating benchmarks.
          </p>

        </div>

        {/* ========================================================================= */}
        {/* 1. THREE-STAGE PROGRESSION ROADMAP                                        */}
        {/* ========================================================================= */}
        <div className="rounded-[32px] bg-white border-[3.5px] border-[#042047] shadow-[8px_8px_0px_0px_#042047] p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#0c71c3]">
                MILESTONE PATHWAY
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight">
                Starting Level → Current Level → Next Goal
              </h3>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black text-[#042047] bg-[#ffe80a] px-3.5 py-1.5 rounded-xl border border-[#042047] shadow-xs uppercase">
              <Milestone className="w-3.5 h-3.5" />
              <span>Continuous Elevation</span>
            </div>
          </div>

          {/* 3 Steps Connected Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {progressionStages.map((stg, sIdx) => (
              <div 
                key={sIdx}
                className="relative rounded-2xl bg-slate-50 border-[2.5px] border-[#042047] p-6 shadow-[4px_4px_0px_0px_#042047] flex flex-col justify-between space-y-4 text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#042047]/30">
                      #{stg.stage}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider border border-[#042047]/20 ${stg.badgeColor}`}>
                      {stg.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-black text-[#042047] tracking-tight">
                      {stg.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">
                      {stg.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    {stg.milestones.map((ms, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0 mt-0.5" />
                        <span className="leading-snug">{ms}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-black text-[#0c71c3] uppercase flex items-center gap-1">
                  <span>Phase {sIdx + 1} Readiness</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. THE 6 PROGRESS DIFFERENTIATORS                                         */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#00aeef]/40 text-[#0c71c3] font-black text-xs shadow-xs uppercase">
              <Brain className="w-3.5 h-3.5 text-[#00aeef]" />
              <span>THE PROGRESS ECOSYSTEM</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#042047] tracking-tight">
              6 Ways We Accelerate Your Child&apos;s Growth
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {progressPillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="rounded-[24px] bg-white border-[2.5px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] hover:shadow-[1px_1px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all p-6 text-left space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#ffe80a] text-[#042047] border-2 border-[#042047] flex items-center justify-center group-hover:rotate-6 transition-transform">
                      <Icon className="w-5 h-5 stroke-[2.3]" />
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-black text-[#042047] tracking-tight group-hover:text-[#0c71c3] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>


      </div>
    </section>
  );
}
