"use client";
import { Mail } from "lucide-react";
import BgGradient from "./common/BgGradient";
import GlassButton from "./ui/GlassButton";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form submitted with email:", email);
  }
  return (
    <BgGradient>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between  min-h-[90vh] px-0 sm:px-48 md:px-72 lg:px-92 ">
        <div className="flex flex-col gap-2 ">
          <div>
            <h1 className="font-extrabold text-4xl">
              Built for HRs <br />
              Designed for Teams
            </h1>
          </div>
          <div className="pt-4">
            <p className="text-md w-[30vw]">
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
        <div>Hi</div>
      </div>
    </BgGradient>
  );
}
