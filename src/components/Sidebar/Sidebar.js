import React from 'react';
import { AiOutlineProject, AiOutlineFileText, AiOutlineBook, AiOutlineCheckCircle, AiOutlineHome } from 'react-icons/ai';
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
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-button">
            <span className="sidebar-icon">
              <AiOutlineHome />
            </span>
            <span className="sidebar-label">Home</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/academic-projects" className="sidebar-button">
            <span className="sidebar-icon">
              <AiOutlineProject />
            </span>
            <span className="sidebar-label">Academic projects</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/talks" className="sidebar-button">
            <span className="sidebar-icon">
              <AiOutlineFileText />
            </span>
            <span className="sidebar-label">Talks</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/publications" className="sidebar-button">
            <span className="sidebar-icon">
              <AiOutlineBook />
            </span>
            <span className="sidebar-label">Publications</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/certifications" className="sidebar-button">
            <span className="sidebar-icon">
              <AiOutlineCheckCircle />
            </span>
            <span className="sidebar-label">Certifications</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
