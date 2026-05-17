import React from 'react';
import { motion } from 'framer-motion';
import './Philosophy.css';

const principles = [
    {
        title: 'Systems over surface',
        body: 'I care about how products behave, not just how they look. Good design is invisible because the system underneath it is sound.',
    },
    {
        title: 'Clarity over complexity',
        body: 'The best interfaces reduce cognitive load. Every element should earn its place by making something easier to understand or do.',
    },
    {
        title: 'Behavior-aware experiences',
        body: 'Technology should help people act, not just organize information. Products that understand user behavior create real value.',
    },
    {
        title: 'Ownership mindset',
        body: 'I enjoy thinking beyond implementation — strategy, structure, workflows, and product direction. Good engineers understand the why.',
    },
];

const Philosophy = () => (
    <section id="thinking" className="section philosophy-section">
        <div className="container">
            <div className="section-header">
                <span className="label">How I approach building</span>
            </div>
            <div className="principles-grid">
                {principles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="principle-card card"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="principle-title">{p.title}</h3>
                        <p className="principle-body body">{p.body}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Philosophy;
