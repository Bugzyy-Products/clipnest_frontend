import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Named explicitly so they're never caught by a future restrictive rule.
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
