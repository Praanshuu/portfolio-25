import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import './Projects.css';

const projectsData = [
    {
        title: "Collex — Campus Marketplace",
        tech: "Next.js 15, TypeScript, PostgreSQL, Clerk, Tesseract.js",
        description: "Secure campus marketplace with smart search, file uploads, subscriptions, and a Tinder-style roommate finder.",
        longDescription: "Collex is a comprehensive campus marketplace designed to solve the problem of fragmented student commerce. It creates a unified platform for buying/selling goods, finding accommodation, and connecting with potential roommates, all within a verified student network.",
        features: [
            { title: "Smart Search & Filters", desc: "Advanced search with price ranges, categories, and condition filters." },
            { title: "Tinder-style Logic", desc: "Swipe-based interface for finding roommates based on compatibility." },
            { title: "Secure Verification", desc: "OCR-based ID card scanning to ensure all users are verified students." },
            { title: "Real-time Chat", desc: "Built-in messaging with file sharing and read receipts." }
        ],
        challenges: "Implementing the OCR verification system with Tesseract.js while maintaining client-side performance was challenging. I optimized image processing pipelines and added server-side validation to ensure accuracy and speed.",
        details: "Built with Next.js 15 and Prisma. Features OCR-based student verification, real-time chat with attachments, and automated roll-number validation.",
        links: {
            github: "https://github.com/Praanshuu/COLLEX",
            live: "https://collex-ubej.vercel.app/"
        }
    },
    {
        title: "Certificate Verification System",
        tech: "React, Node.js, Express, Clerk RBAC, Supabase",
        description: "Secure platform with RBAC, admin access, and event management. Reduced manual verification efforts by ~40%.",
        longDescription: "A robust system designed to eliminate fraudulent certificates in academic institutions. It provides a secure, centralized database for issuing and verifying digital certificates, drastically reducing administrative overhead.",
        features: [
            { title: "RBAC Authentication", desc: "Granular access control for Admins, Staff, and Students." },
            { title: "Global Search", desc: "Instant search across thousands of records with debouncing." },
            { title: "Automated Workflows", desc: "Batch processing for certificate generation and email dispatch." },
            { title: "Analytics Dashboard", desc: "Visual metrics for issuance rates and verification attempts." }
        ],
        challenges: "Designing a scalable database schema that could handle thousands of certificate records while allowing for complex queries and filtering was a key hurdle. I implemented proper indexing and optimized SQL queries to achieve sub-100ms response times.",
        details: "Top features include real-time certificate ID validation, analytics dashboards, global search, filters, and automated workflows.",
        links: {
            github: "https://github.com/Praanshuu/verifyAura",
            live: "https://verify-aura-frontend.vercel.app/"
        }
    },
    {
        title: "Blockchain Based Herbs Traceability",
        tech: "React, Node.js, Docker, Firebase, Hyperledger Fabric",
        description: "Blockchain-based supply chain tracking for herbs. distinct producer-transporter-consumer flows with geotagging.",
        longDescription: "A decentralized application (DApp) that ensures transparency and authenticity in the herbal supply chain. By recording every step of the journey on an immutable ledger, it combats counterfeiting and ensures quality.",
        features: [
            { title: "Immutable Ledger", desc: "All transactions are recorded on Hyperledger Fabric for tamper-proof history." },
            { title: "Geotagging", desc: "GPS coordinates are recorded at every checkpoint." },
            { title: "Role-Based Access", desc: "Distinct portals for Producers, Transporters, and Consumers." },
            { title: "QR Code Tracking", desc: "End consumers can scan QR codes to view the full product journey." }
        ],
        challenges: "Orchestrating the Hyperledger Fabric network and integrating it with a traditional web stack was complex. I used Docker Compose to manage the containerized network and built a custom REST API middleware to communicate with the chaincode.",
        details: "Designed a tamper-proof system using Hyperledger Fabric. Features web & mobile interfaces to track product journey and quality checks.",
        links: {
            github: "https://github.com/BrainStorm101/SIH25027---Ayurdhara"
        }
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

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
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-tech">{project.tech}</p>
                            </div>
                            <div className="project-desc">
                                <p>{project.description}</p>
                                <span className="project-link">VIEW DETAILS</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    key="project-modal"
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
