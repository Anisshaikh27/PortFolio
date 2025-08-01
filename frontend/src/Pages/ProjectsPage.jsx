// src/pages/Projects.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projectsData, projectCategories } from '../data/projects';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Correctly filter projects based on the active category
  const allFilteredProjects = useMemo(() => {
    if (activeFilter === 'featured') {
      return projectsData.filter(p => p.featured);
    }
    if (activeFilter !== 'all') {
      return projectsData.filter(p => p.category === activeFilter);
    }
    return projectsData;
  }, [activeFilter]);

  // Determine which projects are visible based on the "Show All" toggle
  const visibleProjects = useMemo(() => {
    return showAll ? allFilteredProjects : allFilteredProjects.slice(0, 6);
  }, [showAll, allFilteredProjects]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setShowAll(false); // Reset 'Show All' state when the filter changes
  };

  return (
    <section id="projects" className="py-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-jetbrains font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed font-jetbrains">
            Explore my portfolio of web applications and designs, showcasing modern development practices and creative problem-solving.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`
                px-6 py-3 rounded-full font-jetbrains font-bold text-sm transition-all duration-300 transform hover:scale-105 relative overflow-hidden
                ${activeFilter === category.id 
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-emerald-400 bg-white bg-opacity-5 hover:bg-opacity-10 border border-white border-opacity-10 hover:border-emerald-400 hover:border-opacity-30'
                }
              `}
            >
              <span className="relative z-10">
                {category.label} ({category.count})
              </span>
              {activeFilter !== category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* UPDATED Projects Grid with 6 columns */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12 mx-8"
        >
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={project.featured}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button with corrected logic */}
        {allFilteredProjects.length > 6 && !showAll && (
          <div className="text-center">
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => setShowAll(true)}
            >
              {`View All Projects (${allFilteredProjects.length - 6} more)`}
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
          <h3 className="text-2xl font-bold text-white mb-4 font-jetbrains">
            Interested in Working Together?
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto font-jetbrains">
            I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" to="/contact">
              Start a Project
            </Button>
            <Button variant="secondary" size="large" href="/resume.pdf">
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
