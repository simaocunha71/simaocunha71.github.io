import React, { useState, useEffect } from 'react';
import './WorkExperience.css';
import { FaCalendarAlt, FaBuilding, FaTools } from 'react-icons/fa';

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
    logo: "assets/icons/accenture.png",
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
    logo: "assets/icons/bosch.png",
  },
  {
    company: 'Requião Primary School and Vale S. Martinho Primary School',
    jobTitle: 'Informatics Teacher',
    duration: 'Mar 2024 - Jun 2024',
    description: 
    `Taught IT basics to 2nd, 3rd, and 4th grade students using Microsoft PowerPoint and Microsoft Word
    Taught programming basics with the Scratch platform`,
    keywords: ['Teaching', 'Scratch', 'Microsoft Office'],
    logo: ["assets/icons/aper.jpg", "assets/icons/apeeji.jpg"],
  },
  {
    company: 'University of Minho',
    jobTitle: 'Invited Assistant Professor',
    duration: 'Feb 2024 - Present',
    description: 'Courses taught: Topics of Software Development and Experimentation in Software Engineering',
    keywords: ['Software Development', 'Experimentation'],
    logo: "assets/icons/uminho.png",
  },
];

const LogoCarousel = ({ logos, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (logos.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [logos, interval]);

  return (
    <div className="company-logo">
      <img
        src={logos[currentIndex]}
        alt={`Logo ${currentIndex + 1}`}
        className="logo-image"
      />
    </div>
  );
};

const WorkExperience = () => {
  const reversedExperiences = [...workExperiences].reverse();

  return (
    <div className="work-experience-wrapper">
      <div style={{ marginBottom: '50px' }}></div>
      <div className="work-experience-list">
        {reversedExperiences.map((experience, index) => (
          <div key={index} className="work-experience-card">
            {Array.isArray(experience.logo) ? (
              <LogoCarousel logos={experience.logo} />
            ) : (
              <div className="company-logo">
                <img
                  src={experience.logo}
                  alt={`Logo of ${experience.company}`}
                  className="logo-image"
                />
              </div>
            )}

            <div className="experience-details">
              <h3>{experience.jobTitle}</h3>
              <p><FaBuilding aria-label="Company" /> {experience.company}</p>
              <p><FaCalendarAlt aria-label="Duration" /> {experience.duration}</p>
              {experience.description ? (
                <ul>
                  {experience.description.split('\n').map((item, itemIndex) => (
                    <li key={itemIndex}>{item.trim()}</li>
                  ))}
                </ul>
              ) : (
                <p>No description available.</p>
              )}
              {experience.keywords.length > 0 && (
                <div className="keywords-container">
                  <FaTools aria-label="Keywords" /> {experience.keywords.join(', ')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;