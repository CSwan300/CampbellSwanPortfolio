import { projects } from '../data/projects';
import { colors, spacing, radius } from '../data/themeConfig';

const Projects = () => {
    return (
        <section id="projects" className="py-16 text-white" style={{ backgroundColor: colors.background }}>
            <div className="max-w-6xl mx-auto px-4">
                <h2
                    className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r animate-fade-in"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.primaryHover})`,
                    }}
                >
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 flex flex-col"
                            style={{
                                backgroundColor: colors.surface,
                                border: `1px solid ${colors.cardBorder}`,
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative w-full h-48 overflow-hidden" style={{ backgroundColor: colors.primary }}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m0 0h6m0 0h-6m0 0H6" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3
                                    className="text-xl font-semibold mb-2 group-hover:opacity-80 transition"
                                    style={{ color: colors.primary }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className="text-sm mb-4 leading-relaxed flex-grow"
                                    style={{ color: colors.textSecondary }}
                                >
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs px-3 py-1 rounded-full"
                                            style={{
                                                backgroundColor: colors.secondary,
                                                color: colors.primary,
                                                border: `1px solid ${colors.border}`,
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 rounded-lg text-center text-sm font-medium transition hover:opacity-90"
                                        style={{
                                            backgroundColor: colors.primary,
                                            color: colors.btnPrimaryText,
                                        }}
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo ? project.demo : '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 rounded-lg text-center text-sm font-medium transition"
                                        style={{
                                            backgroundColor: project.demo ? 'transparent' : colors.secondary,
                                            color: project.demo ? colors.primary : colors.textSecondary,
                                            border: `1px solid ${project.demo ? colors.primary : colors.border}`,
                                            cursor: project.demo ? 'pointer' : 'not-allowed',
                                            pointerEvents: project.demo ? 'auto' : 'none',
                                            opacity: project.demo ? 1 : 0.5,
                                        }}
                                    >
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="mb-4" style={{ color: colors.textSecondary }}>
                        Interested in collaborating or seeing more?
                    </p>
                    <a
                        href="https://github.com/CSwan300"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 rounded-lg font-semibold transition hover:shadow-lg"
                        style={{
                            background: `linear-gradient(to right, ${colors.primary}, ${colors.primaryActive})`,
                            color: colors.btnPrimaryText,
                        }}
                    >
                        Visit My GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
