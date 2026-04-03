import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { WP_BASE } from "@/lib/links";

/**
 * Blog article previews linking to the 8 active SEO blog articles.
 * URLs match the slug strategy defined in 2026-04-03-thca-seo-blog-execution-plan.md.
 * Featured articles are shown on the homepage; all articles live at /blog/.
 */
const FEATURED_POSTS = [
  {
    slug: "/blog/texas-thca-laws-2026/",
    label: "Texas Law",
    title: "What the Texas THCA Ban Means in 2026",
    excerpt:
      "Effective March 31, 2026, Texas DSHS banned smokable THCA. Here's what's still legal — and where to buy it.",
    tag: "Compliance",
  },
  {
    slug: "/blog/what-is-thca/",
    label: "Education",
    title: "What Is THCA? The Complete 2026 Guide",
    excerpt:
      "THCA is the non-psychoactive precursor to THC found in raw cannabis. Here's how it works and why it matters.",
    tag: "Beginner",
  },
  {
    slug: "/blog/thca-vs-thc/",
    label: "Education",
    title: "THCA vs THC: What's the Difference?",
    excerpt:
      "THCA and THC are not the same compound. Understanding the difference determines what's legal, what works, and why it matters in 2026.",
    tag: "Deep Dive",
  },
];

const BlogTeaser = () => (
  <section className="py-24 px-8 bg-brand-base">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-sm tracking-[0.4em] uppercase mb-3 text-brand-accent"
          >
            From the Blog
          </motion.p>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-3xl font-light font-display text-brand-text"
          >
            Know Before You Buy
          </motion.h3>
        </div>
        <motion.a
          href={WP_BASE + "/blog/"}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="hidden md:flex items-center gap-2 text-sm tracking-widest uppercase text-brand-accent hover:text-brand-text/80 transition-colors"
        >
          All Articles <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURED_POSTS.map((post, i) => (
          <motion.a
            key={post.slug}
            href={WP_BASE + post.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="group p-6 rounded-sm border border-brand-accent/15 bg-brand-base-light hover:border-brand-accent/30 transition-colors"
          >
            <span className="inline-block text-[9px] tracking-[0.25em] uppercase px-2 py-0.5 mb-4 border border-brand-accent/30 text-brand-accent">
              {post.tag}
            </span>
            <h4 className="text-base font-light font-display text-brand-text mb-3 leading-snug group-hover:text-brand-accent transition-colors">
              {post.title}
            </h4>
            <p className="text-xs text-brand-text/50 leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <span className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-brand-accent">
              Read More <ArrowRight className="w-3 h-3" />
            </span>
          </motion.a>
        ))}
      </div>

      {/* Mobile "all articles" link */}
      <div className="mt-8 text-center md:hidden">
        <a
          href={WP_BASE + "/blog/"}
          className="text-sm tracking-widest uppercase text-brand-accent hover:text-brand-text/80 transition-colors"
        >
          View All Articles →
        </a>
      </div>
    </div>
  </section>
);

export default BlogTeaser;
