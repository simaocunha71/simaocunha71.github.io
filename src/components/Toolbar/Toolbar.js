import React, { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaFileAlt, FaLightbulb, FaCode, FaProjectDiagram, FaCogs, FaRocket, FaBook, FaAward, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="toolbar">
      <Link to="/" className="toolbar-title">
        Simão Cunha's Portfolio
      </Link>
      <div className="toolbar-links">
        <Link to="/skills-and-interests" className="toolbar-link">
          <FaLightbulb size={24} />
          Skills and Interests
        </Link>
        <Link to="/academic-projects" className="toolbar-link">
          <FaCode size={24} /> {/* Change to FaProjectDiagram, FaCogs, or FaRocket if preferred */}
          Academic Projects
        </Link>
        <Link to="/work-experience" className="toolbar-link">
          <FaBriefcase size={24} />
          Work Experience
        </Link>
        <Link to="/events" className="toolbar-link">
          <FaCalendarAlt size={24} />
          Events
        </Link>
        <Link to="/publications" className="toolbar-link">
          <FaBook size={24} />
          Publications
        </Link>
        <Link to="/certificates" className="toolbar-link">
          <FaAward size={24} />
          Certificates
        </Link>
        <Link to="/curriculum-vitae" className="toolbar-link">
          <FaFileAlt size={24} />
          Curriculum Vitae
        </Link>
      </div>
      <div className="toolbar-right">
        <button className="toggle-button" onClick={handleToggleDropdown}>
          <FaBars size={20} />
        </button>
        {isDropdownOpen && (
          <div className="toolbar-dropdown">
            <Link to="/skills-and-interests" className="toolbar-link" onClick={handleToggleDropdown}>
              <FaLightbulb size={24} />
              Skills and Interests
            </Link>
            <Link to="/academic-projects" className="toolbar-link" onClick={handleToggleDropdown}>
              <FaCode size={24} /> {/* Change to FaProjectDiagram, FaCogs, or FaRocket if preferred */}
              Academic Projects
            </Link>
            <Link to="/work-experience" className="toolbar-link" onClick={handleToggleDropdown}>
              <FaBriefcase size={24} />
              Work Experience
            </Link>
            <Link to="/events" className="toolbar-link" onClick={handleToggleDropdown}>
              <FaCalendarAlt size={24} />
              Events
            </Link>
            <Link to="/publications" className="toolbar-link" onClick={handleToggleDropdown}>
              <FaBook size={24} />
              Publications
            </Link>
            <Link to="/certificates" className="toolbar-link" onClick={handleToggleDropdown}>
              <FaAward size={24} />
              Certificates
            </Link>
            <Link to="/curriculum-vitae" className="toolbar-link" onClick={handleToggleDropdown}>
              <FaFileAlt size={24} />
              Curriculum Vitae
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
