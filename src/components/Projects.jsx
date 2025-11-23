import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projectsData = [
    {
        title: "LUMEN – EV Charging Station Locator",
        tech: "React, Node.js, MongoDB, HERE Maps",
        description: "Real-time EV station locator with live availability, charging speed, pricing, and slot booking. Enabled users to pre-book slots and reduce search time.",
        details: "Led a team to design the full UI and integrate global station APIs. Features include map-based navigation, slot booking, and real-time status updates."
    },
    {
        title: "Certificate Verification System",
        tech: "React, Node.js, Express, Clerk RBAC",
        description: "Secure certificate verification platform with RBAC, admin-only access, and event management. Reduced manual verification efforts by ~40%.",
        details: "Implemented secure route protection, session handling, and dashboards for certificate status. Added global search, filters, and CSV export."
    },
    {
        title: "Blockchain Herbs Traceability",
        tech: "React, Node.js, Docker, Hyperledger Fabric",
        description: "Blockchain-based supply chain tracking for herbs. Built web + Android interfaces showing product journey, quality checks, and logs.",
        details: "Designed a tamper-proof system using Hyperledger Fabric. Tracks the journey from producer to consumer, ensuring authenticity and quality."
    }
];

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">SELECTED WORK</h2>
                <div className="projects-list">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        >
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-tech">{project.tech}</p>
                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="project-details"
                                        >
                                            <p>{project.details}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="project-desc">
                                <p>{project.description}</p>
                                <span className="project-link">{expandedIndex === index ? 'CLOSE' : 'VIEW DETAILS'}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
