import Link from "next/link";
import { Logo } from "./Logo";
import { PAGES, SITE_NAME } from "@/lib/site";

const NAV = [PAGES.reels, PAGES.instagram, PAGES.facebook, PAGES.howTo, PAGES.faq];
const SHORT: Record<string, string> = {
  [PAGES.reels.path]: "Reels",
  [PAGES.instagram.path]: "Instagram",
  [PAGES.facebook.path]: "Facebook",
  [PAGES.howTo.path]: "How to",
  [PAGES.faq.path]: "FAQ",
};

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${SITE_NAME} home`}>
          <Logo size={30} />
          <span>{SITE_NAME}</span>
        </Link>
        <nav aria-label="Main">
          <ul className="nav-list">
            {NAV.map((p) => (
              <li key={p.path}>
                <Link href={p.path} title={p.label}>
                  {SHORT[p.path]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
