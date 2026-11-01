import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import MarketingLandingClient from "@/components/marketing-landing-view";

export const metadata: Metadata = {
  title: "Special Offer: Free 1-on-1 Chess Diagnostic & Assessment | AIM Chess Academy",
  description: "Book a complimentary 45-minute live chess assessment with a certified FIDE coach. Personalized 6-month roadmap, grandmaster puzzle pack, and interactive arena trial. Zero obligation.",
  robots: {
    index: false, // Marketing landing page typically kept off organic search index for ad attribution / paid campaigns
    follow: false,
  },
};

export default function MarketingLandingPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  return <MarketingLandingClient />;
}

