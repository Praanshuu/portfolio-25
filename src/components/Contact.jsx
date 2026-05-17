import React from 'react';
import './Contact.css';

const Contact = () => (
    <section id="contact" className="section contact-section">
        <div className="container">
            <div className="contact-inner">
                <div className="contact-text">
                    <p className="label contact-eyebrow">Let's connect</p>
                    <h2 className="contact-title">Interested in thoughtful products, behavioral systems, or meaningful digital experiences?</h2>
                    <p className="body contact-body">
                        I'm currently exploring opportunities in backend engineering, product development, and systems-oriented roles.
                        Whether it's an internship, full-time opportunity, collaboration, or an interesting engineering problem — feel free to reach out.
                    </p>
                </div>
                <div className="contact-actions">
                    <a href="mailto:workspace.pranshu@gmail.com" className="btn btn-primary">Send an Email</a>
                    <div className="contact-links">
                        <a href="https://linkedin.com/in/pranshu-sahu" target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn ↗</a>
                        <a href="https://github.com/Praanshuu" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub ↗</a>
                        <a href="/Pranshu_Sahu_Resume.pdf" download="Pranshu_Sahu_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">Resume ↗</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
