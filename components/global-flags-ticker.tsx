"use client";

import React from "react";
import { Globe2 } from "lucide-react";

export type Country = {
  code: string;
  name: string;
  fullName: string;
  flagSvg: React.ReactNode;
};

// SVG circular country flag icons ensuring 100% reliable crisp rendering on all operating systems (Windows, iOS, Android, macOS)
export const COUNTRIES: Country[] = [
  {
    code: "ae",
    name: "UAE",
    fullName: "United Arab Emirates",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-uae"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-uae)">
          <rect width="32" height="10.67" fill="#00732f"/>
          <rect y="10.67" width="32" height="10.67" fill="#ffffff"/>
          <rect y="21.33" width="32" height="10.67" fill="#111111"/>
          <rect width="9" height="32" fill="#ff0000"/>
        </g>
      </svg>
    ),
  },
  {
    code: "us",
    name: "USA",
    fullName: "United States",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-us"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-us)">
          <rect width="32" height="32" fill="#b22234"/>
          <path d="M0 2.46h32M0 7.38h32M0 12.3h32M0 17.23h32M0 22.15h32M0 27.07h32" stroke="#ffffff" strokeWidth="2.46"/>
          <rect width="14" height="17.23" fill="#3c3b6e"/>
          <circle cx="4" cy="4" r="0.9" fill="#ffffff"/>
          <circle cx="7" cy="4" r="0.9" fill="#ffffff"/>
          <circle cx="10" cy="4" r="0.9" fill="#ffffff"/>
          <circle cx="5.5" cy="7" r="0.9" fill="#ffffff"/>
          <circle cx="8.5" cy="7" r="0.9" fill="#ffffff"/>
          <circle cx="4" cy="10" r="0.9" fill="#ffffff"/>
          <circle cx="7" cy="10" r="0.9" fill="#ffffff"/>
          <circle cx="10" cy="10" r="0.9" fill="#ffffff"/>
          <circle cx="5.5" cy="13" r="0.9" fill="#ffffff"/>
          <circle cx="8.5" cy="13" r="0.9" fill="#ffffff"/>
        </g>
      </svg>
    ),
  },
  {
    code: "gb",
    name: "UK",
    fullName: "United Kingdom",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-gb"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-gb)">
          <rect width="32" height="32" fill="#012169"/>
          <path d="M0 0 L32 32 M32 0 L0 32" stroke="#ffffff" strokeWidth="5.5"/>
          <path d="M0 0 L32 32 M32 0 L0 32" stroke="#c8102e" strokeWidth="3.2"/>
          <path d="M16 0 V32 M0 16 H32" stroke="#ffffff" strokeWidth="9"/>
          <path d="M16 0 V32 M0 16 H32" stroke="#c8102e" strokeWidth="5.5"/>
        </g>
      </svg>
    ),
  },
  {
    code: "om",
    name: "Oman",
    fullName: "Oman",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-om"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-om)">
          <rect width="32" height="10.67" fill="#ffffff"/>
          <rect y="10.67" width="32" height="10.67" fill="#db161b"/>
          <rect y="21.33" width="32" height="10.67" fill="#008000"/>
          <rect width="9" height="32" fill="#db161b"/>
          <path d="M3 4 L6 7 M6 4 L3 7 M4.5 3.5 V9.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round"/>
        </g>
      </svg>
    ),
  },
  {
    code: "qa",
    name: "Qatar",
    fullName: "Qatar",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-qa"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-qa)">
          <rect width="32" height="32" fill="#8d1b3d"/>
          <path d="M0 0 H9.5 L12.5 1.77 L9.5 3.55 L12.5 5.33 L9.5 7.11 L12.5 8.88 L9.5 10.66 L12.5 12.44 L9.5 14.22 L12.5 16 L9.5 17.77 L12.5 19.55 L9.5 21.33 L12.5 23.11 L9.5 24.88 L12.5 26.66 L9.5 28.44 L12.5 30.22 L9.5 32 H0 Z" fill="#ffffff"/>
        </g>
      </svg>
    ),
  },
  {
    code: "au",
    name: "Australia",
    fullName: "Australia",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-au"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-au)">
          <rect width="32" height="32" fill="#00008b"/>
          <g transform="scale(0.48)">
            <rect width="32" height="32" fill="#012169"/>
            <path d="M0 0 L32 32 M32 0 L0 32" stroke="#ffffff" strokeWidth="5.5"/>
            <path d="M0 0 L32 32 M32 0 L0 32" stroke="#c8102e" strokeWidth="3.2"/>
            <path d="M16 0 V32 M0 16 H32" stroke="#ffffff" strokeWidth="9"/>
            <path d="M16 0 V32 M0 16 H32" stroke="#c8102e" strokeWidth="5.5"/>
          </g>
          <circle cx="8" cy="23" r="2.8" fill="#ffffff"/>
          <circle cx="24" cy="6" r="1.2" fill="#ffffff"/>
          <circle cx="21" cy="12" r="1.2" fill="#ffffff"/>
          <circle cx="27" cy="14" r="1.2" fill="#ffffff"/>
          <circle cx="24" cy="20" r="1.4" fill="#ffffff"/>
          <circle cx="25" cy="16" r="0.8" fill="#ffffff"/>
        </g>
      </svg>
    ),
  },
  {
    code: "ca",
    name: "Canada",
    fullName: "Canada",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-ca"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-ca)">
          <rect width="32" height="32" fill="#ff0000"/>
          <rect x="8" width="16" height="32" fill="#ffffff"/>
          <path d="M16 8 L17.5 12 L20.5 11.5 L19 14.5 L22 16 L18.5 18 L19 20 L16.5 19.5 L16.5 24 L15.5 24 L15.5 19.5 L13 20 L13.5 18 L10 16 L13 14.5 L11.5 11.5 L14.5 12 Z" fill="#ff0000"/>
        </g>
      </svg>
    ),
  },
  {
    code: "nz",
    name: "New Zealand",
    fullName: "New Zealand",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-nz"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-nz)">
          <rect width="32" height="32" fill="#00247d"/>
          <g transform="scale(0.48)">
            <rect width="32" height="32" fill="#012169"/>
            <path d="M0 0 L32 32 M32 0 L0 32" stroke="#ffffff" strokeWidth="5.5"/>
            <path d="M0 0 L32 32 M32 0 L0 32" stroke="#c8102e" strokeWidth="3.2"/>
            <path d="M16 0 V32 M0 16 H32" stroke="#ffffff" strokeWidth="9"/>
            <path d="M16 0 V32 M0 16 H32" stroke="#c8102e" strokeWidth="5.5"/>
          </g>
          <circle cx="24" cy="7" r="1.6" fill="#ffffff"/>
          <circle cx="24" cy="7" r="1.1" fill="#cc142b"/>
          <circle cx="20.5" cy="14" r="1.5" fill="#ffffff"/>
          <circle cx="20.5" cy="14" r="1" fill="#cc142b"/>
          <circle cx="27.5" cy="15" r="1.5" fill="#ffffff"/>
          <circle cx="27.5" cy="15" r="1" fill="#cc142b"/>
          <circle cx="24" cy="22" r="1.8" fill="#ffffff"/>
          <circle cx="24" cy="22" r="1.2" fill="#cc142b"/>
        </g>
      </svg>
    ),
  },
  {
    code: "nl",
    name: "Netherlands",
    fullName: "Netherlands",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-nl"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-nl)">
          <rect width="32" height="10.67" fill="#ae1c28"/>
          <rect y="10.67" width="32" height="10.67" fill="#ffffff"/>
          <rect y="21.33" width="32" height="10.67" fill="#21468b"/>
        </g>
      </svg>
    ),
  },
  {
    code: "sg",
    name: "Singapore",
    fullName: "Singapore",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-sg"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-sg)">
          <rect width="32" height="16" fill="#ed2939"/>
          <rect y="16" width="32" height="16" fill="#ffffff"/>
          <circle cx="7" cy="8" r="4.2" fill="#ffffff"/>
          <circle cx="8.4" cy="8" r="3.7" fill="#ed2939"/>
          <circle cx="10.5" cy="5.8" r="0.6" fill="#ffffff"/>
          <circle cx="12" cy="7.2" r="0.6" fill="#ffffff"/>
          <circle cx="11.5" cy="9.2" r="0.6" fill="#ffffff"/>
          <circle cx="9.5" cy="9.2" r="0.6" fill="#ffffff"/>
          <circle cx="9" cy="7.2" r="0.6" fill="#ffffff"/>
        </g>
      </svg>
    ),
  },
  {
    code: "de",
    name: "Germany",
    fullName: "Germany",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-de"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-de)">
          <rect width="32" height="10.67" fill="#000000"/>
          <rect y="10.67" width="32" height="10.67" fill="#dd0000"/>
          <rect y="21.33" width="32" height="10.67" fill="#ffce00"/>
        </g>
      </svg>
    ),
  },
  {
    code: "in",
    name: "India",
    fullName: "India",
    flagSvg: (
      <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
        <clipPath id="circle-in"><circle cx="16" cy="16" r="16"/></clipPath>
        <g clipPath="url(#circle-in)">
          <rect width="32" height="10.67" fill="#ff9933"/>
          <rect y="10.67" width="32" height="10.67" fill="#ffffff"/>
          <rect y="21.33" width="32" height="10.67" fill="#138808"/>
          <circle cx="16" cy="16" r="3.6" fill="none" stroke="#000080" strokeWidth="0.9"/>
          <circle cx="16" cy="16" r="0.9" fill="#000080"/>
        </g>
      </svg>
    ),
  },
];

