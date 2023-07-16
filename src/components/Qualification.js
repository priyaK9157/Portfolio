import React, { useState } from 'react';
import './Qualification.css';
import { MdSchool, MdWork } from 'react-icons/md';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="qualification-container" id='qualification'>
      <h2 className="section-title">Qualifications</h2>
      <p className="section-subtitle">My Educational Qualification & Work Experience</p>

      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => handleTabClick('education')}
        >
          <MdSchool className="tab-icon" />
          Education
        </button>
        <button
          className={`tab-button ${activeTab === 'work' ? 'active' : ''}`}
          onClick={() => handleTabClick('work')}
        >
          <MdWork className="tab-icon" />
          Work
        </button>
      </div>

      <div className="content-container">
        {activeTab === 'education' && (
          <div className="qualification-content">
            <div className="qualification-item">
              <h3 className="qualification-title">B.Tech Computer Science and Engineering</h3>
              <p className="qualification-subtitle">Kalinga Institute of Industrial Technology</p>
              <p className="qualification-duration">2021 - 2025</p>
            </div>
            <div className="qualification-item">
              <h3 className="qualification-title">Senior Secondary School</h3>
              <p className="qualification-subtitle">St. Mary Goretti Girls' High School</p>
              <p className="qualification-duration">2018 - 2020</p>
            </div>
          </div>
        )}

        {activeTab === 'work' && (
          <div className="qualification-content">
            <div className="qualification-item">
              <h3 className="qualification-title">Full Stack Development Intern</h3>
              <p className="qualification-subtitle">Acmegrade</p>
              <p className="qualification-duration">April 2023 - Present</p>
            </div>
            <div className="qualification-item">
              <h3 className="qualification-title">Full Stack Freelancer</h3>
              <p className="qualification-duration">May 2023</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Qualification;
