import Hero from "./Hero";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Mobilenavbar from "./Mobilenavbar";
import { MdOutlinePhone } from "react-icons/md";
import SEQ from "../assets/cropped-favicon.webp";
import BG from "../assets/nobody-artwork-studio-with-creativity-equipment.jpg";

const Header = () => {
  // Consolidate all state into a single object
  const [state, setState] = useState({
    // Main menu state
    menuOpen: false
  });

  // Helper function to update state
  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <div className="relative min-h-[90vh] font-display overflow-hidden">
      <img
        src={BG}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for the entire screen */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/30"></div>
      {/* Navigation Bar - now transparent with the hero background showing through */}
      <header className="relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo and Search - Left */}
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-2xl font-bold text-white flex items-center"
              >
                Smart SE
                <span className="inline-flex items-cente text-white">
                  <img
                    src={SEQ}
                    alt="Seq"
                    className="w-8 h-8 text-white font-bold"
                  />
                </span>
              </Link>

              {/* Desktop Navigation - */}
              <Navbar />
            </div>

            {/* Right side - Phone and Button */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="hidden lg:flex items-center">
                <div className="bg-indigo-950 rounded-full p-2 mr-2">
                  <MdOutlinePhone size={16} className="text-white" />
                </div>
                <span className="text-lg font-semibold text-white">
                  1 800 458 56 97
                </span>
              </div>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full transition cursor-pointer">
                Let's talk
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-white"
              onClick={() => updateState({ menuOpen: !state.menuOpen })}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {state.menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Mobilenavbar />
      </header>
      <Hero />
    </div>
  );
};

export default Header;
