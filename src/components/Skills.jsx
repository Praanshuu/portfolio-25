import React from 'react';
import './Skills.css';

const skillsData = [
    "JavaScript", "React.js", "Next.js", "Node.js", "Express.js",
    "PostgreSQL", "MongoDB", "OpenAI", "Agentic AI", "n8n Workflows",
    "Prompt Engineering", "System Design", "API Architecture",
    "Data Modeling", "Python", "Tailwind CSS", "Git/GitHub",
    "Postman", "Linux CLI", "Vercel", "Render"
];

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="marquee-container">
                <div className="marquee-content">
                    {skillsData.map((skill, index) => (
                        <span key={index} className="marquee-item">{skill} <span className="separator">•</span></span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {skillsData.map((skill, index) => (
                        <span key={`dup-${index}`} className="marquee-item">{skill} <span className="separator">•</span></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
