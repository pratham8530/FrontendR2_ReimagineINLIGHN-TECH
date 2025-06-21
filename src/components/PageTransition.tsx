import React from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  direction: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, direction }) => {
  // Animation variants for the page
  const pageVariants = {
    initial: (dir: string) => ({
      x: dir === "right" ? "50%" : "-50%",
      scale: 1.1,
      opacity: 0,
    }),
    animate: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 20, duration: 0.3 },
        scale: { duration: 0.4, ease: "easeOut" },
        opacity: { duration: 0.4, ease: "easeOut" },
      },
    },
    exit: (dir: string) => ({
      x: dir === "right" ? "-50%" : "50%",
      scale: 0.9,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 20, duration: 0.3 },
        scale: { duration: 0.4, ease: "easeOut" },
        opacity: { duration: 0.4, ease: "easeOut" },
      },
    }),
  };

  // Gradient wave overlay variants
  const overlayVariants = {
    initial: {
      opacity: 1,
      background: "linear-gradient(90deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%)",
      x: direction === "right" ? "-100%" : "100%",
    },
    animate: {
      opacity: 0,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 1,
      x: direction === "right" ? "100%" : "-100%",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Child animation variants for staggered entrance
  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
      className="absolute top-0 left-0 w-full min-h-screen pt-[80px] lg:pt-[96px]"
    >
      {/* Gradient wave overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      {/* Content with staggered children */}
      <motion.div
        variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
        initial="initial"
        animate="animate"
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={childVariants}>{child}</motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;