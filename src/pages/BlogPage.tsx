import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import AgeGate from "@/components/AgeGate";
import AnnouncementBar from "@/components/AnnouncementBar";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { fadeUp } from "@/lib/animations";
import { WP_BASE, WP_TARGET } from "@/lib/links";

/**
 * Phase 1 blog posts — confirmed live on docs-hemp.com.
 * Phase 2 articles (drug test, delta-8, flower review, buying guide)
 * will be added here when published.
 */
const POSTS = [
  {
    slug: "/blog/texas-thca-laws-2026/",
    tag: "Compliance",
    title: "Texas THCA Laws 2026: What's Still Legal (And What Changed)",
    excerpt:
      "Effective March 31, 2026, Texas DSHS banned smokable THCA. Here's what's still legal — vapes, gummies, edibles & concentrates — and where to buy it.",
    date: "April 2, 2026",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "/blog/is-thca-legal/",
    tag: "Legal",
    title: "Is THCa Legal in 2026? State-by-State Guide & Farm Bill Update",
    excerpt:
      "THCa derived from hemp is federally legal under the 2018 Farm Bill. But state laws vary widely — here's the current map for all 50 states.",
    date: "April 2, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "/blog/what-is-thca/",
    tag: "Education",
    title: "What Is THCA? The Complete 2026 Guide",
    excerpt:
      "THCA is the non-psychoactive precursor to THC found in raw cannabis. Here's how it works, what the science says, and why potency percentages matter.",
    date: "April 1, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "/blog/thca-vs-thc/",
    tag: "Education",
    title: "THCA vs THC: What's the Difference?",
    excerpt:
      "THCA and THC are not the same compound. Understanding the difference determines what's legal, what works, and why it matters when you're buying online.",
    date: "March 28, 2026",
    readTime: "5 min read",
    featured: false,
  },
];

const TAG_COLORS: Record<string, string> = {
  Compliance: "border-amber-500/40 text-amber-400",
  Legal: "border-sky-500/40 text-sky-400",
  Education: "border-brand-accent/40 text-brand-accent",
  Review: "border-emerald-500/40 text-emerald-400",
  "Buying Guide": "border-purple-500/40 text-purple-400",
};

const BlogPage = () => {
  const [selectedState, setSelectedState] = useState("ALL");

  useEffect(() => {
    document.title = "THCA Education Blog — Laws, Effects & Buying Guides | Doc's Hemp";
  }, []);

  const [featured, ...rest] = POSTS;

  return (
    <AgeGate>
      <div className="min-h-screen bg-brand-base text-brand-text font-body">
        <AnnouncementBar />
        <NavBar selectedState={selectedState} onStateChange={setSelectedState} />

        {/* Page header */}
        <div className="py-16 px-8 text-center border-b border-brand-accent/10 bg-brand-base-light">
          <p className="text-sm tracking-[0.4em] uppercase mb-3 text-brand-accent">
            THCa Education & News
          </p>
          <h1 className="text-4xl md:text-5xl font-light font-display text-brand-text">
            The Doc's Hemp Blog
          </h1>
          <p className="mt-4 text-brand-text/50 max-w-lg mx-auto text-sm leading-relaxed">
            Expert guides on THCa potency, state laws, and how to buy with confidence.
          </p>
        </div>

        <section className="py-24 px-8 max-w-6xl mx-auto">

          {/* Featured post — full-width card */}
          <motion.a
            href={WP_BASE + featured.slug}
            target={WP_TARGET}
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="group block mb-16 p-8 md:p-12 border border-brand-accent/25 bg-brand-base-light hover:border-brand-accent/50 transition-colors rounded-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-[9px] tracking-[0.25em] uppercase px-2 py-0.5 border ${TAG_COLORS[featured.tag] ?? "border-brand-accent/30 text-brand-accent"}`}>
                {featured.tag}
              </span>
              <span className="text-[10px] text-brand-text/30 tracking-wider">Featured</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light font-display text-brand-text mb-4 leading-snug group-hover:text-brand-accent transition-colors max-w-3xl">
              {featured.title}
            </h2>
            <p className="text-sm text-brand-text/50 leading-relaxed mb-6 max-w-2xl">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-brand-accent">
                Read Article <ArrowRight className="w-3 h-3" />
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-brand-text/30">
                <Clock className="w-3 h-3" />
                {featured.readTime}
              </span>
              <span className="text-[10px] text-brand-text/30">{featured.date}</span>
            </div>
          </motion.a>

          {/* Remaining posts — 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <motion.a
                key={post.slug}
                href={WP_BASE + post.slug}
                target={WP_TARGET}
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group p-6 border border-brand-accent/15 bg-brand-base-light hover:border-brand-accent/30 transition-colors rounded-sm"
              >
                <span className={`inline-block text-[9px] tracking-[0.25em] uppercase px-2 py-0.5 mb-4 border ${TAG_COLORS[post.tag] ?? "border-brand-accent/30 text-brand-accent"}`}>
                  {post.tag}
                </span>
                <h2 className="text-base font-light font-display text-brand-text mb-3 leading-snug group-hover:text-brand-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-xs text-brand-text/50 leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-brand-accent/10">
                  <span className="flex items-center gap-1 text-[10px] text-brand-text/30">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-brand-accent">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Phase 2 coming soon */}
          <div className="mt-16 py-10 border border-brand-accent/10 text-center rounded-sm">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-accent mb-2">Coming Soon</p>
            <p className="text-brand-text/40 text-sm max-w-md mx-auto">
              THCA drug test guide, THCA vs Delta-8, strongest THCA flower — more articles publishing in Phase 2.
            </p>
          </div>
        </section>

        <SiteFooter />
      </div>
    </AgeGate>
  );
};

export default BlogPage;
