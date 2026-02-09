import React, { useState } from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
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
                            <img src="/HeroLogo.svg" alt="Stackly" className="footer-logo" />
                            <span>STACKLY</span>
                        </div>

                        <h2 className="footer-cta">
                            Have a project in mind?<br />
                            <span className="highlight-text">Let’s get to work.</span>
                        </h2>

                        <div className="contact-buttons">
                            <a href="mailto:info@thestackly.com" className="contact-btn">info@thestackly.com</a>
                            <a href="tel:+917010792745" className="contact-btn">+91 70107 92745</a>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-socials">
                            <a href="#" aria-label="Facebook"><FaFacebookF /> Facebook</a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /> LinkedIn</a>
                            <a href="#" aria-label="Instagram"><FaInstagram /> Instagram</a>
                            <a href="#" aria-label="Twitter"><FaTwitter /> Twitter</a>
                        </div>

                        <div className="footer-links-section">
                            <div className="useful-links">
                                <h3>USEFUL LINKS</h3>
                                <ul>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Contact</a></li>
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
                    <p>© 2025 Copyright Stackly. All Rights Reserved. Devloped By Yukesh G</p>
                </div>
            </div>

            <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                <BiUpArrowAlt />
            </button>
        </footer>
    );
};
