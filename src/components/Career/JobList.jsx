import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobList.css';
import { JOBS_DATA } from '../../data/jobs';

const JobCard = ({ job }) => {
    const navigate = useNavigate();

    const handleJobClick = () => {
        navigate(`/career/job/${job.id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="job-card">
            <div className="job-info">
                <h3 className="job-title" onClick={handleJobClick}>{job.title}</h3>
                <div className="job-meta">
                    <span className="job-location">{job.locations.join(' • ')}</span>
                    <span className="job-separator">·</span>
                    <span className="job-category">{job.category}</span>
                </div>
                <div className="job-tags">
                    {job.tags.map((tag, index) => (
                        <span key={index} className="job-tag">{tag}</span>
                    ))}
                </div>
                <div className="job-teams">
                </div>
            </div>
            <div className="job-actions">
                <button className="save-btn" aria-label="Save job">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

const FilterSection = ({ title, options, type = 'checkbox' }) => (
    <div className="filter-section">
        <h4 className="filter-title">{title}</h4>
        <div className="filter-options">
            {options.map((opt, i) => (
                <label key={i} className="filter-option">
                    <input type={type} name={title} />
                    <span className="checkmark"></span>
                    <span className="label-text">{opt}</span>
                </label>
            ))}
        </div>
        <button className="show-more">Show more</button>
    </div>
);

const JobList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="job-list-container" id="job-list">
            <div className="job-header">
                <h3>Search <span style={{ color: '#0064e0', fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}>The Stackly Careers</span></h3>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by technology, team, location, or ref code"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="search-icon-btn">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="job-content">
                <aside className="filters-sidebar">
                    <div className="filter-header">
                        <button className="hide-filters">
                            <span className="icon">≡</span> Hide filters
                        </button>
                        <button className="clear-filters">Clear filters</button>
                    </div>

                    <div className="active-filters">
                        <button className="save-search-btn">+ Save this search</button>
                    </div>

                    <div className="filters-list">
                        <FilterSection
                            title="Sort by"
                            options={['Relevance', 'Newest']}
                            type="radio"
                        />
                        <FilterSection
                            title="Technologies"
                            options={['Facebook', 'Messenger', 'Instagram', 'Whatsapp', 'Meta Quest']}
                        />
                        <FilterSection
                            title="Teams"
                            options={['Advertising Technology', 'Artificial Intelligence', 'Business Development & Partnerships', 'Communications & Public Policy']}
                        />
                        <FilterSection
                            title="Employment type"
                            options={['Full time employment', 'Internship', 'Short term employment']}
                        />
                        <div className="filter-section">
                            <h4 className="filter-title">Location</h4>
                            <input type="text" className="location-input" placeholder="Search location" />
                        </div>
                    </div>
                </aside>

                <main className="jobs-display">
                    <div className="results-count">{JOBS_DATA.length} Items</div>
                    <div className="jobs-grid">
                        {JOBS_DATA.map(job => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                    <div className="pagination">
                        <span>&lt; Page 1 of 5 &gt;</span>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default JobList;
