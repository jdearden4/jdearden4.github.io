import JDPortrait from '../img/JD.png';
import JDName from '../img/JDHandwrittenName.png';
import github from '../img/github.svg';
import email from '../img/mail.svg';
import linkedin from '../img/linkedin.svg';
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


function Home() {
    return (
        <section className="intro">
             <div className="intro-text">
                <div className="hello-div">
                    <h2 className="jumbo">Hey there, I'm </h2><img src={JDName} className="JD-Name" loading="lazy" alt="Julia"/><h2> !</h2>
                </div>
                <h2 className="jumbo-ish">I'm a product designer with <b className="blue-bold">design</b>,  <b className="blue-bold">development</b>, and <b className="blue-bold">research</b> experience. My drive is to create empathetic, human experiences within technology.</h2>
            </div>
            <div className="about">
                <div className="about-text">
                    <p className="about-paragraph">I am a passionate problem solver with design, development, and research experience. My love for product design, combined with my ability to understand technical concepts, allows me to approach problems uniquely and balance design with development trade-offs. I am obsessed with asking "Why?" and my design methodology revolves around keeping humans at the center of solutions.
                    <br/><br/>This site is a suuuper simple overview of my past development projects. To see my resume, my experience more in-depth, and my product design work, visit my <a href="https://jdearden.webflow.io/" target="_blank" rel="noopener noreferrer" className="portfolio-link">design portfolio</a>.
                    </p>
                    <div className="link-container">
                        <a href="https://github.com/jdearden4/" target="_blank" rel="noopener noreferrer"><img className="icon" src={github} alt="email"/></a>
                        <a href="mailto:jdearden44@gmail.com" target="_blank" rel="noopener noreferrer"><img className="icon" src={email} alt="email"/></a>
                        <a href="https://www.linkedin.com/in/julia-dearden/" target="_blank" rel="noopener noreferrer" className="portfolio-link"><img className="icon" src={linkedin} alt="linkedin"/></a>
                    </div>
                </div>
                <img src={JDPortrait} className="about-image" loading="lazy" alt="Julia Dearden Portrait"/>
            </div>
        </section>
    )
}

function Dev() {
    return (
        <section className="projects">
            <div className="detail">
                <h2 id='dev-projects'>Past Development Projects at a Glance</h2>
                 <p>(When I said suuuper simple, I meant it!)</p>
            </div>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>
    );
}


function DevSite() {
    return (
        <>
        <Home/>
        <Dev/>
        </>
    )
}

export default DevSite;