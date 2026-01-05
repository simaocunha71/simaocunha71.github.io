import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiOrcid, SiGooglescholar } from 'react-icons/si';
import './Home.css';

const Home = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/simaocunha71/';
  const githubUrl = 'https://github.com/simaocunha71';
  const emailUrl = 'mailto:simao.s.cunha@inesctec.pt';
  const orcidUrl = 'https://orcid.org/0009-0008-7979-2747';
  const scholarUrl = 'https://scholar.google.com/citations?user=BA9OLokAAAAJ&hl=pt-PT';

  const description = `Greetings everyone!

My name is Simão Cunha, and I am a PhD student in the Doctoral Program in Informatics at the University of Minho.
Here you can learn more about my work and get in touch with me using the links below.`;

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={"assets/profile_image.jpeg"} alt="Profile" className="cover-image" />
      </div>
      <div className="content-container">
        <p className="description">{description}</p>
        <div className="button-container">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <FaLinkedin size={26} />
            LinkedIn
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <FaGithub size={26} />
            GitHub
          </a>
          <a href={orcidUrl} target="_blank" rel="noopener noreferrer" className="social-link" title="ORCID">
            <SiOrcid size={26} />
            ORCID
          </a>
          <a href={scholarUrl} target="_blank" rel="noopener noreferrer" className="social-link" title="Google Scholar">
            <SiGooglescholar size={26} />
            Google Scholar
          </a>
          <a href={emailUrl} className="social-link" title="Email">
            <FaEnvelope size={26} />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;