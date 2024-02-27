import React from 'react';
import { AiOutlineProject, AiOutlineFileText, AiOutlineBook, AiOutlineCheckCircle, AiOutlineHome, AiFillBank } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <h1 className="toolbar-title">Simão Cunha's Portfolio</h1>
      </div>
      <div className="toolbar-right">
        {/* Sidebar Links */}
        <div className="sidebar-links">
          <Link to="/" className="sidebar-link">
            <AiOutlineHome size={24} />
            Home
          </Link>
          <Link to="/academic-projects" className="sidebar-link">
            <AiOutlineProject size={24} />
            Academic Projects
          </Link>
          <Link to="/work-experience" className="sidebar-link">
            <AiFillBank size={24} />
            Work Experience
          </Link>
          <Link to="/talks" className="sidebar-link">
            <AiOutlineFileText size={24} />
            Talks
          </Link>
          <Link to="/publications" className="sidebar-link">
            <AiOutlineBook size={24} />
            Publications
          </Link>
          <Link to="/certificates" className="sidebar-link">
            <AiOutlineCheckCircle size={24} />
            Certificates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
