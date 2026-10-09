import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { pageMetadata } from "@/lib/seo";
import { PAGES } from "@/lib/site";

const PAGE = PAGES.about;

export const metadata = pageMetadata({
  title: "About",
  description:
    "ClipNest is a free browser tool for saving public Instagram and Facebook videos in the quality you choose. Learn how it works and how we handle your data.",
  path: PAGE.path,
});

export default function AboutPage() {
  return (
    <InfoPage page={PAGE} h1="About ClipNest">
      <p className="lead">
        ClipNest is a free tool for saving public Instagram and Facebook videos in the quality you choose, from any
        browser.
      </p>
      <h2>How it works</h2>
      <p>
        When you paste a link, our server looks up the public video and lists every resolution the platform offers. When
        you pick one, the video is streamed straight to your device. If a quality comes as separate video and audio
        tracks, the server merges them into one MP4 and deletes the temporary file right after sending it.
      </p>
      <h2>What we don&apos;t do</h2>
      <ul>
        <li>We don&apos;t ask for your Instagram or Facebook login.</li>
        <li>We don&apos;t store the videos you download.</li>
        <li>We don&apos;t work with private accounts or private groups.</li>
      </ul>
      <h2>Use it responsibly</h2>
      <p>
        Only download videos you created or have permission to use. See our <Link href={PAGES.terms.path}>terms of use</Link>{" "}
        and <Link href={PAGES.privacy.path}>privacy policy</Link>. ClipNest is independent and is not affiliated with
        Instagram, Facebook or Meta.
      </p>
    </InfoPage>
  );
}
