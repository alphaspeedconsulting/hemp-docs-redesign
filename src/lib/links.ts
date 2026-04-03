/**
 * WP_BASE — staging link helper.
 *
 * All internal links (nav, CTAs, categories, blog) are WooCommerce / WordPress
 * root-relative paths (e.g. "/shop/", "/blog/what-is-thca/"). On the production
 * docs-hemp.com domain these resolve correctly as-is.
 *
 * On the GitHub Pages staging preview (alphaspeedconsulting.github.io/hemp-docs-redesign)
 * root-relative links 404 because they resolve against the GH Pages origin.
 * Prepending WP_BASE sends the visitor to the live WP site instead.
 *
 * Usage:  <a href={WP_BASE + "/shop/"}>Shop</a>
 */
export const WP_BASE =
  typeof window !== "undefined" &&
  window.location.hostname === "alphaspeedconsulting.github.io"
    ? "https://docs-hemp.com"
    : "";
