import React from 'react';
import { AiOutlineProject, AiOutlineFileText, AiOutlineBook, AiOutlineCheckCircle, AiOutlineHome, AiFillBank } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const sidebarStyle = {
    width: isOpen ? '15%' : '0',
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'width 1s ease, transform 1s ease'
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} style={sidebarStyle}>
      <div className="sidebar-section">
        <Link to="/" className="sidebar-link">
          <span className="sidebar-icon">
            <AiOutlineHome size={24} />
          </span>
          <span className="sidebar-label">Home</span>
        </Link>
      </div>
      <div className="sidebar-section">
        <Link to="/academic-projects" className="sidebar-link">
          <span className="sidebar-icon">
            <AiOutlineProject size={24} />
          </span>
          <span className="sidebar-label">Academic projects</span>
        </Link>
      </div>
      <div className="sidebar-section">
        <Link to="/work-experience" className="sidebar-link">
          <span className="sidebar-icon">
            <AiFillBank  size={24} />
          </span>
          <span className="sidebar-label">Work Experience</span>
        </Link>
      </div>
      <div className="sidebar-section">
        <Link to="/talks" className="sidebar-link">
          <span className="sidebar-icon">
            <AiOutlineFileText size={24} />
          </span>
          <span className="sidebar-label">Talks</span>
        </Link>
      </div>
      <div className="sidebar-section">
        <Link to="/publications" className="sidebar-link">
          <span className="sidebar-icon">
            <AiOutlineBook size={24} />
          </span>
          <span className="sidebar-label">Publications</span>
        </Link>
      </div>
      <div className="sidebar-section">
        <Link to="/certifications" className="sidebar-link">
          <span className="sidebar-icon">
            <AiOutlineCheckCircle size={24} />
          </span>
          <span className="sidebar-label">Certifications</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
