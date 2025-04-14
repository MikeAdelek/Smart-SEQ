import React, { useState } from "react";
import {
  MdOutlinePhone,
  MdOutlineShoppingCartCheckout,
  MdMonitor
} from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";

const Hero = () => {
  return (
    <main className="relative flex items-center min-h-[42rem]">
      <div className="container mx-auto px-6 py-14 md:max-w-3xl lg:max-w-4xl text-center md:text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Turning Creative Ideas <br />
          into Success
        </h1>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto md:mx-0">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
          magna aliqua quis nostrud exerc.
        </p>
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-3 px-8 rounded-full transition">
          Discover Now
        </button>
      </div>

      {/* Floating action buttons */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 mr-2">
        <button className="bg-indigo-950 p-4 text-white">
          <MdOutlineShoppingCartCheckout size={20} />
        </button>
        <button className="bg-indigo-950 p-4 text-white">
          <LuMessageCircleMore size={20} />
        </button>
        <button className="bg-indigo-950 p-4 text-white">
          <MdMonitor size={20} />
        </button>
      </div>

      {/* Wave overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          fill="#ffffff"
        >
          <path d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
    </main>
  );
};

export default Hero;
