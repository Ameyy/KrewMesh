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
  title: {
    default: "KREW / MESH | Creative Technology Studio",
    template: "%s | KREW / MESH",
  },
  description: "Krew / Mesh is a modern creative-tech studio combining Branding, Graphic Design, UI/UX, Web Development, 3D Experiences, AI, SaaS and Digital Products.",
  keywords: [
    "Krew Mesh",
    "creative technology studio",
    "branding and visual identity",
    "UI UX design studio",
    "web development agency",
    "Next.js developers",
    "AI automation solutions",
    "SaaS platforms"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "KREW / MESH | Creative Technology Studio",
    description: "Krew / Mesh is a modern creative-tech studio combining Branding, Graphic Design, UI/UX, Web Development, 3D Experiences, AI, SaaS and Digital Products.",
    siteName: "KREW / MESH",
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
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${baseUrl}/#organization`,
      "name": "Krew / Mesh",
      "alternateName": ["KrewMesh", "Krew / Mesh Studio"],
      "url": baseUrl,
      "logo": `${baseUrl}/krewmesh-logo-white.png`,
      "image": `${baseUrl}/krewmesh-logo.png`,
      "description": "Independent creative-technology studio specializing in Brand Identity, UI/UX Design, High-Performance Web Development, 3D Experiences, AI Solutions, and SaaS Platforms.",
      "telephone": "+91-920-983-9142",
      "email": "hello@krewmesh.agency",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "City", "name": "Indore" },
        { "@type": "City", "name": "Pune" },
        { "@type": "City", "name": "Nagpur" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-920-983-9142",
        "contactType": "customer service",
        "email": "hello@krewmesh.agency",
        "availableLanguage": ["English", "Hindi"]
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WWDJQX72');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="author" href="https://krewmesh.agency/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={outfit.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWDJQX72"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
