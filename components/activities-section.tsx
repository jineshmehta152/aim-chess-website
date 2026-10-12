"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { 
  Sparkles, 
  Trophy, 
  Award, 
  Medal, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Star,
  CheckCircle2,
  TrendingUp,
  ArrowRight
} from "lucide-react";

export default function ActivitiesSection() {
  const { openBookingModal } = useBookingModal();

  const achievements = [
    {
      id: 1,
      image: "/images/achievement-1.jpg",
      medal: "🥇 1st Place Champion",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "STATE LEVEL TOURNAMENT",
      student: "Aarav Mukherjee (Under-10)",
      tournament: "West Bengal State Junior Rapid Championship",
      location: "Kolkata, WB",
      date: "2024 Season",
      score: "6.5 / 7 Points",
      ratingChange: "+128 FIDE Elo Gain",
      desc: "Dominated the tournament with an undefeated streak, converting sharp tactical middle-games into precise endgame wins under time pressure.",
      quote: "Coach Soumen taught me how to stay calm in complex positions and spot king safety weaknesses."
    },
    {
      id: 2,
      image: "/images/achievement-2.jpg",
      medal: "🏆 Major Event Hosted",
      medalColor: "bg-[#00aeef] text-white",
      category: "INTER-ACADEMY TOURNAMENT",
      student: "AIM Inter-Academy Cup 2024",
      tournament: "3 Inter-Academy Tournaments 2024",
      location: "Barasat Center & Global Online",
      date: "Annual Event 2024",
      score: "150+ Participants",
      ratingChange: "3 Editions Successfully Held",
      desc: "Organized 3 major internal tournaments with official digital clocks, providing students with authentic tournament psychological conditioning.",
      quote: "Building sportsman spirit, resilience, and real clock decision-making skills in every child."
    },
    {
      id: 3,
      image: "/images/prize-1.jpg",
      medal: "🌟 FIDE Milestone",
      medalColor: "bg-[#042047] text-[#ffe80a]",
      category: "INTERNATIONAL RATING",
      student: "Rohan Sengupta & Team",
      tournament: "All India FIDE Rating Open Tournament",
      location: "National Circuit",
      date: "2024",
      score: "15+ Rated Players",
      ratingChange: "Initial Rating 1450+ Elo",
      desc: "15 students from AIM Chess Academy successfully earned their official FIDE ratings through structured opening repertoires and calculation practice.",
      quote: "Achieved his dream FIDE rating within 9 months of dedicated academy mentorship."
    },
    {
      id: 4,
      image: "/images/achievement-3.jpg",
      medal: "🥇 Gold Medalist",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "DISTRICT CHAMPIONSHIP",
      student: "Sneha Das (Under-12)",
      tournament: "North 24 Parganas District Chess Championship",
      location: "Barasat, WB",
      date: "2024",
      score: "5.5 / 6 Points",
      ratingChange: "Podium 1st Place",
      desc: "Secured top position in the girl's category with flawless Italian Game opening play and aggressive king-side attacking motifs.",
      quote: "The personalized PGN analysis after each round helped me eliminate blunder habits."
    },
    {
      id: 5,
      image: "/images/prize-6.jpg",
      medal: "🥈 Runner-Up Trophy",
      medalColor: "bg-[#0c71c3] text-white",
      category: "REGIONAL GRAND PRIX",
      student: "Aniket Roy (Under-14)",
      tournament: "Kolkata City Rapid Chess Grand Prix",
      location: "Kolkata, WB",
      date: "2024",
      score: "5.0 / 6 Points",
      ratingChange: "Top 3 Podium",
      desc: "Outstanding performance against rated veterans, winning critical Rook and Pawn endgames with precise king centralization.",
      quote: "Mastering endgame precision from IM Vishal Sareen's masterclasses made all the difference."
    },
    {
      id: 6,
      image: "/images/prize-6.jpg",
      medal: "🎖️ National Qualifiers",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "NATIONAL SCHOOL GAMES",
      student: "Junior Champions Squad",
      tournament: "National School Chess Championship Qualifiers",
      location: "State Selection",
      date: "2024",
      score: "5 Selected Players",
      ratingChange: "State Representatives",
      desc: "Multiple academy students qualified to represent their district and state at the National School Chess Olympiad rounds.",
      quote: "A testament to structured ISO curriculum and rigorous tactical training."
    }
  ];

  // Group into pairs (2 cards per slide)
  const slides = [];
  for (let i = 0; i < achievements.length; i += 2) {
    slides.push(achievements.slice(i, i + 2));
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scrolling timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      className="relative py-20 sm:py-28 bg-white text-[#042047] overflow-hidden" 
      id="achievements"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Accent Elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-[#ffe80a] text-[#042047] text-xs sm:text-sm font-black shadow-xs">
              <Trophy className="w-4 h-4 text-[#ffe80a] fill-[#ffe80a]" />
              <span>PROVEN TOURNAMENT SUCCESS</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#042047] tracking-tight leading-[1.2]">
              Celebrating Our{" "}
              <span className="bg-[#ffe80a] text-[#042047] font-black px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-2xl inline-block shadow-xs">
                Young Champions
              </span>
              <br />
              And Their{" "}
              <span className="bg-[#00aeef] text-white font-black px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-2xl inline-block shadow-xs mt-1">
                Glorious Victories
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
              Over 20+ podium winners in 2024, 15+ official FIDE-rated champions, and 3 successful Inter-Academy Tournaments. Here is a glimpse of our students&apos; excellence.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              aria-label="Previous achievements slide"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border-2 border-[#042047] bg-white hover:bg-[#ffe80a] text-[#042047] flex items-center justify-center shadow-[0_4px_0_0_#042047] hover:shadow-[0_6px_0_0_#042047] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next achievements slide"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border-2 border-[#042047] bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] flex items-center justify-center shadow-[0_4px_0_0_#042047] hover:shadow-[0_6px_0_0_#042047] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* 2 Cards Per Row Carousel Track */}
        <div className="relative overflow-hidden -mx-2 xs:-mx-3 sm:-mx-4 px-2 xs:px-3 sm:px-4 pt-3 pb-6">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((pair, slideIdx) => (
              <div 
                key={slideIdx} 
                className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 px-1 xs:px-2 py-2"
              >
                {pair.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[24px] sm:rounded-[32px] border-3 border-[#042047] bg-white shadow-[0_6px_0_0_#042047] sm:shadow-[0_8px_0_0_#042047] hover:shadow-[0_12px_0_0_#042047] hover:-translate-y-1 transition-all duration-300 p-4 xs:p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 relative overflow-hidden group cursor-pointer"
                    onClick={() => openBookingModal()}
                  >
                    
                    {/* Left Column: Image with Rank Medal Badge */}
                    <div className="w-full sm:w-[44%] aspect-[16/10] xs:aspect-[4/3] sm:aspect-auto sm:min-h-[320px] rounded-xl sm:rounded-3xl overflow-hidden relative border-2 border-slate-200 bg-slate-100 shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.student} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/75 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Medal Badge on Image */}
                      <div className={`absolute top-3.5 left-3.5 px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-md border border-white/30 ${item.medalColor}`}>
                        {item.medal}
                      </div>

                      {/* Small Location Chip */}
                      <div className="absolute bottom-3 left-3.5 text-white text-xs font-bold flex items-center gap-1.5 drop-shadow-md">
                        <MapPin className="w-3.5 h-3.5 text-[#ffe80a]" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Right Column: Structured Data Details */}
                    <div className="w-full sm:w-[56%] flex flex-col justify-between space-y-4 text-left py-1">
                      
                      {/* Top Category Badge */}
                      <div className="space-y-1">
                        <div className="inline-block bg-sky-50 text-[#0c71c3] border border-[#00aeef]/30 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-1">
                          {item.category}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#042047] leading-tight">
                          {item.student}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1 flex items-center gap-1.5">
                          <Trophy className="w-4 h-4 text-[#ffe80a] shrink-0" />
                          <span>{item.tournament}</span>
                        </p>
                      </div>

                      {/* Performance Metric Badges */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-2.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Result</div>
                          <div className="text-xs sm:text-sm font-black text-[#042047]">{item.score}</div>
                        </div>
                        <div className="p-2.5 bg-amber-50/80 rounded-2xl border border-[#ffe80a]/50 text-center">
                          <div className="text-[10px] font-bold text-[#042047] uppercase tracking-wider">Milestone</div>
                          <div className="text-xs sm:text-sm font-black text-[#0c71c3]">{item.ratingChange}</div>
                        </div>
                      </div>

                      {/* Description & Coach Quote */}
                      <div className="space-y-2 pt-1">
                        <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
                          {item.desc}
                        </p>
                        <p className="text-xs text-[#0c71c3] font-bold italic bg-sky-50/80 p-3 rounded-2xl border border-[#00aeef]/20">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx 
                  ? "w-8 bg-[#042047]" 
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
