import React from 'react';
import { motion } from 'framer-motion';
import './Certificates.css';

const certificatesData = [
    {
        title: "NextWave CCBP 4.0 Academy",
        issuer: "Full Stack, SQL, Python & CSE Fundamentals",
        description: "Intensive training in Full Stack Development and CS fundamentals.",
        status: "Ongoing"
    },
    {
        title: "McKinsey Forward Program",
        issuer: "Digital Problem Solving & Leadership",
        description: "Program focusing on Digital Problem Solving, Business Strategy, and Leadership skills.",
        status: "Ongoing"
    },
    {
        title: "Graphics Lead",
        issuer: "TEDxBITD (2025)",
        description: "Led a 6-member creative team for event branding and visual identity.",
        status: "Position"
    },
    {
        title: "Technical Head (2024) & General Manager (2025)",
        issuer: "TechnoHub Club, BITD",
        description: "Oversaw technical events, peer-learning, and team management.",
        status: "Leadership"
    },
    {
        title: "1st Runner-Up",
        issuer: "Hult Prize OnCampus 2023",
        description: "Recognized for sustainable startup concept.",
        status: "Awarded"
    },
    {
        title: "Stellar Blockchain Bootcamp",
        issuer: "Blockchain Development",
        description: "Built a decentralized lottery platform",
        status: "Completed"
    },
    {
        title: "Top 30 Innovators",
        issuer: "Hack The Space 2.0 (2024), SSTC Bhilai",
        description: "Selected as one of the top 30 innovators.",
        status: "Awarded"
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
