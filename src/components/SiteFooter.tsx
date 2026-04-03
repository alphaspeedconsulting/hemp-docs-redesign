/** All hrefs point to real WordPress/WooCommerce pages on docs-hemp.com */
const shopLinks = [
  { label: "THCa Vapes", href: "/product-category/vapes/" },
  { label: "Concentrates", href: "/product-category/concentrates/" },
  { label: "Live Rosin", href: "/product-category/fresh-frozen-rosin/" },
  { label: "Pre-Rolls", href: "/product-category/prerolls/" },
  { label: "THCa Flower", href: "/product-category/flower/" },
];
const learnLinks = [
  { label: "What Is THCA?", href: "/blog/what-is-thca/" },
  { label: "THCA vs THC", href: "/blog/thca-vs-thc/" },
  { label: "Is THCA Legal?", href: "/blog/is-thca-legal/" },
  { label: "Texas THCA Laws 2026", href: "/blog/texas-thca-laws-2026/" },
  { label: "All Articles", href: "/blog/" },
];
const companyLinks = [
  { label: "About Us", href: "/about/" },
  { label: "Lab Results", href: "/lab-results/" },
  { label: "Contact", href: "/contact/" },
];
const supportLinks = [
  { label: "FAQ", href: "/faq/" },
  { label: "Shipping & Returns", href: "/shipping-returns/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "hello@docshemprx.com", href: "mailto:hello@docshemprx.com" },
];

const SiteFooter = () => (
  <footer className="py-16 px-8 border-t border-brand-accent/20 bg-brand-base">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
      {/* Brand */}
      <div>
        <a href="/" className="text-xl tracking-[0.3em] uppercase font-light mb-4 font-display text-brand-text hover:text-brand-accent transition-colors block">
          Doc's <span className="text-brand-accent">Hemp RX</span>
        </a>
        <p className="text-sm text-brand-text/50 leading-relaxed">
          Premium indoor-grown THCa. Texas-compliant. Manufacturer direct from
          the DFW area.
        </p>
      </div>

      {/* Shop */}
      <div>
        <p className="text-sm tracking-[0.2em] uppercase mb-4 text-brand-accent">Shop</p>
        <ul className="space-y-2">
          {shopLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Learn */}
      <div>
        <p className="text-sm tracking-[0.2em] uppercase mb-4 text-brand-accent">Learn</p>
        <ul className="space-y-2">
          {learnLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Support */}
      <div>
        <p className="text-sm tracking-[0.2em] uppercase mb-4 text-brand-accent">Support</p>
        <ul className="space-y-2">
          {supportLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-sm text-brand-text/50 hover:text-brand-text/80 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="text-center pt-8 border-t border-brand-accent/10">
      <p className="text-xs text-brand-text/30">
        © Doc's Hemp RX 2026. All products are hemp-derived and contain less
        than 0.3% Δ9 THC. Products comply with Texas DSHS 2026 regulations.
        Must be 21+ to purchase.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
