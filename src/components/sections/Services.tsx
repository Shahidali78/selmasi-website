"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  CalendarCheck,
  Settings2,
  MessageCircle,
  Wrench,
} from "lucide-react";
import { SERVICES } from "@/data/siteContent";

const ICON_MAP = {
  MessageSquare,
  CalendarCheck,
  Settings2,
  MessageCircle,
  Wrench,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad bg-[#f7ede0]"
      aria-labelledby="services-heading"
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
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-[#2c1a0e] mb-3"
          >
            Our Services
          </h2>
          <p className="text-base text-[#7a5230] max-w-xl mx-auto">
            Practical automation built around your business, from lead follow-up to full
            process automation.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? MessageSquare;
            return (
              <motion.div
                key={service.title}
                variants={item}
                className="card p-6 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#f0e0c8] flex items-center justify-center mb-4 group-hover:bg-[#eedcbf] transition-colors">
                  <Icon size={21} className="text-[#8b6340]" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-[#2c1a0e] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#7a5230] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
