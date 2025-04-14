import { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { MdOutlineShoppingCartCheckout, MdMonitor } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { motion } from "framer-motion";
import AboutImage1 from "../assets/about1.png";
import AboutImage2 from "../assets/about2.png";

const AboutSection = () => {
  // State to track if back to top button should be visible
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Function to handle scrolling back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Show button when user scrolls down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-sans bg-gray-100 min-h-screen relative z-50">
      {/* Small dot navigation indicator at top */}
      <motion.div
        className="flex justify-center pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-2 w-2 bg-black rounded-full"></div>
      </motion.div>

      {/* Main content section */}
      <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Overlapping images */}
          <div className="w-full md:w-1/2 relative mb-12 md:mb-0">
            {/* First image (person in orange) */}
            <motion.div
              className="rounded-3xl overflow-hidden shadow-lg max-w-sm"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
              }}
            >
              <img
                src={AboutImage1}
                alt="Person in orange top"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Second image (person with laptop) - positioned to overlap */}
            <motion.div
              className="rounded-3xl overflow-hidden shadow-lg max-w-sm absolute top-1/4 left-1/4 md:top-1/3 md:left-1/3"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5
              }}
            >
              <img
                src={AboutImage2}
                alt="Person working on laptop"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right side - Text content */}
          <motion.div
            className="w-full md:w-1/2 md:pl-12"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="uppercase text-sm font-semibold tracking-wide text-gray-700 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              CREATIVE AGENCY
            </motion.p>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-indigo-950 leading-tight mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We help your
              <br />
              business grow
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia.
            </motion.p>

            {/* Feature 1 */}
            <motion.div
              className="flex items-start mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="bg-gray-200 p-3 rounded-lg mr-4"
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46.749"
                  height="49.086"
                  viewBox="0 0 46.749 49.086"
                >
                  <g id="Layer_25" transform="translate(0 0.001)">
                    <path
                      id="Path_29216"
                      data-name="Path 29216"
                      d="M29.712,32.049H5.558A1.558,1.558,0,0,1,4,30.491V5.558A1.558,1.558,0,0,1,5.558,4H29.712A1.558,1.558,0,0,1,31.27,5.558V30.491A1.558,1.558,0,0,1,29.712,32.049Z"
                      transform="translate(-3.221 -3.222)"
                      fill="#f6b9c3"
                    ></path>
                    <ellipse
                      id="Ellipse_1292"
                      data-name="Ellipse 1292"
                      cx="7.853"
                      cy="7.853"
                      rx="7.853"
                      ry="7.853"
                      transform="translate(17.949 17.949)"
                      fill="#c9a9d1"
                    ></ellipse>
                    <g
                      id="Group_12756"
                      data-name="Group 12756"
                      transform="translate(10.096 6.731)"
                    >
                      <ellipse
                        id="Ellipse_1293"
                        data-name="Ellipse 1293"
                        cx="3.365"
                        cy="3.365"
                        rx="3.365"
                        ry="3.365"
                        transform="translate(29.167 0)"
                        fill="#fbe398"
                      ></ellipse>
                      <ellipse
                        id="Ellipse_1294"
                        data-name="Ellipse 1294"
                        cx="3.365"
                        cy="2.805"
                        rx="3.365"
                        ry="2.805"
                        transform="translate(0 32.533)"
                        fill="#fbe398"
                      ></ellipse>
                      <circle
                        id="Ellipse_1295"
                        data-name="Ellipse 1295"
                        cx="4.487"
                        cy="4.487"
                        r="4.487"
                        transform="translate(24.68 32.533)"
                        fill="#fbe398"
                      ></circle>
                    </g>
                    <path
                      id="Path_29217"
                      data-name="Path 29217"
                      d="M29.712,4H5.558A1.558,1.558,0,0,0,4,5.558v4.675H31.27V5.558A1.558,1.558,0,0,0,29.712,4Z"
                      transform="translate(-3.221 -3.222)"
                      fill="#c9a9d1"
                    ></path>
                    <path
                      id="Path_29218"
                      data-name="Path 29218"
                      d="M9,16H28.479v6.233H9Z"
                      transform="translate(-4.325 -5.872)"
                      fill="#fffad9"
                    ></path>
                    <g
                      id="Group_12758"
                      data-name="Group 12758"
                      transform="translate(0 -0.001)"
                    >
                      <g id="Group_12757" data-name="Group 12757">
                        <path
                          id="Path_29219"
                          data-name="Path 29219"
                          d="M39.632,27.512a8.567,8.567,0,1,0,0,12.121A8.581,8.581,0,0,0,39.632,27.512ZM28.613,38.53a7.013,7.013,0,1,1,9.917,0,7.021,7.021,0,0,1-9.917,0Z"
                          transform="translate(-7.86 -7.86)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29220"
                          data-name="Path 29220"
                          d="M35.072,30.8l-.551.551a.779.779,0,0,0,1.1,1.1l.551-.551a1.6,1.6,0,0,1,2.2,0,1.557,1.557,0,0,1,0,2.2l-.551.551a.779.779,0,1,0,1.1,1.1l.551-.551a3.115,3.115,0,0,0,0-4.407,3.189,3.189,0,0,0-4.407,0Z"
                          transform="translate(-9.911 -8.945)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29221"
                          data-name="Path 29221"
                          d="M34.648,37.826l-.551.551a1.6,1.6,0,0,1-2.2,0,1.559,1.559,0,0,1,0-2.2l.551-.551a.779.779,0,1,0-1.1-1.1l-.551.551A3.116,3.116,0,1,0,35.2,39.479l.551-.551a.779.779,0,1,0-1.1-1.1Z"
                          transform="translate(-8.936 -9.911)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29222"
                          data-name="Path 29222"
                          d="M33.107,37.514a.779.779,0,0,0,1.1,0l3.305-3.305a.779.779,0,0,0-1.1-1.1l-3.305,3.305A.778.778,0,0,0,33.107,37.514Z"
                          transform="translate(-9.599 -9.599)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29223"
                          data-name="Path 29223"
                          d="M19.362,31.828a.779.779,0,0,0-.779-.779H5.337a.78.78,0,0,1-.779-.779V10.791h18.7a.779.779,0,0,0,0-1.558H4.558v-3.9a.78.78,0,0,1,.779-.779H29.491a.779.779,0,0,1,.779.779v3.9h-3.9a.779.779,0,1,0,0,1.558h3.9v7.791a.779.779,0,1,0,1.558,0V5.337A2.34,2.34,0,0,0,29.491,3H5.337A2.34,2.34,0,0,0,3,5.337V30.27a2.34,2.34,0,0,0,2.337,2.337H18.583A.779.779,0,0,0,19.362,31.828Z"
                          transform="translate(-3 -3)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29224"
                          data-name="Path 29224"
                          d="M6.779,7a.779.779,0,1,0,0,1.558h7.791a.779.779,0,0,0,0-1.558Z"
                          transform="translate(-3.663 -3.883)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29225"
                          data-name="Path 29225"
                          d="M28.258,20.454a.779.779,0,0,0,.779-.779v-3.9A.779.779,0,0,0,28.258,15H8.779A.779.779,0,0,0,8,15.779v6.233a.779.779,0,0,0,.779.779h14.8a.779.779,0,1,0,0-1.558H9.558V16.558h17.92v3.117A.779.779,0,0,0,28.258,20.454Z"
                          transform="translate(-4.104 -5.65)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29226"
                          data-name="Path 29226"
                          d="M10.779,29.558h4.675a.779.779,0,0,0,0-1.558H10.779a.779.779,0,0,0,0,1.558Z"
                          transform="translate(-4.546 -8.521)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29227"
                          data-name="Path 29227"
                          d="M10.779,32.558h4.675a.779.779,0,1,0,0-1.558H10.779a.779.779,0,1,0,0,1.558Z"
                          transform="translate(-4.546 -9.184)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29228"
                          data-name="Path 29228"
                          d="M10.779,35.558h7.012a.779.779,0,0,0,0-1.558H10.779a.779.779,0,0,0,0,1.558Z"
                          transform="translate(-4.546 -9.847)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29229"
                          data-name="Path 29229"
                          d="M55.129,11a3.9,3.9,0,0,0-3.9,3.9,3.854,3.854,0,0,0,.566,1.992l-6.546,6a.779.779,0,0,0,1.053,1.148l6.543-6a3.86,3.86,0,0,0,2.28.752,3.9,3.9,0,0,0,0-7.791Zm0,6.233A2.337,2.337,0,1,1,57.466,14.9,2.34,2.34,0,0,1,55.129,17.233Z"
                          transform="translate(-12.276 -4.767)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29230"
                          data-name="Path 29230"
                          d="M50.792,50.675a5.419,5.419,0,0,0-2.561.641L44.4,46.305a.779.779,0,0,0-1.237.946l3.815,4.987a5.45,5.45,0,1,0,3.816-1.563Zm0,9.35a3.9,3.9,0,1,1,3.9-3.9A3.9,3.9,0,0,1,50.792,60.025Z"
                          transform="translate(-11.834 -12.497)"
                          fill="#24185c"
                        ></path>
                        <path
                          id="Path_29231"
                          data-name="Path 29231"
                          d="M24.52,46.293l-3.858,4.825a3.855,3.855,0,0,0-1.767-.443,3.9,3.9,0,1,0,3.9,3.9,3.861,3.861,0,0,0-.914-2.477l3.86-4.828a.779.779,0,1,0-1.217-.972ZM18.9,56.908a2.337,2.337,0,1,1,2.337-2.337A2.34,2.34,0,0,1,18.9,56.908Z"
                          transform="translate(-5.65 -12.497)"
                          fill="#24185c"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-950 mb-2">
                  Creative design
                </h3>
                <p className="text-gray-600">
                  Natus error sit voluptatem accus antium doloremque.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="bg-gray-200 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  viewBox="0 0 72 72"
                  width="50"
                >
                  <g id="Layer_25">
                    <path
                      d="m17 49h40l5-1s10-5 5-15-13-5-13-5v-2s2-16-13-19-19 14-19 14h-7s-13 5-11 16 13 12 13 12z"
                      fill="#c9a9d1"
                    ></path>
                    <path
                      d="m33 40v-11h-5l3-5 5-3 8 7v1h-5v15l-3-1z"
                      fill="#a5d3b8"
                    ></path>
                    <path
                      d="m22 42v21l3 2h25l3-3v-15l-3-3h-12l-3-2-2-2-8-1z"
                      fill="#fbe398"
                    ></path>
                    <g>
                      <g fill="#24185c">
                        <path d="m57 26c-.773 0-1.546.077-2.311.23.207-1.064.311-2.146.311-3.23 0-9.374-7.626-17-17-17-8.343 0-15.497 6.214-16.783 14.35-1.057-.233-2.135-.35-3.217-.35-8.271 0-15 6.729-15 15s6.729 15 15 15c.553 0 1-.448 1-1s-.447-1-1-1c-7.168 0-13-5.832-13-13s5.832-13 13-13c1.279 0 2.551.189 3.779.563.288.086.602.04.852-.129s.41-.441.436-.742c.663-7.678 7.223-13.692 14.933-13.692 8.271 0 15 6.729 15 15 0 1.473-.218 2.939-.648 4.358-.109.361-.006.753.268 1.014.272.26.67.345 1.025.218 1.097-.391 2.226-.59 3.355-.59 5.514 0 10 4.486 10 10s-4.486 10-10 10c-.553 0-1 .448-1 1s.447 1 1 1c6.617 0 12-5.383 12-12s-5.383-12-12-12z"></path>
                        <path d="m49 43h-10.077c-.916 0-1.771-.411-2.343-1.125l-1.599-1.999c-.954-1.192-2.377-1.876-3.904-1.876h-5.077c-2.757 0-5 2.243-5 5v18c0 2.757 2.243 5 5 5h23c2.757 0 5-2.243 5-5v-13c0-2.757-2.243-5-5-5zm3 18c0 1.654-1.346 3-3 3h-23c-1.654 0-3-1.346-3-3v-18c0-1.654 1.346-3 3-3h5.077c.916 0 1.771.411 2.343 1.125l1.599 1.999c.954 1.192 2.377 1.876 3.904 1.876h10.077c1.654 0 3 1.346 3 3z"></path>
                        <path d="m39 47h-1c-.553 0-1 .448-1 1s.447 1 1 1h1c.553 0 1-.448 1-1s-.447-1-1-1z"></path>
                        <path d="m44 47h-2c-.553 0-1 .448-1 1s.447 1 1 1h1v2c0 .552.447 1 1 1s1-.448 1-1v-3c0-.552-.447-1-1-1z"></path>
                        <path d="m49 47h-2c-.553 0-1 .448-1 1s.447 1 1 1h1v5c0 .552.447 1 1 1s1-.448 1-1v-6c0-.552-.447-1-1-1z"></path>
                        <path d="m38 29v11c0 .552.447 1 1 1s1-.448 1-1v-10h5c.404 0 .77-.244.924-.617.155-.374.069-.804-.217-1.09l-9-9c-.391-.391-1.023-.391-1.414 0l-9 9c-.286.286-.372.716-.217 1.09.154.373.52.617.924.617h5v6c0 .552.447 1 1 1s1-.448 1-1v-7c0-.552-.447-1-1-1h-3.586l6.586-6.586 6.586 6.586h-3.586c-.553 0-1 .448-1 1z"></path>
                        <path d="m7 35c0 .552.447 1 1 1s1-.448 1-1c0-4.962 4.037-9 9-9 .553 0 1-.448 1-1s-.447-1-1-1c-6.065 0-11 4.935-11 11z"></path>
                        <path d="m38 10c-7.168 0-13 5.832-13 13 0 .552.447 1 1 1s1-.448 1-1c0-6.065 4.935-11 11-11 .553 0 1-.448 1-1s-.447-1-1-1z"></path>
                        <path d="m51 38c0-3.309 2.691-6 6-6 .553 0 1-.448 1-1s-.447-1-1-1c-4.411 0-8 3.589-8 8 0 .552.447 1 1 1s1-.448 1-1z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-950 mb-2">
                  Endless possibilities
                </h3>
                <p className="text-gray-600">
                  Sit voluptatem accus antium doloremque laudan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to top button - now functional */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-indigo-950 p-4 rounded-full text-white shadow-lg z-10 hover:bg-indigo-900 transition-colors duration-300"
          aria-label="Back to top"
        >
          <BsArrowUpCircleFill size={20} />
        </button>
      )}
    </div>
  );
};

export default AboutSection;
