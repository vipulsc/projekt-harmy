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
  // Create multiple duplicates for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="flex items-center bg-[#ecfdf5] text-emerald-950 justify-between px-40 gap-4 h-[20vh]">
      <div className="text-2xl  font-bold">
        Trusted By <br />
        <span className="text-2xl font-bold">20000 +</span>
      </div>

      {/* <div className="text-emerald-600 text-9xl mx-8">|</div> */}
      <div className="bg-emerald-600 w-0.5 h-30 mx-8"></div>

      <div className="flex-1 overflow-hidden py-8">
        <motion.div
          className="flex gap-12 items-center"
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
              className="flex items-center gap-3 px-6 py-3  rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-max whitespace-nowrap"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={100}
                height={100}
                className="w-30 h-10 object-contain"
              />
              <span className={`font-semibold text-lg ${company.color}`}>
                {/* {company.name} */}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
