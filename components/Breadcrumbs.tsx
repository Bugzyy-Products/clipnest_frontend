import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { PAGES, type NavPage } from "@/lib/site";

/** Visible breadcrumb trail plus matching BreadcrumbList schema. Home is prepended. */
export function Breadcrumbs({ trail }: { trail: NavPage[] }) {
  const full = [PAGES.home, ...trail];
  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>
          {full.map((p, i) =>
            i === full.length - 1 ? (
              <li key={p.path} aria-current="page">
                {p.label}
              </li>
            ) : (
              <li key={p.path}>
                <Link href={p.path}>{p.label}</Link>
              </li>
            ),
          )}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(full)} />
    </>
  );
}
