import React from 'react';
import { FaReact, FaDocker, FaCloud } from 'react-icons/fa';
import { SiIntel } from 'react-icons/si';
import { FaRobot, FaBrain, FaRecycle } from 'react-icons/fa';
import { DiJava, DiPython, DiHaskell } from 'react-icons/di';
import { SiAnsible, SiJavascript } from 'react-icons/si';
import { FaC } from "react-icons/fa6";
import { IoLogoFirebase } from 'react-icons/io5';
import './Skills.css';

const skillsData = {
  'Programming Languages': [
    { icon: <FaC color="#A8B9CC" aria-label="C" />, label: 'C' },
    { icon: <DiJava color="#007396" aria-label="Java" />, label: 'Java' },
    { icon: <SiJavascript color="#F7DF1E" aria-label="JavaScript" />, label: 'JavaScript' },
    { icon: <DiPython color="#3776AB" aria-label="Python" />, label: 'Python' },
    { icon: <DiHaskell color="#5D4F85" aria-label="Haskell" />, label: 'Haskell' },
  ],
  'Frontend Frameworks': [
    { icon: <FaReact color="#61DAFB" aria-label="React Native" />, label: 'React Native' },
  ],
  'Energy Monitoring': [
    { icon: <SiIntel color="#000000" aria-label="Intel RAPL" />, label: 'Intel RAPL' },
  ],
  'Cloud and DevOps': [
    { icon: <IoLogoFirebase color="#FFCA28" aria-label="Firebase" />, label: 'Firebase' },
    { icon: <FaDocker color="#2496ED" aria-label="Docker" />, label: 'Docker' },
    { icon: <SiAnsible color="#000000" aria-label="Ansible" />, label: 'Ansible' },
    { icon: <FaCloud color="#4285F4" aria-label="Google Cloud Platform" />, label: 'Google Cloud Platform' }
  ],
'Business Intelligence': [
  {
    icon: <img src="/assets/icons/powerbi.svg" alt="Microsoft PowerBI" style={{ width: '1em', height: '1em', fill: '#F2C811' }} />,
    label: 'Microsoft PowerBI'
  }
],

  'Research Interests': [
    { icon: <FaRobot color="#00aaffff" aria-label="Large Language Models" />, label: 'Large Language Models' },
    { icon: <FaBrain color="#DC143C" aria-label="Machine Learning" />, label: 'Machine Learning' },
    { icon: <FaRecycle color="#008000" aria-label="Green Software" />, label: 'Green Software' }
  ]
};

const Skills = () => {
  return (
    <div className="skills-container">
      {Object.keys(skillsData).map((category) => (
        <div key={category} className="skills-category">
          <h2 className="category-title">{category}</h2>
          <div className="skills-table">
            {skillsData[category].length > 0 ? (
              skillsData[category].map((skill, index) => (
                <div key={index} className="skills-column">
                  <div className="skills-icon">{skill.icon}</div>
                  <div className="skills-label">{skill.label}</div>
                </div>
              ))
            ) : (
              <p>No skills available in this category.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
