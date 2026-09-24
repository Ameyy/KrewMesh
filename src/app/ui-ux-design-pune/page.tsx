import { Metadata } from "next";
import { notFound } from "next/navigation";
import { localSeoPagesData } from "@/data/local-seo";
import { LocalSeoPageComponent, generateLocalPageMetadata } from "@/components/LocalSeoPageTemplate";

const PAGE_SLUG = "ui-ux-design-pune";

export async function generateMetadata(): Promise<Metadata> {
  const page = localSeoPagesData[PAGE_SLUG];
  if (!page) return { title: "Page Not Found | Krew / Mesh" };
  return generateLocalPageMetadata(page);
}

export default function UiUxDesignPunePage() {
  const page = localSeoPagesData[PAGE_SLUG];
  if (!page) notFound();
  return <LocalSeoPageComponent page={page} />;
}
