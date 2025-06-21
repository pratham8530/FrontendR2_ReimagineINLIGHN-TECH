import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Play, Gift, Award, Users, Calendar, Medal, Puzzle, ExternalLink } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const WhatsSpecialPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const testimonials = [
    {
      name: "Niha Anjum",
      position: "Cyber Security Intern",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/Screenshot-2025-04-27-125132.png",
      rating: 5,
      testimonial: "I really appreciate the hands-on approach, even in the early stages - there are plenty of projects that make the concepts more practical and engaging. The video explanations are clear and easy to follow, which helps a lot, especially when diving into technical topics."
    },
    {
      name: "Garima Pandey S",
      position: "Data Analyst Intern",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/Garima-Pandey-Garima-Pandey.jpg",
      rating: 5,
      testimonial: "I gained valuable hands-on experience at Inlighn Tech, where I enhanced my skills by developing a project portfolio using Jupyter Notebook, SQL, MS Excel, and Power BI. I also created interactive dashboards to provide insights into datasets."
    },
    {
      name: "Vignesh",
      position: "Business Analyst Intern",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/03/1718242989174-712x800.jpeg",
      rating: 5,
      testimonial: "I interned in Business Analysis at INLIGHN TECH, where I gained hands-on experience in Market Research, Business Intelligence, and Financial Analysis. The training and projects provided deep insights into business strategies."
    },
    {
      name: "Hariharan Rajendaran",
      position: "Full-Stack Developer Intern",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/03/1707497292282.jpeg",
      rating: 5,
      testimonial: "At INLIGHN TECH, I completed my Full-Stack Development internship, where I worked on React, Node.js, MongoDB, and API development. I built web applications from scratch, which helped me understand both frontend and backend development."
    },
    {
      name: "Athira Nair",
      position: "Data Analyst Intern",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/resume-pic-Athira-Nair.jpeg",
      rating: 5,
      testimonial: "I am grateful for the opportunity I had during this internship. I worked remotely, using the Inlighn Tech platform's LMS, which offers a structured curriculum including video lectures, notes, and projects."
    }
  ];

  const videos = [
    {
      thumbnail: "https://www.inlighntech.com/wp-content/uploads/2025/04/Screenshot-2025-04-07-144617.png",
      url: "https://www.youtube.com/embed/of8EOelhEAg?feature=oembed&autoplay=1&rel=0&controls=0"
    },
    {
      url: "https://www.youtube.com/embed/SuGx6a8WLZA?feature=oembed&autoplay=1&rel=0&controls=0"
    },
    {
      url: "https://www.youtube.com/embed/EM6vdcRCStc?feature=oembed&autoplay=1&rel=0&controls=0"
    }
  ];

  const projects = [
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/Screenshot-2025-04-27-155243.png",
      link: "https://drive.google.com/file/d/1zg2KJ6PJJlG3-FY0_tjAewfP0xcpxr1e/view?usp=sharing"
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/Screenshot-2025-04-27-155434.png",
      link: "https://docs.google.com/presentation/d/1CUslcz6XM013FIqp90nNddkD1va4bm77/edit?usp=sharing&ouid=114932789720521787245&rtpof=true&sd=true"
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/Screenshot-2025-04-27-155626.png",
      link: "https://github.com/G-arimaP/Excel-Project/blob/main/Amazon%20Dashboard.xlsx"
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/Screenshot-2025-04-27-155900.png",
      link: "https://drive.google.com/file/d/1M8oX1FyaiXdv6kIwwoxRNEP37YPoLRS8/view?usp=sharing"
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/05/Screenshot-2025-05-24-125850.png",
      link: "https://github.com/shubhamraut0209/Data-Analyst-Internship-Projects"
    },
    {
      image: "https://www.inlighntech.com/wp-content/uploads/2025/05/Screenshot-2025-05-24-130059.png",
      link: "https://drive.google.com/file/d/1HXIhDx4CIn3ajKDgij7hfDzEqpJNbLsh/view?usp=sharing"
    }
  ];

  const perks = [
    { icon: <Gift className="w-6 h-6" />, title: "Top 10 Intern Reward: ₹15,000 stipend + Welcome kit" },
    { icon: <Award className="w-6 h-6" />, title: "Offer Letter: Within 30 minutes" },
    { icon: <Users className="w-6 h-6" />, title: "Industry-Based Projects" },
    { icon: <Calendar className="w-6 h-6" />, title: "Experience Letter: With QR Code" },
    { icon: <Medal className="w-6 h-6" />, title: "Certificate Verification" },
    { icon: <Puzzle className="w-6 h-6" />, title: "Internship Portal Access: Within 5 minutes" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2s delay for demo
    return () => clearTimeout(timer);
  }, []);

  const Skeleton: React.FC<{ className?: string; type?: 'testimonial' | 'video' | 'project' | 'perk' }> = ({ className, type = 'testimonial' }) => (
    <div className={`bg-gray-800/30 animate-shimmer ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-wave" />
      {type === 'testimonial' && (
        <div className="h-96 w-full rounded-2xl p-6 space-y-4">
          <div className="w-20 h-20 rounded-full mx-auto" />
          <div className="h-6 w-1/2 mx-auto" />
          <div className="h-4 w-3/4 mx-auto" />
          <div className="h-24 w-full" />
        </div>
      )}
      {type === 'video' && <div className="h-64 w-full rounded-2xl" />}
      {type === 'project' && <div className="h-64 w-full rounded-2xl" />}
      {type === 'perk' && (
        <div className="h-32 w-full rounded-2xl p-6 space-y-4">
          <div className="w-12 h-12 rounded-xl mx-auto" />
          <div className="h-6 w-3/4 mx-auto" />
        </div>
      )}
    </div>
  );

  // Character animation variants
  const charVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.2
      }
    }
  };

  // Function to split text into characters
  const splitIntoChars = (text: string, isGradient: boolean = false) => text.split('').map((char, i) => (
    <motion.span
      key={i}
      className={`inline-block ${char === ' ' ? 'w-2' : ''}`}
      variants={charVariants}
      transition={{ type: "spring", stiffness: 180, damping: 12 }}
    >
      <span className={char === ' ' ? '' : isGradient ? 'text-gradient' : 'text-white'}>{char}</span>
    </motion.span>
  ));

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
              className="font-quicksand font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 flex flex-wrap justify-center"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {splitIntoChars("What's ")} {splitIntoChars("Special", true)}
            </motion.h1>
            <motion.p 
              className="font-nunito text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover what makes INLIGHN TECH unique - from our innovative learning approach 
              to exclusive opportunities and recognition programs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-white flex flex-wrap justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {splitIntoChars("Feedback from Our ")} {splitIntoChars("Interns", true)}
            </motion.h2>
          </motion.div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="feedback-skeleton"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feedback-carousel pb-16">
                  {[...Array(3)].map((_, index) => (
                    <Skeleton key={index} type="testimonial" className="w-full h-96" />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="feedback-content"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  centeredSlides={true}
                  navigation={{
                    nextEl: '.feedback-next',
                    prevEl: '.feedback-prev',
                  }}
                  pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet feedback-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active feedback-bullet-active',
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  speed={1000}
                  breakpoints={{
                    1024: {
                      slidesPerView: 3,
                      centeredSlides: true,
                    },
                  }}
                  className="feedback-carousel pb-16"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      {({ isActive }) => (
                        <motion.div
                          className={`glass-card p-6 rounded-2xl h-full transition-all duration-500 ${
                            isActive 
                              ? 'scale-105 shadow-glow' 
                              : 'scale-95 opacity-70'
                          }`}
                          style={{ minHeight: '400px' }}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                          <div className="text-center mb-6">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-20 h-20 lg:w-24 lg:h-24 rounded-full mx-auto mb-4 object-cover border-2 border-white/20"
                            />
                            <h4 className={`font-quicksand font-bold text-lg mb-1 transition-colors duration-300 ${
                              isActive ? 'text-[#667eea]' : 'text-white/70'
                            }`}>
                              {testimonial.name}
                            </h4>
                            <p className={`text-sm transition-colors duration-300 ${
                              isActive ? 'text-[#f093fb]' : 'text-white/60'
                            }`}>
                              {testimonial.position}
                            </p>
                            <div className="flex justify-center gap-1 mt-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          
                          <p className="text-white/90 text-sm lg:text-base leading-relaxed font-nunito">
                            "{testimonial.testimonial}"
                          </p>
                        </motion.div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                  <button className="feedback-prev w-12 h-12 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M12 4L6 10L12 16V4Z"/>
                    </svg>
                  </button>
                  <button className="feedback-next w-12 h-12 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 4L14 10L8 16V4Z"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Knowledge Through Videos */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-[#800C9F] mb-4 tracking-wider uppercase">
              VIDEOS
            </h2>
            <motion.h3 
              className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-white flex flex-wrap justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {splitIntoChars("Knowledge Through ")} {splitIntoChars("Videos", true)}
            </motion.h3>
          </motion.div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="video-skeleton"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="video-carousel">
                  {[...Array(3)].map((_, index) => (
                    <Skeleton key={index} type="video" className="w-full h-64" />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="video-content"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={true}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  speed={1000}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  className="video-carousel"
                >
                  {videos.map((video, index) => (
                    <SwiperSlide key={index}>
                      <motion.div
                        className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => window.open(video.url, '_blank')}
                      >
                        <div className="relative h-64 bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                          {video.thumbnail && (
                            <img
                              src={video.thumbnail}
                              alt="Video Thumbnail"
                              className="w-full h-full object-cover"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <motion.div
                              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Play className="w-8 h-8 text-white ml-1" />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Interns of the Month Challenge */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-[#f093fb] mb-4 tracking-wider uppercase">
              EPIC OPPORTUNITY 🎉✨
            </h2>
            <motion.h3 
              className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-white flex flex-wrap justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {splitIntoChars("Interns of the Month ")} {splitIntoChars("Challenge", true)}
            </motion.h3>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-white/90 max-w-4xl mx-auto">
              Inlighn Tech is bringing you an EPIC opportunity with the "Interns of the Month Challenge"! 🎉✨
              Every single month, we're recognizing 10 OUTSTANDING interns who have shown exceptional 
              dedication, innovation, and top-tier performance! 🏆
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Gift className="w-8 h-8" />, title: "A Stipend Reward of ₹15,000!" },
              { icon: <Award className="w-8 h-8" />, title: "An Exclusive Inlighn Tech Welcome Kit & Swag Pack!" },
              { icon: <Medal className="w-8 h-8" />, title: "Special Recognition on Our Platform!" }
            ].map((perk, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 rounded-2xl text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#f093fb] to-[#f5576c] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {perk.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{perk.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-[#f093fb] mb-4 tracking-wider uppercase">
              BENEFITS
            </h2>
            <motion.h3 
              className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-white flex flex-wrap justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {splitIntoChars("Perks & ")} {splitIntoChars("Benefits", true)}
            </motion.h3>
          </motion.div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="perks-skeleton"
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {[...Array(3)].map((_, index) => (
                    <Skeleton key={index} type="perk" className="w-full" />
                  ))}
                </div>
                <div>
                  <Skeleton type="video" className="w-full h-72 rounded-2xl" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="perks-content"
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src="https://www.inlighntech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-07-at-13.06.10_905a3647.jpg"
                    alt="Perks and Benefits"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {perks.map((perk, index) => (
                    <motion.div
                      key={index}
                      className="glass-card p-6 rounded-2xl"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl flex items-center justify-center mb-4">
                        {perk.icon}
                      </div>
                      <h3 className="text-white font-semibold text-sm leading-relaxed">
                        {perk.title}
                      </h3>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <style>{`
        .feedback-bullet {
          background: #667eea !important;
          opacity: 0.5 !important;
          width: 12px !important;
          height: 12px !important;
        }
        
        .feedback-bullet-active {
          background: #667eea !important;
          opacity: 1 !important;
        }
        
        .swiper-horizontal > .swiper-pagination-bullets {
          bottom: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default WhatsSpecialPage;