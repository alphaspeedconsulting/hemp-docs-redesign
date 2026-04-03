import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const perks = [
  "Monthly curated THCa — vapes, gummies & concentrates",
  "30% off retail pricing, every shipment",
  "First access to new drops before the public",
  "Farm Bill compliant products, guaranteed",
];

const SubscriptionCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="py-24 px-8 bg-brand-base border-y border-brand-accent/15">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-sm tracking-[0.4em] uppercase mb-4 text-brand-accent"
          >
            Launching Soon
          </motion.p>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-4xl font-light mb-6 font-display text-brand-text"
          >
            Join the{" "}
            <span className="text-brand-accent">Doc's Hemp Inner Circle</span>
          </motion.h3>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="space-y-3"
          >
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0 mt-1.5" />
                <span className="text-sm text-brand-text/70 leading-relaxed">
                  {perk}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Email capture */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="p-8 rounded-sm border border-brand-accent/20 bg-brand-accent/5"
        >
          {submitted ? (
            <div className="text-center py-6">
              <p className="text-brand-accent text-lg font-light font-display mb-2">
                You're on the list.
              </p>
              <p className="text-sm text-brand-text/50">
                We'll notify you the moment the Doc's Hemp Inner Circle launches.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm tracking-wide text-brand-text/70 mb-6 leading-relaxed">
                Be first to know when we launch. No spam — just your monthly
                curation notification.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 text-sm bg-brand-base border border-brand-accent/30 text-brand-text placeholder-brand-text/30 focus:outline-none focus:border-brand-accent transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-3 text-sm tracking-[0.3em] uppercase font-semibold transition-all hover:scale-[1.02] bg-brand-accent text-brand-base"
                >
                  Notify Me
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionCTA;
