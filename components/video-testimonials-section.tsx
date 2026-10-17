"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
  Video, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Volume2,
  VolumeX
} from "lucide-react";

interface VideoItem {
  id: number;
  src: string;
}

const VIDEOS: VideoItem[] = [
  { id: 1, src: "/vid1.mp4" },
  { id: 2, src: "/vid2.mp4" },
  { id: 3, src: "/vid3.mp4" },
  { id: 4, src: "/vid4.mp4" },
  { id: 5, src: "/vid5.mp4" },
  { id: 6, src: "/vid6.mp4" },
  { id: 7, src: "/vid7.mp4" }
];

export default function VideoTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const total = VIDEOS.length;

  // Pause active video when switching slides
  const pauseAllVideos = useCallback(() => {
    videoRefs.current.forEach((video) => {
      if (video && !video.paused) {
        video.pause();
      }
    });
    setIsPlaying(false);
  }, []);

  const goToSlide = useCallback((index: number) => {
    pauseAllVideos();
    const normalized = (index + total) % total;
    setCurrentIndex(normalized);
  }, [total, pauseAllVideos]);

  const handlePrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const handleNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Toggle play/pause on the active video
  const togglePlay = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (!currentVideo) return;

    if (currentVideo.paused) {
      currentVideo.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Handle playback error if needed
      });
    } else {
      currentVideo.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentVideo = videoRefs.current[currentIndex];
    if (!currentVideo) return;
    currentVideo.muted = !currentVideo.muted;
    setIsMuted(currentVideo.muted);
  };

  // Compute offset between an item and the active index for the 3D stack
  const getOffset = (index: number) => {
    let diff = (index - currentIndex) % total;
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;
    return diff;
  };

  return (
    <section 
      className="relative py-20 sm:py-28 bg-[#f8fafc] text-[#042047] overflow-hidden" 
      id="video-testimonials"
    >
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00aeef]/30 text-[#0c71c3] text-xs sm:text-sm font-black mb-3 shadow-xs">
            <Video className="w-4 h-4 text-[#00aeef]" />
            <span>VIDEO TESTIMONIALS · STUDENT &amp; PARENT EXPERIENCES</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#042047] tracking-tight leading-[1.2]">
            Real Stories from{" "}
            <span className="bg-[#ffe80a] text-[#042047] font-black px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-2xl inline-block shadow-xs">
              Our Students &amp; Parents
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            Watch authentic video reviews and tournament experiences from our chess champions, international learners, and dedicated families.
          </p>
        </div>

        {/* 3D Stacked Video Carousel Container */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center min-h-[260px] xs:min-h-[320px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            type="button"
            className="absolute left-2 sm:left-4 lg:-left-6 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-[#042047] border-2 sm:border-[3px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] sm:shadow-[5px_5px_0px_0px_#042047] hover:shadow-[1px_1px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center cursor-pointer group"
            aria-label="Previous video testimonial"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            type="button"
            className="absolute right-2 sm:right-4 lg:-right-6 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-[#042047] border-2 sm:border-[3px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] sm:shadow-[5px_5px_0px_0px_#042047] hover:shadow-[1px_1px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center cursor-pointer group"
            aria-label="Next video testimonial"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Video Stack Wrapper */}
          <div className="relative w-full max-w-[760px] flex items-center justify-center">
            {VIDEOS.map((item, index) => {
              const offset = getOffset(index);
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Styles based on offset position for 3D stacked view
              let transformStyles = "";
              let zIndex = 10;
              let opacity = 0;
              let pointerEvents: "auto" | "none" = "none";

              if (offset === 0) {
                // Active Center Video Card
                transformStyles = "translateX(0%) scale(1)";
                zIndex = 30;
                opacity = 1;
                pointerEvents = "auto";
              } else if (offset === -1) {
                // 1 step Left
                transformStyles = "translateX(-48%) scale(0.82)";
                zIndex = 20;
                opacity = 0.6;
                pointerEvents = "auto";
              } else if (offset === 1) {
                // 1 step Right
                transformStyles = "translateX(48%) scale(0.82)";
                zIndex = 20;
                opacity = 0.6;
                pointerEvents = "auto";
              } else if (offset === -2) {
                // 2 steps Left
                transformStyles = "translateX(-82%) scale(0.68)";
                zIndex = 10;
                opacity = 0.3;
                pointerEvents = "auto";
              } else if (offset === 2) {
                // 2 steps Right
                transformStyles = "translateX(82%) scale(0.68)";
                zIndex = 10;
                opacity = 0.3;
                pointerEvents = "auto";
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!isActive) {
                      goToSlide(index);
                    }
                  }}
                  className={`absolute w-full aspect-video rounded-2xl sm:rounded-[32px] overflow-hidden border-[2.5px] sm:border-[3.5px] border-[#042047] shadow-[6px_6px_0px_0px_#042047] sm:shadow-[8px_8px_0px_0px_#042047] bg-black transition-all duration-500 ease-out cursor-pointer select-none ${
                    isActive ? "ring-4 ring-[#ffe80a]/40" : "hover:opacity-80"
                  }`}
                  style={{
                    transform: transformStyles,
                    zIndex,
                    opacity,
                    pointerEvents
                  }}
                >
                  {/* Clean 16:9 Video (No text overlay) */}
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={item.src}
                    playsInline
                    preload="metadata"
                    controls={isActive && isPlaying}
                    onPlay={() => {
                      if (isActive) setIsPlaying(true);
                    }}
                    onPause={() => {
                      if (isActive) setIsPlaying(false);
                    }}
                    onEnded={() => {
                      if (isActive) setIsPlaying(false);
                    }}
                    className="w-full h-full object-cover bg-black"
                  />

                  {/* Active Slide Play Button Overlay (Only shown on center active item when paused) */}
                  {isActive && !isPlaying && (
                    <div 
                      onClick={togglePlay}
                      className="absolute inset-0 bg-black/25 flex items-center justify-center transition-opacity hover:bg-black/35 group"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#042047]/90 hover:bg-[#042047] text-[#ffe80a] border-[3px] border-[#ffe80a] shadow-[0_8px_25px_rgba(4,32,71,0.5)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 cursor-pointer">
                        <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-[#ffe80a] translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Top-Right Mute/Unmute Toggle on Active Video */}
                  {isActive && isPlaying && (
                    <button
                      onClick={toggleMute}
                      type="button"
                      className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center border border-white/20 shadow-md transition-all cursor-pointer"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-red-400" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  )}

                  {/* Non-Active Slide Tint Overlay to accentuate depth */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-[#042047]/30 hover:bg-transparent transition-colors" />
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Pagination Dots & Slide Counter */}
        <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:mt-12">
          
          {/* Indicator Dots */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {VIDEOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                type="button"
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 sm:w-10 bg-[#042047] shadow-xs"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial video ${idx + 1}`}
              />
            ))}
          </div>

          {/* Clean Counter */}
          <div className="text-xs font-black uppercase tracking-widest text-[#0c71c3] bg-white px-3.5 py-1 rounded-full border border-[#00aeef]/30 shadow-xs">
            Video {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>

        </div>

      </div>
    </section>
  );
}
