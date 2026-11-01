"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import PageBanner from "@/components/page-banner";
import { 
  Building2, 
  Store, 
  BookOpen, 
  Users, 
  Trophy, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  MapPin, 
  HelpCircle,
  FileCheck,
  TrendingUp,
  AlertCircle,
  Clock,
  Sparkles,
  ChevronDown
} from "lucide-react";

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "India",
    chessExperience: "Chess Parent / Enthusiast",
    commercialPremises: "Own commercial space ready (500-1000 sq ft)",
    investmentRange: "₹5L - ₹10L (India)",
    targetTimeline: "Within 3 months",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventType: `Franchise EOI: ${formData.city}, ${formData.state} (${formData.investmentRange})`,
          date: new Date().toISOString().split("T")[0],
          timeSlot: formData.targetTimeline,
          country: formData.country,
          message: `Physical Centre EOI:\n- City: ${formData.city}, ${formData.state}\n- Premises: ${formData.commercialPremises}\n- Chess BG: ${formData.chessExperience}\n- Investment: ${formData.investmentRange}\n- Note: ${formData.message}`,
        }),
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      step: "01",
      title: "Expression of Interest",
      desc: "Submit your city, background, and planned investment via the form below for initial feasibility review.",
    },
    {
      step: "02",
      title: "Location Evaluation",
      desc: "Our team assesses your proposed commercial space (500–1000 sq ft) for accessibility, safety, and school proximity.",
    },
    {
      step: "03",
      title: "Coach Training & Setup",
      desc: "Interior branding rollout, procurement of DGT clocks & boards, and mandatory FIDE-standard coach induction.",
    },
    {
      step: "04",
      title: "Grand Launch & Batches",
      desc: "Central promotional campaigns, demo workshops, school outreach, and official academy inaugural tournament.",
    },
  ];

  const faqs = [
    {
      q: "Is this an online teaching-partner opportunity?",
      a: "No. The franchise opportunity is strictly for opening and operating an accredited physical brick-and-mortar chess academy centre in your city. Our online platform remains centrally managed by our master coaching panel.",
    },
    {
      q: "What commercial space is required?",
      a: "A dedicated commercial or institutional space of approximately 500 to 1,000 square feet, suitable for hosting 15–30 students simultaneously with proper lighting, tournament tables, and parent reception area.",
    },
    {
      q: "How are coaches trained and hired?",
      a: "AIM provides comprehensive coach screening tests, pedagogical training, structured lesson manuals, and ongoing quality audits under our senior FIDE trainers.",
    },
    {
      q: "What are the commercial terms and fees?",
      a: "To maintain ethical standards, we do not publish speculative profit guarantees. Franchise fees, setup budgets, and revenue terms are shared following application review based on your location and model.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#042047]">
      
      {/* 1. Official AIM PageBanner (Matching all other pages) */}
      <PageBanner
        badge="PHYSICAL ACADEMY FRANCHISE"
        title="Open An AIM Chess Academy Centre"
        subtitle="Partner with us to establish an accredited brick-and-mortar physical chess academy centre in your city."
        breadcrumb="Franchise Opportunity"
        bgImage="/images/franchise-banner.jpg"
      />

      {/* 2. Key Pillars Bar */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-7 relative z-20 shadow-xs">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0c71c3] flex items-center justify-center shrink-0">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black text-slate-400">Opportunity Type</div>
                <div className="text-xs sm:text-sm font-black text-[#042047]">Physical Academy Centre</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black text-slate-400">Premises Required</div>
                <div className="text-xs sm:text-sm font-black text-[#042047]">500 – 1000 Sq Ft</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black text-slate-400">Curriculum</div>
                <div className="text-xs sm:text-sm font-black text-[#042047]">ISO-Certified Syllabuses</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black text-slate-400">Circuit Network</div>
                <div className="text-xs sm:text-sm font-black text-[#042047]">Inter-Academy Cups</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The AIM Operating Model */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0c71c3] text-xs font-black uppercase tracking-wider">
              <span>Operating Framework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#042047]">
              The AIM Chess Operating Model
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              A comprehensive operational blueprint designed for quality education, high student retention, and parent trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/80 shadow-xs hover:border-[#00aeef] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#042047] text-[#00aeef] flex items-center justify-center shadow-md">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#042047]">
                Proven Curriculum
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete lesson plans, exercise workbooks, tactical puzzle banks, and milestone tests for BG1–BG3, IM1–IM6, and Advanced levels.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/80 shadow-xs hover:border-[#ffe80a] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#042047] text-[#ffe80a] flex items-center justify-center shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#042047]">
                Coach Induction &amp; SOPs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rigorous trainer screening, pedagogical training, child safety standards, and continuous quality audits by senior FIDE mentors.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/80 shadow-xs hover:border-[#00aeef] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#042047] text-[#00aeef] flex items-center justify-center shadow-md">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#042047]">
                Tournament Network
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Host official AIM inter-academy tournaments, monthly rapid arenas, and prepare students for regional state &amp; national events.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/80 shadow-xs hover:border-[#ffe80a] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#042047] text-[#ffe80a] flex items-center justify-center shadow-md">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#042047]">
                Brand &amp; Marketing Kit
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authorized use of AIM branding, interior signage blueprints, social media kits, and listing on the official website.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Partner Support vs Responsibilities */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border-2 border-slate-200 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0c71c3] text-xs font-black uppercase">
                <span>Head Office Support</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#042047]">
                What AIM Provides to Your Centre
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                  <span>Interior layout guidelines, chess table arrangements, and wall branding artwork.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                  <span>Complete curriculum manuals, student workbooks, and certification authority.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                  <span>Mandatory coach screening and continuous pedagogical training workshops.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                  <span>Central promotional campaigns, national website listing, and demo class playbooks.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                  <span>Guest masterclasses by International Masters (IM Prantik Roy, IM Vishal Sareen).</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border-2 border-slate-200 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase">
                <span>Partner Role</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#042047]">
                Franchise Partner Responsibilities
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span>Securing commercial premises (500–1000 sq ft) in an accessible school/residential zone.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span>Funding interior setup, tournament chess boards, digital clocks, and screen displays.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span>Local school outreach, trial class coordination, and day-to-day administrative operations.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span>Maintaining teaching quality standards, safety protocols, and student attendance reporting.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span>Strict compliance with AIM branding guidelines and student safeguarding principles.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. 4-Step Launch Pathway */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-black uppercase text-[#0c71c3] tracking-wider">
              Implementation Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#042047]">
              How Your Centre Launches in 4 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border-2 border-slate-200/80 shadow-xs space-y-3">
                <span className="text-3xl font-black text-slate-200 font-mono">
                  {st.step}
                </span>
                <h3 className="text-base font-black text-[#042047]">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Expression of Interest Application Form */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200" id="apply">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border-2 border-[#00aeef]/40 shadow-xl space-y-6">
            
            <div className="space-y-2 text-center max-w-xl mx-auto">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0c71c3]">
                Application Funnel
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#042047]">
                Submit an Expression of Interest (EOI)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Commercial agreements and territory exclusivity are finalized after reviewing candidate background and local feasibility.
              </p>
            </div>

            {/* Honest Compliance Note per Brief */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Integrity Policy:</strong> We do not publish speculative guaranteed profit projections or fixed generic fees. Every location is evaluated based on local demand, partner capability, and educational standards.
              </span>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-black text-emerald-900">
                  Expression of Interest Received!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in bringing an AIM Chess Academy centre to your city. Our management team will review your application and reach out within 2–3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Proposed City &amp; State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune, Maharashtra"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Your Chess / Coaching Background
                    </label>
                    <select
                      value={formData.chessExperience}
                      onChange={(e) => setFormData({ ...formData, chessExperience: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-white font-semibold"
                    >
                      <option value="Chess Parent / Enthusiast">Chess Parent / Enthusiast</option>
                      <option value="Rated Player / Coach">Rated Player / Coach</option>
                      <option value="Education Entrepreneur">Education Entrepreneur</option>
                      <option value="School / Club Administrator">School / Club Administrator</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Commercial Space Status
                    </label>
                    <select
                      value={formData.commercialPremises}
                      onChange={(e) => setFormData({ ...formData, commercialPremises: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-white font-semibold"
                    >
                      <option value="Own commercial space ready (500-1000 sq ft)">Own commercial space (500–1000 sq ft)</option>
                      <option value="Rented space identified">Rented space identified</option>
                      <option value="Currently scouting locations">Currently scouting locations</option>
                      <option value="Existing activity centre add-on">Existing activity centre add-on</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Planned Investment Budget
                    </label>
                    <select
                      value={formData.investmentRange}
                      onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-white font-semibold"
                    >
                      <option value="₹5L - ₹10L (India)">₹5 Lakhs – ₹10 Lakhs</option>
                      <option value="₹10L - ₹20L (India)">₹10 Lakhs – ₹20 Lakhs</option>
                      <option value="₹20L+ (India / Tier 1)">₹20 Lakhs+ (Flagship Centre)</option>
                      <option value="International Territory ($25k-$50k)">International Territory ($25k–$50k)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Tell us about your city, proposed location, or experience
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your vision, local schools nearby, and your background..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-[#042047] hover:bg-[#082b5d] text-white font-black text-sm uppercase tracking-wider transition-all cursor-pointer shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 border border-[#00aeef]/30"
                >
                  <Send className="w-4 h-4 text-[#ffe80a]" />
                  <span>{isSubmitting ? "Submitting Application..." : "Submit Franchise Expression of Interest"}</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 7. Franchise FAQ */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase text-[#0c71c3] tracking-wider">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#042047]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 space-y-2 shadow-xs">
                <h3 className="text-sm sm:text-base font-black text-[#042047]">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
