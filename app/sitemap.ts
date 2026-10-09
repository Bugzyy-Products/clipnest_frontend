import type { MetadataRoute } from "next";
import { PAGES, absoluteUrl } from "@/lib/site";

const PRIORITY: Record<string, number> = {
  [PAGES.home.path]: 1,
  [PAGES.reels.path]: 0.9,
  [PAGES.instagram.path]: 0.9,
  [PAGES.facebook.path]: 0.9,
  [PAGES.howTo.path]: 0.7,
  [PAGES.faq.path]: 0.6,
  [PAGES.about.path]: 0.4,
  [PAGES.privacy.path]: 0.2,
  [PAGES.terms.path]: 0.2,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-09");
  return Object.values(PAGES).map((p) => ({
    url: absoluteUrl(p.path),
    lastModified,
    changeFrequency: "monthly",
    priority: PRIORITY[p.path] ?? 0.5,
  }));
}
