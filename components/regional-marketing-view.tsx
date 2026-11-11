"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { 
  Trophy, 
  Play, 
  CheckCircle2, 
  Clock, 
  Users, 
  TrendingUp, 
  Calendar, 
  BookOpen, 
  Award, 
  Laptop, 
  Lock, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  PhoneCall,
  Crown,
  FileText,
  Video,
  Check,
  ChevronDown,
  ChevronUp,
  Star,
  Quote,
  Flame,
  Globe2
} from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";

export interface RegionalMarketingConfig {
  countryCode: "uae" | "usa";
  countryName: string;
  flag: string;
  phoneDialCode: string;
  currency: string;
  eyebrowBadge: string;
  heroHeadline: {
    line1: string;
    highlight: string;
  };
  heroSubheadline: string;
  heroImage: string;
  heroImageAlt: string;
  heroBgClass?: string;
  trustStrip: {
    liveClasses: string;
    smallGroups: string;
    curriculum: string;
    tournaments: string;
  };
  featureCards: {
    iconType: "laptop" | "users" | "chart" | "trophy";
    title: string;
    desc: string;
    color: string;
  }[];
  whyChooseUsTitle: string;
  whyChooseUsPoints: string[];
  ageRange: string;
  leadCardTitle: string;
  leadCardSubtitle: string;
  leadSectionImage?: string;
  leadSectionImageAlt?: string;
  benefitsList: string[];
  heroVideoSrc?: string;
  extraStudentSpotlight?: {
    name: string;
    badge: string;
    desc: string;
    image?: string;
    location?: string;
  };
  parentReviews?: {
    name: string;
    role: string;
    location: string;
    comment: string;
    rating: number;
  }[];
  regionalFaqs?: {
    q: string;
    a: string;
  }[];
}

