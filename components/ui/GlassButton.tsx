// components/GlassButton.tsx
import React from "react";

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "secondary":
        return "text-gray-700 hover:text-gray-800 hover:shadow-gray-500/25";
      case "success":
        return "text-green-700 hover:text-green-800 hover:shadow-green-500/25";
      case "warning":
        return "text-orange-700 hover:text-orange-800 hover:shadow-orange-500/25";
      default:
        return "text-emerald-700 hover:text-emerald-800 hover:shadow-emerald-500/25";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-4 py-1.5 text-sm";
      case "lg":
        return "px-8 md:px-10 py-3 text-lg";
      default:
        return "px-6 md:px-8 py-2.5 text-md";
    }
  };

  const getGlowColor = () => {
    switch (variant) {
      case "secondary":
        return "from-gray-400/20 via-gray-300/10";
      case "success":
        return "from-green-400/20 via-green-300/10";
      case "warning":
        return "from-orange-400/20 via-orange-300/10";
      default:
        return "from-emerald-400/20 via-emerald-300/10";
    }
  };

  const getRippleColor = () => {
    switch (variant) {
      case "secondary":
        return "bg-gray-400/30";
      case "success":
        return "bg-green-400/30";
      case "warning":
        return "bg-orange-400/30";
      default:
        return "bg-emerald-400/30";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative group 
        bg-gradient-to-b from-white/25 to-white/10 
        backdrop-blur-lg border border-white/20 rounded-full 
        font-semibold transition-all duration-300 
        hover:from-white/35 hover:to-white/20 hover:border-white/30 
        hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden 
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
      `}
    >
      {/* Animated shine sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

      {/* Top highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      {/* Button text with subtle text shadow */}
      <span className="relative z-10 drop-shadow-sm">{children}</span>

      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-t ${getGlowColor()} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}
      ></div>

      {/* Click ripple effect */}
      <div
        className={`absolute inset-0 rounded-full ${getRippleColor()} scale-0 group-active:scale-100 transition-transform duration-150`}
      ></div>
    </button>
  );
};

export default GlassButton;
