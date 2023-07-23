import React from 'react';
import './Toolbar.css';

const Toolbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="toolbar">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span className={`sidebar-toggle-icon ${isSidebarOpen ? 'open' : ''}`}></span>
      </button>
      <h1 className="toolbar-title">Simão Cunha's Portfolio</h1>
    </div>
  );
};

export default Toolbar;
