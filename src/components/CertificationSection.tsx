import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CertificationSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2s delay for demo
    return () => clearTimeout(timer);
  }, []);

  const certifications = [
    {
      src: "https://www.inlighntech.com/wp-content/uploads/2025/04/mca-1.webp",
      alt: "MCA Certification"
    },
    {
      src: "https://www.inlighntech.com/wp-content/uploads/2025/04/iso-1.png",
      alt: "ISO Certification"
    },
    {
      src: "https://www.inlighntech.com/wp-content/uploads/2025/04/startup-india-logo-gradient-circle.png",
      alt: "Startup India"
    }
  ];

  const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`bg-gray-800/30 animate-shimmer ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-wave" />
      <div className="h-36 w-36 rounded-[30%]" />
    </div>
  );

  return (
    <section className="py-16 bg-[#07252a]">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="cert-skeleton"
              className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="h-36 w-36" />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="cert-content"
              className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="h-36 w-auto object-contain rounded-[30%] hover:scale-105 transition-transform duration-300"
                    style={{ maxWidth: '52%' }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationSection;