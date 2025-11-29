import { FaLeaf, FaHeartbeat, FaSpa } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const features = [
  {
    icon: <FaLeaf className="w-10 h-10 text-primary" />,
    title: "Natural Harmony",
    desc: "Reconnect with your body and mind through nature-inspired wellness practices.",
  },
  {
    icon: <FaHeartbeat className="w-10 h-10 text-primary" />,
    title: "Holistic Health",
    desc: "Discover personalized tools to restore balance, improve focus, and elevate well-being.",
  },
  {
    icon: <FaSpa className="w-10 h-10 text-primary" />,
    title: "Mindful Living",
    desc: "Create daily rituals of calm and clarity with EverGlow’s guided mindfulness approach.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-bg text-text relative overflow-hidden">
      {/* 🌿 Background Blob */}
      <div className="blob bg-accent/5 w-[500px] h-[500px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl -z-10" />

      <div className="container section-container mx-auto px-4 sm:px-6 my-8 sm:my-12 md:px-12 relative z-10">
        <SectionTitle
          title="Our Core Principles"
          subtitle="Guiding you toward balance, wellness, and renewal."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 md:gap-12 mt-8 sm:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-5 sm:p-8 md:p-10 rounded-2xl shadow-sm text-center border border-primary/5 hover:border-primary/30 min-h-[220px] sm:min-h-[320px] md:min-h-[340px] flex flex-col justify-center items-center transition-all duration-300"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(45, 90, 76, 0.1)",
              }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <motion.div
                className="flex justify-center mb-3 sm:mb-6 bg-primary/5 p-3 sm:p-4 rounded-full"
                whileHover={{ rotate: 10, backgroundColor: "rgba(244, 185, 66, 0.1)" }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-heading font-bold text-lg sm:text-2xl mb-2 sm:mb-4 text-primary">
                {feature.title}
              </h3>
              <p className="text-text-light leading-relaxed font-body text-sm sm:text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
