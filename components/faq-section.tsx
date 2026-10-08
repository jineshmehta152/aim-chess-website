"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  Calendar,
  CheckCircle2,
  Trophy,
  Star,
  Zap,
  ArrowRight
} from "lucide-react";
import { useSiteSettings } from "@/context/site-settings-context";
import { useBookingModal } from "@/context/booking-modal-context";

export function FaqSection() {
  const { phone, getPhoneUrl, getWhatsAppUrl, whatsapp_display } = useSiteSettings();
  const { openBookingModal } = useBookingModal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the minimum age to join AIM Chess Academy?",
      a: "We welcome students aged 5 years and above. Our curriculum is tailored for all ages and skill levels, from complete young beginners to seasoned advanced tournament competitors."
    },
    {
      q: "How does the 30-minute Free Demo Class work?",
      a: "Our free demo is an interactive 1-on-1 or micro-batch session with a FIDE Certified Coach. The trainer evaluates your child's current chess understanding, demonstrates our engaging teaching methodology, and recommends the ideal learning pathway."
    },
    {
      q: "What are the timings and schedules for online batches?",
      a: "We offer highly flexible schedules with weekday evening and weekend batches. For international students across the USA, UK, Canada, Australia, Singapore, and the UAE, batches are customized to comfortably match your local timezone."
    },
    {
      q: "Are the courses suitable for a child who has never played chess?",
      a: "Absolutely! Our Beginner Course is designed specifically for children who are starting from scratch. We teach piece movements, rules, fundamental tactics, and board vision step by step in a fun, encouraging atmosphere."
    },
    {
      q: "Will my child receive an official certificate?",
      a: "Yes! We award official ISO-Certified Course Completion Certificates to all students upon completing their respective training modules. These certificates can be added to academic and extracurricular portfolios."
    },
    {
      q: "Are there regular tournaments and competitions?",
      a: "Yes! We organize monthly internal practice tournaments with official digital chess clocks and exciting inter-academy competitions to prepare students for district, state, national, and FIDE-rated events."
    },
    {
      q: "How many students are in each batch?",
      a: "We maintain strictly limited batch sizes (4 to 6 students maximum) to ensure every child receives personalized attention, direct game analysis, and continuous coach interaction."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#f8fafc] text-[#042047] overflow-hidden" id="faq">
      
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/30 text-[#0c71c3] text-xs sm:text-sm font-black mb-3 shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#00aeef]" />
            <span>GOT QUESTIONS? WE HAVE ANSWERS</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-4xl font-black text-[#042047] tracking-tight leading-[1.2]">
            Frequently Asked{" "}
            <span className="bg-[#ffe80a] text-[#042047] font-black px-4 py-1 rounded-2xl inline-block shadow-xs">
              Questions
            </span>
            <br />
            About Our{" "}
            <span className="bg-[#00aeef] text-white font-black px-4 py-1 rounded-2xl inline-block shadow-xs mt-1">
              Chess Academy
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Clear answers to help you choose the best chess coaching pathway for your child.
          </p>
        </div>

        {/* 2-Column: Accordion FAQs + Image & CTA Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Accordion FAQs */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-[24px] border-2 transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-white border-[#00aeef] shadow-[0_6px_0_0_#00aeef]" 
                      : "bg-white border-[#042047]/15 hover:border-[#042047]/40 shadow-xs"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-black text-sm sm:text-base text-[#042047] leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#00aeef] text-white rotate-180" : "bg-slate-100 text-[#042047]"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Featured Image + Connected CTA Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Top Featured Image Card */}
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border-3 border-[#042047] shadow-[0_8px_0_0_#042047] bg-slate-100 group">
              <Image 
                src="/images/hero.jpg" 
                alt="AIM Chess Academy Coaching Session"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top Rating Badge */}
              <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[#042047] text-xs font-black shadow-lg border border-slate-200">
                <Star className="w-4 h-4 text-[#ffe80a] fill-[#ffe80a]" />
                <span>5.0★ Google Rating (34+ Reviews)</span>
              </div>

              {/* Bottom Caption on Image */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="text-[10px] font-bold text-[#ffe80a] uppercase tracking-wider">Expert Guidance</div>
                <div className="text-sm font-black text-white leading-tight">Learn Directly From FIDE Certified Coaches</div>
              </div>
            </div>

            {/* Bottom Support & Demo Card */}
            <div className="rounded-[32px] bg-[#042047] text-white p-6 sm:p-7 shadow-[0_8px_0_0_#00aeef] border-3 border-[#00aeef] space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-[#ffe80a] text-[#042047] text-[10px] font-black uppercase px-3 py-1 rounded-full">
                <Zap className="w-3.5 h-3.5 fill-[#042047]" />
                <span>Still have questions?</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Speak With A Senior Coach Today
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Have specific queries about your child&apos;s level or training roadmap? Contact our coaches directly or book a free trial class.
              </p>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full flex items-center justify-center gap-2 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black py-3.5 rounded-2xl text-sm transition-all border-2 border-[#042047] cursor-pointer shadow-md hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4 text-[#042047]" />
                  <span>Book Free 30-Min Demo</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#00aeef] hover:bg-[#009cd7] text-white font-bold py-2.5 rounded-xl text-xs transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={getPhoneUrl()}
                    className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 rounded-xl text-xs transition-colors border border-white/20"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#ffe80a]" />
                    <span>Call Coach</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FaqSection;
