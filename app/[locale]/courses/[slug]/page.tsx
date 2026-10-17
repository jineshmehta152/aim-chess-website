import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { COURSES_DATA, getCourseBySlug } from "@/data/courses-data";
import CourseDetailView from "@/components/course-detail-view";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  const locales = ["en"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const course of COURSES_DATA) {
      params.push({
        locale,
        slug: course.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | AIM Chess Academy",
    };
  }

  return {
    title: `${course.shortTitle} | AIM Chess Academy`,
    description: course.subtitle,
    openGraph: {
      title: `${course.title} - AIM Chess Academy`,
      description: course.subtitle,
      images: [course.image],
    },
  };
}

export default async function CourseLevelPage({ params }: Props) {
  const { locale, slug } = params;
  setRequestLocale(locale);

  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailView course={course} />;
}
