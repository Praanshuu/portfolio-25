import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">ABOUT ME</h2>
                        <p className="about-narrative">
                            Full-stack developer skilled in building secure, scalable AI-powered systems with <span className="highlight">JavaScript, React, Node.js, Express</span>, and automation workflows.
                        </p>
                        <p className="about-narrative">
                            Strong in <span className="highlight">backend engineering, RBAC auth, API design, and dashboards</span>.
                        </p>
                        <p className="about-narrative">
                            I build clean, reliable tools that reduce manual work and improve decision-making.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
