import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <div className="section-header"><span className="label">Experience</span></div>
                
                <div className="experience-card glass-card">
                    <div className="exp-header">
                        <div>
                            <h3 className="role">Full-Stack & DevOps Research Intern</h3>
                            <h4 className="company">Indian Institute of Technology (IIT) Bhilai</h4>
                        </div>
                        <p className="duration">Jan 2026 – Apr 2026 &nbsp;·&nbsp; Bhilai, Chhattisgarh</p>
                    </div>
                    
                    <div className="exp-context">
                        <p>Worked on telecom analytics and packet analysis systems associated with RADCOM, Israel.</p>
                    </div>

                    <div className="impact-metrics">
                        <div className="metric">
                            <span className="metric-value">7+</span>
                            <span className="metric-label">Protocol Models</span>
                        </div>
                        <div className="metric">
                            <span className="metric-value">15+</span>
                            <span className="metric-label">Analytics Vis</span>
                        </div>
                        <div className="metric">
                            <span className="metric-value">330+</span>
                            <span className="metric-label">Concurrent Users</span>
                        </div>
                        <div className="metric">
                            <span className="metric-value">8k+</span>
                            <span className="metric-label">Evaluations</span>
                        </div>
                    </div>

                    <div className="exp-details">
                        <p>Contributed to telecom analytics systems involving protocol monitoring, packet-level analysis, backend APIs, and performance dashboards.</p>
                        <p>Built visual analytics tools, integrated LLM-assisted querying workflows, and worked on scalable evaluation infrastructure for large-scale educational systems.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
