"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, X, MessageCircle, ChevronDown } from "lucide-react";
import { FAQ, BUSINESS } from "@/data/siteContent";

export default function FAQChatbot() {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Trap focus in panel when open
  useEffect(() => {
    if (open && panelRef.current) {
      const firstFocusable = panelRef.current.querySelector<HTMLElement>(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }
  }, [open]);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="w-[calc(100vw-2.5rem)] max-w-sm bg-white border border-[#eedcbf] rounded-2xl shadow-xl overflow-hidden"
            role="dialog"
            aria-label="Selmasi FAQ chatbot"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-[#2c1a0e] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <HelpCircle size={18} className="text-[#c49a6c]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-white">Selmasi FAQ</p>
                  <p className="text-xs text-[#c49a6c]">Quick answers</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#c49a6c] hover:text-white transition-colors rounded-md p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close FAQ chatbot"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {/* FAQ list */}
            <div className="px-4 py-3 max-h-72 overflow-y-auto space-y-2">
              {FAQ.map((item, i) => (
                <div key={i} className="border border-[#eedcbf] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between gap-2 text-sm font-medium text-[#2c1a0e] hover:bg-[#fdf8f3] transition-colors"
                    aria-expanded={activeIdx === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      size={15}
                      className={`text-[#a07050] shrink-0 transition-transform duration-200 ${
                        activeIdx === i ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {activeIdx === i && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-3 pt-0 text-sm text-[#5c3d1e] leading-relaxed border-t border-[#eedcbf]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-[#eedcbf] bg-[#fdf8f3]">
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-sm py-2.5"
                aria-label="Ask a question on WhatsApp"
              >
                <MessageCircle size={15} aria-hidden="true" />
                Ask on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-[#2c1a0e] hover:bg-[#3d2510] text-white shadow-lg flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6340] focus-visible:ring-offset-2"
        aria-label={open ? "Close FAQ chatbot" : "Open FAQ chatbot"}
        aria-expanded={open}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="help"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <HelpCircle size={22} aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
