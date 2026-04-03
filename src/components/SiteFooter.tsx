import { Link } from "react-router-dom";
import { WP_BASE, WP_TARGET } from "@/lib/links";

/** All hrefs point to real WordPress/WooCommerce pages on docs-hemp.com */
const supportLinks = [
  { label: "FAQ", href: "/faq/" },
  { label: "Shipping Policy", href: "/shipping-policy/" },
  { label: "Refund Policy", href: "/refund-policy/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "hello@docs-hemp.com", href: "mailto:hello@docs-hemp.com" },
];

const SiteFooter = () => (
  <footer className="py-16 px-8 border-t border-brand-accent/20 bg-brand-base">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
      {/* Brand */}
      <div>
        <Link to="/" className="text-xl tracking-[0.3em] uppercase font-light mb-4 font-display text-brand-text hover:text-brand-accent transition-colors block">
          Doc's <span className="text-brand-accent">Hemp</span>
        </Link>
        <p className="text-sm text-brand-text/50 leading-relaxed">
          Premium indoor-grown THCa. Farm Bill compliant. Ships to 41 states.
        </p>
      </div>

      {/* Shop */}
      <div>
        <p className="text-sm tracking-[0.2em] uppercase mb-4 text-brand-accent">Shop</p>
        <ul className="space-y-2">
          <li><Link to="/shop" className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">All Products</Link></li>
          <li><Link to="/shop" className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">THCa Vapes</Link></li>
          <li><Link to="/shop" className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">Concentrates</Link></li>
          <li><Link to="/shop" className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">Live Rosin</Link></li>
          <li><Link to="/shop" className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">Pre-Rolls</Link></li>
          <li><Link to="/shop" className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">THCa Flower</Link></li>
        </ul>
      </div>

      {/* Learn */}
      <div>
        <p className="text-sm tracking-[0.2em] uppercase mb-4 text-brand-accent">Learn</p>
        <ul className="space-y-2">
          <li>
            <a href={WP_BASE + "/blog/what-is-thca/"} target={WP_TARGET} rel="noopener noreferrer"
               className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">
              What Is THCA?
            </a>
          </li>
          <li>
            <a href={WP_BASE + "/blog/thca-vs-thc/"} target={WP_TARGET} rel="noopener noreferrer"
               className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">
              THCA vs THC
            </a>
          </li>
          <li>
            <a href={WP_BASE + "/blog/is-thca-legal/"} target={WP_TARGET} rel="noopener noreferrer"
               className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">
              Is THCA Legal?
            </a>
          </li>
          <li>
            <a href={WP_BASE + "/blog/texas-thca-laws-2026/"} target={WP_TARGET} rel="noopener noreferrer"
               className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">
              Texas THCA Laws 2026
            </a>
          </li>
          <li>
            <Link to="/blog" className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">
              All Articles
            </Link>
          </li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <p className="text-sm tracking-[0.2em] uppercase mb-4 text-brand-accent">Support</p>
        <ul className="space-y-2">
          <li><Link to="/lab-results" className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">Lab Results</Link></li>
          <li><Link to="/contact" className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">Contact</Link></li>
          {supportLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href.startsWith("mailto:") ? href : WP_BASE + href}
                target={href.startsWith("mailto:") ? undefined : WP_TARGET}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="text-center pt-8 border-t border-brand-accent/10">
      <p className="text-xs text-brand-text/30">
        © Doc's Hemp 2026. All products are hemp-derived and comply with the
        2018 Farm Bill. Δ9 THC &lt; 0.3% by dry weight. Must be 21+ to purchase.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
