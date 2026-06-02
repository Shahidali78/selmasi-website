"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/data/siteContent";
import { scrollToSection } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "hero" },
  { label: "Services", href: "services" },
  { label: "Pricing", href: "pricing" },
  { label: "Calculator", href: "calculator" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize ≥ md
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function handleNav(href: string) {
    setMenuOpen(false);
    scrollToSection(href);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fdf8f3]/95 backdrop-blur-md shadow-sm border-b border-[#eedcbf]"
          : "bg-[#fdf8f3]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => handleNav("hero")}
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6340] rounded-md"
            aria-label="Selmasi — go to top"
          >
            <div className="relative w-32 h-8 sm:w-36 sm:h-9">
              <Image
                src="/selmasi-logo.png"
                alt="Selmasi logo"
                fill
                sizes="144px"
                className="object-contain object-left"
                priority
                onError={(e) => {
                  // Hide broken image; text fallback shown below
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            {/* Text fallback — visually hidden when image loads */}
            <span
              className="text-xl font-bold text-[#2c1a0e] tracking-tight select-none"
              aria-hidden="true"
              style={{ display: "none" }}
              id="logo-text-fallback"
            >
              {BUSINESS.name}
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 text-sm font-medium text-[#3d2510] hover:text-[#2c1a0e] hover:bg-[#f7ede0] rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2 px-4"
              aria-label="Chat with Selmasi on WhatsApp"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-[#2c1a0e] hover:bg-[#f7ede0] transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#fdf8f3] border-t border-[#eedcbf] px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-[#3d2510] hover:bg-[#f7ede0] rounded-md transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 pb-1">
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center text-sm"
              aria-label="Chat with Selmasi on WhatsApp"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
