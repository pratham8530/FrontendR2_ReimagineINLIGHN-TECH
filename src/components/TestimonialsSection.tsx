import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Mirunalini R",
      position: "Data Analyst Intern",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/03/1736172583974.jpeg",
      testimonial: "During my Data Analytics internship at INLIGHN TECH, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world business intelligence projects, which helped me understand data-driven decision-making. The mentorship and structured learning approach made a significant impact on my skills."
    },
    {
      name: "Surendra Kumar",
      position: "Data Science Intern (India)",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-02-24-at-11.20.06_dd9ec3aa.jpg",
      testimonial: "I completed my Data Science internship at INLIGHN TECH, where I gained hands-on experience in Machine Learning, Data Visualization, and AI Models. Working on real-world datasets helped me apply my knowledge in a practical way. The structured guidance and expert mentorship improved my problem-solving and analytical skills. ✅ Thanks to this experience."
    },
    {
      name: "Vignesh",
      position: "Business Analyst Intern",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/03/1718242989174-712x800.jpeg",
      testimonial: "I interned in Business Analysis at INLIGHN TECH, where I gained hands-on experience in Market Research, Business Intelligence, and Financial Analysis. The training and projects provided deep insights into business strategies, and I developed strong analytical and problem-solving skills. The experience was incredibly valuable for my career."
    },
    {
      name: "Hariharan Rajendaran",
      position: "Full-Stack Developer Intern",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/03/1707497292282.jpeg",
      testimonial: "At INLIGHN TECH, I completed my Full-Stack Development internship, where I worked on React, Node.js, MongoDB, and API development. I built web applications from scratch, which helped me understand both frontend and backend development. The real-world exposure and expert guidance made me industry-ready."
    },
    {
      name: "Sumit Vishwas",
      position: "Python Developer Intern",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/03/1721078013679-712x800.jpg",
      testimonial: "My Python Development internship at INLIGHN TECH gave me hands-on experience with Django, Flask, Web Scraping, and Automation. I worked on projects that enhanced my programming skills and helped me understand backend development better. The structured learning path made a big difference in my confidence and abilities."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#07252a]"></div>
      
      {/* Decorative SVG Circle */}
      <div className="absolute top-10 left-10 decorative-svg hidden lg:block">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="75" 
            cy="75" 
            r="72" 
            stroke="#02DFBF" 
            strokeWidth="3" 
            opacity="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <span 
              className="font-inter font-semibold text-xl px-6 py-2 rounded-full"
              style={{ 
                color: '#F8A501',
                background: 'linear-gradient(90deg, #F8A501 0%, #F8A501 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              TESTIMONIALS
            </span>
          </div>
          <h2 className="font-quicksand font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            What Our Interns Say
          </h2>
        </motion.div>

        <motion.div
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
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet testimonial-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-carousel pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <motion.div
                    className={`p-6 rounded-2xl h-full transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-b from-[#063A41] to-[#063A41] scale-105 shadow-lg' 
                        : 'bg-transparent scale-95 opacity-70'
                    }`}
                    style={{ 
                      minHeight: '450px', // Increased from 350px to 450px
                      maxHeight: window.innerWidth < 640 ? '550px' : '500px', // Increased from 400px/450px
                      overflowY: 'visible' // Removed hidden to allow text to display fully
                    }}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="text-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mx-auto mb-4 object-cover border-2 border-[#02DFBF]"
                        style={{ maxWidth: '142px' }}
                      />
                      <h4 
                        className={`font-quicksand font-bold text-xl mb-1 transition-colors duration-300 ${
                          isActive ? 'text-[#F8A501]' : 'text-[#0A4A49]'
                        }`}
                      >
                        {testimonial.name}
                      </h4>
                      <p 
                        className={`text-sm transition-colors duration-300 ${
                          isActive ? 'text-[#02DFBF]' : 'text-[#F8A501]'
                        }`}
                      >
                        {testimonial.position}
                      </p>
                    </div>
                    <p className="text-white text-base lg:text-lg leading-relaxed font-quicksand">
                      "{testimonial.testimonial}"
                    </p>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="testimonial-prev w-12 h-12 bg-[#02DFBF] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#02DFBF] transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M12 4L6 10L12 16V4Z"/>
              </svg>
            </button>
            <button className="testimonial-next w-12 h-12 bg-[#02DFBF] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#02DFBF] transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 4L14 10L8 16V4Z"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .testimonial-bullet {
          background: #40CCFC !important;
          opacity: 0.5 !important;
          width: 12px !important;
          height: 12px !important;
        }
        
        .testimonial-bullet-active {
          background: #40CCFC !important;
          opacity: 1 !important;
          transform: scale(1.2);
        }
        
        .swiper-horizontal > .swiper-pagination-bullets {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;