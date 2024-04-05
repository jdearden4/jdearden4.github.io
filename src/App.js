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



function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
