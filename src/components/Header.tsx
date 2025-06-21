import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Verify Certificate', href: '/verify-certificate' },
    { name: "What's Special", href: '/whats-special' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'glass shadow-glow' : 'bg-white/95 backdrop-blur-sm shadow-lg'
      } border-t border-b border-[#3CA39D]`}
      initial={{ y: -100 }}
      animate={{ y: 0, height: isSticky ? '64px' : '80px', padding: isSticky ? '0 16px' : '0 16px' }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className={`flex items-center justify-between w-full ${isSticky ? 'h-16' : 'h-20'} lg:${isSticky ? 'h-20' : 'h-24'}`}>
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="block">
              <img 
                src="https://www.inlighntech.com/wp-content/uploads/2025/04/inlighn-tech-logo.png"
                alt="INLIGHN TECH"
                className={`h-${isSticky ? '12' : '16'} lg:h-${isSticky ? '16' : '20'} w-auto object-contain transition-all duration-300`}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`relative text-black font-medium transition-all duration-300 hover:text-[#667eea] ${
                    isActive(item.href) ? 'text-[#667eea]' : ''
                  } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:transition-all after:duration-300 hover:after:w-full ${
                    isActive(item.href) ? 'after:w-full' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Login Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="/login"
              className="btn-secondary animate-pulse-glow"
            >
              Login to Portal
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
            className={`lg:hidden fixed top-full left-0 w-full z-40 transition-all duration-300 border-t border-[#3CA39D] shadow-xl ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            initial={false}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : -10
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-b from-white via-[#f0f0f0]/90 to-white/80 backdrop-blur-md">
              <nav className="py-4 space-y-4 px-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`block text-black font-semibold text-base transition-colors duration-300 hover:text-[#667eea] ${
                        isActive(item.href) ? 'text-[#667eea]' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <Link
                    to="/login"
                    className="inline-block btn-secondary mt-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login to Portal
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>


      </div>
    </motion.header>
  );
};

export default Header;