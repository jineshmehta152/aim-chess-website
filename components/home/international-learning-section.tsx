"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { useCountrySelector, COUNTRY_OPTIONS } from "@/components/country-selector-modal";
import { useBookingModal } from "@/context/booking-modal-context";
import { 
  Globe2, 
  Clock, 
  CreditCard, 
  Calendar, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function InternationalLearningSection() {
  const { openSelector, selectedCountry } = useCountrySelector();
  const { openBookingModal } = useBookingModal();

  const timezones = [
    { region: "India & South Asia", tz: "IST (GMT+5:30)", hours: "Weekday Evenings 5:00–8:00 PM & Weekend Batches" },
    { region: "USA & Canada", tz: "EST / CST / PST (GMT-5 to -8)", hours: "US After-School Evenings & Weekend Mornings" },
    { region: "United Kingdom & Europe", tz: "GMT / BST & CET", hours: "UK After-School 4:30–7:00 PM GMT & Weekend Batches" },
    { region: "UAE & Gulf", tz: "GST (GMT+4)", hours: "Gulf Evening 4:00–7:30 PM GST & Friday/Saturday Slots" },
    { region: "Australia & Singapore", tz: "AEST (GMT+10) & SGT (GMT+8)", hours: "Weekend Mornings & After-School Time Slots" },
  ];

  const paymentOptions = [
    { country: "India (₹ INR)", methods: "UPI (Google Pay, PhonePe, Paytm), Netbanking, Debit & Credit Cards" },
    { country: "United States ($ USD)", methods: "Stripe, Major International Credit/Debit Cards, Wire Transfer" },
    { country: "United Kingdom (£ GBP)", methods: "International Card Checkout, Direct Bank Wire" },
    { country: "Global / Gulf (AED, AUD, EUR)", methods: "Secure International Card Payment (Visa, MasterCard, Amex)" },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-[#042047] border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00aeef]/15 text-[#0c71c3] text-xs font-black uppercase tracking-wider mb-2">
              <Globe2 className="w-3.5 h-3.5 text-[#00aeef]" />
              <span>Global Students · Local Convenience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042047] tracking-tight">
              International Learning &amp; Time Zones
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              We structure our batches so international students never have to learn late at night. Enjoy time-zone-friendly live chess coaching with clear payment options.
            </p>
          </div>

          <button
            onClick={openSelector}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-[#00aeef] text-[#042047] hover:bg-sky-50 font-black text-xs transition-colors cursor-pointer"
          >
            <Globe2 className="w-4 h-4 text-[#00aeef]" />
            <span>Select Your Country &amp; Timezone</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2-Column Grid: Timezones + Payment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Time Zones & Schedules (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border-2 border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-lg font-black text-[#042047] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#00aeef]" />
                <span>Compatible Time-Zone Batches</span>
              </h3>
              <span className="text-[11px] font-bold text-slate-500">Live Weekly Slots</span>
            </div>

            <div className="space-y-3">
              {timezones.map((tz, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#042047]">{tz.region}</span>
                    <span className="text-[11px] font-mono font-bold text-[#0c71c3] bg-sky-50 px-2 py-0.5 rounded">
                      {tz.tz}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    {tz.hours}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Need custom 1-on-1 hours? We accommodate flexible timings on request.</span>
            </div>
          </div>

          {/* Right: Payment & Country Pages (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Country Landing Pages */}
            <div className="bg-[#042047] text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-black tracking-wider text-[#ffe80a]">
                  Country-Specific Information
                </span>
                <h3 className="text-lg font-black text-white">
                  Explore Your Regional Page
                </h3>
                <p className="text-xs text-slate-300">
                  Select your country to view schedules, local payment notes, and enrollment details.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {COUNTRY_OPTIONS.map((c) => (
                  <Link
                    key={c.code}
                    href={c.href}
                    className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all flex items-center gap-2.5 border border-white/10"
                  >
                    <span className="text-2xl">{c.flag}</span>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">{c.name}</div>
                      <div className="text-[10px] text-[#ffe80a] font-semibold">{c.currency}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Supported Payment Methods */}
            <div className="bg-slate-50 rounded-3xl p-6 border-2 border-slate-200/80 space-y-3">
              <h4 className="text-sm font-black text-[#042047] flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#0c71c3]" />
                <span>Supported Payment Methods</span>
              </h4>

              <div className="space-y-2 text-xs">
                {paymentOptions.map((p, pIdx) => (
                  <div key={pIdx} className="p-2.5 rounded-xl bg-white border border-slate-200/70">
                    <div className="font-bold text-[#042047]">{p.country}</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">{p.methods}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-500 leading-normal flex items-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                <span>
                  No hidden foreign transaction fees. Invoices and payment receipts issued for all enrollments.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

