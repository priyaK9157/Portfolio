import React, { useState } from 'react';
import './ProjectSection.css';
import portfolioVideo1 from '../img/project2.mp4';
import { AiOutlineArrowRight } from 'react-icons/ai';
import portfolioVideo2 from '../img/project3.mp4';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Welcome to our EdTech website, where learning meets innovation. Discover a world of interactive courses, cutting-edge technology, and personalized education.',
    videoUrl: portfolioVideo2,
    checkoutLink: 'https://studynotion-edtech-project.vercel.app/'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Personal Portfolio Website. My Personal Portfolio website made using React and CSS with a minimal and clean UI.',
    videoUrl: portfolioVideo1,
    checkoutLink: 'https://example.com/project2',
  },
];

const ProjectSection = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleNextProject = () => {
    setActiveProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePreviousProject = () => {
    setActiveProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleCheckout = () => {
    const activeProject = projects[activeProjectIndex];
    window.open(activeProject.checkoutLink, '_blank');
  };

  const activeProject = projects[activeProjectIndex];

  return (
    <>
      <section id="project" className="project-section">
        <h1 className='top'>Projects</h1>
        <h3 className='title'>{activeProject.title}</h3>
        <div className="project-container">
          <div className="project-item">
            <div className="project-image">
              {activeProject.imageUrl && (
                <img src={activeProject.imageUrl} alt={activeProject.title} />
              )}
              {activeProject.videoUrl && (
                <video src={activeProject.videoUrl}  autoPlay loop/>
              )}
            </div>
            <div className="project-description">
              <p className='desc'>{activeProject.description}</p>
            </div>
          </div>
        </div>
        <div className="project-navigation">
          <button onClick={handlePreviousProject} className='arrow'>&lt;</button>
          <button onClick={handleNextProject} className='arrow'>&gt;</button>
        </div>
        <button onClick={handleCheckout} className="checkout">Checkout <AiOutlineArrowRight  /></button>
      </section>
    </>
  );
};

export default ProjectSection;
