import React from "react";

type BgGradientProps = {
  children: React.ReactNode;
  className?: string;
};

const BgGradient: React.FC<BgGradientProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`bg-white relative overflow-hidden  ${className}`}>
      {/* Top Right */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-300/20 rounded-full blur-3xl" />
      {/* Bottom Left */}
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-2xl" />
      {/* Mid Left */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-emerald-300/25 rounded-full blur-2xl" />
      {/* Mid Right */}
      <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-emerald-400/25 rounded-full blur-3xl" />
      {/* Bottom Right */}
      <div className="absolute top-2/3 right-1/4 w-[300px] h-[300px] bg-emerald-200/15 rounded-full blur-2xl" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-transparent to-emerald-100/30" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BgGradient;
