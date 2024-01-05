import JDPortrait from '../img/JD-portrait.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import github from '../img/github.svg';
import email from '../img/mail.svg';
import linkedin from '../img/linkedin.svg';



function Home() {
    return (
        <section className="about">
            <img src={JDPortrait} className="about-image" loading="lazy" alt="Julia Dearden Portrait"/>
            <div className="about-text">
                <div className="label">Hey there!</div>
                <h2 className="about-title">I'm Julia</h2>
                <h2 className="about-subtitle">frontend engineer & product designer</h2>
                <p className="about-paragraph">As a result of working in various technical, creative, and strategic positions, I am a cross-functional problem solver who is passionate about front-end engineering and product design.<br/><br/>My drive is to create empathetic, human experiences within technology. I have a strong, technical background that is complemented with a foundation of design-thinking skills. I am obsessed with asking <b className="blue">“Why?”</b> and keeping humans at the center of dev and design decisions.<br/><br/>Other things I love: music, pilates, being outdoors, and painting!</p>
                <div className="link-container">
                    <a href="https://github.com/jdearden4/" target="_blank" rel="noopener noreferrer"><img className="icon" src={github} alt="email"/></a>
                    <a href="mailto:jdearden44@gmail.com" target="_blank" rel="noopener noreferrer"><img className="icon" src={email} alt="email"/></a>
                    <a href="https://www.linkedin.com/in/julia-dearden/" target="_blank" rel="noopener noreferrer"><img className="icon" src={linkedin} alt="linkedin"/></a>
                </div>
            </div>
        </section>
    )
}

export default Home;