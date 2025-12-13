import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

const ProjectModal = ({ project, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!project) return null;

    return (
        <motion.div
            className="project-modal-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            data-lenis-prevent
        >
            <motion.div
                className="project-modal-content"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close-btn" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="modal-header">
                    <div className="modal-header-top">
                        <h2 className="modal-title">{project.title}</h2>
                        {project.links && (
                            <div className="modal-links">
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        GITHUB
                                    </a>
                                )}
                                {project.links.live && (
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="modal-link-btn primary">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        LIVE DEMO
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="modal-tags">
                        {project.tech && project.tech.split(', ').map((tech, index) => (
                            <span key={index} className="modal-tag">{tech}</span>
                        ))}
                    </div>
                </div>

                <div className="modal-body">
                    <div className="modal-section">
                        <h3 className="modal-section-title">Overview</h3>
                        <p className="modal-description">{project.longDescription || project.description}</p>
                    </div>

                    {project.features && (
                        <div className="modal-section">
                            <h3 className="modal-section-title">Key Features</h3>
                            <div className="features-grid">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.challenges && (
                        <div className="modal-section">
                            <h3 className="modal-section-title">Technical Deep Dive</h3>
                            <p className="modal-description">{project.challenges}</p>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;
