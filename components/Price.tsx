"use client";
import { CheckCircle, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const features = [
  "Unlimited Team Members",
  "Advanced Analytics",
  "Priority Support",
  "Custom Integrations",
  "SSO & Security Suite",
];

const floatingDots = [
  {
    x: "-10%",
    y: "10%",
    size: 32,
    color: "from-emerald-400 to-green-300",
    delay: 0,
  },
  {
    x: "110%",
    y: "20%",
    size: 20,
    color: "from-blue-400 to-indigo-400",
    delay: 0.2,
  },
  {
    x: "-8%",
    y: "80%",
    size: 20,
    color: "from-orange-400 to-yellow-400",
    delay: 0.4,
  },
  {
    x: "105%",
    y: "70%",
    size: 28,
    color: "from-purple-400 to-pink-400",
    delay: 0.6,
  },
  {
    x: "50%",
    y: "-12%",
    size: 24,
    color: "from-emerald-300 to-emerald-500",
    delay: 0.8,
  },
];

const officePhotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=300&fit=crop&crop=center",
    alt: "Team Collaboration",
    position: { left: "6%", top: "12%" },
    rotation: -12,
    size: { width: 160, height: 160 },
    delay: 0.3,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=center",
    alt: "Modern Workspace",
    position: { right: "4%", top: "8%" },
    rotation: 8,
    size: { width: 140, height: 140 },
    delay: 0.5,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop&crop=center",
    alt: "Professional Team",
    position: { left: "10%", bottom: "22%" },
    rotation: 15,
    size: { width: 150, height: 150 },
    delay: 0.7,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=300&fit=crop&crop=center",
    alt: "Business Meeting",
    position: { right: "8%", bottom: "18%" },
    rotation: -8,
    size: { width: 135, height: 135 },
    delay: 0.9,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=center",
    alt: "Executive Office",
    position: { left: "4%", top: "52%" },
    rotation: -5,
    size: { width: 130, height: 130 },
    delay: 1.1,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=center",
    alt: "Corporate Discussion",
    position: { right: "6%", top: "42%" },
    rotation: 12,
    size: { width: 145, height: 145 },
    delay: 1.3,
  },
];

const BgGradient2 = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 opacity-60" />
);

const Price = () => {
  const priceRef = useRef(null);
  return (
    <div
      ref={priceRef}
      className="relative min-h-[70vh] flex items-center justify-center py-24 px-4 overflow-hidden"
      style={{ willChange: "transform, opacity" }}
    >
      <BgGradient2 />
      {floatingDots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute z-10 pointer-events-none"
          style={{ left: dot.x, top: dot.y, willChange: "transform, opacity" }}
          initial={{ scale: 0.7, opacity: 0.7, rotate: 0 }}
          animate={{
            scale: [0.7, 1.1, 0.7],
            opacity: [0.7, 1, 0.7],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            repeatType: "loop",
            delay: dot.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="rounded-full bg-gradient-to-br blur-md opacity-80"
            style={{
              width: dot.size,
              height: dot.size,
              backgroundImage: `linear-gradient(to bottom right, ${dot.color
                .replace("from-", "")
                .replace(" to-", ", ")})`,
            }}
          />
        </motion.div>
      ))}
      <div className="hidden lg:block">
        {officePhotos.map((photo) => (
          <motion.div
            key={photo.id}
            className="absolute z-15 pointer-events-auto"
            style={{
              ...photo.position,
              transform: `rotate(${photo.rotation}deg)`,
              willChange: "transform, opacity",
            }}
            initial={{
              scale: 0,
              opacity: 0,
              rotate: photo.rotation - 20,
              y: 30,
            }}
            whileInView={{ scale: 1, opacity: 1, rotate: photo.rotation, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 16,
              delay: photo.delay,
              duration: 0.7,
            }}
            whileHover={{
              scale: 1.1,
              rotate: photo.rotation + 5,
              transition: { duration: 0.3 },
            }}
            drag
            dragElastic={0.5}
            dragMomentum={false}
            dragConstraints={priceRef}
          >
            <div className="relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg border-2 border-red-300">
                  <div className="w-2 h-2 bg-red-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div
                className="absolute inset-0 bg-black/25 rounded-lg blur-sm translate-x-2 translate-y-2"
                style={{ width: photo.size.width, height: photo.size.height }}
              />
              <div
                className="absolute inset-0 bg-white rounded-lg -translate-x-2 -translate-y-2"
                style={{
                  width: photo.size.width + 12,
                  height: photo.size.height + 12,
                }}
              />
              <motion.div
                drag
                dragElastic={0.5}
                dragMomentum={false}
                dragConstraints={priceRef}
                style={{
                  width: photo.size.width,
                  height: photo.size.height,
                  willChange: "transform, opacity",
                }}
                className="relative"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.size.width}
                  height={photo.size.height}
                  className="rounded-lg object-cover border-4 border-white shadow-xl"
                  style={{ width: photo.size.width, height: photo.size.height }}
                  unoptimized
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 bg-white h-8 rounded-b-lg border-t border-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-500 font-medium">
                  {photo.alt}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="relative z-20 max-w-md w-full mx-auto bg-white/80 backdrop-blur-2xl border border-emerald-100 rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-10 h-10 text-emerald-500 drop-shadow-lg" />
          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-lg font-serif">
            Corporate
          </span>
        </div>
        <div className="text-6xl sm:text-7xl font-extrabold text-emerald-700 mb-2 drop-shadow-xl font-sans">
          $299
          <span className="text-2xl align-super text-emerald-400 font-bold">
            /mo
          </span>
        </div>
        <div className="text-lg text-gray-600 mb-8 text-center max-w-xs">
          For ambitious teams and modern enterprises. Unlock every feature, with
          premium support and security.
        </div>
        <ul className="flex flex-col gap-4 mb-10 w-full">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-emerald-900 text-base font-medium"
            >
              <CheckCircle className="w-6 h-6 text-emerald-500 drop-shadow" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="relative overflow-hidden rounded-xl backdrop-blur-md border transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-emerald-400/50 shadow-lg hover:shadow-xl px-8 py-4 text-lg w-full text-lg shadow-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Price;
