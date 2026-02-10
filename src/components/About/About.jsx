import React, { useEffect } from 'react'
import './About.css'
export const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const sections = document.querySelectorAll('.about-section');
        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    return (
        <div>
            <div className="about-container">
                <div className="about-page-title">
                    <h1>The <span className='about-page-title-span'>Stackly</span></h1>
                </div>
                <div className="about-content">
                    <div className="about-img">
                        <img src="/about-title-img.jpg" alt="img" />
                    </div>
                    <div className="about-header">
                        <h1>About Us</h1>
                        <h2>Stackly is a powerful platform that streamlines workflow, enhances efficiency, and drives digital success. It offers a user-friendly experience with seamless integration, making it an essential tool for businesses and individuals looking to optimize their online operations.
                            Founded in 2015, Stackly has grown into one of the leading and most innovative IT companies in the industry. With a team of over 120 talented professionals, we specialize in delivering cutting-edge technology solutions that drive business success. Our commitment to innovation, excellence, and customer satisfaction has positioned us as a trusted partner for businesses seeking to leverage technology for growth and efficiency.
                        </h2>
                    </div>
                </div>
            </div>

            <div className="about-sections-wrapper">
                <div className="about-section">
                    <div className="about-text">
                        <span className="section-number">1.</span>
                        <h1>Our Mission</h1>
                        <p>Our mission is simple—create tools that solve real problems. With a strong focus on innovation, reliability, and user satisfaction, we aim to enhance your experience, whether you're an individual or part of a growing business.</p>
                    </div>
                    <div className="about-section-img">
                        <img src="/about-1.jpg" alt="Our Mission" />
                    </div>
                </div>

                <div className="about-section reverse">
                    <div className="about-text">
                        <span className="section-number">2.</span>
                        <h1>Our Vision</h1>
                        <p>We envision a future where technology serves as an enabler for creativity and productivity. Stackly strives to be a leader in providing smart, scalable, and user-friendly tools that cater to the diverse needs of our users.</p>
                    </div>
                    <div className="about-section-img">
                        <img src="/about-2.jpg" alt="Our Vision" />
                    </div>
                </div>

                <div className="about-section">
                    <div className="about-text">
                        <span className="section-number">3.</span>
                        <h1>Why Us?</h1>
                        <p>Our team brings a wealth of experience and knowledge to every project. We prioritize your needs and goals to deliver solutions that truly add value. We stick to deadlines and offer ongoing support to keep your digital presence thriving.</p>
                    </div>
                    <div className="about-section-img">
                        <img src="/soft-img.png" alt="Why Us" />
                    </div>
                </div>
            </div>
        </div>
    )
}
