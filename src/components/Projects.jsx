import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">

                <h2>Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card">

                            {/* Image / placeholder */}
                            <div className="project-image-wrap">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="project-image-placeholder">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Body */}
                            <div className="project-body">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <ul>
                                    {project.technologies.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>

                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                    {project.demo ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span aria-disabled="true">No Demo</span>
                                    )}
                                </div>
                            </div>

                        </article>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="projects-cta">
                    <p>Interested in collaborating or seeing more?</p>
                    <a
                        href="https://github.com/CSwan300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit My GitHub
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;