import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingText, setLoadingText] = useState('Initializing');

  const loadingStates = [
    'Initializing',
    'Loading Assets',
    'Preparing Experience',
    'Almost Ready',
    'Complete'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 5 + 1;
        
        const stateIndex = Math.min(Math.floor(newProgress / 25), loadingStates.length - 1);
        setLoadingText(loadingStates[stateIndex]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 1000);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Subtle background grid */}
          <div className="absolute inset-0 opacity-5">
            <motion.div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '80px 80px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Floating orbs */}
          <div className="absolute inset-0 z-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-slate-400/20 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                }}
                animate={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            
            {/* Logo with 3D effect */}
            <motion.div
              className="relative"
              initial={{ scale: 0.5, rotateY: -180, opacity: 0 }}
              animate={{ 
                scale: isComplete ? 1.3 : 1, 
                rotateY: isComplete ? 0 : 0,
                opacity: 1,
                z: isComplete ? 50 : 0
              }}
              transition={{ 
                duration: isComplete ? 1 : 1.2,
                ease: "easeOut"
              }}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="w-32 h-32 relative"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  rotateY: { duration: 12, repeat: Infinity, ease: "linear" }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Logo glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(148, 163, 184, 0.3)",
                      "0 0 40px rgba(148, 163, 184, 0.5)",
                      "0 0 20px rgba(148, 163, 184, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Logo container */}
                <motion.div
                  className="absolute inset-4 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 flex items-center justify-center overflow-hidden"
                  animate={{
                    borderColor: [
                      "rgba(148, 163, 184, 0.3)",
                      "rgba(148, 163, 184, 0.6)",
                      "rgba(148, 163, 184, 0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <motion.img
                    src="https://www.inlighntech.com/wp-content/uploads/2025/04/inlighn-tech-logo.png"
                    alt="INLIGHN TECH"
                    className="w-full h-full object-contain filter brightness-110"
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Company name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl font-bold text-white mb-2"
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                INLIGHN TECH
              </motion.h1>
              <motion.p
                className="text-lg text-slate-400 font-light tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Transform Your Career
              </motion.p>
            </motion.div>

            {/* Refined progress bar */}
            <motion.div
              className="w-80 space-y-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="relative">
                <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-slate-400 to-slate-300 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <motion.span
                  className="text-slate-400 font-medium"
                  key={loadingText}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {loadingText}
                </motion.span>
                <motion.span
                  className="text-slate-300 font-mono"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </motion.div>

            {/* Minimal loading dots */}
            <motion.div
              className="flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-slate-400 rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-6 left-6 w-16 h-16 border-l border-t border-slate-600/50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
          <motion.div
            className="absolute bottom-6 right-6 w-16 h-16 border-r border-b border-slate-600/50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
