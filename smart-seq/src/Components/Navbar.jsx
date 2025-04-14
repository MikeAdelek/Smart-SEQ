import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  portfolioOptions,
  agencyOptions,
  pagesOptions,
  blogOptions
} from "../utils/details";

const Navbar = () => {
  // Consolidate all state into a single object
  const [state, setState] = useState({
    // Desktop dropdown states
    homeDropdownOpen: false,
    pagesDropdownOpen: false,
    portfolioDropdownOpen: false,
    blogDropdownOpen: false,
    aboutSubmenuOpen: false,
    singlePortfolioSubmenuOpen: false,
    servicesSubmenuOpen: false,
    toolsSubmenuOpen: false
  });

  // Helper function to update state
  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };
  return (
    <>
      {/* Desktop Navigation - */}
      <nav className="hidden md:flex items-center justify-center space-x-6">
        {/* Home dropdown */}
        <div className="relative">
          <Link
            to="#"
            className="text-white border-b-2 border-white font-medium inline-flex items-center hover:border-b-2 hover:border-white"
            onMouseEnter={() => updateState({ homeDropdownOpen: true })}
            onMouseLeave={() => updateState({ homeDropdownOpen: false })}
          >
            Home
          </Link>
          {/* Home Dropdown Menu */}
          {state.homeDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
              onMouseEnter={() => updateState({ homeDropdownMenu: true })}
              onMouseLeave={() => updateState({ homeDropdownMenu: false })}
            >
              {agencyOptions.map((option, index) => (
                <Link
                  key={index}
                  to={option.to}
                  className={`block px-6 py-4 text-white hover:underline transition ${
                    option.title === "Creative Agency"
                      ? "border-l-2 border-white"
                      : ""
                  }`}
                >
                  {option.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Pages dropdown */}
        <div className="relative">
          <Link
            to="#"
            className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
            onMouseEnter={() => updateState({ pagesDropdownOpen: true })}
            onMouseLeave={() => updateState({ pagesDropdownOpen: false })}
          >
            Pages
          </Link>
          {/* Pages Dropdown Menu */}
          {state.pagesDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
              onMouseEnter={() => updateState({ pagesDropdownOpen: true })}
              onMouseLeave={() => updateState({ pagesDropdownOpen: false })}
            >
              {pagesOptions.map((option, index) => (
                <div key={index} className="relative">
                  <Link
                    to={option.to}
                    className={`flex justify-between items-center px-6 py-4 text-white hover:underline transition`}
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
                  </Link>

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
                        {option.submenuItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.to}
                            className="block px-6 py-4 text-white hover:underline transition"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Portfolio dropdown */}
        <div className="relative">
          <Link
            to="#"
            className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
            onMouseEnter={() => updateState({ portfolioDropdownOpen: true })}
            onMouseLeave={() => updateState({ portfolioDropdownOpen: false })}
          >
            Portfolio
          </Link>
          {/* Portfolio Dropdown Menu */}
          {state.portfolioDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
              onMouseEnter={() => updateState({ portfolioDropdownOpen: true })}
              onMouseLeave={() => updateState({ portfolioDropdownOpen: false })}
            >
              {portfolioOptions.map((option, index) => (
                <div key={index} className="relative">
                  <Link
                    to={option.to}
                    className={`flex justify-between items-center px-6 py-4 text-white hover:underline transition ${
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
                  </Link>

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
                        {option.submenuItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.to}
                            className="block px-6 py-4 text-white hover:underline transition"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Blog dropdown - added to match the image */}
        <div className="relative">
          <Link
            to="#"
            className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
            onMouseEnter={() => updateState({ blogDropdownOpen: true })}
            onMouseLeave={() => updateState({ blogDropdownOpen: false })}
          >
            Blog
          </Link>
          {/* Blog Dropdown Menu */}
          {state.blogDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-full min-w-max bg-indigo-950 rounded-md shadow-lg py-1 z-20"
              onMouseEnter={() => updateState({ blogDropdownOpen: true })}
              onMouseLeave={() => updateState({ blogDropdownOpen: false })}
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
                          <Link
                            to={item.to}
                            className="block text-white/80 hover:text-white py-2"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link
          to="#"
          className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
        >
          Contacts
        </Link>

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
    </>
  );
};

export default Navbar;
