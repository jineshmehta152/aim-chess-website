"use client";

import React from "react";
import { useBookingModal } from "@/context/booking-modal-context";
import { 
  ClipboardCheck, 
  Layers, 
  Video, 
  FileText, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2,
  Calendar
} from "lucide-react";

export function HowOnlineCoachingWorksSection() {
  const { openBookingModal } = useBookingModal();

  const steps = [
    {
      num: "01",
      icon: <ClipboardCheck className="w-5 h-5 text-[#00aeef]" />,
      title: "Free Diagnostic Assessment",
      desc: "A 30-minute 1-on-1 session with a certified trainer evaluating your child's board vision, calculation depth, and game habits.",
      keyOutcome: "Pinpoints exact strengths & tactical gaps",
    },
    {
      num: "02",
      icon: <Layers className="w-5 h-5 text-[#ffe80a]" />,
      title: "Level & Batch Placement",
      desc: "Matched to the ideal ISO-aligned stage (BG1–BG3, IM1–IM6, Advanced or Expert) and scheduled in your compatible time zone.",
      keyOutcome: "Aligned with peers of identical strength",
    },
    {
      num: "03",
      icon: <Video className="w-5 h-5 text-[#00aeef]" />,
      title: "Live Interactive Classes",
      desc: "Engaging 1:4 small-group sessions or 1-on-1 mentorship on our shared digital board. Every child solves actively on camera.",
      keyOutcome: "Immediate answers & mistake correction",
    },
    {
      num: "04",
      icon: <FileText className="w-5 h-5 text-[#ffe80a]" />,
      title: "Assignments & Feedback",
      desc: "Weekly puzzle assignments tailored to the lesson. Coaches review game notations and provide clear feedback on blunders.",
      keyOutcome: "Reinforces concepts between sessions",
    },
    {
      num: "05",
      icon: <TrendingUp className="w-5 h-5 text-[#00aeef]" />,
      title: "Progress Review & Tournaments",
      desc: "Continuous level progression tests, weekly academy practice tournaments, and official FIDE tournament guidance.",
      keyOutcome: "Tangible rating milestones & certificates",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-slate-50 text-[#042047] border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0c71c3] text-xs font-black uppercase tracking-wider">
            <span>Structured Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042047] tracking-tight">
            How Online Coaching Works
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium">
            A clear, 5-step pathway from your first diagnostic class to competitive tournament achievements.
          </p>
        </div>

        {/* 5 Steps Horizontal / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-5 border-2 border-slate-200/90 shadow-xs hover:border-[#00aeef] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#042047] flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-200 font-mono">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#042047] leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 text-[11px] font-bold text-[#0c71c3] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{step.keyOutcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#042047] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-black text-white">
              Ready to begin Step 1?
            </h4>
            <p className="text-xs text-slate-300">
              Schedule your child&apos;s free diagnostic evaluation with a certified FIDE trainer today.
            </p>
          </div>
          <button
            onClick={() => openBookingModal()}
            className="px-6 py-3 rounded-full bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-xs sm:text-sm uppercase tracking-wider shrink-0 transition-transform hover:scale-105 cursor-pointer"
          >
            Book Free Assessment
          </button>
        </div>

      </div>
    </section>
  );
}

