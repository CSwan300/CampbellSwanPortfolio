import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects">
            <div>
                <h2>Featured Projects</h2>

                <div>
                    {projects.map((project) => (
                        <article key={project.id}>
                            <div>
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
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
                                                d="M12 6v6m0 0v6m0-6h6m0 0h6m0 0h-6m0 0H6"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <ul>
                                    {project.technologies.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>

                                <div>
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
                                            Demo
                                        </a>
                                    ) : (
                                        <span aria-disabled="true">
                                            Demo
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div>
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