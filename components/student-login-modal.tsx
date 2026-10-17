"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useBookingModal } from "@/context/booking-modal-context";
import { 
  X, 
  GraduationCap, 
  UserCheck, 
  ShieldCheck, 
  KeyRound, 
  BookOpen, 
  Trophy, 
  FileText, 
  Sparkles, 
  ArrowRight,
  Lock,
  AlertCircle,
  CheckCircle2,
  Users
} from "lucide-react";

export default function StudentLoginModal() {
  const { isStudentLoginOpen, closeStudentLoginModal, openBookingModal } = useBookingModal();

  const [portalRole, setPortalRole] = useState<"student" | "coach" | "admin">("student");
  const [aimId, setAimId] = useState("");
  const [password, setPassword] = useState("");
  const [showStatus, setShowStatus] = useState<string | null>(null);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isStudentLoginOpen) {
        closeStudentLoginModal();
      }
    };
    if (isStudentLoginOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isStudentLoginOpen, closeStudentLoginModal]);

  if (!isStudentLoginOpen) return null;

  const handleFillDemoCredentials = () => {
    if (portalRole === "student") {
      setAimId("AIM-2024-8842");
      setPassword("AimStudent@2024");
    } else if (portalRole === "coach") {
      setAimId("COACH-SB-01");
      setPassword("FideCoach@2024");
    } else {
      setAimId("ADMIN-AIM-01");
      setPassword("AdminAccess#2024");
    }
    setShowStatus(null);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://classroom.aimchessacademy.com";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Dark backdrop with blur */}
      <div 
        className="fixed inset-0 bg-[#042047]/80 backdrop-blur-sm transition-opacity"
        onClick={closeStudentLoginModal}
      />

      {/* Main Neo-brutalist modal dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-[28px] sm:rounded-[36px] border-[3.5px] border-[#042047] shadow-[8px_8px_0px_0px_#042047] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-auto text-left">
        
        {/* Close Button */}
        <button
          onClick={closeStudentLoginModal}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white hover:bg-slate-100 border-2 border-[#042047] shadow-[2px_2px_0px_0px_#042047] flex items-center justify-center text-[#042047] hover:scale-105 transition-all cursor-pointer"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Academy Student Platform Presentation (Deep Navy Brand) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0b2850] via-[#071f40] to-[#04162e] text-white p-6 sm:p-8 flex flex-col justify-between border-b-[3px] lg:border-b-0 lg:border-r-[3.5px] border-[#042047] relative overflow-hidden">
            
            {/* Background ambient accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffe80a]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-5">
              
              {/* Logo & Platform Tag */}
              <div className="flex items-center gap-3">
                <Image 
                  src="/logo.png" 
                  alt="AIM Chess Academy Logo" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 object-contain bg-white rounded-xl p-1 border-2 border-[#00aeef]"
                />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#ffe80a]">
                    STUDENT & PARENT PORTAL
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-white">
                    AIM Classroom 2.0
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Inspired by international digital chess classrooms, our dedicated platform connects students, parents, and FIDE coaches with 24/7 learning tools.
              </p>

              {/* Portal Features Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-[11px] font-black text-[#00aeef] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ffe80a]" />
                  <span>INCLUDED IN YOUR PORTAL:</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-md bg-[#00aeef]/20 border border-[#00aeef]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <BookOpen className="w-3 h-3 text-[#00aeef]" />
                    </div>
                    <span><strong>Attendance & Class Notes:</strong> Live lesson summaries and assigned PGN files.</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-md bg-[#ffe80a]/20 border border-[#ffe80a]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-3 h-3 text-[#ffe80a]" />
                    </div>
                    <span><strong>Homework & Game Review:</strong> Weekly puzzle tasks and personalized move critique.</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-md bg-[#00aeef]/20 border border-[#00aeef]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Trophy className="w-3 h-3 text-[#00aeef]" />
                    </div>
                    <span><strong>Leaderboards & Tournaments:</strong> Monthly internal blitz & rapid standings.</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-md bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span><strong>Level Certificates:</strong> Official ISO recognized graduation credentials.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Security Assurance */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strict parent-monitored child-safe digital environment.</span>
            </div>

          </div>

          {/* Right Column: Portal Login Form with Role Tabs & Approval Notice */}
          <div className="lg:col-span-7 p-5 sm:p-8 bg-white flex flex-col justify-between">
            
            <div className="space-y-5">
              
              {/* Header */}
              <div>
                <span className="text-[11px] font-black uppercase text-[#0c71c3] tracking-wider">
                  Secure Access Portal
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-[#042047]">
                  Sign In with Your AIM Chess ID
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Enter your assigned credentials to access class materials, homework, and tournament records.
                </p>
              </div>

              {/* Role Selector Tabs (Student / Coach / Admin) */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => { setPortalRole("student"); setShowStatus(null); }}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    portalRole === "student"
                      ? "bg-[#042047] text-white shadow-xs"
                      : "text-slate-600 hover:text-[#042047]"
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Student / Parent</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setPortalRole("coach"); setShowStatus(null); }}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    portalRole === "coach"
                      ? "bg-[#042047] text-white shadow-xs"
                      : "text-slate-600 hover:text-[#042047]"
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Coach</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setPortalRole("admin"); setShowStatus(null); }}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    portalRole === "admin"
                      ? "bg-[#042047] text-white shadow-xs"
                      : "text-slate-600 hover:text-[#042047]"
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin</span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
                
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {portalRole === "student" ? "Unique AIM Chess ID or Registered Email *" : "Coach / Admin ID *"}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder={portalRole === "student" ? "e.g. AIM-2024-8842" : "e.g. COACH-SB-01"}
                      value={aimId}
                      onChange={(e) => setAimId(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20 outline-none text-xs font-semibold text-[#042047]"
                    />
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block font-bold text-slate-700">
                      Password *
                    </label>
                    <button
                      type="button"
                      onClick={() => alert("Please contact academy admin at contact@aimchessacademy.com or WhatsApp +91 99034 52493 to reset your AIM Chess ID password.")}
                      className="text-[11px] font-bold text-[#0c71c3] hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20 outline-none text-xs font-semibold text-[#042047]"
                    />
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                {/* Helper quick demo test fill */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Testing the platform?</span>
                  <button
                    type="button"
                    onClick={handleFillDemoCredentials}
                    className="font-black text-[#0c71c3] hover:text-[#00aeef] underline cursor-pointer"
                  >
                    Auto-Fill Demo Credentials
                  </button>
                </div>

                {/* Status Message */}
                {showStatus === "demo_notice" && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1.5 animate-in fade-in">
                    <div className="flex items-center gap-2 font-black text-amber-800">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Stage 2 Classroom Portal Integration</span>
                    </div>
                    <p className="text-[11px] text-amber-800/90 leading-relaxed">
                      AIM Chess Academy Classroom Portal is actively in Phase 2 development. New online student registrations are kept in an <strong>admin pending approval queue</strong>. To enroll your child or receive your unique AIM Chess ID, please book a free demo session below!
                    </p>
                  </div>
                )}

                {/* Sign In CTA Button */}
                <a
                  href="https://classroom.aimchessacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#042047] hover:bg-[#092c5c] text-white font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-[#042047] shadow-[3px_3px_0px_0px_#ffe80a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4 text-[#ffe80a]" />
                  <span>SIGN IN TO CLASSROOM PORTAL</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

              </form>

              {/* Admin Approval Notice Banner */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                <p>
                  <strong>Admin Approval Rule:</strong> All new online student and payment-based registrations enter a pending approval stage. The academy admin verifies and approves each profile before live account activation.
                </p>
              </div>

            </div>

            {/* Bottom New Student Prompt */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Don&apos;t have an AIM Chess ID yet?
              </span>
              <button
                type="button"
                onClick={() => {
                  closeStudentLoginModal();
                  openBookingModal();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ffe80a] text-[#042047] font-black text-xs border border-[#042047] hover:bg-[#fed100] transition-colors cursor-pointer whitespace-nowrap"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Book Free Demo & Register</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
