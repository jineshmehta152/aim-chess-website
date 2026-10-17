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
      image: "/images/achievements/debayan-majumder-fide.jpg",
      medal: "🌟 FIDE Rating: 1489",
      medalColor: "bg-[#042047] text-[#ffe80a]",
      category: "WORLD CHESS FEDERATION (FIDE)",
      student: "Debayan Majumder (FIDE ID: 583058737)",
      tournament: "KDCA Rating Tournament",
      location: "West Bengal, India",
      date: "Official FIDE Circuit",
      score: "1489 RAPID ELO",
      ratingChange: "First Official FIDE Rating",
      desc: "Earned his first official FIDE rating from the World Chess Federation (FIDE), which is NOT easy! Faced strong rated contenders in the KDCA Rating Tournament with outstanding patience and tactical grit.",
      quote: "One thing we see in every successful chess player — PATIENCE. Yes, believe it & achieve it. Believe in the process, not just the result."
    },
    {
      id: 2,
      image: "/images/achievements/nishka-mandal-scotland-champion.jpg",
      medal: "🥇 Rank 1 Champion (5/5)",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "INTERNATIONAL (SCOTLAND, UK)",
      student: "Nishka Mandal (Scotland, UK 🏴󠁧󠁢󠁳󠁣󠁴󠁿)",
      tournament: "NEJCA Albyn Trophy 2024",
      location: "Aberdeen, Scotland, UK",
      date: "Scottish Junior Circuit",
      score: "Perfect 5 / 5 Wins",
      ratingChange: "Rank 1 Trophy & Shield",
      desc: "Captured Rank 1 in the Intermediate Girls Category at the NEJCA Albyn Trophy with a spotless 5 wins out of 5 games against Scottish junior contenders, proving our global training standards.",
      quote: "Her success is not just about winning 5 games, but a reflection of the hard work and commitment she has put into her chess journey."
    },
    {
      id: 3,
      image: "/images/achievements/samriddho-roy-champion.jpg",
      medal: "🏆 Back-to-Back Champion",
      medalColor: "bg-[#00aeef] text-white",
      category: "STATE RAPID TOURNAMENTS",
      student: "Samriddho Roy (Sandesh)",
      tournament: "All Bengal Under-15 Rapid (SBDS) & Chess Day",
      location: "Kolkata, WB",
      date: "2024 Season",
      score: "Double Trophies",
      ratingChange: "From Losses to Champion",
      desc: "Some victories take 3 years to arrive! Nearly three years ago, Sandesh joined AIM with a big dream, persevered through countless tournament losses, and emerged as a Back-to-Back Champion!",
      quote: "A loss doesn't mean you cannot do it. Sometimes, a loss simply means you haven't done it YET. Patience + Consistency + Learning + Belief = Victory."
    },
    {
      id: 4,
      image: "/images/achievements/riddhish-kanjilal-all-bengal.jpg",
      medal: "🥈 4/5 Points Podium Trophy",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "ALL BENGAL CHESS TOURNAMENT",
      student: "Riddhish Kanjilal",
      tournament: "All Bengal Chess Tournament (UEM Kolkata)",
      location: "UEM Kolkata, WB",
      date: "2024 Season",
      score: "4 / 5 Points",
      ratingChange: "Defeated 1700+ Rated",
      desc: "Scored an impressive 4/5 points in the prestigious All Bengal Chess Tournament organised by UEM Kolkata. Riddhish has defeated 1700+ rated players and is a multiple Inter-Academy winner.",
      quote: "The dream never vanished, it was just waiting for the right time to shine again. Once a champ, always a champ!"
    },
    {
      id: 5,
      image: "/images/achievements/dainika-sen-champion.png",
      medal: "🥇 Rank 1 · Under 11 Champion",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "INTER ACADEMY SHOWDOWN",
      student: "Dainika Sen",
      tournament: "Inter Academy Grand Chess Showdown Edition 3.0",
      location: "West Bengal, India",
      date: "Edition 3.0 (2025)",
      score: "RANK - 1 Trophy",
      ratingChange: "Under 11 Girls Champion",
      desc: "Captured Rank 1 and lifted the winner's trophy at the Inter Academy Grand Chess Showdown Edition 3.0, displaying fantastic tactical maturity, cool-headed calculation, and fighting spirit.",
      quote: "Congratulations on your outstanding performance and for becoming under 11 girls champion! Keep playing and keep winning!"
    },
    {
      id: 6,
      image: "/images/achievements/swastik-bhattacharya-winner.png",
      medal: "🥇 Monthly Tournament Winner",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "AIM MONTHLY TOURNAMENT",
      student: "Swastik Bhattacharya",
      tournament: "Aim Chess Academy Monthly Tournament",
      location: "Sunday 4:00 PM Batch",
      date: "May 2025",
      score: "Batch Gold Medalist",
      ratingChange: "1st Place Winner",
      desc: "Swastik captured 1st Place and the Gold Medal in the Aim Chess Academy Monthly Tournament for the Sunday 4:00 PM Batch through razor-sharp tactical combinations and solid clock management.",
      quote: "Congratulations from all of us at Aim Chess Academy – Keep aiming higher! ♟️💐"
    },
    {
      id: 7,
      image: "/images/achievements/aryaman-saha-winner.png",
      medal: "🥇 Monthly Tournament Winner",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "AIM MONTHLY TOURNAMENT",
      student: "Aryaman Saha",
      tournament: "Aim Chess Academy Monthly Tournament",
      location: "Sunday 12:30 PM Batch",
      date: "May 2025",
      score: "Batch Gold Medalist",
      ratingChange: "1st Place Winner",
      desc: "Aryaman clinched 1st Place and the Gold Medal in the Aim Chess Academy Monthly Tournament for the Sunday 12:30 PM Batch, displaying joyful sporting grit and rapid endgame calculation.",
      quote: "Congratulations from all of us at Aim Chess Academy – Keep aiming higher! ♟️💐"
    },
    {
      id: 8,
      image: "/images/achievement-2.jpg",
      medal: "🏆 3 Editions Hosted",
      medalColor: "bg-[#00aeef] text-white",
      category: "INTER-ACADEMY TOURNAMENT",
      student: "AIM Inter-Academy Cup",
      tournament: "3 Inter-Academy Tournaments 2024–2025",
      location: "Barasat Center & Online",
      date: "Annual Event",
      score: "150+ Participants",
      ratingChange: "3 Editions Successfully Held",
      desc: "Organized 3 major internal tournaments with official digital clocks, providing students with authentic tournament psychological conditioning.",
      quote: "Building sportsman spirit, resilience, and real clock decision-making skills in every child."
    },
    {
      id: 9,
      image: "/images/prize-1.jpg",
      medal: "🎖️ 20+ Podium Winners",
      medalColor: "bg-[#042047] text-[#ffe80a]",
      category: "NATIONAL & STATE JUNIORS",
      student: "AIM Champions Squad",
      tournament: "State & National Junior Chess Qualifiers",
      location: "State Selection",
      date: "2024–2025",
      score: "20+ Trophy Winners",
      ratingChange: "50+ FIDE Rated Students",
      desc: "Over 20 students secured podium prizes in prestigious external state and national tournaments, with more than 50 students maintaining official FIDE ratings.",
      quote: "A testament to structured ISO curriculum and dedicated FIDE certified coaching."
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
