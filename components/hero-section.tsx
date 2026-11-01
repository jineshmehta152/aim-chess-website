"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { GlobalFlagsTicker } from "@/components/global-flags-ticker";
import { Calendar, ArrowRight, Sparkles, CheckCircle2, Trophy, Star, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("hero");
  const { openBookingModal } = useBookingModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#042047] via-[#092c5c] to-[#041935] text-white pt-14 pb-24 lg:pt-18 lg:pb-32">
      
      {/* Background Hero Texture / Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Top Scalloped Repeating Wave Border */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-6 sm:h-9 lg:h-11 text-white fill-current"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
        >
          <path d="M 0,0 L 0,20 Q 20,40 40,20 T 80,20 T 120,20 T 160,20 T 200,20 T 240,20 T 280,20 T 320,20 T 360,20 T 400,20 T 440,20 T 480,20 T 520,20 T 560,20 T 600,20 T 640,20 T 680,20 T 720,20 T 760,20 T 800,20 T 840,20 T 880,20 T 920,20 T 960,20 T 1000,20 T 1040,20 T 1080,20 T 1120,20 T 1160,20 T 1200,20 T 1240,20 T 1280,20 T 1320,20 T 1360,20 T 1400,20 T 1440,20 L 1440,0 Z" />
        </svg>
      </div>

      {/* Playful Ambient Glow Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00aeef]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ffe80a]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            
            {/* Eyebrow Title per launch brief */}
            <div className="inline-flex items-center gap-2 px-3.5 xs:px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-[#00aeef]/40 text-white text-[11px] xs:text-xs sm:text-sm font-black tracking-wide uppercase shadow-sm max-w-full">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffe80a] shrink-0" />
              <span>International Online Chess Education</span>
            </div>

            {/* Main Hero Headline per launch brief */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[44px] font-black text-white tracking-tight leading-[1.12] drop-shadow-md">
              <span className="block text-white">World-Class Chess Training.</span>
              <span className="block font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe80a] via-[#fcd116] to-[#00aeef] mt-1.5 drop-shadow-lg">
                A Clear Path to Your Next Level.
              </span>
            </h1>

            {/* Supporting Copy per launch brief */}
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-medium">
              Live online chess coaching, structured learning pathways, personalized game analysis and competitive practice for aspiring players worldwide.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-white">
              <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-white/25 shadow-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffe80a] shrink-0" />
                <span>FIDE-Certified Trainers &amp; Masters</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-white/25 shadow-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00aeef] shrink-0" />
                <span>Small Batches (1:4) &amp; 1-on-1 Mentorship</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-white/25 shadow-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffe80a] shrink-0" />
                <span>Global Timezone-Friendly Batches</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-white/25 shadow-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00aeef] shrink-0" />
                <span>Dedicated Student Portal &amp; Puzzles</span>
              </div>
            </div>

            {/* Dual Action Buttons per launch brief */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => openBookingModal()}
                  type="button"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black px-6 sm:px-8 py-3.5 rounded-full text-sm sm:text-base shadow-xl shadow-black/20 transition-all duration-200 hover:scale-105 cursor-pointer text-center border-2 border-[#042047]"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#042047]" />
                  <span>Book a Free Assessment</span>
                </button>
                
                <a
                  href="#portal-preview"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base border-2 border-white/50 backdrop-blur-md shadow-md transition-all duration-200 hover:scale-105 text-center"
                >
                  <span>Explore Student Portal</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
              </div>

              {/* Small Supporting Line per launch brief */}
              <p className="text-[11px] sm:text-xs text-white/80 font-semibold tracking-wide">
                Structured courses <span className="text-[#00aeef]">●</span> Live coaching <span className="text-[#ffe80a]">●</span> Progress tracking <span className="text-[#00aeef]">●</span> Competitive practice
              </p>
            </div>

          </div>

          {/* Right Column: Balanced Arch Trio Showcase with Playful Doodles & Floating Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[530px] lg:max-w-[560px] h-[380px] xs:h-[450px] sm:h-[520px] lg:h-[550px]">
              
              {/* Ambient Glow behind cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-[#00aeef]/25 rounded-full blur-3xl pointer-events-none -z-10" />
              <div className="absolute bottom-4 right-4 w-48 sm:w-60 h-48 sm:h-60 bg-[#ffe80a]/20 rounded-full blur-2xl pointer-events-none -z-10" />

              {/* Doodle 1: Yellow Star above center arch */}
              <div className="absolute -top-1 sm:top-0 left-[26%] sm:left-[28%] z-30 animate-pulse pointer-events-none">
                <svg className="w-7 h-7 sm:w-10 sm:h-10 text-[#ffe80a] drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 C52 35 65 48 100 50 C65 52 52 65 50 100 C48 65 35 52 0 50 C35 48 48 35 50 0 Z" />
                </svg>
              </div>

              {/* Doodle 2: Light Cyan Loop Scribble on left margin */}
              <div className="absolute top-[24%] -left-3 sm:-left-6 z-30 pointer-events-none">
                <svg className="w-10 h-7 xs:w-14 xs:h-10 sm:w-18 sm:h-12 text-[#00aeef]/85 drop-shadow-sm" viewBox="0 0 120 70" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 45 C15 20, 30 15, 40 30 C50 45, 35 60, 25 50 C15 40, 25 15, 55 25 C75 32, 85 55, 70 60 C55 65, 60 30, 95 35 C108 37, 115 45, 110 55" />
                </svg>
              </div>

              {/* Doodle 3: Small Yellow Sparkle Star at top right */}
              <div className="absolute top-1 right-2 sm:right-4 z-30 pointer-events-none">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#ffe80a] drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 C52 35 65 48 100 50 C65 52 52 65 50 100 C48 65 35 52 0 50 C35 48 48 35 50 0 Z" />
                </svg>
              </div>

              {/* Doodle 4: White Radiating Sunburst Doodle at bottom right */}
              <div className="absolute bottom-1 right-1 sm:right-3 z-10 pointer-events-none opacity-80">
                <svg className="w-10 h-10 sm:w-16 sm:h-16 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
                  <line x1="8" y1="50" x2="28" y2="50" />
                  <line x1="14" y1="30" x2="30" y2="38" />
                  <line x1="24" y1="14" x2="38" y2="30" />
                  <line x1="45" y1="8" x2="48" y2="28" />
                  <line x1="68" y1="14" x2="56" y2="30" />
                  <line x1="14" y1="70" x2="30" y2="62" />
                  <line x1="24" y1="86" x2="38" y2="70" />
                  <line x1="45" y1="92" x2="48" y2="72" />
                </svg>
              </div>

              {/* Card 1: Left Stepped Arch (Tournament Celebration & Trophy) */}
              <div className="absolute bottom-3 sm:bottom-5 -left-2 w-[42%] sm:w-[40%] h-[58%] sm:h-[62%] rounded-t-full rounded-b-[24px] sm:rounded-b-[32px] overflow-hidden bg-slate-900/60 shadow-2xl z-10 -rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white/85">
                <div className="relative w-full h-full">
                  <Image 
                    src="/21.png" 
                    alt="AIM Chess Tournament Winners"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 150px, 220px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Card 2: Center Main Hero Arch (Coach Somnath & Students Squad) */}
              <div className="absolute top-4 sm:top-5 left-[24%] sm:left-[25%] w-[52%] sm:w-[50%] h-[82%] sm:h-[84%] rounded-t-full rounded-b-[32px] sm:rounded-b-[40px] overflow-hidden bg-slate-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)] z-20 transition-transform duration-300 hover:scale-[1.02] border-4 border-white">
                <div className="relative w-full h-full">
                  <Image 
                    src="/26.png" 
                    alt="AIM Chess Academy Mentors and Students"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 640px) 200px, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/75 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle caption pill at the bottom of the main card */}
                  <div className="absolute bottom-2.5 inset-x-2 sm:inset-x-3 text-center pointer-events-none">
                    <span className="inline-block bg-[#042047]/85 backdrop-blur-md text-white text-[9px] xs:text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/20 shadow-sm truncate max-w-full">
                      AIM Chess Champions
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Right Stepped Arch (Young Trophy Winner) */}
              <div className="absolute top-2 sm:top-3 -right-3 w-[42%] sm:w-[40%] h-[58%] sm:h-[62%] rounded-t-full rounded-b-[24px] sm:rounded-b-[32px] overflow-hidden bg-slate-900/60 shadow-2xl z-10 rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white/85">
                <div className="relative w-full h-full">
                  <Image 
                    src="/20.png" 
                    alt="Young Chess Champion"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 150px, 220px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1: Top Left - 50+ Trophies */}
              <div className="absolute top-4 -left-2 sm:-left-4 z-30 flex items-center gap-2 bg-[#042047]/95 backdrop-blur-md border border-white/25 text-white px-2.5 sm:px-3.5 py-1.5 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-200">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-[#ffe80a] to-[#f59e0b] flex items-center justify-center text-[#042047] shadow-sm shrink-0">
                  <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-black text-white leading-tight">50+ Trophies</div>
                  <div className="text-[8px] sm:text-[9px] text-[#ffe80a] font-bold leading-none">State &amp; National</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right - FIDE Certified */}
              <div className="absolute -bottom-2 sm:bottom-0 right-1 sm:-right-3 z-30 flex items-center gap-2 bg-[#042047]/95 backdrop-blur-md border border-white/25 text-white px-2.5 sm:px-3.5 py-1.5 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-200">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-[#00aeef] to-[#0284c7] flex items-center justify-center text-white shadow-sm shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-black text-white leading-tight">FIDE Certified</div>
                  <div className="text-[8px] sm:text-[9px] text-sky-300 font-bold leading-none">Top Mentorship</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scalloped Repeating Wave Border */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-6 sm:h-9 lg:h-11 text-white fill-current rotate-180"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
        >
          <path d="M 0,0 L 0,20 Q 20,40 40,20 T 80,20 T 120,20 T 160,20 T 200,20 T 240,20 T 280,20 T 320,20 T 360,20 T 400,20 T 440,20 T 480,20 T 520,20 T 560,20 T 600,20 T 640,20 T 680,20 T 720,20 T 760,20 T 800,20 T 840,20 T 880,20 T 920,20 T 960,20 T 1000,20 T 1040,20 T 1080,20 T 1120,20 T 1160,20 T 1200,20 T 1240,20 T 1280,20 T 1320,20 T 1360,20 T 1400,20 T 1440,20 L 1440,0 Z" />
        </svg>
      </div>

    </section>
  );
}