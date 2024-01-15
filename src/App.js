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
import './pages/home.css';
import './pages/about.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Dev from './pages/Dev';
import About from './pages/About';
import ProjectPage from './pages/ProjectPage';
import projects from './pages/projectsData';



function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
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
