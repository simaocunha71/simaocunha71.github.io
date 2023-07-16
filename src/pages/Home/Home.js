import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Home.css';
import coverImage from '../../assets/profile_image.jpeg';

const Home = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/sim%C3%A3o-cunha-379785202/';
  const githubUrl = 'https://github.com/simaocunha71';
  const emailUrl = 'mailto:simaopscunha@outlook.pt';
  const description = `Greetings everyone! My name is Simão Cunha, 
  and I'm currently a 5th year Integrated Masters (2nd year MSc) student in Software Engineering at the University of Minho. 
  Here you can find more about my projects and get in touch with me using the following links:`;

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={coverImage} alt="Profile" className="cover-image" />
      </div>
      <div className="content-container">
        <p className="description limited-width">{description}</p>
        <div className="button-container">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href={emailUrl}>
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
