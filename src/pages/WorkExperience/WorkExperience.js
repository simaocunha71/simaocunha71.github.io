import React, { useState, useEffect } from 'react';
import './WorkExperience.css';
import { FaBuilding, FaTools } from 'react-icons/fa';


const workExperiences = [
  {
    company: 'Accenture Portugal',
    jobTitle: 'Summer Intern',
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
    jobTitle: 'Summer Intern',
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
    duration: 'Mar 2025 - Jun 2025',
    description: 
    `Taught IT basics to 2nd, 3rd, and 4th grade students using Microsoft PowerPoint and Microsoft Word
    Taught programming basics with the Scratch platform`,
    keywords: ['Teaching', 'Scratch', 'Microsoft Office'],
    logo: ["assets/icons/aper.jpg", "assets/icons/apeeji.jpg"],
  },
  {
    company: 'University of Minho',
    jobTitle: 'Invited Assistant Professor',
    duration: 'Feb 2025 - Present',
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
    <div className="timeline-logo">
      <img
        src={logos[currentIndex]}
        alt={`Logo ${currentIndex + 1}`}
      />
    </div>
  );
};

const WorkExperience = () => {
  // Mais recente em cima
  const reversedExperiences = [...workExperiences].reverse();

  return (
    <div className="work-experience-wrapper">
      <div className="timeline">
        {reversedExperiences.map((exp, idx) => {
          const side = idx % 2 === 0 ? 'right' : 'left';
          return (
            <div className={`timeline-event ${side}`} key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-date-label">{exp.duration}</div>
              <div className="timeline-content">
                <div className="timeline-header">
                  {side === 'right' ? (
                    <>
                      {Array.isArray(exp.logo) ? (
                        <LogoCarousel logos={exp.logo} />
                      ) : (
                        <div className="timeline-logo">
                          <img src={exp.logo} alt={`Logo of ${exp.company}`} />
                        </div>
                      )}
                      <div>
                        <div className="timeline-job">{exp.jobTitle}</div>
                        <div className="timeline-company"><FaBuilding /> {exp.company}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <div className="timeline-job">{exp.jobTitle}</div>
                        <div className="timeline-company"><FaBuilding /> {exp.company}</div>
                      </div>
                      {Array.isArray(exp.logo) ? (
                        <LogoCarousel logos={exp.logo} />
                      ) : (
                        <div className="timeline-logo">
                          <img src={exp.logo} alt={`Logo of ${exp.company}`} />
                        </div>
                      )}
                    </>
                  )}
                </div>
                <ul className="timeline-description">
                  {exp.description.split('\n').map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span role="img" aria-label="item">➤</span> {item.trim()}
                    </li>
                  ))}
                </ul>

                {exp.keywords.length > 0 && (
                  <div className="timeline-keywords">
                    <FaTools /> {exp.keywords.join(', ')}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;