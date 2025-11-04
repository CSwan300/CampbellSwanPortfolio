import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-slate-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 border border-blue-500/30 hover:border-purple-500/60 flex flex-col"
                        >
                            {/* Project Image */}
                            <div className="relative w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg
                                            className="w-16 h-16 text-white/30"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M12 6v6m0 0v6m0-6h6m0 0h6m0 0h-6m0 0H6"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2 text-blue-300 group-hover:text-purple-300 transition">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/50"
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
                                        className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-center text-sm font-medium transition"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo ? project.demo : '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 px-4 py-2 rounded-lg text-center text-sm font-medium transition ${
                                            project.demo
                                                ? 'border border-purple-500 hover:bg-purple-500/20 text-purple-300'
                                                : 'border border-gray-600 cursor-not-allowed text-gray-500 pointer-events-none'
                                        }`}
                                        aria-disabled={project.demo ? 'false' : 'true'}
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
                    <p className="text-gray-400 mb-4">Interested in collaborating or seeing more?</p>
                    <a
                        href="https://github.com/CSwan300"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
                    >
                        Visit My GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
