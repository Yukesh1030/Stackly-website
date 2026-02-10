import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaGoogle, FaYoutube } from 'react-icons/fa';
import { BiUpArrowAlt } from 'react-icons/bi';

export const Footer = () => {
    const [email, setEmail] = useState('');

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Subscribed with: ${email}`);
            setEmail('');
        }
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-left">
                        <div className="brand-logo">
                            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                                <img src="/HeroLogo.svg" alt="Stackly" className="footer-logo" />
                                <span>STACKLY</span>
                            </Link>
                        </div>

                        <h2 className="footer-cta">
                            Have a project in mind?<br />
                            <Link to="/contact" className="highlight-text" style={{ textDecoration: 'none' }}>Let’s get to work.</Link>
                        </h2>

                        <div className="contact-buttons">
                            <a href="mailto:info@thestackly.com" className="contact-btn">info@thestackly.com</a>
                            <a href="tel:+917010792745" className="contact-btn">+91 70107 92745</a>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-socials">
                            <a href="https://x.com/the_stackly?s=11&t=sqo7icv4xne_EryFEezXeQ" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FaTwitter /> X</a>
                            <a href="https://www.linkedin.com/company/the-stackly/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /> LinkedIn</a>
                            <a href="https://www.instagram.com/the_stackly?igsh=MXM4aWJicXllaHlkZA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /> Instagram</a>
                            <a href="https://www.facebook.com/share/158qV6By6a/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /> Facebook</a>
                            <a href="https://g.co/kgs/wf4P2qQ" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews"><FaGoogle /> Google</a>
                            <a href="https://youtu.be/TjXCSON6KBY?si=_uW-gqnZ5HVyTP-g" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /> YouTube</a>
                        </div>

                        <div className="footer-links-section">
                            <div className="useful-links">
                                <h3>USEFUL LINKS</h3>
                                <ul>
                                    <li><Link to="/career">Careers</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/service">Services</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>

                            <div className="subscription">
                                <form onSubmit={handleSubscribe} className="subscribe-form">
                                    <input
                                        type="email"
                                        placeholder="Type Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button type="submit" aria-label="Subscribe">→</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Copyright Stackly. All Rights Reserved. Devloped By Yukesh G</p>
                </div>
            </div>

            <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                <BiUpArrowAlt />
            </button>
        </footer>
    );
};
