"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  ArrowLeft 
} from "lucide-react";

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    formatPrice,
    rawSubtotal,
    discountAmount,
    discountRate,
    subtotal,
    shipping,
    total,
    applyPromo,
    totalItems,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoMessage, setPromoMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [orderNote, setOrderNote] = useState("");

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const ok = applyPromo(promoInput);
    if (ok) {
      setPromoMessage({ type: "success", text: "20% Studio discount applied!" });
    } else {
      setPromoMessage({ type: "error", text: "Invalid code. Try 'KREW2026'" });
    }
  };

  const freeThreshold = 500;
  const freeDiff = Math.max(0, freeThreshold - rawSubtotal);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
          <ShoppingBag size={36} />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Your shopping bag is empty</h1>
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            Explore our curated catalog of spatial computing hardware, optics, and tachyon chronometry.
          </p>
        </div>
        <Link
          href="/demo/ecommerce/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-md"
        >
          <span>Explore Catalog</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-10">
      
      {/* Title */}
      <div className="space-y-1 pb-6 border-b border-slate-200">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Shopping Bag ({totalItems})
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Review your selected hardware systems before secure encrypted dispatch.
        </p>
      </div>

      {/* Main Grid: Cart Items (Left 8 Cols) + Summary (Right 4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Items List */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Free Shipping Callout */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-center justify-between text-xs font-semibold text-blue-900">
            <span className="flex items-center gap-2">
              <Truck size={16} className="text-blue-600" />
              {freeDiff === 0 ? (
                <span className="text-emerald-700 font-bold">You unlocked Complimentary Global Express Shipping!</span>
              ) : (
                <span>Add {formatPrice(freeDiff)} more to unlock Free Global Shipping</span>
              )}
            </span>
            <span className="font-bold">{freeDiff === 0 ? "QUALIFIED" : `${Math.round((rawSubtotal / freeThreshold) * 100)}%`}</span>
          </div>

          {/* Items Table */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs divide-y divide-slate-100">
            {cart.map((item) => (
              <div
                key={`${item.product.id}-${item.colorway}`}
                className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                {/* Photo + Info */}
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src={item.product.images.main}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-2xl border border-slate-200 bg-slate-50 shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                      {item.product.category}
                    </span>
                    <Link
                      href={`/demo/ecommerce/product/${item.product.id}`}
                      className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block line-clamp-1"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-slate-500 font-medium">
                      Colorway: <span className="text-slate-800 font-semibold">{item.colorway}</span>
                    </p>
                    <p className="text-xs text-slate-700 font-extrabold sm:hidden">
                      {formatPrice(item.product.price)} each
                    </p>
                  </div>
                </div>

                {/* Stepper + Price + Remove */}
                <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-6">
                  {/* Stepper */}
                  <div className="flex items-center border border-slate-300 rounded-xl bg-slate-50 overflow-hidden shadow-2xs">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.colorway, -1)}
                      className="p-2 text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="px-3 text-xs font-bold text-slate-900">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.colorway, 1)}
                      className="p-2 text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-[90px]">
                    <span className="text-base font-black text-slate-900">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id, item.colorway)}
                    className="text-slate-400 hover:text-red-600 p-2 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Delivery / Order Notes Box */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Special Handling &amp; Quantum Dispatch Notes
            </h3>
            <textarea
              rows={3}
              value={orderNote}
              onChange={(e) => setOrderNote(e.target.value)}
              placeholder="Add specific delivery instructions, custom engraving request, or encryption protocol notes..."
              className="w-full rounded-2xl border border-slate-300 p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Return link */}
          <Link
            href="/demo/ecommerce/shop"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Continue Exploring Systems</span>
          </Link>

        </div>

        {/* Right Column: Order Summary (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg space-y-6 sticky top-28">
          <h2 className="text-lg font-black text-slate-900 tracking-tight pb-4 border-b border-slate-100">
            Order Summary
          </h2>

          {/* Promo code */}
          <form onSubmit={handleApply} className="flex gap-2">
            <input
              type="text"
              placeholder="Promo code (e.g. KREW2026)"
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
              className="flex-1 rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors"
            >
              Apply
            </button>
          </form>

          {promoMessage && (
            <p className={`text-xs font-semibold ${promoMessage.type === "success" ? "text-emerald-700" : "text-red-600"}`}>
              {promoMessage.text}
            </p>
          )}

          {/* Pricing breakdown */}
          <div className="space-y-3 text-xs font-medium text-slate-600">
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
              <span>Orbital Express Shipping</span>
              <span className="text-slate-900 font-bold">{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Sales Tax</span>
              <span className="text-slate-900 font-bold">Calculated at Checkout</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-slate-200 text-lg font-black text-slate-900">
              <span>Total</span>
              <span className="text-blue-600">{formatPrice(total)}</span>
            </div>
          </div>

          {/* Checkout CTA */}
          <Link
            href="/demo/ecommerce/checkout"
            className="w-full py-4 px-6 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-center"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight size={16} />
          </Link>

          {/* Trust Guarantees */}
          <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>10-Year Global Quantum Hardware Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-blue-600" />
              <span>Insured Real-Time Courier Tracking</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
