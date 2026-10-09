import Link from "next/link";
import { ToolPage } from "@/components/ToolPage";
import { pageMetadata } from "@/lib/seo";
import { PAGES } from "@/lib/site";

const PAGE = PAGES.reels;
const TITLE = "Instagram Reels Downloader: Save Reels as MP4 in HD";
const DESCRIPTION =
  "Download Instagram Reels in HD for free. Paste the Reel link, choose 1080p or 720p and save the MP4 to your phone or computer. Works on iPhone and Android.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PAGE.path });

const FAQS = [
  {
    q: "How do I copy an Instagram Reel link?",
    a: "Open the Reel, tap the paper-plane Share icon and choose Copy link. On desktop, copy the address from your browser bar.",
  },
  {
    q: "Are Reels downloaded with sound?",
    a: "Yes. Every quality includes audio. If Instagram serves the video and audio separately, Reelorca merges them for you.",
  },
  {
    q: "Can I download Reels from private accounts?",
    a: "No. Only Reels from public accounts can be downloaded.",
  },
];

export default function ReelsPage() {
  return (
    <ToolPage
      page={PAGE}
      h1="Instagram Reels Downloader"
      intro="Save any public Instagram Reel as an MP4 in the quality you choose. Paste the Reel link below to start."
      description={DESCRIPTION}
      placeholder="https://www.instagram.com/reel/…"
      faqs={FAQS}
    >
      <h2>Download Instagram Reels in full HD</h2>
      <p>
        Instagram compresses Reels into several resolutions. Reelorca lists all of them, usually up to 1080p, so you can
        choose between the best quality and a smaller file. The download is a standard MP4 that plays on any phone,
        computer or video editor.
      </p>
      <h2>Saving Reels on iPhone</h2>
      <p>
        In Safari, tap Download and the Reel goes to the Files app, in the Downloads folder. Open it there and tap Share,
        then Save Video, to add it to Photos. The <Link href={PAGES.howTo.path}>how-to guide</Link> has
        step-by-step instructions for every device.
      </p>
      <p>
        Want regular Instagram post videos instead? Use the{" "}
        <Link href={PAGES.instagram.path}>Instagram video downloader</Link>.
      </p>
    </ToolPage>
  );
}
