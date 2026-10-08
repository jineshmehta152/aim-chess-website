"use client";

import React from "react";
import { 
  Sparkles, 
  Users, 
  UserCheck, 
  Laptop, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  MessageCircle,
  Clock,
  ShieldCheck,
  Zap,
  Globe,
  Swords
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

export default function ClassFormatsSection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();

  const formats = [
    {
      id: "group",
      title: "Group Classes",
      tagline: "Interactive sessions with other students at a similar level.",
      badge: "POPULAR & ENGAGING",
      badgeColor: "bg-[#ffe80a] text-[#042047]",
      icon: Users,
      iconBg: "bg-[#ffe80a]",
      iconColor: "text-[#042047]",
      classSize: "Small Batches (4-6 Students)",
      frequency: "2 Classes / Week",
      features: [
        "Peer sparring and collaborative problem solving",
        "Students grouped strictly by age & skill level",
        "Healthy competitive motivation & interactive games",
        "Weekly internal sparring matches with clock controls"
      ],
      whatsappMsg: "Hi, I would like to inquire about Group Classes."
    },
    {
      id: "individual",
      title: "1-on-1 Coaching",
      tagline: "Personalised training focused entirely on the student's goals.",
      badge: "100% PERSONALIZED",
      badgeColor: "bg-[#00aeef] text-white",
      icon: UserCheck,
      iconBg: "bg-[#00aeef]",
      iconColor: "text-white",
      classSize: "Private 1-on-1 Session",
      frequency: "1 or 2 Sessions / Week",
      features: [
        "100% customized syllabus tailored to child's pace",
        "In-depth micro-analysis of personal tournament games",
        "Dedicated opening repertoire built for their style",
        "Flexible scheduling & direct parent consultations"
      ],
      whatsappMsg: "Hi, I would like to inquire about 1-on-1 Private Coaching."
    },
    {
      id: "online",
      title: "Online Chess Classes",
      tagline: "Learn from home with live coaching and digital training tools.",
      badge: "GLOBAL CLASSROOMS",
      badgeColor: "bg-[#0c71c3] text-white",
      icon: Globe,
      iconBg: "bg-[#0c71c3]",
      iconColor: "text-white",
      classSize: "Interactive Digital Batches",
      frequency: "Flexible Weekly Slots",
      features: [
        "Live interactive digital boards & screen sharing",
        "Play and analyze games in real-time with coach",
        "Learn from the comfort of home across any time zone",
        "Access to digital puzzle vaults and class recordings"
      ],
      whatsappMsg: "Hi, I would like to inquire about Online Chess Classes."
    },
    {
      id: "tournament",
      title: "Tournament Training",
      tagline: "Focused preparation for players competing in rated events.",
      badge: "FIDE COMPETITIVE PREP",
      badgeColor: "bg-[#042047] text-[#ffe80a]",
      icon: Swords,
      iconBg: "bg-[#042047]",
      iconColor: "text-[#ffe80a]",
      classSize: "Tournament Master Batch",
      frequency: "Intensive Practice Cycles",
      features: [
        "Official digital clocks & score sheet notation drills",
        "Psychological conditioning for tournament pressure",
        "Pre-round opponent scouting and customized prep",
        "FIDE rating roadmap and tournament calendar planning"
      ],
      whatsappMsg: "Hi, I would like to inquire about Tournament Training."
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#f8fafc] text-[#042047] overflow-hidden" id="class-formats">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/35 text-[#0c71c3] font-black text-xs uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>FLEXIBLE LEARNING PATHWAYS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
            Class Formats:{" "}
            <span className="bg-[#ffe80a] text-[#042047] px-4 py-1 rounded-2xl inline-block shadow-sm">
              Ways You Can Learn
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Whether you prefer interactive group batches, private 1-on-1 mentorship, or online home classes, we have the ideal format for your child.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {formats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative rounded-[32px] bg-white border-[3px] border-[#042047] shadow-[6px_6px_0px_0px_#042047] hover:shadow-[2px_2px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all p-6 sm:p-7 flex flex-col justify-between group overflow-hidden"
              >
                <div className="space-y-4 text-left">
                  
                  {/* Top Header: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} ${item.iconColor} border-2 border-[#042047] shadow-[2px_2px_0px_0px_#042047] flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                      <Icon className="w-6 h-6 stroke-[2.3]" />
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-lg font-black text-[10px] uppercase tracking-wider border border-[#042047]/20 ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight group-hover:text-[#0c71c3] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-bold text-slate-600 leading-snug">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Frequency & Size Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-bold text-[#042047] border border-slate-200">
                      👥 {item.classSize}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#e0f2fe] text-[11px] font-bold text-[#0c71c3] border border-[#00aeef]/30">
                      ⏱ {item.frequency}
                    </span>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <ul className="space-y-2 text-xs text-slate-700 font-medium">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Footer Action Button */}
                <div className="pt-6 mt-6 border-t-2 border-slate-100 space-y-2">
                  <button
                    onClick={() => openBookingModal()}
                    type="button"
                    className="w-full py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider bg-[#ffe80a] hover:bg-[#ffd600] text-[#042047] border-2 border-[#042047] shadow-[2px_2px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Choose Format</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
