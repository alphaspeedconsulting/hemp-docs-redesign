import { useEffect, useState } from "react";

const STORAGE_KEY = "docs_hemp_age_verified";
const EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

/** Returns true if this user-agent appears to be a search engine crawler. */
function isCrawler(): boolean {
  const ua = navigator.userAgent.toLowerCase();
  return /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebot|ia_archiver|ahrefsbot|semrushbot|mj12bot|dotbot|rogerbot/.test(
    ua
  );
}

/** Returns true if a valid age verification is stored and not expired. */
function isVerified(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const ts = parseInt(raw, 10);
    return !isNaN(ts) && Date.now() - ts < EXPIRY_MS;
  } catch {
    return false;
  }
}

interface Props {
  children: React.ReactNode;
}

const AgeGate = ({ children }: Props) => {
  const [verified, setVerified] = useState(false);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Bypass gate for search engine crawlers and already-verified visitors
    if (isCrawler() || isVerified()) {
      setVerified(true);
    }
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const y = parseInt(year, 10);
    const m = parseInt(month, 10);
    const d = parseInt(day, 10);

    if (isNaN(y) || isNaN(m) || isNaN(d)) {
      setError("Please enter a valid date of birth.");
      return;
    }

    const dob = new Date(y, m - 1, d);
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
      age--;
    }

    if (age < 21) {
      setError("You must be 21 or older to access this site.");
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      // localStorage unavailable — still allow access this session
    }
    setVerified(true);
  };

  if (verified) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-base px-6">
      <div className="w-full max-w-sm text-center">
        {/* Logo */}
        <p className="text-2xl tracking-[0.3em] uppercase font-light font-display text-brand-text mb-2">
          Doc's <span className="text-brand-accent">Hemp</span>
        </p>
        <p className="text-xs tracking-[0.3em] uppercase text-brand-text/40 mb-10">
          Premium THCa · Denver, CO
        </p>

        <div className="p-8 rounded-sm border border-brand-accent/20 bg-brand-accent/5">
          <h2 className="text-xl font-light font-display text-brand-text mb-2">
            Age Verification
          </h2>
          <p className="text-sm text-brand-text/50 mb-6 leading-relaxed">
            You must be 21 or older to enter. Please confirm your date of birth.
          </p>

          <form onSubmit={handleVerify} className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-brand-text/40 mb-1">
                  Month
                </label>
                <input
                  type="number"
                  min={1}
                  max={12}
                  placeholder="MM"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm text-center bg-brand-base border border-brand-accent/30 text-brand-text placeholder-brand-text/20 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-brand-text/40 mb-1">
                  Day
                </label>
                <input
                  type="number"
                  min={1}
                  max={31}
                  placeholder="DD"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm text-center bg-brand-base border border-brand-accent/30 text-brand-text placeholder-brand-text/20 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-brand-text/40 mb-1">
                  Year
                </label>
                <input
                  type="number"
                  min={1900}
                  max={new Date().getFullYear()}
                  placeholder="YYYY"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm text-center bg-brand-base border border-brand-accent/30 text-brand-text placeholder-brand-text/20 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-400 tracking-wide">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 text-sm tracking-[0.3em] uppercase font-semibold bg-brand-accent text-brand-base hover:scale-[1.02] transition-all"
            >
              Enter Site
            </button>
          </form>
        </div>

        <p className="text-[10px] text-brand-text/25 mt-6 leading-relaxed">
          By entering you confirm you are 21+. Products contain hemp-derived
          THCa. Must comply with your local laws.
        </p>
      </div>
    </div>
  );
};

export default AgeGate;
