import React, { useState } from "react";
import {
  MdOutlinePhone,
  MdOutlineShoppingCartCheckout,
  MdMonitor
} from "react-icons/md";
import Hero from "./Hero";
import BG from "../assets/team-business-colleagues-enjoying-vr-experience.jpg";
import SEQ from "../assets/cropped-favicon.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative min-h-[42rem]">
      <img
        src={BG}
        alt="Background"
        className="absolute inset-0 w-full h-full
      object-cover"
      />
      {/* Overlay for the entire screen */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/30"></div>
      {/* Navigation Bar - now transparent with the hero background showing through */}
      <header className="relative">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              Smart SE
              <span className="text-white inline-flex items-center">
                <img src={SEQ} alt="Seq" className="w-8 h-8 text-white" />
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white border-b-2 border-white font-medium"
            >
              Home
            </a>
            <a href="#" className="text-white/80 hover:text-white transition">
              Pages
            </a>
            <a href="#" className="text-white/80 hover:text-white transition">
              Portfolio
            </a>
            <a href="#" className="text-white/80 hover:text-white transition">
              Blog
            </a>
            <a href="#" className="text-white/80 hover:text-white transition">
              Contacts
            </a>

            <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button> */}

            <div className="hidden lg:flex items-center">
              <div className="bg-indigo-950 rounded-full p-2 mr-2">
                <MdOutlinePhone size={16} className="text-white" />
              </div>
              <span className="text-lg font-semibold text-white">
                1 800 458 56 97
              </span>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full transition">
              Let's talk
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
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

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden bg-black/70 backdrop-blur-sm px-4 pt-2 pb-4">
            <a href="#" className="block py-2 text-white font-medium">
              Home
            </a>
            <a href="#" className="block py-2 text-white/80">
              Pages
            </a>
            <a href="#" className="block py-2 text-white/80">
              Portfolio
            </a>
            <a href="#" className="block py-2 text-white/80">
              Blog
            </a>
            <a href="#" className="block py-2 text-white/80">
              Contacts
            </a>
            <div className="flex items-center mt-4">
              <MdOutlinePhone size={16} className="text-white mr-2" />
              <span className="text-sm font-semibold text-white">
                1 800 458 56 97
              </span>
            </div>
            <button className="mt-4 w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-full">
              Let's talk
            </button>
          </nav>
        )}
      </header>
      <Hero />
    </div>
  );
};

export default Header;
