"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Laptop, 
  UserCheck, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from "lucide-react";

export function StudentPortalPreviewSection() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "schedule" | "homework" | "progress">("dashboard");

  return (
    <section id="portal-preview" className="relative py-16 sm:py-24 bg-[#042047] text-white overflow-hidden scroll-mt-20">
      
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffe80a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#ffe80a] text-xs font-black uppercase tracking-wider">
              <Laptop className="w-3.5 h-3.5 text-[#00aeef]" />
              <span>Dedicated Digital Learning Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              AIM Student Classroom &amp; Portal
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Every enrolled student receives a unique AIM Chess ID, dedicated live batch access, weekly puzzle assignments, and coach review notes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://classroom.aimchessacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer hover:scale-105"
            >
              <UserCheck className="w-4 h-4" />
              <span>Login to Student Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Portal Interactive Mockup Interface */}
        <div className="bg-slate-900/90 rounded-3xl border-2 border-[#00aeef]/30 shadow-2xl overflow-hidden backdrop-blur-md">
          
          {/* Top Browser / App Navigation Bar */}
          <div className="bg-[#03152f] px-4 sm:px-6 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="hidden sm:inline-block text-xs font-mono text-slate-400 px-3 py-1 bg-black/40 rounded-lg border border-white/10">
                https://classroom.aimchessacademy.com/student/dashboard
              </div>
            </div>

            {/* Student ID Badge */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Student ID:</span>
              <span className="font-mono font-bold bg-[#00aeef]/20 text-[#00aeef] px-2.5 py-0.5 rounded-md border border-[#00aeef]/40">
                AIM-2024-8849
              </span>
            </div>
          </div>

          {/* Portal Tabs */}
          <div className="bg-black/20 px-4 sm:px-6 pt-3 flex items-center gap-2 overflow-x-auto border-b border-white/10">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === "dashboard"
                  ? "bg-[#042047] text-[#ffe80a] border-t-2 border-[#ffe80a]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Student Overview</span>
              <span className="text-[9px] bg-emerald-500/30 text-emerald-300 font-bold px-1.5 py-0.2 rounded">LIVE</span>
            </button>

            <button
              onClick={() => setActiveTab("schedule")}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === "schedule"
                  ? "bg-[#042047] text-[#ffe80a] border-t-2 border-[#ffe80a]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Batch Schedule &amp; Classroom</span>
              <span className="text-[9px] bg-emerald-500/30 text-emerald-300 font-bold px-1.5 py-0.2 rounded">LIVE</span>
            </button>

            <button
              onClick={() => setActiveTab("homework")}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === "homework"
                  ? "bg-[#042047] text-[#ffe80a] border-t-2 border-[#ffe80a]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Homework &amp; Puzzles</span>
              <span className="text-[9px] bg-emerald-500/30 text-emerald-300 font-bold px-1.5 py-0.2 rounded">LIVE</span>
            </button>

            <button
              onClick={() => setActiveTab("progress")}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === "progress"
                  ? "bg-[#042047] text-[#ffe80a] border-t-2 border-[#ffe80a]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Tournaments &amp; Rating Track</span>
              <span className="text-[9px] bg-amber-500/30 text-amber-300 font-bold px-1.5 py-0.2 rounded">UPCOMING V2</span>
            </button>
          </div>

          {/* Portal Content Area */}
          <div className="p-4 sm:p-6 lg:p-8">
            
            {/* Tab 1: Dashboard Overview */}
            {activeTab === "dashboard" && (
              <div className="space-y-6 animate-in fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-[11px] uppercase font-bold text-slate-400">Enrolled Course</div>
                    <div className="text-lg font-black text-white">Intermediate Tactics (IM-3)</div>
                    <div className="text-xs text-[#00aeef] font-semibold">Coach: Souvick Roy Chowdhury (FIDE 1966)</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-[11px] uppercase font-bold text-slate-400">Class Attendance</div>
                    <div className="text-lg font-black text-emerald-400">96% (24 / 25 Sessions)</div>
                    <div className="text-xs text-slate-400">Next Class: Tomorrow, 6:00 PM IST</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-[11px] uppercase font-bold text-slate-400">Tactical Homework Score</div>
                    <div className="text-lg font-black text-[#ffe80a]">18 / 20 Puzzles Solved</div>
                    <div className="text-xs text-slate-400">Topic: Discovered Attack &amp; Rook Endgames</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-black text-[#ffe80a] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Upcoming Live Interactive Classroom</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Tactical Calculation &amp; Pawn Breakthroughs (Batch IM3-A)
                    </h3>
                    <p className="text-xs text-slate-400">
                      Live video + digital shared board. Bring your puzzle notebook.
                    </p>
                  </div>
                  <a
                    href="https://classroom.aimchessacademy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#00aeef] hover:bg-[#009cd7] text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-md transition-colors"
                  >
                    Launch Live Board
                  </a>
                </div>
              </div>
            )}

            {/* Tab 2: Schedule & Classroom */}
            {activeTab === "schedule" && (
              <div className="space-y-4 animate-in fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#ffe80a] uppercase">Weekly Batch Timetable</span>
                      <span className="text-[11px] text-slate-400">Auto-synced to your local timezone</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white/5 flex items-center justify-between">
                        <span className="font-bold text-white">Tuesday &amp; Thursday</span>
                        <span className="text-[#00aeef] font-mono font-bold">6:00 PM – 7:15 PM IST</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 flex items-center justify-between">
                        <span className="font-bold text-white">Saturday Practice Arena</span>
                        <span className="text-[#ffe80a] font-mono font-bold">5:00 PM – 6:30 PM IST</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <div className="text-xs font-black text-white">Missed Class Policy &amp; Recordings</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      All live classes provide recorded review notes and assigned tactical puzzles. If your child misses a session due to exams or illness, a makeup session or recorded review is coordinated.
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Dedicated WhatsApp coordinator support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Homework & Puzzles */}
            {activeTab === "homework" && (
              <div className="space-y-4 animate-in fade-in">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#00aeef] uppercase">Current Assignment: Week 14</span>
                    <span className="text-[11px] text-amber-300 font-bold">Due in 2 days</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="text-slate-400">Set 1: Mating Nets</div>
                      <div className="text-sm font-bold text-white">5 Puzzles</div>
                      <span className="text-[10px] text-emerald-400 font-bold">✓ Completed (5/5)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="text-slate-400">Set 2: Deflection Tactics</div>
                      <div className="text-sm font-bold text-white">5 Puzzles</div>
                      <span className="text-[10px] text-emerald-400 font-bold">✓ Completed (4/5)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="text-slate-400">Set 3: Rook Endgames</div>
                      <div className="text-sm font-bold text-white">5 Puzzles</div>
                      <span className="text-[10px] text-amber-400 font-bold">Pending submission</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Progress & Tournaments (Transparently labeled as Upcoming V2 capability) */}
            {activeTab === "progress" && (
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3 animate-in fade-in">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 text-amber-300" />
                  <span>Upcoming Portal Capability (Under Active Development)</span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-white">
                  Automated Rating Tracking &amp; Digital Trophy Showcase
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Per our commitment to transparent claims: progress tracking is currently managed through personal coach reports and weekly scorecard PDFs. Our upcoming Portal V2 release will introduce automated FIDE Elo sync, AI game blunder analytics, and digital verified tournament certificates.
                </p>
              </div>
            )}

          </div>

          {/* Honest Capability Footer per Brief */}
          <div className="bg-black/40 px-4 sm:px-6 py-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00aeef]" />
              <span>Active students receive immediate credentials upon enrollment.</span>
            </div>
            <a
              href="https://classroom.aimchessacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffe80a] font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Access Student Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

