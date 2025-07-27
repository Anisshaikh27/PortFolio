// src/components/SimpleFloatingProfile.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiMongodb, 
  SiPython, 
  SiTensorflow,
  SiAmazons3,
  SiDocker
} from 'react-icons/si';

const techIcons = [
  { icon: <SiPython />, color: '#3776ab', name: 'Python', x: -100, y: -80 },
  { icon: <SiReact />, color: '#61dafb', name: 'React', x: 120, y: -60 },
  { icon: <SiTensorflow />, color: '#ff6f00', name: 'TensorFlow', x: -140, y: 60 },
  { icon: <SiMongodb />, color: '#47a248', name: 'MongoDB', x: 110, y: 90 },
  { icon: <SiAmazons3 />, color: '#ff9900', name: 'AWS', x: -80, y: 120 },
  { icon: <SiDocker />, color: '#2496ed', name: 'Docker', x: 100, y: -110 }
];

const AnimatedProfile = () => {
  return (
    <div className="flex-1 flex justify-center">
      <div className="relative w-96 h-96 flex items-center justify-center">
        
        {/* Profile Picture */}
        <div className="w-80 h-80 rounded-full shadow-xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/800px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg"
            alt="Profile"
            className="w-72 h-72 rounded-full object-cover"
          />
        </div>

        {/* Simple Floating Tech Icons */}
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute w-16 h-16 cursor-pointer"
            style={{ x: tech.x, y: tech.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{
              delay: 0.5 + index * 0.1,
              y: {
                duration: 2 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ 
              scale: 1.1,
              rotateZ: 15,
              transition: { duration: 0.2 }
            }}
          >
            <div 
              className="w-full h-full rounded-xl flex items-center justify-center text-2xl"
              style={{
                backgroundColor: `${tech.color}20`,
                border: `2px solid ${tech.color}`,
                color: tech.color
              }}
            >
              {tech.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedProfile;
