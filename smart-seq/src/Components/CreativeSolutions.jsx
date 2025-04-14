import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CreativeSolutions = () => {
  // Stats final values
  const finalStats = {
    projects: 93,
    people: 65,
    years: 10,
    offices: 15
  };

  // Stats current values
  const [stats, setStats] = useState({
    projects: 0,
    people: 0,
    years: 0,
    offices: 0
  });

  // Ref for the stats section
  const statsRef = useRef(null);

  // State to track if animation has started
  const [animationStarted, setAnimationStarted] = useState(false);

  // Show button when user scrolls down 300px and check if stats are in view
  useEffect(() => {
    const handleScroll = () => {
      // Check if stats section is in view
      if (statsRef.current && !animationStarted) {
        const rect = statsRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInView) {
          setAnimationStarted(true);
          startCountAnimation();
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case stats are already in view on load
    handleScroll();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationStarted]);

  // Function to animate counting from 0 to final values
  const startCountAnimation = () => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;

    // Current step
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      // Update stats based on progress
      setStats({
        projects: Math.round(finalStats.projects * progress),
        people: Math.round(finalStats.people * progress),
        years: Math.round(finalStats.years * progress),
        offices: Math.round(finalStats.offices * progress)
      });

      // Clear interval when animation is complete
      if (step >= steps) {
        clearInterval(timer);
        // Ensure final values are set
        setStats(finalStats);
      }
    }, interval);
  };

  // Animation variants for staggered animations
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Stat number animation variants
  const statNumberVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen relative">
      {/* Small dot navigation indicator at top */}
      <motion.div
        className="flex justify-center pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-2 w-2 bg-black rounded-full"></div>
      </motion.div>

      {/* Stats section */}
      <motion.div
        ref={statsRef}
        className="container max-w-7xl mx-auto py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Projects Stat */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="text-8xl md:text-9xl font-bold text-white"
              variants={statNumberVariants}
              initial="initial"
              animate={animationStarted ? "animate" : "initial"}
            >
              {stats.projects}
            </motion.div>
            <motion.p
              className="text-indigo-950 font-medium text-lg md:text-xl -mt-10 md:-mt-12 relative z-10"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Projects
            </motion.p>
          </motion.div>

          {/* People Stat */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="text-8xl md:text-9xl font-bold text-white"
              variants={statNumberVariants}
              initial="initial"
              animate={animationStarted ? "animate" : "initial"}
            >
              {stats.people}
            </motion.div>
            <motion.p
              className="text-indigo-950 font-medium text-lg md:text-xl -mt-10 md:-mt-12 relative z-10"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              People
            </motion.p>
          </motion.div>

          {/* Years Stat */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="text-8xl md:text-9xl font-bold text-white"
              variants={statNumberVariants}
              initial="initial"
              animate={animationStarted ? "animate" : "initial"}
            >
              {stats.years}
            </motion.div>
            <motion.p
              className="text-indigo-950 font-medium text-lg md:text-xl -mt-10 md:-mt-12 relative z-10"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              Years
            </motion.p>
          </motion.div>

          {/* Offices Stat */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="text-8xl md:text-9xl font-bold text-white"
              variants={statNumberVariants}
              initial="initial"
              animate={animationStarted ? "animate" : "initial"}
            >
              {stats.offices}
            </motion.div>
            <motion.p
              className="text-indigo-950 font-medium text-lg md:text-xl -mt-10 md:-mt-12 relative z-10"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              Offices
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Creative Solutions section */}
      <motion.div
        className="container max-w-7xl mx-auto py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="uppercase text-sm font-semibold tracking-wide text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              CREATIVE SOLUTIONS
            </motion.p>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-indigo-950 leading-tight mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We make unique &<br />
              memorable brands
            </motion.h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="text-gray-600 mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque lorem in
              voluptate velit iusto odio dignissimos duci esse.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae.
            </motion.p>

            <motion.div
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="#"
                className="font-medium text-indigo-950 hover:text-indigo-700 transition-colors"
              >
                Read More
              </a>
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-950"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.4 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreativeSolutions;
