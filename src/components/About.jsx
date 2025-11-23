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
                            I'm a <span className="highlight">Full Stack & Generative AI Developer</span> based in Bhilai, Chhattisgarh.
                            My journey started with a curiosity for how things work on the web, which quickly evolved into a passion for building
                            secure, scalable systems.
                        </p>
                        <p className="about-narrative">
                            I specialize in the <span className="highlight">MERN stack</span> and <span className="highlight">AI automation</span>.
                            Whether it's designing a real-time EV station locator or a blockchain-based supply chain system, I love solving complex
                            problems with clean, efficient code.
                        </p>
                        <p className="about-narrative">
                            When I'm not coding, I'm exploring the latest in Agentic AI, optimizing workflows with n8n, or leading tech communities
                            to help others learn and grow.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
