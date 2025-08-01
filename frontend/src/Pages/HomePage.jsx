// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import AnimatedRole from "../components/AnimatedRole";
import AnimatedProfile from "../components/AnimatedProfile";
import { 
  SiReact, 
  SiMongodb, 
  SiPython, 
  SiTensorflow,
  SiAmazonwebservices,
  SiDocker,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiTailwindcss,
  SiFlask
} from 'react-icons/si';

const Home = () => {
  const topSkills = [
    { name: 'React', icon: <SiReact />, color: '#61dafb' },
    { name: 'Python', icon: <SiPython />, color: '#3776ab' },
    { name: 'TensorFlow', icon: <SiTensorflow />, color: '#ff6f00' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'AWS', icon: <SiAmazonwebservices />, color: '#ff9900' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ed' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
    { name: 'Git', icon: <SiGit />, color: '#f05032' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06b6d4' },
    { name: 'Flask', icon: <SiFlask />, color: '#000000' }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-between pt-2 pb-12 px-8 lg:px-16 xl:px-20 relative">
      {/* Main Content Section */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-jetbrains font-bold leading-tight mb-6"
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

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <AnimatedRole />
                </motion.div>

                <motion.p
                  className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-jetbrains"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  Full-stack developer skilled in creating responsive web applications with React and building intelligent ML solutions using Python.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Button variant="primary" size="large" to="/projects">
                  View My Work
                </Button>
                <Button variant="secondary" size="large" href="/resume.pdf">
                  Download Resume
                </Button>
              </motion.div>

              <motion.div
                className="flex justify-center lg:justify-start gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {[
                  { number: "2+", label: "Core Tech", color: "emerald" },
                  { number: "15+", label: "Projects", color: "cyan" },
                  { number: "0", label: "Years", color: "teal" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={`bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 text-center border border-${stat.color}-400 border-opacity-20 hover:border-opacity-40 hover:bg-opacity-10 transition-all duration-300`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-jetbrains font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm font-jetbrains text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Animated Profile */}
            <AnimatedProfile />
          </div>
        </div>
      </div>

      {/* Top Skills Section - Floating at Bottom */}
      <motion.div
        className="mt-12 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-jetbrains font-bold text-white mb-2">
            Technologies I Work With
          </h3>
          <p className="text-gray-400 font-jetbrains text-sm">
            My core tech stack and tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-10 hover:border-emerald-400 hover:border-opacity-30 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 2.2 + index * 0.1,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Skill Icon */}
              <div 
                className="text-3xl mb-2 flex justify-center"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <div className="text-white font-jetbrains text-sm text-center font-medium">
                {skill.name}
              </div>
              
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ 
                  background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
