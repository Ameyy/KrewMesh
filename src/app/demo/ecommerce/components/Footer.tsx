"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Headphones, 
  ArrowRight, 
  Check, 
  Sparkles,
  Lock
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700">
      
      {/* 01: Value Proposition Badges */}
      <div className="border-b border-slate-100 py-10 px-6 bg-slate-50/70">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Truck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Complimentary Shipping</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Free global courier &amp; orbital freight dispatch on all orders exceeding ₹500.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">10-Year Hardware Warranty</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Full coverage for sensor degradation, crystalline fracture, and sub-atomic wear.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
              <RotateCcw size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">30-Day In-Field Trial</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Experience the hardware in your personal spatial workflow risk-free with zero friction.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
              <Headphones size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">24/7 Quantum Concierge</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Direct encrypted voice &amp; neural support with our hardware engineering team.</p>
            </div>
          </div>

        </div>
      </div>

      {/* 02: Main Footer Navigation & Newsletter */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Brand & Newsletter Column (2 Cols wide on LG) */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/demo/ecommerce" className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600" />
            <span className="text-2xl font-black tracking-tight text-slate-900">
              AETHER <span className="text-blue-600 font-medium">//</span> 2099
            </span>
          </Link>

          <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
            AETHER develops advanced post-human cybernetics, spatial optics, and tachyon chronometry. Engineered for high-agency individuals who demand uncompromising precision.
          </p>

          {/* Newsletter Box */}
          <div className="space-y-2 max-w-sm">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Subscribe to Hardware Transmissions
            </h5>
            <p className="text-[11px] text-slate-500">Receive priority access to limited prototype drops and firmware upgrades.</p>

            {subscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold rounded-xl flex items-center gap-2">
                <Check size={16} />
                <span>You are on the priority transmission registry.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your comms email..."
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Join</span>
                  <ArrowRight size={13} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Column 1: Hardware Catalog */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Hardware Catalog
          </h5>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <Link href="/demo/ecommerce/shop?cat=Chronometry" className="hover:text-blue-600 transition-colors">
                Quantum Chronometry
              </Link>
            </li>
            <li>
              <Link href="/demo/ecommerce/shop?cat=Neural+Wear" className="hover:text-blue-600 transition-colors">
                Neural Biometric Wear
              </Link>
            </li>
            <li>
              <Link href="/demo/ecommerce/shop?cat=Optics" className="hover:text-blue-600 transition-colors">
                Spatial 16K Eyewear
              </Link>
            </li>
            <li>
              <Link href="/demo/ecommerce/shop?cat=Spatial+Audio" className="hover:text-blue-600 transition-colors">
                Lossless Audio Pods
              </Link>
            </li>
            <li>
              <Link href="/demo/ecommerce/shop?cat=Exoskeleton" className="hover:text-blue-600 transition-colors">
                Tactile Exoskeletons
              </Link>
            </li>
            <li>
              <Link href="/demo/ecommerce/shop" className="text-blue-600 font-bold hover:underline">
                View All Systems &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Column 2: Studio & Research */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Studio &amp; Research
          </h5>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <Link href="/demo/ecommerce/about" className="hover:text-blue-600 transition-colors">
                About AETHER Labs
              </Link>
            </li>
            <li>
              <Link href="/demo/ecommerce/about#technology" className="hover:text-blue-600 transition-colors">
                Tachyon Core Science
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-blue-600 transition-colors">
                Careers at Studio
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                KREW / MESH Agency
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">
                Enterprise &amp; B2B
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Column 3: Customer Care & Legal */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Client Concierge
          </h5>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <Link href="/demo/ecommerce/cart" className="hover:text-blue-600 transition-colors">
                Shopping Bag
              </Link>
            </li>
            <li>
              <Link href="/demo/ecommerce/checkout" className="hover:text-blue-600 transition-colors">
                Direct Checkout
              </Link>
            </li>
            <li>
              <a href="#orbital-shipping" className="hover:text-blue-600 transition-colors">
                Orbital Dispatch Tracker
              </a>
            </li>
            <li>
              <a href="#warranty-terms" className="hover:text-blue-600 transition-colors">
                Warranty Claims &amp; Repairs
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-blue-600 transition-colors">
                Neural Data Privacy Act
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* 03: Bottom Bar (Copyright, Payment Badges) */}
      <div className="border-t border-slate-200 py-6 px-6 bg-slate-50 text-xs text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; 2026 AETHER // 2099 Laboratories. All rights reserved.</span>
            <span>&bull;</span>
            <span className="font-semibold text-slate-700">Built by KREW / MESH Creative-Tech Studio</span>
          </div>

          {/* Simulated Payment Icons */}
          <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">VISA</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">MASTERCARD</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">AMEX</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">APPLE PAY</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs text-blue-600">ETH (Ξ)</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs text-purple-600">SOL (◎)</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
