import React, { Suspense } from "react";
import type { Metadata } from "next";
import { urbanist } from "@/font";
import "./globals.css";
import Loader from "@/components/common/Loader";
import RouteLoader from "@/components/common/RouteLoader";
import { Navbar } from "@/components/common/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export const metadata: Metadata = {
  title: "harmY",
  description: "Built for HRs, Designed for Teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [neobrutalism],
      }}
    >
      <html lang="en">
        <body className={`${urbanist.variable} antialiased`}>
          <RouteLoader />
          <Navbar />
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
