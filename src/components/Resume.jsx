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
        <section id="resume" className="resume-section">
            <div className="resume-container">

                <h2>Resume</h2>

                <div className="resume-grid">

                    {/* Left — info */}
                    <div className="resume-info">
                        <h3>Campbell Swan</h3>
                        <p>
                            Computer Science (Software Development) student with a strong foundation
                            in software development, data analysis, and emerging technologies.
                        </p>

                        <div className="resume-details">

                            <div className="resume-detail-block resume-education">
                                <h4>Education</h4>
                                <div>
                                    <p>Computing — Software Development</p>
                                    <p>Glasgow Caledonian University, Scotland</p>
                                </div>
                            </div>

                            <div className="resume-detail-block resume-skills">
                                <h4>Technical Skills</h4>
                                <ul>
                                    <li>✓ JavaScript &amp; React</li>
                                    <li>✓ Python</li>
                                    <li>✓ CSS</li>
                                    <li>✓ Data Analysis</li>
                                    <li>✓ Git &amp; GitHub</li>
                                    <li>✓ JVM Languages</li>
                                    <li>✓ Docker, K8s &amp; DevOps</li>
                                    <li>✓ More Random Technology</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Right — download */}
                    <div className="resume-download">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                            />
                        </svg>
                        <h3>Download Resume</h3>
                        <p>
                            Get a detailed overview of my experience, skills, and accomplishments.
                        </p>
                        <button className="resume-download-btn" onClick={handleDownload}>
                            📥 Download PDF
                        </button>
                        <p className="resume-filename">{personalInfo.resumeFile}</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resume;