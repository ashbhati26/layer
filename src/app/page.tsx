import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <div className="overflow-x-clip">
          <Navbar />
          <Hero />
          <LogoTicker />
          <Introduction />
          <Features />
          <Integrations />
          <Faqs />
          <CallToAction />
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}
