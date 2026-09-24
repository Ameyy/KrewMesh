import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krewmesh.agency";

export const metadata: Metadata = {
  title: "Careers | Join The Krew | KREW / MESH Studio",
  description:
    "Join an ambitious creative technology studio. Explore open full-time and remote roles in sales, telecalling, UI/UX design, Next.js web engineering, and vibecoding.",
  keywords: [
    "Krew Mesh careers",
    "creative studio jobs",
    "web developer jobs India",
    "UI UX designer hiring",
    "sales executive telecalling jobs",
    "vibecoder jobs",
    "remote tech jobs"
  ],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers | Join The Krew | KREW / MESH Studio",
    description:
      "Join our multidisciplinary team of designers, creative technologists, and full-stack software engineers.",
    url: `${baseUrl}/careers`,
    siteName: "KREW / MESH",
    locale: "en_US",
    type: "website",
  },
};

const careersJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
          "name": "Careers",
          "item": `${baseUrl}/careers`
        }
      ]
    }
  ]
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersJsonLd) }}
      />
      {children}
    </>
  );
}
