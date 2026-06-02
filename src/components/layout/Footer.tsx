"use client";

import Image from "next/image";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { BUSINESS, FOOTER } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-[#2c1a0e] text-[#f7ede0]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="relative w-36 h-9">
              <Image
                src="/selmasi-logo.png"
                alt="Selmasi logo"
                fill
                sizes="144px"
                className="object-contain object-left brightness-0 invert"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Text fallback */}
              <span className="absolute inset-0 flex items-center text-xl font-bold text-white tracking-tight logo-text-footer">
                {BUSINESS.name}
              </span>
            </div>
            <p className="text-sm text-[#c49a6c] leading-relaxed max-w-xs">
              {FOOTER.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c49a6c] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#eedcbf] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c49a6c] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 text-sm text-[#eedcbf] hover:text-white transition-colors"
                  aria-label={`Email Selmasi at ${BUSINESS.email}`}
                >
                  <Mail size={15} aria-hidden="true" className="text-[#c49a6c] shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#eedcbf] hover:text-white transition-colors"
                  aria-label={`Chat with Selmasi on WhatsApp: ${BUSINESS.whatsappDisplay}`}
                >
                  <MessageCircle size={15} aria-hidden="true" className="text-[#25d366] shrink-0" />
                  {BUSINESS.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.landline}`}
                  className="flex items-center gap-2 text-sm text-[#eedcbf] hover:text-white transition-colors"
                  aria-label={`Call Selmasi: ${BUSINESS.landline}`}
                >
                  <Phone size={15} aria-hidden="true" className="text-[#c49a6c] shrink-0" />
                  {BUSINESS.landline}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#3d2510] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#a07050]">
          <p>{FOOTER.copyright}</p>
          <p>{BUSINESS.domain}</p>
        </div>
      </div>
    </footer>
  );
}
