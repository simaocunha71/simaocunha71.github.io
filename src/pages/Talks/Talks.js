import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';

const Talks = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Toolbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', height: '100vh' }}>
        <span>Talks</span>
      </div>
      <Footer />
    </>
  );
};

export default Talks;