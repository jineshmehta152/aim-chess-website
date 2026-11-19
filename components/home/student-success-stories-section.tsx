"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Trophy, TrendingUp, Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";

export function StudentSuccessStoriesSection() {
  const stories = [
    {
      name: "Atharva Kudva 🇺🇸",
      location: "United States 🇺🇸",
      milestone: "US Junior Tournament Trophy Winner",
      journeyTitle: "From Casual Home Play to US Tournament Champion",
      image: "/images/achievements/mark-usa-trophy.jpg",
      quote: "AIM coaching taught me how to think ahead before touching any piece and stay calm under tournament clock pressure.",
      story: "Training remotely in AIM's US Eastern/Central evening cohorts, Atharva Kudva applied disciplined opening theory and tactical calculation drills to defeat his scholastic peers and bring home the tournament championship trophy.",
      verifiableEvidence: "Verified AIM US Online Cohort · Tournament Trophy Winner",
    },
    {
      name: "Debayan Majumder",
      location: "India",
      milestone: "1489 Official FIDE Rapid Elo",
      journeyTitle: "Securing First Official FIDE Rating",
      image: "/images/achievements/debayan-majumder-fide.jpg",
      quote: "Believe in the process, not just the result. Patience was my biggest lesson at AIM.",
      story: "Debayan trained through AIM's structured tactical frameworks. Facing seasoned adult and junior competitors in the official KDCA tournament, his disciplined endgame technique delivered an impressive debut rating of 1489 Elo.",
      verifiableEvidence: "FIDE ID: 583058737 · KDCA Rating Tournament",
    },
    {
      name: "Nishka Mandal",
      location: "Aberdeen, Scotland (UK)",
      milestone: "5 / 5 Perfect Clean Sweep & Gold Trophy",
      journeyTitle: "Albyn Trophy Champion (Scotland Junior Circuit)",
      image: "/images/achievements/nishka-mandal-scotland-champion.jpg",
      quote: "Learning online with AIM gave me the confidence to play aggressively and calculate ahead.",
      story: "Attending international online evening classes from Scotland, Nishka dominated the Intermediate Girls Category at the NEJCA Albyn Trophy, defeating all 5 consecutive Scottish junior opponents.",
      verifiableEvidence: "NEJCA Albyn Trophy 2024 · Intermediate Girls Category",
    },
    {
      name: "Samriddho Roy (Sandesh)",
      location: "West Bengal, India",
      milestone: "Back-to-Back State Champion",
      journeyTitle: "From Countless Losses to Double State Champion",
      image: "/images/achievements/samriddho-roy-champion.jpg",
      quote: "A loss doesn't mean you can't do it. It simply means you haven't done it yet.",
      story: "Nearly three years ago, Samriddho faced frustrating early tournament defeats. Supported by his coaches and family through deep game reviews, he turned setbacks into back-to-back championship trophies.",
      verifiableEvidence: "SBDS All Bengal U-15 Rapid & International Chess Day Champion",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-[#042047] border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
              <span>Real Milestones · Real Students</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042047] tracking-tight">
              Substantiated Student Success Stories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              We celebrate genuine tournament grit, patience, and verified rating progress.
            </p>
          </div>

          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#0c71c3] hover:text-[#042047] transition-colors"
          >
            <span>Read All Verified Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-3xl p-6 border-2 border-slate-200/80 hover:border-[#00aeef] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#042047]/90 backdrop-blur-sm text-[#ffe80a] text-xs font-black px-3 py-1 rounded-xl truncate">
                    {story.milestone}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-black uppercase text-[#0c71c3] tracking-wider">
                    {story.location}
                  </div>
                  <h3 className="text-xl font-black text-[#042047]">
                    {story.name}
                  </h3>
                  <div className="text-xs font-bold text-slate-500 mt-0.5">
                    {story.journeyTitle}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 text-xs italic text-slate-600 leading-relaxed flex items-start gap-2">
                  <Quote className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5 not-italic" />
                  <span>&ldquo;{story.quote}&rdquo;</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {story.story}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {story.verifiableEvidence}
                </span>
                <Link href="/achievements" className="text-xs font-bold text-[#0c71c3] hover:underline">
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

