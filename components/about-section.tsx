"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Coffee, 
  Trophy, 
  Calendar, 
  ArrowRight,
  Award,
  Users
} from "lucide-react";

export default function AboutSection() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="relative py-16 sm:py-24 bg-white text-[#042047] overflow-hidden">
      
      {/* Decorative Brand Accent Backgrounds */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ffe80a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Featured Image Card with Arch Curve & Floating Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[480px] aspect-[4/3] rounded-3xl xs:rounded-[36px] sm:rounded-[44px] rounded-tl-[70px] xs:rounded-tl-[90px] sm:rounded-tl-[110px] overflow-hidden shadow-2xl border-4 border-[#00aeef]/20 bg-slate-50 group">
              
              <Image 
                src="/1.png" 
                alt="AIM Chess Academy Training Session"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />

              {/* Gradient Bottom Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/60 via-transparent to-transparent pointer-events-none" />

              {/* Top Right Pill Badge on Image */}
              <div className="absolute top-3 xs:top-4 right-3 xs:right-4 z-20 inline-flex items-center gap-1.5 px-3 xs:px-3.5 py-1 xs:py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#042047] text-[11px] xs:text-xs font-black shadow-lg border border-[#00aeef]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#ffe80a] fill-[#ffe80a]" />
                <span>300+ Students Coached</span>
              </div>

              {/* Bottom Left Star Medal Badge */}
              <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 z-20 pointer-events-none">
                <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center filter drop-shadow-xl animate-bounce-slow">
                  {/* Cyan / Navy Badge Background */}
                  <svg className="w-full h-full text-[#00aeef]" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round" />
                  </svg>
                  {/* Center Star Icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#ffe80a]">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content, Pill Badges Headline, 2x2 Grid & Action Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow Label with Square Bullet */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#00aeef]">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#00aeef] inline-block"></span>
              <span>About AIM Chess Academy · Shaping Future Champions</span>
            </div>

            {/* Main Headline with Pill Highlights */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#042047] tracking-tight leading-[1.2]">
              Master The Game{" "}
              <span className="bg-[#ffe80a] text-[#042047] font-black px-3 sm:px-4 py-0.5 sm:py-1 rounded-2xl inline-block shadow-xs">
                Step By Step
              </span>
              <br className="hidden sm:inline" />
              Build Your{" "}
              <span className="bg-[#00aeef] text-white font-black px-3 sm:px-4 py-0.5 sm:py-1 rounded-2xl inline-block shadow-xs mt-1">
                Winning Mindset
              </span>
            </h2>

            {/* Subtitle / Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Founded with a singular vision to nurture strategic thinking, discipline, and sharp problem-solving abilities, AIM Chess Academy provides a premier training ecosystem for children and chess enthusiasts worldwide. From absolute beginners learning piece movement to ambitious players earning official FIDE ratings, our certified mentors guide every student toward excellence.
            </p>

            {/* 2x2 Features Grid with Circular Outline Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              
              {/* Feature 1: FIDE Certified Trainers */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full border-2 border-[#00aeef]/40 bg-[#00aeef]/10 flex items-center justify-center text-[#0c71c3] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-[#00aeef]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#042047]">
                    FIDE Certified Mentors
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Direct instruction by international chess federation coaches with proven tournament mastery.
                  </p>
                </div>
              </div>

              {/* Feature 2: Structured ISO Curriculum */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full border-2 border-[#00aeef]/40 bg-[#00aeef]/10 flex items-center justify-center text-[#0c71c3] shrink-0 mt-0.5">
                  <Award className="w-5 h-5 text-[#00aeef]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#042047]">
                    Structured Curriculum
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Age-appropriate syllabus covering opening preparation, tactical calculation, and endgame precision.
                  </p>
                </div>
              </div>

              {/* Feature 3: Personalized Game Review */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full border-2 border-[#00aeef]/40 bg-[#00aeef]/10 flex items-center justify-center text-[#0c71c3] shrink-0 mt-0.5">
                  <Coffee className="w-5 h-5 text-[#00aeef]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#042047]">
                    Personalized Game Review
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Individual PGN game analysis identifying blunders, tactical missed chances, and strategic strengths.
                  </p>
                </div>
              </div>

              {/* Feature 4: Monthly Practice Tournaments */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full border-2 border-[#00aeef]/40 bg-[#00aeef]/10 flex items-center justify-center text-[#0c71c3] shrink-0 mt-0.5">
                  <Trophy className="w-5 h-5 text-[#00aeef]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#042047]">
                    Monthly Tournaments
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Regular internal clock tournaments preparing students for district, state, and national championships.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-3">
              <button
                onClick={() => openBookingModal()}
                type="button"
                className="w-full py-4 px-6 rounded-2xl bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-base shadow-lg shadow-[#ffe80a]/25 transition-all duration-200 hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2 text-center border-2 border-[#042047]"
              >
                <Calendar className="w-5 h-5 text-[#042047]" />
                <span>Book 30-Min Free Demo Class</span>
              </button>

              <Link
                href="/courses"
                className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-50 text-[#042047] font-bold text-sm border-2 border-[#042047]/20 shadow-xs transition-all duration-200 flex items-center justify-center gap-2 text-center"
              >
                <span>Explore All Courses &amp; Curriculum</span>
                <ArrowRight className="w-4 h-4 text-[#00aeef]" />
              </Link>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}