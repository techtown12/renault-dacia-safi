"use client";

import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import VehiclesSection from "@/components/sections/VehiclesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <VehiclesSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
