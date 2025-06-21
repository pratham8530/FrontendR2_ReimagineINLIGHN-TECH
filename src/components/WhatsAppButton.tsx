import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the visibility to ensure it pops up after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // 0.5-second delay after mount
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919368842663";
    const message = "Hello 👋\nCan we help you?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Animation variants for popup effect
  const buttonVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } },
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 z-50">
      <motion.div
        className="relative"
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap">
            Need Help?
            <div className="absolute top-full left-4 w-2 h-2 bg-gray-800 transform rotate-45"></div>
          </div>
        )}
        
        {/* WhatsApp Button */}
        <motion.button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="whatsapp-button group bg-green-500 p-3 rounded-full shadow-lg"
          aria-label="Open WhatsApp chat"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WhatsAppButton;