"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Search,
  SlidersHorizontal,
  Flame,
  ArrowUpDown,
  Tag,
  Check,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface BlogFilterClientProps {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
}

type SortOption = "newest" | "oldest" | "readtime" | "alphabetical";

export function BlogFilterClient({ posts, categories, tags }: BlogFilterClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  // Filtering & Sorting
  const filteredAndSortedPosts = useMemo(() => {
    let result = posts.filter((post) => {
      // Category match
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      // Tag match
      const matchesTag =
        selectedTag === "All" || post.tags.includes(selectedTag);

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.author.name.toLowerCase().includes(q);

      return matchesCategory && matchesTag && matchesSearch;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
      if (sortBy === "oldest") {
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      }
      if (sortBy === "alphabetical") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "readtime") {
        const getMinutes = (rt: string) => parseInt(rt, 10) || 5;
        return getMinutes(b.readTime) - getMinutes(a.readTime);
      }
      return 0;
    });

    return result;
  }, [posts, selectedCategory, selectedTag, searchQuery, sortBy]);

  const hasActiveFilters =
    selectedCategory !== "All" || selectedTag !== "All" || searchQuery.trim() !== "" || sortBy !== "newest";

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedTag("All");
    setSearchQuery("");
    setSortBy("newest");
  };

  return (
    <div className="space-y-8">
      {/* Control Bar: Search & Sort */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 sm:p-5 shadow-2xl space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword, or technology..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-black/40 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-[#ef671c] focus:ring-1 focus:ring-[#ef671c] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white px-1.5 py-0.5 rounded bg-white/10"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5 whitespace-nowrap">
              <ArrowUpDown className="size-3.5 text-[#ffc691]" />
              <span>Sort:</span>
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort articles"
                className="appearance-none bg-black/50 border border-white/10 hover:border-white/20 text-white text-xs font-medium rounded-xl px-3.5 py-2.5 pr-8 focus:outline-none focus:border-[#ef671c] transition-colors cursor-pointer"
              >
                <option value="newest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="readtime">Longest Read</option>
                <option value="alphabetical">Title (A-Z)</option>
              </select>
              <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400">
                <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Category Pill Filters */}
        <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider mr-1 flex items-center gap-1">
            <SlidersHorizontal className="size-3 text-[#ef671c]" /> Category:
          </span>
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === "All"
                ? "bg-white text-black font-semibold shadow-md shadow-white/10"
                : "bg-white/[0.05] text-neutral-300 hover:bg-white/[0.1] hover:text-white border border-white/10"
            }`}
          >
            All Categories ({posts.length})
          </button>
          {categories.map((cat) => {
            const count = posts.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? "All" : cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#ef671c] text-white font-semibold shadow-lg shadow-orange-500/25"
                    : "bg-white/[0.04] text-neutral-300 hover:bg-white/[0.09] hover:text-white border border-white/10"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-white/10 text-neutral-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Popular Tags Filter */}
        <div className="pt-2 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mr-1 flex items-center gap-1">
            <Tag className="size-3 text-[#ffc691]" /> Tag:
          </span>
          <button
            type="button"
            onClick={() => setSelectedTag("All")}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
              selectedTag === "All"
                ? "bg-white/20 text-white font-medium border border-white/30"
                : "bg-transparent text-neutral-400 hover:text-neutral-200 border border-transparent"
            }`}
          >
            All
          </button>
          {tags.slice(0, 10).map((t) => {
            const isSelected = selectedTag === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTag(isSelected ? "All" : t)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                  isSelected
                    ? "bg-[#ffc691]/20 text-[#ffc691] border border-[#ffc691]/40 font-semibold"
                    : "bg-white/[0.02] text-neutral-400 hover:text-white hover:bg-white/[0.06] border border-white/5"
                }`}
              >
                #{t}
              </button>
            );
          })}
        </div>

        {/* Active Filters Summary & Reset */}
        {hasActiveFilters && (
          <div className="pt-2 flex items-center justify-between text-xs text-neutral-400 border-t border-white/[0.05]">
            <span>
              Showing <strong className="text-white font-semibold">{filteredAndSortedPosts.length}</strong> of {posts.length} articles
            </span>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-[#ffc691] hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="size-3" />
              <span>Reset all filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Articles Grid or Empty State */}
      {filteredAndSortedPosts.length === 0 ? (
        <div className="py-20 text-center rounded-3xl border border-dashed border-white/15 bg-white/[0.01] p-8 space-y-4">
          <div className="size-12 rounded-full bg-white/5 mx-auto flex items-center justify-center text-neutral-400">
            <Search className="size-6" />
          </div>
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">
            No matching dispatches found
          </h3>
          <p className="text-sm text-neutral-400 max-w-md mx-auto">
            We couldn&apos;t find any articles matching your search query or selected criteria. Try adjusting your search term or clearing active filters.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-lg"
          >
            <RotateCcw className="size-3.5" />
            <span>Reset Filters</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAndSortedPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-orange-500/5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center rounded-md bg-[#ef671c]/10 px-2.5 py-1 text-xs font-medium text-[#ffc691] border border-[#ef671c]/25">
                    {post.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                    <Clock className="size-3" />
                    {post.readTime}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block group/title">
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover/title:text-[#ffc691] transition-colors leading-snug">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags preview */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-neutral-400">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Calendar className="size-3 text-neutral-500" />
                  <span>{post.publishedAt}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#ffc691] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
