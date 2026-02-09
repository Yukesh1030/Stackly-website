import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobList.css';
import { JOBS_DATA } from '../../data/jobs';

const JobCard = ({ job, isSaved, onToggleSave }) => {
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
                <button
                    className={`save-btn ${isSaved ? 'saved' : ''}`}
                    aria-label={isSaved ? "Unsave job" : "Save job"}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(job.id);
                    }}
                >
                    <svg viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

const FilterSection = ({ title, options, selected = [], onChange, type = 'checkbox' }) => (
    <div className="filter-section">
        <h4 className="filter-title">{title}</h4>
        <div className="filter-options">
            {options.map((opt, i) => (
                <label key={i} className="filter-option">
                    <input
                        type={type}
                        name={title}
                        value={opt}
                        checked={type === 'radio' ? selected === opt : (Array.isArray(selected) && selected.includes(opt))}
                        onChange={(e) => onChange(title, opt, e.target.checked)}
                    />
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
    const [filters, setFilters] = useState({
        sort: 'Relevance',
        technologies: [],
        teams: [],
        type: [],
        location: ''
    });
    const [savedJobs, setSavedJobs] = useState([]);

    const toggleSaveJob = (jobId) => {
        setSavedJobs(prev =>
            prev.includes(jobId)
                ? prev.filter(id => id !== jobId)
                : [...prev, jobId]
        );
    };

    const handleFilterChange = (category, value, isChecked) => {
        setFilters(prev => {
            if (category === 'Sort by') {
                return { ...prev, sort: value };
            }
            if (category === 'technologies' || category === 'Technologies') {
                const current = prev.technologies;
                return {
                    ...prev,
                    technologies: isChecked ? [...current, value] : current.filter(item => item !== value)
                };
            }
            if (category === 'teams' || category === 'Teams') {
                const current = prev.teams;
                return {
                    ...prev,
                    teams: isChecked ? [...current, value] : current.filter(item => item !== value)
                };
            }
            if (category === 'Employment type') {
                const current = prev.type;
                return {
                    ...prev,
                    type: isChecked ? [...current, value] : current.filter(item => item !== value)
                };
            }
            return prev;
        });
    };

    const handleLocationChange = (e) => {
        setFilters(prev => ({ ...prev, location: e.target.value }));
    };

    const clearFilters = () => {
        setFilters({
            sort: 'Relevance',
            technologies: [],
            teams: [],
            type: [],
            location: ''
        });
        setSearchTerm('');
    };

    // Filter Logic
    const filteredJobs = JOBS_DATA.filter(job => {
        // Search Term
        const searchUpper = searchTerm.toUpperCase();
        const matchesSearch =
            !searchTerm ||
            job.title.toUpperCase().includes(searchUpper) ||
            job.description.toUpperCase().includes(searchUpper) ||
            job.tags.some(tag => tag.toUpperCase().includes(searchUpper)) ||
            job.category.toUpperCase().includes(searchUpper);

        // Technologies Filter (match any selected)
        const matchesTech =
            filters.technologies.length === 0 ||
            filters.technologies.some(tech => job.tags.map(t => t.toLowerCase()).includes(tech.toLowerCase()));

        // Teams Filter (match any selected)
        const matchesTeams =
            filters.teams.length === 0 ||
            filters.teams.some(team => job.teams.includes(team));

        // Employment Type Filter
        const matchesType =
            filters.type.length === 0 ||
            ((job.type && filters.type.includes(job.type)));

        // Location Filter
        const matchesLocation =
            !filters.location ||
            job.locations.some(loc => loc.toLowerCase().includes(filters.location.toLowerCase()));

        return matchesSearch && matchesTech && matchesTeams && matchesType && matchesLocation;
    });

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
                        <button className="clear-filters" onClick={clearFilters}>Clear filters</button>
                    </div>

                    <div className="active-filters">
                        <button className="save-search-btn">+ Save this search</button>
                    </div>

                    <div className="filters-list">
                        <FilterSection
                            title="Sort by"
                            options={['Relevance', 'Newest']}
                            type="radio"
                            selected={filters.sort}
                            onChange={handleFilterChange}
                        />
                        <FilterSection
                            title="Technologies"
                            options={['React', 'Node', 'Python', 'Java', 'C++']}
                            selected={filters.technologies}
                            onChange={handleFilterChange}
                        />
                        <FilterSection
                            title="Teams"
                            options={['Software Engineering', 'Data Science', 'Cloud Engineering', 'UI/UX Design', 'AI Research']}
                            selected={filters.teams}
                            onChange={handleFilterChange}
                        />
                        <FilterSection
                            title="Employment type"
                            options={['Full time employment', 'Internship', 'Short term employment']}
                            selected={filters.type}
                            onChange={handleFilterChange}
                        />
                        <div className="filter-section">
                            <h4 className="filter-title">Location</h4>
                            <input
                                type="text"
                                className="location-input"
                                placeholder="Search location"
                                value={filters.location}
                                onChange={handleLocationChange}
                            />
                        </div>
                    </div>
                </aside>

                <main className="jobs-display">
                    <div className="results-count">{filteredJobs.length} Items</div>
                    <div className="jobs-grid">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map(job => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    isSaved={savedJobs.includes(job.id)}
                                    onToggleSave={toggleSaveJob}
                                />
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No jobs found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                    {filteredJobs.length > 0 && (
                        <div className="pagination">
                            <span>&lt; Page 1 of 5 &gt;</span>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default JobList;
