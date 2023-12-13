// ProjectPage.js
import React from 'react';
import { Link } from 'react-router-dom';


function ProjectPage({ project }) {
const linkEmpty = project.link === "" ? false : true;

  return (

    <section className="project-page">
        <div className="project-tile-single">
            <img className="project-img-single" loading="lazy" src={project.image} alt={project.title} />
        </div>
        <div className="project-tile-text">
            <h3 className="project-title">{project.title}</h3>
            <h4 className="project-type">{project.type}</h4>
            <h5>{project.stack}</h5>
            <p className="project-desc">{project.description}</p>
            {linkEmpty && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <h5 className="project-link">View Project</h5>
            </a>
          )}
        </div>
        <Link className="cta-link" to="/projects"><h4 className="cta-text">Back to Projects</h4></Link>
    </section>
  );
}

export default ProjectPage;