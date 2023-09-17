import React from 'react';
import './Home.css';
import coverImage from '../../assets/profile_image.jpeg';

const Home = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/sim%C3%A3o-cunha-379785202/';
  const githubUrl = 'https://github.com/simaocunha71';
  const emailUrl = 'mailto:simaopscunha@outlook.pt';
  const description = 
  `Greetings everyone!\n\n
  My name is Simão Cunha and I'm currently a 5th year Integrated Masters (2nd year MSc) student in Software Engineering at the University of Minho.\n
  Here you can find more about my projects and get in touch with me using the following links:`;

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={coverImage} alt="Profile" className="cover-image" />
      </div>
      <div className="content-container">
        <p className="description">{description}</p>
        <div className="button-container">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LINKEDIN" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GITHUB" />
          </a>
          <a href={emailUrl} className="social-link">
            <img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" alt="EMAIL" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
