// ProjectPage.js
import React from 'react';
import { Link } from 'react-router-dom';


function ProjectPage({ project }) {
const roundClassName = `project-type-single ${project.type === 'design' ? 'design' : 'dev'}`;
const linkEmpty = project.link === "" ? false : true;

  return (

    <div className="project-page">
        <div class="project-tile-single">
            <img className="project-img-single" loading="lazy" src={project.image} alt={project.title} />
        </div>
        <div className="project-tile-text">
            <h5 className="project-type">{project.type}</h5>
            <h3 className="project-title">{project.title}</h3>
            <h4>{project.stack}</h4>
            <p className="project-desc">{project.description}</p>
            {linkEmpty && (
          <a href={project.link}>
            <h5 className="project-link">View Project</h5>
          </a>
        )}
        </div>
        <Link className="cta-link" to="/projects"><h4 className="cta-text">Back to Projects</h4></Link>
    </div>
  );
}

export default ProjectPage;