import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';

/**
 * Home Component (Root Page)
 * Assembles all sections into a single-page scrolling experience.
 * Implements a clean layout with white backgrounds to let architectural imagery pop.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-teal selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Authority & Trust Section */}
      <TrustSection />

      {/* Core Services & Visualization */}
      <ServicesSection />

      {/* Detailed Architect Profile */}
      <AboutSection />

      {/* Project Portfolio Grid */}
      <PortfolioSection />

      {/* Final Lead Capture & Footer */}
      <Footer />
    </main>
  );
}
