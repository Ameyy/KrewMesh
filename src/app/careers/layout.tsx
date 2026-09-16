import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krewmesh.agency";

export const metadata: Metadata = {
  title: "Careers | KREW / MESH",
  description: "Join our team of creative technologists. View open positions in design, development, and digital marketing at Krew / Mesh.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers | KREW / MESH",
    description: "Join our team of creative technologists. View open positions in design, development, and digital marketing at Krew / Mesh.",
    url: `${baseUrl}/careers`,
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
