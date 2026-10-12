"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Layers, 
  Calendar, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Crown, 
  Trophy, 
  Zap, 
  BookOpen, 
  Clock, 
  Users, 
  Award,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  tag: string;
}

export default function FaqExplorerSection() {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl, getPhoneUrl, phone } = useSiteSettings();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ "demo-1": true });

  const categories = [
    { id: "all", label: "All Questions (25)", icon: Layers },
    { id: "admissions", label: "Admissions & Demo (5)", icon: Sparkles },
    { id: "curriculum", label: "Courses & Curriculum (6)", icon: BookOpen },
    { id: "schedules", label: "Formats & Schedules (5)", icon: Clock },
    { id: "tournaments", label: "Tournaments & FIDE (5)", icon: Trophy },
    { id: "pricing", label: "Fees & Membership (4)", icon: Award }
  ];

  const allFaqs: FaqItem[] = [
    // 1. Admissions & Demo
    {
      id: "demo-1",
      category: "admissions",
      tag: "FREE EVALUATION",
      question: "How does the 30-minute Free Demo Class work?",
      answer: "Our free demo is an interactive 1-on-1 or small group session with a FIDE Certified Coach. The coach assesses your child's current chess understanding, demonstrates our visual teaching methodology, and provides a customized improvement roadmap and batch recommendation."
    },
    {
      id: "demo-2",
      category: "admissions",
      tag: "AGE ELIGIBILITY",
      question: "What is the minimum age required to join AIM Chess Academy?",
      answer: "We accept students starting from 5 years old. Our beginner pedagogy uses engaging, child-friendly visual metaphors that make fundamental piece movements and tactical logic intuitive and fun for young children."
    },
    {
      id: "demo-3",
      category: "admissions",
      tag: "ZERO EXPERIENCE",
      question: "Can my child join if they have zero prior chess knowledge?",
      answer: "Absolutely! Over 40% of our new students join with zero prior experience. Our Beginner Course starts from scratch—covering piece values, board coordinates, checkmating patterns, and basic safety rules step-by-step."
    },
    {
      id: "demo-4",
      category: "admissions",
      tag: "DEMO BOOKING",
      question: "Is there any cost or payment required for the trial evaluation?",
      answer: "No, the 30-minute trial evaluation is 100% free with no credit card or financial commitment required. It is designed to help parents and students experience our coaching before deciding to enroll."
    },
    {
      id: "demo-5",
      category: "admissions",
      tag: "ASSESSMENT",
      question: "How do you determine which batch level is right for my child?",
      answer: "During the initial evaluation, the coach plays a diagnostic game and presents 3–5 calculation puzzles to assess your child's board vision, tactical instinct, and opening knowledge, placing them into the exact matching cohort."
    },

    // 2. Courses & Curriculum
    {
      id: "curr-1",
      category: "curriculum",
      tag: "ISO CERTIFICATION",
      question: "Is the curriculum certified and recognized internationally?",
      answer: "Yes, AIM Chess Academy follows an ISO-certified curriculum structured under World Chess Federation (FIDE) training standards. Students receive official course completion certificates upon graduating from each level."
    },
    {
      id: "curr-2",
      category: "curriculum",
      tag: "TEACHING METHOD",
      question: "How is your teaching different from memorizing opening moves?",
      answer: "We emphasize concept-based learning rather than rote memorization. Students learn timeless pawn structure logic, piece coordination, and candidate move calculation so they can adapt when opponents deviate from standard theory."
    },
    {
      id: "curr-3",
      category: "curriculum",
      tag: "TACTICS & PUZZLES",
      question: "Do students get homework and tactical puzzle assignments?",
      answer: "Yes! Students receive weekly curated tactical worksheets, endgame positions, and access to our digital puzzle database. Homework assignments are reviewed at the start of every class."
    },
    {
      id: "curr-4",
      category: "curriculum",
      tag: "GAME ANALYSIS",
      question: "Do coaches analyze my child's games from other tournaments?",
      answer: "Yes, game analysis is a core pillar of our academy. Students can submit their tournament PGN files or score sheets for detailed move-by-move diagnostic reviews to eliminate recurring tactical blindspots."
    },
    {
      id: "curr-5",
      category: "curriculum",
      tag: "LEVEL PROGRESSION",
      question: "How long does it take to advance from Beginner to Intermediate level?",
      answer: "Most consistent students advance through the Beginner level in 3 to 6 months. Progression depends on class attendance, daily 15-minute puzzle workouts, and participation in monthly practice tournaments."
    },
    {
      id: "curr-6",
      category: "curriculum",
      tag: "EXPERT SESSIONS",
      question: "Who conducts the advanced and masterclass sessions?",
      answer: "Our advanced curriculum and elite masterclasses are designed and led by Senior FIDE Trainers and International Master (IM) Vishal Sareen (Coach of the Indian Women's National Team)."
    },

    // 3. Formats & Schedules
    {
      id: "sched-1",
      category: "schedules",
      tag: "BATCH SIZE",
      question: "How many students are in each group class batch?",
      answer: "We strictly limit group batch sizes to 4–6 students maximum. This ensures every student gets ample time on the digital demonstration board and direct personal interaction with the coach."
    },
    {
      id: "sched-2",
      category: "schedules",
      tag: "GLOBAL TIMEZONES",
      question: "Do you offer flexible online timings for international students?",
      answer: "Yes! We have students enrolled across the USA, UK, Canada, Australia, Singapore, UAE, and Europe. Batches are scheduled conveniently across morning, evening, and weekend time slots matching your local timezone."
    },
    {
      id: "sched-3",
      category: "schedules",
      tag: "ONLINE PLATFORM",
      question: "What equipment and software do we need for online classes?",
      answer: "All you need is a laptop, tablet, or desktop computer with a stable internet connection, webcam, and microphone. We use interactive digital chess boards that allow students to move pieces in real-time."
    },
    {
      id: "sched-4",
      category: "schedules",
      tag: "MISSED CLASSES",
      question: "What happens if my child misses a scheduled class due to school exams?",
      answer: "We provide recording summaries, study materials, and reschedule options in alternative peer batches so your child never falls behind on curriculum milestones."
    },
    {
      id: "sched-5",
      category: "schedules",
      tag: "1-ON-1 COACHING",
      question: "Can I choose 1-on-1 private coaching instead of group classes?",
      answer: "Yes, we offer dedicated 1-on-1 Private Mentorship with flexible lesson timings, 100% personalized opening repertoire development, and deep diagnostic tournament reviews."
    },

    // 4. Tournaments & FIDE
    {
      id: "tourn-1",
      category: "tournaments",
      tag: "FIDE RATING",
      question: "How does my child earn an official FIDE rating through your academy?",
      answer: "We guide students through our structured FIDE Rating Roadmap: training under official digital clocks, participating in registered FIDE open tournaments, and scoring against rated opponents to achieve an initial 1400+ Elo rating."
    },
    {
      id: "tourn-2",
      category: "tournaments",
      tag: "PRACTICE MATCHES",
      question: "Are there internal practice tournaments held by the academy?",
      answer: "Yes! We organize monthly internal tournaments with official digital clocks, tournament pairing software, touch-move rules, and score sheet recording to prepare students for real competitive arenas."
    },
    {
      id: "tourn-3",
      category: "tournaments",
      tag: "TOURNAMENT GUIDANCE",
      question: "Do coaches assist with tournament registration and pre-game preparation?",
      answer: "Yes, our coaches provide tournament calendar planning, entry guidance, opponent scouting, and pre-round psychological readiness to ensure students perform at their best."
    },
    {
      id: "tourn-4",
      category: "tournaments",
      tag: "TIME CONTROLS",
      question: "Which time controls do you train students for (Classical, Rapid, Blitz)?",
      answer: "We train students across all official time controls: Classical (90 mins + 30s increment), Rapid (15 mins + 10s increment), and Blitz (3 mins + 2s increment), emphasizing deep calculation in classical formats first."
    },
    {
      id: "tourn-5",
      category: "tournaments",
      tag: "PSYCHOLOGY",
      question: "How do you help children deal with tournament losses and performance pressure?",
      answer: "Our child-friendly coaches teach emotional resilience routines, breathing techniques, and post-game diagnostic reviews that frame every loss as an invaluable learning opportunity rather than a failure."
    },

    // 5. Fees & Membership
    {
      id: "price-1",
      category: "pricing",
      tag: "FEE STRUCTURE",
      question: "How does the fee structure and billing work?",
      answer: "We offer transparent monthly and quarterly subscription plans based on course level and class frequency. There are no hidden registration fees, and all training materials and internal tournaments are included."
    },
    {
      id: "price-2",
      category: "pricing",
      tag: "ALL-INCLUSIVE",
      question: "Are practice tournaments and PGN review files included in the fee?",
      answer: "Yes! Enrolled students receive full access to internal practice tournaments, digital puzzle databases, masterclass notes, and personalized coach feedback without any extra charges."
    },
    {
      id: "price-3",
      category: "pricing",
      tag: "PAYMENT METHODS",
      question: "Which payment options are accepted for domestic and international students?",
      answer: "We support UPI, Net Banking, Debit/Credit Cards, and international payment gateways for students outside India."
    },
    {
      id: "price-4",
      category: "pricing",
      tag: "PAUSE POLICY",
      question: "Can we pause classes temporarily during school final exams or vacations?",
      answer: "Yes, with prior notice to our academic coordinator, memberships can be paused during school final exams or family travels and resumed smoothly."
    }
  ];

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCat = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleExpandAll = () => {
    const allOpen: Record<string, boolean> = {};
    filteredFaqs.forEach((f) => { allOpen[f.id] = true; });
    setOpenIds(allOpen);
  };

  const handleCollapseAll = () => {
    setOpenIds({});
  };

  return (
    <section className="relative py-14 sm:py-20 bg-[#f8fafc] text-[#042047] overflow-hidden" id="faq-explorer">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 -left-28 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-28 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/35 text-[#0c71c3] font-black text-xs uppercase tracking-wider shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#00aeef]" />
            <span>KNOWLEDGE BASE &amp; FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
            Everything You Need To{" "}
            <span className="bg-[#ffe80a] text-[#042047] px-2.5 xs:px-4 py-0.5 xs:py-1 rounded-xl xs:rounded-2xl inline-block shadow-sm">
              Know
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base font-medium leading-relaxed max-w-2xl mx-auto px-1">
            Browse our comprehensive categorized guide on demo classes, curriculum, batch timings, FIDE tournament roadmaps, and admissions.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CATEGORY SELECTOR TABS & SEARCH BAR                                       */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl sm:rounded-[32px] border-[2.5px] sm:border-[3px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[6px_6px_0px_0px_#042047] p-4 xs:p-5 sm:p-7 space-y-4 sm:space-y-5">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    type="button"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer border-[2px] ${
                      isSelected
                        ? "bg-[#042047] text-[#ffe80a] border-[#042047] shadow-[3px_3px_0px_0px_#ffe80a]"
                        : "bg-slate-50 text-[#042047] border-slate-200 hover:border-[#042047] hover:bg-slate-100"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#ffe80a]" : "text-[#00aeef]"}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search any question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#042047] focus:bg-white rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-[#042047] font-bold outline-none transition-all"
              />
            </div>

          </div>

          {/* Quick Actions Bar */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 pt-3 border-t border-slate-100">
            <span>Showing {filteredFaqs.length} questions</span>
            <div className="flex items-center gap-3">
              <button
                onClick={handleExpandAll}
                className="text-[#0c71c3] hover:underline cursor-pointer"
              >
                Expand All
              </button>
              <span>·</span>
              <button
                onClick={handleCollapseAll}
                className="text-slate-500 hover:underline cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MAIN 2-COLUMN DISPLAY: FAQS LIST + SIDEBAR SUPPORT CARD                   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: FAQs Accordion List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl sm:rounded-[24px] border-[2.5px] transition-all duration-300 overflow-hidden bg-white ${
                    isOpen 
                       ? "border-[#00aeef] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[5px_5px_0px_0px_#042047]" 
                       : "border-[#042047]/20 hover:border-[#042047] shadow-[2px_2px_0px_0px_#042047]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4 xs:p-5 sm:p-6 flex items-start justify-between gap-3 sm:gap-4 cursor-pointer"
                  >
                    <div className="space-y-1 text-left">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 text-[10px] font-black text-[#0c71c3] uppercase tracking-wider">
                        {faq.tag}
                      </div>
                      <h3 className="font-black text-sm sm:text-base lg:text-lg text-[#042047] leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 border-2 transition-all duration-300 mt-1 ${
                      isOpen 
                        ? "bg-[#042047] text-[#ffe80a] border-[#042047] rotate-180" 
                        : "bg-slate-100 text-[#042047] border-slate-200"
                    }`}>
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 xs:px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t-2 border-slate-100 pt-3.5 sm:pt-4 font-normal bg-slate-50/40">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border-2 border-slate-200 p-8">
                <p className="text-slate-600 font-bold text-base">
                  No questions match your search query.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-[#042047] text-[#ffe80a] font-black text-xs uppercase tracking-wider cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Support & Demo Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1: Speak with Coach */}
              <div className="rounded-2xl sm:rounded-[32px] bg-[#042047] text-white p-5 xs:p-6 sm:p-7 shadow-[4px_4px_0px_0px_#00aeef] sm:shadow-[6px_6px_0px_0px_#00aeef] border-[2.5px] sm:border-[3px] border-[#00aeef] space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 bg-[#ffe80a] text-[#042047] text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  <Zap className="w-3.5 h-3.5 fill-[#042047]" />
                  <span>STILL HAVE QUESTIONS?</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Speak Directly With A Senior Coach
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Have unique questions regarding your child&apos;s level, upcoming tournaments, or batch timings? We are happy to help.
                </p>

                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => openBookingModal()}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 bg-[#ffe80a] hover:bg-[#ffd600] text-[#042047] font-black py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm transition-all border-2 border-[#042047] cursor-pointer shadow-md hover:translate-x-0.5 hover:translate-y-0.5 uppercase tracking-wider"
                  >
                    <Calendar className="w-4 h-4 text-[#042047]" />
                    <span>Book 30-Min Free Demo</span>
                  </button>

                  <a
                    href={getWhatsAppUrl("Hi Coach, I have a few questions about AIM Chess Academy courses.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 sm:py-3 rounded-xl text-xs transition-colors shadow-xs uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href={getPhoneUrl()}
                    className="w-full flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 rounded-xl text-xs transition-colors border border-white/20"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#ffe80a]" />
                    <span>Call: {phone}</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Quick Highlights Badge */}
              <div className="rounded-2xl sm:rounded-[24px] bg-white border-[2.5px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] sm:shadow-[4px_4px_0px_0px_#042047] p-4 xs:p-5 text-left space-y-3">
                <div className="text-xs font-black uppercase tracking-wider text-[#0c71c3]">
                  AIM CHESS GUARANTEE
                </div>
                <div className="space-y-2 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00aeef]" />
                    <span>100% Free 30-Min Demo Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00aeef]" />
                    <span>Small Batches (Max 6 Students)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00aeef]" />
                    <span>FIDE Certified Trainers Only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00aeef]" />
                    <span>ISO Certified Curriculum</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
