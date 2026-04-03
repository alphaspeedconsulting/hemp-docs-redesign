import { useState } from "react";
import { Mail, MessageSquare, Clock } from "lucide-react";
import AgeGate from "@/components/AgeGate";
import AnnouncementBar from "@/components/AnnouncementBar";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";

const ContactPage = () => {
  const [selectedState, setSelectedState] = useState("ALL");

  return (
    <AgeGate>
      <div className="min-h-screen bg-brand-base text-brand-text font-body">
        <AnnouncementBar />
        <NavBar selectedState={selectedState} onStateChange={setSelectedState} />

        <div className="py-16 px-8 text-center border-b border-brand-accent/10 bg-brand-base-light">
          <p className="text-sm tracking-[0.4em] uppercase mb-3 text-brand-accent">
            We're Here to Help
          </p>
          <h1 className="text-4xl md:text-5xl font-light font-display text-brand-text">
            Contact Doc's Hemp
          </h1>
        </div>

        <section className="py-24 px-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 border border-brand-accent/15 bg-brand-base-light text-center">
              <Mail className="w-6 h-6 text-brand-accent mx-auto mb-4" />
              <p className="text-sm tracking-[0.2em] uppercase text-brand-accent mb-2">Email</p>
              <a href="mailto:hello@docs-hemp.com" className="text-brand-text/70 hover:text-brand-text transition-colors text-sm">
                hello@docs-hemp.com
              </a>
            </div>
            <div className="p-6 border border-brand-accent/15 bg-brand-base-light text-center">
              <Clock className="w-6 h-6 text-brand-accent mx-auto mb-4" />
              <p className="text-sm tracking-[0.2em] uppercase text-brand-accent mb-2">Response Time</p>
              <p className="text-brand-text/50 text-sm">Within 24 hours</p>
            </div>
            <div className="p-6 border border-brand-accent/15 bg-brand-base-light text-center">
              <MessageSquare className="w-6 h-6 text-brand-accent mx-auto mb-4" />
              <p className="text-sm tracking-[0.2em] uppercase text-brand-accent mb-2">Topic</p>
              <p className="text-brand-text/50 text-sm">Orders, products, lab results</p>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-light font-display text-brand-text mb-8 text-center">
              Send a Message
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:hello@docs-hemp.com";
              }}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-brand-text/40 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-brand-base-light border border-brand-accent/20 px-4 py-3 text-sm text-brand-text placeholder:text-brand-text/30 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-brand-text/40 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-brand-base-light border border-brand-accent/20 px-4 py-3 text-sm text-brand-text placeholder:text-brand-text/30 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-brand-text/40 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-brand-base-light border border-brand-accent/20 px-4 py-3 text-sm text-brand-text placeholder:text-brand-text/30 focus:outline-none focus:border-brand-accent/50 transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 text-sm tracking-[0.3em] uppercase font-semibold bg-brand-accent text-brand-base hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <SiteFooter />
      </div>
    </AgeGate>
  );
};

export default ContactPage;
