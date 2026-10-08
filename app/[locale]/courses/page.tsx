import { setRequestLocale, getTranslations } from "next-intl/server";
import PageBanner from "@/components/page-banner";
import CoursesExplorerSection from "@/components/courses-explorer-section";
import WhatStudentsLearnSection from "@/components/what-students-learn-section";
import ClassFormatsSection from "@/components/class-formats-section";
import WhatsIncludedSection from "@/components/whats-included-section";
import StudentProgressSection from "@/components/student-progress-section";
import FaqSection from "@/components/faq-section";
import CoursesCtaSection from "@/components/courses-cta-section";

type Props = {
  params: {
    locale: string;
  };
};

export default async function CoursesPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "courses" });

  return (
    <div className="min-h-screen">
      <PageBanner
        badge={t("badge") || "TRAINING PROGRAMS"}
        title={t("bannerTitle") || "Courses Offered"}
        subtitle={t("subtitle") || "From absolute beginners (age 5+) to tournament players striving for FIDE ratings."}
        breadcrumb={t("breadcrumb") || "Courses"}
      />
      <CoursesExplorerSection />
      <WhatStudentsLearnSection />
      <ClassFormatsSection />
      <WhatsIncludedSection />
      <StudentProgressSection />
      <FaqSection />
      <CoursesCtaSection />
    </div>
  );
}
