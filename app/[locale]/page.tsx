import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/hero-section";
import { TrustStripSection } from "@/components/home/trust-strip-section";
import { RatedPlayersCoachesSection } from "@/components/home/rated-players-coaches-section";
import { WhyAimOnlineSection } from "@/components/home/why-aim-online-section";
import { ExploreProgramsSection } from "@/components/home/explore-programs-section";
import { StudentPortalPreviewSection } from "@/components/home/student-portal-preview-section";
import { StudentSuccessStoriesSection } from "@/components/home/student-success-stories-section";
import { HowOnlineCoachingWorksSection } from "@/components/home/how-online-coaching-works-section";
import { InternationalLearningSection } from "@/components/home/international-learning-section";
import { TestimonialsPreviewSection } from "@/components/home/testimonials-preview-section";
import { PhysicalFranchiseTeaser } from "@/components/home/physical-franchise-teaser";
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
      {/* 01. Hero / first screen (Online chess education worldwide; Book Assessment + Explore Portal) */}
      <HeroSection />

      {/* 02. Trust strip (Verified coach credentials, 4.9★ rating, substantiated outcomes) */}
      <TrustStripSection />

      {/* 03. Rated Players & Coaches (FIDE-rated students, tournament achievers & mentors) */}
      <RatedPlayersCoachesSection />

      {/* 04. Why AIM Online (Structured curriculum, 1:4 coaching, tactical homework & arenas) */}
      <WhyAimOnlineSection />

      {/* 05. Explore Programs (Beginner, Intermediate, Advanced, Expert, 1-on-1, FIDE rating) */}
      <ExploreProgramsSection />

      {/* 06. Student Portal preview (AIM Chess ID, batch schedule, puzzles, upcoming features) */}
      <StudentPortalPreviewSection />

      {/* 07. Student success stories (Verifiable rating milestones, tournament journeys) */}
      <StudentSuccessStoriesSection />

      {/* 08. How online coaching works (Assessment → Placement → Live classes → Feedback → Review) */}
      <HowOnlineCoachingWorksSection />

      {/* 09. International learning (Time zones, country selection, schedules & payments) */}
      <InternationalLearningSection />

      {/* 10. Testimonials (Authentic parent reviews, permissioned video interviews & Google link) */}
      <TestimonialsPreviewSection />

      {/* 11. Physical Franchise (Short invitation linking to separate physical centre page) */}
      <PhysicalFranchiseTeaser />

      {/* 12. FAQ + Final CTA (Common questions and clear next step to book an assessment) */}
      <FaqSection />
      <CtaSection />
    </div>
  );
}
