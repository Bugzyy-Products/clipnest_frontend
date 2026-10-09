import Link from "next/link";
import { PAGES, SITE_NAME } from "@/lib/site";

const GROUPS = [
  { title: "Downloaders", pages: [PAGES.reels, PAGES.instagram, PAGES.facebook] },
  { title: "Help", pages: [PAGES.howTo, PAGES.faq, PAGES.about] },
  { title: "Legal", pages: [PAGES.privacy, PAGES.terms] },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{SITE_NAME}</p>
          <p className="muted small">
            Free downloader for public Instagram and Facebook videos. Not affiliated with Instagram, Facebook or Meta.
          </p>
        </div>
        {GROUPS.map((g) => (
          <nav key={g.title} aria-label={g.title}>
            <p className="footer-title">{g.title}</p>
            <ul>
              {g.pages.map((p) => (
                <li key={p.path}>
                  <Link href={p.path}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container muted small footer-bottom">
        © {new Date().getFullYear()} {SITE_NAME}. Only download content you own or have permission to use.
      </div>
    </footer>
  );
}
