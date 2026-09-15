"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ECOM_PRODUCTS } from "./data/products";
import { useCart } from "./context/CartContext";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Star, 
  Zap, 
  Layers, 
  Truck, 
  Eye, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export default function EcommerceHomePage() {
  const { addToCart, formatPrice } = useCart();
  const [activeHeroColor, setActiveHeroColor] = useState("Polar Titanium");

  const heroProduct = ECOM_PRODUCTS[0]; // Chrono X-99
  const featuredProducts = ECOM_PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 01: Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 pt-8 pb-16 sm:pt-14 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-blue-600" />
              <span>Series 09 Hardware Drop &bull; Now Available</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.06]">
              Artifacts for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900">
                Post-Human Horizon.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Uncompromising spatial hardware, neural interfaces, and tachyon chronometry. Engineered for those who shape what comes next.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/demo/ecommerce/shop"
                className="px-7 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-102"
              >
                <span>Shop Full Collection</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/demo/ecommerce/about"
                className="px-6 py-3.5 rounded-full bg-white border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <span>Our Technology &amp; Lab</span>
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-slate-200 text-xs text-slate-600 font-medium">
              <div>
                <span className="block text-slate-900 font-extrabold text-base sm:text-lg">0.0001ms</span>
                <span>Atomic Sync</span>
              </div>
              <div>
                <span className="block text-slate-900 font-extrabold text-base sm:text-lg">10-Year</span>
                <span>Hardware Warranty</span>
              </div>
              <div>
                <span className="block text-slate-900 font-extrabold text-base sm:text-lg">Free</span>
                <span>Orbital Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Hero Product Card Showcase */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100">
                  {heroProduct.badge}
                </span>
                <span className="text-xl font-extrabold text-slate-900">
                  {formatPrice(heroProduct.price)}
                </span>
              </div>

              {/* Product Hero Photo */}
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
                <img
                  src={heroProduct.images.main}
                  alt={heroProduct.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    Finish: {activeHeroColor}
                  </span>
                  <Link
                    href={`/demo/ecommerce/product/${heroProduct.id}`}
                    className="bg-white text-slate-900 px-3.5 py-1 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Quick Spec
                  </Link>
                </div>
              </div>

              {/* Product Metadata & Action */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {heroProduct.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {heroProduct.subtitle}
                  </p>
                </div>

                {/* Colorway Pills */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs text-slate-500 font-bold uppercase">Colorway:</span>
                  <div className="flex items-center gap-2">
                    {heroProduct.colorways.map((cw) => (
                      <button
                        key={cw.name}
                        onClick={() => setActiveHeroColor(cw.name)}
                        className={`w-6 h-6 rounded-full border-2 transition-all ${
                          activeHeroColor === cw.name ? "border-blue-600 scale-110 shadow-xs" : "border-slate-300"
                        }`}
                        style={{ backgroundColor: cw.hex }}
                        title={cw.name}
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => addToCart(heroProduct, activeHeroColor)}
                    className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Instant Add to Bag</span>
                    <ArrowRight size={15} />
                  </button>

                  <Link
                    href={`/demo/ecommerce/product/${heroProduct.id}`}
                    className="px-4 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 02: Category Exploration Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              Hardware Taxonomy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              Curated Spatial Disciplines
            </h2>
          </div>
          <Link
            href="/demo/ecommerce/shop"
            className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            <span>View All Systems ({ECOM_PRODUCTS.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Neural Wear",
              count: "Smart Rings & Biometrics",
              href: "/demo/ecommerce/shop?cat=Neural+Wear",
              img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
              desc: "Motor-cortex gesture sensors & sub-dermal telemetry."
            },
            {
              title: "Spatial Optics",
              count: "16K Retinal Waveguides",
              href: "/demo/ecommerce/shop?cat=Optics",
              img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
              desc: "Frameless 18g electrochromic HUD eyewear."
            },
            {
              title: "Quantum Chronometry",
              count: "Tachyon Resonators",
              href: "/demo/ecommerce/shop?cat=Chronometry",
              img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
              desc: "Liquid titanium diamondoid atomic timepieces."
            },
            {
              title: "Spatial Audio",
              count: "Levitating Acoustical Pods",
              href: "/demo/ecommerce/shop?cat=Spatial+Audio",
              img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
              desc: "Pure beryllium planar magnetic lossless sound."
            },
          ].map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-48 w-full rounded-xl overflow-hidden bg-slate-100 mb-4">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  {cat.count}
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                  <span>{cat.title}</span>
                  <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 03: Featured Systems Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              Flagship Artifacts
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              Engineered for Highest Impact
            </h2>
          </div>
          <Link
            href="/demo/ecommerce/shop"
            className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            <span>Explore All</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((p) => (
            <div
              key={p.id}
              className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badge */}
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
                      title="Quick View"
                    >
                      <Eye size={16} />
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-blue-600 uppercase tracking-wider">
                      {p.category}
                    </span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {formatPrice(p.price)}
                    </span>
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
                </div>
              </div>

              {/* Bottom Quick Buy Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
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
      </section>

      {/* 04: Lab Spotlight / Innovation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-400/30">
              <Zap size={14} />
              <span>AETHER Zurich Spatial Lab</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Materials science forged for the next millennium.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every AETHER artifact is machined to micron tolerances using biocompatible titanium, pure synthetic diamondoid, and sub-atomic quantum flux sensors. Designed with zero planned obsolescence.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/demo/ecommerce/about"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-500 transition-colors flex items-center gap-2"
              >
                <span>Read the Engineering Manifesto</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05: Verified Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            Field Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Trusted by Leaders in Creative Tech
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              author: "Dr. Alistair Chen",
              role: "Principal Spatial Computing Fellow",
              stars: 5,
              text: "The AETHER // VISION-16K replaced my physical studio multi-monitor desk setup entirely. Zero latency, 10-hour battery, and featherweight ergonomics."
            },
            {
              author: "Nadia Sterling",
              role: "Creative Director & Founder",
              stars: 5,
              text: "The CHRONO // X-99 is easily the most stunning timepiece I've seen in the last decade. It feels like an artifact recovered from the 22nd century."
            },
            {
              author: "Elias Vance",
              role: "Cybernetics Engineer",
              stars: 5,
              text: "The gesture tracking on the NEURAL // RING-4 is uncanny. It feels like telepathy. Flawless build quality and water resistance."
            },
          ].map((t, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium italic">
                "{t.text}"
              </p>
              <div className="pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900">{t.author}</h4>
                <p className="text-[11px] text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
