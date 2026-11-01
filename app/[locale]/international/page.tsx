import { setRequestLocale } from "next-intl/server";
import { CountryLandingView, CountryLandingConfig } from "@/components/country-landing-view";

const internationalConfig: CountryLandingConfig = {
  code: "international",
  countryName: "International (Global)",
  flag: "🌐",
  headline: "Global Online Chess Education across 12+ Countries",
  subheadline: "Actively coaching junior students in UAE, Oman, Qatar, Australia, Canada, New Zealand, Netherlands, Singapore, Germany & beyond.",
  bgImage: "/images/country-international.jpg",
  regionalImage: "/images/country-international.jpg",
  timezoneLabel: "Global Time Zones (GST, AEST, SGT, CET)",
  batchSize: "Max 1:4 Group or 1-on-1",
  typicalSchedules: [
    {
      title: "UAE & Gulf Region Batch (GST)",
      timing: "4:00 PM – 7:30 PM GST & Weekend Mornings",
      desc: "Synchronized with school timings in Dubai, Abu Dhabi, Doha, and Muscat. Interactive digital board training and tactical drills.",
    },
    {
      title: "Australia & New Zealand Cohort (AEST/NZST)",
      timing: "Weekend Mornings & Flexible 1-on-1 Slots",
      desc: "Designed for Sydney, Melbourne, Brisbane, and Auckland youth schedules, emphasizing structured calculation and tournament preparation.",
    },
    {
      title: "Singapore & Southeast Asia Batch (SGT)",
      timing: "Weekday Evenings 6:00 PM – 7:30 PM SGT",
      desc: "High-intensity calculation and opening theory sessions for competitive scholastic players across East & Southeast Asia.",
    },
    {
      title: "European Union Evening Batch (CET)",
      timing: "After-School 5:00 PM – 6:30 PM CET",
      desc: "European time-zone cohorts serving students in Netherlands, Germany, France, and Switzerland with deep endgame study.",
    },
  ],
  currencySymbol: "USD / EUR / AED / AUD",
  pricingNote: "Multi-currency checkout via Stripe with no hidden foreign transaction surcharges.",
  paymentDetails: [
    "Major Global Credit & Debit Cards (Visa, MasterCard, American Express)",
    "Stripe Global Payment Gateway with multi-currency checkout (USD, EUR, AED, AUD, GBP)",
    "Automated invoice & receipt generation for educational records",
    "Transparent billing with pause/makeup flexibility during holidays",
  ],
  localCircuit: {
    title: "Global Scholastic & International FIDE Preparation",
    description: "Preparing junior players around the world for international school championships, national youth circuits, and FIDE rated opens.",
    tournaments: [
      "FIDE World & Continental Youth Championships",
      "UAE National School Chess Championships & Gulf Opens",
      "Australian Junior Chess Championship & State Interschools",
      "European Youth Chess Championship & National Opens",
    ],
  },
  features: [
    "Standardized ISO-certified international curriculum",
    "FIDE rating preparation & international circuit guidance",
    "Small 1:4 maximum group ratio or 1-on-1 personalized mentorship",
    "Interactive weekly practice arenas with global players",
  ],
  disclaimer: "AIM Chess Academy provides live online chess education globally from our accredited coaching center. We provide time-zone-aligned remote classes and do not claim local physical branches outside our certified headquarters in India.",
};

export default function InternationalPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <CountryLandingView config={internationalConfig} />;
}
