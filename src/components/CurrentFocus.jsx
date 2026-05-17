import React from 'react';
import { motion } from 'framer-motion';
import './CurrentFocus.css';

const focusItems = [
    { label: 'Recent Work', value: 'Full Stack & Devops Research Intern, IIT Bhilai' },
    { label: 'Building', value: 'LifeOS · Collex' },
    { label: 'Exploring', value: 'System Design · Java · Distributed Systems' },
    { label: 'Available', value: 'Internships & Collaboration' },
];

const CurrentFocus = () => (
    <motion.div
        className="focus-strip"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
    >
        <div className="container">
            <div className="focus-inner">
                {focusItems.map((item, i) => (
                    <div key={i} className="focus-item">
                        <span className="focus-label label">{item.label}</span>
                        <span className="focus-value">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);

export default CurrentFocus;
