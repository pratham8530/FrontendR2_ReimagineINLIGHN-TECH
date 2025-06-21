import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturesSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2s delay for demo
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: "far fa-computer-classic",
      title: "Real-World Projects",
      description: "Gain hands-on experience with real industry projects and build a portfolio that stands out.",
      titleColor: "#F8A501",
      iconColor: "#F8A501",
      animation: "fadeInRight"
    },
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Expert Mentorship",
      description: "Learn from seasoned professionals who guide you through every step of your journey.",
      titleColor: "#02DFBF",
      iconColor: "#02DFBF",
      animation: "fadeInLeft"
    },
    {
      icon: "fas fa-chalkboard",
      title: "Certified Programs",
      description: "Complete the programs and get certified in your field to showcase your skills.",
      titleColor: "#02DFBF",
      iconColor: "#02DFBF",
      animation: "fadeInLeft"
    },
    {
      icon: "fal fa-users-class",
      title: "Flexible Learning",
      description: "Do at your own pace with online programs designed to fit your schedule.",
      titleColor: "#F8A501",
      iconColor: "#F8A501",
      animation: "fadeInRight"
    }
  ];

  const Skeleton = ({ className, type }: { className: string, type?: 'box' | 'image' }) => (
    <div className={`bg-gray-800/30 animate-shimmer ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-wave" />
      {type === 'image' && <div className="w-full h-72 rounded-2xl" />}
      {type === 'box' && (
        <div className="p-6 lg:p-8 rounded-xl space-y-4">
          <div className="w-16 h-16 rounded-lg" />
          <div className="h-6 w-1/2 rounded-xl" />
          <div className="h-4 w-full rounded-xl" />
        </div>
      )}
    </div>
  );

  return (
    <section id="programs" className="py-20 bg-[#07252a]">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="features-skeleton"
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Left Column - Image Skeleton */}
              <div className="order-2 lg:order-1">
                <Skeleton type="image" className="w-full h-72 rounded-2xl" />
              </div>
              {/* Right Column - Feature Boxes Skeleton */}
              <div className="order-1 lg:order-2 space-y-6">
                {[...Array(4)].map((_, index) => (
                  <Skeleton key={index} type="box" className="w-full" />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="features-content"
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Left Column - Image */}
              <div className="order-2 lg:order-1">
                <motion.img
                  src="https://www.inlighntech.com/wp-content/uploads/2023/07/home1.jpg"
                  alt="Learning environment"
                  className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                  style={{ maxWidth: '605px', height: '711px' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Right Column - Feature Boxes */}
              <div className="order-1 lg:order-2 space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="relative p-6 lg:p-8 rounded-xl overflow-hidden group"
                    style={{
                      background: 'linear-gradient(180deg, #063A41 0%, #063A41 100%)',
                      boxShadow: '0px 0px 1px 1px #0A4A49'
                    }}
                    initial={{ 
                      opacity: 0, 
                      x: feature.animation === 'fadeInRight' ? 40 : -40 
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Ripple effect */}
                    <span className="absolute inset-0 pointer-events-none">
                      <span className="absolute w-0 h-0 rounded-full bg-white/10 opacity-0 group-hover:w-[150%] group-hover:h-[150%] group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-1/2 -translate-y-1/2 origin-center" />
                    </span>
                    <div className="flex items-start gap-4 relative z-10">
                      <div 
                        className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(90deg, #0A6260 0%, #0A6260 100%)',
                          boxShadow: '-6px 6px 0px 0px #0A4A49'
                        }}
                      >
                        <i 
                          className={`${feature.icon} text-2xl`} 
                          style={{ color: feature.iconColor }}
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 
                          className="font-quicksand font-bold text-xl lg:text-2xl mb-2"
                          style={{ color: feature.titleColor }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-[#A7BABA] text-base lg:text-lg leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturesSection;