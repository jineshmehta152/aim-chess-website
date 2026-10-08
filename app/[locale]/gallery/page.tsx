import { setRequestLocale, getTranslations } from "next-intl/server";
import PageBanner from "@/components/page-banner";
import PhotoGridGallerySection from "@/components/photo-grid-gallery-section";
import CtaSection from "@/components/cta-section";

type Props = {
  params: {
    locale: string;
  };
};

export default async function GalleryPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "gallery" });

  return (
    <div className="min-h-screen">
      <PageBanner
        badge={t("badge") || "MOMENTS OF PRIDE"}
        title={t("bannerTitle") || "Photo Gallery & Trophies"}
        subtitle={t("subtitle") || "Tournaments, championship trophies, and academy classrooms."}
        breadcrumb={t("breadcrumb") || "Gallery"}
      />
      <PhotoGridGallerySection />
      <CtaSection />
    </div>
  );
}
