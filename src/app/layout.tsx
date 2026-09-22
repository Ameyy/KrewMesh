import type { Metadata } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import CookieSettings from "@/components/CookieSettings";
import GlobalCanvas from "@/components/GlobalCanvas";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import CTAWithVerticalMarquee from "@/components/ui/cta-with-text-marquee";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krewmesh.agency";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "KREW / MESH | Creative Technology Studio",
  description: "Krew / Mesh is a modern creative-tech agency combining Branding, Graphic Design, UI/UX, Web Development, 3D Experiences, AI, SaaS and Digital Products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "KREW / MESH | Creative Technology Studio",
    description: "Krew / Mesh is a modern creative-tech agency combining Branding, Graphic Design, UI/UX, Web Development, 3D Experiences, AI, SaaS and Digital Products.",
    siteName: "Krew / Mesh",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "Krew / Mesh",
      "url": baseUrl,
      "logo": `${baseUrl}/krewmesh-logo-white.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-920-983-9142",
        "contactType": "customer service",
        "email": "hello@krewmesh.agency",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.instagram.com/krewmesh/",
        "https://www.linkedin.com/",
        "https://x.com/",
        "https://github.com/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Krew / Mesh",
      "publisher": {
        "@id": `${baseUrl}/#organization`
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={outfit.className}>
        <GlobalCanvas />
        <Header />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-CLVB54FXXP" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CLVB54FXXP');
          `}
        </Script>
        <CustomCursor />
        <main>{children}</main>
        <CTAWithVerticalMarquee />
        <ScrollToTop />
        <CookieSettings />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
