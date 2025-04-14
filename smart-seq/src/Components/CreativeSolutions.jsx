import { useState, useEffect, useRef } from "react";
// import { ArrowUp } from 'lucide-react';

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

  return (
    <div className="font-sans bg-gray-100 min-h-screen relative">
      {/* Small dot navigation indicator at top */}
      <div className="flex justify-center pt-6">
        <div className="h-2 w-2 bg-black rounded-full"></div>
      </div>

      {/* Stats section */}
      <div ref={statsRef} className="container max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Projects Stat */}
          <div className="text-center">
            <div className="text-8xl md:text-9xl font-bold text-white">
              {stats.projects}
            </div>
            <p className="text-indigo-950 font-medium text-lg md:text-xl -mt-10 md:-mt-12 relative z-10">
              Projects
            </p>
          </div>

          {/* People Stat */}
          <div className="text-center">
            <div className="text-8xl md:text-9xl font-bold text-white">
              {stats.people}
            </div>
            <p className="text-indigo-950 font-medium text-lg md:text-xl -mt-10 md:-mt-12 relative z-10">
              People
            </p>
          </div>

          {/* Years Stat */}
          <div className="text-center">
            <div className="text-8xl md:text-9xl font-bold text-white">
              {stats.years}
            </div>
            <p className="text-indigo-950 font-medium text-lg md:text-xl -mt-10 md:-mt-12 relative z-10">
              Years
            </p>
          </div>

          {/* Offices Stat */}
          <div className="text-center">
            <div className="text-8xl md:text-9xl font-bold text-white">
              {stats.offices}
            </div>
            <p className="text-indigo-950 font-medium text-lg md:text-xl -mt-10 md:-mt-12 relative z-10">
              Offices
            </p>
          </div>
        </div>
      </div>

      {/* Creative Solutions section */}
      <div className="container max-w-7xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Heading */}
          <div>
            <p className="uppercase text-sm font-semibold tracking-wide text-gray-700 mb-4">
              CREATIVE SOLUTIONS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 leading-tight mb-6">
              We make unique &<br />
              memorable brands
            </h2>
          </div>

          {/* Right Column - Content */}
          <div>
            <p className="text-gray-600 mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque lorem in
              voluptate velit iusto odio dignissimos duci esse.
            </p>

            <p className="text-gray-600 mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae.
            </p>

            <div className="inline-block relative">
              <a
                href="#"
                className="font-medium text-indigo-950 hover:text-indigo-700 transition-colors"
              >
                Read More
              </a>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-950"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeSolutions;
