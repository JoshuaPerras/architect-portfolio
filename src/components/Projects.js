import React from 'react';
import ProjectCard from './ProjectCard';
import '../assets/styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'Modern House',
    description: 'A contemporary house with sleek lines and an open floor plan.',
    image: 'path/to/image1.jpg'
  },
  {
    id: 2,
    title: 'Green Building',
    description: 'An eco-friendly office building with sustainable materials.',
    image: 'path/to/image2.jpg'
  }
  // Add more projects as needed
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Our Projects</h2>
    <div className="project-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
