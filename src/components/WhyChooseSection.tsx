import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: "flaticon flaticon-puzzle",
      title: "Career Support",
      description: "We go beyond training. Our career services include portfolio reviews, interview prep, and connections with industry professionals to help you land your dream job."
    },
    {
      icon: "far fa-book-user",
      title: "Tailored Programs",
      description: "Our courses in Full Stack Development, Data Science, and Project Management are crafted with a focus on hands-on, practical learning."
    }
  ];

  return (
    <section className="py-20 bg-[#07252a]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-quicksand font-bold text-center text-4xl md:text-5xl lg:text-6xl text-white mb-16"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Feature Boxes */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-r from-[#063A41]/50 to-[#0A4A49]/50 backdrop-blur-sm border border-[#0A4A49]/30"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#02DFBF] to-[#F8A501] flex items-center justify-center">
                    <i className={`${feature.icon} text-2xl text-white`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-quicksand font-bold text-2xl text-white mb-4 mt-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Image with Parallax */}
          <div className="relative">
            <motion.div
              className="relative"
              style={{
                backgroundImage: 'url(https://www.inlighntech.com/wp-content/uploads/2023/11/Vector16-13.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0px -125px',
                backgroundSize: 'cover'
              }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <img
                src="https://www.inlighntech.com/wp-content/uploads/2025/04/career-scaled.jpg"
                alt="Career development"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                style={{ maxHeight: '600px' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;