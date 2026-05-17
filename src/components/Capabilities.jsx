import React from 'react';
import { motion } from 'framer-motion';
import './Capabilities.css';

const categories = [
    {
        label: 'Frontend Engineering',
        items: [
            'React',
            'Next.js',
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
        ],
    },
    {
        label: 'Backend & APIs',
        items: [
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'REST APIs',
            'Drizzle ORM',
        ],
    },
    {
        label: 'Systems & Product Thinking',
        items: [
            'System Design',
            'Backend Architecture',
            'Behavioral Systems',
            'Information Architecture',
            'Scalable Workflows',
        ],
    },
    {
        label: 'Data & Intelligent Systems',
        items: [
            'Python',
            'Pandas',
            'NumPy',
            'LLM Integration',
            'Semantic Search',
        ],
    },
    {
        label: 'Infrastructure & Tooling',
        items: [
            'Docker',
            'Linux',
            'Git',
            'Vercel',
            'Supabase / Neon',
        ],
    },
    {
        label: 'Design & Collaboration',
        items: [
            'Figma',
            'Postman',
            'Product Thinking',
            'Technical Communication',
            'Cross-functional Collaboration',
        ],
    },
];

const Capabilities = () => (
    <section id="capabilities" className="section capabilities-section">
        <div className="container">
            <div className="section-header">
                <span className="label">Capabilities</span>
            </div>
            <div className="capabilities-grid">
                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        className="capability-card card"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <span className="label capability-label">{cat.label}</span>
                        <ul className="capability-list">
                            {cat.items.map((item, j) => (
                                <li key={j} className="capability-item">{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Capabilities;
