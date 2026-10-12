"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
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
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow Title */}
            <div className="inline-flex items-center gap-2 px-3.5 xs:px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-[#00aeef]/40 text-white text-[11px] xs:text-xs sm:text-sm font-extrabold shadow-sm max-w-full">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffe80a] shrink-0" />
              <span className="truncate">AIM Chess Academy: <span className="text-[#ffe80a] font-bold">Empowering Young Minds</span></span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[33px] font-black text-white tracking-tight leading-[1.08] sm:leading-[1.06] drop-shadow-md">
              <span className="block">{t("title1") || "Unleash Your Inner Grandmaster with"}</span>
              <span className="block font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe80a] via-[#fcd116] to-[#00aeef] text-3xl xs:text-5xl sm:text-6xl lg:text-[45px] leading-tight mt-1 drop-shadow-lg break-words">
                AIM Chess Academy
              </span>
            </h1>

            {/* Location and Info Badge */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
              <span className="text-xs xs:text-sm sm:text-lg font-black text-white drop-shadow-xs">
                Barasat, Kolkata
              </span>
              <span className="bg-[#ffe80a] text-[#042047] font-black px-2.5 xs:px-3 sm:px-3.5 py-1 rounded-full text-[11px] xs:text-xs sm:text-sm shadow-md">
                Online &amp; Offline Batches Worldwide
              </span>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm font-bold text-white">
              <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-white/25 shadow-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffe80a] shrink-0" />
                <span>Training by FIDE-Certified Trainers</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-white/25 shadow-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00aeef] shrink-0" />
                <span>Regular Practice Tournaments</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-white/25 shadow-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffe80a] shrink-0" />
                <span>ISO-Certified Course Certificates</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-white/25 shadow-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00aeef] shrink-0" />
                <span>Affordable Global Online Batches</span>
              </div>
            </div>

            {/* Dual Action Buttons */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 pt-3">
              <button
                onClick={() => openBookingModal()}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-lg shadow-xl shadow-black/20 transition-all duration-200 hover:scale-105 cursor-pointer text-center border-2 border-[#042047]"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#042047]" />
                <span>{t("ctaBook") || "Book a Free Demo Class"}</span>
              </button>
              
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-lg border-2 border-white/50 backdrop-blur-md shadow-md transition-all duration-200 hover:scale-105 text-center"
              >
                <span>{t("ctaExplore") || "Explore Courses"}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
            </div>

          </div>

          {/* Right Column: Iconic Arch / Capsule Collage with Playful Doodles */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-[290px] xs:max-w-[380px] sm:max-w-[520px] h-[330px] xs:h-[420px] sm:h-[540px]">
              
              {/* Doodle 1: Yellow Star above center arch */}
              <div className="absolute top-2 left-[18%] sm:left-[20%] z-20 animate-pulse pointer-events-none">
                <svg className="w-7 h-7 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-[#ffe80a]" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 C52 35 65 48 100 50 C65 52 52 65 50 100 C48 65 35 52 0 50 C35 48 48 35 50 0 Z" />
                </svg>
              </div>

              {/* Doodle 2: Light Cyan / White Hand-drawn Loop Scribble ("lee") */}
              <div className="absolute top-[32%] left-[2%] sm:left-[6%] z-20 pointer-events-none">
                <svg className="w-10 h-7 xs:w-16 xs:h-12 sm:w-20 sm:h-14 text-[#00aeef]/85" viewBox="0 0 120 70" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 45 C15 20, 30 15, 40 30 C50 45, 35 60, 25 50 C15 40, 25 15, 55 25 C75 32, 85 55, 70 60 C55 65, 60 30, 95 35 C108 37, 115 45, 110 55" />
                </svg>
              </div>

              {/* Doodle 3: Yellow Star below center arch */}
              <div className="absolute bottom-8 xs:bottom-12 sm:bottom-14 left-[20%] sm:left-[24%] z-20 pointer-events-none">
                <svg className="w-5 h-5 sm:w-8 sm:h-8 text-[#ffe80a]" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 C52 35 65 48 100 50 C65 52 52 65 50 100 C48 65 35 52 0 50 C35 48 48 35 50 0 Z" />
                </svg>
              </div>

              {/* Doodle 4: White Radiating Sunburst Doodle at bottom right */}
              <div className="absolute bottom-2 right-[20%] xs:right-[24%] sm:right-[32%] z-20 pointer-events-none">
                <svg className="w-10 h-10 xs:w-16 xs:h-16 sm:w-20 sm:h-20 text-white/90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
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

              {/* Arch 1: Top Right Arch Card */}
              <div className="absolute top-0 right-0 sm:right-2 w-24 xs:w-32 sm:w-40 lg:w-44 h-32 xs:h-44 sm:h-56 rounded-t-full rounded-b-[20px] xs:rounded-b-[24px] sm:rounded-b-[32px] overflow-hidden bg-[#00aeef] shadow-2xl z-0 flex items-end justify-center transition-transform duration-300 hover:scale-105 border-2 border-white/20">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/prize-1.jpg" 
                    alt="Chess Training in Action"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/60 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Arch 2: Center Main Tall Arch Card */}
              <div className="absolute top-5 xs:top-6 sm:top-8 left-8 xs:left-14 sm:left-20 w-32 xs:w-44 sm:w-56 lg:w-64 h-48 xs:h-64 sm:h-84 lg:h-96 rounded-t-full rounded-b-[24px] xs:rounded-b-[28px] sm:rounded-b-[36px] overflow-hidden bg-[#0c71c3] shadow-2xl z-10 flex items-end justify-center transition-transform duration-300 hover:scale-105 border-4 border-white/30">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/prize-6.jpg" 
                    alt="AIM Chess Academy Grandmaster Session"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 250px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/70 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Arch 3: Bottom Left Arch Card */}
              <div className="absolute bottom-3 xs:bottom-5 sm:bottom-8 left-0 sm:left-2 w-24 xs:w-32 sm:w-40 lg:w-44 h-32 xs:h-44 sm:h-56 rounded-t-full rounded-b-[18px] xs:rounded-b-[20px] sm:rounded-b-[28px] overflow-hidden bg-[#ffe80a] shadow-xl z-0 flex items-end justify-center transition-transform duration-300 hover:scale-105 border-2 border-white/20">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/achievement-2.jpg" 
                    alt="Chess Tournament Winners"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/60 via-transparent to-transparent"></div>
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