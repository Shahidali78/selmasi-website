"use client";

import { motion } from "framer-motion";
import { CreditCard, MessageCircle, ArrowRight } from "lucide-react";
import { BUSINESS, PAYMENT } from "@/data/siteContent";
import { scrollToSection } from "@/lib/utils";

export default function PaymentSection() {
  return (
    <section
      id="payment"
      className="section-pad bg-[#fdf8f3]"
      aria-labelledby="payment-heading"
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
            <CreditCard size={24} className="text-[#8b6340]" aria-hidden="true" />
          </div>

          <h2
            id="payment-heading"
            className="text-2xl sm:text-3xl font-bold text-[#2c1a0e] mb-3"
          >
            {PAYMENT.title}
          </h2>

          <p className="text-base text-[#5c3d1e] max-w-md mx-auto mb-8 leading-relaxed">
            {PAYMENT.message}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary justify-center"
              aria-label="Contact us to proceed with payment"
            >
              {PAYMENT.ctaContact}
              <ArrowRight size={15} aria-hidden="true" />
            </button>
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center"
              aria-label="Chat on WhatsApp to proceed with payment"
            >
              <MessageCircle size={15} aria-hidden="true" />
              {PAYMENT.ctaWhatsApp}
            </a>
          </div>

          <p className="text-xs text-[#a07050] mt-6">
            Online payment via PayGate will be activated once the merchant account is ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
