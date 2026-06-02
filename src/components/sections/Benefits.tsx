"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Shield, CheckCircle } from "lucide-react";
import { BENEFITS } from "@/data/siteContent";

const ICON_MAP = {
  Zap: Zap,
  Clock: Clock,
  Shield: Shield,
  CheckCircle: CheckCircle,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Benefits() {
  return (
    <section className="section-pad bg-[#f7ede0]" aria-label="Key benefits">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {BENEFITS.map((benefit) => {
            const Icon = ICON_MAP[benefit.icon as keyof typeof ICON_MAP] ?? Zap;
            return (
              <motion.div
                key={benefit.title}
                variants={item}
                className="card p-6 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f0e0c8] flex items-center justify-center mb-4 group-hover:bg-[#eedcbf] transition-colors">
                  <Icon size={20} className="text-[#8b6340]" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-[#2c1a0e] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#7a5230] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
