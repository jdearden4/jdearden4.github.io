import resume from '../img/JD_Resume.jpg';
import github from '../img/github.png';
import email from '../img/email.png';
import linkedin from '../img/linkedin.png';



function Resume() {
    return (
        <section className="resume">
            <div className="resume-column">
                <div className="resume-section">
                    <h1 className="resume-header">Experience</h1>
                    <p>Web Engineer II, <span className="orange">Rapid7</span></p>
                    <p>Web Engineer I, <span className="orange">Rapid7</span></p>
                    <p>Growth Strategy Rotational Program, <span className="orange">Rapid7</span></p>
                    <p>Product Management Intern, <span className="orange">Cengage</span></p>
                    <p>Graphic Designer, <span className="orange">Freelance</span></p>
                </div>
                <div className="resume-section">
                <h1 className="resume-header">Courses and Certifications</h1>
                    <p>Frontend Development Certificate - <span className="orange">Meta, Coursera</span></p>
                    <p>Foundations of UX - <span className="orange">Google, Coursera</span></p>
                    <p>Web Development - <span className="orange">John's Hopkins, Coursera</span></p>
                </div>
            </div>
            <div className="resume-column">
                <div className="resume-section">
                    <h1 className="resume-header">Stack</h1>
                    <div className="stack-cubes">
                        <h4 className="stack">HTML</h4>
                        <h4 className="stack">CSS</h4>
                        <h4 className="stack">SCSS</h4>
                        <h4 className="stack">Flexbox</h4>
                        <h4 className="stack">JavaScript</h4>
                        <h4 className="stack">React</h4>
                        <h4 className="stack">C#</h4>
                        <h4 className="stack">.NET</h4>
                    </div>
                </div>
                <div className="resume-section">
                    <h1 className="resume-header">Education</h1>
                    <h3>B.A Computer Science, Connecticut College</h3>
                    <h3>Ammerman Center for Arts and Tech, Connecticut College</h3>
                </div>
                <div className="resume-section">
                    <h1 className="resume-header">Leadership</h1>
                    <h3>Women Who Code, NYC</h3>
                </div>
            </div>
        </section>
    )
}

export default Resume;