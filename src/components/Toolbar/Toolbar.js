import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineFund, AiOutlineSound, AiOutlineRead, AiOutlineSafety, AiOutlineTeam, AiOutlineProfile } from 'react-icons/ai';
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
          <AiOutlineFund size={24} />
          Academic Projects
        </Link>
        <Link to="/work-experience" className="toolbar-link">
          <AiOutlineTeam size={24} />
          Work Experience
        </Link>
        <Link to="/talks" className="toolbar-link">
          <AiOutlineSound size={24} />
          Talks
        </Link>
        <Link to="/publications" className="toolbar-link">
          <AiOutlineRead size={24} />
          Publications
        </Link>
        <Link to="/certificates" className="toolbar-link">
          <AiOutlineSafety size={24} />
          Certificates
        </Link>
        <Link to="/curriculum-vitae" className="toolbar-link">
          <AiOutlineProfile size={24} />
          Curriculum Vitae
        </Link>
      </div>
      <div className="toolbar-right">
        <button className="toggle-button" onClick={handleToggleDropdown}>
          <AiOutlineMenu size={20} />
        </button>
        {isDropdownOpen && (
          <div className="toolbar-dropdown">
            <Link to="/academic-projects" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiOutlineFund size={24} />
              Academic Projects
            </Link>
            <Link to="/work-experience" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiOutlineTeam size={24} />
              Work Experience
            </Link>
            <Link to="/talks" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiOutlineSound size={24} />
              Talks
            </Link>
            <Link to="/publications" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiOutlineRead size={24} />
              Publications
            </Link>
            <Link to="/certificates" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiOutlineSafety size={24} />
              Certificates
            </Link>
            <Link to="/curriculum-vitae" className="toolbar-link" onClick={handleToggleDropdown}>
              <AiOutlineProfile size={24} />
              Curriculum Vitae
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
