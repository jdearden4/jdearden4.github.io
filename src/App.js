import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import './components/nav.css';
import './pages/dev.css';
import './pages/home.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Dev from './pages/Dev';
import projects from './pages/projectsData';



function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Dev projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;
