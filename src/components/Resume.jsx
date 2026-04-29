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
        <section id="resume">
            <div>
                <h2>Resume</h2>

                <div>
                    {/* Left — info */}
                    <div>
                        <h3>Campbell Swan</h3>
                        <p>
                            Computer Science (Software Development) student with a strong foundation
                            in software development, data analysis, and emerging technologies.
                        </p>

                        <div>
                            <div>
                                <h4>Education</h4>
                                <div>
                                    <p>Computing — Software Development</p>
                                    <p>Glasgow Caledonian University, Scotland</p>
                                </div>
                            </div>

                            <div>
                                <h4>Technical Skills</h4>
                                <ul>
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
                    <div>
                        <svg
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
                        <h3>Download Resume</h3>
                        <p>
                            Get a detailed overview of my experience, skills, and accomplishments.
                        </p>
                        <button onClick={handleDownload}>
                            📥 Download PDF
                        </button>
                        <p>File: {personalInfo.resumeFile}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;