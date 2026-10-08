"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Trophy, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  ZoomIn, 
  Camera,
  Calendar,
  CheckCircle2,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

export default function PhotoGridGallerySection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();
  
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      src: "/images/achievement-1.jpg",
      title: "West Bengal State Junior Championship",
      category: "Trophies & Podiums",
      catId: "trophies",
      badge: "🥇 1st Place Champion",
      badgeBg: "bg-[#ffe80a] text-[#042047]",
      description: "Aarav Mukherjee dominating the state junior championship with an undefeated 6.5/7 score."
    },
    {
      id: 2,
      src: "/images/achievement-2.jpg",
      title: "AIM Chess Annual Cup 2024",
      category: "Tournaments",
      catId: "tournaments",
      badge: "🏆 150+ Participants",
      badgeBg: "bg-[#00aeef] text-white",
      description: "Major inter-academy championship with official digital clocks and tournament arbiters."
    },
    {
      id: 3,
      src: "/images/prize-1.jpg",
      title: "All India FIDE Rating Trophy Celebration",
      category: "FIDE Milestones",
      catId: "fide",
      badge: "⭐ 1450+ Elo Milestone",
      badgeBg: "bg-[#042047] text-[#ffe80a]",
      description: "15 students successfully earning their official international FIDE ratings."
    },
    {
      id: 4,
      src: "/aim1.jpg",
      title: "Live Classroom Sparring & Clock Matches",
      category: "Classrooms & Training",
      catId: "classrooms",
      badge: "♟️ Tactical Drills",
      badgeBg: "bg-[#0c71c3] text-white",
      description: "Students practicing under official digital time controls with structured coach oversight."
    },
    {
      id: 5,
      src: "/images/achievement-3.jpg",
      title: "District Chess Championship Winner",
      category: "Trophies & Podiums",
      catId: "trophies",
      badge: "🥇 Gold Medalist",
      badgeBg: "bg-[#ffe80a] text-[#042047]",
      description: "Sneha Das capturing the top podium position with flawless opening and endgame play."
    },
    {
      id: 6,
      src: "/aim2.jpg",
      title: "Master Strategy & Opening Preparation",
      category: "Classrooms & Training",
      catId: "classrooms",
      badge: "🧠 Positional Mastery",
      badgeBg: "bg-[#00aeef] text-white",
      description: "Interactive session analyzing classical grandmaster games and blunder prevention."
    },
    {
      id: 7,
      src: "/images/prize-6.jpg",
      title: "Champions Squad & Trophy Ceremony",
      category: "Trophies & Podiums",
      catId: "trophies",
      badge: "🏆 Annual Squad",
      badgeBg: "bg-[#ffe80a] text-[#042047]",
      description: "Coach Soumen Banerjee celebrating major tournament victories with academy students."
    },
    {
      id: 8,
      src: "/sauman.jpeg",
      title: "FIDE Certified Trainer Mentorship",
      category: "Classrooms & Training",
      catId: "classrooms",
      badge: "👑 Founder & Mentor",
      badgeBg: "bg-[#042047] text-white",
      description: "Founder Soumen Banerjee demonstrating advanced middle-game tactical calculation."
    },
    {
      id: 9,
      src: "/images/hero.jpg",
      title: "National Circuit Match Competition",
      category: "Tournaments",
      catId: "tournaments",
      badge: "⚔️ Competitive Play",
      badgeBg: "bg-[#0c71c3] text-white",
      description: "Intense round-by-round tournament battles across regional and national open events."
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
      title: "Tactical Puzzle Workshop & Endgame Lab",
      category: "Classrooms & Training",
      catId: "classrooms",
      badge: "🎯 Calculation Depth",
      badgeBg: "bg-[#00aeef] text-white",
      description: "Solving multi-move calculation trees and theoretical rook endgame positions."
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=1200&q=80",
      title: "Opening Repertoire Demonstration Boards",
      category: "Classrooms & Training",
      catId: "classrooms",
      badge: "♟️ Opening Lab",
      badgeBg: "bg-[#0c71c3] text-white",
      description: "Detailed dissection of Italian Game, Sicilian Defense, and 1.d4 structures."
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=1200&q=80",
      title: "Official FIDE Tournament Atmosphere",
      category: "Tournaments",
      catId: "tournaments",
      badge: "🎖️ FIDE Circuit",
      badgeBg: "bg-[#042047] text-[#ffe80a]",
      description: "Authentic tournament hall condition training with digital clocks and score sheets."
    }
  ];

  const categories = [
    { id: "all", label: "All Photos (12)" },
    { id: "trophies", label: "Trophies & Podiums (3)" },
    { id: "tournaments", label: "Tournaments (3)" },
    { id: "classrooms", label: "Classrooms & Training (5)" },
    { id: "fide", label: "FIDE Milestones (1)" }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "all") return true;
    return item.catId === activeCategory;
  });

  return (
    <section className="relative py-14 sm:py-20 bg-[#f8fafc] text-[#042047] overflow-hidden" id="photo-grid">
      
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/35 text-[#0c71c3] font-black text-xs uppercase tracking-wider shadow-xs">
            <Camera className="w-4 h-4 text-[#00aeef]" />
            <span>AUTHENTIC ACADEMY MOMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
            Photo Gallery &amp;{" "}
            <span className="bg-[#ffe80a] text-[#042047] px-4 py-1 rounded-2xl inline-block shadow-sm">
              Trophy Showcase
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Explore all tournament triumphs, award ceremonies, and live classroom coaching sessions. Click any image to view in high resolution.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CATEGORY FILTER TABS                                                      */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              type="button"
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer border-[2px] ${
                activeCategory === cat.id
                  ? "bg-[#042047] text-[#ffe80a] border-[#042047] shadow-[3px_3px_0px_0px_#ffe80a]"
                  : "bg-white text-[#042047] border-slate-200 hover:border-[#042047] hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* STATIC NORMAL IMAGE GRID (NON-SCROLLING, ALL VISIBLE)                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(galleryItems.findIndex(g => g.id === item.id))}
              className="relative rounded-[28px] bg-white border-[3px] border-[#042047] shadow-[6px_6px_0px_0px_#042047] hover:shadow-[2px_2px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all p-4 sm:p-5 flex flex-col justify-between group overflow-hidden cursor-pointer"
            >
              <div className="space-y-4 text-left">
                
                {/* Image Frame */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-100 bg-slate-900 group/img">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                  
                  {/* Subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top-Left Badge */}
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider shadow-md border border-white/20 ${item.badgeBg}`}>
                    {item.badge}
                  </div>

                  {/* Top-Right Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#0c71c3]">
                    {item.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#042047] tracking-tight leading-snug group-hover:text-[#0c71c3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>AIM Chess Academy</span>
                <span className="inline-flex items-center gap-1 text-[#0c71c3] group-hover:underline">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>View Full</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* HIGH RESOLUTION LIGHTBOX MODAL                                           */}
      {/* ========================================================================= */}
      {activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#042047] border-[3.5px] border-[#00aeef] rounded-[32px] overflow-hidden shadow-2xl p-4 sm:p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative w-full aspect-[16/10] max-h-[65vh] rounded-2xl overflow-hidden border-2 border-white/20 bg-slate-900">
              <Image
                src={galleryItems[activeLightboxIndex].src}
                alt={galleryItems[activeLightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 mt-2">
              <div className="space-y-1 text-left">
                <span className="text-xs font-black uppercase text-[#ffe80a]">
                  {galleryItems[activeLightboxIndex].category} · {galleryItems[activeLightboxIndex].badge}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {galleryItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-300 font-normal">
                  {galleryItems[activeLightboxIndex].description}
                </p>
              </div>

              {/* Prev / Next Navigation */}
              <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-auto">
                <button
                  onClick={() => setActiveLightboxIndex((prev) => (prev! === 0 ? galleryItems.length - 1 : prev! - 1))}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer border border-white/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveLightboxIndex((prev) => (prev! === galleryItems.length - 1 ? 0 : prev! + 1))}
                  className="w-10 h-10 rounded-xl bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] flex items-center justify-center font-black transition-colors cursor-pointer border border-[#ffe80a]"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
