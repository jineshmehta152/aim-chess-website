import { setRequestLocale } from "next-intl/server";
import { CountryLandingView, CountryLandingConfig } from "@/components/country-landing-view";

const indiaConfig: CountryLandingConfig = {
  code: "in",
  countryName: "India",
  flag: "🇮🇳",
  headline: "Live Online Chess Coaching Across India",
  subheadline: "Structured learning pathways, certified FIDE trainers, and national tournament preparation with flexible evening and weekend batches.",
  bgImage: "/images/country-india.jpg",
  regionalImage: "/images/country-india.jpg",
  timezoneLabel: "IST (GMT+5:30)",
  batchSize: "Max 1:4 Group or 1-on-1",
  typicalSchedules: [
    {
      title: "Weekday Evening Batch A",
      timing: "5:00 PM – 6:15 PM IST",
      desc: "Designed for school students returning home. Covers tactical puzzle solving, opening repertoire, and live interactive board play.",
    },
    {
      title: "Weekday Evening Batch B",
      timing: "6:30 PM – 7:45 PM IST",
      desc: "Post-homework evening slot focusing on calculation depth, middle-game piece coordination, and candidate-move selection.",
    },
    {
      title: "Weekend Morning Batch",
      timing: "10:00 AM – 11:30 AM IST (Sat & Sun)",
      desc: "Extended weekend theory and endgame workshop for junior players looking to deepen their positional understanding.",
    },
    {
      title: "Saturday Academy Practice Arena",
      timing: "5:00 PM – 6:30 PM IST",
      desc: "Competitive internal tournament arena with clocks where students apply weekly lessons under monitored fair-play conditions.",
    },
  ],
  currencySymbol: "₹ INR",
  pricingNote: "Transparent INR fee schedule with monthly billing options and no hidden registration costs.",
  paymentDetails: [
    "Instant UPI Payments (Google Pay, PhonePe, Paytm, BHIM)",
    "Domestic Debit & Credit Cards (Visa, MasterCard, RuPay)",
    "Netbanking across all major Indian banks (SBI, HDFC, ICICI, Axis)",
    "Official GST invoice and electronic payment receipt upon confirmation",
  ],
  localCircuit: {
    title: "Pan-India Tournament & FIDE Circuit Preparation",
    description: "Our curriculum directly readies junior players for the competitive Indian chess ecosystem, from district selections to national tournaments.",
    tournaments: [
      "West Bengal State & District Rapid Championships",
      "National Under-7 to Under-19 Chess Championships",
      "Official All India Chess Federation (AICF) Rated Opens",
      "World Chess Federation (FIDE) Elo Rating Tournaments",
    ],
  },
  studentMilestone: {
    name: "Debayan Majumder",
    achievement: "1489 Official FIDE Rapid Elo (KDCA Tournament)",
    image: "/images/achievements/debayan-majumder-fide.jpg",
    quote: "Patience and structured calculation at AIM gave me the confidence to earn my first official FIDE rating.",
    location: "Kolkata, West Bengal",
  },
  features: [
    "ISO-aligned curriculum from Beginner to Expert levels",
    "Direct instruction by FIDE Trainer Soumen Banerjee & master coaches",
    "Weekly homework puzzle sets and personalized blunder reviews",
  ],
  disclaimer: "All online batches for pan-India students are conducted live over interactive digital board classrooms. In-person physical coaching is conducted exclusively at our Barasat, West Bengal academy centre.",
};

export default function IndiaPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <CountryLandingView config={indiaConfig} />;
}
