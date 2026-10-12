"use client";

import React from "react";
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Video, 
  BookOpen, 
  Swords, 
  Search, 
  FileText, 
  BarChart3, 
  Trophy, 
  MessageSquare, 
  Layers,
  Crown,
  MessageCircle
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

export default function WhatsIncludedSection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();

  const includedItems = [
    {
      id: "live-coaching",
      title: "Live Coaching",
      desc: "Real-time interactive instruction by certified FIDE trainers and titled master coaches.",
      icon: Video
    },
    {
      id: "curriculum",
      title: "Structured Curriculum",
      desc: "ISO-certified, step-by-step curriculum graded from beginner basics to international FIDE rating.",
      icon: BookOpen
    },
    {
      id: "tactics",
      title: "Tactical Exercises",
      desc: "Extensive access to 1,000+ tactical puzzles, candidate move drills, and daily puzzles.",
      icon: Swords
    },
    {
      id: "analysis",
      title: "Game Analysis",
      desc: "Move-by-move diagnostic dissection of student tournament PGN games to eliminate blunders.",
      icon: Search
    },
    {
      id: "homework",
      title: "Homework & Practice Positions",
      desc: "Targeted weekly assignments and curated endgame positions to reinforce classroom learning.",
      icon: FileText
    },
    {
      id: "tracking",
      title: "Progress Tracking",
      desc: "Regular quarterly skill evaluations and Elo rating milestone progress reports for parents.",
      icon: BarChart3
    },
    {
      id: "guidance",
      title: "Tournament Guidance",
      desc: "Official tournament calendar planning, entry consultation, and round-by-round strategy.",
      icon: Trophy
    },
    {
      id: "feedback",
      title: "Coach Feedback",
      desc: "Direct, constructive one-on-one evaluations, weakness diagnostics, and coach consultations.",
      icon: MessageSquare
    },
    {
      id: "resources",
      title: "Training Resources",
      desc: "Complete digital opening repertoires, masterclass study notes, and PGN database access.",
      icon: Layers
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-[#042047] overflow-hidden" id="whats-included">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#042047] text-[#ffe80a] font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#ffe80a] border-2 border-[#042047]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE · NO HIDDEN FEES</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
            What&apos;s Included in{" "}
            <span className="bg-[#ffe80a] text-[#042047] px-2.5 xs:px-4 py-0.5 xs:py-1 rounded-xl xs:rounded-2xl inline-block shadow-sm">
              Every Program
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base font-medium leading-relaxed max-w-2xl mx-auto px-1">
            A comprehensive, all-inclusive chess training ecosystem provided with every course enrollment.
          </p>
        </div>

        {/* 9-Item Clean Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
          {includedItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative rounded-2xl sm:rounded-[24px] bg-slate-50/70 border-2 sm:border-[2.5px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] sm:shadow-[4px_4px_0px_0px_#042047] hover:shadow-[1px_1px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all p-4 xs:p-5 sm:p-6 flex items-start gap-3.5 sm:gap-4 group"
              >
                {/* Green/Cyan Check Icon Box */}
                <div className="w-10 h-10 rounded-xl bg-[#042047] text-[#ffe80a] border-2 border-[#042047] flex items-center justify-center shrink-0 shadow-xs group-hover:rotate-6 transition-transform">
                  <Check className="w-5 h-5 stroke-[3] text-[#ffe80a]" />
                </div>

                <div className="space-y-1 min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-black text-[#042047] tracking-tight group-hover:text-[#0c71c3] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        

      </div>
    </section>
  );
}
