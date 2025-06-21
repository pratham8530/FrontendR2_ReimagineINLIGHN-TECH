import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: '',
    state: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      domain: '',
      state: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: 'url(https://www.inlighntech.com/wp-content/uploads/2023/07/Background-1.png)',
          backgroundPosition: '50% 600%',
          backgroundSize: 'cover'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto bg-[#0A4A49] rounded-2xl p-8 lg:p-16 relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative SVG Circle */}
          <div className="absolute -top-10 -right-10 decorative-svg hidden lg:block">
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

          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="font-inter font-semibold text-xl text-[#02DFBF]">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="font-quicksand font-bold text-3xl md:text-4xl lg:text-6xl text-white">
              Fill the form to contact us
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white text-lg font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white text-lg font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="domain" className="block text-white text-lg font-semibold mb-2">
                  Domain of Internship *
                </label>
                <input
                  type="text"
                  id="domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  placeholder="Domain of Internship"
                  required
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-white text-lg font-semibold mb-2">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white text-lg font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={5}
                className="form-textarea"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#F8A501] text-white px-10 py-4 rounded-full text-xl font-semibold border-none shadow-none hover:bg-black transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;