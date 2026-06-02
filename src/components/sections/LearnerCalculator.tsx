"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, MessageCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/data/siteContent";
import { calculatePricing, formatRand, type PackageId } from "@/lib/pricing";
import { scrollToSection } from "@/lib/utils";

export default function LearnerCalculator() {
  const [packageId, setPackageId] = useState<PackageId>("entry");
  const [learners, setLearners] = useState<string>("300");

  const parsedLearners = Math.max(0, parseInt(learners, 10) || 0);
  const result = calculatePricing(packageId, parsedLearners);
  const isValid = learners !== "" && parsedLearners >= 0;

  return (
    <section
      id="calculator"
      className="section-pad bg-[#f7ede0]"
      aria-labelledby="calc-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f0e0c8] rounded-xl mb-4">
            <Calculator size={22} className="text-[#8b6340]" aria-hidden="true" />
          </div>
          <h2
            id="calc-heading"
            className="text-3xl sm:text-4xl font-bold text-[#2c1a0e] mb-3"
          >
            Learner Pricing Calculator
          </h2>
          <p className="text-base text-[#7a5230] max-w-lg mx-auto">
            Select your package and enter your learner count to see your monthly total instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-6 sm:p-8 max-w-2xl mx-auto shadow-md"
        >
          {/* Package selector */}
          <fieldset className="mb-6">
            <legend className="block text-sm font-semibold text-[#2c1a0e] mb-3">
              Select Package
            </legend>
            <div className="grid grid-cols-2 gap-3" role="radiogroup">
              {(["entry", "premium"] as PackageId[]).map((id) => (
                <label
                  key={id}
                  className={`relative flex flex-col items-center gap-1 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    packageId === id
                      ? "border-[#8b6340] bg-[#f0e0c8]"
                      : "border-[#eedcbf] bg-white hover:border-[#c49a6c]"
                  }`}
                >
                  <input
                    type="radio"
                    name="package"
                    value={id}
                    checked={packageId === id}
                    onChange={() => setPackageId(id)}
                    className="sr-only"
                  />
                  <span className="text-sm font-semibold text-[#2c1a0e] capitalize">
                    {id === "entry" ? "Entry Level" : "Premium"}
                  </span>
                  <span className="text-xs text-[#7a5230]">
                    Setup: {formatRand(id === "entry" ? 8500 : 16500)}
                  </span>
                  {packageId === id && (
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#8b6340]" />
                  )}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Learner input */}
          <div className="mb-6">
            <label
              htmlFor="learner-count"
              className="block text-sm font-semibold text-[#2c1a0e] mb-2"
            >
              Number of Learners / Kids
            </label>
            <input
              id="learner-count"
              type="number"
              min="0"
              value={learners}
              onChange={(e) => setLearners(e.target.value)}
              placeholder="Enter number of learners"
              className="w-full px-4 py-3 rounded-lg border border-[#eedcbf] bg-white text-[#2c1a0e] text-base focus:outline-none focus:ring-2 focus:ring-[#8b6340] focus:border-transparent placeholder:text-[#c49a6c] transition"
              aria-describedby="learner-hint"
            />
            <p id="learner-hint" className="text-xs text-[#a07050] mt-1.5">
              Monthly base includes up to 300 learners. R5 per additional learner.
            </p>
            {learners !== "" && parsedLearners < 0 && (
              <p role="alert" className="text-xs text-red-600 mt-1">
                Please enter a valid number of learners (0 or more).
              </p>
            )}
          </div>

          {/* Result card */}
          {isValid && (
            <motion.div
              key={`${packageId}-${parsedLearners}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="bg-[#fdf8f3] border border-[#eedcbf] rounded-xl p-5 mb-6 space-y-3"
              aria-live="polite"
              aria-label="Pricing estimate"
            >
              <p className="text-xs font-semibold text-[#8b6340] uppercase tracking-wider mb-1">
                Estimate for {result.packageName}
              </p>

              <div className="flex justify-between items-center text-sm">
                <span className="text-[#5c3d1e]">Setup fee (once-off)</span>
                <span className="font-semibold text-[#2c1a0e]">{formatRand(result.setupFee)}</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-[#5c3d1e]">Monthly base (up to {result.includedLearners})</span>
                <span className="font-semibold text-[#2c1a0e]">{formatRand(result.monthlyBase)}</span>
              </div>

              {result.extraLearners > 0 && (
                <>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#5c3d1e]">
                      Extra learners ({result.extraLearners} × R5)
                    </span>
                    <span className="font-semibold text-[#2c1a0e]">
                      {formatRand(result.extraLearnerFee)}
                    </span>
                  </div>
                </>
              )}

              <div className="border-t border-[#eedcbf] pt-3 flex justify-between items-center">
                <span className="text-sm font-semibold text-[#2c1a0e]">Monthly Total</span>
                <span className="text-xl font-bold text-[#8b6340]">
                  {formatRand(result.monthlyTotal)}/month
                </span>
              </div>
            </motion.div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary flex-1 justify-center"
              aria-label="Contact us to proceed with your chosen package"
            >
              Contact to Proceed
              <ArrowRight size={15} aria-hidden="true" />
            </button>
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-1 justify-center"
              aria-label="Chat on WhatsApp about pricing"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
