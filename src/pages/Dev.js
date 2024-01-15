import React, { useState } from 'react';
import { Link } from "react-router-dom";
import projects from './projectsData';

function Project({title, image, stack, type}) {

    const projectPageName = title.toLowerCase().replace(/\s+/g, '-');
    const projectPage = `/projects/${projectPageName}`;

    return (
        <div className="project">
            <Link to={projectPage}>
                <div className="project-tile">
                    <img className="project-img" loading="lazy" src={image} alt={title}/>
                </div>
            </Link>
            <div className="project-text">
                <h3>{title}</h3>
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