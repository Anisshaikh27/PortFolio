// src/components/AnimatedRole.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, 
  SiPython, 

} from 'react-icons/si';
import { 
  FaRobot, 
  FaBrain, 
  FaServer,

} from 'react-icons/fa';

const roles = [
  { 
    text: 'AI/ML Engineer', 
    icon: <FaBrain className="text-emerald-400" />,
    gradient: 'from-emerald-400 to-cyan-400'
  },
  { 
    text: 'React Developer', 
    icon: <SiReact className="text-blue-400" />,
    gradient: 'from-blue-400 to-purple-400'
  },
  { 
    text: 'Python Developer', 
    icon: <SiPython className="text-yellow-400" />,
    gradient: 'from-yellow-400 to-green-400'
  },
  { 
    text: 'Full Stack Developer', 
    icon: <FaServer className="text-purple-400" />,
    gradient: 'from-purple-400 to-pink-400'
  },
  { 
    text: 'MLOPS Engineer', 
    icon: <FaRobot className="text-pink-400" />,
    gradient: 'from-pink-400 to-rose-400'
  }
];

const AnimatedRole = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentIndex];

  return (
    <div className="flex items-center justify-center lg:justify-start gap-3 h-12 mb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRole.text}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
          className="flex items-center gap-3"
        >
          {/* Animated Icon */}
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ 
              delay: 0.2, 
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="text-2xl"
          >
            {currentRole.icon}
          </motion.div>

          {/* Animated Text */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className={`text-xl md:text-2xl font-medium bg-gradient-to-r ${currentRole.gradient} bg-clip-text text-transparent`}
          >
            {currentRole.text}
          </motion.span>
        </motion.div>
      </AnimatePresence>

      
    </div>
  );
};

export default AnimatedRole;
