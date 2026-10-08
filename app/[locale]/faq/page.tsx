import { setRequestLocale, getTranslations } from "next-intl/server";
import PageBanner from "@/components/page-banner";
import FaqExplorerSection from "@/components/faq-explorer-section";
import CtaSection from "@/components/cta-section";

type Props = {
  params: {
    locale: string;
  };
};

export default async function FaqPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "faq" });

  return (
    <div className="min-h-screen">
      <PageBanner
        badge={t("badge") || "GOT QUESTIONS?"}
        title={t("bannerTitle") || "Frequently Asked Questions"}
        subtitle={t("subtitle") || "Find clear answers about demo classes, age requirements, batch timings, and certifications."}
        breadcrumb={t("breadcrumb") || "FAQs"}
      />
      <FaqExplorerSection />
      <CtaSection />
    </div>
  );
}

