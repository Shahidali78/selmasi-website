"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteContent";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad bg-[#fdf8f3]"
      aria-labelledby="testimonials-heading"
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
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-[#2c1a0e] mb-3"
          >
            {TESTIMONIALS.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-10 text-center"
        >
          <div className="flex justify-center gap-1 mb-4" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-[#eedcbf] fill-[#eedcbf]" />
            ))}
          </div>
          <p className="text-base text-[#a07050] italic">{TESTIMONIALS.placeholder}</p>
        </motion.div>
      </div>
    </section>
  );
}
