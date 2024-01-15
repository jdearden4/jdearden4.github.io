import bullet from '../img/bullet.png';

function Resume() {
    return (
        <section className="resume">
            <div className="resume-intro">
                <p>This is a <b>super</b> basic outline of my background. If you want to learn about my experience more in-depth, please visit my <a className="portfolio-link" target="_blank" rel="noreferrer" href="https://jdearden.webflow.io/about">design portfolio's about section!</a></p>
            </div>
            <div className="column">
                <div className="resume-section">
                    <h1 className="resume-header">Experience</h1>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>Software Engineer II, Web - Rapid7</p>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>Software Engineer I, Web - Rapid7</p>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>UX Designer and Software Engineer - Rapid7</p>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>UX Researcher - Rapid7</p>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>Graphic Designer - Freelance</p>
                </div>
                <div className="resume-section">
                <h1 className="resume-header">Courses / Certifications</h1>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>Front-End Developer Professional Certificate - Meta, Coursera</p>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>UX Design Professional Certificate - Google, Coursera</p>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>Web Development - John's Hopkins, Coursera</p>
                    <p><img className="bullet" alt="star list bullet" src={bullet}/>Responsive Design for Beginners - Beta Tester for CoderCoder</p>

                </div>
            </div>
            <div className="column">
                <div className="resume-section">
                    <h1 className="resume-header">Stack</h1>
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
                <div className="resume-section">
                    <h1 className="resume-header">Education</h1>
                    <p><img alt="star list bullet" className="bullet" src={bullet}/>B.A Computer Science, Connecticut College</p>
                    <p><img alt="star list bullet" className="bullet" src={bullet}/>Ammerman Center for Arts and Tech, Connecticut College</p>
                </div>
                <div className="resume-section">
                    <h1 className="resume-header">Leadership</h1>
                    <p><img alt="star list bullet" className="bullet" src={bullet}/>Women Who Code, NYC</p>
                </div>
            </div>
        </section>
    )
}

export default Resume;