import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaNewspaper, FaCertificate, FaFileAlt, FaBars } from 'react-icons/fa';
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
        <Link to="/academic-projects" className="toolbar-link">
          <FaGraduationCap size={24} />
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
          <FaNewspaper size={24} />
          Publications
        </Link>
        <Link to="/certificates" className="toolbar-link">
          <FaCertificate size={24} />
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
            <Link to="/academic-projects" className="toolbar-link" onClick={handleToggleDropdown}>
              <FaGraduationCap size={24} />
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
              <FaNewspaper size={24} />
              Publications
            </Link>
            <Link to="/certificates" className="toolbar-link" onClick={handleToggleDropdown}>
              <FaCertificate size={24} />
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
