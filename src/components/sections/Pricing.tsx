"use client";

import { motion } from "framer-motion";
import { Check, Star, MessageCircle, ArrowRight } from "lucide-react";
import { BUSINESS, PRICING } from "@/data/siteContent";
import { formatRand } from "@/lib/pricing";
import { scrollToSection } from "@/lib/utils";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-pad bg-[#fdf8f3]"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-bold text-[#2c1a0e] mb-3"
          >
            {PRICING.title}
          </h2>
          <p className="text-base text-[#7a5230] max-w-xl mx-auto mb-4">
            {PRICING.subtitle}
          </p>
          <div className="inline-block bg-[#f0e0c8] border border-[#eedcbf] rounded-lg px-4 py-2 text-sm text-[#5c3d1e] font-medium">
            {PRICING.example}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PRICING.packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card p-7 relative ${
                pkg.highlight
                  ? "border-[#8b6340] shadow-md ring-1 ring-[#8b6340]/20"
                  : ""
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-[#8b6340] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    <Star size={11} aria-hidden="true" />
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold text-[#2c1a0e] mb-1">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#2c1a0e]">
                    {formatRand(pkg.setupFee)}
                  </span>
                  <span className="text-sm text-[#7a5230]">setup fee</span>
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#5c3d1e]">
                    {formatRand(pkg.monthlyBase)}
                  </span>
                  <span className="text-sm text-[#7a5230]">/month (up to {pkg.includedLearners} learners)</span>
                </div>
                <p className="text-xs text-[#a07050] mt-1">
                  +{formatRand(pkg.extraPerLearner)} per learner over {pkg.includedLearners}
                </p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#3d2510]">
                    <Check
                      size={15}
                      className="text-[#8b6340] shrink-0"
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="space-y-2.5">
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`w-full justify-center ${pkg.highlight ? "btn-primary" : "btn-outline"}`}
                  aria-label={`Contact us to proceed with ${pkg.name} package`}
                >
                  Contact to Proceed
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-sm"
                  aria-label={`Chat on WhatsApp about ${pkg.name} package`}
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
