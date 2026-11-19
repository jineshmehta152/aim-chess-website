import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { RegionalMarketingView, RegionalMarketingConfig } from "@/components/regional-marketing-view";

export const metadata: Metadata = {
  title: "Online Chess Coaching for Kids in the UAE 🇦🇪 | AIM Chess Academy",
  description: "A structured, level-based chess program from Beginner to Expert for kids in Dubai, Abu Dhabi, and UAE. Small groups (max 4 students), FIDE certified coaches, and GST timezone batches.",
  robots: {
    index: false, // Ad landing page kept private from organic search
    follow: false,
  },
};

const uaeMarketingConfig: RegionalMarketingConfig = {
  countryCode: "uae",
  countryName: "UAE",
  flag: "🇦🇪",
  phoneDialCode: "+971",
  currency: "AED",
  eyebrowBadge: "Online Chess Coaching for Kids in the UAE",
  heroHeadline: {
    line1: "Build Your Child's",
    highlight: "Chess Skills, Focus and Confidence",
  },
  heroSubheadline: "A Structured, Level-Based Chess Program from Beginner to Expert for children in Dubai, Abu Dhabi & across the UAE.",
  heroImage: "/images/marketing-uae-kids-hero.jpg",
  heroImageAlt: "Emirati Arab brother and sister holding chess championship trophy in Dubai",
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
      desc: "Learn from experienced chess coaches with real-time digital board solving and puzzle analysis.",
      color: "text-[#0c71c3]",
    },
    {
      iconType: "users",
      title: "Small Batch Learning",
      desc: "Max 4 students for personal attention so no child gets overlooked.",
      color: "text-purple-600",
    },
    {
      iconType: "chart",
      title: "Track Your Child's Progress",
      desc: "Regular reports, homework reviews and milestone level assessments.",
      color: "text-emerald-600",
    },
    {
      iconType: "trophy",
      title: "Weekly Tournaments",
      desc: "Practice, compete and grow confidence in monitored internal arena matches with clocks.",
      color: "text-amber-500",
    },
  ],
  whyChooseUsTitle: "Why Parents in UAE Choose AIM?",
  whyChooseUsPoints: [
    "Experienced & Certified FIDE Coaches",
    "Comprehensive, Level-Based Curriculum (ISO 9001:2015 Accredited)",
    "Focus on Logical Thinking, Patience & Problem Solving",
    "Safe, Interactive & Child-Friendly Cloud Classrooms",
    "Regular Practice, Assessments & Official Level Recognition",
  ],
  ageRange: "For Ages 5 – 17 Years",
  leadCardTitle: "Get Started with a Free Demo Class",
  leadCardSubtitle: "Experience our teaching style and discover your child's natural thinking reflexes.",
  leadSectionImage: "/images/marketing-uae-demo-boy.jpg",
  leadSectionImageAlt: "Young Emirati student smiling while learning chess on laptop in Dubai home",
  benefitsList: [
    "Level Assessment",
    "Meet Our Coaches",
    "Experience Our Teaching Style",
    "Find the Right Program for Your Child",
  ],
};

export default function UAEMarketingPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <RegionalMarketingView config={uaeMarketingConfig} />;
}

