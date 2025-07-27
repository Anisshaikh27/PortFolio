// src/components/Projects.jsx
import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projectsData, projectCategories } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    let filtered = projectsData;
    
    if (activeFilter === 'featured') {
      filtered = projectsData.filter(project => project.featured);
    } else if (activeFilter !== 'all') {
      filtered = projectsData.filter(project => project.category === activeFilter);
    }
    
    // Show only first 6 projects initially, unless "Show All" is clicked
    return showAll ? filtered : filtered.slice(0, 6);
  }, [activeFilter, showAll]);

  const featuredProjects = projectsData.filter(project => project.featured);
  const remainingProjects = filteredProjects.filter(project => !project.featured);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setShowAll(false); // Reset show all when filter changes
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore my portfolio of web applications and designs, showcasing modern development practices 
            and creative problem-solving.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`
                px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 relative overflow-hidden
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Projects (larger cards) */}
          {activeFilter === 'all' && featuredProjects.slice(0, showAll ? featuredProjects.length : 2).map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              featured={true}
            />
          ))}
          
          {/* Regular Projects */}
          {(activeFilter === 'featured' ? featuredProjects : remainingProjects).map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              featured={false}
            />
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length < projectsData.filter(p => 
          activeFilter === 'all' ? true : 
          activeFilter === 'featured' ? p.featured : 
          p.category === activeFilter
        ).length && (
          <div className="text-center">
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : `View All Projects (${projectsData.length - filteredProjects.length} more)`}
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large">
              Start a Project
            </Button>
            <Button variant="secondary" size="large">
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
