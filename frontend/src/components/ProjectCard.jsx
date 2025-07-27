// src/components/ProjectCard.jsx
import React from 'react';
import Button from './Button';

const ProjectCard = ({ project, featured = false }) => {
  const handleLiveDemo = () => {
    if (project.links.live) {
      window.open(project.links.live, '_blank');
    }
  };

  const handleGithub = () => {
    if (project.links.github) {
      window.open(project.links.github, '_blank');
    }
  };

  return (
    <article className={`
      group relative bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white border-opacity-10 
      hover:border-emerald-400 hover:border-opacity-30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl
      ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}
    `}>
      
      {/* Status Badge */}
      {project.status && (
        <div className="absolute top-4 right-4 z-20">
          <span className={`
            px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
            ${project.status === 'completed' ? 'bg-emerald-500 text-white' : 
              project.status === 'in-progress' ? 'bg-yellow-500 text-black' : 
              'bg-gray-500 text-white'}
          `}>
            {project.status.replace('-', ' ')}
          </span>
        </div>
      )}
      
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full text-xs font-bold uppercase tracking-wide">
            Featured
          </span>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-48 lg:h-56 overflow-hidden bg-gradient-to-br from-emerald-900 to-cyan-900">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          // Placeholder with project title
          <div className="w-full h-full flex items-center justify-center text-white text-lg font-bold bg-gradient-to-br from-emerald-600 to-cyan-600">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              {project.title}
            </div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            {project.links.live && (
              <Button variant="primary" size="small" onClick={handleLiveDemo}>
                Live Demo
              </Button>
            )}
            {project.links.github && (
              <Button variant="secondary" size="small" onClick={handleGithub}>
                GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        {/* Title and Date */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
            {project.title}
          </h3>
          {project.date && (
            <span className="text-sm text-gray-400">
              {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
          )}
        </div>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {featured ? project.fullDescription : project.shortDescription}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, featured ? 6 : 4).map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-emerald-500 bg-opacity-20 text-emerald-300 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (featured ? 6 : 4) && (
            <span className="px-2 py-1 bg-gray-500 bg-opacity-20 text-gray-400 rounded-md text-xs font-medium">
              +{project.technologies.length - (featured ? 6 : 4)} more
            </span>
          )}
        </div>
        
        {/* Metrics */}
        {project.metrics && project.metrics.performance && (
          <div className="flex gap-4 text-xs text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Performance: {project.metrics.performance}
            </div>
            {project.metrics.users && (
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Users: {project.metrics.users}
              </div>
            )}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          {project.links.live && (
            <Button variant="primary" size="small" onClick={handleLiveDemo} className="flex-1">
              View Live
            </Button>
          )}
          {project.links.github && (
            <Button variant="secondary" size="small" onClick={handleGithub} className="flex-1">
              Code
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
