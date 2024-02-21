import bullet from '../img/bullet.png';

function Resume() {
    return (
        <section className="resume">
            <div className="resume-intro">
                <p>This is just a <b>glimpse</b> into my background. For a more in-depth look at my experience, please visit the <a className="portfolio-link" target="_blank" rel="noreferrer" href="https://jdearden.webflow.io/about">about section</a> of my design portfolio!</p>
            </div>
            <div className="experience">
                <h1 className="resume-header">Experience</h1>
                <p><img className="bullet" alt="star list bullet" src={bullet}/>Software Engineer II, Web UX - Rapid7</p>
                <p><img className="bullet" alt="star list bullet" src={bullet}/>Software Engineer I, Web UX - Rapid7</p>
                <p><img className="bullet" alt="star list bullet" src={bullet}/>Product Designer and Software Engineer, Web UX - Rapid7</p>
                <p><img className="bullet" alt="star list bullet" src={bullet}/>UX Researcher - Rapid7</p>
                <p><img className="bullet" alt="star list bullet" src={bullet}/>Graphic Designer - Freelance</p>
                <div className="gap"></div>
                <h1 className="resume-header">Tech Stack</h1>
                <div className="stack-cubes">
                    <h4 className="stack">JavaScript</h4>
                    <h4 className="stack">React</h4>
                    <h4 className="stack">HTML</h4>
                    <h4 className="stack">CSS</h4>
                    <h4 className="stack">SCSS</h4>
                    <h4 className="stack">Flexbox</h4>
                    <h4 className="stack">C#</h4>
                    <h4 className="stack">.NET</h4>
                    <h4 className="stack">Figma</h4>
                    <h4 className="stack">Sketch</h4>
                    <h4 className="stack">Adobe CC</h4>
                </div>
            </div>
            <div className="education">
                <h1 className="resume-header">Education</h1>
                <p><img alt="star list bullet" className="bullet" src={bullet}/>B.A Computer Science, Connecticut College</p>
                <p><img alt="star list bullet" className="bullet" src={bullet}/>Ammerman Center for Arts and Tech, Connecticut College</p>
                <div className="gap"></div>
                <h1 className="resume-header">Courses / Certifications</h1>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>UX Design Professional Certificate - Google / Coursera</p>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>Front-End Developer Professional Certificate - Meta / Coursera</p>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>Web Development - John's Hopkins / Coursera</p>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>Responsive Design for Beginners - Beta Tester for CoderCoder</p>
                    <div className="gap"></div>
                    <h1 className="resume-header">Leadership</h1>
                    <p><img alt="star list bullet" className="bullet" src={bullet}/>Women Who Code, NYC</p>
            </div>
                
        </section>
    )
}

export default Resume;