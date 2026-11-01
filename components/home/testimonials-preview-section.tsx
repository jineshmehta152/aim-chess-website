"use client";

import React, { useState, useRef } from "react";
import { Star, Quote, Play, Pause, ExternalLink, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsPreviewSection() {
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoList = [
    { src: "/vid1.mp4", student: "Junior Tournament Winner", context: "Student sharing tournament experience & coach guidance at AIM" },
    { src: "/vid2.mp4", student: "Parent Testimonial", context: "Parent reviewing the disciplined improvement in focus & calculation" },
    { src: "/vid3.mp4", student: "Academy Champion", context: "Young competitor sharing their winning game mindset" },
  ];

  const parentReviews = [
    {
      name: "Priya Sen",
      location: "Kolkata, India",
      role: "Parent of 8-year-old student",
      rating: 5,
      comment: "AIM Chess Academy has made a remarkable difference in my son's thinking. The lessons are methodical, and the coaches never rush. His concentration in school has improved alongside his chess tactics.",
      source: "Verified Google Review",
    },
    {
      name: "Rahul Mandal",
      location: "Aberdeen, Scotland (UK)",
      role: "Parent of Albyn Trophy Champion",
      rating: 5,
      comment: "Enrolling Nishka from Scotland was the best decision we made. The time zone matching was effortless, and coach Somnath and team ensured she was prepared to win the Albyn Trophy with a 5/5 clean sweep.",
      source: "Verified International Parent Review",
    },
    {
      name: "Siddharth Ghosh",
      location: "UAE",
      role: "Parent of Intermediate Student",
      rating: 5,
      comment: "The 1:4 small batches mean my daughter gets direct interaction in every session. She loves the weekly puzzle assignments and looks forward to tournament Saturdays.",
      source: "Verified International Parent Review",
    },
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const nextVideo = () => {
    if (videoRef.current) videoRef.current.pause();
    setIsPlaying(false);
    setCurrentVideoIdx((prev) => (prev + 1) % videoList.length);
  };

  const prevVideo = () => {
    if (videoRef.current) videoRef.current.pause();
    setIsPlaying(false);
    setCurrentVideoIdx((prev) => (prev - 1 + videoList.length) % videoList.length);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-slate-50 text-[#042047] border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Verified Parent Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042047] tracking-tight">
              What Parents &amp; Students Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Authentic reviews, permissioned video interviews, and verified ratings from chess families worldwide.
            </p>
          </div>

          <a
            href="https://g.co/kgs/y9aG7qE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#0c71c3] hover:text-[#042047] transition-colors"
          >
            <span>Read All Google Reviews (4.9 ★)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 2-Column Grid: Video Testimonial + Written Parent Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Permissioned Video Testimonial Player (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-5 border-2 border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-black text-[#042047] uppercase tracking-wider">
                Video Interview
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                {currentVideoIdx + 1} of {videoList.length}
              </span>
            </div>

            <div className="relative aspect-[9/14] sm:aspect-video lg:aspect-[9/13] w-full rounded-2xl overflow-hidden bg-black shadow-inner group">
              <video
                ref={videoRef}
                src={videoList[currentVideoIdx].src}
                className="w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
                playsInline
              />

              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#042047]/80 hover:bg-[#00aeef] text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-xl backdrop-blur-xs"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1 fill-current" />}
              </button>
            </div>

            <div className="space-y-1">
              <div className="text-sm font-black text-[#042047]">
                {videoList[currentVideoIdx].student}
              </div>
              <p className="text-xs text-slate-500">
                {videoList[currentVideoIdx].context}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button
                onClick={prevVideo}
                className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-xs font-bold text-slate-700 flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Video</span>
              </button>
              <button
                onClick={nextVideo}
                className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-xs font-bold text-slate-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Next Video</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Written Verified Parent Reviews (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {parentReviews.map((rev, rIdx) => (
              <div
                key={rIdx}
                className="bg-white rounded-3xl p-6 border-2 border-slate-200/80 hover:border-[#00aeef] transition-all shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-black text-[#042047]">
                        {rev.name}
                      </h3>
                      <span className="text-[10px] font-black uppercase text-[#0c71c3] bg-sky-50 px-2 py-0.5 rounded-md">
                        {rev.location}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {rev.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {rev.source}
                  </span>
                  <span>Permissioned Feedback</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

