import { useState, useEffect } from 'react';
import { projects } from '../data/projects';

const Projects = () => {
    const [displayProjects, setDisplayProjects] = useState([]);
    const [limit, setLimit] = useState(6);

    useEffect(() => {
        const shuffled = [...projects].sort(() => 0.5 - Math.random());
        setDisplayProjects(shuffled);
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setLimit(3); // Mobile
            } else {
                setLimit(6); // Desktop
            }
        };
        // Run once on load and add listener
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2>Featured Projects</h2>

                <div className="projects-grid">
                    {/* Slice the array based on the current limit */}
                    {displayProjects.slice(0, limit).map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-image-wrap">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="project-image-placeholder">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            <div className="project-body">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <ul>
                                    {project.technologies.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    {project.demo ? (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                    ) : (
                                        <span aria-disabled="true">No Demo</span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="projects-cta">
                    <p>Interested in collaborating or seeing more?</p>
                    <a href="https://github.com/CSwan300" target="_blank" rel="noopener noreferrer">
                        Visit My GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;