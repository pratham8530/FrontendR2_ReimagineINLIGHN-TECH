import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './AboutPage.css';
import './GooeyButton.css';

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const Skeleton = ({ className = '', type = 'text' }: { className?: string; type?: 'text' | 'image' | 'button' }) => (
    <div className={`bg-gray-800/30 animate-shimmer ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-wave" />
      {type === 'image' && <div className="w-full h-72 rounded-lg" />}
      {type === 'text' && <div className="h-6 w-3/4 rounded-xl" />}
      {type === 'button' && <div className="h-10 w-40 rounded-lg" />}
    </div>
  );

  const GooeyButton = ({ text, href }: { text: string; href: string }) => (
    <div className="gooey-container">
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <a href={href} className="gooey-button group">
        {text}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 ml-2" />
        <span className="bubbles">
          <span className="bubble" />
          <span className="bubble" />
          <span className="bubble" />
        </span>
      </a>
    </div>
  );

  return (
    <section id="hero-sec" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://www.inlighntech.com/wp-content/uploads/2023/07/bg.png)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-0">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="hero-skeleton"
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Left Content Skeleton */}
              <div className="text-center lg:text-left space-y-6">
                <Skeleton type="text" className="h-16 w-2/3 mx-auto lg:mx-0" />
                <Skeleton type="text" className="h-6 w-full mx-auto lg:mx-0" />
                <Skeleton type="text" className="h-6 w-5/6 mx-auto lg:mx-0" />
                <Skeleton type="button" className="h-10 w-40 mx-auto lg:mx-0" />
              </div>
              {/* Right Image Skeleton */}
              <div className="relative">
                <Skeleton type="image" className="w-full h-72 rounded-lg object-cover" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="hero-content"
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Kinetic Animated Heading */}
                <motion.h1
                  className="font-quicksand font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 flex flex-wrap justify-center lg:justify-start"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.5,
                      },
                    },
                  }}
                >
                  {Array.from("Transform Your Career with ").map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      variants={{
                        hidden: { opacity: 0, y: 40, rotateX: 90 },
                        visible: { opacity: 1, y: 0, rotateX: 0 },
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      style={{ display: 'inline-block', perspective: '500px' }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                  {Array.from("INLIGHN TECH").map((char, i) => (
                    <motion.span
                      key={`inlighn-${i}`}
                      className="inline-block text-[#F8A501]"
                      variants={{
                        hidden: { opacity: 0, y: 40, rotateX: 90 },
                        visible: { opacity: 1, y: 0, rotateX: 0 },
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      style={{ display: 'inline-block', perspective: '500px' }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.h1>


                <motion.p 
                  className="font-nunito text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Gain real-world experience with our immersive internship programs in Cyber Security, 
                  Full Stack Development, Data Science, Data Analyst and in various tech domains. 
                  Learn today, lead tomorrow.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <GooeyButton text="Explore Internships" href="#programs" />
                </motion.div>
              </div>

              {/* Right Image with Glitch Effect */}
              <div className="relative">
                <motion.div
                  className="relative glitch-img"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <img
                    src="https://www.inlighntech.com/wp-content/uploads/2025/06/ai-nuclear-energy-future-innovation-disruptive-technology-scaled.jpg"
                    alt="AI Technology Innovation"
                    className="w-full h-auto rounded-lg shadow-2xl object-cover"
                    style={{
                      maxWidth: '735px',
                      maxHeight: '588px',
                    }}
                  />
                  <div
                    className="glitch-overlay glitch-before"
                    style={{
                      backgroundImage: 'url(https://www.inlighntech.com/wp-content/uploads/2025/06/ai-nuclear-energy-future-innovation-disruptive-technology-scaled.jpg)',
                    }}
                  ></div>
                  <div
                    className="glitch-overlay glitch-after"
                    style={{
                      backgroundImage: 'url(https://www.inlighntech.com/wp-content/uploads/2025/06/ai-nuclear-energy-future-innovation-disruptive-technology-scaled.jpg)',
                    }}
                  ></div>
                </motion.div>

                {/* Decorative SVG Circle */}
                <div className="absolute -bottom-10 -left-10 decorative-svg hidden lg:block">
                  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle 
                      cx="75" 
                      cy="75" 
                      r="72" 
                      stroke="#007362" 
                      strokeWidth="3" 
                      opacity="0.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;