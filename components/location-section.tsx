"use client";

import React from "react";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Globe2, 
  Building2, 
  Laptop
} from "lucide-react";
import { useSiteSettings } from "@/context/site-settings-context";

export function LocationSection() {
  const { phone, address, getPhoneUrl, getWhatsAppUrl } = useSiteSettings();

  return (
    <section className="relative py-16 sm:py-24 bg-white text-[#042047] overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-[#00aeef]/30 text-[#0c71c3] text-xs sm:text-sm font-black mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>TRAINING CENTERS & REACH</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
            Our Centers & <span className="text-[#00aeef]">Global Reach</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Offline academy in Barasat, Kolkata & interactive online batches connecting aspiring grandmasters across the world.
          </p>
        </div>

        {/* 2-Column: Physical Center + Global Online */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Barasat Offline Academy */}
          <div className="rounded-3xl bg-slate-50 border-2 border-slate-200 p-7 sm:p-8 hover:border-[#00aeef] transition-all shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-[#042047] text-[#ffe80a] text-[11px] font-black uppercase px-3 py-1 rounded-full tracking-wider">
                  Physical Training Center
                </span>
                <div className="w-10 h-10 rounded-2xl bg-sky-100 text-[#0c71c3] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#042047]">
                AIM Chess Academy, Barasat
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                  <span>Nabapally, Choto Bazar, Surendranath Colony, Barasat-700126, Kolkata, West Bengal, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#00aeef] shrink-0" />
                  <span>Monday to Sunday: 9:00 AM - 8:30 PM (IST)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#00aeef] shrink-0" />
                  <a href={getPhoneUrl()} className="font-bold text-[#042047] hover:underline">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef]" />
                  <span>Physical tournament wooden boards & digital clocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef]" />
                  <span>Demonstration board group analysis & puzzle solve sessions</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <a
                href="https://g.co/kgs/y9aG7qE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#042047] hover:bg-[#00aeef] text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#ffe80a]" />
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Global Online Academy */}
          <div className="rounded-3xl bg-[#042047] text-white p-7 sm:p-8 border-2 border-[#00aeef]/40 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-[#ffe80a] text-[#042047] text-[11px] font-black uppercase px-3 py-1 rounded-full tracking-wider">
                  Worldwide Virtual Classroom
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#00aeef]/20 text-[#00aeef] flex items-center justify-center">
                  <Globe2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                Global Online Coaching
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-200 pt-1">
                <div className="flex items-start gap-2.5">
                  <Laptop className="w-4 h-4 text-[#ffe80a] shrink-0 mt-0.5" />
                  <span>High-speed live interactive classes via video conference & digital demonstration boards.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#ffe80a] shrink-0" />
                  <span>Custom time slots for USA, UK, Canada, Australia, Singapore & UAE.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-1.5 text-xs text-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffe80a]" />
                  <span>Personalized homework & PGN blunder analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffe80a]" />
                  <span>Monthly online internal practice tournaments with live ratings</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-xs sm:text-sm transition-all shadow-md border-2 border-[#042047]"
              >
                <span>Book Global Online Trial Class</span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default LocationSection;
