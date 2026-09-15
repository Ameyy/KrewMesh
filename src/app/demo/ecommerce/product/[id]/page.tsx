"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ECOM_PRODUCTS, Product } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Minus, 
  Plus, 
  ArrowRight, 
  Share2, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Info
} from "lucide-react";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = ECOM_PRODUCTS.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const { addToCart, formatPrice, setIsCartOpen } = useCart();
  const [selectedColorway, setSelectedColorway] = useState(product.colorways[0].name);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.images.main);
  const [addedToast, setAddedToast] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string>("specs");

  const relatedProducts = ECOM_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    addToCart(product, selectedColorway, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedColorway, quantity);
    setIsCartOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/demo/ecommerce" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link href="/demo/ecommerce/shop" className="hover:text-blue-600">Catalog</Link>
        <span>/</span>
        <Link href={`/demo/ecommerce/shop?cat=${encodeURIComponent(product.category)}`} className="hover:text-blue-600">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">{product.name}</span>
      </div>

      {/* Main PDP Grid (Gallery Left + Buy Box Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Image Gallery (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Main Large Visual Canvas */}
          <div className="relative w-full h-[400px] sm:h-[550px] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-900 text-white shadow-md">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              Selected Finish: {selectedColorway}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {product.images.angles.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all bg-white shrink-0 ${
                  activeImage === img ? "border-blue-600 shadow-md scale-102" : "border-slate-200 opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Angle ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>

        {/* Right Column: Buy Box & Product Narrative (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg">
          
          {/* SKU & Category */}
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
            <span>{product.category}</span>
            <span className="font-mono text-slate-400">SKU: {product.sku}</span>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {product.name}
            </h1>
            <p className="text-sm font-semibold text-blue-600">
              {product.subtitle}
            </p>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="font-bold text-slate-900">{product.rating}</span>
            <span className="text-slate-400">&bull;</span>
            <a href="#reviews" className="hover:underline text-blue-600">{product.reviewCount} Verified Reviews</a>
          </div>

          {/* Price Box */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-baseline justify-between">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-slate-900">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-base text-slate-400 line-through font-medium">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
            {product.compareAtPrice && (
              <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800">
                Save {formatPrice(product.compareAtPrice - product.price)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {product.description}
          </p>

          {/* Colorway Selection */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800 uppercase">Select Alloy Finish:</span>
              <span className="font-semibold text-slate-600">{selectedColorway}</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {product.colorways.map((cw) => (
                <button
                  key={cw.name}
                  type="button"
                  onClick={() => setSelectedColorway(cw.name)}
                  className={`px-3.5 py-2 rounded-xl border flex items-center gap-2 text-xs font-semibold transition-all ${
                    selectedColorway === cw.name
                      ? "border-blue-600 bg-blue-50/60 text-blue-900 shadow-xs"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <span className="w-3.5 h-3.5 rounded-full border border-slate-300" style={{ backgroundColor: cw.hex }} />
                  <span>{cw.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Inventory Status */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>In Stock &bull; {product.leadTime}</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Stepper */}
              <div className="flex items-center border border-slate-300 rounded-xl bg-slate-50 overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-xs font-bold text-slate-900">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 py-3.5 px-6 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Add to Bag &bull; {formatPrice(product.price * quantity)}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              type="button"
              onClick={handleBuyNow}
              className="w-full py-3 px-6 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-md text-center"
            >
              Instant Express Checkout
            </button>
          </div>

          {/* Added Toast */}
          {addedToast && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between animate-fade-in-up">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} />
                Added {quantity} &times; {product.name} ({selectedColorway}) to your bag!
              </span>
              <button onClick={() => setIsCartOpen(true)} className="underline font-bold text-emerald-900">
                View Bag &rarr;
              </button>
            </div>
          )}

          {/* Guarantees List */}
          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-600 shrink-0" />
              <span>10-Yr Hardware Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-blue-600 shrink-0" />
              <span>Complimentary Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw size={16} className="text-blue-600 shrink-0" />
              <span>30-Day Risk-Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-blue-600 shrink-0" />
              <span>Instant Neural Support</span>
            </div>
          </div>

        </div>

      </div>

      {/* Accordions: Deep Hardware Specs & Shipping */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <h3 className="text-xl font-black text-slate-900 tracking-tight">
          System Specifications &amp; Engineering Details
        </h3>

        {/* Specs Table */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {product.specs.map((s, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase">{s.label}</span>
              <p className="text-xs font-extrabold text-slate-900">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Feature Bullet Points */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Architecture Highlights
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                <Check size={15} className="text-blue-600 mt-0.5 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Verified Client Reviews ({product.reviews.length})
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Field reports from verified owners across global quadrants.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-lg font-black text-slate-900">{product.rating} out of 5.0</span>
          </div>
        </div>

        <div className="space-y-6 divide-y divide-slate-100">
          {product.reviews.map((r) => (
            <div key={r.id} className="pt-6 first:pt-0 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">{r.author}</span>
                  {r.verified && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      Verified Owner
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-400">{r.date}</span>
              </div>

              <div className="flex items-center text-amber-500">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>

              <h4 className="text-sm font-bold text-slate-900">{r.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">"{r.comment}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* You May Also Like */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <h3 className="text-xl font-black text-slate-900 tracking-tight">
            Complementary Spatial Hardware
          </h3>
          <Link href="/demo/ecommerce/shop" className="text-xs font-bold text-blue-600 hover:underline">
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((rel) => (
            <Link
              key={rel.id}
              href={`/demo/ecommerce/product/${rel.id}`}
              className="group p-4 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all space-y-3"
            >
              <div className="h-44 rounded-xl overflow-hidden bg-slate-100">
                <img src={rel.images.main} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-blue-600">{rel.category}</span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">{rel.name}</h4>
                <p className="text-xs font-extrabold text-slate-900">{formatPrice(rel.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
