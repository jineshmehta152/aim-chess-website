import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import WhyChooseUsSection from "@/components/why-choose-us";
import PartiesSection from "@/components/parties-section";
import ActivitiesSection from "@/components/activities-section";
import GallerySection from "@/components/gallery-section";
import VideoTestimonialsSection from "@/components/video-testimonials-section";
import TestimonialsSection from "@/components/testimonials-section";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";

type Props = {
  params: {
    locale: string;
  };
};

export default function HomePage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <PartiesSection />
      <ActivitiesSection />
      <GallerySection />
      <VideoTestimonialsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
