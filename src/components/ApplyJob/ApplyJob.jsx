import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './ApplyJob.css'
import { JOBS_DATA } from '../../data/jobs';

export const ApplyJob = () => {

    const { id } = useParams();
    const [showTags, setShowTags] = useState(false);
    const [job, setJob] = useState(null);

    useEffect(() => {
        if (id) {
            const foundJob = JOBS_DATA.find(j => j.id === parseInt(id));
            setJob(foundJob);
            setJob(foundJob);
            window.scrollTo(0, 0);
        }
    }, [id]);

    if (!job) {
        return <div className="apply-job-page"><div className="container">Loading or Job not found...</div></div>;
    }

    const jobName = job.title;
    const jobLocation = job.locations.join(', ');
    const jobType = 'Full-time';
    const jobDescription = job.description;
    const rolesAndResponsibilities = job.responsibilities || [];
    const eligibilityCriteria = job.qualifications || [];



    const displayTags = job.tags || ['Engineering'];
    const mainTag = displayTags[0];
    const otherTags = displayTags.slice(1);

    const scrollToForm = () => {
        const formElement = document.getElementById('apply-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='apply-job-page'>
            <div className="container">
                <div className="apply-job-container">
                    <div className="apply-job-header">
                        <h1 className="job-title-large">{jobName}</h1>
                        <div className="job-meta-info">
                            <span className="job-location-text">{jobLocation}</span>
                            <div className="job-tags-container">
                                <span className="meta-tag">{mainTag}</span>
                                {!showTags && otherTags.length > 0 ? (
                                    <span
                                        className="meta-tag"
                                        onClick={() => setShowTags(true)}
                                        style={{ cursor: 'pointer', color: '#0064e0' }}
                                    >
                                        +{otherTags.length} more
                                    </span>
                                ) : (
                                    <>
                                        {otherTags.map((tag, idx) => (
                                            <span key={idx} className="meta-tag">{tag}</span>
                                        ))}
                                        {otherTags.length > 0 && (
                                            <span
                                                className="meta-tag"
                                                onClick={() => setShowTags(false)}
                                                style={{ cursor: 'pointer', color: '#0064e0' }}
                                            >
                                                Show less
                                            </span>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        <button className="apply-now-btn-large" onClick={scrollToForm}>Apply now</button>

                        <div className="job-desc-text">
                            <p>{jobDescription}</p>
                        </div>

                        <h3 className="section-title">Responsibilities</h3>
                        <ul className="job-list-bullets">
                            {rolesAndResponsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>

                        <h3 className="section-title">Minimum Qualifications</h3>
                        <ul className="job-list-bullets">
                            {eligibilityCriteria.map((criterion, index) => (
                                <li key={index}>{criterion}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="apply-job-form" id="apply-form">
                        <div className="apply-job-form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="apply-job-form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="apply-job-form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" placeholder="Enter your phone number" />
                        </div>
                        <div className="apply-job-form-group">
                            <label htmlFor="resume">Resume</label>
                            <input type="file" id="resume" />
                        </div>
                        <div className="apply-job-form-group">
                            <label htmlFor="cover-letter">Cover Letter</label>
                            <textarea id="cover-letter" placeholder="Enter your cover letter"></textarea>
                        </div>
                        <button className="apply-job-button">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
