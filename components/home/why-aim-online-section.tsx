"use client";

import React from "react";
import { BookOpen, Users, ClipboardCheck, Trophy, Sparkles, MonitorPlay, Zap, CheckCircle2 } from "lucide-react";

export function WhyAimOnlineSection() {
  const pillars = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#00aeef]" />,
      title: "Structured Level Progression",
      subtitle: "ISO-aligned curriculum",
      desc: "Carefully calibrated stages from basic board geometry to complex candidate-move calculation and endgame technique. No aimless play.",
      points: ["Clear syllabuses per level", "Tactics, strategy, and opening books", "Milestone assessments for leveling up"],
    },
    {
      icon: <Users className="w-6 h-6 text-[#ffe80a]" />,
      title: "Small-Group (1:4) & 1-on-1",
      subtitle: "Guaranteed personal attention",
      desc: "Every student speaks, solves on the interactive board, and asks questions every single session. We never run crowded 20-student webinars.",
      points: ["1:4 maximum group size", "Individual personalized options", "Direct live coach guidance"],
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-[#00aeef]" />,
      title: "Personalized Homework & Feedback",
      subtitle: "Weekly tactical growth",
      desc: "Curated puzzle assignments targeted at each student's specific tactical blindspots, reviewed systematically with coach feedback.",
      points: ["Weekly homework puzzle sets", "Blunder review & game critique", "Parent progress check-ins"],
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#ffe80a]" />,
      title: "Weekly Practice Tournaments",
      subtitle: "Pressure-tested application",
      desc: "Live practice tournaments on our internal platform with real clock controls to build psychological composure and game stamina.",
      points: ["Weekly academy arena tournaments", "Clock pressure management", "Fair-play monitored games"],
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-[#042047] border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0c71c3] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>The Online Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042047] tracking-tight">
            Why Aspiring Players Choose AIM Online
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium">
            Online chess education done right: direct interaction, structured syllabus, active solving, and continuous competitive practice from the comfort of home.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 hover:bg-sky-50/60 rounded-3xl p-6 border-2 border-slate-200/80 hover:border-[#00aeef]/60 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#042047] flex items-center justify-center shadow-md">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#042047]">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-bold text-[#0c71c3] mt-0.5">
                    {pillar.subtitle}
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/80 space-y-2">
                {pillar.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

