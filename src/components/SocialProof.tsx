import { motion } from "framer-motion";
import { FlaskConical, RotateCcw, ShieldCheck, Star, Truck } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const trustBadges = [
  { Icon: FlaskConical, label: "3rd-Party Lab Tested" },
  { Icon: ShieldCheck, label: "Texas Compliant" },
  { Icon: Truck, label: "Free Shipping $50+" },
  { Icon: RotateCcw, label: "100-Day Returns" },
];

const SocialProof = () => (
  <section className="py-20 px-8 bg-brand-base-light">
    <div className="max-w-6xl mx-auto">
      {/* Review aggregate */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="text-center mb-14"
      >
        <div className="flex items-center justify-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-brand-accent text-brand-accent"
            />
          ))}
        </div>
        <p className="text-4xl font-light font-display text-brand-text mb-1">4.8</p>
        <p className="text-sm text-brand-text/50 tracking-wide">
          from 847 verified reviews
        </p>
      </motion.div>

      {/* Trust badge row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trustBadges.map(({ Icon, label }, i) => (
          <motion.div
            key={label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="flex flex-col items-center gap-3 p-6 rounded-sm border border-brand-accent/10 bg-brand-accent/5 text-center"
          >
            <Icon className="w-6 h-6 text-brand-accent" />
            <p className="text-xs tracking-[0.15em] uppercase text-brand-text/70">
              {label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Compliance statement */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        variants={fadeUp}
        className="text-center text-xs text-brand-text/30 mt-10 tracking-wide max-w-2xl mx-auto"
      >
        All THCa products comply with Texas DSHS 2026 regulations. Delta-9 THC
        &lt; 0.3% by dry weight. Certificate of Analysis available for every
        batch.
      </motion.p>
    </div>
  </section>
);

export default SocialProof;
