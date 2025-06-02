import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaDocker, FaCloud } from 'react-icons/fa';
import { FaRobot, FaBrain, FaRecycle, FaImage, FaEye } from 'react-icons/fa';
import { DiJava, DiPython, DiHaskell, DiProlog } from 'react-icons/di';
import { SiMysql, SiPowerbi, SiAnsible, SiJavascript } from 'react-icons/si';
import { TbSql, TbBrandCpp } from 'react-icons/tb';
import { FaGitAlt, FaC } from "react-icons/fa6";
import { IoLogoFirebase } from 'react-icons/io5';
import { VscVscode } from "react-icons/vsc";
import './Skills.css';

const skillsData = {
  'Programming Languages': [
    { icon: <FaC color="#A8B9CC" aria-label="C" />, label: 'C' },
    { icon: <TbBrandCpp color="#00599C" aria-label="C++" />, label: 'C++' },
    { icon: <DiJava color="#007396" aria-label="Java" />, label: 'Java' },
    { icon: <SiJavascript color="#F7DF1E" aria-label="JavaScript" />, label: 'JavaScript' },
    { icon: <DiPython color="#3776AB" aria-label="Python" />, label: 'Python' },
    { icon: <DiHaskell color="#5D4F85" aria-label="Haskell" />, label: 'Haskell' },
    { icon: <DiProlog color="#742F2F" aria-label="Prolog" />, label: 'Prolog' }
  ],
  'Frameworks': [
    { icon: <FaReact color="#61DAFB" aria-label="React Native" />, label: 'React Native' },
  ],
  'Web Development Tools': [
    { icon: <FaNodeJs color="#68A063" aria-label="Node.js" />, label: 'Node.js' },
    { icon: <FaGithub color="#181717" aria-label="GitHub" />, label: 'GitHub' },
    { icon: <FaGitAlt color="#F34F29" aria-label="Git" />, label: 'Git' },
    { icon: <VscVscode color="#007ACC" aria-label="Microsoft Visual Studio Code" />, label: 'Microsoft Visual Studio Code' }
  ],
  'Cloud and DevOps': [
    { icon: <IoLogoFirebase color="#FFCA28" aria-label="Firebase" />, label: 'Firebase' },
    { icon: <FaDocker color="#2496ED" aria-label="Docker" />, label: 'Docker' },
    { icon: <SiAnsible color="#000000" aria-label="Ansible" />, label: 'Ansible' },
    { icon: <FaCloud color="#4285F4" aria-label="Google Cloud Platform" />, label: 'Google Cloud Platform' }
  ],
  'Databases': [
    { icon: <TbSql color="#4479A1" aria-label="SQL" />, label: 'SQL' },
    { icon: <SiMysql color="#4479A1" aria-label="MySQL" />, label: 'MySQL' }
  ],
  'Business Intelligence': [
    { icon: <SiPowerbi color="#F2C811" aria-label="Microsoft PowerBI" />, label: 'Microsoft PowerBI' }
  ],
  'Areas of Interest': [
    { icon: <FaRobot color="#FFD700" aria-label="Large Language Models" />, label: 'Large Language Models' },
    { icon: <FaBrain color="#DC143C" aria-label="Machine Learning" />, label: 'Machine Learning' },
    { icon: <FaRecycle color="#008000" aria-label="Green Software" />, label: 'Green Software' },
    { icon: <FaImage color="#4682B4" aria-label="Image Processing" />, label: 'Image Processing' },
    { icon: <FaEye color="#800080" aria-label="Computer Vision" />, label: 'Computer Vision' }
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