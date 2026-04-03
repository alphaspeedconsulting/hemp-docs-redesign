import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";

/**
 * Nav links map to real WordPress/WooCommerce URLs on docs-hemp.com.
 * These are <a href> tags (not React Router Links) — WP handles these routes.
 */
const NAV_LINKS = [
  { label: "Shop", href: "/product-category/flower/" },
  { label: "Blog", href: "/blog/" },
  { label: "Lab Results", href: "/lab-results/" },
  { label: "Contact", href: "/contact/" },
];

const US_STATES = [
  { code: "TX", label: "Texas" },
  { code: "CO", label: "Colorado" },
  { code: "CA", label: "California" },
  { code: "FL", label: "Florida" },
  { code: "NY", label: "New York" },
  { code: "ALL", label: "All States" },
];

interface Props {
  selectedState: string;
  onStateChange: (code: string) => void;
}

const NavBar = ({ selectedState, onStateChange }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-20 border-b border-brand-accent/20 bg-brand-base">
      <div className="flex items-center justify-between px-8 py-5">
        {/* Logo — links to WP homepage */}
        <a
          href="/"
          className="text-2xl tracking-[0.3em] uppercase font-light font-display text-brand-text hover:text-brand-accent transition-colors"
        >
          Doc's <span className="text-brand-accent">Hemp</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm tracking-widest uppercase text-brand-text/60 hover:text-brand-text transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* State compliance selector */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs tracking-wider uppercase text-brand-text/40">
              Shipping to
            </span>
            <select
              value={selectedState}
              onChange={(e) => onStateChange(e.target.value)}
              className="text-xs tracking-wider uppercase text-brand-accent bg-transparent border border-brand-accent/30 px-2 py-1 rounded-sm cursor-pointer focus:outline-none focus:border-brand-accent appearance-none pr-5"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23c9a96e' opacity='0.6'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 4px center",
              }}
            >
              {US_STATES.map((s) => (
                <option
                  key={s.code}
                  value={s.code}
                  className="bg-brand-base text-brand-text"
                >
                  {s.code}
                </option>
              ))}
            </select>
          </div>

          {/* Cart */}
          <button className="text-brand-text/60 hover:text-brand-text transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-brand-text/60 hover:text-brand-text transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-base-light border-t border-brand-accent/10 px-8 py-6 space-y-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm tracking-widest uppercase text-brand-text/70 hover:text-brand-text transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-4 border-t border-brand-accent/10 flex items-center gap-3">
            <span className="text-xs tracking-wider uppercase text-brand-text/40">
              Ship to
            </span>
            <select
              value={selectedState}
              onChange={(e) => onStateChange(e.target.value)}
              className="text-xs tracking-wider uppercase text-brand-accent bg-transparent border border-brand-accent/30 px-2 py-1 rounded-sm focus:outline-none"
            >
              {US_STATES.map((s) => (
                <option key={s.code} value={s.code} className="bg-brand-base text-brand-text">
                  {s.code === "ALL" ? "All States" : s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
