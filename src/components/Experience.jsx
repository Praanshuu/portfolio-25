import React from 'react';
import './Experience.css';

const experienceData = [
    {
        role: "Web Development Intern",
        company: "Technonet Pvt. Ltd.",
        duration: "05/2025 – 06/2025",
        location: "Bhilai, Chhattisgarh",
        description: [
            "Built a production-ready Certificate Verification System using React + Node.js.",
            "Implemented RBAC authentication, session handling, and secure route protection.",
            "Created dashboards for certificate status, logs, and event metrics.",
            "Developed REST APIs for events, participants, verification, and admin actions.",
            "Added global search, filters, pagination, and CRUD to streamline admin workflows."
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
