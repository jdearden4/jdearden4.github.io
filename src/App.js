import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,Outlet
} from "react-router-dom";
import './App.css';
import './components/nav.css';
import './pages/dev.css';
import './pages/project.css';
import './pages/about.css';
import './pages/resume.css';
import Nav from './components/Nav';
import About from './pages/About';
import Dev from './pages/Dev';
import Resume from './pages/Resume';
import ProjectPage from './pages/ProjectPage';
import projects from './pages/projectsData';



function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Dev projects={projects} />} />
        <Route path="/:projectName" element={<Outlet />}>
          {projects.map((project, index) => (
            <Route
              key={index}
              path={`${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              element={<ProjectPage project={project} />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
