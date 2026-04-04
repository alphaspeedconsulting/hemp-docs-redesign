import { motion } from "framer-motion";
import { FlaskConical, RotateCcw, ShieldCheck, Star, Truck } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const trustBadges = [
  { Icon: FlaskConical, label: "3rd-Party Lab Tested" },
  { Icon: ShieldCheck, label: "Farm Bill Compliant" },
  { Icon: Truck, label: "Free Shipping $50+" },
  { Icon: RotateCcw, label: "100-Day Returns" },
];

const TESTIMONIALS = [
  {
    quote:
      "Best live rosin I've ordered online. Came sealed, COA was right there on the product page. Will be my go-to.",
    name: "James R.",
    location: "Colorado",
    rating: 5,
  },
  {
    quote:
      "Diamond Sauce was fire — 82% THCA and you can taste the Wedding Cake terpenes. Lab results matched exactly.",
    name: "Kayla M.",
    location: "Florida",
    rating: 5,
  },
  {
    quote:
      "Ordered the 510 cart, arrived in 3 days, discreet packaging. The Sour Diesel hit exactly like the strain description said.",
    name: "Derek T.",
    location: "Georgia",
    rating: 5,
  },
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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

      {/* Testimonial pull-quotes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="p-6 border border-brand-accent/10 bg-brand-accent/5 rounded-sm"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-3 h-3 fill-brand-accent text-brand-accent" />
              ))}
            </div>
            <p className="text-sm text-brand-text/70 leading-relaxed mb-4 italic">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-[10px] font-semibold text-brand-accent">
                {t.name[0]}
              </div>
              <p className="text-[11px] text-brand-text/40">
                {t.name} · <span className="text-brand-text/30">{t.location}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compliance statement — national */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        variants={fadeUp}
        className="text-center text-xs text-brand-text/30 mt-10 tracking-wide max-w-2xl mx-auto"
      >
        All products are hemp-derived and comply with the 2018 Farm Bill.
        Delta-9 THC &lt; 0.3% by dry weight. Certificate of Analysis available for every batch.
      </motion.p>
    </div>
  </section>
);

export default SocialProof;
