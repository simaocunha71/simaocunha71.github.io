import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineProject, AiOutlineFileText, AiOutlineBook, AiOutlineCheckCircle, AiOutlineHome, AiFillBank } from 'react-icons/ai';
import { FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="toolbar">
      <h1 className="toolbar-title">Simão Cunha's Portfolio</h1>
      <div className="toolbar-links">
        <Link to="/" className="toolbar-link">
          <AiOutlineHome size={24} />
          Home
        </Link>
        <Link to="/academic-projects" className="toolbar-link">
          <AiOutlineProject size={24} />
          Academic Projects
        </Link>
        <Link to="/work-experience" className="toolbar-link">
          <AiFillBank size={24} />
          Work Experience
        </Link>
        <Link to="/talks" className="toolbar-link">
          <AiOutlineFileText size={24} />
          Talks
        </Link>
        <Link to="/publications" className="toolbar-link">
          <AiOutlineBook size={24} />
          Publications
        </Link>
        <Link to="/certificates" className="toolbar-link">
          <AiOutlineCheckCircle size={24} />
          Certificates
        </Link>
        <Link to="/curriculum-vitae" className="toolbar-link">
          <FaFileAlt size={24} />
          Curriculum Vitae
        </Link>
      </div>
      <div className="toolbar-right">
        <button className="toggle-button" onClick={handleToggleDropdown}>
          <AiOutlineMenu size={20} />
        </button>
        {isDropdownOpen && (
          <div className="toolbar-dropdown">
            <Link to="/" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiOutlineHome size={24} />
              Home
            </Link>
            <Link to="/academic-projects" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiOutlineProject size={24} />
              Academic Projects
            </Link>
            <Link to="/work-experience" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiFillBank size={24} />
              Work Experience
            </Link>
            <Link to="/talks" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiOutlineFileText size={24} />
              Talks
            </Link>
            <Link to="/publications" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiOutlineBook size={24} />
              Publications
            </Link>
            <Link to="/certificates" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiOutlineCheckCircle size={24} />
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
