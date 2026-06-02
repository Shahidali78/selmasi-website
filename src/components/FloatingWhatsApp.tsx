"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { BUSINESS } from "@/data/siteContent";

export default function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="fixed bottom-6 left-5 z-40 flex flex-col items-start gap-2">
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 6, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-[#eedcbf] shadow-lg rounded-xl px-4 py-2.5 text-sm text-[#2c1a0e] font-medium whitespace-nowrap"
            role="tooltip"
          >
            Chat with us on WhatsApp
            <button
              onClick={() => setTooltipVisible(false)}
              className="ml-2 text-[#a07050] hover:text-[#2c1a0e]"
              aria-label="Dismiss WhatsApp tooltip"
            >
              <X size={13} aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={BUSINESS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        className="flex items-center gap-2.5 bg-[#25d366] hover:bg-[#1ebe5d] active:scale-95 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2"
        aria-label="Chat with Selmasi on WhatsApp"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span className="text-sm font-semibold hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
