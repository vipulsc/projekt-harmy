"use client";
import { useEffect, useState } from "react";
import { Info, Briefcase, Star, MessageCircle } from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import { useEmployeeStore } from "@/store/employees";
import { Employee } from "@/store/employees";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

// TODO: Replace with real performance data from backend
function getSomePerformance() {
  return [
    {
      year: 2021,
      rating: Math.floor(Math.random() * 5) + 1,
      summary: "Did a great job on the main project.",
    },
    {
      year: 2022,
      rating: Math.floor(Math.random() * 5) + 1,
      summary: "Solid team player, always on time.",
    },
    {
      year: 2023,
      rating: Math.floor(Math.random() * 5) + 1,
      summary: "Helped with migration, went well.",
    },
  ];
}

export default function EmpProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Not the best way to get id, but works for now
  const { id } = React.use(params);
  const { employees, loading, fetchEmployees, getEmployeeById } =
    useEmployeeStore();
  const [emp, setEmp] = useState<Employee | null>(null);
  const [tab, setTab] = useState(0);
  const [perf, setPerf] = useState(getSomePerformance());

  useEffect(() => {
    if (employees.length === 0) fetchEmployees();
  }, [fetchEmployees, employees.length]);

  useEffect(() => {
    const found = getEmployeeById(id);
    setEmp(found ?? null);
    setPerf(getSomePerformance());
  }, [employees, id, getEmployeeById]);

  if (loading || !emp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="text-lg text-gray-500">Loading profile...</div>
      </div>
    );
  }

  const handle = emp.email ? `@${emp.email.split("@")[0]}` : "";
  const addrObj = (emp as unknown as { address?: Record<string, string> })
    .address;
  const addr = addrObj
    ? [
        addrObj.address,
        addrObj.city,
        addrObj.stateCode || addrObj.state,
        addrObj.postalCode,
        addrObj.country,
      ]
        .filter(Boolean)
        .join(", ")
    : "123 Main St, Springfield, USA";
  const phone =
    (emp as unknown as { phone?: string }).phone ?? "+1 (555) 123-4567";

  function badgeForRating(r: number) {
    if (r >= 4) return "bg-green-100 text-green-700";
    if (r === 3) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  }

  const tabContent = [
    <div key="overview" className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-gradient-to-br from-blue-100/60 via-white/80 to-emerald-100/60 p-4 shadow-md border border-blue-100 flex flex-col gap-1">
          <span className="text-gray-500 text-xs uppercase tracking-wider flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-400" /> Address
          </span>
          <div className="text-gray-700 font-medium">{addr}</div>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-blue-100/60 via-white/80 to-emerald-100/60 p-4 shadow-md border border-blue-100 flex flex-col gap-1">
          <span className="text-gray-500 text-xs uppercase tracking-wider flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-400" /> Phone
          </span>
          <div className="text-gray-700 font-medium">{phone}</div>
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-blue-50/60 via-white/80 to-emerald-50/60 p-4 shadow-inner border border-blue-100">
        <span className="text-gray-500 text-xs uppercase tracking-wider flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" /> Past Performance
        </span>
        <ul className="mt-2 space-y-2">
          {perf.map((p) => (
            <li
              key={p.year}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-blue-100 shadow-sm"
            >
              <span
                className={`px-2 py-1 rounded text-xs font-bold ${badgeForRating(
                  p.rating
                )}`}
              >
                {p.rating}★
              </span>
              <span className="font-semibold text-blue-800">{p.year}</span>
              <span className="text-gray-600">{p.summary}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    <div key="projects" className="flex flex-col gap-6">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-200/70 via-white/80 to-blue-100/60 p-5 shadow-lg border-2 border-emerald-300 flex flex-col gap-2 relative overflow-hidden">
        <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          Current Project
        </span>
        <div className="flex items-center gap-3 mb-1">
          <Briefcase className="w-6 h-6 text-emerald-600" />
          <span className="text-lg font-bold text-emerald-800">
            AI-Powered Employee Insights Dashboard
          </span>
        </div>
        <div className="text-gray-700">
          Building a dashboard to provide actionable insights for HR using AI
          and data visualization.
        </div>
        <div className="flex gap-2 mt-2">
          <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-semibold">
            Role: Lead Developer
          </span>
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
            Status: In Progress
          </span>
        </div>
      </div>
      <div>
        <div className="font-semibold text-blue-700 flex items-center gap-2 mb-2">
          <Briefcase className="w-5 h-5 text-blue-400" /> Recent Projects
        </div>
        <ul className="space-y-2">
          <li className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 shadow-sm">
            <span className="font-bold">Harmy HR Portal Revamp</span> – UI/UX
            Lead
          </li>
          <li className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 shadow-sm">
            <span className="font-bold">Onboarding Automation</span> – Backend
            Contributor
          </li>
          <li className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 shadow-sm">
            <span className="font-bold">Employee Wellness App</span> – Project
            Manager
          </li>
        </ul>
      </div>
    </div>,
    <div key="feedback" className="flex flex-col gap-4">
      <div className="font-semibold text-blue-700 flex items-center gap-2 mb-2">
        <MessageCircle className="w-5 h-5 text-yellow-400" /> Recent Feedback
      </div>
      <ul className="space-y-2">
        <li className="p-3 rounded-xl bg-yellow-50/60 border border-yellow-100 shadow-sm">
          <span className="italic">
            &quot;Always ready to help and brings positive energy to the
            team.&quot;
          </span>
        </li>
        <li className="p-3 rounded-xl bg-yellow-50/60 border border-yellow-100 shadow-sm">
          <span className="italic">
            &quot;Consistently delivers high-quality work on time.&quot;
          </span>
        </li>
        <li className="p-3 rounded-xl bg-yellow-50/60 border border-yellow-100 shadow-sm">
          <span className="italic">
            &quot;Great leadership during the migration project.&quot;
          </span>
        </li>
      </ul>
    </div>,
  ];

  return (
    <div className="min-h-screen w-full bg-[#059669]/5 flex flex-col items-center py-12 px-2 sm:px-8 mt-20">
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
        <div className="flex flex-col items-center mt-8 mb-8">
          <Image
            src={emp.image}
            alt={`${emp.firstName} ${emp.lastName}`}
            width={192}
            height={192}
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white shadow-2xl object-cover bg-gray-100 mx-auto ring-4 ring-emerald-200/70 hover:ring-blue-300 transition duration-300"
            style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
            priority
          />
          {/* <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-2 border-white rounded-full shadow-lg animate-pulse" /> */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-1 tracking-tight text-center drop-shadow-lg">
            {emp.firstName} {emp.lastName}
          </h2>
          <span
            className="block mx-auto text-lg sm:text-xl font-extrabold text-gray-900 bg-white/70 backdrop-blur px-4 py-1 rounded-2xl shadow-lg mb-2 max-w-xs sm:max-w-sm text-center break-all border border-blue-100 z-10 outline outline-2 outline-blue-200"
            style={{
              wordBreak: "break-all",
              position: "relative",
              zIndex: 10,
            }}
          >
            {handle}
          </span>
          <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-2 bg-gradient-to-r from-blue-200 via-white to-emerald-200 text-blue-700 shadow border border-blue-100">
            {emp.department}
          </span>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-6">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <span className="text-gray-500 text-xs uppercase tracking-wider">
              Email
            </span>
            <span className="text-blue-700 font-semibold break-all text-center">
              {emp.email}
            </span>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <span className="text-gray-500 text-xs uppercase tracking-wider">
              Gender
            </span>
            <span className="capitalize text-gray-700 font-semibold">
              {emp.gender}
            </span>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <span className="text-gray-500 text-xs uppercase tracking-wider">
              Rating
            </span>
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < emp.rating ? "bg-yellow-400" : "bg-gray-200"
                  }`}
                />
              ))}
              <span
                className={`ml-2 text-xs px-2 py-1 rounded font-bold ${badgeForRating(
                  emp.rating
                )}`}
              >
                {emp.rating}/5
              </span>
            </span>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-100 to-transparent my-8" />
        <div className="w-full text-left text-gray-700 text-base mb-4 rounded-xl bg-gradient-to-br from-blue-50/60 via-white/80 to-emerald-50/60 p-5 shadow-inner flex flex-col gap-2">
          <span className="font-semibold text-blue-700 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-400" /> Bio:
          </span>
          {emp.bio ? (
            <p className="mt-1 text-gray-600 leading-relaxed">{emp.bio}</p>
          ) : (
            <div className="flex flex-col items-start gap-1 mt-2">
              <span className="italic text-gray-400 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-300" />
                This user hasn&apos;t added a bio yet.
              </span>
              <span className="text-emerald-700 font-medium mt-1">
                Every great team member has a story. Stay tuned!
              </span>
            </div>
          )}
        </div>
        <div className="w-full mt-10">
          <div className="flex border-b border-emerald-100/60 mb-6 bg-gradient-to-r from-blue-50/60 via-white/80 to-emerald-50/60 rounded-t-3xl">
            {["Overview", "Projects", "Feedback"].map((tabName, idx) => (
              <button
                key={tabName}
                className={`px-6 py-3 text-base font-semibold focus:outline-none transition border-b-2 ${
                  tab === idx
                    ? "border-blue-500 text-blue-700 bg-white/80 shadow"
                    : "border-transparent text-gray-400 hover:text-blue-500 hover:bg-blue-50/40"
                } rounded-t-2xl`}
                onClick={() => setTab(idx)}
              >
                {tabName}
              </button>
            ))}
          </div>
          <div className="min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {tabContent[tab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-100 to-transparent my-8" />
        <div className="flex gap-6 w-full mt-4">
          <GlassButton
            className="flex-1"
            onClick={() => window.open(`mailto:${emp.email}`)}
            variant="primary"
            size="md"
          >
            Send Email
          </GlassButton>
          {emp.profileUrl && (
            <GlassButton
              className="flex-1"
              onClick={() => window.open(emp.profileUrl, "_blank")}
              variant="secondary"
              size="md"
            >
              View LinkedIn
            </GlassButton>
          )}
        </div>
      </div>
    </div>
  );
}
