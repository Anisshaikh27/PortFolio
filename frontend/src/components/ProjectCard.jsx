// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const ProjectCard = ({ project, featured = false }) => {

  console.log(project)
  const handleLiveDemo = () => {
    if (project.links.live) window.open(project.links.live, '_blank');
  };

  const handleGithub = () => {
    if (project.links.github) window.open(project.links.github, '_blank');
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`
        group relative bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 
        hover:border-emerald-400/30 transition-all duration-300 hover:shadow-2xl
        ${featured ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-2 lg:col-span-2'}
      `}
    >
      {/* Status & Featured Badges */}
      <div className="absolute top-4 w-full px-4 flex justify-between z-20">
        {project.featured && (
          <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full text-xs font-bold uppercase tracking-wide">
            Featured
          </span>
        )}
        {project.status && (
          <span className={`
            px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ml-auto
            ${project.status === 'completed' ? 'bg-emerald-500/80 text-white' : 
              project.status === 'in-progress' ? 'bg-yellow-500/80 text-black' : 
              'bg-gray-500/80 text-white'}
          `}>
            {project.status.replace('-', ' ')}
          </span>
        )}
      </div>

      {/* Project Image */}
      <div className="relative h-48 lg:h-56 overflow-hidden bg-gradient-to-br from-emerald-900 to-cyan-900">
        <img
          src={project.image || `https://via.placeholder.com/400x250/042f2e/10b981?text=${project.title.replace(' ', '+')}`}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold font-jetbrains text-white group-hover:text-emerald-400 transition-colors duration-300">
            {project.title}
          </h3>
          {project.date && (
            <span className="text-sm text-gray-400 font-jetbrains">
              {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
          )}
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow font-jetbrains">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-md text-xs font-medium font-jetbrains"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-md text-xs font-medium font-jetbrains">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {project.metrics?.accuracy && (
          <div className="flex gap-4 text-xs text-gray-400 mb-4 font-jetbrains">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Accuracy: {project.metrics.accuracy}
            </div>
            {project.metrics?.deployment && (
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Deployment: {project.metrics.deployment}
              </div>
            )}
          </div>
        )}
        
        <div className="flex gap-2 mt-auto">
          {project.links.live && (
            <Button variant="primary" size="small" className="flex-1" href={project.links.live}>
              View Live
            </Button>
          )}
          {project.links.github && (
            <Button variant="secondary" size="small" className="flex-1" href={project.links.github}>
              Code
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
