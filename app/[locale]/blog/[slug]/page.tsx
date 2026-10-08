import React from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { BLOG_POSTS } from "@/lib/blog-data";
import BlogPostView from "@/components/blog-post-view";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export async function generateStaticParams() {
  const locales = ["en"];
  const paths: { locale: string; slug: string }[] = [];

  locales.forEach((locale) => {
    BLOG_POSTS.forEach((post) => {
      paths.push({
        locale,
        slug: post.slug,
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Article Not Found | Aim Chess Academy",
    };
  }

  return {
    title: `${post.title} | Aim Chess Academy`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = params;
  setRequestLocale(locale);

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = relatedPosts.length > 0 ? relatedPosts : BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <BlogPostView post={post} relatedPosts={fallbackRelated} locale={locale} />
  );
}
