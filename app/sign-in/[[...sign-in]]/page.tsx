"use client";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { motion } from "motion/react";

function SignInBox() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <SignIn
        redirectUrl="/"
        signUpUrl="/sign-up"
        path="/sign-in"
        routing="path"
      />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="hidden md:flex flex-row h-screen">
        {/* Left Side - Dark Section */}
        <div className="w-3/5 bg-[var(--color-sign-in-bg)] flex flex-col justify-between px-16 py-24">
          {/* Main Content - Centered */}
          <div className="flex-1 flex flex-col justify-center max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <h1 className="text-6xl font-light leading-tight mb-6 ">
                Welcome Back
                <br />
              </h1>
              <p className="text-xl leading-relaxed">
                Let&apos;s Pick Up Where You Left Off .
              </p>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-6">
              <Link
                href="https://twitter.com/vipulsc1"
                className="group"
                aria-label="Follow us on Twitter"
              >
                <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200 ease-in-out">
                  <FaXTwitter className="w-5 h-5" />
                </div>
              </Link>

              <Link
                href="https://linkedin.com/in/vipulsingh14"
                className="group"
                aria-label="Connect with us on LinkedIn"
              >
                <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200 ease-in-out">
                  <FaLinkedin className="w-5 h-5" />
                </div>
              </Link>

              <Link
                href="https://github.com/vipulsc"
                className="group"
                aria-label="View our GitHub"
              >
                <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200 ease-in-out">
                  <FaGithub className="w-5 h-5" />
                </div>
              </Link>
            </div>

            <p className="text-sm">© 2025 harmY, Inc. All Rights Reserved.</p>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <motion.div className="w-2/5 flex heroBg6 sm:heroBg1 md:heroBg2 lg:heroBg3 justify-center items-center relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div>
            <SignInBox />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col h-screen bg-[var(--color-sign-in-bg)] relative">
        {/* Mobile Header */}
        <div className="flex items-center justify-center pt-8 pb-4 mt-8">
          <h1 className="text-2xl font-bold ml-2"> harmY</h1>
        </div>

        {/* Mobile Sign In */}
        <div className="flex-1 flex items-center justify-center px-10 py-16">
          <SignInBox />
        </div>

        {/* Mobile Footer */}
        <div className="pb-8 px-4">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-6">
              <Link
                href="https://twitter.com/vipulsc1"
                className="group"
                aria-label="Follow us on Twitter"
              >
                <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200 ease-in-out">
                  <FaXTwitter className="w-5 h-5" />
                </div>
              </Link>

              <Link
                href="https://linkedin.com/in/vipulsingh14"
                className="group"
                aria-label="Connect with us on LinkedIn"
              >
                <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200 ease-in-out">
                  <FaLinkedin className="w-5 h-5" />
                </div>
              </Link>

              <Link
                href="https://github.com/vipulsc"
                className="group"
                aria-label="View our GitHub"
              >
                <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200 ease-in-out">
                  <FaGithub className="w-5 h-5" />
                </div>
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              © 2025 harmY, Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
