"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ABOUT } from "@/data/siteContent";

export default function About() {
  return (
    <section id="about" className="section-pad bg-[#fdf8f3]" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-[#2c1a0e] mb-5"
            >
              {ABOUT.title}
            </h2>
            <p className="text-base text-[#5c3d1e] leading-relaxed mb-8">
              {ABOUT.body}
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            <div className="card p-7 space-y-4">
              <p className="text-xs font-semibold text-[#8b6340] uppercase tracking-wider mb-3">
                Our Approach
              </p>
              {ABOUT.values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f0e0c8] flex items-center justify-center shrink-0">
                    <Check size={13} className="text-[#8b6340]" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-[#2c1a0e]">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
