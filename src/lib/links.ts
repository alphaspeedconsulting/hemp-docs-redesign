/**
 * WP_BASE / WP_TARGET — staging link helpers.
 *
 * Navigation (Shop, Blog, Lab Results, Contact) is handled by React Router — no
 * WP_BASE needed for those.
 *
 * WP_BASE is used only for transactional WP-only pages: individual product
 * pages, cart, checkout, individual blog posts, and policy pages.
 *
 * On staging (GitHub Pages) those links open in a new tab (WP_TARGET = "_blank")
 * so the visitor stays on the preview while still being able to inspect the live
 * WP pages. On production docs-hemp.com they resolve in the same tab.
 */
export const IS_STAGING =
  typeof window !== "undefined" &&
  window.location.hostname === "alphaspeedconsulting.github.io";

export const WP_BASE = IS_STAGING ? "https://docs-hemp.com" : "";

export const WP_TARGET = IS_STAGING ? "_blank" : "_self";
