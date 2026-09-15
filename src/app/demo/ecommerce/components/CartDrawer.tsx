"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, Sparkles } from "lucide-react";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    formatPrice,
    totalItems,
    rawSubtotal,
    discountAmount,
    subtotal,
    shipping,
    total,
    promoCode,
    discountRate,
    applyPromo,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [promoMsg, setPromoMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  if (!isCartOpen) return null;

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const ok = applyPromo(inputCode);
    if (ok) {
      setPromoMsg({ type: "success", text: "Promo code applied successfully (20% off)!" });
    } else {
      setPromoMsg({ type: "error", text: "Invalid promo code. Try 'KREW2026'" });
    }
  };

  const freeShippingThreshold = 500;
  const progressPercent = Math.min(100, (rawSubtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Body (High light contrast) */}
      <div className="relative w-full max-w-md h-full bg-white text-slate-900 shadow-2xl flex flex-col justify-between z-10 border-l border-slate-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight text-slate-900">Your Cart</h3>
              <p className="text-xs text-slate-500 font-medium">{totalItems} {totalItems === 1 ? "item" : "items"} selected</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-6 py-3.5 bg-slate-50 border-b border-slate-100">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Truck size={14} className="text-blue-600" />
              {rawSubtotal >= freeShippingThreshold ? (
                <span className="text-emerald-700 font-bold">You qualify for Free Global Express Shipping!</span>
              ) : (
                <span>Add {formatPrice(freeShippingThreshold - rawSubtotal)} more for Free Shipping</span>
              )}
            </span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-slate-100">
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <ShoppingBag size={30} />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-800">Your bag is currently empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">Explore our curated collection of post-human spatial hardware and biometric wear.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.product.id}-${item.colorway}`} className="py-4 flex gap-4 items-start">
                <img
                  src={item.product.images.main}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-xl border border-slate-200 bg-slate-50 shrink-0"
                />
                
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <Link
                      href={`/demo/ecommerce/product/${item.product.id}`}
                      onClick={() => setIsCartOpen(false)}
                      className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-1"
                    >
                      {item.product.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id, item.colorway)}
                      className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <p className="text-xs text-slate-500 font-medium">Colorway: <span className="text-slate-800 font-semibold">{item.colorway}</span></p>

                  <div className="flex items-center justify-between pt-2">
                    {/* Quantity controls */}
                    <div className="inline-flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden shadow-xs">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.colorway, -1)}
                        className="p-1.5 text-slate-600 hover:bg-slate-100 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-2.5 text-xs font-bold text-slate-900">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.colorway, 1)}
                        className="p-1.5 text-slate-600 hover:bg-slate-100 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <span className="text-sm font-extrabold text-slate-900">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom Actions & Pricing */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
            
            {/* Promo code box */}
            <form onSubmit={handlePromoSubmit} className="flex gap-2">
              <input
                type="text"
                placeholder="Discount code (e.g. KREW2026)"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                className="flex-1 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Apply
              </button>
            </form>

            {promoMsg && (
              <p className={`text-xs font-semibold ${promoMsg.type === "success" ? "text-emerald-700" : "text-red-600"}`}>
                {promoMsg.text}
              </p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-slate-600 font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-slate-900 font-bold">{formatPrice(rawSubtotal)}</span>
              </div>
              {discountRate > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Discount ({discountRate * 100}%)</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="text-slate-900 font-bold">{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 text-base font-extrabold text-slate-900">
                <span>Total</span>
                <span className="text-blue-600">{formatPrice(total)}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2 pt-1">
              <Link
                href="/demo/ecommerce/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-center"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/demo/ecommerce/cart"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5 text-center"
              >
                <span>View Full Bag &amp; Order Notes</span>
              </Link>
            </div>

            {/* Security Guarantee Badge */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium pt-1">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>256-Bit Encrypted Secure Checkout</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
