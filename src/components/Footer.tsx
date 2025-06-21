import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const menuLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Login To Portal', href: 'https://inlighntech.podia.com/login', external: true }
  ];

  const quickLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Term & Conditions', href: '#terms' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: "FAQ's", href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/inlighn-tech/',
      icon: 'fab fa-linkedin-in'
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/inlighn_tech/?hl=en',
      icon: 'fab fa-instagram'
    },
    { 
      name: 'YouTube', 
      href: 'https://www.youtube.com/@INLIGHNTECH',
      icon: 'fab fa-youtube'
    }
  ];

  return (
    <footer id="pxl-footer-elementor" className="bg-[#022B36] relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://www.inlighntech.com/wp-content/uploads/2025/04/inlighn-tech-logo.png"
              alt="INLIGHN TECH"
              className="h-24 lg:h-32 w-auto mx-auto lg:mx-0 object-contain"
            />
            <p className="font-nunito text-white text-lg leading-relaxed">
              At INLIGHN TECH, we believe that the future of education lies in bridging 
              the gap between academic learning and industry needs.
            </p>
          </motion.div>

          {/* Menu Links */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-[#02DFBF] text-2xl font-bold mb-6 uppercase">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link, index) => (
                <li key={index} className="-mt-2">
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-white hover:text-[#02DFBF] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-[#02DFBF] text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="-mt-2">
                  <a
                    href={link.href}
                    className="text-white hover:text-[#02DFBF] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Follow Us & Contact Info */}
          <motion.div
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <h3 className="text-[#02DFBF] text-2xl font-bold mb-6">Follow us</h3>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white text-[#022B36] rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-[#02DFBF] flex-shrink-0 mt-1" />
                <p className="text-white text-sm leading-relaxed">
                  Corporate Office- Office No: VO-301, WeWork Prestige Central, Ground Floor, 
                  36, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001
                </p>
              </div>
              
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone className="w-5 h-5 text-[#02DFBF]" />
                <a 
                  href="tel:919368842663" 
                  className="text-white hover:text-[#02DFBF] transition-colors"
                >
                  +91 9368842663
                </a>
              </div>
              
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Mail className="w-5 h-5 text-[#02DFBF]" />
                <a 
                  href="mailto:contact@inlighntech.com" 
                  className="text-white hover:text-[#02DFBF] transition-colors"
                >
                  contact@inlighntech.com
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8539622838452!2d77.60328659999999!3d12.9811909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1747be80a971%3A0xdff198e5f32aa7e2!2sInlighn%20Tech!5e0!3m2!1sen!2sin!4v1743243825900!5m2=1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#022B36] border-t border-[#0A4A49] py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-nunito text-white text-base font-bold leading-relaxed">
              Copyright 2025{' '}
              <a href="#home" className="text-[#02DFBF] hover:text-white transition-colors">
                INLIGHN TECH
              </a>
              {' '}| All Rights Reserved | Design By{' '}
              <a 
                href="https://gdscreatives.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#02DFBF] hover:text-white transition-colors"
              >
                Gdscreatives
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;