// src/components/Header.jsx
import React, { useState } from 'react';
import Button from '../Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navigationButtons = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'more', label: 'More', href: '#more' }
  ];

  const handleTabClick = (tabId, href) => {
    setActiveTab(tabId);
    // Smooth scroll to section
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black bg-opacity-30 border-b border-white border-opacity-10">
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center py-6">
          
          {/* Logo */}
          <div className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Anis
            </span>
            <span className="text-white ml-1">Shaikh</span>
          </div>
          
          {/* Desktop Navigation - Button Style */}
          <nav className="hidden lg:flex space-x-4">
            {navigationButtons.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id, item.href)}
                className={`
                  px-4 py-2 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 relative overflow-hidden
                  ${activeTab === item.id 
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg' 
                    : 'text-white hover:text-emerald-400 bg-white bg-opacity-5 hover:bg-opacity-10'
                  }
                `}
              >
                <span className="relative z-10">{item.label}</span>
                {activeTab !== item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
            
            {/* Contact Button */}
            <Button variant="primary" size="medium" className="ml-4">
              Contact
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white hover:text-emerald-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-7 h-7 flex flex-col justify-center items-center">
              <span className={`block w-7 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1'}`}></span>
              <span className={`block w-7 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
              <span className={`block w-7 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-white border-opacity-20 py-6 backdrop-blur-lg">
            <div className="flex flex-col space-y-4">
              {navigationButtons.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleTabClick(item.id, item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`
                    px-4 py-3 rounded-lg font-bold text-lg transition-all duration-300 text-left
                    ${activeTab === item.id 
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white' 
                      : 'text-white hover:text-emerald-400 bg-white bg-opacity-5 hover:bg-opacity-10'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button variant="primary" size="medium" className="w-full">
                  Contact
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
