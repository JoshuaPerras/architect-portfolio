import React from 'react';
import '../assets/styles/ProjectCard.css';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.title} />
    <h3>{project.title}</h3>
    <p>{project.description}</p>
  </div>
);

export default ProjectCard;
