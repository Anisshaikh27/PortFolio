// components/Projects/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent works
        </p>
        
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
