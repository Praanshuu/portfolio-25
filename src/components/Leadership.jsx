import React from 'react';
import './Leadership.css';

const leadershipData = [
    {
        role: "General Manager & Technical Head",
        organization: "TechnoHub Club",
        description: "Led technical events, workshops, and peer-learning initiatives while managing technical operations and execution."
    },
    {
        role: "Graphics Lead",
        organization: "TEDxBITD",
        description: "Led a 6-member creative team and delivered large-scale event branding assets across digital and physical platforms."
    }
];

const Leadership = () => {
    return (
        <section id="leadership" className="section leadership-section">
            <div className="container">
                <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>Leadership & Community</h2>
                <div className="leadership-grid">
                    {leadershipData.map((item, index) => (
                        <div key={index} className="leadership-card">
                            <h3 className="role">{item.role}</h3>
                            <h4 className="org">{item.organization}</h4>
                            <p className="desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
