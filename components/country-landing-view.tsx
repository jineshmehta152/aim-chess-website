"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import PageBanner from "@/components/page-banner";
import { useBookingModal } from "@/context/booking-modal-context";
import { 
  Globe2, 
  Clock, 
  CreditCard, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  Trophy, 
  Users, 
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  Video,
  Quote
} from "lucide-react";

export interface CountryScheduleItem {
  title: string;
  timing: string;
  desc: string;
}

export interface CountryLandingConfig {
  code: string;
  countryName: string;
  flag: string;
  headline: string;
  subheadline: string;
  bgImage: string;
  regionalImage: string;
  timezoneLabel: string;
  batchSize: string;
  typicalSchedules: CountryScheduleItem[];
  currencySymbol: string;
  pricingNote: string;
  paymentDetails: string[];
  localCircuit?: {
    title: string;
    description: string;
    tournaments: string[];
  };
  studentMilestone?: {
    name: string;
    achievement: string;
    image: string;
    quote: string;
    location: string;
  };
  features: string[];
  disclaimer: string;
}

export function CountryLandingView({ config }: { config: CountryLandingConfig }) {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#042047]">
      
      {/* 1. Official AIM PageBanner (Matching all other pages) */}
      <PageBanner
        badge={`${config.flag} ${config.countryName.toUpperCase()} ONLINE BATCHES`}
        title={config.headline}
        subtitle={config.subheadline}
        breadcrumb={`${config.countryName} Batches`}
        bgImage={config.bgImage}
      />

      {/* 2. Key Facts Bar */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-7 relative z-20 shadow-xs">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0c71c3] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black text-slate-400">Time Zone</div>
                <div className="text-xs sm:text-sm font-black text-[#042047]">{config.timezoneLabel}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black text-slate-400">Cohort Size</div>
                <div className="text-xs sm:text-sm font-black text-[#042047]">{config.batchSize}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black text-slate-400">Currency</div>
                <div className="text-xs sm:text-sm font-black text-[#042047]">{config.currencySymbol}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black text-slate-400">Mentorship</div>
                <div className="text-xs sm:text-sm font-black text-[#042047]">FIDE Certified &amp; IMs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Time Zone & Interactive Class Schedules */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Schedule Cards (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0c71c3] text-xs font-black uppercase tracking-wider mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timezone-Aligned Timetable</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#042047] tracking-tight">
                  Class Timings Structured for {config.countryName}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Students never attend late-night sessions. All batches are synchronized with local school schedules and weekend routines.
                </p>
              </div>

              <div className="space-y-3.5">
                {config.typicalSchedules.map((sched, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200/80 shadow-xs hover:border-[#00aeef] transition-colors space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-black text-[#042047] flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#00aeef]" />
                        <span>{sched.title}</span>
                      </h3>
                      <span className="text-xs font-mono font-bold text-[#0c71c3] bg-sky-50 px-2.5 py-1 rounded-lg">
                        {sched.timing}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 pl-6">
                      {sched.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% Live Interactive Digital Board</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#0c71c3] bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Missed class recordings &amp; puzzle review</span>
                </span>
              </div>
            </div>

            {/* Right: Country Thematic Photo Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <Image
                  src={config.regionalImage}
                  alt={`${config.countryName} Chess Learning`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] font-black uppercase text-[#ffe80a] tracking-wider">
                    AIM Global Classroom
                  </span>
                  <div className="text-sm sm:text-base font-black">
                    Live Mentorship for {config.countryName} Students
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Real-time video, tactical puzzle solving, and coach analysis.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Local Circuit Preparation & Verified Success */}
      {(config.localCircuit || config.studentMilestone) && (
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className={`grid grid-cols-1 ${config.localCircuit && config.studentMilestone ? "lg:grid-cols-12" : ""} gap-8 items-start`}>
              
              {/* Left: Tournament & Circuit Preparation */}
              {config.localCircuit && (
                <div className={`${config.studentMilestone ? "lg:col-span-7" : "max-w-3xl mx-auto w-full"} space-y-5`}>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-2">
                      <Trophy className="w-3.5 h-3.5 text-amber-600" />
                      <span>Tournament Circuit Alignment</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#042047] tracking-tight">
                      {config.localCircuit.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {config.localCircuit.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {config.localCircuit.tournaments.map((tourney, tIdx) => (
                      <div key={tIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <Trophy className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-[#042047]">
                          {tourney}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-xs font-black uppercase tracking-wider text-[#0c71c3]">
                      The AIM Competitive Advantage
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Beyond general moves, our coaches prepare students for the psychological pressure of tournament clocks, opening repertoire surprises, and endgame conversions.
                    </p>
                  </div>
                </div>
              )}

              {/* Right: Featured Student Result from this Region */}
              {config.studentMilestone && (
                <div className={`${config.localCircuit ? "lg:col-span-5" : "max-w-lg mx-auto w-full"} bg-gradient-to-br from-[#042047] to-[#092c5c] text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-4`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#ffe80a]">
                      Regional Student Spotlight
                    </span>
                    <span className="text-xs text-slate-300 font-bold">{config.studentMilestone.location}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-white/20">
                      <Image
                        src={config.studentMilestone.image}
                        alt={config.studentMilestone.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-white">{config.studentMilestone.name}</h3>
                      <div className="text-xs font-black text-[#ffe80a]">{config.studentMilestone.achievement}</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 text-xs text-slate-200 italic leading-relaxed flex items-start gap-2">
                    <Quote className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5 not-italic" />
                    <span>&ldquo;{config.studentMilestone.quote}&rdquo;</span>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/achievements"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00aeef] hover:text-[#ffe80a] transition-colors"
                    >
                      <span>Explore All Verified Player Profiles</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}

            </div>

          </div>
        </section>
      )}

      {/* 5. Supported Payment & Pricing Transparency */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Payment Details (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 space-y-5">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0c71c3]">
                  Hassle-Free Regional Enrollment
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#042047] mt-1 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#0c71c3]" />
                  <span>Payment Options in {config.currencySymbol}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {config.pricingNote}
                </p>
              </div>

              <div className="space-y-2.5">
                {config.paymentDetails.map((method, mIdx) => (
                  <div key={mIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{method}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="font-bold text-[#042047]">Enrollment Terms:</span>
                <span>Monthly tuition · No multi-year lock-in · Full invoice upon confirmation</span>
              </div>
            </div>

            {/* Right: Operational Transparency Disclaimer per Launch Brief (5 cols) */}
            <div className="lg:col-span-5 bg-amber-50 border-2 border-amber-200/80 rounded-3xl p-6 sm:p-8 space-y-3 text-amber-900">
              <div className="flex items-center gap-2 font-black text-sm text-amber-950 uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-amber-700" />
                <span>Operational Notice &amp; Trust Standard</span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
                {config.disclaimer}
              </p>

              <div className="pt-2 border-t border-amber-200/60 text-[11px] text-amber-800 font-semibold">
                AIM is committed to truthful advertising: we provide international live video coaching, verified trainer credentials, and authentic student achievements.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Final Assessment CTA Banner */}
      <section className="py-14 sm:py-20 bg-[#042047] text-white relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#ffe80a] text-xs font-black uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>Begin With A Diagnostic Evaluation</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Book a Free 1-on-1 Assessment in {config.countryName}
          </h2>

          <p className="text-xs sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
            Our FIDE-certified coach will evaluate your child&apos;s thinking, recommend the ideal batch, and structure a custom progress roadmap.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openBookingModal(undefined)}
              className="px-8 py-4 rounded-full bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-sm uppercase tracking-wider transition-transform hover:scale-105 cursor-pointer shadow-xl"
            >
              Book Free Assessment Now
            </button>
            <Link
              href="/courses"
              className="px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 transition-colors"
            >
              Browse All Courses
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
