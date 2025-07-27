// src/components/Hero.jsx
import React from 'react';
import Button from '../Button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Anis Shaikh
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                Frontend Developer & UI Designer
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I create beautiful, responsive websites and web applications 
                that provide exceptional user experiences with modern technologies 
                and clean, efficient code.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="primary" size="large">
                View My Work
              </Button>
              <Button variant="secondary" size="large">
                Get In Touch
              </Button>
            </div>
            
            {/* Stats Cards */}
            <div className="flex justify-center lg:justify-start gap-6">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 text-center border border-cyan-400 border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-400 border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 text-center border border-indigo-400 border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Clients</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white text-lg font-medium relative overflow-hidden">
                {/* Profile placeholder */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-4 backdrop-blur-sm"></div>
                  <p className="text-white font-medium">Your Photo Here</p>
                </div>
                
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-4 border-white border-opacity-30 animate-spin" style={{animationDuration: '10s'}}></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
