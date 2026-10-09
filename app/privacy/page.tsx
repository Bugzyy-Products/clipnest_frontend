import { InfoPage } from "@/components/InfoPage";
import { pageMetadata } from "@/lib/seo";
import { PAGES } from "@/lib/site";

const PAGE = PAGES.privacy;

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How ClipNest handles your data: no accounts, no stored videos, and only the minimal technical data needed to run and protect the service.",
  path: PAGE.path,
});

export default function PrivacyPage() {
  return (
    <InfoPage page={PAGE} h1="Privacy policy">
      <p className="muted small">Last updated: 9 October 2026</p>
      <h2>What we collect</h2>
      <p>
        ClipNest has no accounts. When you use the downloader, our server receives the link you paste and your IP
        address. The IP address is kept in memory for about a minute to enforce a per-visitor rate limit. We don&apos;t
        save it to a database.
      </p>
      <h2>Videos</h2>
      <p>
        Video details are cached for up to ten minutes so repeat requests are fast. Videos are streamed to you and not
        kept. When a video needs merging, the temporary file is deleted right after it is sent, and any leftovers are
        removed within 30 minutes.
      </p>
      <h2>Hosting</h2>
      <p>
        The website is hosted on Vercel and the download service on a third-party cloud host. These providers may keep
        standard server logs under their own privacy policies.
      </p>
      <h2>Cookies</h2>
      <p>ClipNest does not set tracking or advertising cookies.</p>
    </InfoPage>
  );
}
