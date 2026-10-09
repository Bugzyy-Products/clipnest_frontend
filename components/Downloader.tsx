"use client";

import { useState, type FormEvent } from "react";
import { API_BASE_URL, API_KEY } from "@/lib/site";

type Format = {
  format_id: string;
  label: string;
  height: number | null;
  ext: string;
  needs_merge: boolean;
  filesize: number | null;
};
type Item = {
  id: string | null;
  title: string;
  thumbnail: string | null;
  duration: number | null;
  uploader: string | null;
  formats: Format[];
};
type ExtractResult = { source_url: string; platform: string | null; items: Item[] };

const ALLOWED = /(^|\.)(instagram\.com|facebook\.com|fb\.watch|fb\.com)$/i;

function apiUrl(path: string, params: Record<string, string | number>) {
  const q = new URLSearchParams(Object.entries(params).map(([k, v]) => [k, String(v)]));
  if (API_KEY) q.set("key", API_KEY);
  return `${API_BASE_URL}${path}?${q}`;
}

function formatSize(bytes: number | null) {
  if (!bytes) return null;
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
}

function formatDuration(s: number | null) {
  if (!s) return null;
  const m = Math.floor(s / 60);
  const sec = Math.round(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
}

export function Downloader({ placeholder }: { placeholder: string }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ExtractResult | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const value = url.trim();
    setError(null);
    setResult(null);
    let host = "";
    try {
      host = new URL(value).hostname;
    } catch {
      setError("That doesn't look like a link. Copy the full URL from Instagram or Facebook.");
      return;
    }
    if (!ALLOWED.test(host)) {
      setError("Only Instagram and Facebook links are supported.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/extract`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(API_KEY ? { "X-API-Key": API_KEY } : {}) },
        body: JSON.stringify({ url: value }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.detail || `Something went wrong (${res.status}). Try again.`);
      setResult(data as ExtractResult);
    } catch (err) {
      setError(err instanceof TypeError ? "Couldn't reach the server. Check your connection and try again." : (err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="downloader card">
      <form onSubmit={onSubmit} className="dl-form">
        <label htmlFor="video-url" className="sr-only">
          Video link
        </label>
        <input
          id="video-url"
          type="url"
          inputMode="url"
          autoComplete="off"
          required
          placeholder={placeholder}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Fetching…" : "Get video"}
        </button>
      </form>

      <div className="dl-status" aria-live="polite">
        {error && <p className="error">{error}</p>}
        {loading && <p className="muted">Looking up the video. This can take a few seconds.</p>}
      </div>

      {result && (
        <ul className="dl-results">
          {result.items.map((item, idx) => (
            <li key={item.id ?? idx} className="dl-item">
              <div className="thumb">
                {item.thumbnail ? (
                  // Thumbnails come from the API proxy at unknown sizes; a fixed box prevents layout shift.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={apiUrl("/api/thumbnail", { url: item.thumbnail })}
                    alt={`Thumbnail of the video "${item.title}"${item.uploader ? ` by ${item.uploader}` : ""}`}
                    width={160}
                    height={200}
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
              </div>
              <div className="dl-meta">
                <p className="dl-title">{item.title}</p>
                <p className="muted small">
                  {[item.uploader, formatDuration(item.duration)].filter(Boolean).join(" · ")}
                </p>
                <ul className="formats">
                  {item.formats.map((f) => (
                    <li key={f.format_id}>
                      <a
                        className="btn btn-small"
                        href={apiUrl("/api/download", { url: result.source_url, format_id: f.format_id, item: idx })}
                        rel="nofollow"
                      >
                        Download {f.label}
                        {formatSize(f.filesize) ? <span className="size"> · {formatSize(f.filesize)}</span> : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
