import Link from "next/link";
import { Downloader } from "@/components/Downloader";
import { Faq } from "@/components/Faq";
import { HowToSteps } from "@/components/HowToSteps";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { FAQS } from "@/lib/content";
import { webAppSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { PAGES, SITE_NAME } from "@/lib/site";

const TITLE = "Reelorca: Free Instagram & Facebook Video Downloader (HD)";
const DESCRIPTION =
  "Download Instagram Reels, Instagram videos and Facebook videos in HD for free. Paste the link, choose 1080p, 720p or lower, and save the MP4. No app or sign-up.";

export const metadata = { ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" }), title: { absolute: TITLE } };

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Instagram &amp; Facebook Video Downloader</h1>
        <p className="lead">
          Paste a link to a public Instagram Reel, Instagram video or Facebook video, pick a quality and save it as an
          MP4. Free, fast and no sign-up.
        </p>
        <Downloader placeholder="Paste an Instagram or Facebook video link" />
      </section>

      <HowToSteps heading={`How to download videos with ${SITE_NAME}`} />

      <section className="section prose">
        <h2>Why use {SITE_NAME}?</h2>
        <ul>
          <li>
            <strong>Choose your quality.</strong> See every resolution the platform offers, up to 1080p, before you
            download.
          </li>
          <li>
            <strong>Works everywhere.</strong> iPhone, Android, Windows, Mac and Linux, in any modern browser.
          </li>
          <li>
            <strong>Carousels included.</strong> Instagram posts with several videos list each one separately.
          </li>
          <li>
            <strong>Private by design.</strong> No account, and we don&apos;t keep copies of what you download.
          </li>
        </ul>
        <p>
          Looking for something specific? Use the <Link href={PAGES.reels.path}>Instagram Reels downloader</Link>, the{" "}
          <Link href={PAGES.instagram.path}>Instagram video downloader</Link> or the{" "}
          <Link href={PAGES.facebook.path}>Facebook video downloader</Link>. New here? Read the{" "}
          <Link href={PAGES.howTo.path}>step-by-step guide</Link>.
        </p>
      </section>

      <Faq faqs={FAQS} />
      <RelatedLinks current="/" title="Explore Reelorca" />
      <JsonLd data={webAppSchema(SITE_NAME, DESCRIPTION, "/")} />
    </div>
  );
}
