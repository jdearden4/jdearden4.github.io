import { NavLink } from "react-router-dom";
import JDLogo from '../img/JDLogo.png';

function Nav() {

    return (
        <nav className="nav">
            <img src={JDLogo} className="JD-Logo" loading="lazy" alt="Julia Dearden Logo"/>
            <div className="nav-links">
                <NavLink to="/" className="nav-item">Home</NavLink>
                <a href="/#dev-projects" className="nav-item">Projects</a>
                <a href="https://jdearden.webflow.io/" target="_blank" rel="noopener noreferrer" className="nav-item">Design Portfolio</a>
            </div>
        </nav>

    )
}

export default Nav;