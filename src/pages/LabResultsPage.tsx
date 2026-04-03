import { useState } from "react";
import { motion } from "framer-motion";
import { FlaskConical, ExternalLink } from "lucide-react";
import AgeGate from "@/components/AgeGate";
import AnnouncementBar from "@/components/AnnouncementBar";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { fadeUp } from "@/lib/animations";
import { PRODUCTS } from "@/data/products";
import { WP_BASE, WP_TARGET } from "@/lib/links";

const LabResultsPage = () => {
  const [selectedState, setSelectedState] = useState("ALL");

  return (
    <AgeGate>
      <div className="min-h-screen bg-brand-base text-brand-text font-body">
        <AnnouncementBar />
        <NavBar selectedState={selectedState} onStateChange={setSelectedState} />

        <div className="py-16 px-8 text-center border-b border-brand-accent/10 bg-brand-base-light">
          <p className="text-sm tracking-[0.4em] uppercase mb-3 text-brand-accent">
            Third-Party Verified
          </p>
          <h1 className="text-4xl md:text-5xl font-light font-display text-brand-text">
            Lab Results & COAs
          </h1>
          <p className="mt-4 text-brand-text/50 max-w-lg mx-auto text-sm leading-relaxed">
            Every Doc's Hemp product is tested by an independent ISO-accredited
            lab. Certificates of Analysis (COA) confirm cannabinoid potency and
            verify Δ9 THC below 0.3% dry weight.
          </p>
        </div>

        <section className="py-24 px-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="p-6 border border-brand-accent/15 bg-brand-base-light rounded-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-brand-text/40 mb-1">
                      {product.category}
                    </p>
                    <h2 className="text-lg font-light font-display text-brand-text mb-1">
                      {product.name}
                    </h2>
                    {product.strainName && (
                      <p className="text-xs italic text-brand-text/40 mb-2">{product.strainName}</p>
                    )}
                    {product.thcaPercent && (
                      <p className="text-sm font-mono text-brand-accent/70">
                        <FlaskConical className="w-3 h-3 inline mr-1.5 mb-0.5" />
                        {product.thcaPercent}
                      </p>
                    )}
                  </div>

                  <a
                    href={WP_BASE + (product.coaUrl ?? "/lab-results/")}
                    target={WP_TARGET}
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 text-[10px] tracking-[0.2em] uppercase border border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10 transition-colors"
                  >
                    View COA <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-brand-accent/10 flex items-center gap-2">
                  <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 border border-effect-focus/40 text-effect-focus">
                    Δ9 &lt; 0.3%
                  </span>
                  <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 border border-brand-accent/20 text-brand-text/40">
                    Farm Bill Compliant
                  </span>
                  {product.txCompliant && (
                    <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 border border-brand-accent/20 text-brand-text/40">
                      Ships to TX
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-6 border border-brand-accent/20 bg-brand-base-light text-center rounded-sm">
            <p className="text-sm text-brand-text/50 leading-relaxed max-w-xl mx-auto">
              All tests performed by ISO/IEC 17025-accredited third-party laboratories.
              Full COA documents including heavy metals, pesticide, and residual solvent
              panels are available on request at{" "}
              <a href="mailto:hello@docs-hemp.com" className="text-brand-accent hover:underline">
                hello@docs-hemp.com
              </a>
            </p>
          </div>
        </section>

        <SiteFooter />
      </div>
    </AgeGate>
  );
};

export default LabResultsPage;
