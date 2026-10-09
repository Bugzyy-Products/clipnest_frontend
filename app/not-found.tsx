import Link from "next/link";
import type { Metadata } from "next";
import { PAGES, TOOL_PAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container section prose">
      <h1>Page not found</h1>
      <p className="lead">That page doesn&apos;t exist. Try one of these instead:</p>
      <ul>
        <li>
          <Link href={PAGES.home.path}>Reelorca home</Link>
        </li>
        {TOOL_PAGES.map((p) => (
          <li key={p.path}>
            <Link href={p.path}>{p.label}</Link>
          </li>
        ))}
        <li>
          <Link href={PAGES.faq.path}>FAQ</Link>
        </li>
      </ul>
    </div>
  );
}
