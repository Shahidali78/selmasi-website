"use client";

import { motion } from "framer-motion";
import { CalendarDays, MessageCircle } from "lucide-react";
import { BUSINESS, BOOKING } from "@/data/siteContent";
import { scrollToSection } from "@/lib/utils";

export default function Booking() {
  return (
    <section
      id="booking"
      className="section-pad bg-[#f7ede0]"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="card p-8 sm:p-10 text-center shadow-md"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#f0e0c8] rounded-xl mb-5">
            <CalendarDays size={24} className="text-[#8b6340]" aria-hidden="true" />
          </div>

          <h2
            id="booking-heading"
            className="text-2xl sm:text-3xl font-bold text-[#2c1a0e] mb-3"
          >
            {BOOKING.title}
          </h2>
          <p className="text-base text-[#5c3d1e] max-w-md mx-auto mb-8 leading-relaxed">
            {BOOKING.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary justify-center"
              aria-label="Book a consultation — go to contact form"
            >
              <CalendarDays size={16} aria-hidden="true" />
              {BOOKING.cta}
            </button>
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center"
              aria-label="Chat on WhatsApp to book a consultation"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
