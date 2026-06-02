// ============================================================
// SELMASI SITE CONTENT
// Edit this file to update repeated content across the site
// ============================================================

export const BUSINESS = {
  name: "Selmasi",
  tagline: "Smart Business Automation for Growing Companies",
  description:
    "Practical automation solutions for schools and growing businesses.",
  email: "Info@selmasi.africa",
  whatsappDisplay: "0611340644",
  whatsappLink: "https://wa.me/27611340644",
  landline: "0120048510",
  domain: "selmasi.africa",
} as const;

export const HERO = {
  badge: "Practical Automation",
  heading: "Smart Business Automation for Growing Companies",
  subheading:
    "We help businesses automate follow-ups, reduce delays, improve response time, and build practical systems that support real growth.",
  intro:
    "Selmasi helps businesses save time and avoid missed opportunities by replacing manual follow-up and admin processes with practical automation solutions.",
  ctaPrimary: "Get Started",
  ctaWhatsApp: "Chat on WhatsApp",
} as const;

export const BENEFITS = [
  {
    title: "Faster Responses",
    description:
      "Automated follow-ups ensure new enquiries get a prompt response, so no opportunity slips through.",
    icon: "Zap",
  },
  {
    title: "Save Admin Time",
    description:
      "Reduce time spent on repetitive manual tasks by letting structured automation handle routine work.",
    icon: "Clock",
  },
  {
    title: "Always-On Systems",
    description:
      "Your automation runs around the clock, ensuring consistent communication even outside office hours.",
    icon: "Shield",
  },
  {
    title: "Fewer Missed Enquiries",
    description:
      "No more lost leads. Every enquiry is captured and followed up through a reliable automated process.",
    icon: "CheckCircle",
  },
] as const;

export const ABOUT = {
  title: "About Selmasi",
  body: "Selmasi focuses on practical automation that helps businesses improve follow-up, reduce delays, and build lean systems for growth. We work with schools and growing companies to design and implement solutions that fit their real workflows.",
  values: [
    "Simple, reliable systems",
    "Clear communication",
    "Practical automation",
    "Growth-ready workflows",
  ],
} as const;

export const SERVICES = [
  {
    title: "Lead Response Automation",
    description:
      "Respond faster to new leads and reduce lost opportunities with simple automated follow-up systems.",
    icon: "MessageSquare",
  },
  {
    title: "Appointment Booking & Follow-Up",
    description:
      "Help prospects book easily and stay engaged with reminders and streamlined communication.",
    icon: "CalendarCheck",
  },
  {
    title: "Business Process Automation",
    description:
      "Automate repetitive work and reduce admin so the business can run more efficiently.",
    icon: "Settings2",
  },
  {
    title: "WhatsApp & Chat Support",
    description:
      "Give customers a direct and easy way to ask questions and connect quickly.",
    icon: "MessageCircle",
  },
  {
    title: "Custom Automation Setup",
    description:
      "Practical automation solutions built around your specific business needs and workflows.",
    icon: "Wrench",
  },
] as const;

export const PRICING = {
  title: "Simple, Transparent Pricing",
  subtitle:
    "Choose the package that fits your school or business. Pricing scales with your learner count.",
  example:
    "Example: A 400-learner school on Premium = R1,500 + (100 × R5) = R2,000/month",
  packages: [
    {
      id: "entry",
      name: "Entry Level",
      setupFee: 8500,
      monthlyBase: 1500,
      includedLearners: 300,
      extraPerLearner: 5,
      highlight: false,
      features: [
        "Up to 300 learners included",
        "Lead response automation",
        "Appointment follow-up",
        "WhatsApp support setup",
        "Email support",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      setupFee: 16500,
      monthlyBase: 1500,
      includedLearners: 300,
      extraPerLearner: 5,
      highlight: true,
      features: [
        "Up to 300 learners included",
        "Full business process automation",
        "Custom automation setup",
        "Priority support",
        "WhatsApp & chat support",
        "Growth-ready workflows",
      ],
    },
  ],
} as const;

export const PAYMENT = {
  title: "Payment",
  message:
    "Payment setup is being finalised. Please contact us to proceed with your chosen package.",
  ctaContact: "Contact to Proceed",
  ctaWhatsApp: "Chat on WhatsApp",
} as const;

export const BOOKING = {
  title: "Book a Consultation",
  body: "Book a time to discuss your school or business needs and how automation can help improve your workflow.",
  cta: "Book Now",
} as const;

export const TESTIMONIALS = {
  title: "Client Feedback",
  placeholder: "Testimonials coming soon.",
} as const;

export const CASE_STUDIES = {
  title: "Case Studies",
  placeholder: "Project examples coming soon.",
} as const;

export const CONTACT = {
  title: "Contact Us",
  body: "Ready to improve your business with practical automation? Send us your details and we will get in touch.",
  submitLabel: "Send Message",
  successMessage:
    "Thank you for reaching out. Please also contact us directly on WhatsApp while the message system is being finalised.",
} as const;

export const FAQ = [
  {
    question: "What does Selmasi do?",
    answer:
      "Selmasi helps businesses and schools improve operations with practical automation solutions.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us a message through the contact form or WhatsApp — we will get back to you promptly.",
  },
  {
    question: "Can I request a custom setup?",
    answer:
      "Yes, custom solutions can be discussed and designed based on your specific needs.",
  },
  {
    question: "Can I pay online?",
    answer:
      "Yes, the website includes an online payment option. The live payment connection will be activated once the merchant account is ready.",
  },
  {
    question: "Can this system grow later?",
    answer:
      "Yes, this starter version can be expanded with additional features and integrations in later phases.",
  },
] as const;

export const FOOTER = {
  description: "Practical automation solutions for schools and growing businesses.",
  quickLinks: [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Calculator", href: "#calculator" },
    { label: "Contact", href: "#contact" },
  ],
  copyright: `© ${new Date().getFullYear()} Selmasi. All rights reserved.`,
} as const;
