"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { 
  GraduationCap, 
  ArrowRight, 
  Clock, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Target,
  Trophy,
  Calendar
} from "lucide-react";

export function ExploreProgramsSection() {
  const { openBookingModal } = useBookingModal();

  const programs = [
    {
      slug: "beginner",
      level: "BG1 – BG3",
      title: "Beginner Course",
      tagline: "From First Moves to Tactical Confidence",
      age: "Ages 5+",
      duration: "3–6 Months",
      format: "Small Group (1:4) or 1-on-1",
      badge: "Foundation",
      badgeColor: "bg-emerald-100 text-emerald-800",
      description: "Piece movements, checkmating patterns, basic tactical forks & pins, board vision, and sportsmanship.",
      outcomes: ["Board geometry & piece power", "Basic mates & tactical vision", "Academy certificate & tournament debut"],
    },
    {
      slug: "intermediate",
      level: "IM1 – IM6",
      title: "Intermediate Course",
      tagline: "Tactics, Calculation & Positional Play",
      age: "Ages 7+",
      duration: "6–12 Months",
      format: "Small Group (1:4) or 1-on-1",
      badge: "Tactics",
      badgeColor: "bg-sky-100 text-[#0c71c3]",
      description: "Discovered attacks, pawn structures, essential king-and-pawn endgames, opening principles, and clock management.",
      outcomes: ["2–3 move tactical calculation", "Pawn structure fundamentals", "Active tournament competitor"],
    },
    {
      slug: "advanced",
      level: "ADV 1 – ADV 3",
      title: "Advanced Course",
      tagline: "Deep Strategy & Competitive FIDE Preparation",
      age: "Ages 8+",
      duration: "9–12 Months",
      format: "Elite Small Cohort or 1-on-1",
      badge: "FIDE Prep",
      badgeColor: "bg-amber-100 text-amber-900",
      description: "Complex candidate moves, rook endgames, opening repertoire specialization, prophylactic thinking, and psychological endurance.",
      outcomes: ["Candidate-move thinking tree", "Deep endgame mastery", "Prepared for official FIDE rated events"],
    },
    {
      slug: "expert",
      level: "EXP 1 – EXP 6",
      title: "Expert Master Course",
      tagline: "Master-Level Preparation for Serious Competitors",
      age: "Rated / Competitive",
      duration: "12+ Months Ongoing",
      format: "Intensive 1-on-1 / Master Squad",
      badge: "Masters",
      badgeColor: "bg-purple-100 text-purple-900",
      description: "Mentorship by International Masters. Grandmaster game analysis, positional sacrifices, complex pawn structures, and opening innovations.",
      outcomes: ["International tournament readiness", "IM/GM game diagnostics", "Elo acceleration above 1600+"],
    },
    {
      slug: "individual",
      level: "1-on-1 Personalized",
      title: "Individual Coaching",
      tagline: "Dedicated Mentor for Custom Student Goals",
      age: "All Ages & Levels",
      duration: "Flexible Modular Schedule",
      format: "1-on-1 Private Live Lessons",
      badge: "Custom",
      badgeColor: "bg-blue-100 text-blue-900",
      description: "100% personalized curriculum built entirely around student tournament games, specific weaknesses, and target time zones.",
      outcomes: ["Personalized syllabus & pace", "Immediate game reviews", "Custom schedule flexibility"],
    },
    {
      slug: "fide-group",
      level: "Elo Accelerator",
      title: "FIDE Rating Cohort",
      tagline: "Targeted Training to Secure Your First Official Elo",
      age: "Tournament Juniors",
      duration: "6 Months Intensive",
      format: "Curated Competitive Group",
      badge: "FIDE Official",
      badgeColor: "bg-rose-100 text-rose-900",
      description: "Intensive training regime specifically calibrated to face and defeat rated contenders in official FIDE-rated tournaments.",
      outcomes: ["FIDE tournament readiness", "Anti-blunder conditioning", "Official FIDE ID registration guidance"],
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-slate-50 text-[#042047] border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00aeef]/15 text-[#0c71c3] text-xs font-black uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-[#0c71c3]" />
              <span>Structured Learning Pathways</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042047] tracking-tight">
              Explore Our Online Programs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              From absolute beginners to active FIDE-rated competitors, discover our systematically designed curriculum stages.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#0c71c3] hover:text-[#042047] transition-colors"
          >
            <span>View All Syllabuses &amp; Fees</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border-2 border-slate-200/80 hover:border-[#00aeef] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full ${prog.badgeColor}`}>
                    {prog.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {prog.age}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-black text-[#0c71c3] uppercase tracking-wider">
                    {prog.level}
                  </div>
                  <h3 className="text-xl font-black text-[#042047] mt-0.5">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    {prog.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {prog.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {prog.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => openBookingModal(prog.title)}
                  className="px-3.5 py-2 rounded-xl bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-xs transition-colors cursor-pointer"
                >
                  Book Assessment
                </button>
                <Link
                  href={`/courses/${prog.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0c71c3] hover:text-[#042047] transition-colors"
                >
                  <span>Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

