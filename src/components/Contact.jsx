import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">GET IN TOUCH</h2>
                <div className="contact-content">
                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <input type="text" placeholder="NAME" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="EMAIL" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="MESSAGE" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">SEND MESSAGE</button>
                        </form>
                    </div>

                    <div className="contact-info">
                        <p className="contact-text">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="social-links">
                            <a href="https://linkedin.com/in/pranshu-sahu" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                            <a href="https://github.com/Praanshuu" target="_blank" rel="noopener noreferrer">GITHUB</a>
                            <a href="mailto:workspace.pranshu@gmail.com">EMAIL</a>
                        </div>
                    </div>

                    <footer className="footer">
                        <p>DESIGNED & BUILT BY PRANSHU SAHU</p>
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Contact;
