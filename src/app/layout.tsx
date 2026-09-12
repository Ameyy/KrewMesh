import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";



const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "KREW / MESH | Creative Technology Studio",
  description: "Krew / Mesh is a modern creative-tech agency combining Branding, Graphic Design, UI/UX, Web Development, 3D Experiences, AI, SaaS and Digital Products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark`} suppressHydrationWarning>
      <body>
        <CustomCursor />
        <main>{children}</main>
      </body>
    </html>
  );
}
