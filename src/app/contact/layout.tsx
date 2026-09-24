import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krewmesh.agency";

export const metadata: Metadata = {
  title: "Contact Us | Start a Project | KREW / MESH",
  description:
    "Get in touch with Krew / Mesh to start a branding, UI/UX design, Next.js web build, or AI development project. Contact us via phone, email, or send a project inquiry.",
  keywords: [
    "Contact Krew Mesh",
    "hire web development agency",
    "start a project",
    "UI UX design inquiry",
    "branding quote",
    "creative technology studio contact",
    "Nagpur web agency"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Start a Project | KREW / MESH",
    description:
      "Get in touch with Krew / Mesh to start a branding, UI/UX design, Next.js web build, or AI development project.",
    url: `${baseUrl}/contact`,
    siteName: "KREW / MESH",
    locale: "en_US",
    type: "website",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${baseUrl}/contact/#contactpage`,
      "url": `${baseUrl}/contact`,
      "name": "Contact Krew / Mesh Studio",
      "description": "Get in touch with Krew / Mesh to start a branding, UI/UX design, Next.js web build, or AI development project.",
      "mainEntity": {
        "@type": ["Organization", "ProfessionalService"],
        "name": "Krew / Mesh",
        "telephone": "+91-920-983-9142",
        "email": "hello@krewmesh.agency",
        "url": baseUrl,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nagpur",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": `${baseUrl}/contact`
        }
      ]
    }
  ]
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
