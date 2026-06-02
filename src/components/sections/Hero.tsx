"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ArrowDown } from "lucide-react";
import { BUSINESS, HERO } from "@/data/siteContent";
import { scrollToSection } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay },
  }),
};

const WORKFLOW_STEPS = [
  { label: "New Enquiry", icon: "📥", color: "#f7ede0" },
  { label: "Auto Follow-Up", icon: "⚡", color: "#f0e0c8" },
  { label: "Booking Reminder", icon: "📅", color: "#f7ede0" },
  { label: "Customer Response", icon: "✅", color: "#e8f5e9" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 section-pad bg-[#fdf8f3]"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f0e0c8] text-[#5c3d1e] text-xs font-semibold rounded-full tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b6340] inline-block" />
                {HERO.badge}
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.08}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#2c1a0e] leading-[1.18] tracking-tight"
            >
              {HERO.heading}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.16}
              className="text-lg text-[#5c3d1e] leading-relaxed max-w-xl"
            >
              {HERO.subheading}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.22}
              className="text-base text-[#7a5230] leading-relaxed max-w-xl"
            >
              {HERO.intro}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex flex-wrap gap-3 pt-2"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary"
                aria-label="Get started — go to contact form"
              >
                {HERO.ctaPrimary}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Chat with Selmasi on WhatsApp"
              >
                <MessageCircle size={16} aria-hidden="true" />
                {HERO.ctaWhatsApp}
              </a>
            </motion.div>
          </div>

          {/* Right: Workflow card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
            aria-hidden="true"
          >
            <div className="card p-6 sm:p-8 shadow-lg max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              <p className="text-xs font-semibold text-[#8b6340] uppercase tracking-wider mb-5">
                Automation Workflow
              </p>
              <div className="space-y-3">
                {WORKFLOW_STEPS.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                      style={{ background: step.color }}
                    >
                      {step.icon}
                    </div>
                    <span className="text-sm font-medium text-[#2c1a0e]">{step.label}</span>
                    {i < WORKFLOW_STEPS.length - 1 && (
                      <div className="ml-auto">
                        <ArrowDown size={13} className="text-[#c49a6c] rotate-[-90deg]" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-[#eedcbf]">
                <p className="text-xs text-[#a07050] text-center">
                  Automated. Reliable. Always on.
                </p>
              </div>
            </div>

            {/* Decorative background blob */}
            <div
              className="absolute -z-10 -right-8 -top-8 w-64 h-64 bg-[#f0e0c8] rounded-full blur-3xl opacity-50"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
