import React from 'react';
import './WorkExperience.css'; // Import the external CSS file

import accentureLogo from '../../assets/icons/accenture.png';
import boschLogo from '../../assets/icons/bosch.png';

const workExperiences = [
  {
    company: 'Accenture Portugal',
    jobTitle: 'Summer Internship',
    duration: 'Jul 2022 - Aug 2022',
    description: 'Worked with a cloud engineering team:\n' +
      'Google Cloud Platform basics\n' +
      'Data Fusion instance creation and uploading a JSON file with a custom pipeline configuration using a Cloud Build file written in YAML\n' +
      'Agile Scrum methodology applied during the entire internship',
    logo: accentureLogo,
  },
  {
    company: 'Bosch Portugal',
    jobTitle: 'Summer Internship',
    duration: 'Jul 2023 - TBD',
    description: 'TBD',
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
            {experience.description.split('\n').map((item, itemIndex) => (
              itemIndex === 0 ? (
                <p key={itemIndex}>{item}</p>
              ) : (
                <ul key={itemIndex}>
                  <li>{item}</li>
                </ul>
              )
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
