"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";
import { MessageCircle, Award, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutOverviewSection() {
  const { getWhatsAppUrl } = useSiteSettings();
  const { openBookingModal } = useBookingModal();

  return (
    <section className="relative py-20 sm:py-28 bg-white text-[#042047] overflow-hidden">
      
      {/* Ambient Gradient Lighting */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-sky-100/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-28 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Dual-Image Collage + 100% Badge + Chat CTA */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[540px] pb-14 sm:pb-16">
              
              {/* Dotted Grid Accent Background (Bottom Left) */}
              <div className="absolute -bottom-6 -left-6 z-0 pointer-events-none hidden sm:block">
                <div className="grid grid-cols-6 gap-2.5 opacity-35">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00aeef]" />
                  ))}
                </div>
              </div>

              {/* Top Arched Image Card (Coaches & Winners Trophy Celebration) */}
              <div className="relative w-[76%] xs:w-[72%] sm:w-[70%] aspect-[4/4.6] rounded-[36px] rounded-tl-[120px] rounded-tr-[40px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-10 group">
                <Image 
                  src="/14.png" 
                  alt="AIM Chess Academy Trophy Celebration" 
                  fill 
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 70vw, 420px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/35 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Right Overlapping Image Card (Live Chess Coaching Classroom) */}
              <div className="absolute -bottom-2 sm:bottom-2 right-0 w-[74%] xs:w-[70%] sm:w-[68%] aspect-[4/3.4] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(4,32,71,0.22)] border-4 border-white bg-slate-100 z-20 group">
                <Image 
                  src="/16.png" 
                  alt="AIM Chess Academy Live Classroom Training" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 65vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating 100% Success Rate Badge */}
              <div className="absolute top-4 -left-2 xs:top-6 sm:top-auto sm:bottom-12 sm:-left-2 z-30 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_32px_rgba(4,32,71,0.15)] p-2.5 xs:p-3 sm:p-4 border border-slate-100 flex items-center gap-2.5 xs:gap-3.5 transition-transform hover:scale-105">
                <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl bg-gradient-to-br from-[#ffe80a] to-[#f59e0b] flex items-center justify-center text-[#042047] shadow-sm shrink-0">
                  <Award className="w-5 h-5 xs:w-6 xs:h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xl xs:text-2xl sm:text-3xl font-black text-[#042047] leading-none tracking-tight">
                    100%
                  </div>
                  <div className="text-[10px] xs:text-[11px] sm:text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider">
                    Success Rate
                  </div>
                </div>
              </div>

              {/* Floating Chat with Coach Button */}
              <div className="absolute -bottom-6 sm:-bottom-7 left-2 sm:left-0 z-40">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black px-5 sm:px-6 py-3 rounded-full shadow-[0_8px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer text-xs sm:text-sm border-2 border-white"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat with Coach</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative, Typography & Founder Signature */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#e0f2fe] border border-sky-200/80 text-[#0284c7] font-black text-xs sm:text-sm tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00aeef]" />
              <span>Get More About Us</span>
            </div>

            {/* Main Headline with Yellow Highlight Box */}
            <div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#042047] tracking-tight leading-[1.12]">
                About AIM
                <br />
                <span className="bg-[#ffe80a] text-[#042047] px-4 py-1 rounded-2xl font-black inline-block mt-2.5 shadow-sm">
                  Chess Academy
                </span>
              </h2>
            </div>

            {/* Body Paragraph 1 */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              At our core, we believe that chess is more than just a game—it&apos;s a powerful tool for building confidence, sharpening strategic thinking, and fostering a lifelong love of learning. We are dedicated to providing a supportive and engaging online and offline environment where young minds can thrive.
            </p>

            {/* Body Paragraph 2 */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Led by a distinguished panel of FIDE-certified trainers, International Masters (IM Prantik Roy, IM Vishal Sareen), and tournament-rated coaches (Souvick Roy Chowdhury 1966, Somnath Banerjee 1646, Ganesh Venna 1601, Sarbojeet Bhowmick 1567), our curriculum is engineered to ignite tactical creativity and disciplined critical thinking on the board and in life.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0" />
                <span>FIDE Certified Trainers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0" />
                <span>ISO Certified Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0" />
                <span>Monthly Practice Tournaments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0" />
                <span>Personalized PGN Game Reviews</span>
              </div>
            </div>

            {/* Founder / Coach Signature Profile Card */}
            <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#00aeef] shadow-md shrink-0 bg-slate-100">
                  <Image 
                    src="/images/prize-6.jpg" 
                    alt="Soumen Banerjee - Founder & Head Coach" 
                    fill 
                    className="object-cover object-top"
                    sizes="70px"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] sm:text-[11px] font-black tracking-wider text-slate-400 uppercase">
                    FOUNDER &amp; HEAD COACH, FIDE CERTIFIED TRAINER
                  </div>
                  <div className="text-base sm:text-lg font-black text-[#042047] leading-tight">
                    Soumen Banerjee
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    AIM Chess Academy · Kolkata, India
                  </div>
                </div>
              </div>

              {/* Quick Book Free Demo Pill */}
              <button
                onClick={() => openBookingModal()}
                type="button"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-xs px-4 py-2.5 rounded-full border-2 border-[#042047] shadow-sm hover:scale-105 transition-all cursor-pointer"
              >
                <span>Book Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
