import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const terminalLines = [
    { prefix: '~', text: 'stack', value: 'Next.js · Node.js · PostgreSQL · Drizzle' },
    { prefix: '~', text: 'focus areas', value: 'Backend Systems · AI Workflows · Product Engineering' },
    { prefix: '~', text: 'recent work', value: 'IIT Bhilai Research · LifeOS · Collex' },
    { prefix: '~', text: 'availability', value: 'Open to internships & collaboration' },
];

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-glow"></div>
            <div className="container hero-grid">

                {/* LEFT: Identity & Copy */}
                <motion.div
                    className="hero-left"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="hero-identity">
                        <span className="hero-name">Pranshu Sahu</span>
                        <span className="hero-subtitle-tag label">Full-Stack Engineer · Systems &amp; Product Builder</span>
                    </div>

                    <h1 className="hero-headline">
                        Building thoughtful<br />
                        digital systems that<br />
                        <em>combine engineering,<br />design, and systems thinking.</em>
                    </h1>

                    <p className="hero-body body">
                        I design and develop products that focus on usability, clarity, and meaningful user experience.
                        From backend infrastructure to automated workflows, I enjoy building systems that are thoughtful, scalable, and useful.
                    </p>

                    <div className="hero-ctas">
                        <a href="#work" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-ghost">Contact</a>
                        <a href="/Pranshu_Sahu_Resume.pdf" download="Pranshu_Sahu_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-text">Resume ↗</a>
                    </div>
                </motion.div>

                {/* RIGHT: Terminal Visual Block */}
                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="terminal-card card">
                        <div className="terminal-header">
                            <div className="terminal-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <span className="terminal-title label">system overview</span>
                        </div>
                        <div className="terminal-body">
                            {terminalLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    className="terminal-line"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                                >
                                    <span className="terminal-prefix">$</span>
                                    <span className="terminal-key" data-key={line.text}>{line.text}</span>
                                    <span className="terminal-sep">→</span>
                                    <span className="terminal-value">{line.value}</span>
                                </motion.div>
                            ))}
                            <div className="terminal-cursor">
                                <span className="terminal-prefix">$</span>
                                <span className="cursor-blink">_</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
