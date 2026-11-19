"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Trophy,
  Star,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Flame,
  Globe2,
  Lock,
  ChevronDown,
  ChevronUp,
  Gift,
  PhoneCall,
  Check,
  ShieldCheck,
  Award,
  Zap,
  Users
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";

// Quick countdown timer hook for high-converting marketing campaigns
function useCountdown(initialHours = 5, initialMinutes = 32) {
  const [secondsLeft, setSecondsLeft] = useState(initialHours * 3600 + initialMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return { hours, minutes, seconds };
}

export default function MarketingLandingClient() {
  const { openBookingModal } = useBookingModal();
  const { hours, minutes, seconds } = useCountdown(5, 32);

  // Lead capture state for inline form
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentAge: "6-8 Years",
    experienceLevel: "Complete Beginner (Never Played)",
    country: "India",
    preferredTiming: "Weekday Evening (5 PM - 8 PM)",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQ open/close state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const proofPoints = [
    { number: "1,200+", label: "Junior Champions Mentored", sub: "Ages 4 to 16 worldwide" },
    { number: "25+", label: "Official FIDE Elo Rated Players", sub: "International rating milestone" },
    { number: "12+", label: "Countries Represented", sub: "India, US, UK, UAE, Australia & more" },
    { number: "1:4", label: "Maximum Batch Size", sub: "100% individual coach attention" },
  ];

  const packageIncludes = [
    {
      title: "1-on-1 Grandmaster-Style Diagnostic Assessment (45 Mins)",
      value: "Worth $45 / ₹2,500",
      desc: "Live FIDE-certified trainer checks your child's calculation reflexes, tactical vision, and board confidence.",
    },
    {
      title: "Personalized 6-Month Chess Mastery Roadmap",
      value: "Worth $35 / ₹1,800",
      desc: "Step-by-step diagnostic breakdown of opening repertoire, middlegame tactics, and endgame mechanics.",
    },
    {
      title: "Official Academy Practice Arena Access",
      value: "Worth $25 / ₹1,200",
      desc: "Instant invite to our weekly fair-play monitored junior tournaments with digital chess clocks.",
    },
    {
      title: "AIM Grandmaster Opening Cheat-Sheet (PDF)",
      value: "Worth $20 / ₹1,000",
      desc: "Proven beginner-to-intermediate tactical traps, checkmate patterns, and blunder-prevention checklists.",
    },
  ];

  const champions = [
    {
      name: "Debayan Majumder",
      achievement: "1489 FIDE Elo Rating",
      tournament: "KDCA Rapid Tournament Winner",
      quote: "AIM coached me from basic moves to an official international FIDE rating in under 14 months.",
      image: "/images/achievements/debayan-majumder-fide.jpg",
      location: "India",
    },
    {
      name: "Nishka Mandal",
      achievement: "Albyn Trophy Champion (5/5)",
      tournament: "Scottish Junior Tournament Clean Sweep",
      quote: "My trainer in Kolkata prepared my game openings so thoroughly that I won every match in Aberdeen.",
      image: "/images/achievements/nishka-mandal-scotland-champion.jpg",
      location: "Aberdeen, UK",
    },
    {
      name: "Aryaman Saha",
      achievement: "State Championship Winner",
      tournament: "Under-9 Rapid & Classical Circuit",
      quote: "The tactical puzzles and weekly practice arenas made tournament pressure feel exciting rather than scary.",
      image: "/images/achievements/aryaman-saha-winner.png",
      location: "West Bengal, India",
    },
    {
      name: "Dainika Sen",
      achievement: "Top Female Junior Champion",
      tournament: "Regional Under-11 Open Circuit",
      quote: "I learned how to visualize 4 moves ahead before touching any piece. My school results improved too!",
      image: "/images/achievements/dainika-sen-champion.png",
      location: "India",
    },
  ];

  const parentReviews = [
    {
      name: "Dr. Anirban Roy",
      role: "Father of Debayan (Age 9)",
      location: "London, UK",
      text: "We tried local clubs in the UK, but nothing matched the structured curriculum and dedicated FIDE trainers at AIM. My son went from playing casually on his tablet to calculating combinations with real patience.",
      stars: 5,
    },
    {
      name: "Priya Sundaram",
      role: "Mother of Advait (Age 7)",
      location: "San Jose, California (USA)",
      text: "The US time-zone evening classes fit our busy schedule effortlessly. The coaches make every single session fun while demanding sharp discipline. Truly world-class value compared to private US trainers.",
      stars: 5,
    },
    {
      name: "Karan Mehta",
      role: "Father of Riaan (Age 6)",
      location: "Dubai, UAE",
      text: "Within 3 months, Riaan's screen-time changed from mindless videos to solving chess tactics. The 1:4 batch ratio means the trainer never misses a move he plays.",
      stars: 5,
    },
  ];

  const faqs = [
    {
      q: "My child has never played chess before. Can they join this free assessment?",
      a: "Absolutely! Over 60% of our champions started with zero prior knowledge. The free assessment introduces chess rules playfully, assesses your child's visual-spatial reasoning, and identifies their natural thinking style.",
    },
    {
      q: "What equipment or setup do we need at home?",
      a: "Just a laptop, desktop, or iPad with an internet connection and Zoom or Google Meet. We provide our interactive cloud chessboard where the coach and student move pieces simultaneously in real time. A physical chessboard is optional but great for practice.",
    },
    {
      q: "What makes AIM Chess Academy different from other online platforms?",
      a: "Most platforms just give recorded videos or put 20+ kids in a boring lecture. AIM is live, strictly capped at 1:4 kids (or 1-on-1), taught exclusively by certified FIDE trainers, and backed by an ISO 9001 certified curriculum with monthly internal tournaments.",
    },
    {
      q: "What are the timings and how do you accommodate international time zones?",
      a: "We operate dedicated daily batches across IST (India), EST/PST (US & Canada), GMT/BST (UK & Europe), and GST (UAE & Middle East). Whether you need weekday after-school or weekend morning sessions, we match you with a batch that fits your lifestyle.",
    },
    {
      q: "Is there any obligation or hidden fee after the free class?",
      a: "None whatsoever. The 45-minute assessment, 6-month roadmap, and Grandmaster puzzle PDF are 100% complimentary. If you love the coaching and want to enroll your child, our monthly tuition plans are transparent with no long-term lock-in.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#00aeef] selection:text-white font-sans antialiased">
      
      {/* 1. URGENCY TOP STRIP */}
      <aside aria-label="Limited slots notice" className="bg-[#042047] text-white py-2 px-3 sm:px-4 text-xs sm:text-sm font-semibold shadow-sm sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-[1380px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="tracking-tight text-[11px] sm:text-xs">
              ⚡ <strong>Flash Enrollment:</strong> Only 7 Free Assessment Slots Left For This Week
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 font-mono text-xs bg-white/10 text-[#ffe80a] px-2.5 py-0.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-[#ffe80a]" />
              <span>Offer closes in: {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</span>
            </div>
            <button
              onClick={() => openBookingModal("Free Assessment")}
              className="bg-[#ffe80a] hover:bg-[#ffd700] text-[#042047] px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider transition-all shadow-sm"
            >
              Claim Spot &rarr;
            </button>
          </div>
        </div>
      </aside>

      {/* 2. DEDICATED MARKETING CONVERSION HEADER (No distracting links) */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-9 z-40 shadow-xs">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-1">
              <Image
                src="/logo.png"
                alt="AIM Chess Academy"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black tracking-tight text-[#042047] flex items-center gap-1.5">
                AIM Chess Academy
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-50 text-[#0c71c3] border border-blue-200">
                  ISO 9001:2015
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Live FIDE-Certified Mentorship • 12+ Countries • Small 1:4 Batches
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 text-xs text-slate-600 font-medium">
              <Globe2 className="w-4 h-4 text-[#00aeef]" />
              <span>Serving USA, UK, UAE, India, Australia</span>
            </div>

            <button
              onClick={() => openBookingModal("Free Assessment")}
              className="px-4 sm:px-6 py-2.5 rounded-full bg-[#042047] hover:bg-[#062c61] text-[#ffe80a] font-black text-xs sm:text-sm tracking-tight shadow-md hover:scale-105 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#ffe80a]" />
              <span>Book Free Demo</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION WITH EMBEDDED CONVERSION LEAD FORM (Clean White Theme) */}
      <section className="relative pt-10 sm:pt-14 pb-16 sm:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
        
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none" 
          style={{
            backgroundImage: "radial-gradient(#042047 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Sales Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0c71c3] text-xs font-black uppercase tracking-wider">
                <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
                <span>#1 Rated Online Junior Chess Academy for Ages 4–17</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-[#042047] tracking-tight leading-[1.12]">
                Turn Screen-Time Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] to-[#00aeef]">
                  Mastermind Focus
                </span>{" "}
                With World-Class Chess Coaching
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Give your child an unfair cognitive edge. Our live, small-group classes (max 1:4) led by certified FIDE trainers develop <strong>lightning-quick calculation, emotional patience, and national tournament champions</strong>.
              </p>

              {/* Trust Badges Bar */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-700 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>FIDE-Certified Grandmaster Mentors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Max 4 Students per Batch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Free 45-Min Assessment</span>
                </div>
              </div>

              {/* Star Rating & Social Proof */}
              <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-[#042047] font-black">4.9 / 5.0 Rating</strong> by 1,200+ Parents Worldwide
                </div>
              </div>

              {/* Free Assessment Bundle Breakdown */}
              <div className="pt-2 p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-sm">
                <div className="text-xs font-black uppercase tracking-wider text-[#0c71c3] mb-2.5 flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-[#0c71c3]" />
                  <span>What You Get in Your Free Trial (Zero Obligation)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium text-left">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>45-Min Live 1-on-1 FIDE Coach Assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Personalized 6-Month Skill Roadmap</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Weekly Arena Tournament Entry Pass</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Grandmaster Tactical Puzzles PDF</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: High-Converting Lead Capture Card (White/Navy Accent) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-6 sm:p-8 bg-white border-2 border-[#042047] shadow-xl">
                
                {/* Floating Eyebrow Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#042047] text-[#ffe80a] text-[11px] font-black uppercase tracking-wider shadow-md whitespace-nowrap">
                  🎁 Claim $125 Free Trial Pack
                </div>

                <div className="text-center pt-2 mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-[#042047] tracking-tight">
                    Book Free 1-on-1 Assessment
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    No credit card required. Lock in your child&apos;s trial before slots fill.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fade-in">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-black text-[#042047]">Application Received!</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thank you! Our Senior Academic Counselor will WhatsApp/Email you within <strong>30 minutes</strong> to confirm your child&apos;s free assessment class time.
                    </p>
                    <div className="pt-2">
                      <a
                        href="https://wa.me/919903452493?text=Hi%20AIM%20Chess%20Academy,%20I%20just%20booked%20a%20free%20assessment!"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Chat Instantly on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Parent&apos;s Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma / David Smith"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#0c71c3] focus:bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 555-0192 / +91..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#0c71c3] focus:bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="parent@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#0c71c3] focus:bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                          Student Age *
                        </label>
                        <select
                          value={formData.studentAge}
                          onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#0c71c3] text-slate-900 text-xs sm:text-sm outline-none"
                        >
                          <option>4-5 Years (Tiny Champions)</option>
                          <option>6-8 Years (Young Masters)</option>
                          <option>9-12 Years (Scholastic Intermediate)</option>
                          <option>13-16 Years (Teens & Competitive)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                          Country / Time Zone *
                        </label>
                        <select
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#0c71c3] text-slate-900 text-xs sm:text-sm outline-none"
                        >
                          <option>India (IST)</option>
                          <option>United States (EST / CST / PST)</option>
                          <option>United Kingdom (GMT / BST)</option>
                          <option>UAE & Gulf (GST)</option>
                          <option>Australia & New Zealand (AEST)</option>
                          <option>Canada (EST / PST)</option>
                          <option>Singapore / Malaysia (SGT)</option>
                          <option>Europe (CET)</option>
                          <option>Other International</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Current Experience Level
                      </label>
                      <select
                        value={formData.experienceLevel}
                        onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#0c71c3] text-slate-900 text-xs sm:text-sm outline-none"
                      >
                        <option>Complete Beginner (Never Played)</option>
                        <option>Knows Rules & Piece Moves Only</option>
                        <option>Intermediate (Plays on Chess.com / Lichess)</option>
                        <option>Competitive (Plays Tournaments / Rated)</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-[#042047] hover:bg-[#062c61] text-[#ffe80a] font-black text-sm tracking-tight shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span>Reserving Your Seat...</span>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-[#ffe80a]" />
                            <span>Confirm Free Assessment (Save $125)</span>
                            <ArrowRight className="w-4 h-4 text-[#ffe80a]" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-1 text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-emerald-600" />
                        100% Privacy Protected
                      </span>
                      <span>•</span>
                      <span>Zero Spam Guarantee</span>
                      <span>•</span>
                      <span>No Credit Card</span>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY METRICS STRIP (White/Slate Card Theme) */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {proofPoints.map((item, idx) => (
              <div key={idx} className={`pt-4 md:pt-0 ${idx !== 0 ? "md:pl-6" : ""}`}>
                <div className="text-3xl sm:text-4xl font-black text-[#042047] tracking-tight">
                  {item.number}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE PROBLEM VS THE AIM SOLUTION (White Theme) */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#0c71c3] px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
              Why Traditional Coaching Fails
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#042047] tracking-tight">
              Why Most Kids Give Up on Chess &mdash; And How AIM Makes Them Champions
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We eliminated boring lectures and crowded classrooms to build an interactive, high-retention coaching method.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* The Old Way */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-red-200 space-y-5 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-black uppercase">
                <span>❌ Typical Coaching & Online Videos</span>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span><strong>Crowded 15-20 student batches</strong> where quiet kids get ignored and coaches don&apos;t analyze individual blunders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span><strong>Passive recorded video lessons</strong> that kids watch half-heartedly without retaining positional tactics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span><strong>Uncertified trainers</strong> teaching outdated openings that get crushed in real rated tournaments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span><strong>No tournament arena practice</strong>, causing kids to panic under chess clock pressure.</span>
                </li>
              </ul>
            </div>

            {/* The AIM Way */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white border-2 border-emerald-500/50 space-y-5 shadow-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black uppercase">
                <span>⭐ The AIM Grandmaster Advantage</span>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Strictly Max 1:4 Cohorts or 1-on-1:</strong> Every single move your child plays is reviewed live with instant feedback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Certified FIDE Trainers:</strong> Led by International Master Prantik Roy, FIDE Instructors, and national champions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Interactive Cloud Chessboard:</strong> Real-time piece control, tactical quizzes, and game engine computer analysis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Weekly Fair-Play Practice Arenas:</strong> Monitored academy tournaments with clocks so students master competitive composure.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 6. REAL PROOF & VERIFIED CHAMPIONS GALLERY (White Theme) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#0c71c3] px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
              Proven Results Across 12+ Countries
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#042047] tracking-tight">
              Real Kids. Official FIDE Ratings. National Trophies.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We don&apos;t make vague promises &mdash; our junior students regularly win state, national, and international tournaments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {champions.map((champ, idx) => (
              <div key={idx} className="rounded-3xl bg-white border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#0c71c3] transition-all group">
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={champ.image}
                    alt={champ.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-black text-[#042047] border border-slate-200 shadow-xs">
                    📍 {champ.location}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-black text-[#042047]">{champ.name}</h3>
                    <div className="text-xs font-black text-[#0c71c3]">{champ.achievement}</div>
                    <div className="text-[11px] text-slate-500">{champ.tournament}</div>
                  </div>

                  <p className="text-xs text-slate-600 italic border-l-2 border-[#00aeef] pl-2.5 leading-relaxed">
                    &ldquo;{champ.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => openBookingModal("Free Assessment")}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-[#042047] hover:bg-[#062c61] text-[#ffe80a] font-black text-sm tracking-tight shadow-md hover:scale-105 transition-all"
            >
              <Trophy className="w-4 h-4 text-[#ffe80a]" />
              <span>Give Your Child the Champion&apos;s Training Today &rarr;</span>
            </button>
          </div>

        </div>
      </section>

      {/* 7. PARENT TESTIMONIALS (White/Slate Card Theme) */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#0c71c3] px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
              Parent Experiences
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#042047] tracking-tight">
              Trusted by 1,200+ Discerning Parents Globally
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Read how our structured training changed focus, grades, and screen habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parentReviews.map((rev, idx) => (
              <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-black text-[#042047]">{rev.name}</div>
                    <div className="text-xs text-slate-500">{rev.role}</div>
                  </div>
                  <div className="text-xs text-[#0c71c3] font-bold">
                    📍 {rev.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. WHAT YOU GET IN THE $125 FREE VALUE STACK */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#0c71c3] px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
              The Zero-Risk Offer
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#042047] tracking-tight">
              Everything Included in Your Free Trial Class
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Total Real World Value: $125 / ₹9,000 &mdash; Yours 100% Free When You Book Today.
            </p>
          </div>

          <div className="space-y-4">
            {packageIncludes.map((item, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#042047] text-white flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-[#042047]">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    FREE ({item.value})
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => openBookingModal("Free Assessment")}
              className="px-8 sm:px-10 py-4 rounded-full bg-[#042047] hover:bg-[#062c61] text-[#ffe80a] font-black text-base tracking-tight shadow-xl hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-[#ffe80a]" />
              <span>Claim Your Child&apos;s $125 Free Assessment Pack</span>
              <ArrowRight className="w-5 h-5 text-[#ffe80a]" />
            </button>
            <div className="text-[11px] text-slate-500 mt-2 font-medium">
              🔒 100% Free • No Credit Card Required • Instant Confirmation via WhatsApp
            </div>
          </div>

        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (Clean Accordion) */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#0c71c3] px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#042047] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Got questions before booking? We have you covered.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#042047] hover:text-[#0c71c3] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#0c71c3] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. MARKETING CLOSING FOOTER */}
      <footer className="py-14 sm:py-20 bg-white text-center">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-black uppercase">
            <span>🔥 Limited Batch Openings For Next Month</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#042047] tracking-tight">
            Give Your Child the Mindset of a Grandmaster
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Every grandmaster was once a beginner who took a single diagnostic trial. Book your child&apos;s free session today and see their excitement within the first 15 minutes.
          </p>

          <div className="pt-2">
            <button
              onClick={() => openBookingModal("Free Assessment")}
              className="px-9 sm:px-12 py-4 rounded-full bg-[#042047] hover:bg-[#062c61] text-[#ffe80a] font-black text-base sm:text-lg tracking-tight shadow-xl hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-[#ffe80a]" />
              <span>Claim Your Free Trial Class Now</span>
              <ArrowRight className="w-5 h-5 text-[#ffe80a]" />
            </button>
          </div>

          <div className="pt-10 text-xs text-slate-500 space-y-2 border-t border-slate-200">
            <p>
              © {new Date().getFullYear()} AIM Chess Academy • ISO 9001:2015 Certified Chess Institute
            </p>
            <p className="text-[11px] text-slate-400">
              Direct Inquiries: admissions@aimchessacademy.com • WhatsApp: +91 99034 52493
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
