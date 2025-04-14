import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  portfolioOptions,
  agencyOptions,
  pagesOptions,
  blogOptions
} from "../utils/details";

const Mobilenavbar = () => {
  // Consolidate all state into a single object
  const [state, setState] = useState({
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

  return (
    <>
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
                    <h3 className="font-medium text-white">{category.title}</h3>
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
    </>
  );
};

export default Mobilenavbar;
