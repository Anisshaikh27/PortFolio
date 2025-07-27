// src/components/GlassmorphismProfile.jsx
import React from 'react';
import { motion } from 'framer-motion';

import Image from "../assets/images/AI_image.webp";
import { 
  SiReact, 
  SiMongodb, 
  SiPython, 
  SiTensorflow,
  SiAmazonwebservices,
  SiDocker
} from 'react-icons/si';

// MUCH BETTER positioning - farther from the profile picture
const techStack = [
  { icon: <SiPython />, color: '#3776ab', name: 'Python', x: -170, y: -120 },    // Far top left
  { icon: <SiReact />, color: '#61dafb', name: 'React', x: 170, y: -120 },      // Far top right  
  { icon: <SiTensorflow />, color: '#ff6f00', name: 'TensorFlow', x: -170, y: 20 }, // Far middle left
  { icon: <SiMongodb />, color: '#47a248', name: 'MongoDB', x: 170, y: 20 },    // Far middle right
  { icon: <SiAmazonwebservices />, color: '#ff9900', name: 'AWS', x: -130, y: 140 }, // Far bottom left
  { icon: <SiDocker />, color: '#2496ed', name: 'Docker', x: 130, y: 140 }      // Far bottom right
];

const AnimatedProfile = () => {
  return (
    <motion.div 
      className="flex-1 flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* WIDER container to accommodate distant icons */}
      <div className="relative w-[32rem] h-[32rem]">
        
        {/* Profile picture container - CENTERED */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 xl:w-96 xl:h-96">
          
          {/* Outer glow ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-cyan-400/20 to-teal-400/30 rounded-full blur-2xl animate-pulse" />

          {/* Main container with glassmorphism */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-3 shadow-2xl">
            
            {/* Inner gradient border */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400/20 via-transparent to-cyan-400/20 p-1">
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-emerald-400/10 to-cyan-400/10">
                
                {/* Actual photo */}
                <img
                  src={Image}
                  alt="Anis Shaikh - Full Stack Developer"
                  className="w-full h-full object-cover object-center rounded-full transform hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay gradient for modern effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/20 via-transparent to-transparent rounded-full" />

                {/* Floating accent dots */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1000ms' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Icons - POSITIONED RELATIVE TO CONTAINER, NOT PROFILE */}
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute w-16 h-16 cursor-pointer"
            style={{ 
              left: `calc(50% + ${tech.x}px)`, 
              top: `calc(50% + ${tech.y}px)`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              y: [0, -8, 0]
            }}
            transition={{
              opacity: { delay: 1 + index * 0.15 },
              scale: { delay: 1 + index * 0.15, type: "spring", stiffness: 200 },
              rotate: { delay: 1 + index * 0.15 },
              y: {
                duration: 2.5 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ 
              scale: 1.2,
              rotate: 12,
              transition: { duration: 0.2 }
            }}
          >
            {/* Icon container */}
            <div 
              className="w-full h-full rounded-xl flex items-center justify-center text-xl backdrop-blur-sm border border-white/30"
              style={{
                background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}40)`,
                boxShadow: `0 4px 16px ${tech.color}30`,
                color: tech.color
              }}
            >
              {tech.icon}
            </div>
            
            {/* Tooltip */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-jetbrains opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {tech.name}
            </div>
          </motion.div>
        ))}

        {/* Name Label - BELOW the container */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <h3 className="text-white font-jetbrains font-bold text-lg">
            Anis Shaikh
          </h3>
          <p className="text-emerald-400 font-jetbrains text-sm">
            Full Stack Developer
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedProfile;
