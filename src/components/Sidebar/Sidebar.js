import React from 'react';
import { AiOutlineProject, AiOutlineFileText, AiOutlineBook, AiOutlineCheckCircle, AiOutlineHome, AiFillBank } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
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
  );
};

export default Sidebar;
