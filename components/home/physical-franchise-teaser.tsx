"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { Store, Building2, BookOpen, Users, Trophy, ArrowRight, ShieldCheck } from "lucide-react";

export function PhysicalFranchiseTeaser() {
  return (
    <section className="relative py-16 sm:py-20 bg-white text-[#042047] border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-[#042047] via-[#092c5c] to-[#041935] text-white p-8 sm:p-12 overflow-hidden shadow-2xl border-2 border-[#00aeef]/30">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00aeef]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ffe80a]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffe80a] text-xs font-black uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#00aeef]" />
                <span>Physical Chess Centre Partnership</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Bring Structured Chess Education to Your City: <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe80a] to-[#00aeef]">
                  Open an AIM Chess Academy Centre
                </span>
              </h2>

              <p className="text-xs sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                We partner with passionate educators, entrepreneurs, and chess organizers to open and operate branded, physical AIM chess centres. Access our complete curriculum, coach training SOPs, tournament software, and academy brand presence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <BookOpen className="w-4 h-4 text-[#ffe80a] shrink-0" />
                  <span>ISO-Aligned Syllabuses</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Users className="w-4 h-4 text-[#00aeef] shrink-0" />
                  <span>Coach Training &amp; SOPs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Trophy className="w-4 h-4 text-[#ffe80a] shrink-0" />
                  <span>Tournament Circuit Support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-3">
              <Link
                href="/franchise"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-transform hover:scale-105"
              >
                <span>Franchise Overview &amp; Apply</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-[11px] text-slate-400 text-left lg:text-right flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>Physical centre franchise (not online teaching partner)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

