import Link from "next/link";
import { ToolPage } from "@/components/ToolPage";
import { pageMetadata } from "@/lib/seo";
import { PAGES } from "@/lib/site";

const PAGE = PAGES.facebook;
const TITLE = "Facebook Video Downloader: Save FB Videos in HD";
const DESCRIPTION =
  "Download public Facebook videos, Facebook Reels and fb.watch links in HD or SD for free. Paste the link, choose a quality and save the MP4. No login needed.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PAGE.path });

const FAQS = [
  {
    q: "Which Facebook links work?",
    a: "Links to public videos on facebook.com, Facebook Reels, fb.watch short links and videos shared from public Pages.",
  },
  {
    q: "Can I download videos from private Facebook groups?",
    a: "No. Videos in private groups or from private profiles need a login, so they can't be downloaded.",
  },
  {
    q: "What's the difference between HD and SD?",
    a: "HD is the higher-resolution version, usually 720p or 1080p. SD is smaller and loads faster on slow connections.",
  },
];

export default function FacebookPage() {
  return (
    <ToolPage
      page={PAGE}
      h1="Facebook Video Downloader"
      intro="Save public Facebook videos and Reels as MP4 files in HD or SD. Paste a facebook.com or fb.watch link below."
      description={DESCRIPTION}
      placeholder="https://www.facebook.com/… or https://fb.watch/…"
      faqs={FAQS}
    >
      <h2>Download Facebook videos in HD</h2>
      <p>
        Facebook usually offers each video in an HD and an SD version, and sometimes in more resolutions. ClipNest shows
        all of them with their file size, so you can choose before downloading.
      </p>
      <h2>How to find a Facebook video link</h2>
      <p>
        In the Facebook app, tap Share under the video and choose Copy link. On a computer, click the video&apos;s
        timestamp to open it on its own page, then copy the address from the browser bar.
      </p>
      <p>
        Downloading from Instagram too? Use the <Link href={PAGES.reels.path}>Instagram Reels downloader</Link>.
      </p>
    </ToolPage>
  );
}
