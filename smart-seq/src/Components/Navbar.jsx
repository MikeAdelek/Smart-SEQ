import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import these
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

  // Custom hover handler with delay to prevent quick disappearance
  const handleMouseEnter = (dropdownName) => {
    updateState({ [dropdownName]: true });
  };

  const handleMouseLeave = (dropdownName) => {
    // Use setTimeout to add a small delay before closing
    setTimeout(() => {
      updateState({ [dropdownName]: false });
    }, 3000); // 300ms delay before closing
  };

  return (
    <>
      {/* Desktop Navigation - */}
      <motion.nav
        className="hidden md:flex items-center justify-center space-x-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Home dropdown */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            to="#"
            className="text-white border-b-2 border-white font-medium inline-flex items-center hover:border-b-2 hover:border-white"
            onMouseEnter={() => handleMouseEnter("homeDropdownOpen")}
            onMouseLeave={() => handleMouseLeave("homeDropdownOpen")}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Home
            </motion.span>
          </Link>

          {/* Home Dropdown Menu with AnimatePresence for smooth exit animations */}
          <AnimatePresence>
            {state.homeDropdownOpen && (
              <motion.div
                className="absolute left-0 mt-8 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                onMouseEnter={() => handleMouseEnter("homeDropdownOpen")}
                onMouseLeave={() => handleMouseLeave("homeDropdownOpen")}
              >
                {agencyOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ textDecoration: "underline" }}
                  >
                    <Link
                      to={option.to}
                      className={`block px-6 py-4 text-white transition ${
                        option.title === "Creative Agency" ? "underline" : ""
                      }`}
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {option.title}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

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
              className="absolute left-0 mt-8 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
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
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="#"
            className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
            onMouseEnter={() => handleMouseEnter("portfolioDropdownOpen")}
            onMouseLeave={() => handleMouseLeave("portfolioDropdownOpen")}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Portfolio
            </motion.span>
          </Link>

          {/* Portfolio Dropdown Menu */}
          <AnimatePresence>
            {state.portfolioDropdownOpen && (
              <motion.div
                className="absolute left-0 mt-8 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                onMouseEnter={() => handleMouseEnter("portfolioDropdownOpen")}
                onMouseLeave={() => handleMouseLeave("portfolioDropdownOpen")}
              >
                {portfolioOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.div whileHover={{ textDecoration: "underline" }}>
                      <Link
                        to={option.to}
                        className={`flex justify-between items-center px-6 py-4 text-white transition ${
                          option.title === "Single Portfolio"
                            ? "border-b border-white/20"
                            : ""
                        }`}
                        onMouseEnter={() => {
                          if (option.title === "Single Portfolio")
                            handleMouseEnter("singlePortfolioSubmenuOpen");
                        }}
                        onMouseLeave={() => {
                          if (option.title === "Single Portfolio")
                            handleMouseLeave("singlePortfolioSubmenuOpen");
                        }}
                      >
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {option.title}
                        </motion.span>
                        {option.hasSubmenu && (
                          <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </motion.svg>
                        )}
                      </Link>
                    </motion.div>

                    {/* Single Portfolio Submenu */}
                    <AnimatePresence>
                      {option.title === "Single Portfolio" &&
                        state.singlePortfolioSubmenuOpen &&
                        option.submenuItems.length > 0 && (
                          <motion.div
                            className="absolute left-full top-0 w-64 bg-indigo-950 rounded-md shadow-lg py-1"
                            initial={{ opacity: 0, x: -10, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -10, scale: 0.95 }}
                            transition={{
                              duration: 0.2,
                              type: "spring",
                              stiffness: 300,
                              damping: 20
                            }}
                            onMouseEnter={() =>
                              handleMouseEnter("singlePortfolioSubmenuOpen")
                            }
                            onMouseLeave={() =>
                              handleMouseLeave("singlePortfolioSubmenuOpen")
                            }
                          >
                            {option.submenuItems.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                                whileHover={{
                                  backgroundColor: "rgba(79, 70, 229, 0.3)"
                                }}
                              >
                                <Link
                                  to={subItem.to}
                                  className="block px-6 py-4 text-white transition"
                                >
                                  <motion.span
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 400
                                    }}
                                  >
                                    {subItem.title}
                                  </motion.span>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Blog dropdown */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="#"
            className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
            onMouseEnter={() => handleMouseEnter("blogDropdownOpen")}
            onMouseLeave={() => handleMouseLeave("blogDropdownOpen")}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Blog
            </motion.span>
          </Link>

          {/* Blog Dropdown Menu */}
          <AnimatePresence>
            {state.blogDropdownOpen && (
              <motion.div
                className="absolute left-0 mt-4 w-full min-w-max bg-indigo-950 rounded-md shadow-lg py-1 z-20"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                onMouseEnter={() => handleMouseEnter("blogDropdownOpen")}
                onMouseLeave={() => handleMouseLeave("blogDropdownOpen")}
              >
                <motion.div
                  className="flex"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {blogOptions.map((category, index) => (
                    <motion.div
                      key={index}
                      className="w-64 p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.h3
                        className="text-lg font-medium text-white mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        {category.title}
                      </motion.h3>
                      <ul className="space-y-2">
                        {category.submenuItems.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + itemIndex * 0.05 }}
                          >
                            <Link
                              to={item.to}
                              className="block text-white/80 hover:underline py-2"
                            >
                              <motion.span
                                initial={{ x: 0 }}
                                whileHover={{
                                  x: 5,
                                  textDecoration: "underline"
                                }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                {item.title}
                              </motion.span>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contacts link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="#"
            className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contacts
            </motion.span>
          </Link>
        </motion.div>

        {/* Search button */}
        <motion.button
          className="hidden md:block p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
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
        </motion.button>
      </motion.nav>
    </>
  );
};

export default Navbar;
