import { personalInfo } from '../data/personalInfo';
import { colors, spacing, radius } from '../data/themeConfig';

const About = () => {
    return (
        <section
            id="about"
            className="py-16 text-white"
            style={{ backgroundColor: colors.background }}
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2
                    className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.primaryHover})`,
                    }}
                >
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    {/* Left side - Text */}
                    <div
                        className="flex flex-col justify-between rounded-lg p-6"
                        style={{ backgroundColor: colors.surface }}
                    >
                        <p className="leading-relaxed text-lg mb-6" style={{ color: colors.textSecondary }}>
                            {personalInfo.bio}
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold" style={{ color: colors.primary }}>
                                Skills & Interests
                            </h3>
                            <ul className="grid grid-cols-2 gap-3">
                                {[
                                    'Puzzles',
                                    'Chess',
                                    'Python',
                                    'Rugby',
                                    'Data Analysis',
                                    'Backend Development',
                                    'Problem Solving',
                                    'Git & GitHub',
                                    'Golf',
                                ].map((skill, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 rounded-lg border transition hover:border-purple-400"
                                        style={{
                                            backgroundColor: colors.secondary,
                                            color: colors.primary,
                                            borderColor: colors.border,
                                        }}
                                    >
                                        ✓ {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right side - Stats */}
                    <div className="relative flex">
                        <div
                            className="absolute inset-0 rounded-lg blur-xl opacity-20"
                            style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.primaryActive})` }}
                        ></div>
                        <div
                            className="relative p-8 rounded-lg border flex-1 flex flex-col"
                            style={{
                                backgroundColor: colors.surface,
                                borderColor: colors.cardBorder,
                            }}
                        >
                            <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.primary }}>
                                By The Numbers
                            </h3>
                            <div className="space-y-4 flex-1">
                                {[
                                    { label: 'Projects Completed', value: '10+' },
                                    { label: 'Languages I Am Familiar With', value: '8+' },
                                    { label: 'GitHub Repositories', value: '15+' },
                                    { label: 'My Golf Handicap', value: '33+' },
                                ].map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between items-center pb-4"
                                        style={{
                                            borderBottom: idx < 3 ? `1px solid ${colors.border}` : 'none',
                                        }}
                                    >
                                        <span style={{ color: colors.textSecondary }}>{stat.label}</span>
                                        <span className="text-2xl font-bold" style={{ color: colors.primary }}>{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