interface GlobalFlagsTickerProps {
  variant?: "header" | "strip" | "topbar" | "hero";
  className?: string;
}

export function GlobalFlagsTicker({ variant = "header", className = "" }: GlobalFlagsTickerProps) {
  // Double the list for a seamless, glitch-free continuous looping marquee
  const loopedCountries = [...COUNTRIES, ...COUNTRIES];

  // 1. HEADER COMPACT VARIANT (Placed in the header between logo and menu, as circled)
  if (variant === "header") {
    return (
      <div 
        className={`relative flex items-center bg-white border border-[#00aeef]/35 rounded-full px-2 py-0.5 sm:py-1 shadow-xs overflow-hidden max-w-[210px] xs:max-w-[270px] sm:max-w-[340px] md:max-w-[420px] select-none ${className}`}
        title="We serve students worldwide across UAE, USA, UK, Oman, Qatar, Australia, Canada, New Zealand, Netherlands & more!"
      >
        {/* Left static label badge with pulsing dot */}
        <div className="flex items-center gap-1 shrink-0 pr-1.5 mr-1 border-r border-[#00aeef]/25 z-10 bg-white text-[10px] sm:text-[11px] font-black text-[#042047]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00aeef] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00aeef]"></span>
          </span>
          <span className="hidden xs:inline text-[#042047] font-bold">Serving:</span>
          <Globe2 className="w-3.5 h-3.5 text-[#00aeef] xs:hidden" />
        </div>

        {/* Moving track - no artificial blur overlays that cause white disturbance */}
        <div className="overflow-hidden flex-1 relative min-w-0">
          <div className="animate-flag-ticker flex items-center gap-2 xs:gap-2.5">
            {loopedCountries.map((country, idx) => (
              <div
                key={`${country.code}-${idx}`}
                className="inline-flex items-center gap-1 shrink-0 py-0.5 px-0.5 rounded-full hover:bg-sky-50 transition-colors"
              >
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 rounded-full overflow-hidden border border-slate-300/80 shadow-2xs">
                  {country.flagSvg}
                </div>
                <span className="text-[10px] sm:text-[11px] font-extrabold text-[#042047] whitespace-nowrap tracking-tight">
                  {country.name}
                </span>
                <span className="text-slate-300 text-[10px] font-black ml-1 select-none">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. HERO VARIANT (Dark theme glass pill for Hero Section)
  if (variant === "hero") {
    return (
      <div 
        className={`relative flex items-center bg-white/10 backdrop-blur-md border border-white/25 rounded-full px-2.5 py-1.5 shadow-md overflow-hidden max-w-full select-none text-white ${className}`}
        title="Active international students across UAE, USA, UK, Oman, Qatar, Australia, Canada, New Zealand, Netherlands & more"
      >
        <div className="flex items-center gap-1.5 shrink-0 pr-2 mr-1 border-r border-white/20 z-10 text-[11px] sm:text-xs font-black text-[#ffe80a] whitespace-nowrap">
          <Globe2 className="w-3.5 h-3.5 text-[#00aeef] animate-pulse" />
          <span className="hidden xs:inline">Serving Students In:</span>
          <span className="xs:hidden">Serving:</span>
        </div>

        <div className="overflow-hidden flex-1 relative min-w-0">
          <div className="animate-flag-ticker flex items-center gap-2.5 sm:gap-3">
            {loopedCountries.map((country, idx) => (
              <div
                key={`hero-${country.code}-${idx}`}
                className="inline-flex items-center gap-1.5 shrink-0 px-1 py-0.5 rounded-full hover:bg-white/10 transition-colors"
              >
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 rounded-full overflow-hidden border border-white/40 shadow-xs">
                  {country.flagSvg}
                </div>
                <span className="text-[11px] sm:text-xs font-black text-white whitespace-nowrap">
                  {country.name}
                </span>
                <span className="text-white/40 text-[10px] font-black ml-1 select-none">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 3. TOPBAR VARIANT (Sleek marquee ticker inside top notification bar on desktop)
  if (variant === "topbar") {
    return (
      <div 
        className={`relative flex items-center overflow-hidden max-w-[380px] lg:max-w-[500px] xl:max-w-[560px] select-none text-white ${className}`}
        title="Active international students across UAE, USA, UK, Oman, Qatar, Australia, Canada, New Zealand, Netherlands and more"
      >
        {/* Label */}
        <div className="flex items-center gap-1.5 shrink-0 pr-2 z-10 text-[11px] font-extrabold text-[#ffe80a] whitespace-nowrap">
          <Globe2 className="w-3 h-3 text-[#00aeef] animate-spin" style={{ animationDuration: "12s" }} />
          <span>Active In 12+ Countries:</span>
        </div>

        {/* Moving flags */}
        <div className="overflow-hidden flex-1 relative min-w-0">
          <div className="animate-flag-ticker flex items-center gap-3">
            {loopedCountries.map((country, idx) => (
              <div
                key={`topbar-${country.code}-${idx}`}
                className="inline-flex items-center gap-1.5 shrink-0 text-[11px] text-white/90 font-bold whitespace-nowrap"
              >
                <div className="w-3.5 h-3.5 rounded-full overflow-hidden border border-white/30 shrink-0">
                  {country.flagSvg}
                </div>
                <span>{country.name}</span>
                <span className="text-[#00aeef]/60 text-[9px] font-black">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 4. STRIP VARIANT (For Hero Section or dedicated Trust Section)
  return (
    <div className={`w-full relative overflow-hidden py-2.5 sm:py-3.5 bg-gradient-to-r from-[#042047] via-[#092c5c] to-[#042047] border-y border-[#00aeef]/30 select-none shadow-inner ${className}`}>
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#042047] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#042047] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center">
        {/* Left fixed badge on larger screens */}
        <div className="hidden md:flex items-center gap-2 pl-4 pr-3 shrink-0 z-10 border-r border-white/20">
          <div className="w-6 h-6 rounded-full bg-[#00aeef]/20 border border-[#00aeef] flex items-center justify-center text-[#ffe80a]">
            <Globe2 className="w-3.5 h-3.5" />
          </div>
          <div className="text-left leading-tight">
            <div className="text-[11px] font-black uppercase tracking-wider text-[#ffe80a]">International Trust</div>
            <div className="text-[12px] font-bold text-white">Serving Students In</div>
          </div>
        </div>

        {/* Moving marquee */}
        <div className="overflow-hidden flex-1">
          <div className="animate-flag-ticker flex items-center gap-3 sm:gap-4 pl-2">
            {loopedCountries.map((country, idx) => (
              <div
                key={`strip-${country.code}-${idx}`}
                className="inline-flex items-center gap-2 shrink-0 bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-xs transition-transform hover:scale-105"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full overflow-hidden shrink-0 border border-white/40 shadow-xs">
                  {country.flagSvg}
                </div>
                <span className="text-xs sm:text-sm font-black text-white tracking-wide">
                  {country.fullName}
                </span>
                <span className="text-[10px] font-bold uppercase px-1.5 py-0.2 rounded-md bg-[#00aeef]/30 text-[#ffe80a]">
                  Online
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
