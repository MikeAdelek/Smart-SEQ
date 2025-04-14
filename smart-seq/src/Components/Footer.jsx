import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agreeToPolicy, setAgreeToPolicy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Email submitted:", email, "Agreed to policy:", agreeToPolicy);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative">
      {/* Smooth wave divider */}
      <div className="w-full overflow-hidden bg-gray-100">
        <svg
          viewBox="0 0 1440 300"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#0f172a" // Dark color that matches the footer
            d="M0,160 C180,220,360,100,540,160 C720,220,900,100,1080,160 C1260,220,1350,180,1440,170 L1440,320 L0,320 Z"
            className="transition-all duration-300"
          />
          <path
            fill="#0f172a"
            opacity="0.7"
            d="M0,200 C180,150,360,240,540,200 C720,160,900,240,1080,200 C1260,160,1350,200,1440,190 L1440,320 L0,320 Z"
            className="transition-all duration-300"
          />
        </svg>
      </div>

      {/* Footer content */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Office Information */}
            <div>
              <h3 className="text-lg font-medium mb-4">Office</h3>
              <p className="text-gray-400">Germany —</p>
              <p className="text-gray-400">785 15th Street, Office 478</p>
              <p className="text-gray-400 mb-4">Berlin, De 81566</p>
              <p className="text-gray-400 mb-4">info@email.com</p>
              <p className="text-white font-medium">+1 840 841 25 69</p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-medium mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-medium mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Dribbble
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-medium mb-4">Newsletter</h3>
              <form onSubmit={handleSubmit}>
                <div className="flex mb-3">
                  {/* <IoIosMail /> */}
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="bg-gray-800 px-4 py-2 rounded-full focus:outline-none w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 flex items-center justify-center"
                  >
                    <GoArrowRight size={20} />
                  </button>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    className="mr-2 text-bg-indigo-950"
                    checked={agreeToPolicy}
                    onChange={() => setAgreeToPolicy(!agreeToPolicy)}
                  />
                  <label
                    htmlFor="privacy-policy"
                    className="text-gray-400 text-sm"
                  >
                    I agree to the{" "}
                    <a href="#" className="underline hover:text-white">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              AxiomThemes © 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
