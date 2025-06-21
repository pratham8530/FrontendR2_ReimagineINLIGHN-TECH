import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import './AboutPage.css';

const MissionVisionCarousel: React.FC = () => {
  const slides = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="#FDFDFD">
          <path d="M30 5L37 19H52L40.5 28L45 42L30 33L15 42L19.5 28L8 19H23L30 5Z"/>
        </svg>
      ),
      title: "About INLIGHN TECH",
      content: "At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills in Full Stack Development, Data Science, and Project Management.",
      image: "https://www.inlighntech.com/wp-content/uploads/2023/07/img-meta6.jpg"
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="#FDFDFD">
          <path d="M30 10C40 10 48 18 48 28C48 38 40 46 30 46C20 46 12 38 12 28C12 18 20 10 30 10ZM30 15C25 15 21 19 21 24C21 29 25 33 30 33C35 33 39 29 39 24C39 19 35 15 30 15Z"/>
        </svg>
      ),
      title: "Our Mission",
      content: "To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.",
      image: "https://www.inlighntech.com/wp-content/uploads/2023/07/img-meta5.jpg"
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="#FDFDFD">
          <path d="M30 5L35 20L50 20L38 30L43 45L30 37L17 45L22 30L10 20L25 20L30 5Z"/>
        </svg>
      ),
      title: "Our Vision",
      content: "To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.",
      image: null
    }
  ];

  return (
    <section id="mission-vision" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-[#14373C]"
        style={{
          WebkitMaskImage: 'url(https://www.inlighntech.com/wp-content/uploads/2023/07/Background.svg)',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center center',
          WebkitMaskSize: 'cover',
          maskImage: 'url(https://www.inlighntech.com/wp-content/uploads/2023/07/Background.svg)',
          maskRepeat: 'no-repeat',
          maskPosition: 'center center',
          maskSize: 'cover'
        }}
      ></div>

      {/* Decorative SVG Circle */}
      <div className="absolute top-10 left-10 decorative-svg hidden lg:block">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="75" 
            cy="75" 
            r="72" 
            stroke="#9F90FF" 
            strokeWidth="3" 
            opacity="0.3"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            WHO WE ARE
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
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
          className="mission-vision-carousel"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={`bg-[#022B36] rounded-2xl p-8 h-full min-h-[550px] relative overflow-hidden ${index < 3 ? 'ripple-effect' : ''}`}
                style={{
                  background: slide.image 
                    ? `linear-gradient(360deg, #003A39 0%, #02DFBF00 100%), url(${slide.image})`
                    : '#022B36',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className="w-20 h-20 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: 'linear-gradient(180deg, #F8A501 0%, #F8A501 100%)'
                    }}
                  >
                    {slide.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-quicksand font-bold text-2xl text-white mb-4">
                    <a href="#about" className="hover:text-[#02DFBF] transition-colors">
                      {slide.title}
                    </a>
                  </h3>

                  {/* Content */}
                  <p className="text-white/90 leading-relaxed mb-6">
                    {slide.content}
                  </p>

                  {/* Read More Button */}
                  <a 
                    href="#about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#02DFBF] text-white rounded-full font-semibold hover:bg-white hover:text-[#02DFBF] transition-all duration-300"
                  >
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L14 6H10V16H6V6H2L8 0Z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="swiper-button-prev w-12 h-12 bg-[#02DFBF] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#02DFBF] transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 4L6 10L12 16V4Z"/>
            </svg>
          </button>
          <button className="swiper-button-next w-12 h-12 bg-[#02DFBF] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#02DFBF] transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 4L14 10L8 16V4Z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionCarousel;