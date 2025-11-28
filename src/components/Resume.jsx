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
        <section id="resume" className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                    Resume
                </h2>

                {/* Make columns stretch and share height */}
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                    {/* Left - Content */}
                    <div className="flex-1 flex">
                        <div className="bg-slate-700 p-8 rounded-lg border border-blue-500/30 flex-1 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Campbell Swan</h3>
                            <p className="text-gray-300 mb-6">
                                Computer Science (Software Development) student with a strong foundation in software development, data analysis, and emerging technologies.
                            </p>

                            <div className="space-y-6 flex-1">
                                {/* Education Section */}
                                <div>
                                    <h4 className="text-lg font-semibold text-purple-300 mb-3">Education</h4>
                                    <div className="bg-slate-600 p-4 rounded border border-blue-500/20">
                                        <p className="font-medium text-blue-300">Computing -- Software Development</p>
                                        <p className="text-gray-400 text-sm">Glasgow Caledonian University, Scotland</p>
                                    </div>
                                </div>

                                {/* Skills Section */}
                                <div>
                                    <h4 className="text-lg font-semibold text-purple-300 mb-3">Technical Skills</h4>
                                    <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                                        <li>✓ JavaScript & React</li>
                                        <li>✓ Python</li>
                                        <li>✓ Tailwind CSS</li>
                                        <li>✓ Data Analysis</li>
                                        <li>✓ Git & GitHub</li>
                                        <li>✓ JVM Languages</li>
                                        <li>✓ Docker, K8s and DevOps Technologies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Download Section */}
                    <div className="flex-1 flex">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 flex-1 flex flex-col">
                            <div className="text-center flex-1 flex flex-col justify-center">
                                <svg className="w-20 h-20 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l-6 6m6-6l6 6" />
                                </svg>
                                <h3 className="text-3xl font-bold mb-3 text-white">Download Resume</h3>
                                <p className="text-blue-100 mb-8">
                                    Get a detailed overview of my experience, skills, and accomplishments.
                                </p>
                                <button
                                    onClick={handleDownload}
                                    className="w-full px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition transform hover:scale-105 duration-300 shadow-lg"
                                >
                                    📥 Download PDF
                                </button>
                                <p className="text-sm text-blue-100 mt-6">
                                    File: {personalInfo.resumeFile}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
