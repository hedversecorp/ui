import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ComponentsSection from "@/components/home/ComponentsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComponentsSection />
      </main>
    </div>
  );
}
