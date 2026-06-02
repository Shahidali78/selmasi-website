"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { CASE_STUDIES } from "@/data/siteContent";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="section-pad bg-[#f7ede0]"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2
            id="case-studies-heading"
            className="text-3xl sm:text-4xl font-bold text-[#2c1a0e] mb-3"
          >
            {CASE_STUDIES.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-10 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f0e0c8] rounded-xl mb-4">
            <BookOpen size={22} className="text-[#8b6340]" aria-hidden="true" />
          </div>
          <p className="text-base text-[#a07050] italic">{CASE_STUDIES.placeholder}</p>
        </motion.div>
      </div>
    </section>
  );
}
