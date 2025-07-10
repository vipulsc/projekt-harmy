import { Employee } from "@/hooks/useDashboard";
import { useBookmarkStore } from "@/store/bookmarks";
import Image from "next/image";
import { Star, StarOff, Mail } from "lucide-react";
import React, { useState } from "react";

export default function EmployeeCard({
  emp,
  onClick,
}: {
  emp: Employee;
  onClick?: () => void;
}) {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarkStore();

  const bookmarked = isBookmarked(emp.id);

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarked) {
      removeBookmark(emp.id);
    } else {
      addBookmark(emp);
    }
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${
          i < rating ? "bg-yellow-400" : "bg-gray-200"
        }`}
      />
    ));
  };

  const getDepartmentColor = (department: string) => {
    const colors = {
      Engineering: "bg-blue-100 text-blue-700",
      Marketing: "bg-purple-100 text-purple-700",
      Sales: "bg-green-100 text-green-700",
      HR: "bg-pink-100 text-pink-700",
      Finance: "bg-orange-100 text-orange-700",
      Design: "bg-indigo-100 text-indigo-700",
    };
    return (
      colors[department as keyof typeof colors] || "bg-gray-100 text-gray-700"
    );
  };

  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative">
      <div
        className="bg-white/70 backdrop-blur-lg border border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 ease-in-out w-full max-w-xs mx-auto p-0 sm:p-0 rounded-3xl relative overflow-visible cursor-pointer flex flex-col items-center gap-0 sm:gap-0 min-h-[360px] shadow-lg"
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
        role={onClick ? "button" : undefined}
        onKeyDown={
          onClick
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") onClick();
              }
            : undefined
        }
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)" }}
      >
        {/* Top Section: Profile Image & Bookmark */}
        <div className="relative w-full flex flex-col items-center pt-8 pb-2">
          <div className="relative mb-2">
            {imgError ? (
              <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full border-4 border-white shadow-xl bg-gray-100 text-gray-400 text-lg font-bold">
                {emp.firstName} {emp.lastName}
              </div>
            ) : (
              <Image
                src={emp.image}
                width={90}
                height={90}
                alt={`${emp.firstName} ${emp.lastName}`}
                className="rounded-full border-4 border-white shadow-xl object-cover bg-gray-100"
                onError={() => setImgError(true)}
              />
            )}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full shadow" />
          </div>
          <button
            onClick={handleBookmarkToggle}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-blue-100 transition-colors duration-200 z-10 shadow"
            aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            {bookmarked ? (
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            ) : (
              <StarOff className="w-5 h-5 text-gray-400 hover:text-yellow-500" />
            )}
          </button>
        </div>

        {/* Middle Section: Name, Department, Email */}
        <div className="flex flex-col items-center px-6 w-full">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-1 tracking-tight">
            {emp.firstName} {emp.lastName}
          </h3>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-2 ${getDepartmentColor(
              emp.department
            )}`}
          >
            {emp.department}
          </span>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Mail className="w-4 h-4 mr-1 text-gray-400" />
            <span className="truncate max-w-[140px]">{emp.email}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent my-2" />

        {/* Bottom Section: Stats */}
        <div className="flex flex-row justify-between items-center w-full px-6 pb-6 pt-2 gap-4">
          <div className="flex flex-col items-center flex-1">
            <span className="text-xs text-gray-400 mb-1">Rating</span>
            <div className="flex items-center gap-1">
              {getRatingStars(emp.rating)}
            </div>
            <span className="text-xs text-gray-500 mt-1">{emp.rating}/5</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-xs text-gray-400 mb-1">Gender</span>
            <span className="text-base font-medium text-gray-700 capitalize mt-2">
              {emp.gender}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
