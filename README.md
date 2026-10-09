# ClipNest website

Next.js (App Router) site for ClipNest. Every page is prerendered to static HTML, so search engines get the full content without running JavaScript. The only client-side code is the downloader box, which calls the [ClipNest backend](https://github.com/Bugzyy-Products/clipnest_backend).

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home with downloader |
| `/instagram-reels-downloader` | Reels downloader |
| `/instagram-video-downloader` | Instagram post/carousel downloader |
| `/facebook-video-downloader` | Facebook downloader |
| `/how-to-download` | Step-by-step guide |
| `/faq`, `/about`, `/privacy`, `/terms` | Info pages |

To add a page, add it to `PAGES` in `lib/site.ts` (that feeds the sitemap and footer), then create `app/<path>/page.tsx` using `pageMetadata()` so it gets its own title, description and canonical URL.

## SEO built in

- `robots.txt` (`app/robots.ts`) allows Googlebot, OAI-SearchBot and everyone else, and points to the sitemap.
- `sitemap.xml` (`app/sitemap.ts`) is generated from `PAGES`.
- Unique title, meta description and canonical URL per page (`lib/seo.ts`).
- Organization, WebSite, WebApplication, BreadcrumbList, FAQPage and HowTo schema (`lib/schema.ts`).
- Visible breadcrumbs on every page except home.
- Internal links between all pages (header, footer and a "More from ClipNest" block).
- System fonts and no hero images, so nothing shifts the layout and the largest element is text.

## Environment variables

Copy `.env.example` to `.env.local` for local development. Set the same variables in Vercel.

| Name | Example | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://clipnest.app` | Your final domain, no trailing slash. Used for canonicals, sitemap and schema. **Must match the domain you submit to Search Console.** |
| `NEXT_PUBLIC_API_BASE_URL` | `https://clipnest-backend-l7lq.onrender.com` | Backend URL, no trailing slash. Defaults to the Render service above if unset |
| `NEXT_PUBLIC_API_KEY` | | Same as the backend `API_KEY`, if you set one |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | | Optional. Token from Search Console's HTML-tag verification |

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploy on Vercel

1. Import the GitHub repo in Vercel. Framework preset: Next.js.
2. Add the environment variables above, then deploy.
3. On the backend, set `CORS_ORIGINS` to the website URL.

### Avoid redirect chains

In Vercel > Project > Settings > Domains, make one domain the primary (for example `clipnest.app`) and set the other (`www.clipnest.app`) to redirect straight to it with a 308. Vercel already sends `http` straight to `https`. Make sure `NEXT_PUBLIC_SITE_URL` uses the primary domain, so canonicals never point at a URL that redirects.

### Google Search Console

1. Add a property for your domain (Domain property via DNS, or URL-prefix property via the `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` tag).
2. Go to Sitemaps and submit `sitemap.xml`.
3. Use URL Inspection on the home page and click Request indexing.
