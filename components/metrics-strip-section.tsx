import React from "react";
import { Users, Star, Clock, Globe2 } from "lucide-react";

export function MetricsStripSection() {
  const stats = [
    {
      icon: Users,
      value: "1,000+",
      label: "Students Mentored",
      iconColor: "text-[#00aeef]",
      bgColor: "bg-[#00aeef]/10",
    },
    {
      icon: Star,
      value: "4.9 ★",
      label: "Google Rating",
      iconColor: "text-[#f59e0b]",
      bgColor: "bg-amber-500/10",
      customGoogleIcon: true,
    },
    {
      icon: Clock,
      value: "100K+",
      label: "Hours of Coaching",
      iconColor: "text-[#0c71c3]",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Globe2,
      value: "12+",
      label: "Countries Reached",
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
  ];

  return (
    <section className="relative z-20 -mt-7 sm:-mt-9 lg:-mt-11 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
      <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(4,32,71,0.18)] border-2 border-slate-100 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center space-y-2 ${
                  idx !== 0 ? "pt-5 sm:pt-0 sm:pl-4 md:pl-6" : ""
                }`}
              >
                {/* Icon Circle */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${stat.bgColor} flex items-center justify-center transition-transform hover:scale-110 duration-200`}
                >
                  {stat.customGoogleIcon ? (
                    <span className="text-xl sm:text-2xl font-black text-[#ea4335]">
                      G
                    </span>
                  ) : (
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${stat.iconColor} stroke-[2.2]`} />
                  )}
                </div>

                {/* Number Highlight */}
                <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#042047]">
                  {stat.value}
                </div>

                {/* Subtitle Label */}
                <p className="text-xs sm:text-sm font-bold text-slate-500 tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MetricsStripSection;

