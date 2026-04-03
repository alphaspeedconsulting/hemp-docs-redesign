import { motion } from "framer-motion";
import { FlaskConical, Globe, ShieldCheck, Truck } from "lucide-react";
import { fadeUp, fadeIn } from "@/lib/animations";
import { HERO_IMAGE } from "@/data/products";
import { WP_BASE } from "@/lib/links";

const HeroSection = () => (
  <section className="relative h-[85vh] overflow-hidden">
    <img
      src={HERO_IMAGE}
      alt="Premium indoor THCa flower"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Gradient overlay — colors reference brand tokens */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--brand-base) / 0.9) 0%, hsl(var(--brand-base) / 0.4) 60%, hsl(var(--brand-base) / 0.7) 100%)",
      }}
    />

    {/* Hero copy */}
    <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl">
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
        className="flex items-center gap-3 mb-6"
      >
        <Globe className="w-4 h-4 text-brand-accent" />
        <p className="text-sm tracking-[0.4em] uppercase text-brand-accent">
          Indoor Grown&nbsp;&nbsp;•&nbsp;&nbsp;Ships to 41 States
        </p>
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeUp}
        className="text-5xl md:text-7xl leading-[1.1] font-light mb-6 font-display text-brand-text"
      >
        Buy THCA Online<br />
        <span className="text-brand-accent">Dispensary Quality</span>
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        custom={2}
        variants={fadeUp}
        className="text-lg text-brand-text/70 mb-10 max-w-lg leading-relaxed"
      >
        Hemp-derived THCA. Compliant in 41 states. Every batch
        third-party lab tested — COA available on every product.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        custom={3}
        variants={fadeUp}
        className="flex flex-wrap gap-4"
      >
        <a
          href={WP_BASE + "/shop/"}
          className="px-10 py-4 text-sm tracking-[0.3em] uppercase font-semibold transition-all hover:scale-105 bg-brand-accent text-brand-base"
        >
          Shop THCa
        </a>
        <a
          href={WP_BASE + "/blog/what-is-thca/"}
          className="px-10 py-4 text-sm tracking-[0.3em] uppercase transition-all hover:scale-105 border border-brand-accent/40 text-brand-accent"
        >
          Learn More
        </a>
      </motion.div>
    </div>

    {/* Trust badges */}
    <motion.div
      initial="hidden"
      animate="visible"
      custom={0}
      variants={fadeIn}
      className="absolute bottom-8 right-8 md:right-16 z-10 flex gap-6 md:gap-8"
    >
      {[
        { label: "Farm Bill Compliant", Icon: ShieldCheck },
        { label: "Lab Tested", Icon: FlaskConical },
        { label: "Ships to 41 States", Icon: Globe },
        { label: "Free Shipping $50+", Icon: Truck },
      ].map(({ label, Icon }) => (
        <div
          key={label}
          className="flex items-center gap-2 text-brand-text/60 text-sm tracking-wide"
        >
          <Icon className="w-4 h-4 text-brand-accent" />
          <span className="hidden md:inline">{label}</span>
        </div>
      ))}
    </motion.div>
  </section>
);

export default HeroSection;
