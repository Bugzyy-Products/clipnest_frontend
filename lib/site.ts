export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://clipnest.vercel.app").replace(/\/+$/, "");
export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000").replace(/\/+$/, "");
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";

export const SITE_NAME = "ClipNest";
export const SITE_TAGLINE = "Instagram & Facebook Video Downloader";
export const SITE_DESCRIPTION =
  "Download public Instagram Reels, Instagram videos and Facebook videos in HD for free. Paste a link, pick a quality, save the MP4. No app or sign-up needed.";

export type NavPage = { path: string; label: string };

/** Every indexable page. Drives the header, footer, sitemap and related links. */
export const PAGES = {
  home: { path: "/", label: "Home" },
  reels: { path: "/instagram-reels-downloader", label: "Instagram Reels Downloader" },
  instagram: { path: "/instagram-video-downloader", label: "Instagram Video Downloader" },
  facebook: { path: "/facebook-video-downloader", label: "Facebook Video Downloader" },
  howTo: { path: "/how-to-download", label: "How to Download" },
  faq: { path: "/faq", label: "FAQ" },
  about: { path: "/about", label: "About" },
  privacy: { path: "/privacy", label: "Privacy Policy" },
  terms: { path: "/terms", label: "Terms of Use" },
} satisfies Record<string, NavPage>;

export const TOOL_PAGES = [PAGES.reels, PAGES.instagram, PAGES.facebook];

export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL + "/" : SITE_URL + path;
}
