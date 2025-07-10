"use client";
import { motion } from "motion/react";
import Image from "next/image";

interface Company {
  name: string;
  logo: string;
  color: string;
}

const companies: Company[] = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    color: "text-white",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    color: "text-white",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    color: "text-white",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    color: "text-white",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    color: "text-white",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    color: "text-white",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    color: "text-white",
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    color: "text-white",
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    color: "text-white",
  },
];

export default function LogoStrip() {
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="py-10">
      <div className="flex flex-col  sm:flex-row items-center bg-[#ecfdf5] text-emerald-950 justify-between px-4 sm:px-40 gap-4 sm:gap-4 h-auto sm:h-[20vh] py-6 sm:py-0">
        <div className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 text-center sm:text-left">
          Trusted By <br />
          <span className="text-xl sm:text-2xl font-bold">20000 +</span>
        </div>

        <div className="bg-emerald-600 w-0.5 h-10 sm:h-30 mx-4 sm:mx-8 hidden sm:block"></div>

        <div className="flex-1 w-full overflow-x-auto sm:overflow-hidden py-4 sm:py-8">
          <motion.div
            className="flex gap-6 sm:gap-12 items-center"
            animate={{
              x: [0, -100 * companies.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{
              width: "max-content",
              willChange: "transform",
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex  items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-max whitespace-nowrap"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={60}
                  height={40}
                  className="w-16 sm:w-30 h-8 sm:h-10 object-contain"
                />
                <span
                  className={`font-semibold text-base sm:text-lg ${company.color}`}
                ></span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
