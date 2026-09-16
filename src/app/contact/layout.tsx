import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krewmesh.agency";

export const metadata: Metadata = {
  title: "Contact Us | KREW / MESH",
  description: "Get in touch with Krew / Mesh. We are a creative technology studio building digital products, brands, and SaaS platforms.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | KREW / MESH",
    description: "Get in touch with Krew / Mesh. We are a creative technology studio building digital products, brands, and SaaS platforms.",
    url: `${baseUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
