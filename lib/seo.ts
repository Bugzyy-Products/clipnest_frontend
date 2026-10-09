import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl } from "./site";

/** Per-page metadata: unique title, description, canonical and social tags. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE_NAME, type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}
