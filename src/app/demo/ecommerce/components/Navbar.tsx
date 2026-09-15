"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart, Currency } from "../context/CartContext";
import { ECOM_PRODUCTS } from "../data/products";
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  ArrowLeft,
  ChevronDown
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen, currency, setCurrency, formatPrice } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = searchQuery.trim()
    ? ECOM_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const navLinks = [
    { label: "Shop All", href: "/demo/ecommerce/shop" },
    { label: "Hardware", href: "/demo/ecommerce/shop?cat=Neural+Wear" },
    { label: "Lab Story", href: "/demo/ecommerce/about" },
  ];

  return (
    <>
      {/* Sleek, High-Light Minimal Announcement Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 text-slate-600 text-[11px] py-1.5 px-4 text-center font-mono tracking-tight flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>Complimentary orbital shipping over ₹500</span>
        <span className="text-slate-300 hidden sm:inline">&bull;</span>
        <span className="hidden sm:inline">Use code <strong className="text-slate-900 font-bold">KREW2026</strong> for 20% off</span>
      </div>

      {/* Clean, Uncluttered Light Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          
          {/* Left: Mobile Toggle & Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <Link href="/demo/ecommerce" className="flex items-center gap-2 group">
              <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-mono">
                AETHER <span className="text-slate-400 font-normal">//</span> LABS
              </span>
            </Link>
          </div>

          {/* Center: Clean, Focused Primary Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-semibold tracking-wide transition-colors hover:text-blue-600 ${
                    isActive ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Minimal Actions (Search, Currency, Cart, Back to Agency) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Search products"
            >
              <Search size={17} />
            </button>

            {/* Subtle Currency Dropdown */}
            <div className="relative hidden sm:block">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-mono font-bold rounded-lg pl-2.5 pr-6 py-1.5 focus:outline-none focus:border-slate-400 transition-colors cursor-pointer"
              >
                <option value="INR">INR ₹</option>
                <option value="USD">USD $</option>
                <option value="EUR">EUR €</option>
                <option value="GBP">GBP £</option>
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            {/* Cart / Bag Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white hover:bg-blue-600 text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <ShoppingBag size={14} />
              <span className="hidden sm:inline">Cart</span>
              <span className="w-4 h-4 rounded-full bg-white text-slate-900 flex items-center justify-center text-[10px] font-black">
                {totalItems}
              </span>
            </button>

            {/* Clean Back Link to Main Agency */}
            <Link
              href="/"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-900 transition-colors pl-3 border-l border-slate-200"
              title="Return to KREW / MESH Agency"
            >
              <ArrowLeft size={12} />
              <span>Agency</span>
            </Link>

          </div>

        </div>

        {/* Live Search Modal Overlay */}
        {searchOpen && (
          <div className="border-t border-slate-200 bg-white/98 backdrop-blur-md p-4 shadow-xl animate-in fade-in duration-200">
            <div className="max-w-2xl mx-auto space-y-3">
              <div className="relative">
                <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search futuristic hardware, optics, wearables..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              {searchQuery && (
                <div className="max-h-60 overflow-y-auto divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white shadow-lg p-1.5">
                  {searchResults.length === 0 ? (
                    <p className="p-3 text-xs font-medium text-slate-500 text-center">No products matching "{searchQuery}"</p>
                  ) : (
                    searchResults.map((p) => (
                      <Link
                        key={p.id}
                        href={`/demo/ecommerce/product/${p.id}`}
                        onClick={() => setSearchOpen(false)}
                        className="p-2.5 flex items-center gap-3 hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        <img src={p.images.main} alt={p.name} className="w-10 h-10 object-cover rounded-lg border border-slate-200" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-900 truncate">{p.name}</h4>
                          <p className="text-[10px] text-slate-500">{p.category} &bull; {formatPrice(p.price)}</p>
                        </div>
                        <ArrowRight size={13} className="text-slate-400" />
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white p-5 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-900 hover:text-blue-600 py-1.5 border-b border-slate-100"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/demo/ecommerce/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-900 hover:text-blue-600 py-1.5 border-b border-slate-100"
              >
                All Products
              </Link>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-slate-500 hover:text-slate-900 pt-2 flex items-center gap-1.5"
              >
                <ArrowLeft size={12} />
                <span>Return to KREW / MESH Agency</span>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
