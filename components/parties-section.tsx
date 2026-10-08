"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  ShieldCheck,
  Trophy,
  GraduationCap,
  Zap,
  HelpCircle,
  Brain,
  Crown,
  BookOpen
} from "lucide-react";

export default function PartiesSection() {
  const { openBookingModal } = useBookingModal();

  const courses = [
    {
      id: "beginner",
      question: "“I don't know anything about chess yet, or I am just starting out.”",
      levelBadge: "BEGINNER LEVEL · AGES 5+",
      badgeBg: "bg-[#00aeef] text-white",
      cardBorder: "border-[#00aeef]/40",
      image: "/images/arch_top.jpg",
      title: "Beginner Chess Fundamentals",
      summary: "Designed for young minds with zero prior experience. We build confidence and a deep love for chess from the ground up.",
      curriculum: [
        "Piece movements, point values & board geometry",
        "Special rules: Castling, En Passant & Pawn Promotion",
        "Fundamental tactical motifs: Forks, Pins & Hanging Pieces",
        "Basic checkmating patterns (Queen & Rook ladders)",
        "Opening rules: Controlling the center & early King safety",
        "Introduction to chess clocks and sportsman etiquette"
      ],
      featuresTag: "2 Live Classes / Week · Small Interactive Batches",
      popular: false,
      btnBg: "bg-[#00aeef] hover:bg-[#009cd7] text-white"
    },
    {
      id: "intermediate",
      question: "“I know the basic rules and moves, but want to win games & master tactics.”",
      levelBadge: "INTERMEDIATE LEVEL · MOST POPULAR",
      badgeBg: "bg-[#ffe80a] text-[#042047]",
      cardBorder: "border-[#ffe80a]",
      image: "/images/arch_center.jpg",
      title: "Intermediate Tactics & Strategy",
      summary: "For players who know how to play but often blunder or struggle to find a winning plan in the middle-game.",
      curriculum: [
        "Advanced tactical strikes: Skewers, Discovered Attacks & Double Checks",
        "Middle-game strategy: Piece coordination & creating pawn weaknesses",
        "Standard opening repertoires (Italian, Ruy Lopez, Sicilian principles)",
        "Essential King & Pawn endgames and theoretical Rook endgames",
        "Analyzing Grandmaster games and identifying blunder patterns",
        "Weekly clock matches with personal coach PGN review"
      ],
      featuresTag: "2 Live Classes / Week · Monthly Practice Tournaments",
      popular: true,
      btnBg: "bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] border-2 border-[#042047]"
    },
    {
      id: "advanced",
      question: "“I play competitive chess and want to earn an official FIDE rating & trophies.”",
      levelBadge: "ADVANCED LEVEL · FIDE PREPARATION",
      badgeBg: "bg-[#042047] text-white",
      cardBorder: "border-[#042047]/40",
      image: "/images/arch_bottom.jpg",
      title: "Advanced & FIDE Rating Prep",
      summary: "Intensive training for tournament competitors aiming for state, national podiums and official FIDE Elo ratings.",
      curriculum: [
        "Deep opening preparation, custom repertoire & novelty ideas",
        "Complex calculation, positional sacrifices & prophylactic thinking",
        "Mastering positional outposts, weak color complexes & pawn levers",
        "Deep theoretical endgames (Rook endgames, Bishop vs Knight)",
        "Opponent scouting, tournament psychology & time management",
        "Official FIDE rating roadmap and comprehensive game analysis"
      ],
      featuresTag: "2 Live Classes / Week · Master Level FIDE Mentorship",
      popular: false,
      btnBg: "bg-[#042047] hover:bg-[#092c5c] text-white"
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#f8fafc] text-[#042047] overflow-hidden" id="courses">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/30 text-[#0c71c3] text-xs sm:text-sm font-black mb-3 shadow-xs">
            <GraduationCap className="w-4 h-4 text-[#00aeef]" />
            <span>STRUCTURED CHESS CURRICULUM</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-4xl font-black text-[#042047] tracking-tight leading-[1.2]">
            Find Your Level &amp;{" "}
            <span className="bg-[#ffe80a] text-[#042047] font-black px-4 py-1 rounded-2xl inline-block shadow-xs">
              Start Learning
            </span>
            <br />
            From Beginner{" "}
            <span className="bg-[#00aeef] text-white font-black px-4 py-1 rounded-2xl inline-block shadow-xs mt-1">
              To Champion
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Not sure where to start? Choose the question below that best describes your child&apos;s current chess journey to see what we will teach.
          </p>
        </div>

        {/* 3 Question-Based Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`rounded-[32px] border-3 bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group ${
                course.popular
                  ? "border-[#ffe80a] shadow-[0_12px_30px_rgba(255,232,10,0.25)] ring-4 ring-[#ffe80a]/30 -translate-y-2"
                  : "border-[#042047]/20 shadow-[0_8px_20px_rgba(4,32,71,0.06)] hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {/* Popular Ribbon on Middle Card */}
              {course.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#042047] text-[#ffe80a] text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full border-2 border-[#ffe80a] shadow-md flex items-center gap-1.5 whitespace-nowrap z-20">
                  <Sparkles className="w-3.5 h-3.5 fill-[#ffe80a]" />
                  <span>Most Enrolled</span>
                </div>
              )}

              <div className="space-y-5">
                
                {/* Course Featured Image Header */}
                <div className="relative w-full h-44 sm:h-48 rounded-[24px] overflow-hidden border-2 border-slate-100 bg-slate-100">
                  <Image 
                    src={course.image} 
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge on Image */}
                  <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider shadow-md ${course.badgeBg}`}>
                    {course.levelBadge}
                  </div>
                </div>

                {/* Question Prompt Bubble */}
                <div className="p-3.5 rounded-2xl bg-sky-50/80 border border-[#00aeef]/25 text-[#042047] flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#00aeef] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-bold italic leading-snug">
                    {course.question}
                  </p>
                </div>

                {/* Course Title & Summary */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-xl font-black text-[#042047] tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {course.summary}
                  </p>
                </div>

                {/* What You Will Learn Section */}
                <div className="pt-2 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0c71c3]">
                    <BookOpen className="w-4 h-4 text-[#00aeef]" />
                    <span>What We Will Teach:</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                    {course.curriculum.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                        <span className="leading-tight">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card Footer: Batch Tag & CTA */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                <div className="text-[11px] font-bold text-center text-slate-500 bg-slate-50 py-1.5 px-3 rounded-xl border border-slate-200">
                  {course.featuresTag}
                </div>

                <button
                  onClick={() => openBookingModal()}
                  type="button"
                  className={`w-full py-3.5 px-4 rounded-2xl font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 text-center ${course.btnBg}`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Demo</span>
                </button>
              </div>

            </div>
          ))}
        </div>

       

      </div>

    </section>
  );
}