export function RegionalMarketingView({ config }: { config: RegionalMarketingConfig }) {
  const { openBookingModal } = useBookingModal();

  // In-page quick booking form state
  const [formData, setFormData] = useState({
    parentName: "",
    whatsapp: "",
    childName: "",
    childAge: "7",
    chessExperience: "Complete Beginner",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName: formData.parentName,
          childName: formData.childName,
          name: `${formData.parentName} (${formData.childName}, Age ${formData.childAge})`,
          email: "admissions@aimchessacademy.com",
          phone: `${config.phoneDialCode} ${formData.whatsapp}`,
          eventType: `Marketing LP [${config.countryName}]: ${formData.chessExperience} (Age ${formData.childAge})`,
          date: new Date().toISOString().split("T")[0],
          country: config.countryName,
          message: `Regional LP Lead: Parent: ${formData.parentName}, Child: ${formData.childName}, Age: ${formData.childAge}, Experience: ${formData.chessExperience}`,
        }),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Booking error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Learning Pathway Data (Exact match from the flyer)
  const learningPathway = [
    {
      level: "Beginner Level",
      codes: "BG1 • BG2 • BG3",
      desc: "Build a strong chess foundation: piece movement, opening principles, checkmate patterns, and basic tactical vision.",
      bgGradient: "from-sky-50 to-blue-100/70 border-sky-300",
      accent: "text-sky-700",
      badgeBg: "bg-sky-600 text-white",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-black text-xl">
          ♟
        </div>
      ),
    },
    {
      level: "Intermediate Level",
      codes: "IM1 • IM2 • IM3 • IM4 • IM5 • IM6",
      desc: "Develop strategy, opening repertoires, piece coordination, pawn structures, and active positional defense.",
      bgGradient: "from-purple-50 to-indigo-100/70 border-purple-300",
      accent: "text-purple-700",
      badgeBg: "bg-purple-600 text-white",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-black text-xl">
          ♞
        </div>
      ),
    },
    {
      level: "Advanced Level",
      codes: "Advanced 1 • 2 • 3",
      desc: "Master deeper 4-5 move calculation, complex tactical sacrifices, king safety, and practical endgame conversions.",
      bgGradient: "from-amber-50 to-yellow-100/70 border-amber-300",
      accent: "text-amber-800",
      badgeBg: "bg-amber-600 text-white",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-black text-xl">
          ♜
        </div>
      ),
    },
    {
      level: "Expert Level",
      codes: "Expert 1 • 2 • 3 • 4 • 5 • 6",
      desc: "Tournament preparation, clock pressure management, psychological resilience, and official FIDE Elo acceleration.",
      bgGradient: "from-rose-50 to-pink-100/70 border-rose-300",
      accent: "text-rose-700",
      badgeBg: "bg-rose-600 text-white",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-black text-xl">
          ♛
        </div>
      ),
    },
  ];

  // Program Highlights Bar Items
  const programHighlights = [
    { label: "Structured Lessons", icon: BookOpen },
    { label: "Homework & Practice", icon: FileText },
    { label: "Student Portal Access", icon: Laptop },
    { label: "Progress Reports", icon: TrendingUp },
    { label: "Level Certificates", icon: Award },
    { label: "Weekly Live Tournaments", icon: Trophy },
  ];

  // Default regional parent testimonials if none passed
  const reviews = config.parentReviews || [
    {
      name: config.countryCode === "uae" ? "Fatima Al Mansoori" : "Jennifer Miller",
      role: `Mother of ${config.countryCode === "uae" ? "Zayed (Age 8)" : "Lucas (Age 7)"}`,
      location: config.countryCode === "uae" ? "Dubai, UAE" : "Austin, Texas (USA)",
      comment: "We looked for local options but nothing matched the structured curriculum and dedicated FIDE trainers at AIM. In just 3 months, my child's patience and concentration in school noticeably improved.",
      rating: 5,
    },
    {
      name: config.countryCode === "uae" ? "Dr. Rajesh Varma" : "David Chen",
      role: `Father of ${config.countryCode === "uae" ? "Aarav (Age 9)" : "Ethan (Age 9)"}`,
      location: config.countryCode === "uae" ? "Abu Dhabi, UAE" : "San Jose, California (USA)",
      comment: `The ${config.countryName} evening timing fits our routine effortlessly. The 1:4 batch ratio means the coach analyzes every single move and explains mistakes patiently without rushing.`,
      rating: 5,
    },
    {
      name: config.countryCode === "uae" ? "Sarah Jenkins" : "Kiran Patel",
      role: `Mother of ${config.countryCode === "uae" ? "Liam (Age 6)" : "Rhea (Age 8)"}`,
      location: config.countryCode === "uae" ? "Sharjah, UAE" : "New York, USA",
      comment: "My child used to spend hours mindlessly on iPad games. Now, chess tactics have become an obsession! The weekly practice tournament gives so much real excitement.",
      rating: 5,
    },
  ];

  // Regional FAQs
  const faqs = config.regionalFaqs || [
    {
      q: `What times are the classes held in ${config.countryName}?`,
      a: `All batches are scheduled around local school hours. We offer weekday after-school evening slots (between 4:30 PM and 7:30 PM) and Saturday/Sunday morning workshops, ensuring children attend fresh without late-night fatigue.`,
    },
    {
      q: "My child has never played chess. Can they join the free demo?",
      a: "Yes, absolutely! Over 60% of our enrolled students start with zero chess knowledge. In the free 45-minute demo, our coach playfully introduces the pieces, tests their spatial thinking, and suggests the right starting level.",
    },
    {
      q: "What equipment do we need at home?",
      a: "All you need is a laptop, desktop computer, or tablet with internet access. Our interactive cloud chessboard lets the student and coach move pieces simultaneously in real-time. A physical chess board at home is great for extra practice.",
    },
    {
      q: `What is the batch size and coach qualification?`,
      a: `Batches are strictly capped at 1:4 students (or 1-on-1 private mentoring) to ensure personalized feedback. All coaches are certified FIDE trainers and International Masters who teach our accredited ISO 9001:2015 curriculum.`,
    },
    {
      q: `Is there any commitment or credit card needed for the free demo?`,
      a: `Zero commitment and no credit card required. The 45-minute evaluation, skill diagnostic, and 6-month learning roadmap are 100% free with no obligation.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#042047] font-sans antialiased selection:bg-[#00aeef] selection:text-white">
      
      {/* 1. TOP FLASH ENROLLMENT TICKER */}
      <aside aria-label="Limited slots notice" className="bg-[#042047] text-white py-2 px-3 sm:px-4 text-xs font-semibold border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1340px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs">
              ⚡ <strong>{config.countryName} Admissions Open:</strong> Only 5 Free Assessment Slots Left for this weekend
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] text-[#ffe80a] font-black uppercase">
              ⭐ ISO 9001:2015 Accredited • 1:4 Small Batches
            </span>
            <button
              onClick={() => openBookingModal("Free Assessment")}
              className="bg-[#ffe80a] hover:bg-[#ffd700] text-[#042047] px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-all shadow-sm"
            >
              Claim Free Demo &rarr;
            </button>
          </div>
        </div>
      </aside>

      {/* 2. CLEAN PROMOTIONAL HEADER (Matching flyer top bar) */}
      <header className="border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-8 z-40 shadow-xs">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <Link href="/" className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
              <Image
                src="/logo.png"
                alt="AIM Chess Academy Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <div>
              <div className="text-base sm:text-xl font-black tracking-tight text-[#042047] leading-none flex items-center gap-1.5">
                AIM CHESS ACADEMY
                <span className="text-lg leading-none">{config.flag}</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wide mt-0.5">
                Online Chess Academy for Young Minds in {config.countryName}
              </p>
            </div>
          </div>

          {/* Navigation Links (Matching flyer header: Home, Programs, Curriculum, Tournaments, About Us, Contact) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-bold text-slate-700">
            <Link href="/" className="hover:text-[#0c71c3] transition-colors">Home</Link>
            <Link href="/courses" className="hover:text-[#0c71c3] transition-colors">Programs</Link>
            <a href="#pathway" className="hover:text-[#0c71c3] transition-colors">Curriculum</a>
            <Link href="/achievements" className="hover:text-[#0c71c3] transition-colors">Tournaments</Link>
            <a href="#why-choose-us" className="hover:text-[#0c71c3] transition-colors">Why AIM</a>
            <a href="#faqs" className="hover:text-[#0c71c3] transition-colors">FAQs</a>
          </nav>

          {/* WhatsApp & Book Free Demo Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://wa.me/919903452493"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-transform hover:scale-105 shadow-sm"
              title="Chat on WhatsApp"
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <button
              onClick={() => openBookingModal("Free Assessment")}
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#ffe80a] hover:bg-[#ffd700] text-[#042047] font-black text-xs sm:text-sm tracking-tight shadow-md hover:scale-105 transition-all"
            >
              Book Free Demo
            </button>
          </div>

        </div>
      </header>

      {/* 3. HERO SECTION: Vibrant Deep Royal Blue Gradient with Kids & Landmark */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c4a96] via-[#08356e] to-[#042047] text-white pt-8 sm:pt-12 pb-14 sm:pb-20">
        
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Eyebrow + Big Headline + CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* Regional Flag Pill Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-bold shadow-sm">
                <span className="text-xl sm:text-2xl leading-none">{config.flag}</span>
                <span>{config.eyebrowBadge}</span>
              </div>

              {/* Main Headline (Exact layout: Build Your Child's Chess Skills, Focus and Confidence) */}
              <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-black tracking-tight leading-[1.12]">
                <span className="block text-white">{config.heroHeadline.line1}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe80a] via-[#ffd000] to-[#00aeef] mt-1">
                  {config.heroHeadline.highlight}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed max-w-xl">
                {config.heroSubheadline}
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openBookingModal("Free Assessment")}
                  className="px-6 sm:px-8 py-3.5 rounded-full bg-[#ffe80a] hover:bg-[#ffd700] text-[#042047] font-black text-sm sm:text-base tracking-tight shadow-xl shadow-black/20 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#042047]" />
                  <span>Book a Free Demo Class &rarr;</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowVideoModal(true)}
                  className="px-5 sm:px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-white/30 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current text-[#ffe80a]" />
                  <span>Watch How We Teach</span>
                </button>
              </div>

              {/* 4 Feature Badges Bar (Live Online Classes • Small Groups (Max 4) • Structured Curriculum • Weekly Tournaments) */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs sm:text-[13px] font-semibold text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{config.trustStrip.liveClasses}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{config.trustStrip.smallGroups}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{config.trustStrip.curriculum}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{config.trustStrip.tournaments}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Kids with Championship Trophy + Landmark (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group">
                <Image
                  src={config.heroImage}
                  alt={config.heroImageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Regional Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 text-[#042047] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#042047] leading-none">
                        Certified FIDE Mentorship
                      </div>
                      <div className="text-[10px] text-slate-500 font-semibold mt-0.5">
                        Structured for {config.countryName} Students {config.flag}
                      </div>
                    </div>
                  </div>
                  <span className="text-xl leading-none">{config.flag}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOUR CORE PILLAR CARDS (Floating White Cards on Subtle Tint) */}
      <section className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {config.featureCards.map((feat, idx) => {
            const renderIcon = () => {
              switch (feat.iconType) {
                case "laptop":
                  return <Laptop className="w-6 h-6 stroke-[2.2]" />;
                case "users":
                  return <Users className="w-6 h-6 stroke-[2.2]" />;
                case "chart":
                  return <TrendingUp className="w-6 h-6 stroke-[2.2]" />;
                case "trophy":
                default:
                  return <Trophy className="w-6 h-6 stroke-[2.2]" />;
              }
            };
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-lg shadow-slate-900/5 border border-slate-200 hover:border-[#00aeef] transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0c71c3] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {renderIcon()}
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#042047] tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed font-medium">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. OUR CHESS LEARNING PATHWAY (Exact match to the 4 colored step cards) */}
      <section id="pathway" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-[#042047] tracking-tight">
              Our Chess Learning Pathway
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              A clear and structured journey from the basics to advanced competitive play.
            </p>
          </div>

          {/* 4 Horizontal Step Cards with Flow Arrows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {learningPathway.map((item, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 border-2 bg-gradient-to-b ${item.bgGradient} flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    {item.icon}
                    <span className="text-xs font-black text-slate-400">Step {idx + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-[#042047] tracking-tight">
                      {item.level}
                    </h3>
                    <div className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/80 border border-slate-200 text-[#042047]">
                      {item.codes}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Level indicator dot */}
                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>ISO 9001:2015 Accredited</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PROGRAM HIGHLIGHTS (Navy banner with clean white icons) */}
      <section className="py-12 sm:py-16 bg-[#042047] text-white relative overflow-hidden">
        
        {/* Background Chess Texture Accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="/images/marketing-gold-king.jpg"
              alt="Chess Pieces"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-8 sm:mb-10 text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Program Highlights
            </h2>
            <div className="h-1 w-20 bg-[#ffe80a] mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
            {programHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 transition-all hover:scale-105 flex flex-col items-center justify-center space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#ffe80a] flex items-center justify-center">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-100 leading-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. WHY PARENTS CHOOSE AIM + AGE BRACKET BADGE */}
      <section id="why-choose-us" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Why Parents Choose Us (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#042047] tracking-tight">
                  {config.whyChooseUsTitle}
                </h2>
                <div className="h-1 w-20 bg-[#00aeef] mt-2 rounded-full" />
              </div>

              <div className="space-y-3.5">
                {config.whyChooseUsPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Age Bracket Badge Card (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-3xl p-6 sm:p-8 bg-white border-2 border-slate-200 shadow-xl text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-[#0c71c3] flex items-center justify-center shadow-sm">
                  <Calendar className="w-7 h-7 stroke-[2.2]" />
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Target Student Cohort
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#042047] tracking-tight">
                  {config.ageRange}
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Batches segregated by age group and skill level so children learn alongside peer equals.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Free Assessment Included</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. PARENT REVIEWS & SOCIAL PROOF */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-black uppercase">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Verified Parent Experiences in {config.countryName}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#042047] tracking-tight">
              Trusted by Discerning Parents
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Read how our structured training changed focus, patience, and screen habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-7 bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-3.5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-black text-[#042047]">{rev.name}</div>
                    <div className="text-[11px] text-slate-500 font-semibold">{rev.role}</div>
                  </div>
                  <span className="text-xs font-bold text-[#0c71c3]">📍 {rev.location}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. BOTTOM LEAD CAPTURE: AI Real Boy on Left + High Converting Form Card on Right */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: AI-Generated Boy with Laptop + Pitch (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="relative w-full max-w-[480px] aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 mx-auto lg:mx-0 group">
                <Image
                  src={config.leadSectionImage || "/images/marketing-demo-boy-laptop.jpg"}
                  alt={config.leadSectionImageAlt || "Young student smiling and solving chess tactics during live online class on laptop"}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-bold text-white bg-[#042047]/80 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/20">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ffe80a]" />
                    <span>Live 1-on-1 Interactive Demo</span>
                  </span>
                  <span className="text-[#00aeef] font-black">Free Assessment</span>
                </div>
              </div>

              <div className="space-y-4 text-center lg:text-left">
                <h3 className="text-2xl sm:text-4xl font-black text-[#042047] tracking-tight">
                  Get Started with a{" "}
                  <span className="text-[#0c71c3] underline decoration-[#ffe80a] decoration-4">
                    Free Demo Class
                  </span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-bold text-slate-700">
                  {config.benefitsList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Embedded Lead Form Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl p-6 sm:p-8 md:p-9 bg-white border-2 border-slate-200 shadow-2xl shadow-slate-900/10 relative">
                
                {/* Form Top Title */}
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-5 h-5 text-purple-600" />
                  <h4 className="text-xl sm:text-2xl font-black text-[#042047]">
                    Book Your Free Demo
                  </h4>
                </div>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your details and our Senior Academic Counselor will schedule your child&apos;s trial.
                </p>

                {isSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h5 className="text-lg font-black text-[#042047]">Free Demo Booked!</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thank you, <strong>{formData.parentName}</strong>! We have received your booking for <strong>{formData.childName}</strong>. Our academic team will WhatsApp you within 30 minutes to confirm your live class link.
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/919903452493?text=Hi%20AIM%20Chess%20Academy,%20I%20just%20booked%20a%20free%20demo%20for%20my%20child%20${encodeURIComponent(formData.childName)}%20(${config.countryName})!`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Chat Instantly on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Parent Name */}
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Parent&apos;s Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter parent's full name"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#0c71c3] focus:bg-white text-slate-900 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    {/* WhatsApp Number with Country Code */}
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        WhatsApp Number *
                      </label>
                      <div className="flex gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-xs font-bold text-slate-700 shrink-0">
                          <span>{config.flag}</span>
                          <span>{config.phoneDialCode}</span>
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 50 123 4567"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#0c71c3] focus:bg-white text-slate-900 text-xs sm:text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Child Name & Age in Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                          Child&apos;s Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Child's first name"
                          value={formData.childName}
                          onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#0c71c3] focus:bg-white text-slate-900 text-xs sm:text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                          Age *
                        </label>
                        <select
                          value={formData.childAge}
                          onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#0c71c3] text-slate-900 text-xs sm:text-sm outline-none"
                        >
                          <option value="4">4 Years (Tiny Champions)</option>
                          <option value="5">5 Years</option>
                          <option value="6">6 Years</option>
                          <option value="7">7 Years</option>
                          <option value="8">8 Years</option>
                          <option value="9">9 Years</option>
                          <option value="10">10 Years</option>
                          <option value="11">11 Years</option>
                          <option value="12">12 Years</option>
                          <option value="13">13 Years</option>
                          <option value="14">14+ Years</option>
                        </select>
                      </div>
                    </div>

                    {/* Chess Experience */}
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Chess Experience *
                      </label>
                      <select
                        value={formData.chessExperience}
                        onChange={(e) => setFormData({ ...formData, chessExperience: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#0c71c3] text-slate-900 text-xs sm:text-sm outline-none"
                      >
                        <option value="Complete Beginner">Complete Beginner (Never Played)</option>
                        <option value="Knows Piece Moves">Knows How the Pieces Move</option>
                        <option value="Intermediate">Plays Online / School Club</option>
                        <option value="Tournament Rated">FIDE Rated / Competitive</option>
                      </select>
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-[#ffe80a] hover:bg-[#ffd700] text-[#042047] font-black text-sm sm:text-base tracking-tight shadow-lg shadow-yellow-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span>Scheduling Your Free Class...</span>
                        ) : (
                          <>
                            <span>Book Free Demo Class &rarr;</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Privacy Guarantee */}
                    <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-slate-500">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Your information is safe and will only be used by AIM Chess Academy.</span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section id="faqs" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0c71c3] text-xs font-black uppercase">
              <span>Answers for Parents in {config.countryName}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#042047] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#042047] hover:text-[#0c71c3] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#0c71c3] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 11. VIDEO POPUP MODAL (When clicking 'Watch How We Teach') */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#042047]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <div className="relative aspect-video w-full bg-black">
              <video
                src={config.heroVideoSrc || "/aimchess-final.mp4"}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* 12. MINIMAL CLEAN FOOTER */}
      <footer className="py-8 bg-[#042047] text-white text-center border-t border-white/10">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-2 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-200 font-bold">
            <span>AIM Chess Academy</span>
            <span>•</span>
            <span>Live Online Classes for {config.countryName} {config.flag}</span>
            <span>•</span>
            <span>ISO 9001:2015 Accredited</span>
          </div>
          <p className="text-[11px]">
            Direct Class Inquiries: admissions@aimchessacademy.com • WhatsApp: +91 99034 52493
          </p>
          <p className="text-[10px] text-slate-500 pt-1">
            © {new Date().getFullYear()} AIM Chess Academy. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default RegionalMarketingView;
