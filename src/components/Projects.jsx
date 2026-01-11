import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import './Projects.css';

const projectsData = [
    {
        title: "Collex - Campus Marketplace & Roommate Finder",
        tech: "Next.js 15, TypeScript, Prisma, PostgreSQL (Neon), Clerk Auth, Tesseract.js, Tailwind, Shadcn UI",
        description: "Secure campus marketplace with smart search, file uploads, subscriptions, chat room and robust backend.",
        longDescription: "Collex is a comprehensive campus marketplace designed to solve the problem of fragmented student commerce. It creates a unified platform for buying/selling goods, finding accommodation, and connecting with potential roommates, all within a verified student network.",
        features: [
            { title: "Smart Search", desc: "Built secure campus marketplace with smart search, file uploads, and subscriptions." },
            { title: "ID Verification", desc: "Used Tesseract.js to extract text from uploaded ID cards and matched roll numbers." },
            { title: "Roommate Matching", desc: "Developed tinder style roommate matching and real-time chat with attachments." }
        ],
        challenges: "Implementing the OCR verification system with Tesseract.js while maintaining client-side performance was challenging. I optimized image processing pipelines and added server-side validation to ensure accuracy and speed.",
        details: "Top features include OCR-based text extraction, tinder-style matching, and real-time chat with read states.",
        links: {
            github: "https://github.com/Praanshuu/COLLEX",
            live: "https://collex-ubej.vercel.app/"
        }
    },
    {
        title: "Certificate Verification & Event Management System",
        tech: "React, Node.js, Express, Clerk RBAC, Supabase, TailwindCSS",
        description: "Secure platform with RBAC, admin-only access, and event management. Reduced manual verification efforts by ~40%.",
        longDescription: "A robust system designed to eliminate fraudulent certificates in academic institutions. It provides a secure, centralized database for issuing and verifying digital certificates, drastically reducing administrative overhead.",
        features: [
            { title: "RBAC Authentication", desc: "Developed a secure certificate verification platform with RBAC and admin-only access." },
            { title: "Real-time Validation", desc: "Added real-time certificate ID validation, logs, analytics, filters, and pagination." },
            { title: "Optimization", desc: "Reduced manual verification efforts by ~40% using optimized APIs and automated workflows." }
        ],
        challenges: "Designing a scalable database schema that could handle thousands of certificate records while allowing for complex queries and filtering was a key hurdle.",
        details: "Built with React and Node.js. Features RBAC auth, admin dashboards, and REST APIs for events and verification.",
        links: {
            github: "https://github.com/Praanshuu/verifyAura",
            live: "https://verify-aura-frontend.vercel.app/"
        }
    },
    {
        title: "Blockchain Herbs Traceability System",
        tech: "React, Node.js, Docker, Firebase, Hyperledger Fabric",
        description: "Blockchain-based supply chain tracking for herbs with producer transporter consumer flow.",
        longDescription: "A decentralized application (DApp) that ensures transparency and authenticity in the herbal supply chain. By recording every step of the journey on an immutable ledger, it combats counterfeiting and ensures quality.",
        features: [
            { title: "Supply Chain Flow", desc: "Designed blockchain-based tracking for herbs with producer-transporter-consumer flow." },
            { title: "Interfaces", desc: "Built web + Android interfaces showing product journey, quality checks, and logs." },
            { title: "Transparency", desc: "Improved transparency and authenticity using tamper-proof blockchain records." }
        ],
        challenges: "Orchestrating the Hyperledger Fabric network and integrating it with a traditional web stack was complex. I used Docker Compose to manage the containerized network.",
        details: "Features geotagged checkpoints, quality checks, and product journey visualization on web and Android.",
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
