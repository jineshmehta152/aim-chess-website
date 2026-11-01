import { setRequestLocale } from "next-intl/server";
import { CountryLandingView, CountryLandingConfig } from "@/components/country-landing-view";

const usConfig: CountryLandingConfig = {
  code: "us",
  countryName: "United States",
  flag: "🇺🇸",
  headline: "Live Online Chess Education for US Students",
  subheadline: "After-school and weekend schedules aligned with US Eastern, Central, and Pacific time zones. Mentored by FIDE certified trainers and International Masters.",
  bgImage: "/images/country-us.jpg",
  regionalImage: "/images/country-us.jpg",
  timezoneLabel: "EST, CST, MST & PST Time Zones",
  batchSize: "Max 1:4 Group or 1-on-1",
  typicalSchedules: [
    {
      title: "US Eastern (EST) After-School Batch",
      timing: "4:30 PM – 5:45 PM & 6:00 PM – 7:15 PM EST",
      desc: "Perfect timing for students in New York, New Jersey, Florida, and Georgia right after the school day ends.",
    },
    {
      title: "US Central (CST) Evening Batch",
      timing: "5:00 PM – 6:15 PM & 6:30 PM – 7:45 PM CST",
      desc: "Tailored for students in Texas, Illinois, and the Midwest with active interactive board solving.",
    },
    {
      title: "US Pacific (PST) After-School Batch",
      timing: "4:00 PM – 5:15 PM & 5:30 PM – 6:45 PM PST",
      desc: "Convenient afternoon slot for California and West Coast students with master coach guidance.",
    },
    {
      title: "US Weekend Morning Cohorts",
      timing: "Saturday & Sunday 9:00 AM – 1:00 PM EST",
      desc: "Deep tactical workshops, endgame masterclasses, and internal practice games with live coach reviews.",
    },
  ],
  currencySymbol: "$ USD",
  pricingNote: "Flat transparent USD tuition fees with automated Stripe receipt and no international transaction surcharge.",
  paymentDetails: [
    "Major US Credit & Debit Cards (Visa, MasterCard, American Express, Discover)",
    "Secure Stripe checkout with electronic invoices and recurring payment controls",
    "Monthly tuition plans with no multi-month mandatory contract",
    "Flexible makeup classes coordinated for school exam or holiday weeks",
  ],
  localCircuit: {
    title: "USCF Scholastic & National Tournament Preparation",
    description: "We equip American students with opening preparation and tactical resilience to excel in official US Chess Federation rated events.",
    tournaments: [
      "USCF Rated Scholastic Tournaments & Grand Prix",
      "State Scholastic Chess Championships (NY, CA, TX, IL, etc.)",
      "National Elementary (K-6) & Junior High (K-9) Championships",
      "FIDE North American Youth Chess Championships",
    ],
  },
  studentMilestone: {
    name: "US Scholastic Cohort",
    achievement: "Tournament Readiness & Elo Acceleration",
    image: "/images/achievements/riddhish-kanjilal-all-bengal.jpg",
    quote: "The personalized opening preparation and game reviews gave my son the edge in his state scholastic championship.",
    location: "US Online Cohort",
  },
  features: [
    "Preparation for USCF tournaments & scholastic championships",
    "1:4 small cohorts with active student solving",
    "Weekly tactical puzzle homework with coach review notes",
  ],
  disclaimer: "Classes for US students are delivered live online via interactive video and shared digital chess classrooms. AIM operates from its certified head academy in India and provides time-zone-aligned remote instruction without claiming a local US physical facility.",
};

export default function USPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <CountryLandingView config={usConfig} />;
}
