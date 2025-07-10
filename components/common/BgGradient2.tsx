// components/bgGradient2.tsx
import React from "react";

const BgGradient2: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 w-[520px] h-[520px] bg-emerald-300/30 rounded-full blur-3xl rotate-12" />
      <div className="absolute top-1/4 left-1/2 w-[380px] h-[380px] bg-green-200/40 rounded-full blur-2xl -translate-x-1/2" />
      <div className="absolute -bottom-44 right-1/3 w-[600px] h-[400px] bg-emerald-400/25 rounded-full blur-3xl -rotate-12" />
      <div className="absolute top-2/3 left-1/4 w-[320px] h-[320px] bg-green-100/30 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-200/40 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-0 w-[250px] h-[250px] bg-green-300/30 rounded-full blur-2xl -translate-y-1/2" />

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-green-100/70  to-green-50/80" />
    </div>
  );
};

export default BgGradient2;
