"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Trophy, 
  X, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";

export default function GallerySection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    { id: 1, src: "/images/achievements/debayan-majumder-fide.jpg" },
    { id: 2, src: "/images/achievements/nishka-mandal-scotland-champion.jpg" },
    { id: 3, src: "/images/achievements/samriddho-roy-champion.jpg" },
    { id: 4, src: "/images/achievements/riddhish-kanjilal-all-bengal.jpg" },
    { id: 5, src: "/images/achievements/dainika-sen-champion.png" },
    { id: 6, src: "/images/achievements/swastik-bhattacharya-winner.png" },
    { id: 7, src: "/images/achievements/aryaman-saha-winner.png" },
    { id: 8, src: "/images/achievement-1.jpg" },
    { id: 9, src: "/images/achievement-2.jpg" },
    { id: 10, src: "/images/achievement-3.jpg" },
    { id: 11, src: "/images/prize-1.jpg" },
    { id: 12, src: "/images/prize-6.jpg" },
    { id: 13, src: "/11.png" },
    { id: 14, src: "/12.png" },
    { id: 15, src: "/13.png" },
    { id: 16, src: "/14.png" },
    { id: 17, src: "/15.png" },
    { id: 18, src: "/16.png" },
    { id: 19, src: "/17.png" },
    { id: 20, src: "/18.png" },
    { id: 21, src: "/19.png" },
    { id: 22, src: "/20.png" },
    { id: 23, src: "/21.png" },
    { id: 24, src: "/22.png" },
    { id: 25, src: "/23.png" },
    { id: 26, src: "/24.png" },
    { id: 27, src: "/25.png" },
    { id: 28, src: "/26.png" }
  ];

  // Double the array for smooth infinite marquee
  const marqueeItems = [...galleryItems, ...galleryItems];

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) => (prev! === 0 ? galleryItems.length - 1 : prev! - 1));
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) => (prev! === galleryItems.length - 1 ? 0 : prev! + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, galleryItems.length]);

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

        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#042047] tracking-tight leading-[1.2]">
          Moments of Victory &amp;{" "}
          <span className="bg-[#ffe80a] text-[#042047] font-black px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-2xl inline-block shadow-xs">
            Academy Life
          </span>
        </h2>

        <p className="mt-3 text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
          Hover over any photo to pause and explore our tournament triumphs, trophy ceremonies, and classroom moments.
        </p>
      </div>

      {/* Single Line Continuous Auto-Scrolling Marquee with Normal Plain Images */}
      <div className="relative w-full overflow-hidden group py-4">
        <div className="flex gap-4 sm:gap-7 animate-marquee hover:[animation-play-state:paused] w-max px-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`item-${idx}`}
              onClick={() => setActiveLightboxIndex(idx % galleryItems.length)}
              className="w-[220px] xs:w-[260px] sm:w-[300px] md:w-[330px] aspect-[4/5] rounded-[24px] sm:rounded-[32px] overflow-hidden border-3 border-[#042047] bg-white shadow-[0_6px_0_0_#042047] sm:shadow-[0_8px_0_0_#042047] hover:shadow-[0_12px_0_0_#042047] hover:-translate-y-1.5 transition-all duration-300 relative cursor-pointer shrink-0 group"
            >
              <Image
                src={item.src}
                alt="AIM Chess Academy Photo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 340px, 480px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Plain High-Res Image, No Titles or Text) */}
      {activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#042047] border-[2.5px] sm:border-[3.5px] border-[#00aeef] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl p-3 sm:p-5 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative w-full aspect-[16/10] max-h-[75vh] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-black/40">
              <Image
                src={galleryItems[activeLightboxIndex].src}
                alt="AIM Chess Academy Photo Preview"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Prev / Next Navigation */}
            <div className="flex items-center justify-center gap-4 pt-4 w-full">
              <button
                onClick={() => setActiveLightboxIndex((prev) => (prev! === 0 ? galleryItems.length - 1 : prev! - 1))}
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setActiveLightboxIndex((prev) => (prev! === galleryItems.length - 1 ? 0 : prev! + 1))}
                className="w-11 h-11 rounded-xl bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] flex items-center justify-center font-black transition-colors cursor-pointer border border-[#ffe80a]"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
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
          animation: marquee 60s linear infinite;
        }
      `}</style>

    </section>
  );
}
