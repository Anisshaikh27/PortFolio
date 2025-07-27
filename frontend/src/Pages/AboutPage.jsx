// src/pages/About.jsx
import React from 'react';
import Button from '../components/Button';

const About = () => {
  // ... your component data

  return (
    <section className="py-20 relative min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate developer with expertise in full-stack development, machine learning, and AI solutions.
          </p>
        </div>

        {/* Content sections */}
        {/* ... your about content */}

        {/* Call to Action - Using Link */}
        <div className="text-center bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Let's Connect!
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            I'm always interested in discussing new opportunities, collaborating on projects, or just having a chat about technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" to="/contact">
              Get In Touch
            </Button>
            <Button variant="accent" size="large" href="/resume.pdf">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
