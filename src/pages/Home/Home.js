import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/simaocunha71/';
  const githubUrl = 'https://github.com/simaocunha71';
  const emailUrl = 'mailto:simaopscunha@outlook.pt';
  const description = `Greetings everyone!\n\n
  My name is Simão Cunha and I'm a MSc Graduate in Informatics Engineering from the University of Minho.\n
  Here you can find more about my projects and get in touch with me using the following links:`;
  

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={"assets/profile_image.jpeg"} alt="Profile" className="cover-image" />
      </div>
      <div className="content-container">
        <p className="description">{description}</p>
        <div className="button-container">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size={24} />
            LinkedIn
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub size={24} />
            GitHub
          </a>
          <a href={emailUrl} className="social-link">
            <FaEnvelope size={24} />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
