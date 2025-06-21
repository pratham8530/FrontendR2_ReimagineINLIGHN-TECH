import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const ProgramsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const courses = [
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/05/carlos-muza-hpjSkU2UYSU-unsplash-300x214.jpg",
      title: "Business Analyst Internship Program",
      description: "Business Analyst – Internship Program Gain practical business analysis skills by working on...",
      link: "/courses/business-analyst-internship-program",
      rating: 5
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/05/4421964-300x300.jpg",
      title: "Front-End Development Internship",
      description: "Front-End Web Development – Internship Program Kickstart your journey into web development by...",
      link: "/courses/front-end-development-internship",
      rating: 5
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/05/matrix-hacker-background-1-300x200.jpg",
      title: "Ethical Hacking with Kali Linux",
      description: "🔐 Ethical Hacking with Kali Linux – Internship Program Gain practical skills in...",
      link: "/courses/ethical-hacking-with-kali-linux",
      rating: 5
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/05/7076397-300x200.jpg",
      title: "Full Stack Development Internship",
      description: "Full-Stack Web Development – Internship Program Master web development from the ground up...",
      link: "/courses/full-stack-development-internship",
      rating: 5
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/05/853-300x189.jpg",
      title: "AI & Machine Learning Internship Program",
      description: "🤖 AI & Machine Learning – Internship Program Build a strong foundation in...",
      link: "/courses/ai-machine-learning-internship-program",
      rating: 5
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/choong-deng-xiang-WXQm_NTK0U-unsplash-1-300x199.jpg",
      title: "Data Analyst Internship",
      description: "📊 Data Analyst – Internship Program Learn how to collect, clean, analyze, and...",
      link: "/courses/data-analyst-internship",
      rating: 5
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/flyd-C5pXRFEjq3w-unsplash-2-300x200.jpg",
      title: "Offensive Cyber Security Internship",
      description: "🛡️ Offensive Cybersecurity – Internship Program Dive deep into the world of ethical...",
      link: "/courses/offensive-cyber-security-internship",
      rating: 5
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/luke-chesser-JKUTrJ4vK00-unsplash-300x200.jpg",
      title: "Data Science Internship",
      description: "📈 Data Science – Internship Program Master the fundamentals of data science by...",
      link: "/courses/data-science-internship",
      rating: 5
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/programming-background-collage-2-300x200.jpg",
      title: "Web Development Internship",
      description: "🌐 Web Development – Internship Program Learn to build dynamic, responsive websites with...",
      link: "/courses/web-development-internship",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2s delay for demo
    return () => clearTimeout(timer);
  }, []);

  const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`bg-gray-800/30 animate-shimmer ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-wave" />
      <div className="h-64 w-full rounded-2xl" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c0c0c] via-[#1a1a2e] to-[#16213e] text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-quicksand font-bold text-center text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 flex justify-center flex-wrap gap-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.03,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {/* "Our" part - normal */}
              {Array.from("Our ").map((char, index) => (
                <motion.span
                  key={`our-${index}`}
                  className={`inline-block ${char === " " ? "w-2" : ""}`}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {char}
                </motion.span>
              ))}

              {/* "Programs" part - full gradient */}
              <span className="text-gradient">
                {Array.from("Programs").map((char, index) => (
                  <motion.span
                    key={`programs-${index}`}
                    className={`inline-block ${char === " " ? "w-2" : ""}`}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.8 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>




            <motion.p 
              className="font-nunito text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our comprehensive internship programs designed to bridge the gap between 
              academic learning and industry requirements. Each program offers hands-on experience 
              with real-world projects and expert mentorship.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="programs-skeleton"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {[...Array(9)].map((_, index) => (
                  <Skeleton key={index} className="h-64 w-full rounded-2xl" />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="programs-content"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    className="course-card group"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Course Image */}
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="course-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Course Content */}
                    <div className="course-content">
                      <h3 className="course-title">{course.title}</h3>
                      
                      {/* Rating */}
                      <div className="course-rating flex items-center gap-1 mb-3">
                        {[...Array(course.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      <p className="course-description">{course.description}</p>

                      {/* Learn More Link */}
                      <motion.a
                        href={course.link}
                        className="course-link"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="glass-card p-12 rounded-3xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Start Your{' '}
              <span className="text-gradient">Journey?</span>
            </motion.h2>
            
            <motion.p 
              className="font-nunito text-lg text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join thousands of students who have transformed their careers through our 
              comprehensive internship programs. Get hands-on experience, expert mentorship, 
              and industry-recognized certificates.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="btn-primary group">
                Apply Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-glass">
                Download Brochure
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;