import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: '',
    state: '',
    message: ''
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      domain: '',
      state: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Address",
      content: "contact@inlighntech.com",
      link: "mailto:contact@inlighntech.com",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/Screenshot-2025-04-10-193606.png"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      content: "+91-9368842663",
      link: "tel:919368842663",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/Screenshot-2025-04-10-193644.png"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Our Office",
      content: "Corporate Office- Office No: VO-301, WeWork Prestige Central, Ground Floor, 36, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/Screenshot-2025-04-10-193708.png"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Registered Office",
      content: "Opposite swasti hospital anupam nagar badaun road bareilly uttar pradesh 243001",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/Screenshot-2025-04-10-193654.png"
    }
  ];

  const faqs = [
    {
      question: "What makes Inlighn Tech different from other learning platforms?",
      answer: "Inlighn Tech provides top-quality learning modules and projects based on the latest industry technologies and trends."
    },
    {
      question: "How can I register for an internship?",
      answer: "Go to the Internships section and click on Apply Now."
    },
    {
      question: "After filling out the registration form, whom should I contact?",
      answer: "Once you complete your registration, you will receive a WhatsApp group invitation for your batch, where further updates will be shared. You can also contact us via WhatsApp at 9368842663."
    },
    {
      question: "What is the project submission deadline?",
      answer: "Your project submission deadline will be the same as your internship completion date. You must submit your project before the completion date."
    },
    {
      question: "Is it mandatory to submit a project only from the available options on the portal?",
      answer: "No, it is not mandatory to submit a project only from the available options. You can submit your own project as long as it is relevant to your internship domain."
    },
    {
      question: "How can I proceed with signing up at Inlighn Tech?",
      answer: "Once you complete the Apply Now process, you will receive access to your internship portal via email. From there, you can sign up for your account."
    },
    {
      question: "Can I earn a certificate after completing an internship at Inlighn Tech?",
      answer: "Yes, once you complete all the learning modules in your internship portal, you will receive a completion certificate."
    },
    {
      question: "Can I interact with internship mentors for guidance?",
      answer: "Yes, a chat option is available in your internship portal to connect with your mentors."
    },
    {
      question: "What is the difference between a completion letter and an experience letter?",
      answer: "A completion letter is issued when you complete your internship duration and the required learning modules in your portal. However, an experience letter requires you to submit your project work with details. Without a project submission, you will not receive an experience letter."
    }
  ];

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
              className="font-quicksand font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact <span className="text-gradient">Us</span>
            </motion.h1>
            <motion.p 
              className="font-nunito text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get in touch with us for any questions about our internship programs, 
              technical support, or partnership opportunities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 rounded-2xl text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-20 h-20 mx-auto mb-6">
                  <img
                    src={info.image}
                    alt={info.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-white/80 hover:text-[#667eea] transition-colors leading-relaxed"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-white/80 leading-relaxed">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            className="max-w-4xl mx-auto glass-card p-8 lg:p-16 rounded-3xl relative"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="font-inter font-semibold text-xl text-[#667eea]">
                  GET IN TOUCH
                </span>
              </div>
              <h2 className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-white">
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
                <motion.button
                  type="submit"
                  className="btn-primary text-xl py-4 px-12"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" id="faq-head">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-[#667eea] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#667eea] flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="glass-card p-4 rounded-3xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8539622838452!2d77.60328659999999!3d12.9811909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1747be80a971%3A0xdff198e5f32aa7e2!2sInlighn%20Tech!5e0!3m2!1sen!2sin!4v1743243825900!5m2=1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;