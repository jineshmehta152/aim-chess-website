import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { RegionalMarketingView, RegionalMarketingConfig } from "@/components/regional-marketing-view";

export const metadata: Metadata = {
  title: "Online Chess Coaching for Kids in the USA 🇺🇸 | AIM Chess Academy",
  description: "A structured, level-based chess program from Beginner to Expert for kids across the United States. USCF scholastic preparation, small batches (max 4 students), FIDE certified mentors, and US timezone batches.",
  robots: {
    index: false,
    follow: false,
  },
};

const usaMarketingConfig: RegionalMarketingConfig = {
  countryCode: "usa",
  countryName: "USA",
  flag: "🇺🇸",
  phoneDialCode: "+1",
  currency: "USD",
  eyebrowBadge: "Online Chess Coaching for Kids in the USA",
  heroHeadline: {
    line1: "Build Your Child's",
    highlight: "Chess Skills, Focus and Confidence",
  },
  heroSubheadline: "A Structured, Level-Based Chess Program from Beginner to Expert aligned with US school schedules (EST, CST, PST).",
  heroImage: "/images/marketing-usa-hero-kids.jpg",
  heroImageAlt: "Smart Young US Chess Students with Championship Trophy and City Skyline",
  heroVideoSrc: "/aimchess-final.mp4",
  trustStrip: {
    liveClasses: "Live Online Classes",
    smallGroups: "Small Groups (Max 4 Students)",
    curriculum: "Structured Curriculum",
    tournaments: "Weekly Tournaments",
  },
  featureCards: [
    {
      iconType: "laptop",
      title: "Live Interactive Classes",
      desc: "Learn from certified FIDE masters with real-time digital board solving and tactical puzzle drills.",
      color: "text-[#0c71c3]",
    },
    {
      iconType: "users",
      title: "Small Batch Learning",
      desc: "Max 4 students for personal attention with individual move-by-move feedback.",
      color: "text-purple-600",
    },
    {
      iconType: "chart",
      title: "Track Your Child's Progress",
      desc: "Regular diagnostic reports, homework reviews and USCF-aligned milestone assessments.",
      color: "text-emerald-600",
    },
    {
      iconType: "trophy",
      title: "Weekly Tournaments",
      desc: "Practice, compete and build tournament clock composure with peers worldwide.",
      color: "text-amber-500",
    },
  ],
  whyChooseUsTitle: "Why Parents in USA Choose AIM?",
  whyChooseUsPoints: [
    "Certified FIDE Coaches & International Masters",
    "USCF Scholastic Tournament Preparation & Tactical Discipline",
    "Convenient After-School Batches (EST, CST, MST, PST)",
    "Safe, Child-Friendly Cloud Classrooms with Active Puzzle Solving",
    "Home of Real US Tournament Champions (like Atharva Kudva 🇺🇸)",
  ],
  ageRange: "For Ages 5 – 17 Years",
  leadCardTitle: "Get Started with a Free Demo Class",
  leadCardSubtitle: "Experience our teaching style and discover your child's natural thinking reflexes.",
  benefitsList: [
    "Level Assessment",
    "Meet Our Coaches",
    "Experience Our Teaching Style",
    "Find the Right Program for Your Child",
  ],
  extraStudentSpotlight: {
    name: "Atharva Kudva 🇺🇸",
    badge: "US Tournament Champion",
    desc: "Watch Atharva Kudva proudly celebrate his tournament championship trophy in our video above!",
  },
};

export default function USAMarketingPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <RegionalMarketingView config={usaMarketingConfig} />;
}

