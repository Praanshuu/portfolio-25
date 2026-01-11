import React from 'react';
import './Experience.css';

const experienceData = [
    {
        role: "Software & AI Systems Intern",
        company: "Indian Institute of Technology (IIT) Bhilai",
        duration: "01/2026 – Present",
        location: "Bhilai",
        description: [
            "Working on industrial digital-transformation systems for pre-failure alerting using data and video analytics",
            "Working on an LMS with automated code evaluation and performance analytics",
            "Developing full-stack dashboards for monitoring, learning, and reporting",
            "Integrating analytics, AI feedback, and workflow automation into web systems"
        ]
    },
    {
        role: "Web Development Intern",
        company: "Technonet Pvt. Ltd.",
        duration: "05/2025 – 06/2025",
        location: "Bhilai, Chhattisgarh",
        description: [
            "Built a production-ready Certificate Verification System using React and Node.js",
            "Implemented RBAC authentication, secure sessions, and protected routes",
            "Created admin dashboards for certificate status, logs, and event metrics",
            "Developed REST APIs for events, participants, verification, and admin actions"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="role">{exp.role}</h3>
                                <h4 className="company">{exp.company}</h4>
                                <p className="duration">{exp.duration} | {exp.location}</p>
                                <ul className="description-list">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
