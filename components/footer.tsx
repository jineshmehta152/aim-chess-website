"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useSiteSettings } from "@/context/site-settings-context";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles,
  ArrowUp,
  Award,
  ShieldCheck,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  const { 
    phone, 
    email, 
    address, 
    opening_hours, 
    instagram_url, 
    facebook_url, 
    youtube_url, 
    linkedin_url, 
    getPhoneUrl, 
    getEmailUrl, 
    getWhatsAppUrl 
  } = useSiteSettings();

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#041b3a] text-slate-300 pt-16 sm:pt-20 pb-10 overflow-hidden">
      
      {/* Top Scalloped Repeating Wave Border */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-6 sm:h-9 lg:h-11 text-[#f8fafc] fill-current"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
        >
          <path d="M 0,0 L 0,20 Q 20,40 40,20 T 80,20 T 120,20 T 160,20 T 200,20 T 240,20 T 280,20 T 320,20 T 360,20 T 400,20 T 440,20 T 480,20 T 520,20 T 560,20 T 600,20 T 640,20 T 680,20 T 720,20 T 760,20 T 800,20 T 840,20 T 880,20 T 920,20 T 960,20 T 1000,20 T 1040,20 T 1080,20 T 1120,20 T 1160,20 T 1200,20 T 1240,20 T 1280,20 T 1320,20 T 1360,20 T 1400,20 T 1440,20 L 1440,0 Z" />
        </svg>
      </div>

      {/* Decorative High-Detail Vector Illustrations (Rocket, Planet Saturn, Mascot, Constellations) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Planet Saturn on the Left */}
        <div className="absolute top-12 sm:top-16 left-4 sm:left-12 opacity-90 transition-transform duration-700 hover:scale-110">
          <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_8px_20px_rgba(0,174,239,0.3)] animate-pulse duration-[5000ms]" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="saturnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00aeef" />
                <stop offset="40%" stopColor="#0c71c3" />
                <stop offset="75%" stopColor="#ffe80a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="saturnRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffe80a" />
                <stop offset="50%" stopColor="#00aeef" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>

            {/* Behind Planet Ring Portion */}
            <ellipse cx="60" cy="60" rx="55" ry="18" fill="none" stroke="url(#saturnRingGrad)" strokeWidth="6" strokeDasharray="180 180" strokeDashoffset="90" transform="rotate(-28 60 60)" strokeLinecap="round" opacity="0.85" />

            {/* Planet Sphere */}
            <circle cx="60" cy="60" r="30" fill="url(#saturnGrad)" stroke="#041b3a" strokeWidth="2.5" />

            {/* Surface Texture Bands */}
            <path d="M 33 52 C 45 62 75 62 87 52" stroke="#ffffff" strokeWidth="2.5" opacity="0.3" fill="none" strokeLinecap="round" />
            <path d="M 31 62 C 45 74 75 74 89 62" stroke="#041b3a" strokeWidth="3" opacity="0.25" fill="none" strokeLinecap="round" />
            <path d="M 36 72 C 48 80 72 80 84 72" stroke="#ffffff" strokeWidth="2" opacity="0.3" fill="none" strokeLinecap="round" />

            {/* Front Planet Ring Portion */}
            <ellipse cx="60" cy="60" rx="55" ry="18" fill="none" stroke="url(#saturnRingGrad)" strokeWidth="6" strokeDasharray="180 180" strokeDashoffset="-90" transform="rotate(-28 60 60)" strokeLinecap="round" />

            {/* Orbiting Moonlets */}
            <circle cx="20" cy="24" r="3.5" fill="#ffe80a" stroke="#041b3a" strokeWidth="1.5" />
            <circle cx="102" cy="85" r="4.5" fill="#00aeef" stroke="#041b3a" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Floating Stars / Sparkles Left */}
        <div className="absolute top-10 left-32 opacity-80 hidden md:block">
          <svg className="w-6 h-6 text-[#ffe80a] animate-spin-slow duration-[10000ms]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
        <div className="absolute top-28 left-20 opacity-60 hidden md:block">
          <svg className="w-4 h-4 text-[#00aeef]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>

        {/* Unified High-Detail Rocket with Animated Exhaust Trail (Right Side) */}
        <div className="absolute top-4 sm:top-6 right-2 sm:right-6 lg:right-10 opacity-95 pointer-events-none hidden sm:block z-0">
          <svg className="w-36 sm:w-44 lg:w-52 h-[380px] sm:h-[420px]" viewBox="0 0 160 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rocketBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
              <linearGradient id="rocketAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffe80a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffe80a" />
                <stop offset="50%" stopColor="#00aeef" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Animated Looping Trail */}
            <path 
              d="M 80 180 Q 95 240 70 300 T 80 390" 
              stroke="#00aeef" 
              strokeWidth="3.5" 
              strokeDasharray="6 6" 
              fill="none" 
              opacity="0.75"
              className="animate-exhaust-trail"
            />

            {/* Thruster Flames */}
            <path d="M 72 170 Q 80 215 88 170 Z" fill="url(#flameGrad)" />
            <path d="M 75 170 Q 80 195 85 170 Z" fill="#ffe80a" />

            {/* Rocket Fins */}
            <path d="M 58 150 L 48 168 L 66 166 Z" fill="url(#rocketAccentGrad)" stroke="#041b3a" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 102 150 L 112 168 L 94 166 Z" fill="url(#rocketAccentGrad)" stroke="#041b3a" strokeWidth="2" strokeLinejoin="round" />

            {/* Rocket Main Fuselage */}
            <path d="M 80 80 C 62 105 60 162 66 170 L 94 170 C 100 162 98 105 80 80 Z" fill="url(#rocketBodyGrad)" stroke="#041b3a" strokeWidth="2.5" />

            {/* Rocket Nosecone */}
            <path d="M 80 80 C 72 94 70 106 70 112 L 90 112 C 90 106 88 94 80 80 Z" fill="url(#rocketAccentGrad)" stroke="#041b3a" strokeWidth="2" />

            {/* Porthole Window */}
            <circle cx="80" cy="132" r="10" fill="#00aeef" stroke="#041b3a" strokeWidth="2.5" />
            <circle cx="80" cy="132" r="7" fill="#38bdf8" />
            <circle cx="78" cy="130" r="2.5" fill="#ffffff" />
          </svg>
        </div>

        {/* Playful Friendly Mascot Character with Party Hat (Bottom Right) */}
        <div className="absolute -bottom-4 right-16 sm:right-28 opacity-85 hidden md:block">
          <svg className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mascotBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00aeef" />
                <stop offset="100%" stopColor="#0c71c3" />
              </linearGradient>
              <linearGradient id="mascotHat" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffe80a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            {/* Mascot Body */}
            <path d="M 40 130 C 40 85 120 85 120 130 Z" fill="url(#mascotBody)" stroke="#041b3a" strokeWidth="3" />
            
            {/* Big Expressive Cartoon Eyes */}
            <circle cx="68" cy="98" r="11" fill="#ffffff" stroke="#041b3a" strokeWidth="2.5" />
            <circle cx="70" cy="98" r="6" fill="#041b3a" />
            <circle cx="72" cy="95" r="2.5" fill="#ffffff" />

            <circle cx="92" cy="98" r="11" fill="#ffffff" stroke="#041b3a" strokeWidth="2.5" />
            <circle cx="90" cy="98" r="6" fill="#041b3a" />
            <circle cx="88" cy="95" r="2.5" fill="#ffffff" />

            {/* Cheerful Smile */}
            <path d="M 72 116 Q 80 125 88 116" stroke="#041b3a" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Party Hat */}
            <polygon points="80,52 68,85 92,85" fill="url(#mascotHat)" stroke="#041b3a" strokeWidth="2.5" />
            <circle cx="80" cy="50" r="4" fill="#00aeef" stroke="#041b3a" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Festive Celebration Streamers / Ribbons */}
        <div className="absolute bottom-6 left-8 sm:left-14 opacity-70 hidden sm:block">
          <svg className="w-20 h-12 stroke-[#ffe80a] fill-none" viewBox="0 0 100 50" strokeWidth="3.5" strokeLinecap="round">
            <path d="M 5 42 Q 30 5 55 30 Q 75 50 95 18" />
          </svg>
        </div>

      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 sm:pt-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          
          {/* Col 1: Brand Logo & Mission (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <Link href="/" className="inline-block bg-white p-3 rounded-2xl shadow-md transition-transform hover:scale-105 border-2 border-[#00aeef]/40">
              <Image 
                src="/logo.png" 
                alt="AIM Chess Academy Logo" 
                width={170} 
                height={70} 
                className="h-12 w-auto object-contain"
              />
            </Link>

            <div className="space-y-1">
              <div className="text-xs font-black tracking-wider text-[#ffe80a]">
                ACHIEVE • INSPIRE • MAINTAIN
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                At AIM Chess Academy, we cultivate young minds through structured chess coaching, FIDE certified trainers, and ISO certified curriculum. From absolute beginners to tournament champions.
              </p>
            </div>

            {/* Social Channels Row */}
            <div className="flex flex-wrap items-center gap-2 xs:gap-2.5 pt-1">
              <a
                href={facebook_url || "https://www.facebook.com/profile.php?id=100083211338280"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#00aeef] hover:text-white text-slate-200 flex items-center justify-center transition-colors border border-white/15 shrink-0"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={instagram_url || "https://www.instagram.com/aimchessacademy/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#00aeef] hover:text-white text-slate-200 flex items-center justify-center transition-colors border border-white/15 shrink-0"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={linkedin_url || "https://www.linkedin.com/in/soumen-banerjee-43532b1ab/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#00aeef] hover:text-white text-slate-200 flex items-center justify-center transition-colors border border-white/15 shrink-0"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={youtube_url || "https://www.youtube.com/@Aimchessacademy"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#00aeef] hover:text-white text-slate-200 flex items-center justify-center transition-colors border border-white/15 shrink-0"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="https://g.co/kgs/y9aG7qE"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-[#ffe80a] text-[#042047] font-black text-xs shadow-sm hover:scale-105 transition-transform flex items-center gap-1 shrink-0"
              >
                <span>5.0★ Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Useful Links (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <div>
              <h3 className="text-white font-extrabold text-base tracking-wide uppercase">
                Quick Navigation
              </h3>
              <div className="w-8 h-1 bg-[#ffe80a] rounded-full mt-1.5" />
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/" className="text-slate-300 hover:text-[#ffe80a] hover:translate-x-1 inline-block transition-all">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-[#ffe80a] hover:translate-x-1 inline-block transition-all">About Our Academy</Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-[#ffe80a] hover:translate-x-1 inline-block transition-all">Courses &amp; Batches</Link>
              </li>
              <li>
                <Link href="/achievements" className="text-slate-300 hover:text-[#ffe80a] hover:translate-x-1 inline-block transition-all">Student Achievements</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-[#ffe80a] hover:translate-x-1 inline-block transition-all">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-[#ffe80a] hover:translate-x-1 inline-block transition-all">Chess Blog &amp; Guides</Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-[#ffe80a] hover:translate-x-1 inline-block transition-all">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Courses Offered (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <div>
              <h3 className="text-white font-extrabold text-base tracking-wide uppercase">
                Courses Offered
              </h3>
              <div className="w-8 h-1 bg-[#00aeef] rounded-full mt-1.5" />
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-[#00aeef] hover:translate-x-1 inline-block transition-all">Beginner Chess Fundamentals</Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-[#00aeef] hover:translate-x-1 inline-block transition-all">Intermediate Tactics &amp; Strategy</Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-[#00aeef] hover:translate-x-1 inline-block transition-all">Advanced &amp; FIDE Rating Prep</Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-[#00aeef] hover:translate-x-1 inline-block transition-all">1-on-1 Master Classes</Link>
              </li>
              <li>
                <Link href="/achievements" className="text-slate-300 hover:text-[#00aeef] hover:translate-x-1 inline-block transition-all">Monthly Practice Tournaments</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[#00aeef] hover:translate-x-1 inline-block transition-all">Global Online Batches</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get In Touch (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div>
              <h3 className="text-white font-extrabold text-base tracking-wide uppercase">
                Contact Us
              </h3>
              <div className="w-8 h-1 bg-[#ffe80a] rounded-full mt-1.5" />
            </div>

            <div className="space-y-3 text-xs sm:text-sm font-medium">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#ffe80a] shrink-0 mt-0.5" />
                <a href={getPhoneUrl()} className="text-slate-200 hover:text-[#ffe80a] transition-colors font-bold">
                  {phone || "+91 99034 52493"}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                <a href={getEmailUrl()} className="text-slate-200 hover:text-[#00aeef] transition-colors break-all">
                  {email || "contact@aimchessacademy.com"}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ffe80a] shrink-0 mt-0.5" />
                <span className="text-slate-300 text-xs leading-relaxed">
                  {address || "Nabapally, Choto Bazar, Barasat - 700126, Kolkata, India"}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                <span className="text-slate-300 text-xs">
                  {opening_hours || "Mon - Sun: 9:00 AM - 8:30 PM"}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright, Accreditations & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
            <span>© {currentYear} AIM Chess Academy. All rights reserved.</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline text-slate-300">ISO Certified &amp; FIDE Trainers</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#ffe80a] hover:text-[#042047] text-white px-4 py-2 rounded-full border border-white/20 transition-all cursor-pointer font-bold shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Marquee and Rocket Exhaust Animation Styling */}
      <style jsx global>{`
        @keyframes exhaustTrail {
          0% {
            stroke-dashoffset: 24;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .animate-exhaust-trail {
          animation: exhaustTrail 1.5s linear infinite;
        }
      `}</style>

    </footer>
  );
}
