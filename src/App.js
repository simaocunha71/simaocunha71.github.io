import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/Events/Events';
import Certificates from './pages/Certificates/Certificates';
import Publications from './pages/Publications/Publications';
import AcademicProjects from './pages/AcademicProjects/AcademicProjects';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import CVPage from './pages/CVPage/CVPage';
import Skills from './pages/Skills/Skills';
import MScThesis from './pages/MScThesis/MScThesis'; 
import Toolbar from './components/Toolbar/Toolbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

import './App.css';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Toolbar />
        <div className="content-container">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work-experience" element={<WorkExperience />} />
              <Route path="/events/:eventId?" element={<Events />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/academic-projects" element={<AcademicProjects />} />
              <Route path="/curriculum-vitae" element={<CVPage />} />
              <Route path="/skills-and-interests" element={<Skills />} />
              <Route path="/msc-thesis" element={<MScThesis />} /> 
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
