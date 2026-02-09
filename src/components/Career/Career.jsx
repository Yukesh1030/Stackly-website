import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import './Career.css';

function Career() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#career-top') {
            const element = document.getElementById('career-top');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (location.hash === '#job-list') {
            const element = document.getElementById('job-list');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const scrollToJobs = () => {
        const element = document.getElementById('job-list');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isJobPage = location.pathname.includes('/job/');

    return (
        <div>
            {!isJobPage && (
                <div className="container">
                    <section className="career-top" id="career-top">
                        <div className="left">
                            <h3>STUDENTS AND GRADS</h3>
                            <h1>We’re looking for the next generation of leaders</h1>
                            <h3 className='dis'>Stackly is a powerful platform that streamlines workflow, enhances efficiency, and drives digital success. It offers a user-friendly experience with seamless integration, making it an essential tool for businesses and individuals looking to optimize their online operations.</h3>
                            <button onClick={scrollToJobs}>View jobs</button>
                        </div>
                        <div className="right">
                            <img src="/careerImg.jpg" alt="Img" />
                        </div>
                    </section>
                </div>
            )}
            <div id="job-list">
                <Outlet />
            </div>
        </div>
    )
}

export default Career