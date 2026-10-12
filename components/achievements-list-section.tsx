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
  category: "state" | "academy" | "fide" | "district" | "national" | "all";
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
    { id: "all", label: "All Achievements (6)" },
    { id: "state", label: "State & District" },
    { id: "fide", label: "FIDE Ratings" },
    { id: "academy", label: "Academy Cups" },
    { id: "national", label: "National Qualifiers" }
  ];

  const achievementsData: AchievementItem[] = [
    {
      id: 1,
      image: "/images/achievement-1.jpg",
      medal: "🥇 1st Place Champion",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "state",
      categoryLabel: "STATE LEVEL TOURNAMENT",
      student: "Aarav Mukherjee (Under-10)",
      tournament: "West Bengal State Junior Rapid Championship",
      location: "Kolkata, West Bengal",
      date: "2024 Season",
      score: "6.5 / 7 Points",
      ratingChange: "+128 FIDE Elo Gain",
      desc: "Dominated the tournament with an undefeated streak across 7 rounds, converting sharp tactical middle-games into precise rook-and-pawn endgame wins under strict time pressure.",
      quote: "Coach Soumen taught me how to stay calm in complex positions and spot king safety weaknesses.",
      keyHighlights: [
        "Undefeated run against 4 top-seeded rated juniors",
        "Mastered the Italian Game attacking motifs and knight outposts",
        "Gained +128 official rating points in a single championship weekend"
      ],
      coachReview: "Aarav showed exceptional board vision and patience in calculating 4 moves ahead during sudden-death time scrambles."
    },
    {
      id: 2,
      image: "/images/achievement-2.jpg",
      medal: "🏆 Major Event Hosted",
      medalColor: "bg-[#00aeef] text-white",
      category: "academy",
      categoryLabel: "INTER-ACADEMY TOURNAMENT",
      student: "AIM Inter-Academy Championship 2024",
      tournament: "3 Inter-Academy Tournaments 2024",
      location: "Barasat Academy Center & Global Online",
      date: "Annual Event 2024",
      score: "150+ Participants",
      ratingChange: "3 Editions Successfully Held",
      desc: "Organized 3 major internal tournaments with official digital chess clocks, Swiss-system tournament pairing software, touch-move rules, and score sheet recording for realistic tournament readiness.",
      quote: "Building sportsman spirit, resilience, and real clock decision-making skills in every child.",
      keyHighlights: [
        "150+ student participants across Beginner, Intermediate & Advanced divisions",
        "Official digital DGT clocks and FIDE-standard Swiss pairings",
        "Live game broadcasting and move-by-move diagnostic debriefs with coaches"
      ],
      coachReview: "Simulating authentic tournament pressure early eliminates competitive anxiety and turns training room skills into podium results."
    },
    {
      id: 3,
      image: "/images/prize-1.jpg",
      medal: "🌟 FIDE Milestone",
      medalColor: "bg-[#042047] text-[#ffe80a]",
      category: "fide",
      categoryLabel: "INTERNATIONAL RATING",
      student: "Rohan Sengupta & Academy Rated Squad",
      tournament: "All India FIDE Rating Open Tournament",
      location: "National Circuit",
      date: "2024",
      score: "15+ Rated Players",
      ratingChange: "Initial Rating 1450+ Elo",
      desc: "15 students from AIM Chess Academy successfully earned their official FIDE ratings through structured opening repertoires, daily calculation workouts, and endgame precision drills.",
      quote: "Achieved his dream FIDE rating within 9 months of dedicated academy mentorship.",
      keyHighlights: [
        "15+ newly minted FIDE-rated junior players in 2024",
        "Average initial rating exceeding 1450 Elo",
        "Comprehensive repertoire preparation against 1.e4 and 1.d4 setups"
      ],
      coachReview: "The milestone of obtaining an international FIDE rating proves the efficacy of our concept-based ISO curriculum."
    },
    {
      id: 4,
      image: "/images/achievement-3.jpg",
      medal: "🥇 Gold Medalist",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "district",
      categoryLabel: "DISTRICT CHAMPIONSHIP",
      student: "Sneha Das (Under-12)",
      tournament: "North 24 Parganas District Chess Championship",
      location: "Barasat, West Bengal",
      date: "2024",
      score: "5.5 / 6 Points",
      ratingChange: "Podium 1st Place",
      desc: "Secured top position in the girl's category with flawless Italian Game opening play and aggressive king-side attacking motifs, clinching the championship trophy in Round 6.",
      quote: "The personalized PGN analysis after each round helped me eliminate blunder habits.",
      keyHighlights: [
        "1st Place Gold Medal winner in Under-12 Girls division",
        "Flawless conversion of positional piece sacrifices into checkmates",
        "Selected as district representative for the State Finals"
      ],
      coachReview: "Sneha's rapid improvement in tactical calculation and tactical puzzle solving has made her an aggressive and feared competitor."
    },
    {
      id: 5,
      image: "/images/prize-6.jpg",
      medal: "🥈 Runner-Up Trophy",
      medalColor: "bg-[#0c71c3] text-white",
      category: "state",
      categoryLabel: "REGIONAL GRAND PRIX",
      student: "Aniket Roy (Under-14)",
      tournament: "Kolkata City Rapid Chess Grand Prix",
      location: "Kolkata, West Bengal",
      date: "2024",
      score: "5.0 / 6 Points",
      ratingChange: "Top 3 Podium",
      desc: "Outstanding performance against rated veterans, winning critical Rook and Pawn endgames with precise king centralization and passed-pawn technique.",
      quote: "Mastering endgame precision from IM Vishal Sareen's masterclasses made all the difference.",
      keyHighlights: [
        "Podium finish against a field of 60+ senior and junior contenders",
        "Won 3 critical technical endgames with less than 2 minutes on the clock",
        "Demonstrated deep positional understanding learned in our Advanced Course"
      ],
      coachReview: "Aniket's transition from tactical slugger to mature endgame technician is a masterclass in positional growth."
    },
    {
      id: 6,
      image: "/images/prize-6.jpg",
      medal: "🎖️ National Qualifiers",
      medalColor: "bg-[#ffe80a] text-[#042047]",
      category: "national",
      categoryLabel: "NATIONAL SCHOOL GAMES",
      student: "Junior Champions Squad",
      tournament: "National School Chess Championship Qualifiers",
      location: "State Selection Trials",
      date: "2024",
      score: "5 Selected Players",
      ratingChange: "State Representatives",
      desc: "Multiple academy students qualified to represent their district and state at the National School Chess Olympiad rounds following rigorous trial matches.",
      quote: "A testament to structured ISO curriculum and rigorous tactical training.",
      keyHighlights: [
        "5 students qualified for national state squad selections",
        "Comprehensive psychological and stamina preparation for 9-round Swiss events",
        "Personalized pre-round scouting reports prepared by academy trainers"
      ],
      coachReview: "Our team's collective discipline, opening preparation, and fighting spirit earned them the highest accolades in the state selection circuit."
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
