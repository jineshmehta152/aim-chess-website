import { setRequestLocale, getTranslations } from "next-intl/server";
import PageBanner from "@/components/page-banner";
import AchievementsListSection from "@/components/achievements-list-section";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";

type Props = {
  params: {
    locale: string;
  };
};

export default async function AchievementsPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "achievements" }).catch(() => null);

  return (
    <div className="min-h-screen">
      <PageBanner
        badge={t?.("badge") || "HALL OF FAME"}
        title={t?.("bannerTitle") || "Student Achievements"}
        subtitle={t?.("subtitle") || "Celebrating the tournament victories, state medals, and FIDE rating milestones of AIM Chess Academy students."}
        breadcrumb="Achievements"
      />
      <AchievementsListSection />
    </div>
  );
}

