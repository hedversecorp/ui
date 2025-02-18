import React from "react";
import ComponentPreview from "./ComponentPreview";

const components = [
  {
    title: "Circular Progress",
    code: "<CircularProgress value={75} />",
    demo: null,
  },
];

const ComponentsSection = () => {
  return (
    <section id="components" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          Featured Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {components.map((component, index) => (
            <ComponentPreview key={index} {...component} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
