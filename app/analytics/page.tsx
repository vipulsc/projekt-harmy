"use client";
import { Line, Doughnut } from "react-chartjs-2";
import { motion } from "motion/react";
import {
  mockData,
  options,
  departmentStats,
  kpis,
  departmentDistData,
  departmentDistOptions,
  topEmployees,
} from "./data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import BgGradient from "@/components/common/BgGradient";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {
  return (
    <BgGradient>
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center py-12 px-2 mt-24 sm:px-6 relative"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Mocked Data Tag */}
        <motion.div
          className="absolute right-6 top-6 z-20"
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 22,
            delay: 0.2,
          }}
        >
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full shadow border border-yellow-200 uppercase tracking-wide">
            Mocked Data
          </span>
        </motion.div>
        <div className="w-full max-w-5xl mx-auto">
          {/* KPI Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                className="rounded-2xl border shadow-lg p-6 flex flex-col items-center bg-white/80 backdrop-blur-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <span className="text-2xl font-extrabold text-emerald-700 mb-1">
                  {kpi.value}
                </span>
                <span className="text-sm font-medium text-emerald-900/80">
                  {kpi.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18 },
              },
            }}
          >
            <motion.div
              className="rounded-2xl border shadow-lg bg-white/80 backdrop-blur-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                delay: 0.35,
              }}
            >
              <motion.h3
                className="text-lg font-bold text-emerald-900 mb-4"
                initial={false}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Department Distribution
              </motion.h3>
              <Doughnut
                data={departmentDistData}
                options={departmentDistOptions}
                height={220}
              />
            </motion.div>
            <motion.div
              className="rounded-2xl border shadow-lg bg-white/80 backdrop-blur-lg p-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                delay: 0.45,
              }}
            >
              <motion.h3
                className="text-lg font-bold text-emerald-900 mb-4"
                initial={false}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Top Employees
              </motion.h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-emerald-800 text-sm">
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Department</th>
                    <th className="pb-2">Rating</th>
                    <th className="pb-2">Bookmarks</th>
                  </tr>
                </thead>
                <tbody>
                  {topEmployees.map((emp, i) => (
                    <motion.tr
                      key={emp.name}
                      className="border-t border-emerald-50 hover:bg-emerald-50/30 transition cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.025, backgroundColor: "#f0fdf4" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.55 + i * 0.07,
                      }}
                    >
                      <td className="py-2 font-semibold">{emp.name}</td>
                      <td className="py-2">{emp.department}</td>
                      <td className="py-2">{emp.rating}</td>
                      <td className="py-2">{emp.bookmarks}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: 0.25,
            }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl font-extrabold text-emerald-900 drop-shadow-sm mb-2"
              initial={false}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Analytics Dashboard
            </motion.h1>
            <motion.p
              className="text-lg text-emerald-800/80 font-medium"
              initial={false}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Department-wise Average Rating Bookmark Trends
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {departmentStats.map((dept, i) => (
              <motion.div
                key={dept.name}
                className={`rounded-2xl border shadow-lg p-6 flex flex-col items-center ${dept.color} cursor-pointer`}
                style={{ backdropFilter: "blur(12px)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.045,
                  boxShadow: "0 8px 32px 0 rgba(16,185,129,0.12)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  delay: 0.7 + i * 0.09,
                }}
              >
                <span className="text-lg font-bold mb-1">{dept.name}</span>
                <span className="text-2xl font-extrabold mb-1">
                  {dept.avg.toFixed(2)}
                </span>
                <span className="text-sm font-medium flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  {dept.trend} last 6 months
                </span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="rounded-3xl border border-emerald-100 shadow-2xl bg-white/80 backdrop-blur-lg p-6 md:p-10"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 1.1 }}
          >
            <motion.div
              className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, delay: 1.18 }}
            >
              <motion.h2
                className="text-xl font-bold text-emerald-900"
                initial={false}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Trends Over Time
              </motion.h2>
              <div className="flex gap-4">
                {mockData.datasets.map((ds) => (
                  <motion.span
                    key={ds.label}
                    className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold border"
                    style={{
                      background: ds.backgroundColor,
                      color: ds.borderColor,
                      borderColor: ds.borderColor,
                    }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ background: ds.borderColor }}
                    ></span>
                    {ds.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <Line data={mockData} options={options} height={340} />
          </motion.div>
        </div>
      </motion.div>
    </BgGradient>
  );
}
