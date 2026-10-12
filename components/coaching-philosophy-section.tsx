"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Lightbulb, 
  Brain, 
  Swords, 
  Trophy, 
  TrendingUp, 
  Target, 
  Layers, 
  Search, 
  Dumbbell, 
  Clock, 
  UserCheck, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  MessageCircle,
  Crown
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

export default function CoachingPhilosophySection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      num: "01",
      step: "Learn",
      title: "Core Foundations",
      tagline: "Build Solid Principles",
      icon: Lightbulb,
      iconBg: "bg-[#ffe80a]",
      iconColor: "text-[#042047]",
      desc: "Students learn clear, structured chess foundations—opening principles, piece coordination, and fundamental tactical themes without overwhelming jargon.",
      highlights: [
        "Fundamental piece harmony & center control",
        "Essential opening principles (King safety, development)",
        "Core mating patterns & elementary tactics"
      ]
    },
    {
      num: "02",
      step: "Understand",
      title: "Deep Positional Logic",
      tagline: "Discover the 'Why' Behind Moves",
      icon: Brain,
      iconBg: "bg-[#00aeef]",
      iconColor: "text-white",
      desc: "We teach students to think conceptually rather than relying on rote memorization. They discover why specific pawn breaks and outpost squares matter.",
      highlights: [
        "Pawn structure dynamics & open file control",
        "Prophylaxis: identifying opponent's threats early",
        "Middle-game positional planning & square dominance"
      ]
    },
    {
      num: "03",
      step: "Practice",
      title: "Hands-on Sparring",
      tagline: "Repetition Breeds Instinct",
      icon: Swords,
      iconBg: "bg-[#0c71c3]",
      iconColor: "text-white",
      desc: "Knowledge turns into muscle memory through guided tactical puzzles, targeted endgame drills, and live sparring under coach supervision.",
      highlights: [
        "Daily tactical motif calculation workouts",
        "Key theoretical endgame conversion drills",
        "Thematic position sparring against coaches & peers"
      ]
    },
    {
      num: "04",
      step: "Compete",
      title: "Tournament Readiness",
      tagline: "Master Clock & Pressure",
      icon: Trophy,
      iconBg: "bg-[#f59e0b]",
      iconColor: "text-white",
      desc: "Students test their skills in regular academy tournaments with official digital clocks, notation score sheets, and real competitive stakes.",
      highlights: [
        "Official clock time-management conditioning",
        "Psychological stamina & stress handling",
        "Fair play, touch-move discipline & score sheet notation"
      ]
    },
    {
      num: "05",
      step: "Improve",
      title: "In-Depth PGN Analysis",
      tagline: "Continuous Growth Cycle",
      icon: TrendingUp,
      iconBg: "bg-[#10b981]",
      iconColor: "text-white",
      desc: "Every tournament game is recorded, reviewed, and dissected by FIDE trainers to eliminate recurring blunders and customize future training plans.",
      highlights: [
        "Personalized blunder heatmaps & diagnostic reviews",
        "Individual feedback sessions with coaches & parents",
        "Milestone tracking towards official FIDE ratings"
      ]
    }
  ];

  const pillars = [
    {
      icon: Layers,
      iconBg: "bg-[#ffe80a]",
      iconColor: "text-[#042047]",
      title: "Concept-Based Learning",
      subtitle: "Beyond Rote Memorization",
      desc: "Instead of memorizing long opening lines that fail when opponents deviate, we teach timeless strategic ideas, pawn structure logic, and piece activity principles.",
      points: [
        "Principles-first approach applicable to any opening",
        "Pattern recognition across diverse game scenarios",
        "Long-term memory retention over mechanical drills"
      ]
    },
    {
      icon: Swords,
      iconBg: "bg-[#00aeef]",
      iconColor: "text-white",
      title: "Tactical & Strategic Training",
      subtitle: "Calculation & Master Intuition",
      desc: "Balancing explosive combinations with quiet positional maneuvering. Students build calculation depth, visualization skills, and positional sensitivity.",
      points: [
        "Candidate move discipline & blunder check routine",
        "Forks, pins, skewers, deflections & discovered attacks",
        "Strategic outposts, weak color complexes & pawn levers"
      ]
    },
    {
      icon: Search,
      iconBg: "bg-[#0c71c3]",
      iconColor: "text-white",
      title: "Game Analysis",
      subtitle: "Learning from Masters & Own Games",
      desc: "We study classical masterpieces by World Champions (Kasparov, Fischer, Carlsen) and meticulously dissect students' own tournament PGN files.",
      points: [
        "Move-by-move explanation of critical turning points",
        "Identifying psychological tipping points and time scrambles",
        "Actionable takeaways for the student's next tournament"
      ]
    },
    {
      icon: Dumbbell,
      iconBg: "bg-[#a855f7]",
      iconColor: "text-white",
      title: "Practical Exercises",
      subtitle: "Active Learning in Every Class",
      desc: "Active participation replaces passive listening. 60% of class time is dedicated to solving board puzzles, defending difficult endgames, and sparring.",
      points: [
        "Interactive digital boards with live student interaction",
        "Endgame tablebase conversions under strict time pressure",
        "Curated puzzle sets graded by difficulty & theme"
      ]
    },
    {
      icon: Clock,
      iconBg: "bg-[#f59e0b]",
      iconColor: "text-white",
      title: "Tournament Preparation",
      subtitle: "The Complete Athlete Mindset",
      desc: "Chess is an intellectual sport requiring physical stamina and psychological grit. We train students to handle match nerves and clock pressure.",
      points: [
        "Time management strategies for Rapid, Blitz & Classical",
        "Pre-round opponent scouting and repertoire tailoring",
        "Pre-game mental reset and emotional resilience routines"
      ]
    },
    {
      icon: UserCheck,
      iconBg: "bg-[#10b981]",
      iconColor: "text-white",
      title: "Individual Feedback",
      subtitle: "Personalized Growth Roadmaps",
      desc: "No two students are identical. Every child receives tailored evaluations, personalized homework routines, and regular progress updates for parents.",
      points: [
        "Comprehensive quarterly performance report cards",
        "1-on-1 coach consultations and parent briefing calls",
        "Tailored homework tasks targeting specific weaknesses"
      ]
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-[#042047] overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-20 -left-28 w-96 h-96 bg-[#00aeef]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-28 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#042047] text-[#ffe80a] font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#ffe80a] border-2 border-[#042047]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PEDAGOGY &amp; METHODOLOGY</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
            Our Coaching{" "}
            <span className="bg-[#ffe80a] text-[#042047] px-2.5 xs:px-4 py-0.5 xs:py-1 rounded-xl xs:rounded-2xl inline-block shadow-sm">
              Philosophy
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base font-medium leading-relaxed max-w-2xl mx-auto px-1">
            We don’t just teach moves—we build intuitive, strategic minds. Discover how our structured 5-stage learning journey transforms beginners into tournament champions.
          </p>

        </div>

        {/* ========================================================================= */}
        {/* 1. THE 5-STAGE CHAMPION JOURNEY (Interactive Step Progression)            */}
        {/* ========================================================================= */}
        <div className="rounded-2xl sm:rounded-[32px] bg-slate-50 border-[2.5px] sm:border-[3px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[6px_6px_0px_0px_#042047] p-4 xs:p-6 sm:p-10 lg:p-12 space-y-8 sm:space-y-10">
          
          {/* Journey Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#042047]/15 pb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#0c71c3]">
                THE PROVEN PROGRESSION PATH
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#042047] tracking-tight">
                The 5-Stage Student Journey
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs self-start md:self-auto">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>Learn → Understand → Practice → Compete → Improve</span>
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  type="button"
                  className={`text-left p-3.5 sm:p-4 rounded-2xl border-[2.5px] transition-all cursor-pointer flex flex-col justify-between ${
                    isActive 
                      ? "bg-[#042047] text-white border-[#042047] shadow-[4px_4px_0px_0px_#ffe80a] -translate-y-1" 
                      : "bg-white text-[#042047] border-[#042047]/20 hover:border-[#042047] hover:shadow-[2px_2px_0px_0px_#042047]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-black px-2 py-0.5 rounded-md ${
                      isActive ? "bg-[#ffe80a] text-[#042047]" : "bg-slate-100 text-slate-600"
                    }`}>
                      {step.num}
                    </span>
                    <Icon className={`w-5 h-5 ${isActive ? "text-[#ffe80a]" : "text-[#042047]"}`} />
                  </div>
                  
                  <div className="mt-3">
                    <div className="text-sm sm:text-base font-black tracking-tight leading-tight">
                      {step.step}
                    </div>
                    <div className={`text-[11px] font-bold truncate ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                      {step.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="bg-white rounded-2xl border-[2.5px] border-[#042047] p-4 xs:p-6 sm:p-8 shadow-[3px_3px_0px_0px_#042047] sm:shadow-[4px_4px_0px_0px_#042047] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#ffe80a]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
              
              {/* Left Column (Details) */}
              <div className="lg:col-span-8 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#00aeef]/10 text-[#0c71c3] font-black text-xs border border-[#00aeef]/30 uppercase">
                    STAGE {journeySteps[activeStep].num}: {journeySteps[activeStep].step.toUpperCase()}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    · {journeySteps[activeStep].tagline}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight">
                  {journeySteps[activeStep].title}
                </h4>

                <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
                  {journeySteps[activeStep].desc}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-2">
                  {journeySteps[activeStep].highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (Visual Icon & Progress CTA) */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 xs:p-6 bg-slate-50 rounded-2xl border-2 border-[#042047]/10 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#042047] text-[#ffe80a] border-2 border-[#042047] shadow-[3px_3px_0px_0px_#ffe80a] flex items-center justify-center mb-3">
                  {React.createElement(journeySteps[activeStep].icon, { className: "w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" })}
                </div>
                
                <div className="text-sm font-black text-[#042047]">
                  Mastery Level {journeySteps[activeStep].num}/05
                </div>
                
                <p className="text-[11px] text-slate-500 font-medium mt-1 mb-4">
                  Step-by-step guidance by certified FIDE trainers.
                </p>

                <button
                  onClick={() => openBookingModal()}
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#ffe80a] hover:bg-[#ffd600] text-[#042047] font-black text-xs px-4 py-2.5 rounded-xl border-2 border-[#042047] shadow-[2px_2px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer uppercase tracking-wider"
                >
                  <span>Experience This Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. THE 6 CORE TEACHING PILLARS                                            */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#00aeef]/40 text-[#0c71c3] font-black text-xs shadow-xs uppercase">
              <Brain className="w-3.5 h-3.5 text-[#00aeef]" />
              <span>COMPREHENSIVE TRAINING PILLARS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#042047] tracking-tight">
              How We Build Complete Chess Players
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Every class combines these 6 foundational pillars to ensure continuous tactical and strategic progress.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="relative rounded-2xl sm:rounded-[28px] bg-white border-[2.5px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[5px_5px_0px_0px_#042047] hover:shadow-[2px_2px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all p-5 xs:p-6 sm:p-7 flex flex-col justify-between group"
                >
                  <div className="space-y-4 text-left">
                    
                    {/* Top Header: Icon + Number */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} ${pillar.iconColor} border-2 border-[#042047] shadow-[2px_2px_0px_0px_#042047] flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <span className="text-xs font-black text-[#042047]/40">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-[#042047] tracking-tight group-hover:text-[#0c71c3] transition-colors leading-tight">
                        {pillar.title}
                      </h4>
                      <div className="text-xs font-bold text-[#0c71c3] mt-0.5">
                        {pillar.subtitle}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {pillar.desc}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {pillar.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-black text-[#042047] uppercase tracking-wider">
                    <span>AIM METHODOLOGY</span>
                    <span className="text-[#0c71c3] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM MASTER CTA BOX                                                  */}
        {/* ========================================================================= */}
        <div className="relative rounded-2xl sm:rounded-[32px] bg-gradient-to-br from-[#042047] via-[#082b59] to-[#041a38] text-white border-[2.5px] sm:border-[3px] border-[#00aeef] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[6px_6px_0px_0px_#042047] p-5 xs:p-7 sm:p-10 lg:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00aeef]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-3 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00aeef] text-white font-black text-xs uppercase tracking-wider shadow-xs">
                <Crown className="w-3.5 h-3.5 text-[#ffe80a]" />
                <span>START YOUR CHAMPION JOURNEY</span>
              </div>

              <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Ready to Experience Our Teaching in Action?
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-normal leading-relaxed">
                Book a 1-on-1 evaluation with our FIDE-certified trainers. We assess your child&apos;s current chess level and build a tailored improvement roadmap.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => openBookingModal()}
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-[#ffe80a] hover:bg-[#ffd600] text-[#042047] font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl border-2 border-[#042047] shadow-[3px_3px_0px_0px_#ffffff] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all cursor-pointer uppercase tracking-wider"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <a
                href={getWhatsAppUrl("Hi, I want to learn more about the coaching philosophy and book a demo class.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl border-2 border-white/20 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Talk to a Coach</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
