"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Trophy, Award, ExternalLink, ShieldCheck, Star, ArrowRight, UserCheck } from "lucide-react";

export function RatedPlayersCoachesSection() {
  const [activeTab, setActiveTab] = useState<"fide" | "achievers" | "coaches">("fide");

  const fidePlayers = [
    {
      name: "Debayan Majumder",
      fideId: "583058737",
      rating: "1489 Rapid Elo",
      ratingType: "Official FIDE Rapid",
      ratingDate: "FIDE Official Circuit",
      image: "/images/achievements/debayan-majumder-fide.jpg",
      highlight: "Earned official World Chess Federation (FIDE) rating in KDCA Rating Tournament with high tactical precision.",
      profileUrl: "https://ratings.fide.com",
    },
    {
      name: "Subham Kundu",
      fideId: "Verified FIDE Roster",
      rating: "1554 Standard Elo",
      ratingType: "Official FIDE Classical",
      ratingDate: "FIDE Rated Circuit",
      image: "/images/achievements/swastik-bhattacharya-winner.png",
      highlight: "Advanced from beginner foundations to active FIDE standard tournament competitor through structured endgame training.",
      profileUrl: "/achievements",
    },
    {
      name: "Saptarshi Roy",
      fideId: "Verified FIDE Roster",
      rating: "1484 Standard Elo",
      ratingType: "Official FIDE Classical",
      ratingDate: "FIDE Classical Circuit",
      image: "/images/achievements/aryaman-saha-winner.png",
      highlight: "Consistent tournament competitor with deep opening repertoire preparation and middle-game masterclasses at AIM.",
      profileUrl: "/achievements",
    },
  ];

  const tournamentAchievers = [
    {
      name: "Mark 🇺🇸",
      event: "US Junior Scholastic Championship",
      category: "US Scholastic Circuit (USA)",
      year: "2024",
      result: "🏆 Tournament Championship Trophy",
      image: "/images/achievements/mark-usa-trophy.jpg",
      highlight: "Trained live online in AIM's US evening batches, Mark mastered calculation depth and composure to win his tournament trophy.",
    },
    {
      name: "Nishka Mandal",
      event: "NEJCA Albyn Trophy (Scotland)",
      category: "Intermediate Girls Category",
      year: "2024",
      result: "🥇 Rank 1 Champion (Perfect 5/5 Wins)",
      image: "/images/achievements/nishka-mandal-scotland-champion.jpg",
      highlight: "Achieved a 100% clean sweep against top Scottish junior players in Aberdeen, Scotland, trained via AIM's online classroom.",
    },
    {
      name: "Samriddho Roy (Sandesh)",
      event: "All Bengal Under-15 Rapid & International Day",
      category: "State Under-15 Championship",
      year: "2024",
      result: "🏆 Back-to-Back State Champion",
      image: "/images/achievements/samriddho-roy-champion.jpg",
      highlight: "Overcame 3 years of competitive hurdles to win consecutive championship trophies with resilient tactical mental stamina.",
    },
    {
      name: "Riddhish Kanjilal",
      event: "All Bengal Tournament (UEM Kolkata)",
      category: "Junior Open Championship",
      year: "2024",
      result: "🥈 4/5 Points · Defeated 1700+ Rated Contenders",
      image: "/images/achievements/riddhish-kanjilal-all-bengal.jpg",
      highlight: "Showcased fearless attacking play to secure podium honors and multiple inter-academy tournament crowns.",
    },
    {
      name: "Dainika Sen",
      event: "Inter Academy Grand Showdown 3.0",
      category: "Under 11 Girls Championship",
      year: "2025",
      result: "🥇 Rank 1 Champion Trophy",
      image: "/images/achievements/dainika-sen-champion.png",
      highlight: "Clock-pressure mastery and disciplined piece coordination brought home the Under 11 Girls gold trophy.",
    },
  ];

  const coaches = [
    {
      name: "IM Prantik Roy",
      title: "International Master (IM)",
      experience: "Senior Tournament Coach & Tactical Strategist",
      specialization: "Advanced opening theory, dynamic pawn structures & master-level calculation",
      image: "/images/coaches/im-prantik-roy.jpg",
      rating: "International Master",
    },
    {
      name: "IM Vishal Sareen",
      title: "International Master & National Coach",
      experience: "Indian Women's Team Coach & Curriculum Advisor",
      specialization: "Elite competitive psychology, tournament game analysis & grandmaster prep",
      image: "/images/hero.jpg",
      rating: "International Master",
    },
    {
      name: "Coach Souvick Roy Chowdhury",
      title: "FIDE Rated Trainer",
      experience: "FIDE Rating: 1966 · Senior Tournament Mentor",
      specialization: "Complex middle-game tactics, piece imbalances & endgame technique",
      image: "/images/coaches/souvick-roy-chowdhury.jpg",
      rating: "FIDE 1966",
    },
    {
      name: "Coach Somnath Banerjee",
      title: "Senior Foundation Coach",
      experience: "FIDE Rating: 1646 · Mentor to 20+ FIDE Rated Students",
      specialization: "Foundation fundamentals, calculation discipline & tournament basics",
      image: "/somnath.jpeg",
      rating: "FIDE 1646",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50 text-[#042047] border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00aeef]/15 text-[#0c71c3] text-xs font-black uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Verified Player Outcomes &amp; Mentorship</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042047] tracking-tight">
              Rated Players &amp; Certified Coaches
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Authentic FIDE ratings, verified tournament podiums, and instruction by International Masters and rated mentors.
            </p>
          </div>

          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#0c71c3] hover:text-[#042047] transition-colors"
          >
            <span>Meet Our Complete Player Roster</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs max-w-md mb-8">
          <button
            onClick={() => setActiveTab("fide")}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === "fide"
                ? "bg-[#042047] text-white shadow-xs"
                : "text-slate-600 hover:text-[#042047]"
            }`}
          >
            FIDE-Rated Students
          </button>
          <button
            onClick={() => setActiveTab("achievers")}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === "achievers"
                ? "bg-[#042047] text-white shadow-xs"
                : "text-slate-600 hover:text-[#042047]"
            }`}
          >
            Tournament Achievers
          </button>
          <button
            onClick={() => setActiveTab("coaches")}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === "coaches"
                ? "bg-[#042047] text-white shadow-xs"
                : "text-slate-600 hover:text-[#042047]"
            }`}
          >
            Coaches &amp; Titled Mentors
          </button>
        </div>

        {/* Tab 1: FIDE-Rated Players */}
        {activeTab === "fide" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {fidePlayers.map((player, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 w-full bg-slate-900">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 bg-[#042047]/95 backdrop-blur-md text-[#ffe80a] text-xs font-black px-3 py-1 rounded-full border border-white/20 shadow-md">
                    {player.rating}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-[#042047] text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs">
                    {player.ratingType}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-black text-[#042047]">
                      {player.name}
                    </h3>
                    <div className="text-xs font-bold text-[#0c71c3] mt-0.5">
                      FIDE ID: {player.fideId}
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {player.highlight}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-slate-400">
                      {player.ratingDate}
                    </span>
                    <Link
                      href="/achievements"
                      className="inline-flex items-center gap-1 font-bold text-[#0c71c3] hover:underline text-xs"
                    >
                      <span>Verified Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Tournament Achievers */}
        {activeTab === "achievers" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-200">
            {tournamentAchievers.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 w-full bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#042047]/90 backdrop-blur-sm text-white text-[11px] font-black px-2.5 py-1 rounded-xl truncate">
                    {item.result}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="text-[10px] uppercase font-black tracking-wider text-[#0c71c3]">
                      {item.event} · {item.year}
                    </div>
                    <h3 className="text-base font-black text-[#042047] mt-0.5">
                      {item.name}
                    </h3>
                    <div className="text-xs text-slate-500 font-semibold">
                      {item.category}
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.highlight}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Verified Result
                    </span>
                    <Link href="/achievements" className="text-xs font-bold text-[#0c71c3] hover:underline">
                      Read Journey →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Coaches & Titled Mentors */}
        {activeTab === "coaches" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-200">
            {coaches.map((coach, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 w-full bg-slate-900">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute top-3 right-3 bg-[#ffe80a] text-[#042047] text-xs font-black px-2.5 py-0.5 rounded-full shadow-xs">
                    {coach.rating}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="text-base font-black text-[#042047]">
                      {coach.name}
                    </h3>
                    <div className="text-xs font-black text-[#0c71c3]">
                      {coach.title}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">
                      {coach.experience}
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      <strong>Focus:</strong> {coach.specialization}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href="/about#coaches"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#042047] hover:text-[#00aeef]"
                    >
                      <span>Full Mentor Bio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

