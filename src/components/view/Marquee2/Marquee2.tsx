"use client";
import { motion } from "framer-motion";

const Marquee2: React.FC = () => {
  const items = [
    "Amazing Design",
    "Media Solutions",
    "Brand Growth",
    "Focused Media",
  ];
  const speed = 12; 

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#121212] relative w-full border-t-2 border-b-2 border-red-600 py-2">
      <motion.div
        className="flex items-center"
        variants={marqueeVariants}
        animate="animate"
        style={{ willChange: "transform" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-2 text-white text-lg uppercase font-semibold tracking-wider"
          >
            <span>{item}</span>
            <span className="mx-20 text-white text-xl">✴</span>
          </div>
        ))}
        {/* Duplicate the content for seamless scrolling */}
        {items.map((item, index) => (
          <div
            key={`dup-${index}`}
            className="flex items-center mx-2 text-white text-lg uppercase font-semibold tracking-wider"
          >
            <span>{item}</span>
            <span className="mx-20 text-white text-xl">✴</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee2;
