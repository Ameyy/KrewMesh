"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ECOM_PRODUCTS, CATEGORIES_LIST, Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { 
  SlidersHorizontal, 
  Search, 
  Eye, 
  ArrowRight, 
  Star, 
  Check, 
  X,
  ChevronDown
} from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") || "All";

  const { addToCart, formatPrice } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSort, setSelectedSort] = useState("featured");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  // Filtering
  let filtered = ECOM_PRODUCTS.filter((p) => {
    const matchCat = selectedCategory === "All" || p.category === selectedCategory;
    const matchStock = inStockOnly ? p.inStock : true;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchStock && matchSearch;
  });

  // Sorting
  if (selectedSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      {/* Breadcrumbs & Title */}
      <div className="space-y-2 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/demo/ecommerce" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Catalog</span>
          {selectedCategory !== "All" && (
            <>
              <span>/</span>
              <span className="text-blue-600 font-bold">{selectedCategory}</span>
            </>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Hardware Catalog
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Showing {filtered.length} systems &bull; Precision crafted in Zurich &amp; Tokyo
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search systems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs font-medium bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Main Catalog Layout (Sidebar + Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Desktop Filters Sidebar */}
        <aside className="hidden lg:block space-y-6 sticky top-28 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">
              Categories
            </h3>
            <div className="space-y-1.5">
              {CATEGORIES_LIST.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedCategory(c.name)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    selectedCategory === c.name
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{c.name}</span>
                  <span className="text-[11px] opacity-60 font-mono">({c.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* In-Stock Toggle */}
          <div className="pt-4 border-t border-slate-100">
            <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-800">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
              />
              <span>In-Stock Systems Only</span>
            </label>
          </div>

          {/* Quick Filter Reset */}
          {(selectedCategory !== "All" || inStockOnly || searchQuery) && (
            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setInStockOnly(false);
                  setSearchQuery("");
                }}
                className="w-full py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </aside>

        {/* Product Grid Area (3 Columns on LG) */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Sorting and Mobile Filter Bar */}
          <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 font-bold text-slate-800"
            >
              <SlidersHorizontal size={14} />
              <span>Filters</span>
            </button>

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-slate-500 font-medium">Sort by:</span>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600 cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          {mobileFilterOpen && (
            <div className="lg:hidden p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-bold text-xs text-slate-900 uppercase">Categories</span>
                <button onClick={() => setMobileFilterOpen(false)} className="text-slate-400">
                  <X size={16} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES_LIST.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => {
                      setSelectedCategory(c.name);
                      setMobileFilterOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      selectedCategory === c.name
                        ? "bg-blue-600 text-white font-bold"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Product Items */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center space-y-3 bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-500 text-sm font-medium">No hardware systems match your current filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setInStockOnly(false);
                  setSearchQuery("");
                }}
                className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-56 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 mb-4">
                      <img
                        src={p.images.main}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      />
                      {p.badge && (
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white shadow-sm">
                          {p.badge}
                        </span>
                      )}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link
                          href={`/demo/ecommerce/product/${p.id}`}
                          className="p-2 rounded-full bg-white text-slate-900 shadow-md hover:bg-blue-600 hover:text-white transition-colors block"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </Link>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-blue-600 uppercase tracking-wider text-[11px]">
                          {p.category}
                        </span>
                        <div className="flex items-center gap-1 text-slate-500 text-[11px] font-bold">
                          <Star size={12} className="text-amber-500 fill-amber-500" />
                          <span>{p.rating}</span>
                          <span className="text-slate-400 font-normal">({p.reviewCount})</span>
                        </div>
                      </div>

                      <Link
                        href={`/demo/ecommerce/product/${p.id}`}
                        className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-1 block"
                      >
                        {p.name}
                      </Link>

                      <p className="text-xs text-slate-500 line-clamp-2">
                        {p.tagline}
                      </p>

                      <div className="pt-1 flex items-center gap-2">
                        <span className="text-base font-extrabold text-slate-900">
                          {formatPrice(p.price)}
                        </span>
                        {p.compareAtPrice && (
                          <span className="text-xs text-slate-400 line-through font-medium">
                            {formatPrice(p.compareAtPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quick Add Action */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <button
                      type="button"
                      onClick={() => addToCart(p, p.colorways[0].name)}
                      className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-blue-600 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Add to Bag &bull; {p.colorways[0].name}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-6 py-24 text-center space-y-3">
          <div className="w-8 h-8 rounded-full border-2 border-slate-300 border-t-blue-600 animate-spin mx-auto" />
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Synchronizing Hardware Catalog...
          </p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}

