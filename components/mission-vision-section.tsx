"use client";

import React from "react";
import { Target, Eye, Sparkles, CheckCircle2 } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="relative py-12 sm:py-16 bg-slate-50 text-[#042047] overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#00aeef]/40 text-[#0c71c3] font-black text-xs shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>OUR CORE PURPOSE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042047] tracking-tight">
            Guiding Mission &amp;{" "}
            <span className="bg-[#ffe80a] text-[#042047] px-3 py-0.5 rounded-xl inline-block shadow-xs">
              Future Vision
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
            Empowering every student with strategic foresight, mental resilience, and the champion mindset.
          </p>
        </div>

        {/* 2-Column Compact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
          
          {/* Card 1: Our Mission (Yellow Card - Compact) */}
          <div className="relative rounded-[28px] bg-gradient-to-br from-[#ffe80a] via-[#ffd600] to-[#f59e0b] border-2.5 border-[#042047] shadow-[0_6px_0_0_#042047] p-6 sm:p-7 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 group">
            
            <div className="space-y-4">
              {/* Header Row */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#042047] text-[#ffe80a] flex items-center justify-center shadow-md border border-white/20 group-hover:rotate-6 transition-transform">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />
                </div>
                <div className="px-3 py-1 rounded-full bg-[#042047] text-white font-black text-[10px] sm:text-xs tracking-wider uppercase shadow-xs">
                  CORE MISSION
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight">
                  Our Mission
                </h3>
                <div className="w-10 h-1 bg-[#042047] rounded-full mt-1.5" />
              </div>

              {/* Description */}
              <p className="text-[#042047] text-xs sm:text-sm leading-relaxed font-semibold">
                To provide accessible, structured, and inspiring chess training under FIDE-certified leadership. We nurture critical thinking, emotional discipline, and decisive calculation in young minds worldwide.
              </p>

              {/* Compact Key Pillars */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-[#042047]/15 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#042047] shrink-0" />
                  <span className="text-xs font-bold text-[#042047]">
                    Structured ISO-certified curriculum for all age groups (5+).
                  </span>
                </div>

                <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-[#042047]/15 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#042047] shrink-0" />
                  <span className="text-xs font-bold text-[#042047]">
                    Fostering focus and strategic endurance under tournament clocks.
                  </span>
                </div>

                <div className="flex items-center gap-2.5 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-[#042047]/15 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#042047] shrink-0" />
                  <span className="text-xs font-bold text-[#042047]">
                    Individualized PGN reviews and tournament psychological readiness.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Footer Chip */}
            <div className="mt-5 pt-3 border-t border-[#042047]/15 flex items-center justify-between text-[11px] font-black text-[#042047]">
              <span>ACHIEVE · INSPIRE · MAINTAIN</span>
              <span>EST. KOLKATA, INDIA</span>
            </div>

          </div>

          {/* Card 2: Our Vision (Blue Card - Compact) */}
          <div className="relative rounded-[28px] bg-gradient-to-br from-[#042047] via-[#092c5c] to-[#041935] text-white border-2.5 border-[#00aeef] shadow-[0_6px_0_0_#042047] p-6 sm:p-7 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 group">
            
            {/* Ambient Inner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00aeef]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              {/* Header Row */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#00aeef] text-white flex items-center justify-center shadow-md border border-white/20 group-hover:rotate-6 transition-transform">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />
                </div>
                <div className="px-3 py-1 rounded-full bg-[#00aeef] text-white font-black text-[10px] sm:text-xs tracking-wider uppercase shadow-xs">
                  FUTURE VISION
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Our Vision
                </h3>
                <div className="w-10 h-1 bg-[#ffe80a] rounded-full mt-1.5" />
              </div>

              {/* Description */}
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                To be internationally recognized as a premier chess academy that discovers, mentors, and shapes young talents into Grandmasters, International Masters, and resilient strategic leaders.
              </p>

              {/* Compact Key Pillars */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/15 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#ffe80a] shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">
                    Producing titled FIDE rating holders and podium champions.
                  </span>
                </div>

                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/15 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">
                    Expanding global online classrooms across 20+ countries.
                  </span>
                </div>

                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/15 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#ffe80a] shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">
                    Empowering students with analytical wisdom and sportsmanship.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Footer Chip */}
            <div className="mt-5 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-slate-300 relative z-10">
              <span className="text-[#ffe80a]">GLOBAL CHESS EXCELLENCE</span>
              <span>FUTURE READY</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
