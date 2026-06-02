import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import LearnerCalculator from "@/components/sections/LearnerCalculator";
import PaymentSection from "@/components/sections/PaymentSection";
import Booking from "@/components/sections/Booking";
import Testimonials from "@/components/sections/Testimonials";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FAQChatbot from "@/components/FAQChatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Benefits />
        <About />
        <Services />
        <Pricing />
        <LearnerCalculator />
        <PaymentSection />
        <Booking />
        <Testimonials />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FAQChatbot />
    </>
  );
}
