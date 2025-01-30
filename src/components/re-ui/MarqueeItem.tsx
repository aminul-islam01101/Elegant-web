"use client";
import { motion } from "framer-motion";

type MarqueeProps = {
  children: React.ReactNode;
  speed?: number;
  x: string[];
};

const MarqueeItem: React.FC<MarqueeProps> = ({ children, speed = 10, x }) => {
  const marqueeVariants = {
    animate: {
      x: x,
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
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <motion.div
        className="flex"
        variants={marqueeVariants}
        animate="animate"
        style={{ willChange: "transform" }}
      >
        {/* Duplicate the children for seamless scrolling */}
        <span className="inline-block mr-8 text-[38px] lg:text-[130px] uppercase font-bold  lg:-mt-10">
          {children}
        </span>
        <span className="inline-block mr-8 text-[38px] lg:text-[130px] uppercase font-bold lg:-mt-10">
          {children}
        </span>
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
