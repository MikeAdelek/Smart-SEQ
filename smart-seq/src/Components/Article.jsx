import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Article1 from "../assets/article1.jpg";
import Article2 from "../assets/article2.jpg";
import Article3 from "../assets/article3.jpg";
import Article4 from "../assets/article4.jpg";
import Article5 from "../assets/article5.jpg";

const Article = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const articles = [
    {
      id: 1,
      category: "MEDIA SEO",
      title: "Top 5 targeting techniques to attract customers",
      date: "Apr 21, 2020",
      comments: 0,
      image: Article1
    },
    {
      id: 2,
      category: "MEDIA SEO",
      title: "Why do project managers need to focus on strategy?",
      date: "Apr 21, 2020",
      comments: 0,
      image: Article2
    },
    {
      id: 3,
      category: "MEDIA SEO",
      title: "What's trending on designers' charts this spring",
      date: "Apr 21, 2020",
      comments: 0,
      image: Article3
    },
    {
      id: 4,
      category: "MEDIA SEO",
      title: "How AI is transforming content creation",
      date: "Apr 21, 2020",
      comments: 0,
      image: Article4
    }
    // {
    //   id: 5,
    //   category: "MEDIA SEO",
    //   title: "Fresh startup ideas for your digital business",
    //   date: "Apr 21, 2020",
    //   comments: 0,
    //   image: Article5
    // }
  ];

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) => (prev + 1) % articles.length);
      }
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(timerRef.current);
    startTimer();
  };

  // Calculate which articles to show based on current index
  const getVisibleArticles = () => {
    const visibleArticles = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % articles.length;
      visibleArticles.push(articles[index]);
    }
    return visibleArticles;
  };

  // Main section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren"
      }
    }
  };

  // Header animations
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Article card animations
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    },
    hover: {
      y: -12,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.08,
      transition: { duration: 0.3 }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Dot navigation animations
  const dotsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.9
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    active: {
      scale: 1.3,
      backgroundColor: "#4F46E5",
      transition: {
        duration: 0.3
      }
    },
    inactive: {
      scale: 1,
      backgroundColor: "#D1D5DB",
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      className="py-20 px-4 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            className="uppercase text-sm font-medium tracking-wider text-gray-600 mb-2"
            variants={subtitleVariants}
          >
            OUR BLOG
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-indigo-950"
            variants={titleVariants}
          >
            Latest articles
          </motion.h2>
        </div>

        {/* Article Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="overflow-hidden"
            variants={cardContainerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getVisibleArticles().map((article, index) => (
                <motion.div
                  key={`${article.id}-${index}`}
                  className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover"
                      variants={imageVariants}
                      whileHover="hover"
                    />
                  </div>
                  <div className="p-6">
                    <motion.div
                      className="text-indigo-950 font-medium mb-3"
                      variants={textRevealVariants}
                    >
                      {article.category}
                    </motion.div>
                    <motion.h3
                      className="text-xl font-bold text-indigo-950 mb-3 transition-colors duration-300 group-hover:text-indigo-700"
                      variants={textRevealVariants}
                    >
                      {article.title}
                    </motion.h3>
                    <motion.div
                      className="text-gray-400 text-sm flex items-center"
                      variants={textRevealVariants}
                    >
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.comments} Comments</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <motion.div
            className="flex justify-center mt-10 space-x-3"
            variants={dotsContainerVariants}
          >
            {articles.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-3 h-3 rounded-full focus:outline-none"
                variants={dotVariants}
                initial="inactive"
                animate={index === currentIndex ? "active" : "inactive"}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article;
