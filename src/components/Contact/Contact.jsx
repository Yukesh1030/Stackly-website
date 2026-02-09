import React from 'react';
import './Contact.css';

export const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <div className="contact-header">
                    <h1>LET'S MAKE YOUR <span className="highlight">BRAND</span> BRILLIANT!</h1>
                    <p>If you would like to work with us or just want to get in touch, we'd love to hear from you!</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-block">
                            <h3>Headquarters</h3>
                            <p>MMR Complex, Chinna Thirupathi, near Chinna Muniyappan Kovil, Salem, Tamil Nadu 636008</p>
                        </div>

                        <div className="branches-grid">
                            <div className="info-block">
                                <h3>Bengaluru Branch Office</h3>
                                <p>Evolve Studio, 4th Floor, Khata No 10, Begur - Koppa Rd, in front of SNN Raj Serenity, Suraksha Nagar, Yelenahalli, Begur, Bengaluru, Karnataka - 560068</p>
                            </div>
                            <div className="info-block">
                                <h3>Hyderabad Branch Office</h3>
                                <p>STACKLY, 4th floor, Jayasudha heights, Plot no 459, 100 feet road, Ayyappa society, Madhapur, Beside YSR statue, Hyderabad, Telangana - 500081</p>
                            </div>
                            <div className="info-block">
                                <h3>Chennai Branch Office</h3>
                                <p>No.9, Ambika Complex, 1st Floor, Gokulam Colony, Karanaipudhuchery main road, Urapakkam, Chennai, Tamil Nadu, India - 603202</p>
                            </div>
                            <div className="info-block">
                                <h3>Coimbatore Branch Office</h3>
                                <p>Stackly, 79 Aiswarya Complex, Nethaji Road, PN Palayam, Coimbatore, Tamil Nadu, India - 641037</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h2>SEND A <span className="highlight-thin">MESSAGE</span></h2>
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="4"></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
