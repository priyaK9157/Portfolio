import React from 'react';
import './AboutMe.css';
import circleImage from '../img/circle.png';
import cubeImage from '../img/cube.png';
import dotsImage from '../img/dots.png';
import plusImage from '../img/plus.png';
import userImage from '../img/user3.jpeg';
import zigzagsImage from '../img/zigzags.png';
import RESUME from '../img/RESUME.pdf';
import {BiSpreadsheet} from 'react-icons/bi'


// import myImage from './my-image.jpg';

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <div className="image-container">
      <div className="hero-section-right">
                    <div className="absolute icons icon-dots">
                        <img src={dotsImage} alt="" />
                      </div>
                      <div className="absolute icons icon-cube">
                      <img src={cubeImage} alt="" />
                      </div>
                      <div className="absolute icons icon-circle">
                      <img src={circleImage} alt="" />
                      </div>
                      <div className="absolute icons icon-zigzag">
                      <img src={zigzagsImage} alt="" />
                      </div>
                      <div className="absolute icons icon-plus">
                      <img src={plusImage} alt="" />
                      </div>
                      <div className="user-image">
                      <img src={userImage} alt="" />
                      </div>
                </div>
      </div>
      <div className="text-container">
        <div className='aboutme'>About Me</div>
        <div className='Intro'>My Introduction</div>
        <div className='para'>
        Hey there,👋 I'm Priya a 20-year-old CSE undergrad who is passionate about Software Development, UI/UX
            Design and Product Management. Currently, I'm pursuing my career as a Full Stack Web Developer 👨🏻‍💻. I share my learnings through speaking engagements and
            write-ups. ✍🏻
        </div>
        <a href={RESUME} download={RESUME} className="resume-link">
            <button className="btnpink" id="btn">
              Resume <BiSpreadsheet className="resume-icon" />
            </button>
          </a>
      </div>
    </section>
  );
};

export default AboutMe;
