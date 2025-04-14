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
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);
  const [toolsSubmenuOpen, setToolsSubmenuOpen] = useState(false);
  const [singlePortfolioSubmenuOpen, setSinglePortfolioSubmenuOpen] =
    useState(false);

  // Mobile menu state
  const [mobileHomeDropdown, setMobileHomeDropdown] = useState(false);
  const [mobilePagesDropdown, setMobilePagesDropdown] = useState(false);
  const [mobilePortfolioDropdown, setMobilePortfolioDropdown] = useState(false);
  const [mobileBlogDropdown, setMobileBlogDropdown] = useState(false);
  const [mobileAboutSubmenu, setMobileAboutSubmenu] = useState(false);
  const [mobileServicesSubmenu, setMobileServicesSubmenu] = useState(false);
  const [mobileToolsSubmenu, setMobileToolsSubmenu] = useState(false);
  const [mobileSinglePortfolioSubmenu, setMobileSinglePortfolioSubmenu] =
    useState(false);

  const agencyOptions = [
    { title: "SEO Company", link: "#" },
    { title: "Marketing Agency", link: "#" },
    { title: "Creative Agency", link: "#" },
    { title: "Advertising Agency", link: "#" }
  ];

  const pagesOptions = [
    {
      title: "About",
      link: "#",
      hasSubmenu: true,
      submenuItems: [
        { title: "About – Agency", link: "#" },
        { title: "About – Personal", link: "#" }
      ]
    },
    {
      title: "Services",
      link: "#",
      hasSubmenu: true,
      submenuItems: []
    },
    { title: "Our Team", link: "#" },
    { title: "FAQ", link: "#" },
    { title: "Pricing", link: "#" },
    {
      title: "Tools",
      link: "#",
      hasSubmenu: true,
      submenuItems: []
    }
  ];

  const portfolioOptions = [
    { title: "Portfolio 1", link: "#" },
    { title: "Portfolio 2", link: "#" },
    { title: "Portfolio 3", link: "#" },
    { title: "Portfolio 4", link: "#" },
    { title: "Portfolio 5", link: "#" },
    { title: "Portfolio 6", link: "#" },
    {
      title: "Single Portfolio",
      link: "#",
      hasSubmenu: true,
      submenuItems: [
        { title: "Style 1", link: "#" },
        { title: "Style 2", link: "#" },
        { title: "Style 3", link: "#" },
        { title: "Style 4", link: "#" },
        { title: "Style 5", link: "#" }
      ]
    }
  ];

  const blogOptions = [
    {
      title: "Blog Styles 1",
      link: "#",
      hasSubmenu: true,
      submenuItems: [
        { title: "Blog Standard", link: "#" },
        { title: "Blog List", link: "#" },
        { title: "Masonry 2 Columns", link: "#" },
        { title: "Masonry 3 Columns", link: "#" },
        { title: "Masonry 4 Columns", link: "#" }
      ]
    },
    {
      title: "Blog Styles 2",
      link: "#",
      hasSubmenu: true,
      submenuItems: [
        { title: "Blog Grid 3 Columns", link: "#" },
        { title: "Blog Grid 4 Columns", link: "#" },
        { title: "Blog Portfolio 3 Columns", link: "#" },
        { title: "Blog Portfolio 4 Columns", link: "#" }
      ]
    },
    {
      title: "Single Post",
      link: "#",
      hasSubmenu: true,
      submenuItems: [
        { title: "Style 1", link: "#" },
        { title: "Style 2", link: "#" },
        { title: "Style 3", link: "#" },
        { title: "Video Post", link: "#" },
        { title: "Audio Post", link: "#" },
        { title: "With Sidebar", link: "#" }
      ]
    }
  ];

  return (
    <div className="relative min-h-[42rem]">
      <img
        src={BG}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
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
            {/* Home dropdown */}
            <div className="relative">
              <a
                href="#"
                className="text-white border-b-2 border-white font-medium inline-flex items-center hover:border-b-2 hover:border-white"
                onMouseEnter={() => setHomeDropdownOpen(true)}
                onMouseLeave={() => setHomeDropdownOpen(false)}
              >
                Home
              </a>
              {/* Home Dropdown Menu */}
              {homeDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
                  onMouseEnter={() => setHomeDropdownOpen(true)}
                  onMouseLeave={() => setHomeDropdownOpen(false)}
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
                onMouseEnter={() => setPagesDropdownOpen(true)}
                onMouseLeave={() => setPagesDropdownOpen(false)}
              >
                Pages
              </a>
              {/* Pages Dropdown Menu */}
              {pagesDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
                  onMouseEnter={() => setPagesDropdownOpen(true)}
                  onMouseLeave={() => setPagesDropdownOpen(false)}
                >
                  {pagesOptions.map((option, index) => (
                    <div key={index} className="relative">
                      <a
                        href={option.link}
                        className={`flex justify-between items-center px-6 py-4 text-white hover:bg-indigo-900 transition`}
                        onMouseEnter={() => {
                          if (option.title === "About")
                            setAboutSubmenuOpen(true);
                          if (option.title === "Services")
                            setServicesSubmenuOpen(true);
                          if (option.title === "Tools")
                            setToolsSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          if (option.title === "About")
                            setAboutSubmenuOpen(false);
                          if (option.title === "Services")
                            setServicesSubmenuOpen(false);
                          if (option.title === "Tools")
                            setToolsSubmenuOpen(false);
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
                        aboutSubmenuOpen &&
                        option.submenuItems.length > 0 && (
                          <div
                            className="absolute left-full top-0 w-64 bg-indigo-950 rounded-md shadow-lg py-1"
                            onMouseEnter={() => setAboutSubmenuOpen(true)}
                            onMouseLeave={() => setAboutSubmenuOpen(false)}
                          >
                            {option.submenuItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.link}
                                className="block px-6 py-4 text-white hover:bg-indigo-900 transition"
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

            {/* Portfolio dropdown */}
            <div className="relative">
              <a
                href="#"
                className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
                onMouseEnter={() => setPortfolioDropdownOpen(true)}
                onMouseLeave={() => setPortfolioDropdownOpen(false)}
              >
                Portfolio
              </a>
              {/* Portfolio Dropdown Menu */}
              {portfolioDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-indigo-950 rounded-md shadow-lg py-1 z-20"
                  onMouseEnter={() => setPortfolioDropdownOpen(true)}
                  onMouseLeave={() => setPortfolioDropdownOpen(false)}
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
                            setSinglePortfolioSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          if (option.title === "Single Portfolio")
                            setSinglePortfolioSubmenuOpen(false);
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
                        singlePortfolioSubmenuOpen &&
                        option.submenuItems.length > 0 && (
                          <div
                            className="absolute left-full top-0 w-64 bg-indigo-950 rounded-md shadow-lg py-1"
                            onMouseEnter={() =>
                              setSinglePortfolioSubmenuOpen(true)
                            }
                            onMouseLeave={() =>
                              setSinglePortfolioSubmenuOpen(false)
                            }
                          >
                            {option.submenuItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.link}
                                className="block px-6 py-4 text-white hover:bg-indigo-900 transition"
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

            {/* Blog dropdown - added to match the image */}
            <div className="relative">
              <a
                href="#"
                className="text-white/80 hover:text-white hover:border-b-2 hover:border-white transition"
                onMouseEnter={() => setBlogDropdownOpen(true)}
                onMouseLeave={() => setBlogDropdownOpen(false)}
              >
                Blog
              </a>
              {/* Blog Dropdown Menu */}
              {blogDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-full min-w-max bg-indigo-950 rounded-md shadow-lg py-1 z-20"
                  onMouseEnter={() => setBlogDropdownOpen(true)}
                  onMouseLeave={() => setBlogDropdownOpen(false)}
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
            {/* Mobile Home with dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-white font-medium"
                onClick={() => setMobileHomeDropdown(!mobileHomeDropdown)}
              >
                Home
                <svg
                  className={`w-4 h-4 ml-1 transform ${
                    mobileHomeDropdown ? "rotate-180" : ""
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

              {mobileHomeDropdown && (
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
                onClick={() => setMobilePagesDropdown(!mobilePagesDropdown)}
              >
                Pages
                <svg
                  className={`w-4 h-4 ml-1 transform ${
                    mobilePagesDropdown ? "rotate-180" : ""
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

              {mobilePagesDropdown && (
                <div className="pl-4 py-1 bg-indigo-900/50 rounded mt-1 mb-2">
                  {pagesOptions.map((option, index) => (
                    <div key={index}>
                      <button
                        className="flex items-center justify-between w-full py-2 text-white/90 hover:text-white"
                        onClick={() => {
                          if (option.title === "About")
                            setMobileAboutSubmenu(!mobileAboutSubmenu);
                          if (option.title === "Services")
                            setMobileServicesSubmenu(!mobileServicesSubmenu);
                          if (option.title === "Tools")
                            setMobileToolsSubmenu(!mobileToolsSubmenu);
                        }}
                      >
                        {option.title}
                        {option.hasSubmenu && (
                          <svg
                            className={`w-4 h-4 ml-1 transform ${
                              (option.title === "About" &&
                                mobileAboutSubmenu) ||
                              (option.title === "Services" &&
                                mobileServicesSubmenu) ||
                              (option.title === "Tools" && mobileToolsSubmenu)
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
                        mobileAboutSubmenu &&
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
                  setMobilePortfolioDropdown(!mobilePortfolioDropdown)
                }
              >
                Portfolio
                <svg
                  className={`w-4 h-4 ml-1 transform ${
                    mobilePortfolioDropdown ? "rotate-180" : ""
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

              {mobilePortfolioDropdown && (
                <div className="pl-4 py-1 bg-indigo-900/50 rounded mt-1 mb-2">
                  {portfolioOptions.map((option, index) => (
                    <div key={index}>
                      {option.hasSubmenu ? (
                        <>
                          <button
                            className="flex items-center justify-between w-full py-2 text-white/90 hover:text-white"
                            onClick={() =>
                              setMobileSinglePortfolioSubmenu(
                                !mobileSinglePortfolioSubmenu
                              )
                            }
                          >
                            {option.title}
                            <svg
                              className={`w-4 h-4 ml-1 transform ${
                                mobileSinglePortfolioSubmenu ? "rotate-180" : ""
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

                          {mobileSinglePortfolioSubmenu && (
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
                onClick={() => setMobileBlogDropdown(!mobileBlogDropdown)}
              >
                Blog
                <svg
                  className={`w-4 h-4 ml-1 transform ${
                    mobileBlogDropdown ? "rotate-180" : ""
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

              {mobileBlogDropdown && (
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
