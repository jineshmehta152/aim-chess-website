"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  X, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";

export default function PhotoGridGallerySection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, src: "/images/achievements/debayan-majumder-fide.jpg", alt: "Debayan Majumder FIDE Rating 1489" },
    { id: 2, src: "/images/achievements/nishka-mandal-scotland-champion.jpg", alt: "Nishka Mandal Scotland Albyn Trophy Champion" },
    { id: 3, src: "/images/achievements/samriddho-roy-champion.jpg", alt: "Samriddho Roy State Level Champion" },
    { id: 4, src: "/images/achievements/riddhish-kanjilal-all-bengal.jpg", alt: "Riddhish Kanjilal All Bengal Podium Winner" },
    { id: 5, src: "/images/achievements/dainika-sen-champion.png", alt: "Dainika Sen Inter Academy Under 11 Champion" },
    { id: 6, src: "/images/achievements/swastik-bhattacharya-winner.png", alt: "Swastik Bhattacharya Monthly Tournament Gold Winner" },
    { id: 7, src: "/images/achievements/aryaman-saha-winner.png", alt: "Aryaman Saha Monthly Tournament Gold Winner" },
    { id: 8, src: "/images/achievement-1.jpg", alt: "AIM Chess Academy Achievement Trophy" },
    { id: 9, src: "/images/achievement-2.jpg", alt: "AIM Inter-Academy Tournament Squad Trophy" },
    { id: 10, src: "/images/achievement-3.jpg", alt: "AIM Chess Academy Tournament Celebration" },
    { id: 11, src: "/images/prize-1.jpg", alt: "AIM Chess Champions Squad Prize Ceremony" },
    { id: 12, src: "/images/prize-6.jpg", alt: "AIM Chess Academy Tournament Prize Winners" },
    { id: 13, src: "/11.png", alt: "AIM Chess Academy Gallery 11" },
    { id: 14, src: "/12.png", alt: "AIM Chess Academy Gallery 12" },
    { id: 15, src: "/13.png", alt: "AIM Chess Academy Gallery 13" },
    { id: 16, src: "/14.png", alt: "AIM Chess Academy Gallery 14" },
    { id: 17, src: "/15.png", alt: "AIM Chess Academy Gallery 15" },
    { id: 18, src: "/16.png", alt: "AIM Chess Academy Gallery 16" },
    { id: 19, src: "/17.png", alt: "AIM Chess Academy Gallery 17" },
    { id: 20, src: "/18.png", alt: "AIM Chess Academy Gallery 18" },
    { id: 21, src: "/19.png", alt: "AIM Chess Academy Gallery 19" },
    { id: 22, src: "/20.png", alt: "AIM Chess Academy Gallery 20" },
    { id: 23, src: "/21.png", alt: "AIM Chess Academy Gallery 21" },
    { id: 24, src: "/22.png", alt: "AIM Chess Academy Gallery 22" },
    { id: 25, src: "/23.png", alt: "AIM Chess Academy Gallery 23" },
    { id: 26, src: "/24.png", alt: "AIM Chess Academy Gallery 24" },
    { id: 27, src: "/25.png", alt: "AIM Chess Academy Gallery 25" },
    { id: 28, src: "/26.png", alt: "AIM Chess Academy Gallery 26" }
  ];

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) => (prev! === 0 ? galleryImages.length - 1 : prev! - 1));
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) => (prev! === galleryImages.length - 1 ? 0 : prev! + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, galleryImages.length]);

  return (
    <section className="relative py-12 sm:py-16 bg-[#f8fafc] text-[#042047] overflow-hidden" id="photo-grid">
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid of Normal Plain Images (No titles, text, or badges, size 4:5) */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="relative aspect-[4/5] rounded-2xl sm:rounded-[24px] overflow-hidden border-[2.5px] sm:border-[3px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[5px_5px_0px_0px_#042047] hover:shadow-[1px_1px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all bg-slate-100 group cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                src={galleryImages[activeLightboxIndex].src}
                alt={galleryImages[activeLightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Prev / Next Navigation Controls */}
            <div className="flex items-center justify-center gap-4 pt-4 w-full">
              <button
                onClick={() => setActiveLightboxIndex((prev) => (prev! === 0 ? galleryImages.length - 1 : prev! - 1))}
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setActiveLightboxIndex((prev) => (prev! === galleryImages.length - 1 ? 0 : prev! + 1))}
                className="w-11 h-11 rounded-xl bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] flex items-center justify-center font-black transition-colors cursor-pointer border border-[#ffe80a]"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
