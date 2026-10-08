import React from "react";
import { setRequestLocale } from "next-intl/server";
import PageBanner from "@/components/page-banner";
import BlogListClient from "@/components/blog-list-client";
import CtaSection from "@/components/cta-section";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata = {
  title: "Chess Blog & Strategy Guides | Aim Chess Academy",
  description: "Explore 12+ master guides on chess calculation, opening repertoires, endgame technique, and tournament psychology by FIDE certified coaches.",
};

type Props = {
  params: {
    locale: string;
  };
};

export default async function BlogPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PageBanner
        badge="CHESS KNOWLEDGE HUB"
        title="Articles & Master Guides"
        subtitle="Deep dive into calculation blueprints, opening repertoires, endgame technique, and tournament psychology."
        breadcrumb="Blog"
      />

      <BlogListClient posts={BLOG_POSTS} locale={locale} />

      <CtaSection />
    </div>
  );
}
