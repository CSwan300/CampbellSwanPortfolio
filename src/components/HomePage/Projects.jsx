import { useState, useEffect } from 'react';
import { projects } from '../../data/projects.js';

const Projects = () => {
    const [displayProjects, setDisplayProjects] = useState([]);
    const [limit, setLimit] = useState(6);

    useEffect(() => {
        // Shuffle projects on mount
        const shuffled = [...projects].sort(() => 0.5 - Math.random());
        setDisplayProjects(shuffled);

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setLimit(3); // Mobile
            } else {
                setLimit(6); // Desktop
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                {/* Applied scroll-fade for the CSS scroll-timeline animation */}
                <h2 className="scroll-fade">Featured Projects</h2>

                <div className="projects-grid">
                    {displayProjects.slice(0, limit).map((project, index) => (
                        <article
                            key={project.id}
                            className="project-card scroll-fade"
                            // Inline style for the mobile staggered entrance defined in CSS
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image-wrap">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="project-image-placeholder">
                                        <div className="placeholder-content">
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <span>NO_IMAGE_DATA</span>
                                        </div>
                                    </div>
                                )}
                                <div className="image-overlay"></div>
                            </div>

                            <div className="project-body">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="tech-tags">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} className="demo-link" target="_blank" rel="noopener noreferrer">
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="projects-footer scroll-fade">
                    <p>Interested in collaborating or seeing more?</p>
                    <a
                        href="https://github.com/CSwan300"
                        className="github-btn"
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