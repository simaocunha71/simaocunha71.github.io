import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Talks from './pages/Talks/Talks';
import Certifications from './pages/Certifications/Certifications';
import Publications from './pages/Publications/Publications';
import AcademicProjects from './pages/AcademicProjects/AcademicProjects';
import Toolbar from './components/Toolbar/Toolbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div>
        <Toolbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Switch>
          <Route path="/" exact component={Home} /> {/* Rota padrão */}
          <Route path="/talks" component={Talks} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/publications" component={Publications} />
          <Route path="/academic-projects" component={AcademicProjects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;