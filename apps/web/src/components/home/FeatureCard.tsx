import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
      <div className="text-orange-500">{icon}</div>
    </div>
    <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default FeatureCard;
