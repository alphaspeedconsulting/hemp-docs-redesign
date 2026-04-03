import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const CTABanner = () => (
  <section className="py-20 px-8 text-center bg-brand-accent/8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0}
      variants={fadeUp}
    >
      <Leaf className="w-8 h-8 mx-auto mb-4 text-brand-accent" />
      <h3 className="text-4xl font-light mb-4 font-display text-brand-text">
        Ready to Try{" "}
        <span className="text-brand-accent">Verified THCa?</span>
      </h3>
      <p className="text-brand-text/60 mb-8 max-w-md mx-auto leading-relaxed">
        100% satisfaction guarantee. Texas-compliant products only. If you're
        not impressed, we'll make it right — no questions asked.
      </p>
      <button className="px-12 py-4 text-sm tracking-[0.3em] uppercase font-semibold transition-all hover:scale-105 bg-brand-accent text-brand-base">
        Shop Now
      </button>
    </motion.div>
  </section>
);

export default CTABanner;
