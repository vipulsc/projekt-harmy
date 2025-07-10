import { Urbanist, Poppins, Unbounded } from "next/font/google";

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-unbounded",
});
