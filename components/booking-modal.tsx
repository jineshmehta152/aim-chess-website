"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Trophy, 
  Lock, 
  PhoneCall, 
  Send,
  Zap,
  Flame,
  Award
} from "lucide-react";

export default function BookingModal() {
  const { isOpen, closeBookingModal, selectedEventType } = useBookingModal();
  const { phone, email, getWhatsAppUrl } = useSiteSettings();

  // Multi-step funnel: Step 1 (Child Age) -> Step 2 (Chess Experience) -> Step 3 (Start Timeline) -> Step 4 (Child's Goal) -> Step 5 (Parent Contact)
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    childAge: "6-8",
    chessExperience: "Complete beginner",
    startTimeline: "Immediately",
    goal: "Skill building",
    parentName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    countryName: "India",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync event type if triggered externally with a course level
  useEffect(() => {
    if (selectedEventType) {
      setFormData((prev) => ({ ...prev, chessExperience: selectedEventType }));
    }
  }, [selectedEventType]);

  // Handle ESC key press and modal reset
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBookingModal();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setCurrentStep(1);
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeBookingModal]);

  if (!isOpen) return null;

  const totalSteps = 5;

  const ageOptions = [
    { label: "Under 6", sub: "Tiny Champions (Ages 4-5)", emoji: "🌱", color: "from-pink-500/10 to-rose-500/10 border-pink-200 hover:border-pink-500" },
    { label: "6–8", sub: "Young Masters (Early Primary)", emoji: "⭐", color: "from-amber-500/10 to-orange-500/10 border-amber-200 hover:border-amber-500" },
    { label: "9–11", sub: "Scholastic Squad (Middle School)", emoji: "⚡", color: "from-emerald-500/10 to-teal-500/10 border-emerald-200 hover:border-emerald-500" },
    { label: "12–15", sub: "Junior League (High School)", emoji: "🎯", color: "from-cyan-500/10 to-blue-500/10 border-cyan-200 hover:border-cyan-500" },
    { label: "16+", sub: "Teens & Adult Competitors", emoji: "🏆", color: "from-purple-500/10 to-indigo-500/10 border-purple-200 hover:border-purple-500" },
  ];

  const experienceOptions = [
    {
      title: "Complete beginner",
      desc: "Never played or just starting with rules",
      badge: "Zero Prior Knowledge",
      icon: "🔺",
      color: "border-sky-200 bg-sky-50/50 hover:border-[#00aeef]",
    },
    {
      title: "Knows how the pieces move",
      desc: "Understands check, checkmate & piece moves",
      badge: "Casual Home Player",
      icon: "🟩",
      color: "border-emerald-200 bg-emerald-50/50 hover:border-emerald-500",
    },
    {
      title: "Plays online or has had coaching",
      desc: "Plays on Chess.com / Lichess or school club",
      badge: "Active Junior Player",
      icon: "🔶",
      color: "border-amber-200 bg-amber-50/50 hover:border-amber-500",
    },
    {
      title: "FIDE rated or tournament player",
      desc: "Has official Elo rating or plays circuit events",
      badge: "Competitive Prodigy",
      icon: "👑",
      color: "border-rose-200 bg-rose-50/50 hover:border-rose-500",
    },
  ];

  const timelineOptions = [
    { title: "Immediately", desc: "Ready for this week's free assessment slot", icon: "🚀" },
    { title: "Within a Week", desc: "Coordinating with after-school timetable", icon: "📅" },
    { title: "Within a Month", desc: "Planning for the upcoming vacation / next term", icon: "🗓️" },
    { title: "Just Exploring", desc: "Understanding the coaching syllabus & roadmap", icon: "🧭" },
  ];

  const goalOptions = [
    {
      title: "Exploring & Fun",
      desc: "Finding out if my child enjoys chess and builds natural focus",
      icon: "🔍",
    },
    {
      title: "Skill & Mind Building",
      desc: "Learning chess properly with weekly classes, puzzle homework & tactics",
      icon: "🧠",
    },
    {
      title: "Serious Tournament Pursuit",
      desc: "Training my child for state, national championships & official FIDE ratings",
      icon: "🏆",
    },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName: formData.parentName,
          name: formData.parentName,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          eventType: `Qual: ${formData.chessExperience} | Age: ${formData.childAge} | Start: ${formData.startTimeline} | Goal: ${formData.goal}`,
          date: new Date().toISOString().split("T")[0],
          guests: formData.childAge,
          package: formData.chessExperience,
          country: formData.countryName,
          message: `Funnel Submission: Child Age: ${formData.childAge}, Experience: ${formData.chessExperience}, Timeline: ${formData.startTimeline}, Goal: ${formData.goal}`,
        }),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Booking submission error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#042047]/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-[520px] max-h-[95vh] overflow-y-auto bg-white rounded-3xl sm:rounded-[36px] shadow-2xl border-2 border-slate-100 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Promotional Urgency Pill Bar (Matching reference) */}
        <div className="bg-[#042047] text-white py-2 px-4 flex items-center justify-between text-xs font-bold border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-black tracking-wide text-[#ffe80a]">
              ⭐ 100% Free 1-on-1 Grandmaster Assessment
            </span>
          </div>

          <button
            onClick={closeBookingModal}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar & Back Control */}
        {!isSubmitted && (
          <div className="px-6 pt-5 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              {/* Step indicator bars */}
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      s <= currentStep 
                        ? "w-7 sm:w-8 bg-[#00aeef]" 
                        : "w-3 sm:w-4 bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="text-xs font-black text-slate-400">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
        )}

        {/* Mascot & Dialog Chat Bubble */}
        {!isSubmitted && (
          <div className="px-6 pt-2 pb-4 flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-2xl bg-[#042047] p-2 flex items-center justify-center shadow-md shrink-0 border border-white/20">
              <Image
                src="/logo.png"
                alt="AIM Chess Mascot"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Conversational speech bubble */}
            <div className="relative bg-slate-50 border border-slate-200 rounded-2xl p-3 shadow-xs text-left flex-1">
              <div className="text-[11px] font-bold text-[#0c71c3] uppercase tracking-wider">
                {currentStep === 1 && "Hi there!"}
                {currentStep === 2 && "Lovely!"}
                {currentStep === 3 && "Got it!"}
                {currentStep === 4 && "Almost there!"}
                {currentStep === 5 && "Just three quick things!"}
              </div>
              <div className="text-sm sm:text-base font-black text-[#042047] leading-tight mt-0.5">
                {currentStep === 1 && "How old is your child?"}
                {currentStep === 2 && "Where are they with chess?"}
                {currentStep === 3 && "When would you like to start?"}
                {currentStep === 4 && "What is chess for your child?"}
                {currentStep === 5 && "Where should we send class details?"}
              </div>
            </div>
          </div>
        )}

        {/* Step-by-Step Interactive Form Content */}
        <div className="px-6 pb-6 pt-1 flex-1">
          
          {/* STEP 1: Child Age Selection */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-200">
              <div className="grid grid-cols-2 gap-3">
                {ageOptions.map((age, i) => {
                  const isSelected = formData.childAge === age.label;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, childAge: age.label }));
                        handleNext();
                      }}
                      className={`p-4 rounded-2xl border-2 text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center space-y-1.5 ${
                        isSelected
                          ? "border-[#00aeef] bg-sky-50/70 shadow-md scale-[1.02]"
                          : "border-slate-200 hover:border-[#00aeef]/60 hover:bg-slate-50/80 bg-white"
                      } ${i === ageOptions.length - 1 ? "col-span-2" : ""}`}
                    >
                      <span className="text-2xl">{age.emoji}</span>
                      <div className="text-base sm:text-lg font-black text-[#042047]">
                        {age.label}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium leading-tight">
                        {age.sub}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Chess Experience Level */}
          {currentStep === 2 && (
            <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {experienceOptions.map((exp, i) => {
                  const isSelected = formData.chessExperience === exp.title;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, chessExperience: exp.title }));
                        handleNext();
                      }}
                      className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2.5 ${
                        isSelected
                          ? "border-[#00aeef] bg-sky-50/80 shadow-md scale-[1.02]"
                          : "border-slate-200 hover:border-[#00aeef]/60 hover:bg-slate-50 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl">{exp.icon}</span>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {exp.badge}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-black text-[#042047] leading-tight">
                          {exp.title}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          {exp.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Start Timeline */}
          {currentStep === 3 && (
            <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {timelineOptions.map((time, i) => {
                  const isSelected = formData.startTimeline === time.title;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, startTimeline: time.title }));
                        handleNext();
                      }}
                      className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? "border-[#00aeef] bg-sky-50/80 shadow-md scale-[1.02]"
                          : "border-slate-200 hover:border-[#00aeef]/60 hover:bg-slate-50 bg-white"
                      }`}
                    >
                      <span className="text-2xl shrink-0 mt-0.5">{time.icon}</span>
                      <div>
                        <div className="text-sm font-black text-[#042047]">
                          {time.title}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          {time.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Child's Goal */}
          {currentStep === 4 && (
            <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-200">
              {goalOptions.map((g, i) => {
                const isSelected = formData.goal === g.title;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, goal: g.title }));
                      handleNext();
                    }}
                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? "border-[#00aeef] bg-sky-50/80 shadow-md scale-[1.01]"
                        : "border-slate-200 hover:border-[#00aeef]/60 hover:bg-slate-50 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-2xl shrink-0">{g.icon}</span>
                      <div>
                        <div className="text-sm font-black text-[#042047]">
                          {g.title}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          {g.desc}
                        </p>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? "border-[#00aeef] bg-[#00aeef]" : "border-slate-300"
                    }`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 5: High-Intent Parent Lead Capture & WhatsApp OTP style */}
          {currentStep === 5 && !isSubmitted && (
            <form onSubmit={handleSubmit} className="space-y-3.5 animate-in fade-in slide-in-from-right-4 duration-200">
              
              {/* Selected Profile Summary Pill */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#042047]">Child: {formData.childAge} yrs</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-600 truncate max-w-[150px]">{formData.chessExperience}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-[11px] font-bold text-[#0c71c3] hover:underline"
                >
                  Edit answers
                </button>
              </div>

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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#00aeef] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                  Email for Assessment Link &amp; Report *
                </label>
                <input
                  type="email"
                  required
                  placeholder="parent@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#00aeef] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                  WhatsApp Number (For Direct Class Coordination) *
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => {
                      const val = e.target.value;
                      let country = "India";
                      if (val === "+1") country = "United States / Canada";
                      else if (val === "+44") country = "United Kingdom";
                      else if (val === "+971") country = "UAE";
                      else if (val === "+61") country = "Australia";
                      setFormData({ ...formData, countryCode: val, countryName: country });
                    }}
                    className="w-28 px-2.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#00aeef] text-slate-800 text-xs sm:text-sm font-semibold outline-none shrink-0"
                  >
                    <option value="+91">🇮🇳 +91 (IN)</option>
                    <option value="+1">🇺🇸 +1 (US)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+971">🇦🇪 +971 (UAE)</option>
                    <option value="+61">🇦🇺 +61 (AU)</option>
                    <option value="+65">🇸🇬 +65 (SG)</option>
                    <option value="+49">🇩🇪 +49 (DE)</option>
                  </select>

                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#00aeef] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* High Converting Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-[#042047] hover:bg-[#062c61] text-[#ffe80a] font-black text-sm sm:text-base tracking-tight shadow-xl shadow-slate-900/10 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Allocating FIDE Coach Slot...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#ffe80a]" />
                      <span>Confirm Free Assessment Slot</span>
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
                <span>Zero Spam</span>
                <span>•</span>
                <span>No Payment Needed</span>
              </div>
            </form>
          )}

          {/* SUBMITTED SUCCESS STATE */}
          {isSubmitted && (
            <div className="p-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-black text-[#042047]">
                  Assessment Request Received!
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.parentName || "Parent"}</strong>! We have matched your answers with our Senior FIDE Academic Mentors.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 text-left space-y-1">
                <div>✓ <strong>Child Group:</strong> {formData.childAge} years ({formData.chessExperience})</div>
                <div>✓ <strong>Coaching Goal:</strong> {formData.goal}</div>
                <div>✓ <strong>WhatsApp:</strong> {formData.countryCode} {formData.phone}</div>
              </div>

              <p className="text-xs text-slate-500">
                Our Academic Counselor will WhatsApp and email your personalized assessment meeting link within <strong>30 minutes</strong>.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={`https://wa.me/919903452493?text=Hi%20AIM%20Chess%20Academy,%20I%20just%20submitted%20the%20free%20assessment%20for%20my%20child%20(Age:%20${formData.childAge})!`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Connect Directly on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={closeBookingModal}
                  className="px-5 py-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
