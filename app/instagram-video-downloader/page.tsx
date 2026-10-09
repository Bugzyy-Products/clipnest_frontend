import Link from "next/link";
import { ToolPage } from "@/components/ToolPage";
import { pageMetadata } from "@/lib/seo";
import { PAGES } from "@/lib/site";

const PAGE = PAGES.instagram;
const TITLE = "Instagram Video Downloader for Posts & Carousels";
const DESCRIPTION =
  "Download videos from public Instagram posts and carousels online for free. Paste the post link, pick a resolution and save each video as an MP4.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PAGE.path });

const FAQS = [
  {
    q: "Can I download every video in an Instagram carousel?",
    a: "Yes. When a post has several videos, Reelorca lists each one with its own quality options.",
  },
  {
    q: "Does it download Instagram photos?",
    a: "No. Reelorca is built for videos only. Photo-only posts return a 'no video found' message.",
  },
  {
    q: "Do I need to log in to Instagram?",
    a: "No. You only need the link to a public post.",
  },
];

export default function InstagramPage() {
  return (
    <ToolPage
      page={PAGE}
      h1="Instagram Video Downloader"
      intro="Download videos from any public Instagram post, including carousels with several clips. Paste the post link to begin."
      description={DESCRIPTION}
      placeholder="https://www.instagram.com/p/…"
      faqs={FAQS}
    >
      <h2>Download Instagram videos without an app</h2>
      <p>
        Reelorca runs in your browser, so there is nothing to install. Paste the link of a public Instagram post and you
        get a list of available qualities for every video in it. Choose one and the MP4 downloads straight to your
        device.
      </p>
      <h2>What you can download</h2>
      <ul>
        <li>Video posts from public profiles</li>
        <li>Carousel posts that contain one or more videos</li>
        <li>
          Reels. The dedicated <Link href={PAGES.reels.path}>Instagram Reels downloader</Link> works the same way
        </li>
      </ul>
      <p>
        Saving a clip from Facebook instead? Try the <Link href={PAGES.facebook.path}>Facebook video downloader</Link>.
      </p>
    </ToolPage>
  );
}
