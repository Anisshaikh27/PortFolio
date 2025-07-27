// src/pages/Services.jsx
import React from 'react';
import Button from '../components/Button';

const Services = () => {
  const services = [
    // ... your services data
  ];

  return (
    <section className="py-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            My Services
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I provide comprehensive development services, from web applications to AI solutions. 
            Here's how I can help bring your ideas to life with cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10 hover:border-emerald-400 hover:border-opacity-30 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Service content */}
            </div>
          ))}
        </div>

        {/* Call to Action - Using Link instead of DOM manipulation */}
        <div className="text-center bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Services;
