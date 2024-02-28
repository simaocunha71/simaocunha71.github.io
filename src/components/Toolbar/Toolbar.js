import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import './Toolbar.css';

const Toolbar = ({ toggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleSidebar();
  };

  return (
    <div className="toolbar">
      <button
        className={`toggle-button ${isSidebarOpen ? 'open' : ''}`}
        onClick={handleToggleSidebar}
      >
        <AiOutlineMenu size={20} />
      </button>
      <h1 className="toolbar-title">Simão Cunha's Portfolio</h1>
    </div>
  );
};

export default Toolbar;
