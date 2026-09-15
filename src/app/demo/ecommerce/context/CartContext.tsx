"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ECOM_PRODUCTS } from "../data/products";

export interface CartItem {
  product: Product;
  colorway: string;
  quantity: number;
}

export type Currency = "INR" | "USD" | "EUR" | "GBP";

const CURRENCY_MAP: Record<Currency, { symbol: string; rate: number; decimals: number }> = {
  INR: { symbol: "₹", rate: 1, decimals: 0 },
  USD: { symbol: "$", rate: 0.012, decimals: 2 },
  EUR: { symbol: "€", rate: 0.011, decimals: 2 },
  GBP: { symbol: "£", rate: 0.0095, decimals: 2 },
};

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, colorway?: string, quantity?: number) => void;
  updateQuantity: (productId: string, colorway: string, delta: number) => void;
  removeFromCart: (productId: string, colorway: string) => void;
  clearCart: () => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (price: number) => string;
  promoCode: string;
  discountRate: number;
  applyPromo: (code: string) => boolean;
  totalItems: number;
  rawSubtotal: number;
  discountAmount: number;
  subtotal: number;
  shipping: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize with initial sample item or load from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    return [
      { product: ECOM_PRODUCTS[0], colorway: ECOM_PRODUCTS[0].colorways[0].name, quantity: 1 }
    ];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>("INR");
  const [promoCode, setPromoCode] = useState("");
  const [discountRate, setDiscountRate] = useState(0);

  // Load from localStorage if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aether_cart");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) setCart(parsed);
        } catch {
          // ignore
        }
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("aether_cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: Product, colorway?: string, quantity: number = 1) => {
    const chosenColor = colorway || product.colorways[0].name;
    setCart(prev => {
      const index = prev.findIndex(
        item => item.product.id === product.id && item.colorway === chosenColor
      );
      if (index > -1) {
        const next = [...prev];
        next[index].quantity += quantity;
        return next;
      }
      return [...prev, { product, colorway: chosenColor, quantity }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, colorway: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.product.id === productId && item.colorway === colorway) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (productId: string, colorway: string) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.colorway === colorway)));
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromo = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "KREW2026" || clean === "AETHER20") {
      setPromoCode(clean);
      setDiscountRate(0.2);
      return true;
    }
    if (clean === "FUTURE10") {
      setPromoCode(clean);
      setDiscountRate(0.1);
      return true;
    }
    return false;
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const rawSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = rawSubtotal * discountRate;
  const subtotal = rawSubtotal - discountAmount;
  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 45;
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    const config = CURRENCY_MAP[currency] || CURRENCY_MAP.INR;
    const converted = price * config.rate;
    return `${config.symbol}${converted.toLocaleString(currency === "INR" ? "en-IN" : "en-US", {
      minimumFractionDigits: config.decimals,
      maximumFractionDigits: config.decimals
    })}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        currency,
        setCurrency,
        formatPrice,
        promoCode,
        discountRate,
        applyPromo,
        totalItems,
        rawSubtotal,
        discountAmount,
        subtotal,
        shipping,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
