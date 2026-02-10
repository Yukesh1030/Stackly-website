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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        const phoneRegex = /^\d{10}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }

        if (!formData.resume) newErrors.resume = 'Resume is required';
        if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: files ? files[0] : value
        }));
        // Clear error when user starts typing
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: null }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Application Submitted Successfully!');
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                resume: null,
                coverLetter: ''
            });
            // Reset file input manually
            document.getElementById('resume').value = '';
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
                    <form className="apply-job-form" id="apply-form" onSubmit={handleSubmit}>
                        <div className="apply-job-form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'error-input' : ''}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>
                        <div className="apply-job-form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error-input' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="apply-job-form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className={errors.phone ? 'error-input' : ''}
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>
                        <div className="apply-job-form-group">
                            <label htmlFor="resume">Resume</label>
                            <input
                                type="file"
                                id="resume"
                                onChange={handleChange}
                                className={errors.resume ? 'error-input' : ''}
                            />
                            {errors.resume && <span className="error-message">{errors.resume}</span>}
                        </div>
                        <div className="apply-job-form-group">
                            <label htmlFor="coverLetter">Cover Letter</label>
                            <textarea
                                id="coverLetter"
                                placeholder="Enter your cover letter"
                                value={formData.coverLetter}
                                onChange={handleChange}
                                className={errors.coverLetter ? 'error-input' : ''}
                            ></textarea>
                            {errors.coverLetter && <span className="error-message">{errors.coverLetter}</span>}
                        </div>
                        <button type="submit" className="apply-job-button">Apply Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
