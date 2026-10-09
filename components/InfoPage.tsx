import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { RelatedLinks } from "./RelatedLinks";
import type { NavPage } from "@/lib/site";

export function InfoPage({ page, h1, children }: { page: NavPage; h1: string; children: ReactNode }) {
  return (
    <div className="container">
      <Breadcrumbs trail={[page]} />
      <article className="section prose">
        <h1>{h1}</h1>
        {children}
      </article>
      <RelatedLinks current={page.path} />
    </div>
  );
}
