import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import CTA from "./sections/CTA";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#3D3D3D] font-sans">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
