// src/components/CustomBackground.jsx
import React from 'react';

const CustomBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* New darker, more sophisticated gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      {/* Enhanced floating elements with better colors */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Large emerald orb */}
        <div 
          className="absolute w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-gentle-float"
          style={{
            top: '15%',
            left: '10%',
            animationDelay: '0s',
            animationDuration: '12s'
          }}
        ></div>
        
        {/* Large cyan orb */}
        <div 
          className="absolute w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-gentle-float"
          style={{
            top: '50%',
            right: '15%',
            animationDelay: '4s',
            animationDuration: '10s'
          }}
        ></div>
        
        {/* Medium teal orb */}
        <div 
          className="absolute w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-gentle-float"
          style={{
            bottom: '25%',
            left: '50%',
            animationDelay: '8s',
            animationDuration: '14s'
          }}
        ></div>
        
        {/* Accent purple orb */}
        <div 
          className="absolute w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-18 animate-gentle-pulse"
          style={{
            top: '30%',
            left: '70%',
            animationDelay: '2s',
            animationDuration: '8s'
          }}
        ></div>
        
        {/* Small accent orbs */}
        <div 
          className="absolute w-48 h-48 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-12 animate-gentle-pulse"
          style={{
            bottom: '40%',
            right: '40%',
            animationDelay: '6s',
            animationDuration: '9s'
          }}
        ></div>
      </div>
      
      {/* Enhanced particle system */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Larger, more visible particles */}
        <div 
          className="absolute w-3 h-3 bg-emerald-300 rounded-full opacity-30 animate-drift-up"
          style={{
            top: '80%',
            left: '15%',
            animationDelay: '0s',
            animationDuration: '20s'
          }}
        ></div>
        <div 
          className="absolute w-2 h-2 bg-cyan-300 rounded-full opacity-40 animate-drift-up"
          style={{
            top: '90%',
            left: '35%',
            animationDelay: '7s',
            animationDuration: '18s'
          }}
        ></div>
        <div 
          className="absolute w-2.5 h-2.5 bg-teal-300 rounded-full opacity-35 animate-drift-up"
          style={{
            top: '85%',
            right: '30%',
            animationDelay: '12s',
            animationDuration: '22s'
          }}
        ></div>
        <div 
          className="absolute w-3 h-3 bg-purple-300 rounded-full opacity-25 animate-drift-up"
          style={{
            top: '95%',
            right: '20%',
            animationDelay: '5s',
            animationDuration: '16s'
          }}
        ></div>
        <div 
          className="absolute w-2 h-2 bg-pink-300 rounded-full opacity-30 animate-drift-up"
          style={{
            top: '88%',
            left: '60%',
            animationDelay: '10s',
            animationDuration: '19s'
          }}
        ></div>
      </div>
      
      {/* Sophisticated mesh overlay */}
      <div 
        className="fixed inset-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(34, 211, 238, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(20, 184, 166, 0.10) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.06) 0%, transparent 50%)
          `
        }}
      ></div>
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CustomBackground;
