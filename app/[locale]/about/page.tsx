import { setRequestLocale, getTranslations } from "next-intl/server";
import PageBanner from "@/components/page-banner";
import AboutOverviewSection from "@/components/about-overview-section";
import MissionVisionSection from "@/components/mission-vision-section";
import FounderProfileSection from "@/components/founder-profile-section";
import CoachingPhilosophySection from "@/components/coaching-philosophy-section";
import WhyChooseUsSection from "@/components/why-choose-us";
import TestimonialsSection from "@/components/testimonials-section";
import CtaSection from "@/components/cta-section";

type Props = {
  params: {
    locale: string;
  };
};

export default async function AboutPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <div className="min-h-screen">
      <PageBanner
        badge={t("badge") || "ABOUT AIM CHESS ACADEMY"}
        title={t("bannerTitle") || "About Aim Chess Academy"}
        subtitle={t("storySubtitle") || "Our Vision, Mission & Master Pedagogy"}
        breadcrumb={t("breadcrumb") || "About Us"}
      />

      <AboutOverviewSection />
      <MissionVisionSection />
      <FounderProfileSection />
      <CoachingPhilosophySection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
