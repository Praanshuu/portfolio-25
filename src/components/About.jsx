import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About</h2>
                    <div className="about-text-blocks">
                        <p className="about-narrative">
                            I enjoy building products where engineering, usability, and systems thinking intersect.
                        </p>
                        <p className="about-narrative">
                            Recently, I worked on telecom analytics and packet analysis systems at IIT Bhilai in collaboration with RADCOM, Israel.
                        </p>
                        <p className="about-narrative">
                            My work involved backend APIs, analytics dashboards, scalable evaluation workflows, and protocol-level monitoring systems.
                        </p>
                        <p className="about-narrative">
                            Long term, I want to build products and systems that improve how people think, execute, and collaborate.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
