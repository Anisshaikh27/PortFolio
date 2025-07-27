import React from "react";
import Hero from "./Hero/Hero";
import Header from "./Header/Header";

import CustomBackground from "./CustomBackground";

import Button from "./Button";
import Projects from "./Projects/Projects";
function HomePage() {
  return (
    
    <div className="App">
      <CustomBackground>
        <Header />
        <div className="pt-24">
          <Hero />
          
          {/* Services Section */}
          <section id="services" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
                My Services
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                I provide comprehensive web development services, creating beautiful and functional digital experiences that drive results.
              </p>
              <Button variant="primary" size="large">
                View All Services
              </Button>
            </div>
          </section>
          
          {/* Projects Section */}
          <Projects />
          
          {/* More Section */}
          <section id="more" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-8">
                More About Me
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Learn more about my background, skills, and passion for creating exceptional web experiences.
              </p>
              <Button variant="accent" size="large">
                Download Resume
              </Button>
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
                Let's Work Together
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="large">
                  Send Message
                </Button>
                <Button variant="accent" size="large">
                  Schedule Call
                </Button>
              </div>
            </div>
          </section>
        </div>
      </CustomBackground>
    </div>
  );
}

export default HomePage;
