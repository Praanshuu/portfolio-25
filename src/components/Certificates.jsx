import React from 'react';
import { motion } from 'framer-motion';
import './Certificates.css';

const certificatesData = [
    {
        title: "NextWave CCBP 4.0 Academy",
        issuer: "Full Stack Development",
        description: "Intensive training in Full Stack Development, SQL, Python, and CSE Fundamentals. Built robust scalable web applications.",
        status: "Ongoing"
    },
    {
        title: "1st Runner-Up",
        issuer: "Hult Prize OnCampus 2023",
        description: "Recognized for presenting a sustainable and innovative startup concept addressing global challenges.",
        status: "Awarded"
    },
    {
        title: "McKinsey Forward Program",
        issuer: "McKinsey & Company",
        description: "Program focusing on Digital Problem Solving, Business Strategy, and Leadership skills.",
        status: "Ongoing"
    },
    {
        title: "Top 30 Innovators",
        issuer: "Hack The Space 2.0 (2024)",
        description: "Selected as one of the top 30 innovators at SSTC Bhilai's flagship hackathon.",
        status: "Awarded"
    },
    {
        title: "Graphics Lead",
        issuer: "TEDxBITD 2025",
        description: "Led a 6-member creative team for event branding, visual identity, and stage design.",
        status: "Position"
    },
    {
        title: "Stellar Blockchain Bootcamp",
        issuer: "Blockchain Development",
        description: "Built a decentralized lottery platform using Stellar smart contracts and frontend integration.",
        status: "Completed"
    },
    {
        title: "Technical Head & General Manager",
        issuer: "TechnoHub Club, BITD",
        description: "Oversaw technical events (2024) and general management (2025), fostering peer learning and team growth.",
        status: "Leadership"
    },
    {
        title: "Outskill Generative AI Workshop",
        issuer: "AI & Automation",
        description: "Hands-on experience with LLMs, AI tool integration, and workflow automation.",
        status: "Completed"
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="section certificates-section">
            <div className="container">
                <h2 className="section-title">CERTIFICATES & ACHIEVEMENTS</h2>
                <div className="certificates-grid">
                    {certificatesData.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="certificate-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="cert-title">{cert.title}</h3>
                            <span className="cert-issuer">{cert.issuer}</span>
                            <p className="cert-desc">{cert.description}</p>
                            {cert.status && <span className="cert-highlight">{cert.status}</span>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
