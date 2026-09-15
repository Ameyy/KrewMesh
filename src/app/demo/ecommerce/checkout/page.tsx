"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { 
  ShieldCheck, 
  Lock, 
  ArrowLeft, 
  CheckCircle2, 
  CreditCard, 
  Zap, 
  Truck, 
  ShoppingBag, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function CheckoutPage() {
  const {
    cart,
    rawSubtotal,
    discountAmount,
    discountRate,
    shipping,
    total,
    formatPrice,
    clearCart,
  } = useCart();

  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [orderNumber, setOrderNumber] = useState("");
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    email: "aiden.vance@spatial.io",
    firstName: "Aiden",
    lastName: "Vance",
    address: "744 Quantum Way, Floor 18",
    apartment: "Suite 4B",
    city: "San Francisco",
    state: "CA",
    postalCode: "94107",
    country: "United States",
    shippingMethod: "orbital-express",
    paymentMethod: "card",
    cardNumber: "•••• •••• •••• 4242",
    expiry: "12/28",
    cvc: "888",
  });

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generated = `ORD-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generated);
    setStep("confirmed");
    clearCart();
  };

  if (step === "confirmed") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200">
          <CheckCircle2 size={42} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Payment Authenticated &bull; Order Confirmed
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Thank you, {formData.firstName}!
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Your order confirmation and tracking credentials have been transmitted to <span className="font-bold text-slate-900">{formData.email}</span>.
          </p>
        </div>

        {/* Order Receipt Card */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md text-left space-y-4 max-w-lg mx-auto">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500">Order Reference</span>
            <span className="text-sm font-mono font-bold text-blue-600">{orderNumber}</span>
          </div>

          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
            <span className="text-slate-500">Destination</span>
            <span className="font-semibold text-slate-800">{formData.address}, {formData.city}, {formData.state}</span>
          </div>

          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
            <span className="text-slate-500">Estimated Dispatch</span>
            <span className="font-semibold text-emerald-700">Within 24 Hours via Courier</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Warranty Registration</span>
            <span className="font-bold text-slate-900">10-Year Quantum Active</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(orderNumber);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50"
          >
            {copied ? "Copied Reference!" : "Copy Order ID"}
          </button>

          <Link
            href="/demo/ecommerce"
            className="px-7 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors"
          >
            Return to Store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8">
      
      {/* Back to Cart link */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/demo/ecommerce/cart" className="hover:text-blue-600 flex items-center gap-1">
          <ArrowLeft size={14} />
          <span>Return to Bag</span>
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">Encrypted Express Checkout</span>
      </div>

      {/* Main Checkout Layout: Form (7 cols) + Order Summary (5 cols) */}
      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form Steps */}
        <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
          
          {/* Section 1: Contact Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">1</span>
              <span>Contact Coordinates</span>
            </h2>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase">Email Address for Dispatch Updates</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          {/* Section 2: Delivery Address */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">2</span>
              <span>Shipping Destination</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">First Name</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Last Name</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase">Street Address</label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">City</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">State / Province</label>
                <input
                  type="text"
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Postal Code</label>
                <input
                  type="text"
                  required
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Payment Method */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">3</span>
              <span>Encrypted Payment Authorization</span>
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: "card" })}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  formData.paymentMethod === "card"
                    ? "border-blue-600 bg-blue-50/50 text-slate-900 shadow-xs"
                    : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                <CreditCard size={20} className="text-blue-600 mb-1" />
                <span className="text-xs font-bold block">Credit / Debit Card</span>
                <span className="text-[10px] text-slate-500">256-Bit Encrypted</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: "crypto" })}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  formData.paymentMethod === "crypto"
                    ? "border-blue-600 bg-blue-50/50 text-slate-900 shadow-xs"
                    : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                <Zap size={20} className="text-purple-600 mb-1" />
                <span className="text-xs font-bold block">Quantum Web3 Pay</span>
                <span className="text-[10px] text-slate-500">ETH &bull; SOL &bull; Zero Gas</span>
              </button>
            </div>

            {formData.paymentMethod === "card" ? (
              <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Card Number</label>
                  <input
                    type="text"
                    required
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs bg-white text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">Expiration (MM/YY)</label>
                    <input
                      type="text"
                      required
                      value={formData.expiry}
                      onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs bg-white text-slate-900"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">Security Code (CVC)</label>
                    <input
                      type="text"
                      required
                      value={formData.cvc}
                      onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs bg-white text-slate-900"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-900 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <Zap size={14} className="text-purple-600" />
                  Quantum Web3 Smart Contract Active
                </p>
                <p className="text-purple-700 text-[11px]">Instant settlement via Ethereum or Solana wallet address upon confirmation.</p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <Lock size={16} />
              <span>Authorize Payment &bull; {formatPrice(total)}</span>
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              By placing this order you accept AETHER's 10-Year Hardware Guarantee and Terms.
            </p>
          </div>

        </div>

        {/* Right Column: Order Summary (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6 sticky top-28">
          <h3 className="text-lg font-black text-slate-900 tracking-tight pb-4 border-b border-slate-100">
            Order Review ({cart.length} Systems)
          </h3>

          {/* Mini Item List */}
          <div className="space-y-3 max-h-60 overflow-y-auto divide-y divide-slate-100">
            {cart.map((item) => (
              <div key={`${item.product.id}-${item.colorway}`} className="pt-3 first:pt-0 flex items-center gap-3">
                <img
                  src={item.product.images.main}
                  alt={item.product.name}
                  className="w-14 h-14 object-cover rounded-xl border border-slate-200 bg-slate-50 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{item.product.name}</h4>
                  <p className="text-[11px] text-slate-500">Finish: {item.colorway} &bull; Qty: {item.quantity}</p>
                </div>
                <span className="text-xs font-extrabold text-slate-900">
                  {formatPrice(item.product.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-medium text-slate-600">
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
            <div className="flex justify-between pt-3 border-t border-slate-200 text-base font-black text-slate-900">
              <span>Final Total</span>
              <span className="text-blue-600">{formatPrice(total)}</span>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-600 shrink-0" />
              <span>Encrypted Transaction Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-blue-600 shrink-0" />
              <span>Dispatched with Temperature &amp; Shock Telemetry</span>
            </div>
          </div>

        </div>

      </form>

    </div>
  );
}
