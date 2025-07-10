"use client";
import { Mail } from "lucide-react";
import BgGradient from "./common/BgGradient";
import GlassButton from "./ui/GlassButton";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
  const [email, setEmail] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form submitted with email:", email);
  }
  return (
    <BgGradient>
      <motion.div
        key="hero-section"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex flex-col mt-20 sm:pt-10 sm:flex-row items-center justify-center sm:justify-between min-h-[80vh] px-4 sm:px-12 md:px-20 lg:px-32 xl:px-48 2xl:px-64">
          <div className="flex flex-col gap-2 ">
            <div>
              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl leading-tight">
                Built for HRs <br />
                Designed for Teams
              </h1>
            </div>
            <div className="pt-4">
              <p className="text-md max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                From performance insights to people management empower your HR
                workflow with one powerful, elegant dashboard.
              </p>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className={`flex flex-col gap-3 w-full max-w-sm  transition duration-500 
        }`}
              >
                {/* Email */}
                <div className="flex items-center gap-2 bg-[#ecfdf5] px-4 py-3 rounded-lg border border-[#065f46]/50">
                  <Mail className="w-4 h-4" />
                  <input
                    type="email"
                    placeholder="Address email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-transparent w-full outline-none  placeholder:text-[--text-primary]/40"
                  />
                </div>
                <GlassButton type="submit" size="lg">
                  Book Demo
                </GlassButton>
              </form>
            </div>
          </div>
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-[5/4] mt-8 sm:mt-0">
            <Image
              src="/image.png"
              alt="Hero Card"
              fill
              style={{ objectFit: "contain" }}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
            />
          </div>
        </div>

        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent " />
      </motion.div>
    </BgGradient>
  );
}
