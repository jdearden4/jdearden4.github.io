import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import logo from '../img/logo.png'
import speechbubble from '../img/speechbubble.png'

function Nav() {
    const [showMessage, setShowMessage] = useState(false);

    const handleMouseOver = () => {
      setShowMessage(true);
    };

    const handleMouseOut = () => {
      setShowMessage(false);
    };

    return (
        <nav className="nav">
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="logo-container">
                <img src={logo} className="logo-img" alt="JD Logo" />
                {showMessage && <div className="message"><img className="speechbubble" src={speechbubble} alt="Speech bubble saying hello"/><h3 className="bubble-text">Hi there</h3></div>}
             </div>
                  <h1 className="logo">Julia Dearden</h1>
            <div className="nav-links">
                <NavLink to="/" className="nav-item">About</NavLink>
                <NavLink to="/projects" className="nav-item" >Projects</NavLink>
                <NavLink to="/resume" className="nav-item">Resume</NavLink>
            </div>
        </nav>

    )
}

export default Nav;