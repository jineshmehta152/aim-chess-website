"use client";

import React from "react";
import Image from "next/image";
import { 
  Star, 
  Sparkles, 
  Quote, 
  CheckCircle2, 
  Trophy, 
  ExternalLink,
  ShieldCheck,
  User
} from "lucide-react";

export function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      name: "Arjun Kar",
      role: "FIDE Rated Student",
      avatarBg: "bg-gradient-to-br from-[#ffe80a] to-[#f59e0b]",
      avatarColor: "text-[#042047]",
      initials: "AK",
      rating: 5,
      comment: "Thanks to AIM Chess Academy, I earned my FIDE rating and gained more confidence in my problem-solving. The academy's great environment and challenging tournaments helped me grow.",
      badge: "FIDE Rated Champion",
      highlight: "Earned FIDE Rating"
    },
    {
      id: 2,
      name: "Rina Mitra",
      role: "Tournament Competitor",
      avatarBg: "bg-gradient-to-br from-[#00aeef] to-[#0c71c3]",
      avatarColor: "text-white",
      initials: "RM",
      rating: 5,
      comment: "The inter-academy competitions were exciting and taught me a lot about strategy and how to stay strong. AIM Chess Academy really makes chess more than just a game!",
      badge: "Inter-Academy Player",
      highlight: "Strategic Mastery"
    },
    {
      id: 3,
      name: "Priya Sen",
      role: "Proud Parent",
      avatarBg: "bg-gradient-to-br from-[#042047] to-[#0c71c3]",
      avatarColor: "text-[#ffe80a]",
      initials: "PS",
      rating: 5,
      comment: "AIM Chess Academy has made a big difference for my child. The lessons are well-organized, and the coaching has really helped improve their chess skills and confidence.",
      badge: "Parent Testimonial",
      highlight: "Confidence & Skills"
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#f8fafc] text-[#042047] overflow-hidden" id="testimonials">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/30 text-[#0c71c3] text-xs sm:text-sm font-black mb-3 shadow-xs">
            <div className="flex text-[#ffe80a]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>5.0★ GOOGLE VERIFIED REVIEWS</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-4xl font-black text-[#042047] tracking-tight leading-[1.2]">
            Real Stories from{" "}
            <span className="bg-[#ffe80a] text-[#042047] font-black px-4 py-1 rounded-2xl inline-block shadow-xs">
              Our Students
            </span>
            <br />
            And{" "}
            <span className="bg-[#00aeef] text-white font-black px-4 py-1 rounded-2xl inline-block shadow-xs mt-1">
              Proud Parents
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Hear how AIM Chess Academy has nurtured tactical excellence, confidence, and international FIDE ratings.
          </p>
        </div>

        {/* 3 Unique Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-[1300px] mx-auto">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="rounded-[36px] bg-gradient-to-br from-[#0b2850] via-[#071f40] to-[#04162e] text-white p-7 sm:p-8 flex flex-col justify-between border-3 border-[#00aeef]/40 shadow-[0_10px_0_0_#042047] hover:shadow-[0_16px_0_0_#00aeef] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background Chess Ambient Watermark */}
              <div className="absolute -right-8 -bottom-8 opacity-5 text-white pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <Quote className="w-36 h-36" />
              </div>

              <div className="space-y-6 relative z-10">
                
                {/* User Header: Avatar Circle + Name & Role */}
                <div className="flex items-center gap-4">
                  
                  {/* Avatar Circle */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white flex items-center justify-center shrink-0 border-3 border-[#00aeef] shadow-md p-1">
                    <div className="w-full h-full rounded-full bg-[#042047] flex items-center justify-center text-white">
                      <User className="w-8 h-8 text-white stroke-[2]" />
                    </div>
                  </div>

                  {/* Name & Tag */}
                  <div className="space-y-0.5">
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {item.name}
                    </h3>
                    <div className="inline-block bg-[#00aeef]/20 text-[#ffe80a] border border-[#ffe80a]/30 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                      {item.role}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium">
                  {item.comment}
                </p>

              </div>

              {/* Card Footer: 5 Gold Stars & Google Verified Tag */}
              <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-1 text-[#ffe80a]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current drop-shadow-xs" />
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00aeef]" />
                  <span>Google Verified</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-14 max-w-xl mx-auto text-center p-5 rounded-3xl bg-white border-2 border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ffe80a] flex items-center justify-center text-[#042047] font-black">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-black text-[#042047]">5.0 Star Rated on Google</div>
              <div className="text-[11px] font-bold text-slate-500">Based on 34+ authentic student reviews</div>
            </div>
          </div>

          <a
            href="https://g.co/kgs/y9aG7qE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-black text-[#0c71c3] hover:text-[#00aeef] uppercase tracking-wider transition-colors"
          >
            <span>View All Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </section>
  );
}

export default TestimonialsSection;