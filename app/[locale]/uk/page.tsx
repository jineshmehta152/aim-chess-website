import { setRequestLocale } from "next-intl/server";
import { CountryLandingView, CountryLandingConfig } from "@/components/country-landing-view";

const ukConfig: CountryLandingConfig = {
  code: "uk",
  countryName: "United Kingdom",
  flag: "🇬🇧",
  headline: "Live Online Chess Coaching for UK & Scottish Students",
  subheadline: "Proven junior champions across the UK — including our Aberdeen Scottish Junior Albyn Trophy Champion. Structured after-school and weekend schedules.",
  bgImage: "/images/country-uk.jpg",
  regionalImage: "/images/country-uk.jpg",
  timezoneLabel: "GMT / BST (United Kingdom Time)",
  batchSize: "Max 1:4 Group or 1-on-1",
  typicalSchedules: [
    {
      title: "UK After-School Batch A",
      timing: "4:30 PM – 5:45 PM GMT/BST",
      desc: "Perfect timing straight after UK school hours. Focuses on blunder-check reflexes, tactical pattern recognition, and game opening foundations.",
    },
    {
      title: "UK Evening Batch B",
      timing: "6:00 PM – 7:15 PM GMT/BST",
      desc: "Dedicated to intermediate calculation, pawn structures, and active positional play with live coach review.",
    },
    {
      title: "Saturday Junior Squad",
      timing: "9:30 AM – 11:00 AM GMT/BST",
      desc: "Weekend deep-dive masterclass covering classic GM games, complex endgames, and tactical candidate moves.",
    },
    {
      title: "Saturday Academy Practice Arena",
      timing: "4:30 PM – 6:00 PM GMT",
      desc: "Monitored tournament arena with digital clocks pairing UK juniors against international club mates.",
    },
  ],
  currencySymbol: "£ GBP",
  pricingNote: "Transparent monthly GBP pricing tailored for UK families with term-time flexibility.",
  paymentDetails: [
    "UK Debit & Credit Cards (Visa, MasterCard, Amex)",
    "Secure Stripe checkout with electronic VAT invoicing",
    "Monthly flexible subscription with no long-term lock-in",
    "Coordinated makeup classes for school half-term & exam periods",
  ],
  localCircuit: {
    title: "ECF & Scottish Junior Circuit Preparation",
    description: "Our targeted coaching readies British students to compete confidently in regional county leagues and national junior congresses.",
    tournaments: [
      "English Chess Federation (ECF) Graded Tournaments",
      "Scottish Junior Chess Association (Chess Scotland) Events",
      "Delancey UK Schools Chess Challenge",
      "British Chess Championship Youth Categories & FIDE Opens",
    ],
  },
  studentMilestone: {
    name: "Nishka Mandal",
    achievement: "Albyn Trophy Champion — Aberdeen, Scotland (5/5 Clean Sweep)",
    image: "/images/achievements/nishka-mandal-albyn.jpg",
    quote: "AIM Chess Academy helped me spot tactical combinations quickly and play with composure to score 5/5 in Aberdeen.",
    location: "Aberdeen, Scotland (UK)",
  },
  features: [
    "ECF (English Chess Federation) & Chess Scotland tournament roadmaps",
    "Tactical calculation discipline & tournament psychological conditioning",
    "Home of Albyn Trophy Champion Nishka Mandal (5/5 Clean Sweep)",
    "Small cohorts (max 4 students) or dedicated 1-on-1 mentoring",
  ],
  disclaimer: "All UK training is conducted live online with interactive board classrooms. AIM does not maintain a physical UK office; our FIDE-certified trainers coach UK students through dedicated time-zone cohorts.",
};

export default function UKPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <CountryLandingView config={ukConfig} />;
}
