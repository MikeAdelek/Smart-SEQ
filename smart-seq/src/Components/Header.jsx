import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePhone } from "react-icons/md";
import Hero from "./Hero";
import BG from "../assets/nobody-artwork-studio-with-creativity-equipment.jpg";
import SEQ from "../assets/cropped-favicon.webp";
import {
  portfolioOptions,
  agencyOptions,
  pagesOptions,
  blogOptions
} from "../utils/details";

const Header = () => {
  // Consolidate all state into a single object
  const [state, setState] = useState({
    // Main menu state
    menuOpen: false,

    // Desktop dropdown states
    homeDropdownOpen: false,
    pagesDropdownOpen: false,
    portfolioDropdownOpen: false,
    blogDropdownOpen: false,
    aboutSubmenuOpen: false,
    singlePortfolioSubmenuOpen: false,
    servicesSubmenuOpen: false,
    toolsSubmenuOpen: false,

    // Mobile dropdown states
    mobileHomeDropdown: false,
    mobilePagesDropdown: false,
    mobilePortfolioDropdown: false,
    mobileBlogDropdown: false,
    mobileAboutSubmenu: false,
    mobileServicesSubmenu: false,
    mobileToolsSubmenu: false,
    mobileSinglePortfolioSubmenu: false
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
              <h1 className="text-2xl font-bold text-white flex items-center">
                Smart SE
                <span className="inline-flex items-center">
                  <img src={SEQ} alt="Seq" className="w-8 h-8" />
                </span>
              </h1>

              {/* Desktop Navigation - */}
              <nav className="hidden md:flex items-center justify-center space-x-6">
                {/* Home dropdown */}
                <div className="relative">
                  <a
                    href="#"
                    className="text-white border-b-2 border-white font-medium inline-flex items-center hover:border-b-2 hover:border-white"
                    onMouseEnter={() => updateState({ HomeDropdownOpen: true })}
                    onMouseLeave={() =>
                      updateState({ HomeDropdownOpen: false })
                    }
                  >
                    Home
                  </a>
                  {/* Home Dropdown Menu */}
                  {state.homeDropdownOpen && (
                    <div
                      className="absolute left-0 mt-2 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
                      onMouseEnter={() =>
                        updateState({ homeDropdownMenu: true })
                      }
                      onMouseLeave={() =>
                        updateState({ homeDropdownMenu: false })
                      }
                    >
                      {agencyOptions.map((option, index) => (
                        <a
                          key={index}
                          href={option.link}
                          className={`block px-6 py-4 text-white hover:bg-indigo-900 transition ${
                            option.title === "Creative Agency"
                              ? "border-l-2 border-white"
                              : ""
                          }`}
                        >
                          {option.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pages dropdown */}
                <div className="relative">
                  <a
                    href="#"
                    className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
                    onMouseEnter={() =>
                      updateState({ pagesDropdownOpen: true })
                    }
                    onMouseLeave={() =>
                      updateState({ pagesDropdownOpen: false })
                    }
                  >
                    Pages
                  </a>
                  {/* Pages Dropdown Menu */}
                  {state.pagesDropdownOpen && (
                    <div
                      className="absolute left-0 mt-2 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
                      onMouseEnter={() =>
                        updateState({ pagesDropdownOpen: true })
                      }
                      onMouseLeave={() =>
                        updateState({ pagesDropdownOpen: false })
                      }
                    >
                      {pagesOptions.map((option, index) => (
                        <div key={index} className="relative">
                          <a
                            href={option.link}
                            className={`flex justify-between items-center px-6 py-4 text-white hover:bg-indigo-900 transition`}
                            onMouseEnter={() => {
                              if (option.title === "About")
                                updateState({ aboutSubmenuOpen: true });
                              if (option.title === "Services")
                                updateState({ servicesSubmenuOpen: true });
                              if (option.title === "Tools")
                                updateState({ toolsSubmenuOpen: true });
                            }}
                            onMouseLeave={() => {
                              if (option.title === "About")
                                updateState({ aboutSubmenuOpen: false });
                              if (option.title === "Services")
                                updateState({ servicesSubmenuOpen: false });
                              if (option.title === "Tools")
                                updateState({ toolsSubmenuOpen: false });
                            }}
                          >
                            {option.title}
                            {option.hasSubmenu && (
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            )}
                          </a>

                          {/* About Submenu */}
                          {option.title === "About" &&
                            state.aboutSubmenuOpen &&
                            option.submenuItems.length > 0 && (
                              <div
                                className="absolute left-full top-0 w-64 bg-indigo-950 rounded-md shadow-lg py-1"
                                onMouseEnter={() =>
                                  updateState({ aboutSubmenuOpen: true })
                                }
                                onMouseLeave={() =>
                                  updateState({ aboutSubmenuOpen: false })
                                }
                              >
                                {option.submenuItems.map(
                                  (subItem, subIndex) => (
                                    <a
                                      key={subIndex}
                                      href={subItem.link}
                                      className="block px-6 py-4 text-white hover:bg-indigo-900 transition"
                                    >
                                      {subItem.title}
                                    </a>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Portfolio dropdown */}
                <div className="relative">
                  <a
                    href="#"
                    className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
                    onMouseEnter={() =>
                      updateState({ PortfolioDropdownOpen: true })
                    }
                    onMouseLeave={() =>
                      updateState({ PortfolioDropdownOpen: false })
                    }
                  >
                    Portfolio
                  </a>
                  {/* Portfolio Dropdown Menu */}
                  {state.portfolioDropdownOpen && (
                    <div
                      className="absolute left-0 mt-2 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
                      onMouseEnter={() =>
                        updateState({ PortfolioDropdownOpen: true })
                      }
                      onMouseLeave={() =>
                        updateState({ PortfolioDropdownOpen: false })
                      }
                    >
                      {portfolioOptions.map((option, index) => (
                        <div key={index} className="relative">
                          <a
                            href={option.link}
                            className={`flex justify-between items-center px-6 py-4 text-white hover:bg-indigo-900 transition ${
                              option.title === "Single Portfolio"
                                ? "border-b border-white/20"
                                : ""
                            }`}
                            onMouseEnter={() => {
                              if (option.title === "Single Portfolio")
                                updateState({
                                  singlePortfolioSubmenuOpen: true
                                });
                            }}
                            onMouseLeave={() => {
                              if (option.title === "Single Portfolio")
                                updateState({
                                  singlePortfolioSubmenuOpen: false
                                });
                            }}
                          >
                            {option.title}
                            {option.hasSubmenu && (
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            )}
                          </a>

                          {/* Single Portfolio Submenu */}
                          {option.title === "Single Portfolio" &&
                            state.singlePortfolioSubmenuOpen &&
                            option.submenuItems.length > 0 && (
                              <div
                                className="absolute left-full top-0 w-64 bg-indigo-950 rounded-md shadow-lg py-1"
                                onMouseEnter={() =>
                                  updateState({
                                    singlePortfolioSubmenuOpen: true
                                  })
                                }
                                onMouseLeave={() =>
                                  updateState({
                                    singlePortfolioSubmenuOpen: false
                                  })
                                }
                              >
                                {option.submenuItems.map(
                                  (subItem, subIndex) => (
                                    <a
                                      key={subIndex}
                                      href={subItem.link}
                                      className="block px-6 py-4 text-white hover:bg-indigo-900 transition"
                                    >
                                      {subItem.title}
                                    </a>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Blog dropdown - added to match the image */}
                <div className="relative">
                  <a
                    href="#"
                    className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
                    onMouseEnter={() => updateState({ BlogDropdownOpen: true })}
                    onMouseLeave={() =>
                      updateState({ BlogDropdownOpen: false })
                    }
                  >
                    Blog
                  </a>
                  {/* Blog Dropdown Menu */}
                  {state.blogDropdownOpen && (
                    <div
                      className="absolute left-0 mt-2 w-full min-w-max bg-indigo-950 rounded-md shadow-lg py-1 z-20"
                      onMouseEnter={() =>
                        updateState({ BlogDropdownOpen: true })
                      }
                      onMouseLeave={() =>
                        updateState({ BlogDropdownOpen: false })
                      }
                    >
                      <div className="flex">
                        {blogOptions.map((category, index) => (
                          <div key={index} className="w-64 p-4">
                            <h3 className="text-lg font-medium text-white mb-4">
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {category.submenuItems.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a
                                    href={item.link}
                                    className="block text-white/80 hover:text-white py-2"
                                  >
                                    {item.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
                >
                  Contacts
                </a>

                {/* Search button moved to the left with logo */}
                <button className="hidden md:block p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition">
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

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full transition">
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
        {state.menuOpen && (
          <nav className="md:hidden bg-black/70 backdrop-blur-sm px-4 pt-2 pb-4">
            {/* Mobile Home with dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-white font-medium"
                onClick={() =>
                  updateState({ mobileHomeDropdown: !mobileHomeDropdown })
                }
              >
                Home
                <svg
                  className={`w-4 h-4 ml-1 transform ${
                    state.mobileHomeDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {state.mobileHomeDropdown && (
                <div className="pl-4 py-1 bg-indigo-900/50 rounded mt-1 mb-2">
                  {agencyOptions.map((option, index) => (
                    <a
                      key={index}
                      href={option.link}
                      className={`block py-2 text-white/90 hover:text-white ${
                        option.title === "Creative Agency"
                          ? "border-l-2 border-white pl-2"
                          : ""
                      }`}
                    >
                      {option.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Pages with nested dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-white/80"
                onClick={() =>
                  updateState({ mobilePagesDropdow: !mobilePagesDropdown })
                }
              >
                Pages
                <svg
                  className={`w-4 h-4 ml-1 transform ${
                    state.mobilePagesDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {state.mobilePagesDropdown && (
                <div className="pl-4 py-1 bg-indigo-900/50 rounded mt-1 mb-2">
                  {pagesOptions.map((option, index) => (
                    <div key={index}>
                      <button
                        className="flex items-center justify-between w-full py-2 text-white/90 hover:text-white"
                        onClick={() => {
                          if (option.title === "About")
                            updateState({
                              mobileAboutSubmenu: !mobileAboutSubmenu
                            });
                          if (option.title === "Services")
                            updateState({
                              mobileServicesSubmenu: !mobileServicesSubmenu
                            });
                          if (option.title === "Tools")
                            updateState({
                              mobileToolsSubmenu: !mobileToolsSubmenu
                            });
                        }}
                      >
                        {option.title}
                        {option.hasSubmenu && (
                          <svg
                            className={`w-4 h-4 ml-1 transform ${
                              (option.title === "About" &&
                                state.mobileAboutSubmenu) ||
                              (option.title === "Services" &&
                                state.mobileServicesSubmenu) ||
                              (option.title === "Tools" &&
                                state.mobileToolsSubmenu)
                                ? "rotate-180"
                                : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </button>

                      {/* Mobile About Submenu */}
                      {option.title === "About" &&
                        state.mobileAboutSubmenu &&
                        option.submenuItems.length > 0 && (
                          <div className="pl-4 py-1 bg-indigo-900/30 rounded mt-1 mb-2">
                            {option.submenuItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.link}
                                className="block py-2 text-white/80 hover:text-white"
                              >
                                {subItem.title}
                              </a>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Portfolio with nested dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-white/80"
                onClick={() =>
                  updateState({
                    mobilePortfolioDropdown: !mobilePortfolioDropdown
                  })
                }
              >
                Portfolio
                <svg
                  className={`w-4 h-4 ml-1 transform ${
                    state.mobilePortfolioDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {state.mobilePortfolioDropdown && (
                <div className="pl-4 py-1 bg-indigo-900/50 rounded mt-1 mb-2">
                  {portfolioOptions.map((option, index) => (
                    <div key={index}>
                      {option.hasSubmenu ? (
                        <>
                          <button
                            className="flex items-center justify-between w-full py-2 text-white/90 hover:text-white"
                            onClick={() =>
                              updateState({
                                mobileSinglePortfolioSubmenu:
                                  !mobileSinglePortfolioSubmenu
                              })
                            }
                          >
                            {option.title}
                            <svg
                              className={`w-4 h-4 ml-1 transform ${
                                state.mobileSinglePortfolioSubmenu
                                  ? "rotate-180"
                                  : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          {state.mobileSinglePortfolioSubmenu && (
                            <div className="pl-4 py-1 bg-indigo-900/30 rounded mt-1 mb-2">
                              {option.submenuItems.map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href={subItem.link}
                                  className="block py-2 text-white/80 hover:text-white"
                                >
                                  {subItem.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <a
                          href={option.link}
                          className="block py-2 text-white/90 hover:text-white"
                        >
                          {option.title}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Blog dropdown - added to match the image */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-white/80"
                onClick={() =>
                  updateState({ mobileBlogDropdown: !mobileBlogDropdown })
                }
              >
                Blog
                <svg
                  className={`w-4 h-4 ml-1 transform ${
                    state.mobileBlogDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {state.mobileBlogDropdown && (
                <div className="pl-4 py-1 bg-indigo-900/50 rounded mt-1 mb-2">
                  {blogOptions.map((category, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="font-medium text-white">
                        {category.title}
                      </h3>
                      <ul className="pl-2 mt-1">
                        {category.submenuItems.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a
                              href={item.link}
                              className="block py-1 text-white/80 hover:text-white"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

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
