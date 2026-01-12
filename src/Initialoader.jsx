


import React from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const InitialLoader = () => {
  return (
    <div className="relative h-screen">
      <AnimatedBackground/>
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 flex flex-col items-center justify-center 
                 bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_35%,rgba(15,11,87,100)_100%)]
                 z-50"
    >
      {/* Spinner */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="w-20 h-20 border-4 border-white border-t-transparent rounded-full"
      />

      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide text-center"
      >
        Loading your experience...
      </motion.h1>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "80%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-1 mt-6 bg-white/80 rounded-full overflow-hidden w-3/4 sm:w-1/2"
      />
    </motion.div>
    </div>
  );
};

export default InitialLoader;

