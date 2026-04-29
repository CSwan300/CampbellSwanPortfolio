import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="portfolio-section projects">
            <div className="portfolio-container">
                <h2 className="portfolio-section-title">Featured Projects</h2>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-card__image">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="project-card__placeholder">
                                        <svg
                                            className="project-card__placeholder-icon"
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

                            <div className="project-card__body">
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__description">{project.description}</p>

                                <ul className="project-card__tags">
                                    {project.technologies.map((tech) => (
                                        <li key={tech} className="project-card__tag">{tech}</li>
                                    ))}
                                </ul>

                                <div className="project-card__links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card__link project-card__link--github"
                                    >
                                        GitHub
                                    </a>
                                    {project.demo ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-card__link project-card__link--demo"
                                        >
                                            Demo
                                        </a>
                                    ) : (
                                        <span
                                            className="project-card__link project-card__link--demo-disabled"
                                            aria-disabled="true"
                                        >
                                            Demo
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/*<div className="projects__cta">*/}
                {/*    <p className="projects__cta-text">Interested in collaborating or seeing more?</p>*/}
                {/*    <a*/}
                {/*        href="https://github.com/CSwan300"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*        className="projects__cta-link"*/}
                {/*    >*/}
                {/*        Visit My GitHub*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default Projects;