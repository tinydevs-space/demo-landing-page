import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import heroImg from "../assets/hero1.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative"
    >
      {/* 🌿 Gradient overlay for contrast */}
      {/* 🌿 Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-bg/10" />

      {/* 🌿 Grain Texture Overlay */}
      <div className="bg-grain" />

      {/* content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg mb-3 sm:mb-6 tracking-tight px-4"
        >
          Wellness Begins Within
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-bg/95 drop-shadow-md leading-relaxed font-light px-4"
        >
          Discover calm and balance through <span className="text-accent font-bold text-xl sm:text-3xl md:text-4xl glow-text align-middle px-1">EverGlow</span> — your path to inner wellness and outer radiance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 sm:mt-10 md:mt-12"
        >
          <Link
            to="cta"
            smooth={true}
            duration={600}
            offset={-80}
            className="btn-premium inline-block cursor-pointer text-sm sm:text-lg"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
