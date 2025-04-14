import { useState, useEffect, useRef } from "react";
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

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="uppercase text-sm font-medium tracking-wider text-gray-600 mb-2">
            OUR BLOG
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-950">
            Latest articles
          </h2>
        </div>

        {/* Article Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getVisibleArticles().map((article, index) => (
                <div
                  key={`${article.id}-${index}`}
                  className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-1"
                  style={{
                    animation: `slideIn 0.5s ease-out ${index * 0.15}s`
                  }}
                >
                  <div className="rounded-xl overflow-hidden mb-5 shadow-md">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-1">
                    <div className="text-indigo-950 font-medium mb-3">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-bold text-indigo-950 mb-3 transition-colors duration-300 group-hover:text-indigo-700">
                      {article.title}
                    </h3>
                    <div className="text-gray-400 text-sm flex items-center">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.comments} Comments</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-indigo-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add keyframe animation for sliding effect */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Article;
