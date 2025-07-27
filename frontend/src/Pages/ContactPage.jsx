// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // ... form handling logic

  return (
    <section className="py-20 relative min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
            {/* ... your form */}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10">
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <Button variant="secondary" size="small" href="https://github.com/Anisshaikh27">
                  GitHub
                </Button>
                <Button variant="secondary" size="small" href="https://linkedin.com/in/your-profile">
                  LinkedIn
                </Button>
                <Button variant="secondary" size="small" href="https://twitter.com/your-handle">
                  Twitter
                </Button>
              </div>
            </div>

            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10">
              <h3 className="text-xl font-bold text-white mb-4">Explore More</h3>
              <div className="space-y-3">
                <Link to="/projects" className="block text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                  → View My Projects
                </Link>
                <Link to="/services" className="block text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                  → My Services
                </Link>
                <Link to="/about" className="block text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                  → About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
