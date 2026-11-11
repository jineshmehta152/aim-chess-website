"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";
import { 
  Trophy, 
  Medal, 
  Award, 
  Sparkles, 
  Star, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  CheckCircle2, 
  Target, 
  Zap, 
  ShieldCheck, 
  Quote, 
  ArrowRight,
  GraduationCap,
  Layers,
  ChevronRight
} from "lucide-react";
import GallerySection from "./gallery-section";

interface AchievementItem {
  id: number;
  image: string;
  medal: string;
  medalColor: string;
  category: "state" | "academy" | "fide" | "district" | "national" | "international" | "all";
  categoryLabel: string;
  student: string;
  tournament: string;
  location: string;
  date: string;
  score: string;
  ratingChange: string;
  desc: string;
  quote: string;
  keyHighlights: string[];
  coachReview: string;
}

export default function AchievementsListSection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Achievements (10)" },
    { id: "fide", label: "Official FIDE Ratings" },
    { id: "international", label: "International (USA 🇺🇸 & Scotland/UK 🏴󠁧󠁢󠁳󠁣󠁴󠁿)" },
    { id: "state", label: "State & All Bengal" },
    { id: "academy", label: "Academy Cups & Showdowns" }
  ];

  const achievementsData: AchievementItem[] = [
    {
      id: 10,
      image: "/images/achievements/mark-usa-trophy.jpg",
      medal: "🏆 Tournament Winner",
      medalColor: "bg-[#042047] text-[#ffe80a]",
      category: "international",
      categoryLabel: "INTERNATIONAL SCHOLASTIC TOURNAMENT (USA 🇺🇸)",
      student: "Mark 🇺🇸",
      tournament: "US Junior Scholastic Championship",
      location: "United States (US Online Cohort)",
      date: "2024 Season",
      score: "Championship Trophy Winner",
      ratingChange: "US Scholastic Podium",
      desc: "Our young champion Mark from the United States proudly secured his championship trophy in his junior tournament! Coached live online by AIM Chess Academy's FIDE trainers, Mark mastered calculation depth, opening traps, and endgame composure to claim the winner's podium.",
      quote: "AIM Chess Academy helped me spot tactical combinations fast, stay calm with the clock running, and win my tournament trophy!",
      keyHighlights: [
        "Championship Trophy Winner in competitive US junior scholastic chess circuit",
        "Trained online through AIM's US time-zone evening batches with personalized coach review",
        "Demonstrates tactical patience, blunder prevention, and active endgame technique"
      ],
      coachReview: "Team AIM is immensely proud of Mark! His dedication to solving weekly tactical puzzles and applying our opening frameworks delivered this wonderful tournament championship trophy."
    },
    {
      id: 1,
      image: "/images/achievements/debayan-majumder-fide.jpg",
      medal: "🌟 FIDE Rating: 1489",
      medalColor: "bg-[#042047] text-[#ffe80a]",
      category: "fide",
      categoryLabel: "WORLD CHESS FEDERATION (FIDE) RATING",
      student: "Debayan Majumder (FIDE ID: 583058737)",
      tournament: "KDCA Rating Tournament",
      location: "West Bengal, India",
      date: "Official FIDE Circuit",
      score: "1489 RAPID ELO",
      ratingChange: "First Official FIDE Rating",
      desc: "Debayan earned his first official FIDE rating from the World Chess Federation (FIDE), which is NOT easy! Facing seasoned rated opponents in the KDCA Rating Tournament, his hard work, dedication, and patience delivered an outstanding debut rating of 1489 Rapid Elo.",
      quote: "One thing we see in every successful chess player — PATIENCE. Yes, believe it & achieve it. Believe in the process, not just the result.",
      keyHighlights: [
        "Earned first official FIDE Rapid Rating of 1489 Elo (FIDE ID: 583058737, Birth Year: 2013)",
        "Faced strong rated contenders in the competitive KDCA Rating Tournament",
        "Trained under structured ISO opening and middle-game tactical frameworks at AIM"
      ],
      coachReview: "Team AIM Chess Academy is extremely happy & proud of your outstanding achievement! Many ways to go, many dreams to achieve! Keep up the patience and dedication."
    },
    {
      id: 2,
      image: "/images/achievements/nishka-mandal-scotland-champion.jpg",
      medal: "🥇 Rank 1 Champion (5/5)",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "international",
      categoryLabel: "INTERNATIONAL TOURNAMENT (SCOTLAND, UK)",
      student: "Nishka Mandal (Scotland, UK 🏴󠁧󠁢󠁳󠁣󠁴󠁿)",
      tournament: "NEJCA Albyn Trophy 2024 (Scotland Chess Federation)",
      location: "Aberdeen, Scotland, UK",
      date: "Scottish Junior Circuit",
      score: "Perfect 5 / 5 Wins (100%)",
      ratingChange: "Rank 1 Trophy & Shield",
      desc: "Our young champion Nishka Mandal from Scotland made the entire AIM Chess Academy proud by capturing Rank 1 in the Intermediate Girls Category at the NEJCA Albyn Trophy. She achieved a flawless clean sweep with 5 consecutive wins out of 5 games against Scottish junior contenders.",
      quote: "Many children dream, but only a few have the discipline, dedication, consistency and determination to turn their dreams into reality. Nishka is one of those rare young players.",
      keyHighlights: [
        "Rank 1 Gold Champion & Albyn Shield Winner (Intermediate Girls Category)",
        "Flawless 5/5 score defeating Aditi Desai, Ananya Vayyuru, Laasya Mopidevi, Liubomyla Chetverikova & Khushi Narra",
        "Demonstrates the world-class standard of AIM Chess Academy's international online classrooms"
      ],
      coachReview: "The entire AIM Chess Academy family is incredibly proud of you! Her success is a reflection of hard work and commitment. This is only the beginning... Many more success stories await!"
    },
    {
      id: 3,
      image: "/images/achievements/samriddho-roy-champion.jpg",
      medal: "🏆 Back-to-Back Champion",
      medalColor: "bg-[#00aeef] text-white",
      category: "state",
      categoryLabel: "STATE LEVEL RAPID TOURNAMENTS",
      student: "Samriddho Roy (Sandesh)",
      tournament: "All Bengal Under-15 Rapid (SBDS) & International Chess Day",
      location: "Kolkata, West Bengal",
      date: "2024 Season",
      score: "Double Championship Trophies",
      ratingChange: "From Countless Losses to Champion",
      desc: "Some victories take 3 years to arrive! Nearly three years ago, a little boy joined AIM Chess Academy with a big dream and faced countless tournament losses, moments of doubt, and times when he even thought of quitting. Supported unconditionally by his parents through family challenges, his perseverance turned setbacks into back-to-back championship victories!",
      quote: "A loss doesn't mean you cannot do it. Sometimes, a loss simply means you haven't done it YET. Patience + Consistency + Learning + Belief = Victory.",
      keyHighlights: [
        "Champion: All Bengal Under-15 Rapid Chess Tournament under SBDS",
        "Champion: International Chess Day Tournament (Back-to-Back Titles)",
        "Overcame early setbacks through 3 years of persistent coaching and family belief"
      ],
      coachReview: "Sandesh, you may have taken a little longer than some others. But that's okay. Everyone has their own timeline. Keep playing. Keep learning. Keep fighting!"
    },
    {
      id: 4,
      image: "/images/achievements/riddhish-kanjilal-all-bengal.jpg",
      medal: "🥈 4/5 Points Podium Trophy",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "state",
      categoryLabel: "ALL BENGAL CHESS TOURNAMENT",
      student: "Riddhish Kanjilal",
      tournament: "All Bengal Chess Tournament (Organised by UEM Kolkata)",
      location: "Kolkata, West Bengal",
      date: "2024 Season",
      score: "4 / 5 Points (Well Played!)",
      ratingChange: "Defeated 1700+ Rated Players",
      desc: "Scored an impressive 4/5 points in the prestigious All Bengal Chess Tournament organised by University of Engineering & Management (UEM), Kolkata. Riddhish has defeated 1700+ rated players in open events and is a multiple Inter-Academy tournament winner.",
      quote: "The dream never vanished, it was just waiting for the right time to shine again. Once a champ, always a champ!",
      keyHighlights: [
        "Scored 4 / 5 points in high-stakes All Bengal Chess Tournament at UEM Kolkata",
        "Defeated 1700+ rated players in competitive match play",
        "Multiple Inter-Academy Tournament Winner known for relentless fighting spirit"
      ],
      coachReview: "At AIM Chess Academy, we don't just teach chess, we build a family. Riddhish's passion, hard work, and love for the game inspire us every single day."
    },
    {
      id: 5,
      image: "/images/achievements/dainika-sen-champion.png",
      medal: "🥇 Rank 1 · Under 11 Champion",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "academy",
      categoryLabel: "INTER ACADEMY GRAND CHESS SHOWDOWN",
      student: "Dainika Sen",
      tournament: "Inter Academy Grand Chess Showdown Edition 3.0 – Winner 2025",
      location: "West Bengal, India",
      date: "Edition 3.0 (2025)",
      score: "RANK - 1 (Champion Trophy)",
      ratingChange: "Under 11 Girls Champion",
      desc: "Dainika Sen delivered an outstanding championship run to capture Rank 1 and become the Under 11 Girls Champion at the Inter Academy Grand Chess Showdown Edition 3.0. Holding her winner's trophy high in her official AIM Academy jersey, she showcased exceptional tactical calculation, cool composure under clock pressure, and true championship determination.",
      quote: "Congratulations on your outstanding performance and for becoming under 11 girls champion! Keep playing and keep winning!",
      keyHighlights: [
        "Rank 1 Winner & Trophy Champion at Inter Academy Grand Chess Showdown Edition 3.0",
        "Crowned Under 11 Girls Champion against top juniors from regional chess academies",
        "Trained under structured tactical exercises and endgame technique at AIM Chess Academy"
      ],
      coachReview: "Congratulations Dainika on your outstanding performance and for becoming under 11 girls champion! Keep playing and keep winning!"
    },
    {
      id: 6,
      image: "/images/achievements/swastik-bhattacharya-winner.png",
      medal: "🥇 Monthly Tournament Winner",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "academy",
      categoryLabel: "AIM CHESS ACADEMY MONTHLY TOURNAMENT",
      student: "Swastik Bhattacharya",
      tournament: "Aim Chess Academy Monthly Tournament – May 2025",
      location: "Sunday 4:00 PM Batch",
      date: "May 2025",
      score: "Gold Medalist (1st Place)",
      ratingChange: "Sunday 4:00 PM Batch Winner",
      desc: "Swastik Bhattacharya emerged as the proud Gold Medal Winner in the Aim Chess Academy Monthly Tournament (May 2025) for the Sunday 4:00 PM Batch. His attacking clarity, solid piece coordination, and tournament clock handling led him straight to 1st place.",
      quote: "Congratulations from all of us at Aim Chess Academy – Keep aiming higher! ♟️💐",
      keyHighlights: [
        "Aim Chess Academy Monthly Tournament Winner – May 2025 (Gold Medal)",
        "Champion of Sunday 4:00 PM Batch",
        "Demonstrated sharp middle-game planning and resilient defensive technique"
      ],
      coachReview: "Congratulations from all of us at Aim Chess Academy – Keep aiming higher! ♟️💐"
    },
    {
      id: 7,
      image: "/images/achievements/aryaman-saha-winner.png",
      medal: "🥇 Monthly Tournament Winner",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "academy",
      categoryLabel: "AIM CHESS ACADEMY MONTHLY TOURNAMENT",
      student: "Aryaman Saha",
      tournament: "Aim Chess Academy Monthly Tournament – May 2025",
      location: "Sunday 12:30 PM Batch",
      date: "May 2025",
      score: "Gold Medalist (1st Place)",
      ratingChange: "Sunday 12:30 PM Batch Winner",
      desc: "Aryaman Saha clinched 1st Place and the Gold Medal in the Aim Chess Academy Monthly Tournament (May 2025) for the Sunday 12:30 PM Batch. His joyful dedication, rapid calculation, and sporting attitude earned him top honors among his peers.",
      quote: "Congratulations from all of us at Aim Chess Academy – Keep aiming higher! ♟️💐",
      keyHighlights: [
        "Aim Chess Academy Monthly Tournament Winner – May 2025 (Gold Medal)",
        "Champion of Sunday 12:30 PM Batch",
        "Exemplary sporting conduct, disciplined time management, and tactical precision"
      ],
      coachReview: "Congratulations from all of us at Aim Chess Academy – Keep aiming higher! ♟️💐"
    },
    {
      id: 8,
      image: "/images/achievement-2.jpg",
      medal: "🏆 3 Editions Hosted",
      medalColor: "bg-[#00aeef] text-white",
      category: "academy",
      categoryLabel: "INTER-ACADEMY TOURNAMENTS",
      student: "AIM Inter-Academy Tournament Squad",
      tournament: "3 Major Inter-Academy Tournaments 2024–2025",
      location: "Barasat Academy Center & Online",
      date: "Annual Events",
      score: "150+ Participants",
      ratingChange: "3 Editions Successfully Held",
      desc: "Organized 3 major internal tournaments with official digital chess clocks, Swiss-system pairing software, touch-move rules, and score sheet recording for realistic tournament readiness.",
      quote: "Building sportsman spirit, resilience, and real clock decision-making skills in every child.",
      keyHighlights: [
        "150+ student participants across Beginner, Intermediate & Advanced divisions",
        "Official digital DGT clocks and FIDE-standard Swiss pairings",
        "Live game broadcasting and move-by-move diagnostic debriefs with coaches"
      ],
      coachReview: "Simulating authentic tournament pressure early eliminates competitive anxiety and turns training room skills into podium results."
    },
    {
      id: 9,
      image: "/images/prize-1.jpg",
      medal: "🎖️ 20+ Podium Winners",
      medalColor: "bg-[#042047] text-[#ffe80a]",
      category: "national",
      categoryLabel: "NATIONAL & STATE JUNIOR CIRCUIT",
      student: "AIM Champions Squad",
      tournament: "State & National Junior Chess Qualifiers",
      location: "State Selection Trials",
      date: "2024–2025",
      score: "20+ Trophy Winners",
      ratingChange: "50+ FIDE Rated Students",
      desc: "Over 20 students secured podium prizes in prestigious external state and national tournaments, while more than 50 students across our online and offline classrooms actively maintain official FIDE ratings.",
      quote: "A testament to structured ISO curriculum and dedicated FIDE certified coaching.",
      keyHighlights: [
        "20+ external tournament winners across district, state, and national events",
        "50+ students with official FIDE international Elo ratings",
        "Comprehensive pre-round scouting reports and PGN blunder diagnostics"
      ],
      coachReview: "Our team's collective discipline, opening preparation, and fighting spirit earned them the highest accolades in competitive chess."
    }
  ];

  const filteredAchievements = activeFilter === "all" 
    ? achievementsData 
    : achievementsData.filter(item => {
        if (activeFilter === "state") return item.category === "state" || item.category === "district";
        return item.category === activeFilter;
      });

  return (
    <section className="relative py-14 sm:py-20 bg-[#f8fafc] text-[#042047] overflow-hidden" id="achievements-showcase">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 -left-28 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-28 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-28 w-96 h-96 bg-[#0c71c3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* SUMMARY STATS BAR (4 Pillars)                                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="rounded-2xl sm:rounded-[24px] bg-white border-2 sm:border-[2.5px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] sm:shadow-[4px_4px_0px_0px_#042047] p-3.5 sm:p-5 text-center space-y-1">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#042047]">20+</div>
            <div className="text-[10px] xs:text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Podium Winners 2024</div>
          </div>
          <div className="rounded-2xl sm:rounded-[24px] bg-[#042047] text-white border-2 sm:border-[2.5px] border-[#042047] shadow-[3px_3px_0px_0px_#00aeef] sm:shadow-[4px_4px_0px_0px_#00aeef] p-3.5 sm:p-5 text-center space-y-1">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#ffe80a]">15+</div>
            <div className="text-[10px] xs:text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">FIDE Rated Champions</div>
          </div>
          <div className="rounded-2xl sm:rounded-[24px] bg-white border-2 sm:border-[2.5px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] sm:shadow-[4px_4px_0px_0px_#042047] p-3.5 sm:p-5 text-center space-y-1">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#0c71c3]">3+</div>
            <div className="text-[10px] xs:text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Major Academy Tournaments</div>
          </div>
          <div className="rounded-2xl sm:rounded-[24px] bg-[#ffe80a] text-[#042047] border-2 sm:border-[2.5px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] sm:shadow-[4px_4px_0px_0px_#042047] p-3.5 sm:p-5 text-center space-y-1">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#042047]">500+</div>
            <div className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#042047]/80 uppercase tracking-wider">Students Coached</div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FILTER CATEGORY PILLS                                                     */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-4 rounded-2xl sm:rounded-[28px] border-2 sm:border-[2.5px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] sm:shadow-[4px_4px_0px_0px_#042047] max-w-2xl mx-auto">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                type="button"
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer border-[2px] ${
                  isSelected
                    ? "bg-[#042047] text-[#ffe80a] border-[#042047] shadow-[2px_2px_0px_0px_#ffe80a] sm:shadow-[3px_3px_0px_0px_#ffe80a]"
                    : "bg-slate-50 text-[#042047] border-slate-200 hover:border-[#042047] hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 1 CARD PER ROW: FULL-WIDTH COMPACT SHOWCASE STACK                          */}
        {/* ========================================================================= */}
        <div className="space-y-6 sm:space-y-7">
          {filteredAchievements.map((item, index) => (
            <div
              key={item.id}
              className="rounded-2xl sm:rounded-[32px] border-2 sm:border-[3px] border-[#042047] bg-white shadow-[4px_4px_0px_0px_#042047] sm:shadow-[6px_6px_0px_0px_#042047] hover:shadow-[10px_10px_0px_0px_#042047] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden text-left"
            >
              
              {/* Card Container: 2-Column Responsive Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* ----------------------------------------------------------------- */}
                {/* LEFT: Visual Showcase (4 Columns, Compact Height)                 */}
                {/* ----------------------------------------------------------------- */}
                <div className="lg:col-span-4 relative min-h-[220px] sm:min-h-[260px] lg:min-h-full bg-slate-900 overflow-hidden border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-[#042047] group">
                  <Image 
                    src={item.image} 
                    alt={item.student}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 420px"
                    priority={index < 2}
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042047] via-[#042047]/30 to-transparent pointer-events-none" />

                  {/* Floating Rank Medal Badge */}
                  <div className={`absolute top-3.5 left-3.5 px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-md border border-white/40 ${item.medalColor}`}>
                    {item.medal}
                  </div>

                  {/* Index Counter Badge */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-xl bg-[#042047]/85 backdrop-blur-md text-[#ffe80a] border border-white/30 font-black text-xs flex items-center justify-center shadow-sm">
                    #{item.id}
                  </div>

                  {/* Bottom Overlay Info on Image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-1 drop-shadow-md">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#ffe80a]">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-[#ffe80a]" />
                      <span>{item.location}</span>
                      <span className="text-white/60">·</span>
                      <Calendar className="w-3.5 h-3.5 shrink-0 text-[#ffe80a]" />
                      <span>{item.date}</span>
                    </div>
                    <div className="text-sm sm:text-base font-black text-white leading-tight line-clamp-1">
                      {item.tournament}
                    </div>
                  </div>
                </div>

                {/* ----------------------------------------------------------------- */}
                {/* RIGHT: Compact Tournament Report & Data (8 Columns)               */}
                {/* ----------------------------------------------------------------- */}
                <div className="lg:col-span-8 p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-4">
                  
                  {/* Top Header Information */}
                  <div className="space-y-2">
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-sky-50 text-[#0c71c3] border border-[#00aeef]/40 text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3 text-[#00aeef]" />
                        {item.categoryLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-amber-50 text-[#042047] border border-[#ffe80a] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                        <Trophy className="w-3 h-3 text-amber-500 fill-amber-500" />
                        VERIFIED RECORD
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight leading-tight">
                      {item.student}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                  {/* Performance Metric Data Row (Compact) */}
                  <div className="grid grid-cols-2 gap-3">
                    
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <Target className="w-3.5 h-3.5 text-[#00aeef]" />
                        <span>Championship Score</span>
                      </div>
                      <div className="text-base sm:text-lg font-black text-[#042047] mt-0.5">
                        {item.score}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50/70 border border-[#ffe80a]">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#042047] uppercase tracking-wider">
                        <TrendingUp className="w-3.5 h-3.5 text-[#0c71c3]" />
                        <span>Rating / Milestone</span>
                      </div>
                      <div className="text-base sm:text-lg font-black text-[#0c71c3] mt-0.5">
                        {item.ratingChange}
                      </div>
                    </div>

                  </div>

                  {/* Coach Quote & Highlights In Compact Format */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-sky-50/70 border border-[#00aeef]/30 flex items-start gap-2.5">
                    <Quote className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-black text-[#0c71c3] uppercase tracking-wider">
                        Coach Assessment
                      </div>
                      <p className="text-xs text-slate-700 italic font-medium leading-snug">
                        &ldquo;{item.coachReview}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5 border-t border-slate-100">
                    <button
                      onClick={() => openBookingModal()}
                      type="button"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black px-5 py-2.5 rounded-xl text-xs border-2 border-[#042047] shadow-[2px_2px_0px_0px_#042047] hover:shadow-[4px_4px_0px_0px_#042047] transition-all cursor-pointer uppercase tracking-wider"
                    >
                      <GraduationCap className="w-4 h-4 text-[#042047]" />
                      <span>Book Free Demo Assessment</span>
                    </button>

                    <Link
                      href="/courses"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#042047] font-black px-4 py-2.5 rounded-xl text-xs border-2 border-slate-300 hover:border-[#042047] transition-all cursor-pointer uppercase tracking-wider"
                    >
                      <span>Explore Programs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>
        <GallerySection/>

        {/* ========================================================================= */}
        {/* BOTTOM MOTIVATIONAL CTA BANNER                                            */}
        {/* ========================================================================= */}
        <div className="rounded-[36px] bg-[#042047] text-white p-8 sm:p-12 border-[3.5px] border-[#00aeef] shadow-[8px_8px_0px_0px_#00aeef] text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffe80a] text-[#042047] font-black text-xs uppercase tracking-wider">
            <Zap className="w-4 h-4 fill-[#042047]" />
            <span>START YOUR CHILD&apos;S CHESS JOURNEY</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Your Child Could Be Our Next{" "}
            <span className="text-[#ffe80a]">Tournament Champion</span>
          </h3>

          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Experience our proven visual coaching methodology, FIDE certified trainers, and personalized progress roadmap in a 100% free 30-minute evaluation session.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openBookingModal()}
              type="button"
              className="inline-flex items-center gap-2 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black px-8 py-4 rounded-2xl text-sm border-2 border-[#042047] shadow-lg hover:scale-105 transition-all cursor-pointer uppercase tracking-wider"
            >
              <GraduationCap className="w-5 h-5 text-[#042047]" />
              <span>Book 30-Min Free Demo</span>
            </button>

            <a
              href={getWhatsAppUrl("Hi Coach, I saw your students' achievements and would like to enroll my child in AIM Chess Academy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-4 rounded-2xl text-sm shadow-lg hover:scale-105 transition-all uppercase tracking-wider"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
