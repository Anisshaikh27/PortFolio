// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { 
  SiReact, 
  SiPython, 
  SiTensorflow,
  SiAmazonwebservices,
  SiDocker,
  SiMongodb
} from 'react-icons/si';
import { 
  FaRobot, 
  FaCode, 
  FaBrain, 
  FaServer,
  FaPalette,
  FaChartBar
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <SiPython className="text-blue-400" />,
      title: "Machine Learning Solutions",
      description: "End-to-end ML pipelines, model training, and deployment with MLOps best practices using Python, TensorFlow, and AWS.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "MLflow", "AWS"],
      features: ["Model Development", "Data Pipeline", "MLOps Integration", "Cloud Deployment"]
    },
    {
      icon: <SiReact className="text-cyan-400" />,
      title: "Full-Stack Web Development",
      description: "Modern, responsive web applications using MERN stack with clean UI/UX and robust backend architecture.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      features: ["Responsive Design", "RESTful APIs", "Authentication", "Database Design"]
    },
    {
      icon: <FaRobot className="text-emerald-400" />,
      title: "AI Chatbot Development",
      description: "Intelligent conversational AI systems using RASA framework with NLP capabilities and custom integrations.",
      technologies: ["RASA", "NLP", "Python", "Custom Actions", "LLM Integration"],
      features: ["Natural Language Processing", "Intent Recognition", "Custom Responses", "API Integration"]
    },
    {
      icon: <FaChartBar className="text-purple-400" />,
      title: "Data Science & Analytics",
      description: "Data analysis, visualization, and insights extraction with comprehensive reporting and dashboard creation.",
      technologies: ["Pandas", "NumPy", "Plotly", "Tableau", "Statistical Analysis"],
      features: ["Data Visualization", "Statistical Analysis", "Report Generation", "Dashboard Creation"]
    },
    {
      icon: <SiAmazonwebservices className="text-orange-400" />,
      title: "Cloud Solutions & DevOps",
      description: "Cloud infrastructure setup, CI/CD pipelines, containerization, and deployment automation on AWS.",
      technologies: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Infrastructure as Code"],
      features: ["Cloud Architecture", "Container Deployment", "Automated Pipelines", "Monitoring Setup"]
    },
    {
      icon: <FaPalette className="text-pink-400" />,
      title: "UI/UX Design & Consulting",
      description: "Modern, user-centric design solutions with focus on usability, accessibility, and conversion optimization.",
      technologies: ["Figma", "Tailwind CSS", "Bootstrap", "Responsive Design", "User Research"],
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"]
    }
  ];

  return (
    <section className="py-20 relative min-h-screen px-8 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-jetbrains font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            My Services
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed font-jetbrains">
            I provide comprehensive development services, from web applications to AI solutions. 
            Here's how I can help bring your ideas to life with cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10 hover:border-emerald-400 hover:border-opacity-30 transition-all duration-500 hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Service Icon */}
              <div className="text-4xl mb-4 flex justify-center">
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300 font-jetbrains text-center">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 font-jetbrains">
                {service.description}
              </p>
              
              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-emerald-400 font-semibold mb-2 text-sm font-jetbrains">Key Features:</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-emerald-500 bg-opacity-20 text-emerald-300 rounded-md text-xs font-medium font-jetbrains"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-jetbrains">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto font-jetbrains">
            Let's discuss your requirements and create something amazing together. 
            I'm here to help you turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" to="/contact">
              Get Started
            </Button>
            <Button variant="secondary" size="large" to="/projects">
              View My Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
