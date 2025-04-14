import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonal2.jpg";
import testimonial3 from "../assets/testimonial3.jpg";

import WhoAre from "../assets/Whoare.png";
import WhoAre2 from "../assets/Whoare2.png";

import Brand1 from "../assets/brand1.png";
import Brand2 from "../assets/brand2.png";
import Brand3 from "../assets/brand3.png";
import Brand4 from "../assets/brand4.png";
import Brand5 from "../assets/brand5.png";
import Brand6 from "../assets/brand6.png";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0); // For slide direction

  const testimonials = [
    {
      image: testimonial1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Dou",
      title: "Expert"
    },
    {
      image: testimonial2,
      text: "Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
      name: "Sandy Williams",
      title: "CEO,Business Co."
    },
    {
      image: testimonial3,
      text: "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Paul Freeman",
      title: "Expert"
    }
  ];

  const logos = [
    { image: Brand1, id: "codan" },
    { image: Brand2, id: "wave" },
    { image: Brand3, id: "orca" },
    { image: Brand4, id: "minagood" },
    { image: Brand5, id: "br" },
    { image: Brand6, id: "arquivar" }
  ];

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Email:", email, "Agreed to policy:", agreed);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <motion.div
        className="relative -bottom-1 min-h-screen flex flex-col items-center justify-center px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Subscribe content */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 py-8">
          {/* Left side - Text */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-start"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-indigo-950 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Subscribe for the exclusive updates!
            </motion.h1>
          </motion.div>

          {/* Right side - Form */}
          <motion.div className="w-full md:w-1/2" variants={formVariants}>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4"
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-5 py-4 bg-white rounded-full border border-gray-200 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.button
                  type="submit"
                  className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full flex items-center justify-center"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <IoIosSend className="w-4 h-4 mr-2" />
                  Subscribe
                </motion.button>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 ml-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="h-4 w-4"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                />
                <label
                  htmlFor="privacy-policy"
                  className="text-gray-600 text-sm"
                >
                  I agree to the{" "}
                  <span className="text-gray-700 hover:underline cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </label>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Testimonial section */}
        <motion.div
          className="w-full max-w-3xl mt-16 px-4 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center"
            >
              {/* Avatar */}
              <motion.div
                className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <img
                  src={testimonials[currentTestimonial].image}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Testimonial text */}
              <motion.p
                className="text-center text-gray-700 text-lg mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {testimonials[currentTestimonial].text}
              </motion.p>

              {/* Quote icon */}
              <motion.div
                className="text-4xl text-cyan-400 my-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              >
                ❞
              </motion.div>

              {/* Author */}
              <motion.div
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <h3 className="font-medium text-xl text-gray-800">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-500">
                  {testimonials[currentTestimonial].title}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-0 md:px-4 pointer-events-none">
            <motion.button
              onClick={handlePrevious}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 pointer-events-auto"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <GoArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 pointer-events-auto"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <GoArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </motion.button>
          </div>
        </motion.div>

        {/* Pagination dots */}
        <motion.div
          className="mt-8 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.5 }}
              animate={{
                scale: currentTestimonial === index ? 1.2 : 1,
                backgroundColor:
                  currentTestimonial === index ? "#2563EB" : "#D1D5DB"
              }}
              transition={{ duration: 0.2 }}
            ></motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* WHO ARE WE */}
      <motion.div 
        className="max-w-7xl mx-auto mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-12"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.8, 
              type: "spring", 
              stiffness: 100 
            }}
          >
            <motion.div 
              className="mb-2 text-indigo-900 font-medium"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              WHO WE ARE
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-indigo-950 mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              We provide best digital services
            </motion.h1>
            <motion.p 
              className="text-gray-500 mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit sed quia.
            </motion.p>
            <motion.button 
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-medium"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Now
            </motion.button>
          </motion.div>
    
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.8, 
              type: "spring", 
              stiffness: 100 
            }}
          >
            <motion.div 
              className="relative z-10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <img
                src={WhoAre}
                alt="Digital services workspace with laptop"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div 
              className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 z-0"
              initial={{ x: 60, y: -40, opacity: 0 }}
              whileInView={{ x: 32, y: -32, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.5, 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <img
                src={WhoAre2}
                alt="Person at work"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -right-4 z-20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-blue-200 rounded-full"></div>
            </motion.div>
            <motion.div 
              className="absolute -top-8 -left-8 z-20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-purple-300 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Client Logo Section */}
      <motion.div 
        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="overflow-hidden">
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <motion.div 
                key={logo.id} 
                className="flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.1 * index, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div 
                  className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    opacity: 1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img
                    src={logo.image}
                    alt={logo.id}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Subscribe;
