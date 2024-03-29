import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Talks from './pages/Talks/Talks';
import Certificates from './pages/Certificates/Certificates';
import Publications from './pages/Publications/Publications';
import AcademicProjects from './pages/AcademicProjects/AcademicProjects';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Toolbar from './components/Toolbar/Toolbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Toolbar toggleSidebar={toggleSidebar} />
        <div className="content-container">
          {isSidebarOpen && <Sidebar />}
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/work-experience" component={WorkExperience} />
              <Route path="/talks" component={Talks} />
              <Route path="/certificates" component={Certificates} />
              <Route path="/publications" component={Publications} />
              <Route path="/academic-projects" component={AcademicProjects} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
