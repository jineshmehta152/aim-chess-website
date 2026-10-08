"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Trophy, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Medal,
  Award,
  ExternalLink,
  Instagram
} from "lucide-react";

export default function GallerySection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      src: "/images/achievement-1.jpg",
      title: "Inter-Academy Championship 2024",
      category: "Tournament Podium",
      badge: "🥇 1st Place",
      badgeBg: "bg-[#ffe80a] text-[#042047]"
    },
    {
      id: 2,
      src: "/images/achievement-2.jpg",
      title: "AIM Chess Annual Cup Ceremony",
      category: "Award Distribution",
      badge: "🏆 150+ Participants",
      badgeBg: "bg-[#00aeef] text-white"
    },
    {
      id: 3,
      src: "/images/prize-1.jpg",
      title: "All India FIDE Rating Champions",
      category: "FIDE Milestone",
      badge: "⭐ 1450+ Elo",
      badgeBg: "bg-[#042047] text-[#ffe80a]"
    },
    {
      id: 4,
      src: "/aim1.jpg",
      title: "Tactical Game Demonstration",
      category: "Master Classes",
      badge: "♟️ FIDE Mentorship",
      badgeBg: "bg-[#0c71c3] text-white"
    },
    {
      id: 5,
      src: "/images/achievement-3.jpg",
      title: "District Chess Championship",
      category: "State Selection",
      badge: "🥇 Gold Medalist",
      badgeBg: "bg-[#ffe80a] text-[#042047]"
    },
    {
      id: 6,
      src: "/aim2.jpg",
      title: "Rapid Clock Match Practice",
      category: "Junior Batch",
      badge: "⏱️ Clock Training",
      badgeBg: "bg-[#00aeef] text-white"
    },
    {
      id: 7,
      src: "/images/prize-6.jpg",
      title: "Champions Squad & Trophy Ceremony",
      category: "Regional Tournaments",
      badge: "🥈 2nd Place",
      badgeBg: "bg-[#0c71c3] text-white"
    },
    {
      id: 8,
      src: "/sauman.jpeg",
      title: "Interactive Demonstration with Coach",
      category: "Academy Life",
      badge: "🎯 Opening Prep",
      badgeBg: "bg-[#042047] text-white"
    }
  ];

  // Double the array for smooth infinite marquee
  const marqueeItems = [...galleryItems, ...galleryItems];

  return (
    <section className="relative py-20 sm:py-28 bg-[#f8fafc] text-[#042047] overflow-hidden" id="gallery">
      
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/30 text-[#0c71c3] text-xs sm:text-sm font-black mb-3 shadow-xs">
          <Trophy className="w-4 h-4 text-[#ffe80a] fill-[#ffe80a]" />
          <span>PHOTO GALLERY &amp; MOMENTS OF GLORY</span>
        </div>

        <h2 className="text-3xl xs:text-4xl sm:text-4xl font-black text-[#042047] tracking-tight leading-[1.2]">
          Moments of Victory &amp;{" "}
          <span className="bg-[#ffe80a] text-[#042047] font-black px-4 py-1 rounded-2xl inline-block shadow-xs">
            Academy Life
          </span>
        </h2>

        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
          Hover over any photo to pause and explore our proudest tournament triumphs, trophy ceremonies, and vibrant classroom moments.
        </p>
      </div>

      {/* Single Line Continuous Auto-Scrolling Marquee */}
      <div className="relative w-full overflow-hidden group py-4">
        <div className="flex gap-7 animate-marquee hover:[animation-play-state:paused] w-max px-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`item-${idx}`}
              onClick={() => setActiveLightboxIndex(idx % galleryItems.length)}
              className="w-[320px] sm:w-[420px] md:w-[480px] h-[340px] sm:h-[400px] md:h-[440px] rounded-[36px] overflow-hidden border-3 border-[#042047] bg-white shadow-[0_8px_0_0_#042047] hover:shadow-[0_14px_0_0_#042047] hover:-translate-y-2 transition-all duration-300 relative cursor-pointer shrink-0 group/card"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover/card:scale-108"
                sizes="(max-width: 768px) 340px, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/90 via-[#042047]/30 to-transparent opacity-85 group-hover/card:opacity-95 transition-opacity" />

              {/* Floating Top Badge */}
              <div className={`absolute top-3.5 left-3.5 px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-md border border-white/25 ${item.badgeBg}`}>
                {item.badge}
              </div>

              {/* Expand Icon on Hover */}
              <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-5 right-5 text-white text-left space-y-0.5">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#ffe80a]">
                  {item.category}
                </div>
                <h4 className="text-base sm:text-lg font-black leading-snug drop-shadow-xs">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#042047] border-3 border-[#00aeef] rounded-[32px] overflow-hidden shadow-2xl p-4 sm:p-6 text-white"
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
            <div className="relative w-full aspect-[16/10] max-h-[65vh] rounded-2xl overflow-hidden border-2 border-white/20">
              <Image
                src={galleryItems[activeLightboxIndex].src}
                alt={galleryItems[activeLightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Footer */}
            <div className="flex items-center justify-between pt-4 mt-2">
              <div className="space-y-0.5 text-left">
                <span className="text-xs font-black uppercase text-[#ffe80a]">
                  {galleryItems[activeLightboxIndex].category}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {galleryItems[activeLightboxIndex].title}
                </h3>
              </div>

              {/* Prev / Next Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveLightboxIndex((prev) => (prev! === 0 ? galleryItems.length - 1 : prev! - 1))}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveLightboxIndex((prev) => (prev! === galleryItems.length - 1 ? 0 : prev! + 1))}
                  className="w-10 h-10 rounded-xl bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] flex items-center justify-center font-black transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Marquee Keyframes CSS Styling */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 38s linear infinite;
        }
      `}</style>

    </section>
  );
}
