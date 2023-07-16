import React, { useState } from 'react';
import './Skills.css';

import { FiCode, FiTool, FiFigma } from 'react-icons/fi';
import { AiOutlineArrowDown, AiFillGithub, AiOutlineDown } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { TiSocialTwitter } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';

const Skill = () => {
  const [language, setLanguage] = useState(false);
  const [libraries, setLibraries] = useState(false);
  const [tools, setTools] = useState(false);

  const handleLanguageClick = () => {
    setLanguage(!language);
  };

  const handleLibrariesClick = () => {
    setLibraries(!libraries);
  };

  const handleToolsClick = () => {
    setTools(!tools);
  };

  return (

    <div className='skill-container' id='skills'>
      <div className='skill-heading'>
        <h2 className='skill-title'>Skills</h2>
        <p className='tach'>My Technical Skills</p>
      </div>

      <div className='skill-grid'>
        {/* Language */}
        <div className='skill-card'>
          <div className='skill-card-header' onClick={handleLanguageClick}>
            <FiCode className='skill-icon' />
            <div className='skill-card-title'>
              <h2 className='skill-card-heading'>Languages</h2>
              <p className='skill-card-description'>Languages that I have picked up over the Years</p>
            </div>
            <AiOutlineDown className={`skill-dropdown-icon ${language ? 'active' : ''}`} />
          </div>

          {language && (
            <div className='skill-card-content'>
              <div className='skill-item'>
                <IoLogoJavascript className='skill-item-icon' />
                <p className='skills'>JavaScript</p>
              </div>
              <div className='skill-item'>
                <TiSocialTwitter className='skill-item-icon' />
                <p className='skills'>Python</p>
              </div>
              <div className='skill-item'>
                <MdEmail className='skill-item-icon' />
                <p className='skills'>C++</p>
              </div>
            </div>
          )}
        </div>

        {/* Libraries */}
        <div className='skill-card'>
          <div className='skill-card-header' onClick={handleLibrariesClick}>
            <FiTool className='skill-icon' />
            <div className='skill-card-title'>
              <h2 className='skill-card-heading'>Libraries & Frameworks</h2>
              <p className='skill-card-description'>Libraries and Frameworks that I prefer to work with</p>
            </div>
            <AiOutlineDown className={`skill-dropdown-icon ${libraries ? 'active' : ''}`} />
          </div>

          {libraries && (
            <div className='skill-card-content'>
              <div className='skill-item'>
                <TiSocialTwitter className='skill-item-icon' />
                <p className='skills'>React</p>
              </div>
              <div className='skill-item'>
                <MdEmail className='skill-item-icon' />
                <p className='skills'>Node.js</p>
              </div>
              <div className='skill-item'>
                <GrLocation className='skill-item-icon' />
                <p className='skills'>Next.js</p>
              </div>
            </div>
          )}
        </div>

        {/* Tools */}
        <div className='skill-card'>
          <div className='skill-card-header' onClick={handleToolsClick}>
            <FiFigma className='skill-icon' />
            <div className='skill-card-title'>
              <h2 className='skill-card-heading'>Tools</h2>
              <p className='skill-card-description'>Tools that I know and use on a daily basis</p>
            </div>
            <AiOutlineDown className={`skill-dropdown-icon ${tools ? 'active' : ''}`} />
          </div>

          {tools && (
            <div className='skill-card-content'>
              <div className='skill-item'>
                <TiSocialTwitter className='skill-item-icon' />
                <p className='skills'>Git</p>
              </div>
              <div className='skill-item'>
                <MdEmail className='skill-item-icon' />
                <p className='skills'>Github</p>
              </div>
              <div className='skill-item'>
                <GrLocation className='skill-item-icon' />
                <p className='skills'>Figma</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skill;
