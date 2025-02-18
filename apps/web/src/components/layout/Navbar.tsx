import React from "react";
import { Github } from "lucide-react";
import Logo from "../ui/Logo";

const Navbar = () => {
  return (
    <nav className="py-6 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#components"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Components
          </a>
          <a
            href="https://github.com/hedversecorp/ui"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
