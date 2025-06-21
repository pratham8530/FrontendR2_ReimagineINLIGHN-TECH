import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2s delay for demo
    return () => clearTimeout(timer);
  }, []);

  const Skeleton: React.FC<{ className?: string; type?: 'image' | 'text' | 'button' }> = ({ className, type = 'text' }) => (
    <div className={`bg-gray-800/30 animate-shimmer ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-wave" />
      {type === 'image' && <div className="w-full h-72 rounded-[10px]" />}
      {type === 'text' && <div className="h-6 w-3/4 rounded-xl" />}
      {type === 'button' && <div className="h-10 w-24 rounded-lg" />}
    </div>
  );

  return (
    <section id="about" className="relative py-4 overflow-hidden">
      <div 
        className="absolute inset-0 bg-[#022B36]"
        style={{
          WebkitMaskImage: 'url(https://www.inlighntech.com/wp-content/uploads/2023/07/Element-2-1.png)',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center right',
          WebkitMaskSize: 'auto',
          maskImage: 'url(https://www.inlighntech.com/wp-content/uploads/2023/07/Element-2-1.png)',
          maskRepeat: 'no-repeat',
          maskPosition: 'center right',
          maskSize: 'auto'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="about-skeleton"
              className="grid lg:grid-cols-2 gap-4 items-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Left Column - Image Skeleton */}
              <div className="relative">
                <Skeleton type="image" className="w-full h-72 rounded-[10px] object-cover" />
              </div>
              {/* Right Column - Content Skeleton */}
              <div className="lg:pl-4 space-y-4">
                <Skeleton type="text" className="h-8 w-1/2" />
                <Skeleton type="text" className="h-4 w-full" />
                <Skeleton type="text" className="h-4 w-5/6" />
                <Skeleton type="button" className="h-10 w-24" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="about-content"
              className="grid lg:grid-cols-2 gap-4 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Left Column - Images */}
              <div className="relative">
                <motion.div
                  className="relative w-full h-72 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute flex items-center justify-center"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 border-4 border-[#667eea]/30 flex items-center justify-center overflow-hidden shadow-lg">
                      <motion.img
                        src="https://www.inlighntech.com/wp-content/uploads/2025/03/scott-graham-5fNmWej4tAA-unsplash-2048x1367-1.jpg"
                        alt="Team collaboration"
                        className="w-full h-full object-cover rounded-full"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Circular Overlay */}
                <motion.div
                  className="absolute -top-8 -right-4 hidden lg:block"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <img
                    src="https://www.inlighntech.com/wp-content/uploads/2023/07/Ellipse-53.png"
                    alt="Decorative circle"
                    className="w-full h-auto opacity-80"
                    style={{ maxWidth: '350px', height: '400px' }}
                  />
                </motion.div>

                {/* Decorative SVG Circle */}
                <div className="absolute -bottom-4 -left-4 decorative-svg hidden lg:block">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle 
                      cx="40" 
                      cy="40" 
                      r="38" 
                      stroke="#35E1B4" 
                      strokeWidth="2" 
                      opacity="0.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:pl-4">
              <motion.h2
  className="font-quicksand font-bold text-white text-xl md:text-2xl lg:text-3xl leading-tight mb-4 flex flex-wrap gap-2"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }}
>
  {[
    "We",
    "Provide",
    "Best",
    "Industry",
    "Services",
    "For",
    "You"
  ].map((word, index) => (
    <motion.span
      key={index}
      className={`inline-block ${
        word === "Services" || word === "Industry" ? "text-[#02DFBF]" : ""
      }`}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
          scale: 0.8,
          rotate: -10,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
    >
      {word}
    </motion.span>
  ))}
</motion.h2>



                <motion.p 
                  className="font-nunito text-xs md:text-sm text-white/90 leading-relaxed mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  At INLIGHN TECH, we believe that the future of education lies in bridging the gap 
                  between academic learning and industry needs. Founded with a passion for providing 
                  meaningful and immersive learning experiences, we offer internship programs that 
                  equip students and young professionals with practical skills in Full Stack 
                  Development, Data Science, and Project Management.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a href="#mission-vision" className="btn-primary">
                    Know More
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;