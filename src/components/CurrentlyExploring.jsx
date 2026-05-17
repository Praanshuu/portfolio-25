import React from 'react';
import { motion } from 'framer-motion';
import './CurrentlyExploring.css';

const exploringTopics = [
    "Backend Systems",
    "Distributed Workflows",
    "AI-assisted tooling",
    "System Design",
    "Java & CS Fundamentals",
    "Infrastructure & DevOps"
];

const CurrentlyExploring = () => {
    return (
        <section id="exploring" className="section exploring-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title exploring-title">What I'm currently exploring</h2>
                    <div className="exploring-grid">
                        {exploringTopics.map((topic, idx) => (
                            <div key={idx} className="exploring-card">
                                <span className="exploring-dot"></span>
                                {topic}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CurrentlyExploring;
