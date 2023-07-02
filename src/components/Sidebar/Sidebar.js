import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const sidebarStyle = {
    width: isOpen ? '25%' : '0',
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'width 1s ease, transform 1s ease' /* Adicione a propriedade transition para ajustar a duração da transição */
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} style={sidebarStyle}>
      <h2 className="sidebar-title">Sidebar Title</h2>
      <button className="sidebar-button">Button 1</button>
      <button className="sidebar-button">Button 2</button>
      <button className="sidebar-button">Button 3</button>
    </div>
  );
};

export default Sidebar;
