import React from 'react'
import './Service.css'

export const Service = () => {

    const services = [
        {
            id: 1,
            title: 'Software Development',
            description: 'We build robust, scalable, and secure software solutions tailored to your business needs.',
            img: '/soft-img.png'
        },
        {
            id: 2,
            title: 'Cloud Solutions',
            description: 'Optimize your infrastructure with our cutting-edge cloud migration and management services.',
            img: '/cloud-img.png'
        },
        {
            id: 3,
            title: 'AI & Machine Learning',
            description: 'Leverage the power of AI to automate processes and gain valuable business insights.',
            img: '/ai-img.png'
        },
        {
            id: 4,
            title: 'Data Analytics',
            description: 'Transform raw data into actionable intelligence with our advanced analytics services.',
            img: '/data-an-img.png'
        },
        {
            id: 5,
            title: 'Cybersecurity',
            description: 'Protect your digital assets with our comprehensive security audits and solutions.',
            img: '/cyber-img.jpg'
        },
        {
            id: 6,
            title: 'IT Consulting',
            description: 'Expert guidance to help you navigate the complex technology landscape.',
            img: '/consult-img.png'
        }
    ];

    return (
        <div className="service-page">
            <div className="service-container">
                <div className="service-header">
                    <h1>OUR <span className="highlight">SERVICES</span></h1>
                    <p>Empowering your business with innovative technology solutions.</p>
                </div>

                <div className="services-grid">
                    {services.map(service => (
                        <div className="service-card" key={service.id}>
                            <div className="service-icon">
                                <img src={service.img} alt={service.title} />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
