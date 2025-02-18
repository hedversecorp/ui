import React from "react";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Build Beautiful Apps,
          <br />
          <span className="text-orange-500">Faster Than Ever</span>
        </h1>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-12">
          A comprehensive UI library for both React Native and Web applications.
          Beautifully designed components that work seamlessly across platforms.
        </p>
        <div className="flex justify-center space-x-6">
          <Button variant="primary" icon>
            Get Started
          </Button>
          <Button variant="secondary">View Components</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
