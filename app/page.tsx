import Hero from "@/components/Hero";
import { Navbar } from "@/components/common/Navbar";

export default function Home() {
  return (
    <div>
      <div className="fixed  top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <Hero />

      <Hero />
      <Hero />
    </div>
  );
}
