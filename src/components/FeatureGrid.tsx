import { motion } from "framer-motion";
import { FlaskConical, Gem, Shield, Snowflake } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { INDOOR_GROW_IMAGE } from "@/data/products";

const features = [
  {
    Icon: Snowflake,
    title: "Climate Controlled",
    desc: "Precision temperature & humidity for maximum trichome production",
  },
  {
    Icon: Gem,
    title: "Exotic Genetics",
    desc: "Rare cultivars you won't find from outdoor farms",
  },
  {
    Icon: FlaskConical,
    title: "Lab Tested",
    desc: "Every batch 3rd-party tested for potency & purity",
  },
  {
    Icon: Shield,
    title: "No Pesticides",
    desc: "Clean-room environment eliminates the need for harsh chemicals",
  },
];

const FeatureGrid = () => (
  <section className="py-24 px-8 bg-brand-base-light">
    <div className="max-w-6xl mx-auto">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="text-sm tracking-[0.4em] uppercase mb-4 text-center text-brand-accent"
      >
        The Indoor Difference
      </motion.p>
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
        className="text-4xl text-center mb-6 font-light font-display text-brand-text"
      >
        Why Our THCa Is{" "}
        <span className="text-brand-accent">Different</span>
      </motion.h3>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={fadeUp}
        className="text-center text-brand-text/60 mb-16 max-w-2xl mx-auto leading-relaxed"
      >
        Every product starts with plants grown indoors in a state-of-the-art
        climate-controlled facility. Dense, potent, and terpene-rich — the way
        dispensary-quality cannabis is supposed to be.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="p-6 rounded-sm border border-brand-accent/10 bg-brand-accent/5"
            >
              <f.Icon className="w-6 h-6 mb-3 text-brand-accent" />
              <p className="text-sm font-medium mb-2 tracking-wide text-brand-text">
                {f.title}
              </p>
              <p className="text-xs text-brand-text/50 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Image + stat callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
          className="relative"
        >
          <img
            src={INDOOR_GROW_IMAGE}
            alt="Indoor grow facility"
            loading="lazy"
            width={1280}
            height={720}
            className="rounded-sm w-full border border-brand-accent/15"
          />
          <div className="absolute -bottom-6 -left-6 p-5 rounded-sm bg-brand-base border border-brand-accent/20">
            <p className="text-3xl font-light font-display text-brand-accent">
              25–30%
            </p>
            <p className="text-xs text-brand-text/50 tracking-wide">
              Avg. THCa Content
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeatureGrid;
