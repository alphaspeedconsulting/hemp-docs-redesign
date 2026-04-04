import { renderHook, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { usePageMeta } from "@/lib/usePageMeta";

/**
 * usePageMeta tests — verifies:
 * 1. Meta tags are set on mount
 * 2. All meta tags are RESTORED on unmount (back-nav bug regression guard)
 * 3. Multiple sequential pages don't bleed state
 */

function getTitle() {
  return document.title;
}

function getMeta(selector: string) {
  return document.querySelector(selector)?.getAttribute("content") ?? "";
}

function seedMeta(title: string, description: string) {
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", "https://docs-hemp.com/");
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
}

function ensureMetaTags() {
  const tags = [
    { tag: "meta", attrs: { name: "description", content: "" } },
    { tag: "meta", attrs: { property: "og:title", content: "" } },
    { tag: "meta", attrs: { property: "og:description", content: "" } },
    { tag: "meta", attrs: { property: "og:url", content: "" } },
    { tag: "meta", attrs: { name: "twitter:title", content: "" } },
    { tag: "meta", attrs: { name: "twitter:description", content: "" } },
  ];
  tags.forEach(({ attrs }) => {
    const selector = Object.entries(attrs)
      .filter(([k]) => k !== "content")
      .map(([k, v]) => `meta[${k}="${v}"]`)
      .join("");
    if (!document.querySelector(selector)) {
      const el = document.createElement("meta");
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v as string));
      document.head.appendChild(el);
    }
  });
}

beforeEach(() => {
  ensureMetaTags();
  seedMeta(
    "Buy THCA Online — Vapes, Gummies & Concentrates | Doc's Hemp",
    "Shop premium indoor-grown THCA concentrates, live rosin, and vapes. Ships to 41 states."
  );
});

describe("usePageMeta", () => {
  it("sets document.title on mount", () => {
    renderHook(() =>
      usePageMeta({ title: "Shop Page", description: "Shop description" })
    );
    expect(getTitle()).toBe("Shop Page");
    cleanup();
  });

  it("sets meta description on mount", () => {
    renderHook(() =>
      usePageMeta({ title: "Shop Page", description: "Shop desc" })
    );
    expect(getMeta('meta[name="description"]')).toBe("Shop desc");
    cleanup();
  });

  it("sets OG title and description on mount", () => {
    renderHook(() =>
      usePageMeta({
        title: "Shop Page",
        description: "Shop desc",
        ogTitle: "Custom OG Title",
        ogDescription: "Custom OG desc",
      })
    );
    expect(getMeta('meta[property="og:title"]')).toBe("Custom OG Title");
    expect(getMeta('meta[property="og:description"]')).toBe("Custom OG desc");
    cleanup();
  });

  it("falls back to title/description for OG when not provided", () => {
    renderHook(() =>
      usePageMeta({ title: "Shop Page", description: "Shop desc" })
    );
    expect(getMeta('meta[property="og:title"]')).toBe("Shop Page");
    expect(getMeta('meta[property="og:description"]')).toBe("Shop desc");
    cleanup();
  });

  it("restores prior title on unmount — back-nav regression guard", () => {
    const originalTitle = document.title;
    const { unmount } = renderHook(() =>
      usePageMeta({ title: "Shop THCA Products | Doc's Hemp", description: "Shop desc" })
    );
    expect(getTitle()).toBe("Shop THCA Products | Doc's Hemp");
    unmount();
    expect(getTitle()).toBe(originalTitle);
  });

  it("restores prior meta description on unmount", () => {
    const originalDesc = getMeta('meta[name="description"]');
    const { unmount } = renderHook(() =>
      usePageMeta({ title: "Shop Page", description: "Shop desc" })
    );
    expect(getMeta('meta[name="description"]')).toBe("Shop desc");
    unmount();
    expect(getMeta('meta[name="description"]')).toBe(originalDesc);
  });

  it("restores prior OG tags on unmount", () => {
    const originalOgTitle = getMeta('meta[property="og:title"]');
    const originalOgDesc = getMeta('meta[property="og:description"]');
    const { unmount } = renderHook(() =>
      usePageMeta({ title: "Blog Page", description: "Blog desc" })
    );
    unmount();
    expect(getMeta('meta[property="og:title"]')).toBe(originalOgTitle);
    expect(getMeta('meta[property="og:description"]')).toBe(originalOgDesc);
  });

  it("sets ogUrl when provided", () => {
    renderHook(() =>
      usePageMeta({
        title: "Shop",
        description: "desc",
        ogUrl: "https://docs-hemp.com/shop/",
      })
    );
    expect(getMeta('meta[property="og:url"]')).toBe("https://docs-hemp.com/shop/");
    cleanup();
  });

  it("sequential page mounts don't bleed state across pages", () => {
    const homeTitle = document.title;

    const { unmount: unmountShop } = renderHook(() =>
      usePageMeta({ title: "Shop Page", description: "Shop desc" })
    );
    expect(getTitle()).toBe("Shop Page");

    unmountShop();
    expect(getTitle()).toBe(homeTitle);

    const { unmount: unmountBlog } = renderHook(() =>
      usePageMeta({ title: "Blog Page", description: "Blog desc" })
    );
    expect(getTitle()).toBe("Blog Page");

    unmountBlog();
    expect(getTitle()).toBe(homeTitle);
  });
});
