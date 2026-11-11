"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Award,
  Globe2,
  Zap,
  GraduationCap
} from "lucide-react";
import { useSiteSettings } from "@/context/site-settings-context";

export function ContactSection() {
  const { phone, email, address, opening_hours, getPhoneUrl, getEmailUrl, getWhatsAppUrl } = useSiteSettings();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "India",
    childAge: "8-10 years",
    level: "Beginner",
    device: "Laptop",
    date: "",
    timeSlot: "evening",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          eventType: `${formData.level} - ${formData.childAge} (${formData.country}, ${formData.device})`,
          date: formData.date || new Date().toISOString().split("T")[0],
          timeSlot: formData.timeSlot,
          guests: formData.childAge,
          package: formData.level,
          message: formData.message,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-12 sm:py-24 bg-slate-50 text-[#042047] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ffe80a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/30 text-[#0c71c3] text-xs sm:text-sm font-black mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>CONTACT AIM CHESS ACADEMY</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-tight">
            Start Your Chess Journey <span className="text-[#00aeef]">With Us</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            Have questions about batches, demo sessions, or FIDE rating tournaments? Reach out to our team today.
          </p>
        </div>

        {/* 2-Column: Left Brand Card + Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Direct Academy Contact Details & Academy Office Photo */}
          <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#042047] via-[#092c5c] to-[#041935] text-white p-5 xs:p-7 sm:p-9 shadow-2xl border-2 sm:border-4 border-[#00aeef]/30 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              
              {/* Academy Office Consultation Image */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-white/20 shadow-md group">
                <Image
                  src="/images/contact-academy.jpg"
                  alt="AIM Chess Academy Office & Coaching Consultation"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042047]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-black text-white bg-[#042047]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ffe80a]" />
                    <span>Personalized Consultation</span>
                  </span>
                  <span className="text-[#00aeef]">FIDE Certified</span>
                </div>
              </div>

              <div>
                <div className="text-xs font-black uppercase text-[#ffe80a] tracking-wider mb-1">
                  ACHIEVE • INSPIRE • MAINTAIN
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  AIM Chess Academy
                </h3>
                <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                  Premier chess training center in Barasat, Kolkata & global online academy. Nurturing critical thinking, tournament confidence, and grandmaster ambitions.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#ffe80a] shrink-0 mt-0.5" />
                  <span className="text-slate-200 leading-snug">
                    {address || "Nabapally, Choto Bazar, Surendranath Colony, Barasat-700126, Kolkata, West Bengal, India"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#00aeef] shrink-0" />
                  <a href={getPhoneUrl()} className="font-bold text-white hover:text-[#ffe80a] transition-colors">
                    {phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#00aeef] shrink-0" />
                  <a href={getEmailUrl()} className="text-slate-200 hover:text-[#ffe80a] transition-colors">
                    {email || "contact@aimchessacademy.com"}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#ffe80a] shrink-0 mt-0.5" />
                  <span className="text-slate-200">
                    Monday to Sunday: 9:00 AM - 8:30 PM (IST)<br />
                    (Online & Offline Batches)
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00aeef] hover:bg-[#009cd7] text-white font-bold py-3 rounded-2xl text-xs sm:text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Admission & Free Demo Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 xs:p-7 sm:p-9 shadow-xl border border-slate-200">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#042047]">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  We have received your demo class inquiry. Our senior coach will contact you within 24 hours to schedule your free session.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#042047] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-black uppercase text-[#0c71c3] tracking-wider">
                    Free Trial Session
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#042047]">
                    Book Your 30-Minute Free Demo
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your child&apos;s details to reserve a free interactive evaluation with a FIDE coach.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Student / Parent Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sourav Banerjee"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20 outline-none text-xs bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 99034 52493"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20 outline-none text-xs bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your-email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20 outline-none text-xs bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Country
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-slate-50 font-semibold"
                      >
                        <option value="India">India (₹)</option>
                        <option value="USA">USA ($)</option>
                        <option value="UK">UK (£)</option>
                        <option value="Australia">Australia (A$)</option>
                        <option value="Canada">Canada (C$)</option>
                        <option value="Singapore">Singapore (S$)</option>
                        <option value="UAE">UAE (AED)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Child&apos;s Age
                      </label>
                      <select
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-slate-50 font-semibold"
                      >
                        <option value="5-7 years">5-7 years</option>
                        <option value="8-10 years">8-10 years</option>
                        <option value="11-15 years">11-15 years</option>
                        <option value="Above 15 years">Above 15 years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Desired Course
                      </label>
                      <select
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-slate-50 font-semibold"
                      >
                        <option value="Beginner">Beginner Course (Age 5+)</option>
                        <option value="Intermediate">Intermediate Course</option>
                        <option value="Advanced">Advanced Course</option>
                        <option value="Individual">Individual 1-on-1 Classes</option>
                        <option value="Expert">Expert Master Course</option>
                        <option value="FIDE Rating">FIDE Rating Course</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Device For Classes
                      </label>
                      <select
                        value={formData.device}
                        onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-slate-50 font-semibold"
                      >
                        <option value="Laptop">Laptop</option>
                        <option value="Desktop">Desktop</option>
                        <option value="Tablet">Tablet / iPad</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Preferred Batch Time
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-slate-50 font-semibold"
                      >
                        <option value="evening">Evening Batch (5:00 PM - 7:00 PM)</option>
                        <option value="morning">Morning Batch (10:00 AM - 12:00 PM)</option>
                        <option value="weekend">Weekend Batch (Saturday / Sunday)</option>
                        <option value="custom">Custom International Time Slot</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Notes or Prior Chess Experience (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Let us know if your child knows basic moves, piece values, or has played in tournaments..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20 outline-none text-xs bg-slate-50/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all border-2 border-[#042047] cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Submitting..." : "Submit Form & Book Free Demo Class"}</span>
                  </button>

                  <div className="text-center text-[11px] text-slate-500 font-medium">
                    🔒 We respect your privacy. No spam guaranteed.
                  </div>

                </form>
              </div>
            )}
          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;
