import { useEffect } from "react";

/**
 * usePageMeta — centralized SPA meta management.
 *
 * Sets document.title and all relevant <meta> tags when the page mounts.
 * Restores prior values on unmount — this is what fixes the back-nav bug:
 * navigating Home → Shop → (logo click) → Home correctly resets to homepage
 * values rather than leaving the Shop title in place.
 *
 * OG / Twitter tags are static in index.html for social crawlers (which don't
 * execute JS). This hook updates them for JS-executing tools (Facebook Sharing
 * Debugger, browser inspector, SEO audit tools) and for the production WP
 * install where Yoast handles real OG tags at the server level.
 */
export interface PageMetaOptions {
  title: string;
  description: string;
  /** Defaults to title if omitted */
  ogTitle?: string;
  /** Defaults to description if omitted */
  ogDescription?: string;
  /** Canonical URL for this page on the production domain */
  ogUrl?: string;
}

function getMeta(selector: string): string {
  return document.querySelector(selector)?.getAttribute("content") ?? "";
}

function setMeta(selector: string, value: string): void {
  document.querySelector(selector)?.setAttribute("content", value);
}

export function usePageMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogUrl,
}: PageMetaOptions): void {
  useEffect(() => {
    // Capture current values before mutating — used in cleanup
    const prev = {
      title: document.title,
      description: getMeta('meta[name="description"]'),
      ogTitle: getMeta('meta[property="og:title"]'),
      ogDescription: getMeta('meta[property="og:description"]'),
      ogUrl: getMeta('meta[property="og:url"]'),
      twitterTitle: getMeta('meta[name="twitter:title"]'),
      twitterDescription: getMeta('meta[name="twitter:description"]'),
    };

    const resolvedOgTitle = ogTitle ?? title;
    const resolvedOgDescription = ogDescription ?? description;

    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', resolvedOgTitle);
    setMeta('meta[property="og:description"]', resolvedOgDescription);
    if (ogUrl) setMeta('meta[property="og:url"]', ogUrl);
    setMeta('meta[name="twitter:title"]', resolvedOgTitle);
    setMeta('meta[name="twitter:description"]', resolvedOgDescription);

    return () => {
      document.title = prev.title;
      setMeta('meta[name="description"]', prev.description);
      setMeta('meta[property="og:title"]', prev.ogTitle);
      setMeta('meta[property="og:description"]', prev.ogDescription);
      if (ogUrl) setMeta('meta[property="og:url"]', prev.ogUrl);
      setMeta('meta[name="twitter:title"]', prev.twitterTitle);
      setMeta('meta[name="twitter:description"]', prev.twitterDescription);
    };
  // Stringify to avoid referential inequality on repeated renders with same values
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, ogTitle, ogDescription, ogUrl]);
}
