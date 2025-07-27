// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedRole from '../components/AnimatedRole';
import AnimatedProfile from '../components/AnimatedProfile';

const HomePage = () => {
  return (
    <section className="min-h-screen flex items-center py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              {/* Animated Main Heading */}
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white">Hi, I'm </span>
                <motion.span 
                  className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Anis Shaikh
                </motion.span>
              </motion.h1>
              
              {/* Replace the static subtitle with AnimatedRole */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <AnimatedRole />
              </motion.div>
              
              {/* Animated Description */}
              <motion.p 
                className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                A Tech Enthusiastic Web Developer with a Passion for Crafting Digital Experiences.
              </motion.p>
            </div>
            
            {/* Animated Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button variant="primary" size="large" to="/projects">
                View My Work
              </Button>
              <Button variant="secondary" size="large" to="/contact">
                Get In Touch
              </Button>
            </motion.div>
            
            {/* Animated Stats Cards */}
            <motion.div 
              className="flex justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { number: "10+", label: "Projects", color: "emerald" },
                { number: "0", label: "Years", color: "cyan" },
                { number: "0", label: "Clients", color: "teal" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 text-center border border-${stat.color}-400 border-opacity-20 hover:border-opacity-40 hover:bg-opacity-10 transition-all duration-300`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.6 + (index * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Right Side - Animated Profile Picture */}
          <AnimatedProfile />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
