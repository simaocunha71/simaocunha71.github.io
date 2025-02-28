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
    { icon: <FaC color="#A8B9CC" />, label: 'C' },
    { icon: <TbBrandCpp color="#00599C" />, label: 'C++' },
    { icon: <DiJava color="#007396" />, label: 'Java' },
    { icon: <SiJavascript color="#F7DF1E" />, label: 'JavaScript' },
    { icon: <DiPython color="#3776AB" />, label: 'Python' },
    { icon: <DiHaskell color="#5D4F85" />, label: 'Haskell' },
    { icon: <DiProlog color="#742F2F" />, label: 'Prolog' }
  ],
  'Frameworks': [
    { icon: <FaReact color="#61DAFB" />, label: 'React Native' },
  ],
  'Web Development Tools': [
    { icon: <FaNodeJs color="#68A063" />, label: 'Node.js' },
    { icon: <FaGithub color="#181717" />, label: 'GitHub' },
    { icon: <FaGitAlt color="#F34F29" />, label: 'Git' },
    { icon: <VscVscode color="#007ACC" />, label: 'Microsoft Visual Studio Code' }
  ],
  'Cloud and DevOps': [
    { icon: <IoLogoFirebase color="#FFCA28" />, label: 'Firebase' },
    { icon: <FaDocker color="#2496ED" />, label: 'Docker' },
    { icon: <SiAnsible color="#000000" />, label: 'Ansible' },
    { icon: <FaCloud color="#4285F4" />, label: 'Google Cloud Platform' }
  ],
  'Databases': [
    { icon: <TbSql color="#4479A1" />, label: 'SQL' },
    { icon: <SiMysql color="#4479A1" />, label: 'MySQL' }
  ],
  'Business Intelligence': [
    { icon: <SiPowerbi color="#F2C811" />, label: 'Microsoft PowerBI' }
  ],
  'Areas of Interest': [
    { icon: <FaRobot color="#FFD700" />, label: 'Large Language Models' },
    { icon: <FaBrain color="#DC143C" />, label: 'Machine Learning' },
    { icon: <FaRecycle color="#008000" />, label: 'Green Software' },
    { icon: <FaImage color="#4682B4" />, label: 'Image Processing' },
    { icon: <FaEye color="#800080" />, label: 'Computer Vision' }
  ]
};

const Skills = () => {
  return (
    <div className="skills-container">
      {Object.keys(skillsData).map((category) => (
        <div key={category} className="skills-category">
          <h2 className="category-title">{category}</h2>
          <div className="skills-table">
            {skillsData[category].map((skill, index) => (
              <div key={index} className="skills-column">
                <div className="skills-icon">{skill.icon}</div>
                <div className="skills-label">{skill.label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
