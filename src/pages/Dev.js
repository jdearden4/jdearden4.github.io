import React, { useState } from 'react';
import { Link } from "react-router-dom";
import projects from './projectsData';

function Project({title, image, stack, type}) {

    const projectPageName = title.toLowerCase().replace(/\s+/g, '-');
    const projectPage = `/projects/${projectPageName}`;

    const [showMessage, setShowMessage] = useState(false);

    const handleMouseOver = () => {
      setShowMessage(true);
    };

    const handleMouseOut = () => {
      setShowMessage(false);
    };

    return (
        <div className="project">
            <Link to={projectPage}>
                <div className="project-tile" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {/* {showMessage && <div className="cta-link projects"><h3 className="cta-text">View More</h3></div>} */}
                    <img className="project-img" loading="lazy" src={image} alt={title}/>
                </div>
            </Link>
            <div className="project-text">
                <h3>{title}</h3>
                <h4 className="project-type">{type}</h4>
                <h5>{stack}</h5>
            </div>
        </div>
    );
}


function Dev() {
    return (
        <section className="dev">
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>

    );
}

export default Dev;