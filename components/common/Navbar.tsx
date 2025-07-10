"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import GlassButton from "../ui/GlassButton";
import { usePathname } from "next/navigation";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 bg-emerald-100/20 backdrop-blur-xs transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center px-12 sm:px-24 md:px-32 lg:px-48 py-4 md:py-4 lg:py-6">
        <div className="flex items-center">
          <div className="relative">
            <Link href="/">
              <h1 className="text-2xl font-bold text-gray-800">harmY</h1>
            </Link>
            <div className="absolute -top-1 -right-3 flex gap-1">
              <div className="w-2 h-2 bg-gradient-to-br from-orange-400 to-red-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <motion.div className="hidden md:flex items-center gap-4 md:gap-6">
          <Link
            href="/dashboard"
            className={`text-sm font-medium relative group transition-colors hover:text-emerald-600 ${
              pathname === "/dashboard" ? "text-emerald-600 font-bold" : ""
            }`}
          >
            Dashboard
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link
            href="/bookmark"
            className={`text-sm font-medium relative group transition-colors hover:text-emerald-600 ${
              pathname === "/bookmark" ? "text-emerald-600 font-bold" : ""
            }`}
          >
            Bookmarks
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link
            href="/analytics"
            className={`text-sm font-medium relative group transition-colors hover:text-emerald-600 ${
              pathname === "/analytics" ? "text-emerald-600 font-bold" : ""
            }`}
          >
            Analytics
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
        </motion.div>

        {/* Login Button and Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <GlassButton
            type="submit"
            variant="primary"
            className="cursor-pointer"
          >
            Login
          </GlassButton>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-black/20 backdrop-blur-sm z-40">
          <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl mx-4 mt-4 shadow-2xl overflow-hidden">
            <div className="flex flex-col">
              <Link
                href="/dashboard"
                className={`text-base font-medium py-4 px-6 hover:bg-emerald-50/50 transition-colors border-b border-gray-100/50 ${
                  pathname === "/dashboard" ? "text-emerald-600 font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  Dashboard
                </div>
              </Link>
              <Link
                href="/analytics"
                className={`text-base font-medium py-4 px-6 hover:bg-emerald-50/50 transition-colors border-b border-gray-100/50 ${
                  pathname === "/analytics" ? "text-emerald-600 font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Analytics
                </div>
              </Link>
              <Link
                href="/bookmark"
                className={`text-base font-medium py-4 px-6 hover:bg-emerald-50/50 transition-colors ${
                  pathname === "/bookmark" ? "text-emerald-600 font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Bookmarks
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
