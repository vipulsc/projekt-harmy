import Hero from "@/components/Hero";
import Section from "@/components/Feature";
import LogoStrip from "@/components/LogoStrip";
import Price from "@/components/Price";
import FinishQuote from "@/components/FinishQuote";
export default function Home() {
  return (
    <div>
      <Hero />
      <LogoStrip />
      <Section />
      <Price />
      <FinishQuote />
    </div>
  );
}
