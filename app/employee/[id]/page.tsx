"use client";
import { useEffect, useState } from "react";
import { Info } from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import React from "react";
import { useEmployeeStore } from "@/store/employees";
import { Employee } from "@/store/employees";
import Image from "next/image";

export default function EmployeeProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const { employees, loading, fetchEmployees, getEmployeeById } =
    useEmployeeStore();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    if (employees.length === 0) {
      fetchEmployees();
    }
  }, [fetchEmployees, employees.length]);

  useEffect(() => {
    const emp = getEmployeeById(id);
    setEmployee(emp ?? null);
  }, [employees, id, getEmployeeById]);

  if (loading || !employee) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="text-lg text-gray-500">Loading profile...</div>
      </div>
    );
  }

  // Username from email
  const handle = employee.email ? `@${employee.email.split("@")[0]}` : "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex flex-col items-center py-0 px-0 mt-24">
      {/* Profile Hero */}
      <div className="relative w-full flex flex-col items-center justify-center min-h-[340px] sm:min-h-[400px] bg-gradient-to-br from-blue-200/60 via-white/60 to-emerald-200/60 overflow-visible">
        {/* Profile Image */}
        <div className="relative z-10 flex flex-col items-center mt-20">
          <div className="relative">
            <Image
              src={employee.image}
              alt={`${employee.firstName} ${employee.lastName}`}
              width={192}
              height={192}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white shadow-2xl object-cover bg-gray-100 mx-auto"
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
              priority
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-2 border-white rounded-full shadow" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-1 tracking-tight text-center drop-shadow-lg">
            {employee.firstName} {employee.lastName}
          </h2>
          <span
            className="block mx-auto text-lg sm:text-xl font-extrabold text-gray-900 bg-white/60 backdrop-blur px-4 py-1 rounded-2xl shadow-lg mb-2 max-w-xs sm:max-w-sm text-center break-all border border-blue-100 z-10 outline outline-2 outline-blue-200"
            style={{ wordBreak: "break-all", position: "relative", zIndex: 10 }}
          >
            {handle}
          </span>
          <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-2 bg-blue-100 text-blue-700 shadow">
            {employee.department}
          </span>
        </div>
      </div>
      {/* Info & Bio */}
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center overflow-hidden   z-20 px-6 sm:px-12 pt-24 pb-10 ">
        {/* Stats Row */}
        <div className="w-full flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-6">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <span className="text-gray-500 text-xs uppercase tracking-wider">
              Email
            </span>
            <span className="text-blue-700 font-semibold break-all text-center">
              {employee.email}
            </span>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <span className="text-gray-500 text-xs uppercase tracking-wider">
              Gender
            </span>
            <span className="capitalize text-gray-700 font-semibold">
              {employee.gender}
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
                    i < employee.rating ? "bg-yellow-400" : "bg-gray-200"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">
                {employee.rating}/5
              </span>
            </span>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-2" />
        {/* Bio */}
        <div className="w-full text-left text-gray-700 text-base mb-4 rounded-xl bg-gradient-to-br from-blue-50/60 via-white/80 to-emerald-50/60 p-5 shadow-inner flex flex-col gap-2">
          <span className="font-semibold text-blue-700 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-400" /> Bio:
          </span>
          {employee.bio ? (
            <p className="mt-1 text-gray-600 leading-relaxed">{employee.bio}</p>
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
        <div className="flex gap-2 w-full mt-4">
          <GlassButton
            className="flex-1"
            onClick={() => window.open(`mailto:${employee.email}`)}
            variant="primary"
            size="md"
          >
            Send Email
          </GlassButton>
          {employee.profileUrl && (
            <GlassButton
              className="flex-1"
              onClick={() => window.open(employee.profileUrl, "_blank")}
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
