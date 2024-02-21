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
                <h3 className="project-text-title">{title}</h3>
                <p className="project-text-stack">{stack}</p>
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