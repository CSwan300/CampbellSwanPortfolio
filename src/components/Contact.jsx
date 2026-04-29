import { personalInfo } from '../data/personalInfo';

const Contact = () => {
    return (
        <section id="contact" className="portfolio-section contact">
            <div className="portfolio-container">
                <h2 className="portfolio-section-title">Get In Touch</h2>

                <div className="contact__grid">
                    <a href={`mailto:${personalInfo.email}`} className="contact__card">
                        <span className="contact__card-icon">✉️</span>
                        <h3 className="contact__card-title contact__card-title--email">Email</h3>
                        <span className="contact__card-value contact__card-value--email">
                            {personalInfo.email}
                        </span>
                    </a>

                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__card"
                    >
                        <span className="contact__card-icon">🔗</span>
                        <h3 className="contact__card-title contact__card-title--github">GitHub</h3>
                        <span className="contact__card-value contact__card-value--github">
                            CSwan300
                        </span>
                    </a>

                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__card"
                    >
                        <span className="contact__card-icon">💼</span>
                        <h3 className="contact__card-title contact__card-title--linkedin">LinkedIn</h3>
                        <span className="contact__card-value contact__card-value--linkedin">
                            campbell-swan
                        </span>
                    </a>
                </div>

                <div className="contact__footer-box">
                    <p className="contact__footer-text">
                        I'm always open to discussing new projects, opportunities, and ideas.
                        Feel free to reach out!
                    </p>
                    <div className="contact__footer-actions">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="contact__footer-btn--primary"
                        >
                           Send An Email Or Use The Form Above
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__footer-btn--outline"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;