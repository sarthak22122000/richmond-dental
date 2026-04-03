import Hero from "@/components/Hero";
import InsuranceSection from "@/components/InsuranceSection";
import ServicesSection from "@/components/ServicesSection";
import DentistsSection from "@/components/DentistsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfficeSection from "@/components/OfficeSection";
import EmergencySection from "@/components/EmergencySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <InsuranceSection />
      <ServicesSection />
      <DentistsSection />
      <TestimonialsSection />
      <OfficeSection />
      <EmergencySection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
