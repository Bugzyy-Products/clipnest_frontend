import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { JsonLd } from "@/components/JsonLd";
import { HOW_TO_STEPS } from "@/lib/content";
import { howToSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { PAGES } from "@/lib/site";

const PAGE = PAGES.howTo;

export const metadata = pageMetadata({
  title: "How to Download Instagram & Facebook Videos",
  description:
    "Step-by-step guide to downloading Instagram Reels and Facebook videos on iPhone, Android, Windows and Mac, plus fixes for common errors.",
  path: PAGE.path,
});

export default function HowToPage() {
  return (
    <InfoPage page={PAGE} h1="How to download Instagram and Facebook videos">
      <p className="lead">
        Downloading takes three steps on any device. Below are the steps, then device-specific tips and fixes for common
        errors.
      </p>
      <h2>The three steps</h2>
      <ol>
        {HOW_TO_STEPS.map((s) => (
          <li key={s.name}>
            <strong>{s.name}.</strong> {s.text}
          </li>
        ))}
      </ol>

      <h2>On iPhone and iPad</h2>
      <p>
        Use Safari. After you tap Download, the video is saved to the Files app, in the Downloads folder. To move it to
        Photos, open it in Files, tap Share and choose Save Video.
      </p>
      <h2>On Android</h2>
      <p>
        Use Chrome or any browser. The MP4 goes to your Downloads folder and appears in your gallery app within a few
        seconds.
      </p>
      <h2>On Windows, Mac and Linux</h2>
      <p>Copy the link from the browser address bar, paste it into Reelorca and the file saves to your Downloads folder.</p>

      <h2>If something goes wrong</h2>
      <ul>
        <li>
          <strong>&quot;This video is private or requires login&quot;:</strong> the post isn&apos;t public. Only public
          videos can be downloaded.
        </li>
        <li>
          <strong>&quot;No downloadable video found&quot;:</strong> the link points to a photo, a profile or a deleted
          post. Copy the link of the video itself.
        </li>
        <li>
          <strong>&quot;Rate-limiting&quot; or &quot;too many requests&quot;:</strong> wait a minute and try again.
        </li>
      </ul>

      <p>
        Ready? Start with the <Link href={PAGES.reels.path}>Reels downloader</Link>, the{" "}
        <Link href={PAGES.instagram.path}>Instagram video downloader</Link> or the{" "}
        <Link href={PAGES.facebook.path}>Facebook video downloader</Link>. Still stuck? See the{" "}
        <Link href={PAGES.faq.path}>FAQ</Link>.
      </p>
      <JsonLd data={howToSchema("How to download Instagram and Facebook videos", HOW_TO_STEPS)} />
    </InfoPage>
  );
}
