import React from 'react';
import { motion } from 'framer-motion';
import './MobileContactButton.css';

const MobileContactButton = () => {
  return (
    <motion.a 
      href="#contact" 
      className="mobileContactButton"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <div className="mobileContactButton-container">
        {/* Rotating circle */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="mobileContactButton-circle"
        >
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <circle cx="50" cy="50" r="45" fill="navy" />
            <path
              id="mobileCirclePath"
              fill="none"
              d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
            />
            <text className="mobileContactButton-text">
              <textPath href="#mobileCirclePath" fill="white">Contact Me •</textPath>
            </text>
          </svg>
        </motion.div>
        
        {/* Non-rotating icon in center */}
        <div className="mobileContactButton-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            {/* Envelope icon */}
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 7l10 7 10-7" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};

export default MobileContactButton;