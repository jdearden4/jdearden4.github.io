import projects from './projectsData';

function Project({title, image, stack, shortdesc}) {

    return (
        <div className="project">
            <div className="project-tile">
                <img className="project-img" loading="lazy" src={image} alt={title}/>
            </div>
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
            <div className="detail">
                <h2>Past Development Projects at a Glance</h2>
                 <p>(When I said suuuper simple, I meant it!)</p>
            </div>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>

    );
}

export default Dev;