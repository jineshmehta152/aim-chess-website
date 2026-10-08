"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";
import { 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck,
  Award,
  Globe2,
  Zap,
  GraduationCap
} from "lucide-react";

export default function BookingModal() {
  const { isOpen, closeBookingModal, selectedEventType } = useBookingModal();
  const { phone, email, address, getPhoneUrl, getEmailUrl, getWhatsAppUrl } = useSiteSettings();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "India",
    childAge: "8-10 years",
    level: selectedEventType || "Beginner",
    device: "Laptop",
    date: "",
    timeSlot: "evening",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedEventType) {
      setFormData((prev) => ({ ...prev, level: selectedEventType }));
    }
  }, [selectedEventType]);

  // Handle ESC key press
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
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeBookingModal]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiries", {
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

      setIsSubmitted(true);
    } catch (err) {
      console.error("Booking error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#042047]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border-2 border-[#00aeef]/30 grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeBookingModal}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-[#042047] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Brand & Direct Contact */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#042047] via-[#092c5c] to-[#041935] text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-block bg-white p-2 rounded-2xl shadow-sm">
              <Image 
                src="/logo.png" 
                alt="AIM Chess Academy" 
                width={140} 
                height={55} 
                className="h-10 w-auto object-contain"
              />
            </div>

            <div>
              <div className="text-[11px] font-black uppercase tracking-wider text-[#ffe80a] mb-1">
                ACHIEVE • INSPIRE • MAINTAIN
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Book a Free 30-Minute Demo Class
              </h3>
              <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                Connect with our certified FIDE coaches. We evaluate your child&apos;s thinking, recommend the ideal batch, and guide their championship journey.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#00aeef] shrink-0" />
                <span>Training by FIDE-Certified Trainers</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Award className="w-4 h-4 text-[#ffe80a] shrink-0" />
                <span>ISO-Certified Curriculum</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Globe2 className="w-4 h-4 text-[#00aeef] shrink-0" />
                <span>Global Batches (India, USA, UK, UAE, etc.)</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="pt-4 border-t border-white/15 space-y-3 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00aeef]" />
              <a href={getPhoneUrl()} className="font-bold hover:text-[#ffe80a] text-white transition-colors">
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#00aeef]" />
              <span className="text-slate-200">{email || "contact@aimchessacademy.com"}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#ffe80a] shrink-0 mt-0.5" />
              <span className="text-slate-300 text-[11px]">Nabapally, Choto Bazar, Barasat-700126, WB, India</span>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00aeef] hover:bg-[#009cd7] text-white font-bold py-2 rounded-xl text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Demo Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-white text-[#042047]">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-[#042047]">
                Free Demo Request Received!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for enrolling with AIM Chess Academy! Our coach will contact you within 24 hours to confirm your trial schedule.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    closeBookingModal();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#042047] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-5">
                <span className="text-[11px] font-black uppercase text-[#0c71c3] tracking-wider">
                  Admission Form
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-[#042047]">
                  Enroll For Free Demo Class
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fill in your details below to schedule your trial class.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20 outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99034 52493"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20 outline-none text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your-email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20 outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Select Country
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20 outline-none text-xs bg-slate-50 font-semibold"
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

                {/* Age & Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Child&apos;s Age
                    </label>
                    <select
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-slate-50 font-semibold"
                    >
                      <option value="5-7 years">5-7 years</option>
                      <option value="8-10 years">8-10 years</option>
                      <option value="11-15 years">11-15 years</option>
                      <option value="Above 15 years">Above 15 years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Desired Course / Skill Level
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-slate-50 font-semibold"
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

                {/* Device & TimeSlot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Device For Classes
                    </label>
                    <select
                      value={formData.device}
                      onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-slate-50 font-semibold"
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
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#00aeef] outline-none text-xs bg-slate-50 font-semibold"
                    >
                      <option value="evening">Evening Batch (5:00 PM - 7:00 PM)</option>
                      <option value="morning">Morning Batch (10:00 AM - 12:00 PM)</option>
                      <option value="weekend">Weekend Batch (Sat / Sun)</option>
                      <option value="custom">Custom International Time Slot</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Student Notes or Tournament Experience (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us if your child knows basic moves, has a FIDE rating, etc..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20 outline-none text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all border-2 border-[#042047] cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>{isSubmitting ? "Submitting Request..." : "Submit Form & Book Free Demo"}</span>
                </button>

                <div className="text-center text-[10px] text-slate-500 font-medium">
                  🔒 100% Free Trial · No Commitment Required
                </div>

              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
