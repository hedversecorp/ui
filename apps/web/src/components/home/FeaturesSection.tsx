import React from "react";
import { Package, Zap, Layers } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <Package />,
    title: "Cross-Platform",
    description:
      "One library, multiple platforms. Build consistently across Web and Mobile.",
  },
  {
    icon: <Zap />,
    title: "Performance First",
    description:
      "Optimized components that deliver smooth experiences on any device.",
  },
  {
    icon: <Layers />,
    title: "Customizable",
    description:
      "Flexible theming system that adapts to your brand's identity.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          Why Choose Hedverse UI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
