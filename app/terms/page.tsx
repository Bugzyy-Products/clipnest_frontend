import { InfoPage } from "@/components/InfoPage";
import { pageMetadata } from "@/lib/seo";
import { PAGES } from "@/lib/site";

const PAGE = PAGES.terms;

export const metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "The rules for using ClipNest: download only content you own or have permission to use, respect copyright and use the service fairly.",
  path: PAGE.path,
});

export default function TermsPage() {
  return (
    <InfoPage page={PAGE} h1="Terms of use">
      <p className="muted small">Last updated: 9 October 2026</p>
      <h2>Your responsibility</h2>
      <p>
        You may only download videos that you own or have the rights holder&apos;s permission to save. You are
        responsible for how you use anything you download, including respecting copyright and the terms of Instagram and
        Facebook.
      </p>
      <h2>Fair use of the service</h2>
      <p>
        Don&apos;t use automated scripts against the service or try to get around its rate limits. We may block access
        that harms the service for other people.
      </p>
      <h2>No warranty</h2>
      <p>
        ClipNest is provided as is and free of charge. Platforms change often, so some videos may not be available at
        all times.
      </p>
      <h2>Not affiliated</h2>
      <p>ClipNest is not affiliated with, endorsed by or sponsored by Instagram, Facebook or Meta Platforms.</p>
    </InfoPage>
  );
}
