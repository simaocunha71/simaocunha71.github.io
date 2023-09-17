import React from 'react';
import './WorkExperience.css'; // Import the external CSS file

import accentureLogo from '../../assets/icons/accenture.png';
import boschLogo from '../../assets/icons/bosch.png';

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
    logo: accentureLogo,
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
    logo: boschLogo,
  },
  // Add more work experiences as needed
];

const WorkExperience = () => {
  return (
    <div className="work-experience-list">
      <div style={{ marginBottom: '100px' }}></div>
      {workExperiences.map((experience, index) => (
        <div key={experience.company} className="work-experience-card">
          <img src={experience.logo} alt={experience.company} className="company-image" />
          <div>
            <h3>{experience.company}</h3>
            <p>{experience.jobTitle}</p>
            <p>{experience.duration}</p>
            <ul>
              {experience.description.split('\n').map((item, itemIndex) => (
                <li key={itemIndex}>{item.trim()}</li>
              ))}
            </ul>
            <div className="keywords-container">
              {experience.keywords.map((keyword, keywordIndex) => (
                <span key={keywordIndex} className="keyword-rectangle">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
