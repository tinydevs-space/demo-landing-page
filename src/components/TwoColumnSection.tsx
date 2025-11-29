import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface TwoColumnSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  reverse?: boolean;
  children?: ReactNode;
}

const TwoColumnSection: FC<TwoColumnSectionProps> = ({
  id,
  title,
  subtitle,
  image,
  reverse = false,
  children,
}) => {
  return (
    <section
      id={id}
      className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-bg text-text"
    >
      {/* 🌿 Background Blobs */}
      <div className="blob bg-primary-light/20 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="blob bg-accent/10 w-80 h-80 rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3 blur-3xl animation-delay-2000" />

      <div
        className={`container section-container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10 ${reverse ? "md:flex-row-reverse" : ""
          }`}
      >
        {/* Text Column fade in */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-5/12"
        >
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4 sm:mb-6 tracking-tight leading-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg sm:text-xl text-text-light mb-6 sm:mb-8 max-w-md mx-auto md:mx-0 font-light">
              {subtitle}
            </p>
          )}
          <div className="text-text text-base sm:text-lg leading-relaxed font-body">
            {children}
          </div>
        </motion.div>

        {/* Image Column fade in */}
        {image && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-7/12 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 scale-105 z-0" />
              <img
                src={image}
                alt={title || "EverGlow section image"}
                className="relative z-10 rounded-2xl shadow-2xl max-w-[90%] md:max-w-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TwoColumnSection;
