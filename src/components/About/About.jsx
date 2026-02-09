import React from 'react'
import './About.css'
export const About = () => {
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
    </div>
  )
}
