"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send, CheckCircle } from "lucide-react";
import { BUSINESS, CONTACT } from "@/data/siteContent";

interface FormState {
  name: string;
  business: string;
  phone: string;
  email: string;
  message: string;
}

const INITIAL: FormState = { name: "", business: "", phone: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) errs.message = "Message is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="section-pad bg-[#fdf8f3]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-[#2c1a0e] mb-3"
          >
            {CONTACT.title}
          </h2>
          <p className="text-base text-[#7a5230] max-w-lg mx-auto">{CONTACT.body}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="card p-6 space-y-5">
              <p className="text-xs font-semibold text-[#8b6340] uppercase tracking-wider">
                Get in Touch
              </p>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 group"
                aria-label={`Email Selmasi: ${BUSINESS.email}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#f0e0c8] flex items-center justify-center shrink-0 group-hover:bg-[#eedcbf] transition-colors">
                  <Mail size={17} className="text-[#8b6340]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#a07050]">Email</p>
                  <p className="text-sm font-medium text-[#2c1a0e] group-hover:text-[#8b6340] transition-colors">
                    {BUSINESS.email}
                  </p>
                </div>
              </a>

              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                aria-label={`WhatsApp Selmasi: ${BUSINESS.whatsappDisplay}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#e8f5e9] flex items-center justify-center shrink-0 group-hover:bg-[#c8e6c9] transition-colors">
                  <MessageCircle size={17} className="text-[#25d366]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#a07050]">WhatsApp</p>
                  <p className="text-sm font-medium text-[#2c1a0e] group-hover:text-[#25d366] transition-colors">
                    {BUSINESS.whatsappDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${BUSINESS.landline}`}
                className="flex items-center gap-3 group"
                aria-label={`Call Selmasi: ${BUSINESS.landline}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#f0e0c8] flex items-center justify-center shrink-0 group-hover:bg-[#eedcbf] transition-colors">
                  <Phone size={17} className="text-[#8b6340]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#a07050]">Landline</p>
                  <p className="text-sm font-medium text-[#2c1a0e] group-hover:text-[#8b6340] transition-colors">
                    {BUSINESS.landline}
                  </p>
                </div>
              </a>
            </div>

            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
              aria-label="Chat directly with Selmasi on WhatsApp"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="card p-10 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#e8f5e9] rounded-full mb-5">
                  <CheckCircle size={26} className="text-[#25d366]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#2c1a0e] mb-3">Thank you!</h3>
                <p className="text-sm text-[#5c3d1e] leading-relaxed mb-6 max-w-sm mx-auto">
                  {CONTACT.successMessage}
                </p>
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center"
                  aria-label="Chat with Selmasi on WhatsApp"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="card p-7 space-y-5"
                aria-label="Contact form"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#2c1a0e] mb-1.5">
                    Name <span aria-hidden="true" className="text-[#a07050]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border text-[#2c1a0e] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#8b6340] focus:border-transparent transition placeholder:text-[#c49a6c] ${errors.name ? "border-red-400" : "border-[#eedcbf]"}`}
                    placeholder="Your full name"
                    aria-required="true"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-xs text-red-600 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Business */}
                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-[#2c1a0e] mb-1.5">
                    School / Business Name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    value={form.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#eedcbf] text-[#2c1a0e] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#8b6340] focus:border-transparent transition placeholder:text-[#c49a6c]"
                    placeholder="Your school or business name"
                  />
                </div>

                {/* Phone + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#2c1a0e] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#eedcbf] text-[#2c1a0e] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#8b6340] focus:border-transparent transition placeholder:text-[#c49a6c]"
                      placeholder="e.g. 0611340644"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#2c1a0e] mb-1.5">
                      Email Address <span aria-hidden="true" className="text-[#a07050]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border text-[#2c1a0e] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#8b6340] focus:border-transparent transition placeholder:text-[#c49a6c] ${errors.email ? "border-red-400" : "border-[#eedcbf]"}`}
                      placeholder="your@email.com"
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="text-xs text-red-600 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2c1a0e] mb-1.5">
                    Message <span aria-hidden="true" className="text-[#a07050]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border text-[#2c1a0e] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#8b6340] focus:border-transparent transition placeholder:text-[#c49a6c] resize-none ${errors.message ? "border-red-400" : "border-[#eedcbf]"}`}
                    placeholder="Tell us about your school or business and how we can help..."
                    aria-required="true"
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-xs text-red-600 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  aria-label="Send your message to Selmasi"
                >
                  <Send size={16} aria-hidden="true" />
                  {CONTACT.submitLabel}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
