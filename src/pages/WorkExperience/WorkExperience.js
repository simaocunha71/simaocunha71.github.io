import React from 'react';
import './WorkExperience.css';
import { FaCalendarAlt, FaBuilding, FaTools } from 'react-icons/fa'; // Importa os ícones necessários


const workExperiences = [
  {
    company: 'Accenture Portugal',
    jobTitle: 'Summer Internship',
    duration: 'Jul 2022 - Aug 2022',
    description:
      `Google Cloud Platform basics
      Data Fusion instance creation and uploading a JSON file with a custom pipeline configuration using a Cloud Build file written in YAML
      Agile Scrum methodology applied during the entire internship`,
    keywords: ['Google Cloud Platform', 'Agile Scrum'],
    logo: "assets/icons/accenture.png", // Utiliza os logos existentes
  },
  {
    company: 'Bosch Portugal',
    jobTitle: 'Summer Internship',
    duration: 'Jul 2023 - Sep 2023',
    description:
      `Applied machine learning and deep learning techniques to develop a system for detecting delaminations.
      Implemented Machine learning models using Python libraries such as Scikit-learn (Sklearn) and Deep Learning models using Deep Learning Halcon by MVTEC to build robust detection algorithms.
      Conducted image processing tasks using Halcon from MVTEC to enhance data preprocessing.
      Contributed to internal software development projects.
      Gained foundational knowledge in computer vision.`,
    keywords: ['Machine Learning', 'Deep Learning', 'Image Processing', 'Computer Vision'],
    logo: "assets/icons/bosch.png", // Utiliza os logos existentes
  },
  // Adicione mais experiências de trabalho conforme necessário
];

const WorkExperience = () => {
  const reversedExperiences = [...workExperiences].reverse();

  return (
    <div className="work-experience-wrapper">
      <div style={{ marginBottom: '75px' }}></div>
      <div className="work-experience-list">
        {reversedExperiences.map((experience, index) => (
          <div key={index} className="work-experience-card">
            <div className="company-logo">
              <img src={experience.logo} alt={experience.company} className="logo-image" />
            </div>
            <div className="experience-details">
              <h3>{experience.jobTitle}</h3>
              <p><FaBuilding /> {experience.company}</p>
              <p><FaCalendarAlt /> {experience.duration}</p>
              <ul>
                {experience.description.split('\n').map((item, itemIndex) => (
                  <li key={itemIndex}>{item.trim()}</li>
                ))}
              </ul>
              <div className="keywords-container">
                <FaTools /> {experience.keywords.join(', ')}
              </div>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
};

export default WorkExperience;
