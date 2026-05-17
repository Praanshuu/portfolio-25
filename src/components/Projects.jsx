import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
    {
        id: 'lifeos',
        category: 'Behavioral UX · AI Systems',
        title: 'LifeOS — Behavioral Productivity & Execution OS',
        summary: 'A behavioral productivity operating system designed to bridge the gap between planning and real-world execution. Combines strategic planning, session tracking, Context-aware reflection, and behavioral analytics into a unified workflow.',
        stack: 'Next.js · Drizzle ORM · Neon Postgres · Clerk · Groq AI',
        focus: 'Systems Design · Behavioral Architecture · AI Workflows · Full-Stack',
        link: 'https://lifeos-two-bay.vercel.app/',
        featured: true,
    },
    {
        id: 'ai-assembly',
        category: 'AI Systems · Semantic Search',
        title: 'AI Website Assembly — Semantic Component Builder',
        summary: 'An AI-assisted website generation system that automates webpage creation using semantic similarity and modular UI assembly. Accepts user inputs, retrieves semantically relevant components via pgvector, and assembles responsive layouts automatically.',
        stack: 'React · Node.js · PostgreSQL · pgvector · Sentence Transformers',
        focus: 'Semantic Search · Vector Databases · Semantic orchestration · Component Systems',
        link: 'https://github.com/Praanshuu/AGENTIC-ENGINE',
        featured: true,
    },
    {
        id: 'verify-aura',
        category: 'Verification Platform · RBAC',
        title: 'Verify Aura — Certificate Verification & Event Management',
        summary: 'A scalable certificate issuance and verification platform with role-based access control, admin dashboards, analytics, and instant public validation via unique certificate IDs. Managing 250+ participants across multiple events.',
        stack: 'React · Node.js · PostgreSQL · Express · Tailwind CSS',
        focus: 'RBAC · REST APIs · Backend Architecture · Admin Infrastructure',
        link: 'https://verify-aura-frontend.vercel.app/',
        featured: false,
    },
    {
        id: 'collex',
        category: 'Product Engineering · Campus Platform',
        title: 'Collex — Campus Marketplace & Roommate Discovery',
        summary: 'A campus-focused platform for verified student interactions, enabling marketplace listings, roommate discovery, real-time communication, and OCR-based identity verification.',
        stack: 'Next.js · PostgreSQL (Neon) · Clerk Auth · Tailwind CSS · Shadcn UI',
        focus: 'Authentication · Realtime Systems · Database Design · Product Workflows',
        link: 'https://collex-ubej.vercel.app/',
        featured: false,
    },
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        className={`project-card card ${project.featured ? 'project-featured' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        viewport={{ once: true }}
    >
        <div className="project-card-inner">
            <div className="project-top">
                <span className="label project-category">{project.category}</span>
                {project.featured && <span className="project-badge label">Featured</span>}
            </div>

            <div className="project-middle">
                <h3 className="project-title heading-md">{project.title}</h3>
                <p className="project-summary body">{project.summary}</p>
            </div>

            <div className="project-bottom">
                <div className="project-meta">
                    <span className="label">Stack</span>
                    <p className="project-stack">{project.stack}</p>
                </div>
                <div className="project-meta">
                    <span className="label">Focus Areas</span>
                    <p className="project-stack">{project.focus}</p>
                </div>
                <div className="project-actions">
                    <Link to={`/project/${project.id}`} className="btn btn-ghost project-detail-btn">Case Study →</Link>
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-text">Live ↗</a>
                </div>
            </div>
        </div>
    </motion.div>
);

const Projects = () => (
    <section id="work" className="section projects-section">
        <div className="container">
            <div className="section-header">
                <span className="label">Selected Work</span>
            </div>
            <div className="projects-grid">
                {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
            </div>
        </div>
    </section>
);

export default Projects;
