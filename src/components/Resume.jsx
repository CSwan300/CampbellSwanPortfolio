import { personalInfo } from '../data/personalInfo';
import { colors, spacing, radius } from '../data/themeConfig';

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
        <section id="resume" className="py-16 text-white" style={{ backgroundColor: colors.background }}>
            <div className="max-w-6xl mx-auto px-4">
                <h2
                    className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.primaryHover})`,
                    }}
                >
                    Resume
                </h2>

                <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                    {/* Left - Content */}
                    <div className="flex-1 flex">
                        <div
                            className="p-8 rounded-lg border flex-1 flex flex-col"
                            style={{
                                backgroundColor: colors.surface,
                                borderColor: colors.cardBorder,
                            }}
                        >
                            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.primary }}>Campbell Swan</h3>
                            <p className="mb-6" style={{ color: colors.textSecondary }}>
                                Computer Science (Software Development) student with a strong foundation in software development, data analysis, and emerging technologies.
                            </p>

                            <div className="space-y-6 flex-1">
                                {/* Education Section */}
                                <div>
                                    <h4 className="text-lg font-semibold mb-3" style={{ color: colors.primary }}>Education</h4>
                                    <div
                                        className="p-4 rounded border"
                                        style={{
                                            backgroundColor: colors.secondary,
                                            borderColor: colors.border,
                                        }}
                                    >
                                        <p className="font-medium" style={{ color: colors.primary }}>Computing -- Software Development</p>
                                        <p className="text-sm" style={{ color: colors.textSecondary }}>Glasgow Caledonian University, Scotland</p>
                                    </div>
                                </div>

                                {/* Skills Section */}
                                <div>
                                    <h4 className="text-lg font-semibold mb-3" style={{ color: colors.primary }}>Technical Skills</h4>
                                    <ul className="grid grid-cols-2 gap-2 text-sm" style={{ color: colors.textSecondary }}>
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
                        <div
                            className="p-12 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 flex-1 flex flex-col"
                            style={{
                                background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryActive})`,
                            }}
                        >
                            <div className="text-center flex-1 flex flex-col justify-center">
                                <svg className="w-20 h-20 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l-6 6m6-6l6 6" />
                                </svg>
                                <h3 className="text-3xl font-bold mb-3" style={{ color: colors.btnPrimaryText }}>Download Resume</h3>
                                <p className="mb-8" style={{ color: colors.btnPrimaryText, opacity: 0.9 }}>
                                    Get a detailed overview of my experience, skills, and accomplishments.
                                </p>
                                <button
                                    onClick={handleDownload}
                                    className="w-full px-8 py-4 font-bold rounded-lg transition transform hover:scale-105 duration-300 shadow-lg"
                                    style={{
                                        backgroundColor: colors.btnPrimaryText,
                                        color: colors.primary,
                                    }}
                                >
                                    📥 Download PDF
                                </button>
                                <p className="text-sm mt-6" style={{ color: colors.btnPrimaryText, opacity: 0.8 }}>
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
