import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Downloader } from "./Downloader";
import { Faq } from "./Faq";
import { HowToSteps } from "./HowToSteps";
import { JsonLd } from "./JsonLd";
import { RelatedLinks } from "./RelatedLinks";
import { webAppSchema } from "@/lib/schema";
import type { NavPage } from "@/lib/site";

export function ToolPage({
  page,
  h1,
  intro,
  description,
  placeholder,
  faqs,
  children,
}: {
  page: NavPage;
  h1: string;
  intro: string;
  description: string;
  placeholder: string;
  faqs: { q: string; a: string }[];
  children: ReactNode;
}) {
  return (
    <div className="container">
      <Breadcrumbs trail={[page]} />
      <section className="hero">
        <h1>{h1}</h1>
        <p className="lead">{intro}</p>
        <Downloader placeholder={placeholder} />
      </section>
      <HowToSteps heading={`How to use the ${page.label}`} />
      <section className="section prose">{children}</section>
      <Faq faqs={faqs} />
      <RelatedLinks current={page.path} />
      <JsonLd data={webAppSchema(page.label, description, page.path)} />
    </div>
  );
}
