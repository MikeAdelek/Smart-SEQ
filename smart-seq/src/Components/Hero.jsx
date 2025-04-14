import React from "react";
import {
  MdOutlinePhone,
  MdOutlineShoppingCartCheckout,
  MdMonitor
} from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="relative min-h-[90vh] font-display">
      <div className="container mx-auto px-6 py-24 md:max-w-3xl lg:max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Turning Creative Ideas <br />
            into Success
          </motion.h1>
          <motion.p
            className="text-lg text-center text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
            magna aliqua quis nostrud exerc.
          </motion.p>
          <motion.button
            className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-3 px-8 rounded-full transition cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Now
          </motion.button>
        </div>
      </div>

      {/* Floating action buttons */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 mr-2">
        <motion.button
          className="bg-indigo-950 p-4 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MdOutlineShoppingCartCheckout size={20} />
        </motion.button>
        <motion.button
          className="bg-indigo-950 p-4 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <LuMessageCircleMore size={20} />
        </motion.button>
        <motion.button
          className="bg-indigo-950 p-4 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MdMonitor size={20} />
        </motion.button>
      </div>

      {/* Wave overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          fill="#ffffff"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
    </main>
  );
};

export default Hero;
