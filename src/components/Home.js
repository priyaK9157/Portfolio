import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Typed from "typed.js";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineSend, AiFillTwitterCircle } from "react-icons/ai";
import userimage from "../img/userimage.jpg";
import "./Home.css";

const TypedText = () => {
  useEffect(() => {
    const typed = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI/UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="role"></span>;
};

const Home = ({ handleSectionClick }) => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const scrollSpyHandler = () => {
      const sections = ["home", "about", "skills", "qualification", "project", "contact"];
      const activeSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom > 0;
        }
        return false;
      });
      if (activeSection) {
        setActiveSection(activeSection);
      }
    };

    window.addEventListener("scroll", scrollSpyHandler);
    return () => {
      window.removeEventListener("scroll", scrollSpyHandler);
    };
  }, []);

  return (
    <div className="home-container" id="home">
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>P</span>riya
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-50}
                spy={true}
                active={activeSection === "home"}
                onClick={() => handleSectionClick("home")}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-50}
                spy={true}
                active={activeSection === "about"}
                onClick={() => handleSectionClick("about")}
              >
                About Me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                offset={-50}
                spy={true}
                active={activeSection === "skills"}
                onClick={() => handleSectionClick("skills")}
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="qualification"
                smooth={true}
                duration={500}
                offset={-50}
                spy={true}
                active={activeSection === "qualification"}
                onClick={() => handleSectionClick("qualification")}
              >
                Qualification
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="project"
                smooth={true}
                duration={500}
                offset={-50}
                spy={true}
                active={activeSection === "project"}
                onClick={() => handleSectionClick("project")}
              >
                Project
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                spy={true}
                active={activeSection === "contact"}
                onClick={() => handleSectionClick("contact")}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <a href="https://www.linkedin.com/in/priya-kumari-1a0662242">
              <BsLinkedin className="linkedin-icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/priyaK9157">
              <BsGithub className="github-icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/PriyaKu78756722">
              <AiFillTwitterCircle className="twitter-icon" />
            </a>
          </li>
        </ul>
      </div>

      <div className="hero">
        <div className="hero-section">
          <div className="hero-section-left">
            <div className="hero-section-heading">Hi! I am Priya</div>
            <div className="hero-section-heading hero-section-sub-heading">
              I am a <TypedText />
            </div>
            <div className="hero-section-description">
              Building Software to Solve Real-Life Problems
            </div>
            <button className="btn-pink" onClick={scrollToContact}>
              Contact me <AiOutlineSend />
            </button>
          </div>
          <div className="hero-section-right">
            <img
              src={userimage}
              alt="Your Image"
              className="rounded-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
