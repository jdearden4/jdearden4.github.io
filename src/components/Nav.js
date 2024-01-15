import { NavLink } from "react-router-dom";
function Nav() {

    return (
        <nav className="nav">
            <h1 className="logo">Julia Dearden</h1>
            <div className="nav-links">
                <NavLink to="/" className="nav-item">Home</NavLink>
                <NavLink to="/about" className="nav-item">About</NavLink>
                <NavLink to="/projects" className="nav-item" >Projects</NavLink>
                <a href="https://jdearden.webflow.io/" target="_blank" rel="noopener noreferrer" className="nav-item">Design Portfolio</a>

            </div>
        </nav>

    )
}

export default Nav;