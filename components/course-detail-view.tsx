"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  GraduationCap, 
  Award, 
  MessageCircle, 
  ShieldCheck, 
  BarChart3, 
  Activity, 
  Clock, 
  BookOpen, 
  Globe, 
  Layers, 
  ChevronRight, 
  ChevronLeft,
  TrendingUp, 
  Users, 
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { CourseProgram, COURSES_DATA } from "@/data/courses-data";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

interface CourseDetailViewProps {
  course: CourseProgram;
}

export default function CourseDetailView({ course }: CourseDetailViewProps) {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#f8fafc] text-[#042047] min-h-screen">
      
      {/* ========================================================================= */}
      {/* 1. TOP BREADCRUMB & MINI BANNER BAR                                       */}
      {/* ========================================================================= */}
      <div className="bg-[#042047] text-white border-b border-[#00aeef]/30 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1380px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <nav className="flex items-center gap-2 text-slate-300 font-medium">
            <Link href="/" className="hover:text-[#ffe80a] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/courses" className="hover:text-[#ffe80a] transition-colors">Courses</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#ffe80a] font-bold">{course.shortTitle}</span>
          </nav>

          <div className="flex items-center gap-2">
            <span className="bg-[#00aeef] text-white px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase">
              {course.programNumber}
            </span>
            <span className="text-slate-300 text-xs font-semibold hidden md:inline">
              ISO 9001:2015 Accredited
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO COURSE HEADER                                                     */}
      {/* ========================================================================= */}
      <div className="relative bg-gradient-to-b from-[#042047] to-[#082b5d] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00aeef]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1380px] mx-auto relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#00aeef]/40 text-[#ffe80a] text-xs sm:text-sm font-black tracking-wider shadow-sm uppercase">
            <Sparkles className="w-4 h-4 text-[#ffe80a]" />
            <span>{course.badgeTag}</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {course.title}
          </h1>

          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-normal">
            {course.subtitle}
          </p>

          {/* Quick Stats Pill Row */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 pt-4">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left space-y-1">
              <div className="text-[10px] font-black uppercase text-slate-300 tracking-wider flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>Duration</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-white truncate">
                {course.duration}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left space-y-1">
              <div className="text-[10px] font-black uppercase text-slate-300 tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#ffe80a]" />
                <span>Frequency</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-white truncate">
                {course.frequency}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left space-y-1">
              <div className="text-[10px] font-black uppercase text-slate-300 tracking-wider flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>Batch Size</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-white truncate">
                {course.batchSize}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left space-y-1">
              <div className="text-[10px] font-black uppercase text-slate-300 tracking-wider flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#ffe80a]" />
                <span>Mode</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-white truncate">
                Online &amp; Offline
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left space-y-1">
              <div className="text-[10px] font-black uppercase text-slate-300 tracking-wider flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>Certificate</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-[#ffe80a] truncate">
                {course.certificateBadge}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-[#ffe80a]/40 text-left space-y-1">
              <div className="text-[10px] font-black uppercase text-[#ffe80a] tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ffe80a]" />
                <span>Monthly Fee</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-white truncate">
                {course.fees}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN BODY SECTION: 2-COLUMN LAYOUT                                     */}
      {/* ========================================================================= */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* --------------------------------------------------------------------- */}
          {/* LEFT SIDEBAR: Visual Preview + Enrollment Card (Spans 5 cols)         */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Image Card in 4:5 Aspect Ratio */}
            <div className="relative w-full aspect-[4/3] rounded-[28px] sm:rounded-[36px] overflow-hidden border-[3px] border-[#042047] shadow-[6px_6px_0px_0px_#042047] bg-slate-900 group">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
              />

              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#042047] text-[#ffe80a] font-black text-xs uppercase px-3.5 py-1.5 rounded-full border-2 border-white shadow-md tracking-wider">
                  {course.programNumber} · {course.levelCode}
                </span>
              </div>
            </div>

            {/* Cognitive Focus & Mastery Indicator Bar */}
            <div className="rounded-2xl border-[2.5px] border-[#042047] p-4 bg-white shadow-[4px_4px_0px_0px_#042047] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#00aeef]" />
                  <span>Cognitive Focus:</span>
                </span>
                <span className="font-black text-[#042047] uppercase">
                  {course.cognitiveFocus}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-500 flex items-center gap-1">
                    <BarChart3 className="w-3.5 h-3.5 text-[#0c71c3]" />
                    <span>Skill Mastery Benchmark</span>
                  </span>
                  <span className="font-black text-[#042047]">{course.masteryCurve}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden border border-[#042047]/20">
                  <div 
                    className="h-full bg-gradient-to-r from-[#ffe80a] via-[#00aeef] to-[#0c71c3] rounded-full" 
                    style={{ width: course.masteryCurve }}
                  />
                </div>
              </div>
            </div>

            {/* Direct Booking Action Card */}
            <div className="rounded-[24px] sm:rounded-[28px] border-[3px] border-[#042047] bg-[#ffe80a] p-5 sm:p-7 shadow-[6px_6px_0px_0px_#042047] space-y-4 text-left">
              <div>
                <div className="text-[11px] font-black text-[#042047] uppercase tracking-wider">
                  ENROLLMENT &amp; ADMISSIONS
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#042047] tracking-tight mt-0.5">
                  {course.fees}
                </div>
                <div className="text-xs font-bold text-[#042047]/80">
                  {course.feePeriod}
                </div>
              </div>

              <div className="space-y-2 text-xs font-bold text-[#042047]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#042047] shrink-0" />
                  <span>Free Initial Diagnostic Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#042047] shrink-0" />
                  <span>Interactive Live Classes (Max 4-6 Cohort)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#042047] shrink-0" />
                  <span>Monthly Swiss Clock Tournaments Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#042047] shrink-0" />
                  <span>Official ISO Course Certificate Upon Graduation</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => openBookingModal(course.title)}
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#042047] hover:bg-[#082b5d] text-white font-black text-sm py-3.5 px-5 rounded-2xl border-2 border-[#042047] shadow-md hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all cursor-pointer uppercase tracking-wider text-center"
                >
                  <GraduationCap className="w-5 h-5 text-[#ffe80a]" />
                  <span>Book Free Demo Class</span>
                </button>

                <a
                  href={getWhatsAppUrl(course.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm py-3 px-5 rounded-2xl border-2 border-[#042047] shadow-md hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer uppercase tracking-wider text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: Comprehensive Syllabus & Breakdown (Spans 7 cols)       */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-7 space-y-10 text-left">
            
            {/* About Course Level Overview */}
            <div className="rounded-[24px] sm:rounded-[32px] bg-white border-[3px] border-[#042047] p-6 sm:p-8 shadow-[5px_5px_0px_0px_#042047] space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-black text-[#0c71c3] uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#00aeef]" />
                <span>COURSE LEVEL OVERVIEW</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight">
                About the {course.shortTitle}
              </h2>

              <div className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                {course.description.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Ideal Candidate Callout */}
              <div className="mt-4 p-4 rounded-2xl bg-[#e0f2fe]/60 border-2 border-[#00aeef]/30 space-y-1 text-xs">
                <div className="font-black text-[#0c71c3] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#00aeef]" />
                  <span>WHO THIS COURSE IS IDEAL FOR:</span>
                </div>
                <p className="text-slate-800 font-bold leading-relaxed">
                  {course.idealFor}
                </p>
              </div>
            </div>

            {/* Detailed Sub-Levels / Modules Syllabus */}
            <div className="space-y-5">
              <div className="space-y-1">
                <div className="text-xs font-black uppercase text-[#0c71c3] tracking-wider">
                  STRUCTURED STEP-BY-STEP CURRICULUM
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight">
                  Detailed Sub-Levels &amp; Topics Covered
                </h3>
              </div>

              <div className="space-y-4">
                {course.levels.map((lvl, lIdx) => (
                  <div
                    key={lIdx}
                    className="rounded-2xl sm:rounded-[24px] bg-white border-[2.5px] border-[#042047] p-5 sm:p-6 shadow-[4px_4px_0px_0px_#042047] hover:shadow-[2px_2px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-12 h-10 rounded-xl bg-[#042047] text-[#ffe80a] font-black text-xs flex items-center justify-center shrink-0 border border-[#042047]">
                          {lvl.code}
                        </span>
                        <div>
                          <h4 className="text-sm sm:text-base font-black text-[#042047]">
                            {lvl.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {lvl.desc}
                    </p>

                    {lvl.topics && lvl.topics.length > 0 && (
                      <div className="pt-2 space-y-1.5">
                        <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                          Key Modules &amp; Skills Trained:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {lvl.topics.map((topic, tIdx) => (
                            <div key={tIdx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] shrink-0 mt-1.5" />
                              <span className="leading-snug">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Progression Mechanics Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#e0f2fe]/80 border-[2px] border-[#00aeef]/40 text-xs text-[#042047] flex items-start gap-3 shadow-xs">
                <TrendingUp className="w-5 h-5 text-[#00aeef] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="font-black text-[#0c71c3] uppercase text-xs block">
                    HOW STUDENTS ADVANCE TO THE NEXT LEVEL:
                  </strong>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-800">
                    {course.progressionRule}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Learning Outcomes Checklist */}
            <div className="rounded-[24px] sm:rounded-[32px] bg-white border-[3px] border-[#042047] p-6 sm:p-8 shadow-[5px_5px_0px_0px_#042047] space-y-4">
              <div className="flex items-center gap-2 text-xs font-black text-[#042047] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#042047] fill-[#ffe80a]" />
                <span>GUARANTEED SKILL OUTCOMES</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight">
                What Your Child Will Master Upon Completion
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {course.outcomes.map((item, oIdx) => (
                  <div 
                    key={oIdx} 
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0c71c3] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Props & Academy Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.curriculumFeatures.map((feat, fIdx) => (
                <div 
                  key={fIdx}
                  className="rounded-2xl bg-white border-[2px] border-[#042047] p-4 sm:p-5 shadow-[3px_3px_0px_0px_#042047] space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ffe80a] text-[#042047] flex items-center justify-center font-black">
                    ✓
                  </div>
                  <h4 className="text-sm font-black text-[#042047]">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Course-Specific FAQ Accordion */}
            {course.faqs && course.faqs.length > 0 && (
              <div className="space-y-4 pt-4">
                <div className="space-y-1">
                  <div className="text-xs font-black uppercase text-[#0c71c3] tracking-wider flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" />
                    <span>COMMON QUESTIONS</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight">
                    Frequently Asked About {course.shortTitle}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {course.faqs.map((faq, qIdx) => {
                    const isOpen = openFaqIndex === qIdx;
                    return (
                      <div 
                        key={qIdx}
                        className="rounded-2xl bg-white border-[2px] border-[#042047] overflow-hidden shadow-[2px_2px_0px_0px_#042047]"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(qIdx)}
                          className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left font-black text-xs sm:text-sm text-[#042047] hover:text-[#00aeef] transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown 
                            className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#00aeef]" : "text-slate-400"}`} 
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Next / Previous Course Level Navigation */}
            <div className="pt-6 border-t-2 border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.prevCourse ? (
                <Link
                  href={`/courses/${course.prevCourse.slug}`}
                  className="p-4 rounded-2xl bg-white border-[2px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] hover:shadow-[1px_1px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-left space-y-1 group"
                >
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1 group-hover:text-[#00aeef]">
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>PREVIOUS LEVEL</span>
                  </div>
                  <div className="text-xs sm:text-sm font-black text-[#042047]">
                    {course.prevCourse.title}
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {course.nextCourse ? (
                <Link
                  href={`/courses/${course.nextCourse.slug}`}
                  className="p-4 rounded-2xl bg-white border-[2px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] hover:shadow-[1px_1px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-right space-y-1 group ml-auto w-full sm:w-auto"
                >
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider flex items-center justify-end gap-1 group-hover:text-[#00aeef]">
                    <span>NEXT LEVEL</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs sm:text-sm font-black text-[#042047]">
                    {course.nextCourse.title}
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. EXPLORE ALL OTHER COURSE LEVELS BAR                                    */}
      {/* ========================================================================= */}
      <div className="bg-[#042047] text-white py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-[#00aeef]/30">
        <div className="max-w-[1380px] mx-auto space-y-6 text-center">
          <div>
            <span className="text-xs font-black uppercase text-[#ffe80a] tracking-wider">
              COMPLETE ACADEMY PATHWAY
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight mt-1">
              Explore All Other Course Levels
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {COURSES_DATA.map((prog) => {
              const isCurrent = prog.slug === course.slug;
              return (
                <Link
                  key={prog.slug}
                  href={`/courses/${prog.slug}`}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all border-2 ${
                    isCurrent
                      ? "bg-[#ffe80a] text-[#042047] border-[#ffe80a] shadow-md pointer-events-none"
                      : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#042047] hover:border-white"
                  }`}
                >
                  {prog.tabTitle}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. BIG CALL TO ACTION BANNER                                              */}
      {/* ========================================================================= */}
      <div className="bg-[#f8fafc] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#042047] via-[#082b5d] to-[#0c71c3] p-8 sm:p-14 text-white border-[3px] border-[#00aeef] shadow-[8px_8px_0px_0px_#042047] space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffe80a] text-[#042047] font-black text-xs uppercase tracking-wider shadow-sm">
            <GraduationCap className="w-4 h-4 text-[#042047]" />
            <span>ENROLLMENT OPEN · ALL TIME ZONES</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Begin the{" "}
            <span className="text-[#ffe80a] underline decoration-[#00aeef] decoration-wavy">
              {course.shortTitle}
            </span>
            ?
          </h2>

          <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Book a complimentary 1-on-1 assessment with Founder Soumen Banerjee or a senior FIDE trainer. We evaluate your child&apos;s current knowledge and place them into the right cohort.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openBookingModal(course.title)}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-sm sm:text-base py-4 px-8 rounded-2xl border-2 border-[#042047] shadow-lg hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all cursor-pointer uppercase tracking-wider"
            >
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              <span>Book Free Demo Class</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>

            <a
              href={getWhatsAppUrl(course.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm sm:text-base py-4 px-8 rounded-2xl border-2 border-[#042047] shadow-lg hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer uppercase tracking-wider"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
