import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { RelatedLinks } from "@/components/RelatedLinks";
import { FAQS } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PAGES } from "@/lib/site";

const PAGE = PAGES.faq;

export const metadata = pageMetadata({
  title: "FAQ: Instagram & Facebook Video Downloads",
  description:
    "Answers to common questions about ClipNest: supported links, video quality, private videos, iPhone downloads, privacy and copyright.",
  path: PAGE.path,
});

export default function FaqPage() {
  return (
    <div className="container">
      <Breadcrumbs trail={[PAGE]} />
      <section className="section prose">
        <h1>Frequently asked questions</h1>
        <p className="lead">
          Quick answers about using ClipNest. For a full walkthrough, read{" "}
          <Link href={PAGES.howTo.path}>how to download videos</Link>.
        </p>
      </section>
      <Faq faqs={FAQS} heading="Questions and answers" />
      <RelatedLinks current={PAGE.path} />
    </div>
  );
}
