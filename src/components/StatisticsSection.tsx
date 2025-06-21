import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CounterProps {
  end: number;
  suffix: string;
  title: string;
  delay?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix, title, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2000; // 2 seconds animation duration
          const steps = 100; // Number of animation steps
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{
        background: 'linear-gradient(135deg, #FF7E6B, #FF9A7A)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="counter-number text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 text-white" 
           style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg lg:text-xl font-semibold text-white/90">
        {title}
      </div>
    </motion.div>
  );
};

const StatisticsSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const stats = [
    { end: 5000, suffix: '+', title: 'Interns Enrolled', delay: 0 },
    { end: 9000, suffix: '+', title: 'Projects Completed', delay: 0.2 },
    { end: 93, suffix: '%', title: 'Satisfaction Rate', delay: 0.4 },
    { end: 30, suffix: '+', title: 'Top Instructors', delay: 0.6 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2s delay for demo
    return () => clearTimeout(timer);
  }, []);

  const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`bg-gray-800/30 animate-shimmer ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-wave" />
      <div className="h-20 w-full rounded-2xl" />
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-[#07252a] to-[#0A4A49] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="stats-skeleton"
              className="bg-[#0A4A49]/50 rounded-[100px] lg:rounded-[20px] p-8 lg:p-12 backdrop-blur-md"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {stats.map((_, index) => (
                  <Skeleton key={index} className="h-20 w-full" />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="stats-content"
              className="bg-[#0A4A49]/50 rounded-[100px] lg:rounded-[20px] p-8 lg:p-12 backdrop-blur-md"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <Counter
                    key={index}
                    end={stat.end}
                    suffix={stat.suffix}
                    title={stat.title}
                    delay={stat.delay}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StatisticsSection;