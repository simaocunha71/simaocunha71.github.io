import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Talks from './pages/Talks/Talks';
import Certificates from './pages/Certificates/Certificates';
import Publications from './pages/Publications/Publications';
import AcademicProjects from './pages/AcademicProjects/AcademicProjects';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Toolbar from './components/Toolbar/Toolbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Toolbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work-experience" component={WorkExperience} />
          <Route path="/talks" component={Talks} />
          <Route path="/certificates" component={Certificates} />
          <Route path="/publications" component={Publications} />
          <Route path="/academic-projects" component={AcademicProjects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
