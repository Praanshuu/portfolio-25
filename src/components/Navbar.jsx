import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isDetail = location.pathname !== '/';

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const links = isDetail
        ? [{ label: '← Back', href: '/' }]
        : [
            { label: 'Work', href: '#work' },
            { label: 'Thinking', href: '#thinking' },
            { label: 'Capabilities', href: '#capabilities' },
            { label: 'Contact', href: '#contact' },
          ];

    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">PS</Link>
                <nav className="navbar-links">
                    {links.map(link =>
                        link.href.startsWith('#') ? (
                            <a key={link.label} href={link.href} className="navbar-link">{link.label}</a>
                        ) : (
                            <Link key={link.label} to={link.href} className="navbar-link">{link.label}</Link>
                        )
                    )}
                    <a href="/Pranshu_Sahu_Resume.pdf" download="Pranshu_Sahu_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost navbar-cta">Resume</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
