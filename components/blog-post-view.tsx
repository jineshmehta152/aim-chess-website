"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Check, 
  MessageCircle, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  List,
  Crown,
  CheckCircle2
} from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";

interface BlogPostViewProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  locale: string;
}

export default function BlogPostView({ post, relatedPosts, locale }: BlogPostViewProps) {
  const { openBookingModal } = useBookingModal();
  const { getWhatsAppUrl } = useSiteSettings();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsAppShare = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Check out this chess article: "${post.title}"\n${url}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
    }
  };

  return (
    <article className="min-h-screen bg-[#f8fafc] text-[#042047] pb-20">
      
      {/* ========================================================================= */}
      {/* 1. ARTICLE HEADER & HERO                                                  */}
      {/* ========================================================================= */}
      <div className="bg-[#042047] text-white pt-20 xs:pt-24 sm:pt-28 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-[#ffe80a]">
        
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00aeef]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1100px] mx-auto space-y-5 sm:space-y-6 relative z-10 text-left">
          
          {/* Breadcrumbs & Back link */}
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-slate-300 hover:text-[#ffe80a] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Back to all articles</span>
            </Link>

            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#00aeef]/20 text-[#ffe80a] font-black text-[10px] sm:text-[11px] uppercase tracking-wider border border-[#00aeef]/40">
              {post.category}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pt-2 border-t border-slate-700/60">
            
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#ffe80a] bg-slate-200 shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-white">
                  {post.author.name}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
                  {post.author.role}
                </div>
              </div>
            </div>

            {/* Date & Read time */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00aeef]" />
                {post.publishedDate}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffe80a]" />
                {post.readTime}
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT & SIDEBAR CONTAINER                                       */}
      {/* ========================================================================= */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* LEFT COLUMN: Main Post Body (8 Columns) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-left">
            
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-[28px] overflow-hidden border-[2.5px] sm:border-[3px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[6px_6px_0px_0px_#042047] bg-slate-900">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>

            {/* Excerpt Lead Paragraph */}
            <div className="p-4 xs:p-6 sm:p-7 rounded-2xl sm:rounded-[24px] bg-[#e0f2fe]/70 border-l-[5px] sm:border-l-[6px] border-l-[#00aeef] border-y border-r border-slate-200">
              <p className="text-sm xs:text-base sm:text-lg font-bold text-[#042047] leading-relaxed italic">
                “{post.excerpt}”
              </p>
            </div>

            {/* Rendered Content Sections */}
            <div className="bg-white rounded-2xl sm:rounded-[32px] border-[2.5px] sm:border-[3px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[6px_6px_0px_0px_#042047] p-4 xs:p-6 sm:p-10 space-y-6 leading-relaxed text-slate-800 text-sm sm:text-base">
              
              {/* Table of Contents for Mobile */}
              <div className="block lg:hidden bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-6">
                <div className="flex items-center gap-2 font-black text-sm text-[#042047] uppercase tracking-wider mb-3">
                  <List className="w-4 h-4 text-[#00aeef]" />
                  <span>Table of Contents</span>
                </div>
                <ul className="space-y-2 text-xs font-bold text-[#0c71c3]">
                  {post.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a href={`#${toc.id}`} className="hover:underline">
                        {toc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Parsed Markdown Blocks */}
              <div className="prose prose-slate max-w-none space-y-6">
                {post.content.split("\n\n").map((block, idx) => {
                  const trimmed = block.trim();
                  if (!trimmed) return null;

                  // Heading 2
                  if (trimmed.startsWith("## ")) {
                    const headingText = trimmed.replace("## ", "");
                    const headingId = headingText
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "");
                    return (
                      <h2 
                        key={idx} 
                        id={headingId} 
                        className="text-2xl sm:text-3xl font-black text-[#042047] tracking-tight pt-6 pb-2 border-b-2 border-slate-100 flex items-center gap-2"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffe80a] border border-[#042047]" />
                        <span>{headingText}</span>
                      </h2>
                    );
                  }

                  // Heading 3
                  if (trimmed.startsWith("### ")) {
                    return (
                      <h3 key={idx} className="text-xl font-black text-[#042047] pt-3">
                        {trimmed.replace("### ", "")}
                      </h3>
                    );
                  }

                  // Blockquote
                  if (trimmed.startsWith("> ")) {
                    return (
                      <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-amber-50 border-l-[5px] border-l-[#ffe80a] border border-amber-200 text-amber-950 font-bold text-sm sm:text-base my-4">
                        {trimmed.replace("> ", "")}
                      </div>
                    );
                  }

                  // Code block
                  if (trimmed.startsWith("```")) {
                    const codeContent = trimmed.replace(/```[a-z]*\n?/g, "");
                    return (
                      <div key={idx} className="bg-[#042047] text-white p-4 sm:p-5 rounded-2xl font-mono text-xs sm:text-sm border-2 border-[#042047] shadow-sm my-4 overflow-x-auto whitespace-pre-wrap">
                        {codeContent}
                      </div>
                    );
                  }

                  // Bullet list
                  if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                    const items = trimmed.split("\n").map((line) => line.replace(/^[-*]\s+/, ""));
                    return (
                      <ul key={idx} className="space-y-2.5 my-3">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Numbered list
                  if (/^\d+\.\s/.test(trimmed)) {
                    const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s+/, ""));
                    return (
                      <ol key={idx} className="space-y-2.5 my-3 list-decimal list-inside text-sm sm:text-base text-slate-700 font-medium">
                        {items.map((item, i) => (
                          <li key={i} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ol>
                    );
                  }

                  // Horizontal Rule
                  if (trimmed === "---") {
                    return <hr key={idx} className="border-t-2 border-slate-100 my-6" />;
                  }

                  // Standard paragraph
                  return (
                    <p key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

            </div>

            {/* Share and Tags Footer */}
            <div className="bg-white rounded-2xl border-[2.5px] border-[#042047] p-4 xs:p-5 sm:p-6 shadow-[3px_3px_0px_0px_#042047] sm:shadow-[4px_4px_0px_0px_#042047] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-black uppercase text-slate-400 mr-1">Tags:</span>
                {post.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-bold text-slate-700 border border-slate-200">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button
                  onClick={handleWhatsAppShare}
                  type="button"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Share on WhatsApp</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  type="button"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#042047] font-bold text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 shadow-xs cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Link"}</span>
                </button>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Sidebar (4 Columns) */}
          <div className="lg:col-span-4 space-y-7">
            
            {/* Sticky Container */}
            <div className="sticky top-24 space-y-7">
              
              {/* 1. Table of Contents Card (Desktop) */}
              <div className="hidden lg:block rounded-[28px] bg-white border-[3px] border-[#042047] shadow-[5px_5px_0px_0px_#042047] p-6 text-left space-y-4">
                <div className="flex items-center gap-2 font-black text-sm text-[#042047] uppercase tracking-wider border-b-2 border-slate-100 pb-3">
                  <List className="w-4 h-4 text-[#00aeef]" />
                  <span>Table of Contents</span>
                </div>

                <nav className="space-y-2.5 text-xs font-bold text-slate-600">
                  {post.tableOfContents.map((toc) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className="block hover:text-[#0c71c3] hover:translate-x-1 transition-all leading-snug py-1 border-b border-slate-50"
                    >
                      {toc.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* 2. Author Bio Card */}
              <div className="rounded-2xl sm:rounded-[28px] bg-white border-[2.5px] sm:border-[3px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[5px_5px_0px_0px_#042047] p-5 sm:p-6 text-left space-y-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#0c71c3]">
                  WRITTEN BY
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-[#042047] bg-slate-200 shrink-0">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-black text-[#042047]">
                      {post.author.name}
                    </div>
                    <div className="text-xs text-slate-500 font-bold">
                      {post.author.role}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                  Passionate chess educator dedicated to developing critical calculation skills, emotional resilience, and competitive excellence in young champions.
                </p>
              </div>

              {/* 3. Quick Booking Card */}
              <div className="rounded-2xl sm:rounded-[28px] bg-[#042047] text-white border-[2.5px] sm:border-[3px] border-[#ffe80a] shadow-[4px_4px_0px_0px_#042047] sm:shadow-[5px_5px_0px_0px_#042047] p-5 sm:p-6 text-left space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffe80a] text-[#042047] font-black text-[10px] uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 fill-[#042047]" />
                  <span>FREE TRIAL CLASS</span>
                </div>

                <h4 className="text-lg sm:text-xl font-black text-white leading-tight">
                  Want to Master These Skills with a Coach?
                </h4>

                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  Book a free 1-on-1 evaluation with our FIDE certified trainers and start your champion journey today.
                </p>

                <button
                  onClick={() => openBookingModal()}
                  type="button"
                  className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-[#ffe80a] hover:bg-[#ffd600] text-[#042047] font-black text-xs uppercase tracking-wider border-2 border-[#042047] shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Book Free Demo Class</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. RELATED ARTICLES SECTION                                               */}
      {/* ========================================================================= */}
      {relatedPosts.length > 0 && (
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t-2 border-slate-200 space-y-6 sm:space-y-8">
        
        <div className="flex items-center justify-between text-left">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#0c71c3]">
              KEEP READING
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-[#042047] tracking-tight">
              Related Articles &amp; Strategy Guides
            </h3>
          </div>
          
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black text-[#0c71c3] hover:text-[#042047] uppercase tracking-wider"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((rel) => (
            <article
              key={rel.id}
              className="rounded-2xl sm:rounded-[24px] bg-white border-2 sm:border-[2.5px] border-[#042047] shadow-[3px_3px_0px_0px_#042047] sm:shadow-[4px_4px_0px_0px_#042047] hover:shadow-[1px_1px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all p-4 sm:p-5 flex flex-col justify-between text-left group"
            >
                <div className="space-y-3">
                  <Link href={`/blog/${rel.slug}`} className="block relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-slate-200">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                  </Link>

                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                    <span className="text-[#0c71c3] uppercase font-black">
                      {rel.category}
                    </span>
                    <span>{rel.readTime}</span>
                  </div>

                  <h4 className="text-base font-black text-[#042047] tracking-tight group-hover:text-[#0c71c3] transition-colors line-clamp-2">
                    <Link href={`/blog/${rel.slug}`}>
                      {rel.title}
                    </Link>
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500">
                    {rel.author.name}
                  </span>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="text-xs font-black text-[#0c71c3] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      )}

    </article>
  );
}
