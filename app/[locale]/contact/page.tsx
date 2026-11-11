import { setRequestLocale, getTranslations } from "next-intl/server";
import PageBanner from "@/components/page-banner";
import ContactSection from "@/components/contact-section";
import LocationSection from "@/components/location-section";
import FaqSection from "@/components/faq-section";
import ContactCtaSection from "@/components/contact-cta-section";

type Props = {
  params: {
    locale: string;
  };
};

export default async function ContactPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <div className="min-h-screen">
      <PageBanner
        badge={t("badge")}
        title={t("bannerTitle")}
        subtitle={t("subtitle")}
        breadcrumb={t("breadcrumb")}
        bgImage="/images/contact-academy.jpg"
      />
      <ContactSection />
      <LocationSection />
      <FaqSection />
      <ContactCtaSection />
    </div>
  );
}


