import JDPortrait from '../img/JD.png';
import github from '../img/github.svg';
import email from '../img/mail.svg';
import linkedin from '../img/linkedin.svg';




function Home() {
    return (
        <section className="about">
            <div className="about-text">
                <div className="hey-text">Hey there!</div>
                <h2>I'm Julia</h2>
                <p className="about-paragraph">I am a passionate problem solver with design, development, and research experience. My love for product design, combined with my ability to understand technical concepts, allows me to approach problems uniquely and balance design with development trade-offs. I am obsessed with asking "Why?" and my design methodology revolves around keeping humans at the center of solutions.
                <br/><br/>This site is a suuuper simple overview of my past development projects. To see my experience more in-depth and my product design work, visit my <a href="https://jdearden.webflow.io/" target="_blank" rel="noopener noreferrer" className="portfolio-link">design portfolio</a>.
                </p>
                <div className="link-container">
                    <a href="https://github.com/jdearden4/" target="_blank" rel="noopener noreferrer"><img className="icon" src={github} alt="email"/></a>
                    <a href="mailto:jdearden44@gmail.com" target="_blank" rel="noopener noreferrer"><img className="icon" src={email} alt="email"/></a>
                    <a href="https://www.linkedin.com/in/julia-dearden/" target="_blank" rel="noopener noreferrer" className="portfolio-link"><img className="icon" src={linkedin} alt="linkedin"/></a>
                </div>
            </div>
            <img src={JDPortrait} className="about-image" loading="lazy" alt="Julia Dearden Portrait"/>

        </section>
    )
}

export default Home;