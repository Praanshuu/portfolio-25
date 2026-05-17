import React from 'react';
import './Education.css';

const educationData = [
    {
        degree: "B.Tech in Computer Science Engineering",
        institution: "Bhilai Institute of Technology, Durg",
        duration: "08/2022 – 06/2026",
        location: "Durg, Chhattisgarh",
    }
];

const Education = () => {
    return (
        <section id="education" className="section education-section">
            <div className="container">
                <div className="section-header"><span className="label">Education</span></div>
                <div className="education-list">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card glass-card">
                            <div className="education-info">
                                <h3 className="degree">{edu.degree}</h3>
                                <h4 className="institution">{edu.institution}</h4>
                            </div>
                            <div className="education-meta">
                                <p className="duration">{edu.duration}</p>
                                <p className="location">{edu.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
