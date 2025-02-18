import React from "react";
import { ChevronRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  icon = false,
  onClick,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-8 py-3 rounded-lg flex items-center space-x-2 transition-colors";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "border border-gray-600 text-white hover:bg-gray-800",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && <ChevronRight className="h-4 w-4" />}
    </button>
  );
};

export default Button;
