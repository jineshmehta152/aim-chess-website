"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Sparkles, Home, ChevronRight } from "lucide-react";

interface PageBannerProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  bgImage?: string;
}

export default function PageBanner({ badge, title, subtitle, breadcrumb, bgImage }: PageBannerProps) {
  const cleanTitle = title ? title.trim() : "AIM CHESS ACADEMY";
  const titleWords = cleanTitle.split(" ");
  const firstWord = titleWords[0] || "AIM";
  const restOfTitle = titleWords.length > 1 ? titleWords.slice(1).join(" ") : "";
  const breadcrumbText = breadcrumb || cleanTitle;
  const eyebrowText = badge || "ACHIEVE • INSPIRE • MAINTAIN";
  const finalBgImage = bgImage || "/images/hero.jpg";

  return (
    <div className="relative overflow-hidden bg-[#041935] text-white pt-20 xs:pt-24 sm:pt-36 lg:pt-44 pb-20 xs:pb-24 sm:pb-36 lg:pb-44 flex flex-col justify-center text-center select-none min-h-[360px] xs:min-h-[420px] sm:min-h-[520px] lg:min-h-[580px]">
      
      {/* Real High-Resolution Photographic Chess Background - Clearly Visible */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={finalBgImage} 
          alt="AIM Chess Academy Background" 
          fill 
          priority 
          className="object-cover object-center filter brightness-75 contrast-110 saturate-110"
          sizes="100vw"
        />
        {/* Cinematic Navy Gradient Overlay for clear visibility & readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#041935] via-[#042047]/55 to-[#042047]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#041935]/40 to-[#041935]/85" />
      </div>

      {/* Decorative Chess Board Geometric Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none z-1"
        style={{
          backgroundImage: `linear-gradient(to right, #00aeef 1.5px, transparent 1.5px), linear-gradient(to bottom, #00aeef 1.5px, transparent 1.5px)`,
          backgroundSize: '54px 54px'
        }}
      />

      {/* Ambient Color Glow Orbs */}
      <div className="absolute -top-12 -left-12 w-80 h-80 bg-[#00aeef]/30 rounded-full blur-3xl pointer-events-none z-1" />
      <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-[#ffe80a]/25 rounded-full blur-3xl pointer-events-none z-1" />

      {/* Floating Decorative Chess Silhouettes */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-14 lg:left-24 opacity-25 pointer-events-none hidden md:block z-1">
        <svg className="w-20 h-20 lg:w-28 lg:h-28 text-[#00aeef] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 22H5V20H19V22M19 18H5C5 17 6 15 7 14C6 13.5 5 12 5 10C5 7.5 7 5.5 9 5.5C9.5 5.5 10 5.6 10.5 5.8C10.8 4.2 12.2 3 14 3C16.2 3 18 4.8 18 7C18 7.4 17.9 7.7 17.8 8.1C18.5 8.9 19 10 19 11.2C19 12.5 18.2 13.6 17.1 14.1C17.7 15.2 18.3 16.5 19 18Z" />
        </svg>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-14 lg:right-24 opacity-25 pointer-events-none hidden md:block z-1">
        <svg className="w-20 h-20 lg:w-28 lg:h-28 text-[#ffe80a] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V17H19V19Z" />
        </svg>
      </div>

      {/* Main Banner Content */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Eyebrow Pill Badge */}
        <div className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 px-3 xs:px-4 sm:px-5 py-1 sm:py-1.5 rounded-full bg-[#042047]/80 backdrop-blur-md border-2 border-[#00aeef]/60 text-[#ffe80a] text-[11px] xs:text-xs sm:text-sm font-black shadow-xl">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffe80a] animate-pulse shrink-0" />
          <span className="tracking-wide uppercase line-clamp-1">{eyebrowText}</span>
        </div>

        {/* Main Banner Headline with Heavy Drop Shadow */}
        <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          <span className="text-white drop-shadow-md">{firstWord} </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe80a] via-[#fed100] to-[#00aeef] drop-shadow-md">
            {restOfTitle}
          </span>
        </h1>

        {/* Subtitle with Dark Backdrop Pill for Maximum Readability */}
        {subtitle && (
          <div className="mt-3 sm:mt-4 max-w-2xl mx-auto px-2">
            <p className="inline-block text-xs sm:text-sm md:text-base text-slate-100 font-medium px-3.5 py-1.5 rounded-2xl bg-[#042047]/60 backdrop-blur-sm border border-white/10 leading-relaxed shadow-lg drop-shadow-md">
              {subtitle}
            </p>
          </div>
        )}

        {/* Interactive Breadcrumb Card */}
        <div className="mt-5 sm:mt-6 inline-flex items-center justify-center max-w-full">
          <nav 
            aria-label="Breadcrumb" 
            className="flex items-center gap-1.5 sm:gap-2 text-[11px] xs:text-xs font-black bg-[#042047]/85 backdrop-blur-md px-3.5 xs:px-5 py-2 xs:py-2.5 rounded-full border-2 border-white/20 shadow-xl text-slate-200 overflow-hidden text-ellipsis whitespace-nowrap max-w-full"
          >
            <Link 
              href="/" 
              className="flex items-center gap-1 sm:gap-1.5 hover:text-[#ffe80a] transition-colors text-slate-300 hover:scale-105 shrink-0"
            >
              <Home className="w-3.5 h-3.5 text-[#00aeef]" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-[#ffe80a] font-black tracking-wide truncate">{breadcrumbText}</span>
          </nav>
        </div>

      </div>

      {/* Bottom Scalloped Repeating Wave Border (Seamless transition to next section) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-6 sm:h-9 lg:h-11 text-white fill-current rotate-180"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
        >
          <path d="M 0,0 L 0,20 Q 20,40 40,20 T 80,20 T 120,20 T 160,20 T 200,20 T 240,20 T 280,20 T 320,20 T 360,20 T 400,20 T 440,20 T 480,20 T 520,20 T 560,20 T 600,20 T 640,20 T 680,20 T 720,20 T 760,20 T 800,20 T 840,20 T 880,20 T 920,20 T 960,20 T 1000,20 T 1040,20 T 1080,20 T 1120,20 T 1160,20 T 1200,20 T 1240,20 T 1280,20 T 1320,20 T 1360,20 T 1400,20 T 1440,20 L 1440,0 Z" />
        </svg>
      </div>

    </div>
  );
}
