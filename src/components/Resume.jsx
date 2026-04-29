import { personalInfo } from '../data/personalInfo';

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `/${personalInfo.resumeFile}`;
        link.download = personalInfo.resumeFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="resume" className="portfolio-section resume">
            <div className="portfolio-container">
                <h2 className="portfolio-section-title">Or Even Download My Cv</h2>

                <div className="resume__layout">
                    {/* Left — info */}
                    <div className="resume__info-card">
                        <h3 className="resume__name">Campbell Swan</h3>
                        <p className="resume__description">
                            Computer Science (Software Development) student with a strong foundation
                            in software development, data analysis, and emerging technologies.
                        </p>

                        <div className="resume__sections">
                            <div>
                                <h4 className="resume__section-title">Education</h4>
                                <div className="resume__edu-block">
                                    <p className="resume__edu-degree">Computing — Software Development</p>
                                    <p className="resume__edu-school">Glasgow Caledonian University, Scotland</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="resume__section-title">Technical Skills</h4>
                                <ul className="resume__skills-list">
                                    <li>✓ JavaScript &amp; React</li>
                                    <li>✓ Python</li>
                                    <li>✓ Tailwind CSS</li>
                                    <li>✓ Data Analysis</li>
                                    <li>✓ Git &amp; GitHub</li>
                                    <li>✓ JVM Languages</li>
                                    <li>✓ Docker, K8s and DevOps Technologies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right — download */}
                    <div className="resume__download-card">
                        <svg
                            className="resume__download-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l-6 6m6-6l6 6"
                            />
                        </svg>
                        <h3 className="resume__download-title">Download Resume (CV)</h3>
                        <p className="resume__download-subtitle">
                            Get a detailed overview of my experience, skills, and accomplishments.
                        </p>
                        <button className="resume__download-btn" onClick={handleDownload}>
                            📥 Download PDF
                        </button>
                        <p className="resume__filename">File: {personalInfo.resumeFile}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;