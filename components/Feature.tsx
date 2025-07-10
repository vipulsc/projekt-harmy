"use client";
import { Star, CheckCircle, Users, BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "framer-motion";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-emerald-500" />,
    title: "Automated HR Workflows",
    desc: "Streamline onboarding, reviews, and approvals with smart automation.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Team Insights",
    desc: "Visualize team performance and engagement with real-time analytics.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
    title: "Actionable Analytics",
    desc: "Make data-driven decisions with beautiful, interactive dashboards.",
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    title: "Employee Recognition",
    desc: "Celebrate top performers and foster a culture of appreciation.",
  },
];

export default function Feature() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.div
      ref={ref}
      className="py-24 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Everything your HR team needs, beautifully unified
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empower your people and processes with a platform designed for modern
          teams. Discover features that save time, boost engagement, and drive
          results.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full mt-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="flex flex-col items-center bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-300"
              initial={{
                opacity: 0,
                x: i < 2 ? -120 : 120,
                y: 20,
              }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : i < 2 ? -120 : 120,
                y: inView ? 0 : 20,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
                delay: inView ? 0.6 + i * 0.15 : 0,
              }}
            >
              <div className="mb-4">{f.icon}</div>
              <div className="text-xl font-bold text-gray-900 mb-2">
                {f.title}
              </div>
              <div className="text-gray-500 text-base">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
