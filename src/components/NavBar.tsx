import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";
import { WP_BASE, WP_TARGET } from "@/lib/links";

/** Internal React routes — handled by the SPA, no WordPress needed. */
const NAV_LINKS = [
  { label: "Shop", to: "/shop" },
  { label: "Blog", to: "/blog" },
  { label: "Lab Results", to: "/lab-results" },
  { label: "Contact", to: "/contact" },
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
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl tracking-[0.3em] uppercase font-light font-display text-brand-text hover:text-brand-accent transition-colors"
        >
          Doc's <span className="text-brand-accent">Hemp</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-sm tracking-widest uppercase text-brand-text/60 hover:text-brand-text transition-colors"
            >
              {label}
            </Link>
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

          {/* Cart — transactional WP page, opens in new tab on staging */}
          <a href={WP_BASE + "/cart-2/"} target={WP_TARGET} rel="noopener noreferrer" className="text-brand-text/60 hover:text-brand-text transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
          </a>

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
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMobileOpen(false)}
              className="block text-sm tracking-widest uppercase text-brand-text/70 hover:text-brand-text transition-colors"
            >
              {label}
            </Link>
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
