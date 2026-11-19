"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { 
  Trophy, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  ArrowRight,
  ShieldCheck,
  Calendar
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";

export function FeaturedChampionVideoSection() {
  const { openBookingModal } = useBookingModal();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setHasStarted(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-[#042047] border-b border-slate-200 overflow-hidden">
      
      {/* Subtle brand glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0c71c3] text-xs font-black uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>US Tournament Winner Spotlight</span>
            <span className="text-base leading-none">🇺🇸</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight">
            Meet Our US Champion:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#00aeef] to-[#042047]">
              Atharva Kudva 🇺🇸
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Real outcomes from our online junior cohorts. Watch Atharva Kudva proudly showcase his official tournament championship trophy and share how AIM coaching guided his winning moves.
          </p>
        </div>

        {/* Spotlight Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-8 md:p-10 border-2 border-slate-200 shadow-xl shadow-slate-900/5">
          
          {/* Left Column: Interactive Video Player (7 cols) */}
          <div className="lg:col-span-7">
            <div 
              onClick={togglePlay}
              className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#042047] border-2 border-[#00aeef]/40 shadow-2xl group cursor-pointer"
            >
              <video
                ref={videoRef}
                src="/aimchess-final.mp4"
                poster="/images/achievements/mark-usa-trophy.jpg"
                className="w-full h-full object-cover"
                playsInline
                preload="metadata"
                onEnded={() => setIsPlaying(false)}
              />

              {/* USA Flag & Champion Tag Overlay */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2 bg-[#042047]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                <span className="text-lg leading-none">🇺🇸</span>
                <span className="text-xs font-black tracking-wide">Atharva Kudva · USA Tournament Winner</span>
              </div>

              {/* Play / Pause Center Overlay Button */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-[#042047]/40 backdrop-blur-[2px] flex items-center justify-center transition-all group-hover:bg-[#042047]/30">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ffe80a] text-[#042047] flex items-center justify-center shadow-2xl shadow-yellow-500/40 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                  </div>
                </div>
              )}

              {/* Sound Control Button */}
              {hasStarted && (
                <button
                  type="button"
                  onClick={toggleMute}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-[#042047]/80 hover:bg-[#042047] text-white flex items-center justify-center transition-colors shadow-lg"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-white" />}
                </button>
              )}

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#042047] text-[11px] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>Verified AIM Online Student Interview</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tournament Context & Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header Badge */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
                <Trophy className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#042047]">Atharva Kudva</h3>
                  <span className="text-2xl" title="United States">🇺🇸</span>
                </div>
                <p className="text-xs font-bold text-[#0c71c3]">
                  USA Scholastic Junior Competitor · AIM Chess Academy
                </p>
              </div>
            </div>

            {/* Achievement Quote Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Tournament Victory Highlights</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                &ldquo;AIM Chess Academy gave Atharva the calculation discipline, blunder-check patience, and tournament opening prep to compete with composure and claim the championship trophy!&rdquo;
              </p>
            </div>

            {/* Pillar Bullets */}
            <div className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Live US Timezone Coaching:</strong> Aligned with school hours (EST/CST/PST).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>FIDE Certified Mentors:</strong> 1:4 small cohorts ensuring individual game reviews.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Scholastic Circuit Prep:</strong> Building tournament resilience under clock pressure.</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openBookingModal("Free Assessment")}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-full bg-[#042047] hover:bg-[#062c61] text-[#ffe80a] font-black text-sm tracking-tight shadow-lg shadow-slate-900/10 hover:scale-105 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#ffe80a]" />
                <span>Book a Free Assessment for Your Child</span>
                <ArrowRight className="w-4 h-4 text-[#ffe80a]" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedChampionVideoSection;

