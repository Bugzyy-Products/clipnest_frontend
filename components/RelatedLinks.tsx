import Link from "next/link";
import { PAGES, type NavPage } from "@/lib/site";

const BLURBS: Record<string, string> = {
  [PAGES.reels.path]: "Save Instagram Reels as MP4 in HD.",
  [PAGES.instagram.path]: "Download videos from Instagram posts and carousels.",
  [PAGES.facebook.path]: "Download public Facebook videos, Reels and fb.watch links.",
  [PAGES.howTo.path]: "Step-by-step guide for iPhone, Android and desktop.",
  [PAGES.faq.path]: "Answers about quality, privacy and supported links.",
  [PAGES.about.path]: "Who makes Reelorca and how it works.",
};

/** In-content links to other pages, excluding the current one. */
export function RelatedLinks({ current, title = "More from Reelorca" }: { current: string; title?: string }) {
  const pages: NavPage[] = [PAGES.reels, PAGES.instagram, PAGES.facebook, PAGES.howTo, PAGES.faq, PAGES.about].filter(
    (p) => p.path !== current,
  );
  return (
    <section className="section" aria-labelledby="related-heading">
      <h2 id="related-heading">{title}</h2>
      <ul className="card-grid">
        {pages.map((p) => (
          <li key={p.path}>
            <Link href={p.path} className="card link-card">
              <strong>{p.label}</strong>
              <span className="muted">{BLURBS[p.path]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
