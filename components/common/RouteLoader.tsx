"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const minDuration = 500; // ms
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setLoading(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setLoading(false);
        timeoutRef.current = null;
      }, minDuration);
      prevPath.current = pathname;
    }
    // Clean up on unmount{important hai}
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname]);

  if (!loading) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999 }}>
      <Loader />
    </div>
  );
}
