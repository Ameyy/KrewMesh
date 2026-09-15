import type { Metadata } from "next";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";

export const metadata: Metadata = {
  title: "AETHER // 2099 - Futuristic Spatial Hardware & Neural Artifacts",
  description: "Experience the next era of e-commerce. High-precision post-human wearable technology, tachyon chronometry, and 16K spatial optics.",
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="bg-[#FAFAFA] text-[#0F172A] min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <CartDrawer />
        <Footer />
      </div>
    </CartProvider>
  );
}
