"use client";

import React from "react";
import { ShieldCheck, Star, Trophy, Users, Award, CheckCircle2 } from "lucide-react";

export function TrustStripSection() {
  const stats = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00aeef]" />,
      value: "FIDE-Certified",
      label: "Trainer & Master Mentors",
      detail: "Direct instruction under FIDE Trainer Soumen Banerjee & International Masters",
    },
    {
      icon: <Star className="w-6 h-6 text-[#ffe80a] fill-[#ffe80a]" />,
      value: "4.9 ★ Rating",
      label: "180+ Verified Parent Reviews",
      detail: "Consistently rated 5 stars by chess parents worldwide on Google & School reviews",
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#ffe80a]" />,
      value: "50+ Podiums",
      label: "Substantiated Tournament Wins",
      detail: "State, national & international junior champions with verifiable FIDE Elo milestones",
    },
    {
      icon: <Users className="w-6 h-6 text-[#00aeef]" />,
      value: "12+ Countries",
      label: "Active Global Online Batches",
      detail: "Students actively enrolled across India, USA, UK, UAE, Australia, Canada & more",
    },
  ];

  return (
    <section className="relative bg-white border-y border-slate-200 py-6 sm:py-8 shadow-xs">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle trust disclaimer header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-2 text-[#042047] font-bold">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-wider font-black text-[#0c71c3]">
              Verified Academy Credentials &amp; Measurable Outcomes
            </span>
          </div>
          <div className="text-[11px] text-slate-500 font-medium">
            Audited for launch integrity · Real tournament results &amp; active players only
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
          {stats.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#042047] flex items-center justify-center shrink-0 shadow-md">
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0c71c3]">
                  {item.label}
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

