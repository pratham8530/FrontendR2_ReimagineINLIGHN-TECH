import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle, Award, Users, Target, Eye } from 'lucide-react';
import StatisticsSection from './StatisticsSection';
import TestimonialsSection from './TestimonialsSection';
import './AboutPage.css';

const Skeleton: React.FC<{ className?: string; type?: 'image' | 'text' }> = ({ className, type = 'text' }) => (
  <div
    className={`relative bg-gray-800/30 overflow-hidden ${className} ${
      type === 'image' ? 'rounded-3xl' : 'rounded-xl'
    }`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-wave" />
  </div>
);

const AboutPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2s delay for demo
    return () => clearTimeout(timer);
  }, []);

  const processSteps = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "High Quality Resources",
      description: "Our expertly designed resources provide hands-on learning and real-world skills. With up-to-date content and personalized mentorship, you'll gain the knowledge needed to succeed in today's tech industry.",
      gradient: "from-[#F6A194] to-[#EFC5A2]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from seasoned industry professionals who bring real-world experience and insights to every lesson, guiding you with practical knowledge to help you succeed.",
      gradient: "from-[#C182FF] to-[#D18DFF]"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Internship Portal Access",
      description: "Get separate portal access to all course materials and updates, allowing you to learn at your own pace and stay up-to-date with industry trends long after you've completed the program.",
      gradient: "from-[#A4FFFA] to-[#7FFEF7]"
    }
  ];

  const recognitions = [
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/Screenshot-2025-04-30-164507.png",
      title: "Incorporation Certificate",
      position: "Ministry of Corporate Affairs Approved",
      link: "https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/company-llp-name-search.html"
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-30-at-16.32.01_07ba59ed-780x777.jpg",
      title: "Startup India Recognitions",
      position: "Department for Promotion of Industry and Internal Trade Approved",
      link: "https://www.startupindia.gov.in/content/sih/en/block-chain-recognised-certificate.html?DIPP=DIPP201797"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c0c0c] via-[#1a1a2e] to-[#16213e] text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="floating-shapes">
          <div className="floating-shape bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20" />
          <div className="floating-shape bg-gradient-to-r from-[#f093fb]/20 to-[#f5576c]/20" />
          <div className="floating-shape bg-gradient-to-r from-[#35E1B4]/20 to-[#7FFEF7]/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="hero-skeleton"
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Left Column - Image Skeleton */}
                <div className="relative scale-[0.7]">
                  <Skeleton
                    type="image"
                    className="w-full h-96 bg-gray-700/50 rounded-3xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Skeleton className="w-14 h-14 rounded-full bg-gray-700/50" />
                  </div>
                </div>
                {/* Right Column - Content Skeleton */}
                <div className="lg:pl-8 scale-[0.7] origin-left space-y-6">
                  <Skeleton className="h-16 w-3/4 bg-gray-700/50" />
                  <Skeleton className="h-6 w-full bg-gray-700/50" />
                  <Skeleton className="h-6 w-5/6 bg-gray-700/50" />
                  <Skeleton className="h-6 w-2/3 bg-gray-700/50" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="hero-content"
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Left Column - Images */}
                <motion.div
                  className="relative scale-[0.7]"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative">
                    <motion.img
                      src="https://www.inlighntech.com/wp-content/uploads/2023/07/Ellipse-about2.png"
                      alt="About INLIGHN TECH"
                      className="w-full h-auto rounded-3xl shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Video Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <motion.button
                        className="w-14 h-14 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open('https://youtu.be/of8EOelhEAg?si=NFUZu9SFhmGZmImj', '_blank')}
                      >
                        <Play className="w-6 h-6 text-white ml-1" />
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Column - Content */}
                <motion.div
                  className="lg:pl-8 scale-[0.7] origin-left"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.h2
                    className="font-quicksand font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-snug mb-6 flex flex-wrap gap-3"
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
                    className="font-nunito text-lg md:text-xl text-white/90 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    At INLIGHN TECH, we believe that the future of education lies in bridging the gap 
                    between academic learning and industry needs. Founded with a passion for providing 
                    meaningful and immersive learning experiences, we offer internship programs that 
                    equip students and young professionals with practical skills in Cyber Security, 
                    Full Stack Development, Data Science, and Project Management.
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="vision-skeleton"
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Left Column - Content Skeleton */}
                <div className="space-y-8">
                  <Skeleton className="h-12 w-3/4 bg-gray-700/50" />
                  <Skeleton className="h-32 w-full bg-gray-700/50 rounded-2xl" />
                  <Skeleton className="h-32 w-full bg-gray-700/50 rounded-2xl" />
                </div>
                {/* Right Column - Image Skeleton */}
                <div className="relative">
                  <Skeleton
                    type="image"
                    className="w-full h-96 bg-gray-700/50 rounded-3xl"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="vision-content"
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Left Column - Content */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h2 
                    className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-8"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    Save Time and Effort with{' '}
                    <span className="text-gradient">INLIGHN TECH</span>
                  </motion.h2>

                  {/* Vision Box */}
                  <motion.div
                    className="glass-card p-6 rounded-2xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center flex-shrink-0">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                        <p className="text-white/80 leading-relaxed">
                          To be a leading EdTech platform that bridges the gap between academic knowledge 
                          and industry demands, shaping the next generation of tech innovators and leaders 
                          through hands-on, practical learning.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mission Box */}
                  <motion.div
                    className="glass-card p-6 rounded-2xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-[#f093fb] to-[#f5576c] rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                        <p className="text-white/80 leading-relaxed">
                          To empower students and young professionals by providing immersive, real-world 
                          learning experiences through tailored internship programs. We aim to equip our 
                          participants with the practical skills and confidence they need to succeed in 
                          the fast-evolving tech industry.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Column - Image Slider */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="glass-card p-8 rounded-3xl">
                    <motion.div
                      className="relative w-full h-96 overflow-hidden"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
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
                            src="https://www.inlighntech.com/wp-content/uploads/2025/04/illustrated-woman-being-intern-company_23-2148726151-1.png"
                            alt="Internship Illustration"
                            className="w-full h-full object-cover rounded-full"
                            initial={{ scale: 1.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Why Choose Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-[#35E1B4] mb-4 tracking-wider uppercase">
              WHY CHOOSE INLIGHN TECH
            </h2>
            <h3 className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              The Best Beneficial Side of{' '}
              <span className="text-gradient">INLIGHNTECH</span>
            </h3>
          </motion.div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="process-skeleton"
                className="grid md:grid-cols-3 gap-8"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="glass-card p-8 rounded-2xl text-center">
                    <Skeleton className="w-16 h-16 rounded-2xl bg-gray-700/50 mx-auto mb-6" />
                    <Skeleton className="h-6 w-2/3 bg-gray-700/50 mx-auto mb-4" />
                    <Skeleton className="h-4 w-full bg-gray-700/50 mb-2" />
                    <Skeleton className="h-4 w-5/6 bg-gray-700/50" />
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="process-content"
                className="grid md:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-8 rounded-2xl text-center"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-white/80 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Recognitions Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-[#F87D6C] mb-4 tracking-wider uppercase">
              Our Recognitions
            </h2>
            <h3 className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              Our <span className="text-gradient">Achievements</span>
            </h3>
          </motion.div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="recognition-skeleton"
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="glass-card p-6 rounded-2xl text-center">
                    <Skeleton
                      type="image"
                      className="w-full h-48 bg-gray-700/50 rounded-xl mb-4"
                    />
                    <Skeleton className="h-6 w-2/3 bg-gray-700/50 mx-auto mb-2" />
                    <Skeleton className="h-4 w-1/2 bg-gray-700/50 mx-auto mb-4" />
                    <Skeleton className="h-4 w-1/3 bg-gray-700/50 mx-auto" />
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="recognition-content"
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {recognitions.map((recognition, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6 rounded-2xl text-center"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <img
                      src={recognition.image}
                      alt={recognition.title}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{recognition.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{recognition.position}</p>
                    <a
                      href={recognition.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#667eea] hover:text-[#764ba2] transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Verify Certificate
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;