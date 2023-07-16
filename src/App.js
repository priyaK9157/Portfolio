import React, { useState } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Home handleSectionClick={handleSectionClick} />
      <AboutMe id="about" />
      <Skills id="skills" />
      <Qualification id="qualification" />
      <ProjectSection id="project" />
      <Contact id="contact" />
      <Footer activeSection={activeSection} handleSectionClick={handleSectionClick} />
    </>
  );
};

export default App;
