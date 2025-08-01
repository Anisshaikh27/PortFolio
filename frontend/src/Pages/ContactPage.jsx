// src/pages/Contact.jsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../components/Button';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom';

const Contact = () => {
  // Replace "YOUR_FORM_ID" with your actual Formspree form ID
  const [state, handleSubmit] = useForm('xgvzzqlo');

  return (
    <section id="contact" className="py-20 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-jetbrains font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Let’s Work Together
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let’s discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            {state.succeeded ? (
              <p className="text-emerald-400 font-jetbrains text-center text-lg">
                Thank you for your message! I’ll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Your message"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Submit */}
                <div className="text-center">
                  <Button 
                    variant="primary" 
                    size="large" 
                    type="submit" 
                    disabled={state.submitting}
                  >
                    {state.submitting ? 'Sending…' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 font-jetbrains">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="small" href="https://github.com/Anisshaikh27">
                  GitHub
                </Button>
                <Button variant="secondary" size="small" href="https://www.linkedin.com/in/anisshaikh27/">
                  LinkedIn
                </Button>
                <Button variant="secondary" size="small" href="https://twitter.com/your-handle">
                  Instagram
                </Button>
              </div>
            </div>

            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 font-jetbrains">Explore More</h3>
              <div className="space-y-3 font-jetbrains text-emerald-400">
                <Link to="/projects" className="block hover:text-cyan-300 transition-colors">
                  → View My Projects
                </Link>
                <Link to="/services" className="block hover:text-cyan-300 transition-colors">
                  → My Services
                </Link>
                <Link to="/about" className="block hover:text-cyan-300 transition-colors">
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
