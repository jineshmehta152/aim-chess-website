"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { 
  Sparkles, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  Tag, 
  Layers,
  Flame
} from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogListClientProps {
  posts: BlogPost[];
  locale: string;
}

export default function BlogListClient({ posts, locale }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "Tactics & Calculation", label: "Tactics & Calculation" },
    { id: "Opening Repertoires", label: "Opening Repertoires" },
    { id: "Endgames", label: "Endgames" },
    { id: "Tournament Strategy", label: "Tournament Strategy" },
    { id: "Child Psychology & Parenting", label: "Parenting & Psychology" }
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const regularPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

  return (
    <section className="relative py-14 sm:py-20 bg-[#f8fafc] text-[#042047] overflow-hidden">
      
      {/* Background ambient glows */}
      <div className="absolute top-20 -left-28 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-28 w-96 h-96 bg-[#ffe80a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* TOP FILTER TABS & SEARCH BAR                                              */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 bg-white p-4 sm:p-5 rounded-[28px] border-[2.5px] border-[#042047] shadow-[5px_5px_0px_0px_#042047]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer border-[2px] ${
                  selectedCategory === cat.id
                    ? "bg-[#042047] text-[#ffe80a] border-[#042047] shadow-[2px_2px_0px_0px_#ffe80a]"
                    : "bg-slate-50 text-[#042047] border-slate-200 hover:border-[#042047] hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search strategy, tactics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#042047] focus:bg-white rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-[#042047] font-bold outline-none transition-all"
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* FEATURED HERO ARTICLE                                                     */}
        {/* ========================================================================= */}
        {featuredPost && (
          <div className="relative rounded-[36px] bg-white border-[3.5px] border-[#042047] shadow-[8px_8px_0px_0px_#042047] overflow-hidden group">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
              
              {/* Left Column: Image */}
              <div className="lg:col-span-6">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[24px] overflow-hidden border-[2.5px] border-[#042047] shadow-[4px_4px_0px_0px_#042047] bg-slate-100">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority
                  />
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <div className="bg-[#ffe80a] text-[#042047] font-black text-xs uppercase px-3.5 py-1 rounded-lg border-2 border-[#042047] shadow-sm flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 fill-[#042047]" />
                      <span>FEATURED MASTER GUIDE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:col-span-6 space-y-4 text-left">
                
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
                  <span className="px-3 py-1 rounded-full bg-[#00aeef]/15 text-[#0c71c3] font-black uppercase text-[11px] border border-[#00aeef]/30">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.publishedDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042047] tracking-tight leading-tight group-hover:text-[#0c71c3] transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {featuredPost.excerpt}
                </p>

                {/* Author Info */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#042047] bg-slate-200 shrink-0">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#042047]">
                        {featuredPost.author.name}
                      </div>
                      <div className="text-[11px] text-slate-500 font-bold">
                        {featuredPost.author.role}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-[#ffe80a] hover:bg-[#ffd600] text-[#042047] font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl border-2 border-[#042047] shadow-[2px_2px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all uppercase tracking-wider"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </Link>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* REMAINING ARTICLES GRID                                                   */}
        {/* ========================================================================= */}
        {regularPosts.length > 0 && (
          <div className="space-y-6 pt-4">
            
            <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
              <h4 className="text-xl sm:text-2xl font-black text-[#042047] uppercase tracking-tight">
                All Strategy &amp; Knowledge Articles ({filteredPosts.length})
              </h4>
              <span className="text-xs font-bold text-slate-500">
                Sorted by most recent
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-[28px] bg-white border-[3px] border-[#042047] shadow-[5px_5px_0px_0px_#042047] hover:shadow-[2px_2px_0px_0px_#042047] hover:translate-x-0.5 hover:translate-y-0.5 transition-all p-5 sm:p-6 flex flex-col justify-between group overflow-hidden"
                >
                  <div className="space-y-4 text-left">
                    
                    {/* Thumbnail Image */}
                    <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-[16/9.5] rounded-2xl overflow-hidden border-2 border-slate-100 bg-slate-100">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2.5 py-0.5 rounded-lg bg-[#042047] text-[#ffe80a] font-black text-[10px] uppercase tracking-wider border border-[#ffe80a]">
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    {/* Metadata */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#00aeef]" />
                        {post.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#ffe80a]" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-black text-[#042047] tracking-tight leading-snug group-hover:text-[#0c71c3] transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-xs leading-relaxed font-normal line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600">
                          #{tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Footer Author & Link */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#042047] bg-slate-200">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                          sizes="28px"
                        />
                      </div>
                      <span className="text-xs font-bold text-[#042047]">
                        {post.author.name}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-black text-[#0c71c3] hover:text-[#042047] group-hover:translate-x-1 transition-all uppercase"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </article>
              ))}
            </div>

          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-slate-200 p-8">
            <p className="text-slate-600 font-bold text-base">
              No articles found matching your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-[#042047] text-[#ffe80a] font-black text-xs uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

    </section>
  );
}
