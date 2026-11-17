"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { X, Globe2, Check, ArrowRight, Clock, CreditCard, ShieldCheck } from "lucide-react";

export interface CountryOption {
  code: string;
  name: string;
  flag: string;
  flagSvg: string;
  currency: string;
  timezones: string;
  href: string;
  popular?: boolean;
  notes: string;
}

export const COUNTRY_OPTIONS: CountryOption[] = [
  {
    code: "in",
    name: "India",
    flag: "🇮🇳",
    flagSvg: "/flags/in.svg",
    currency: "INR (₹)",
    timezones: "IST (GMT+5:30)",
    href: "/in",
    popular: true,
    notes: "Local class timings, UPI / Netbanking / Card payments, domestic & FIDE tournament prep.",
  },
  {
    code: "uae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    flagSvg: "/flags/ae.svg",
    currency: "AED (د.إ)",
    timezones: "GST (GMT+4)",
    href: "/uae",
    popular: true,
    notes: "Gulf evening & weekend batches, Arabic & English speaking master trainers, seamless card checkout.",
  },
  {
    code: "us",
    name: "United States",
    flag: "🇺🇸",
    flagSvg: "/flags/us.svg",
    currency: "USD ($)",
    timezones: "EST, CST, MST, PST",
    href: "/usa",
    popular: true,
    notes: "US time-zone evening & weekend batches, USCF & FIDE prep, international card checkout.",
  },
  {
    code: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    flagSvg: "/flags/gb.svg",
    currency: "GBP (£)",
    timezones: "GMT / BST",
    href: "/uk",
    popular: true,
    notes: "UK after-school & weekend schedules, ECF / FIDE rating pathways, seamless international card support.",
  },
  {
    code: "international",
    name: "Other Countries (Global)",
    flag: "🌐",
    flagSvg: "/flags/globe.svg",
    currency: "USD / EUR / AED / AUD",
    timezones: "UAE (GST), Australia (AEST), Singapore (SGT), Europe (CET)",
    href: "/international",
    popular: true,
    notes: "Tailored time-zone scheduling, 1:4 and 1-on-1 batches, global curriculum & international rating guidance.",
  },
];

interface CountrySelectorContextType {
  isSelectorOpen: boolean;
  openSelector: () => void;
  closeSelector: () => void;
  selectedCountry: CountryOption;
  setCountry: (country: CountryOption) => void;
}

const CountrySelectorContext = createContext<CountrySelectorContextType | undefined>(undefined);

export function CountrySelectorProvider({ children }: { children: React.ReactNode }) {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(COUNTRY_OPTIONS[0]);

  // Load from localStorage if set
  useEffect(() => {
    try {
      const saved = localStorage.getItem("aim_country_pref");
      if (saved) {
        const match = COUNTRY_OPTIONS.find((c) => c.code === saved);
        if (match) setSelectedCountry(match);
      }
    } catch {
      // ignore storage access errors
    }
  }, []);

  const openSelector = () => setIsSelectorOpen(true);
  const closeSelector = () => setIsSelectorOpen(false);

  const setCountry = (c: CountryOption) => {
    setSelectedCountry(c);
    try {
      localStorage.setItem("aim_country_pref", c.code);
    } catch {}
    closeSelector();
  };

  return (
    <CountrySelectorContext.Provider
      value={{ isSelectorOpen, openSelector, closeSelector, selectedCountry, setCountry }}
    >
      {children}
      <CountrySelectorModal />
    </CountrySelectorContext.Provider>
  );
}

export function useCountrySelector() {
  const ctx = useContext(CountrySelectorContext);
  if (!ctx) {
    throw new Error("useCountrySelector must be used within a CountrySelectorProvider");
  }
  return ctx;
}

export function CountrySelectorModal() {
  const { isSelectorOpen, closeSelector, selectedCountry, setCountry } = useCountrySelector();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSelectorOpen) {
        closeSelector();
      }
    };
    if (isSelectorOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSelectorOpen, closeSelector]);

  if (!isSelectorOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-2 border-[#00aeef]/30 overflow-hidden text-[#042047] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#042047] text-white p-5 sm:p-6 flex items-start justify-between border-b border-[#00aeef]/30">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00aeef]/20 text-[#ffe80a] text-xs font-black uppercase tracking-wider mb-2">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Functional Country Navigation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Choose Your Country &amp; Time Zone
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg leading-relaxed">
              Select your region to see tailored batch schedules, time-zone options, and local enrollment details.
            </p>
          </div>
          <button
            onClick={closeSelector}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Countries Grid */}
        <div className="p-4 sm:p-6 space-y-3 max-h-[65vh] overflow-y-auto">
          {COUNTRY_OPTIONS.map((country) => {
            const isSelected = selectedCountry.code === country.code;
            return (
              <div
                key={country.code}
                onClick={() => setCountry(country)}
                className={`group p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                  isSelected
                    ? "border-[#00aeef] bg-sky-50/80 shadow-md"
                    : "border-slate-200 hover:border-[#00aeef]/60 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-12 h-9 sm:w-14 sm:h-10 shrink-0 p-1 bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden flex items-center justify-center">
                    <Image 
                      src={country.flagSvg} 
                      alt={`${country.name} flag`} 
                      width={48} 
                      height={32} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base sm:text-lg font-black text-[#042047]">
                        {country.name}
                      </h4>
                      {country.popular && (
                        <span className="text-[10px] font-black uppercase tracking-wider bg-[#ffe80a] text-[#042047] px-2 py-0.5 rounded-md">
                          Active Batches
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-semibold">
                      <span className="flex items-center gap-1 text-[#0c71c3]">
                        <Clock className="w-3.5 h-3.5" />
                        {country.timezones}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <CreditCard className="w-3.5 h-3.5" />
                        {country.currency}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-normal">
                      {country.notes}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <Link
                    href={country.href}
                    onClick={closeSelector}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#042047] text-white text-xs font-bold hover:bg-[#00aeef] transition-colors"
                  >
                    <span>View Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {isSelected && (
                    <div className="w-7 h-7 rounded-full bg-[#00aeef] text-white flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Disclaimer per Brief: "Do not imply a local office, local coaches or local payment support unless true." */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-[#0c71c3] shrink-0 mt-0.5" />
          <span>
            <strong>Transparency Notice:</strong> AIM Chess Academy conducts live online coaching across these countries with time-zone-aligned certified trainers. Country pages provide timezone, curriculum, and enrollment info and do not claim local physical offices.
          </span>
        </div>
      </div>
    </div>
  );
}

