import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Gallery1 from "../assets/gallery1.png";
import Gallery2 from "../assets/gallery2.png";
import Gallery3 from "../assets/gallery3.png";
import Gallery4 from "../assets/gallery4.png";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const galleryImages = [
    { id: 1, src: Gallery1, alt: "Gallery 1" },
    { id: 2, src: Gallery2, alt: "Gallery 2" },
    { id: 3, src: Gallery3, alt: "Gallery 3" },
    { id: 4, src: Gallery4, alt: "Gallery 4" },
    { id: 5, src: Gallery3, alt: "Gallery 5" },
    { id: 6, src: Gallery4, alt: "Gallery 6" }
  ];

  // Start the timer for automatic sliding
  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }
    }, 3000); // Change slide every 3 seconds
  };

  // Set up and clean up the timer
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(timerRef.current);
    startTimer();
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div
        className="relative max-w-7xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Horizontal scrolling gallery with alternating heights */}
        <motion.div
          className="flex space-x-4"
          animate={{
            x: `-${currentIndex * 25}%`
          }}
          transition={{
            type: "tween", // Using tween for smoother linear animation
            ease: "easeInOut",
            duration: 0.7
          }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="flex-shrink-0 w-full md:w-1/4 px-2"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              onClick={() => goToSlide(index)}
            >
              <div
                className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer ${
                  index % 2 === 0 ? "h-64" : "h-80"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}

          {/* Add the first image again at the end for smooth looping */}
          <motion.div
            key="loop-first"
            className="flex-shrink-0 w-full md:w-1/4 px-2"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            onClick={() => goToSlide(0)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer h-64">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
