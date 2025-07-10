"use client";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    function update() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-xs md:text-sm font-mono bg-black/30 rounded px-3 py-1 text-yellow-200 pb-4 md:pb-0 shadow-lg">
      Local Time: {time}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[var(--btn-primary-bg,#059669)] text-white text-sm w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 px-4 py-6">
        <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-auto">
          <span className="font-extrabold text-2xl tracking-tight">harmY</span>
          <span className="text-xs text-emerald-100 max-w-xs text-center md:text-left">
            Modern HR platform for teams who care about people and progress.
          </span>
          <div className="flex gap-3 mt-2">
            <Link
              href="https://twitter.com/vipulsc1"
              aria-label="Twitter"
              className="hover:text-emerald-200 transition"
            >
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/vipulsingh14"
              aria-label="LinkedIn"
              className="hover:text-emerald-200 transition"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/vipulsc"
              aria-label="GitHub"
              className="hover:text-emerald-200 transition"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-row  gap-6 w-full md:w-auto justify-center md:justify-end items-center">
          <div>
            <div className="font-semibold mb-1">Product</div>
            <ul className="space-y-1">
              <li>
                <Link href="/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="hover:underline">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/bookmark" className="hover:underline">
                  Bookmarks
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-1">Company</div>
            <ul className="space-y-1">
              <li>
                <a href="mailto:support@harmy.app" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <span className="text-emerald-100 font-semibold">
                  We are hiring!
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-emerald-100 py-2 border-t border-emerald-700/40">
        © {new Date().getFullYear()} harmY. All rights reserved.
      </div>
      <div className="text-center text-base py-2 font-extrabold text-yellow-400   bg-black">
        Made with Love and Effort by Vipul
      </div>

      <div className="block md:hidden bg-black text-center">
        <LiveClock />
      </div>

      <div className="hidden md:block absolute right-4 bottom-2 z-10">
        <LiveClock />
      </div>
    </footer>
  );
}
