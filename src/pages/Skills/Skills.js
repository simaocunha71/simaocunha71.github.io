import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaDocker, FaCloud } from 'react-icons/fa';
import { FaRobot, FaBrain, FaLeaf, FaRecycle, FaImage, FaEye, FaCogs } from 'react-icons/fa';

import { DiJava, DiPython, DiHaskell, DiProlog } from 'react-icons/di';
import { SiMysql, SiPowerbi, SiAnsible, SiJavascript } from 'react-icons/si';
import { TbSql, TbBrandCpp } from 'react-icons/tb';
import { FaGitAlt, FaC } from "react-icons/fa6";
import { IoLogoFirebase } from 'react-icons/io5';
import { VscVscode } from "react-icons/vsc";
import './Skills.css';

const skillsData = {
  'Programming Languages': [
    { icon: <FaC />, label: 'C' },
    { icon: <TbBrandCpp />, label: 'C++' },
    { icon: <DiJava />, label: 'Java' },
    { icon: <SiJavascript />, label: 'JavaScript' },
    { icon: <DiPython />, label: 'Python' },
    { icon: <DiHaskell />, label: 'Haskell' },
    { icon: <DiProlog />, label: 'Prolog' }
  ],
  'Frameworks': [
    { icon: <FaReact />, label: 'React Native' },
  ],
  'Web Development Tools': [
    { icon: <FaNodeJs />, label: 'Node.js' },
    { icon: <FaGithub />, label: 'GitHub' },
    { icon: <FaGitAlt />, label: 'Git' },
    { icon: <VscVscode />, label: 'Microsoft Visual Studio Code' }
  ],
  'Cloud and DevOps': [
    { icon: <IoLogoFirebase />, label: 'Firebase' },
    { icon: <FaDocker />, label: 'Docker' },
    { icon: <SiAnsible />, label: 'Ansible' },
    { icon: <FaCloud />, label: 'Google Cloud Platform' }
  ],
  'Databases': [
    { icon: <TbSql />, label: 'SQL' },
    { icon: <SiMysql />, label: 'MySQL' }
  ],
  'Business Intelligence': [
    { icon: <SiPowerbi />, label: 'Microsoft PowerBI' }
  ],
  'Areas of Interest': [
    { icon: <FaRobot />, label: 'Large Language Models' },
    { icon: <FaBrain />, label: 'Machine Learning' },
    { icon: <FaRecycle />, label: 'Green Software' },
    { icon: <FaImage />, label: 'Image Processing' },
    { icon: <FaEye />, label: 'Computer Vision' }
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
