import React, { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaFileAlt, FaLightbulb, FaCode, FaBook, FaAward, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <nav className="toolbar" aria-label="Main navigation">
      <NavLink to="/" className="toolbar-title">
        Simão Cunha's Portfolio
      </NavLink>
      <div className="toolbar-links">
        <NavLink to="/skills-and-interests" className="toolbar-link" activeClassName="active">
          <FaLightbulb size={24} />
          Skills and Interests
        </NavLink>
        <NavLink to="/academic-projects" className="toolbar-link" activeClassName="active">
          <FaCode size={24} />
          Academic Projects
        </NavLink>
        <NavLink to="/work-experience" className="toolbar-link" activeClassName="active">
          <FaBriefcase size={24} />
          Work Experience
        </NavLink>
        <NavLink to="/events" className="toolbar-link" activeClassName="active">
          <FaCalendarAlt size={24} />
          Events
        </NavLink>
        <NavLink to="/publications" className="toolbar-link" activeClassName="active">
          <FaBook size={24} />
          Publications
        </NavLink>
        <NavLink to="/certificates" className="toolbar-link" activeClassName="active">
          <FaAward size={24} />
          Certificates
        </NavLink>
        <NavLink to="/curriculum-vitae" className="toolbar-link" activeClassName="active">
          <FaFileAlt size={24} />
          Curriculum Vitae
        </NavLink>
      </div>
      <div className="toolbar-right">
        <button className="toggle-button" onClick={handleToggleDropdown} aria-label="Open menu">
          <FaBars size={20} />
        </button>
        {isDropdownOpen && (
          <div className="toolbar-dropdown" role="menu">
            <NavLink to="/skills-and-interests" className="toolbar-link" onClick={closeDropdown} activeClassName="active">
              <FaLightbulb size={24} />
              Skills and Interests
            </NavLink>
            <NavLink to="/academic-projects" className="toolbar-link" onClick={closeDropdown} activeClassName="active">
              <FaCode size={24} />
              Academic Projects
            </NavLink>
            <NavLink to="/work-experience" className="toolbar-link" onClick={closeDropdown} activeClassName="active">
              <FaBriefcase size={24} />
              Work Experience
            </NavLink>
            <NavLink to="/events" className="toolbar-link" onClick={closeDropdown} activeClassName="active">
              <FaCalendarAlt size={24} />
              Events
            </NavLink>
            <NavLink to="/publications" className="toolbar-link" onClick={closeDropdown} activeClassName="active">
              <FaBook size={24} />
              Publications
            </NavLink>
            <NavLink to="/certificates" className="toolbar-link" onClick={closeDropdown} activeClassName="active">
              <FaAward size={24} />
              Certificates
            </NavLink>
            <NavLink to="/curriculum-vitae" className="toolbar-link" onClick={closeDropdown} activeClassName="active">
              <FaFileAlt size={24} />
              Curriculum Vitae
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Toolbar;