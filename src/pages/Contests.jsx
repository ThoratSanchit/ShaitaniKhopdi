import React, { useState, useRef } from 'react';
import ContestCard from '../components/ContestCard';
import contests from '../data/contests';
import './Contests.css';

const Contests = () => {
  // Categories for filtering
  const contestTypes = [
    { id: 'all', name: 'All Types', count: contests.length },
    { id: 'Hackathon', name: 'Hackathon', count: contests.filter(contest => contest.type === 'Hackathon').length },
    { id: 'Design Competition', name: 'Design Competition', count: contests.filter(contest => contest.type === 'Design Competition').length },
    { id: 'Coding Contest', name: 'Coding Contest', count: contests.filter(contest => contest.type === 'Coding Contest').length }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: contests.length },
    { id: 'Online', name: 'Online', count: contests.filter(contest => contest.location === 'Online').length },
    { id: 'Physical', name: 'Physical', count: contests.filter(contest => contest.location !== 'Online').length }
  ];

  const prizeRanges = [
    { id: 'all', name: 'All Prizes', count: contests.length },
    { id: 'low', name: 'Under $5K', count: contests.filter(contest => {
      const prize = contest.prize.toLowerCase();
      const amount = prize.match(/\$?(\d+(?:,\d+)?)/);
      return amount && parseInt(amount[1].replace(',', '')) < 5000;
    }).length },
    { id: 'medium', name: '$5K - $25K', count: contests.filter(contest => {
      const prize = contest.prize.toLowerCase();
      const amount = prize.match(/\$?(\d+(?:,\d+)?)/);
      return amount && parseInt(amount[1].replace(',', '')) >= 5000 && parseInt(amount[1].replace(',', '')) <= 25000;
    }).length },
    { id: 'high', name: 'Over $25K', count: contests.filter(contest => {
      const prize = contest.prize.toLowerCase();
      const amount = prize.match(/\$?(\d+(?:,\d+)?)/);
      return amount && parseInt(amount[1].replace(',', '')) > 25000;
    }).length }
  ];

  // State management
  const [activeTab, setActiveTab] = useState('upcoming');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedPrizeRange, setSelectedPrizeRange] = useState('all');
  
  // Separate filter dropdown states
  const [showTypeFilter, setShowTypeFilter] = useState(false);
  const [showLocationFilter, setShowLocationFilter] = useState(false);
  const [showPrizeFilter, setShowPrizeFilter] = useState(false);

  // Refs for click outside handling
  const typeFilterRef = useRef(null);
  const locationFilterRef = useRef(null);
  const prizeFilterRef = useRef(null);

  // Categorize contests
  const now = new Date();
  const liveContests = contests.filter(contest => new Date(contest.date) > now);
  const pastContests = contests.filter(contest => new Date(contest.date) <= now);

  // Filtered contests
  const getFilteredContests = (contestList) => {
    return contestList.filter(contest => {
      const matchesType = selectedType === 'all' || contest.type === selectedType;
      const matchesLocation = selectedLocation === 'all' || 
        (selectedLocation === 'Online' ? contest.location === 'Online' : contest.location !== 'Online');
      const matchesSearch = searchQuery.trim() === '' ||
        contest.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        contest.location.toLowerCase().includes(searchQuery.trim().toLowerCase());
      
      let matchesPrize = selectedPrizeRange === 'all';
      if (selectedPrizeRange !== 'all') {
        const prize = contest.prize.toLowerCase();
        const amount = prize.match(/\$?(\d+(?:,\d+)?)/);
        if (amount) {
          const prizeAmount = parseInt(amount[1].replace(',', ''));
          if (selectedPrizeRange === 'low') matchesPrize = prizeAmount < 5000;
          else if (selectedPrizeRange === 'medium') matchesPrize = prizeAmount >= 5000 && prizeAmount <= 25000;
          else if (selectedPrizeRange === 'high') matchesPrize = prizeAmount > 25000;
        }
      }

      return matchesType && matchesLocation && matchesSearch && matchesPrize;
    });
  };

  const filteredLiveContests = getFilteredContests(liveContests);
  const filteredPastContests = getFilteredContests(pastContests);

  // Sort contests by date
  const sortedLiveContests = [...filteredLiveContests].sort((a, b) => new Date(a.date) - new Date(b.date));
  const sortedPastContests = [...filteredPastContests].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Pagination
  const contestsPerPage = 10;
  const totalPages = Math.ceil(sortedPastContests.length / contestsPerPage);
  const indexOfLastContest = currentPage * contestsPerPage;
  const indexOfFirstContest = indexOfLastContest - contestsPerPage;
  const currentContests = sortedPastContests.slice(indexOfFirstContest, indexOfLastContest);

  // Helper functions
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  // Calculate total active filters
  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedType !== 'all') count += 1;
    if (selectedLocation !== 'all') count += 1;
    if (selectedPrizeRange !== 'all') count += 1;
    if (searchQuery.trim() !== '') count += 1;
    return count;
  };

  const clearAllFilters = () => {
    setSelectedType('all');
    setSelectedLocation('all');
    setSelectedPrizeRange('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Get current filter names
  const getCurrentTypeName = () => {
    const type = contestTypes.find(t => t.id === selectedType);
    return type ? type.name : 'All Types';
  };

  const getCurrentLocationName = () => {
    const location = locations.find(l => l.id === selectedLocation);
    return location ? location.name : 'All Locations';
  };

  const getCurrentPrizeRangeName = () => {
    const prizeRange = prizeRanges.find(p => p.id === selectedPrizeRange);
    return prizeRange ? prizeRange.name : 'All Prizes';
  };

  // Click outside handlers
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (typeFilterRef.current && !typeFilterRef.current.contains(event.target)) {
        setShowTypeFilter(false);
      }
      if (locationFilterRef.current && !locationFilterRef.current.contains(event.target)) {
        setShowLocationFilter(false);
      }
      if (prizeFilterRef.current && !prizeFilterRef.current.contains(event.target)) {
        setShowPrizeFilter(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="contests-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover <span className="gradient-text">Contests</span>
          </h1>
          <p className="hero-subtitle">
            Join coding contests and challenge yourself with new problems. Find the perfect competition to showcase your skills.
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="search-filter-bar">
        <div className="search-container">
          <div className="search-input-wrapper">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search contests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filter-buttons">
          {/* Type Filter Button */}
          <div className="filter-button-container" ref={typeFilterRef}>
            <button 
              className={`filter-button ${selectedType !== 'all' ? 'active' : ''}`}
              onClick={() => setShowTypeFilter(!showTypeFilter)}
            >
              <svg className="filter-button-icon" viewBox="0 0 24 24" fill="none">
                <path d="M3 3H21V5H3V3ZM3 7H21V9H3V7ZM3 11H21V13H3V11ZM3 15H21V17H3V15ZM3 19H21V21H3V19Z" fill="currentColor"/>
              </svg>
              {getCurrentTypeName()}
              {selectedType !== 'all' && (
                <span className="filter-button-badge">1</span>
              )}
            </button>

            {showTypeFilter && (
              <div className="filter-dropdown">
                <div className="filter-dropdown-content">
                  {contestTypes.map(type => (
                    <button
                      key={type.id}
                      className={`filter-option ${selectedType === type.id ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedType(type.id);
                        setCurrentPage(1);
                        setShowTypeFilter(false);
                      }}
                    >
                      <span className="filter-option-name">{type.name}</span>
                      <span className="filter-option-count">{type.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Location Filter Button */}
          <div className="filter-button-container" ref={locationFilterRef}>
            <button 
              className={`filter-button ${selectedLocation !== 'all' ? 'active' : ''}`}
              onClick={() => setShowLocationFilter(!showLocationFilter)}
            >
              <svg className="filter-button-icon" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {getCurrentLocationName()}
              {selectedLocation !== 'all' && (
                <span className="filter-button-badge">1</span>
              )}
            </button>

            {showLocationFilter && (
              <div className="filter-dropdown">
                <div className="filter-dropdown-content">
                  {locations.map(location => (
                    <button
                      key={location.id}
                      className={`filter-option ${selectedLocation === location.id ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedLocation(location.id);
                        setCurrentPage(1);
                        setShowLocationFilter(false);
                      }}
                    >
                      <span className="filter-option-name">{location.name}</span>
                      <span className="filter-option-count">{location.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Prize Range Filter Button */}
          <div className="filter-button-container" ref={prizeFilterRef}>
            <button 
              className={`filter-button ${selectedPrizeRange !== 'all' ? 'active' : ''}`}
              onClick={() => setShowPrizeFilter(!showPrizeFilter)}
            >
              <svg className="filter-button-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {getCurrentPrizeRangeName()}
              {selectedPrizeRange !== 'all' && (
                <span className="filter-button-badge">1</span>
              )}
            </button>

            {showPrizeFilter && (
              <div className="filter-dropdown">
                <div className="filter-dropdown-content">
                  {prizeRanges.map(prizeRange => (
                    <button
                      key={prizeRange.id}
                      className={`filter-option ${selectedPrizeRange === prizeRange.id ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedPrizeRange(prizeRange.id);
                        setCurrentPage(1);
                        setShowPrizeFilter(false);
                      }}
                    >
                      <span className="filter-option-name">{prizeRange.name}</span>
                      <span className="filter-option-count">{prizeRange.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Clear All Filters Button */}
          {getActiveFiltersCount() > 0 && (
            <button className="clear-all-filters-btn" onClick={clearAllFilters}>
              <svg className="clear-icon" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Results Summary */}
      <div className="results-summary">
        <p className="results-text">
          {activeTab === 'upcoming' ? (
            `Showing ${sortedLiveContests.length} upcoming contests`
          ) : (
            `Showing ${currentContests.length} of ${sortedPastContests.length} past contests`
          )}
          {getActiveFiltersCount() > 0 && (
            <span className="filtered-indicator"> (filtered)</span>
          )}
        </p>
      </div>
      
      <div className="contest-tabs">
        <button 
          className={`contest-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Contests
          <span className="badge">{sortedLiveContests.length}</span>
        </button>
        <button 
          className={`contest-tab ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past Contests
          <span className="badge">{sortedPastContests.length}</span>
        </button>
      </div>
      
      <div className="contest-content">
        {activeTab === 'upcoming' ? (
          <>
            {sortedLiveContests.length > 0 ? (
              <div className="tools-grid">
                {sortedLiveContests.map(contest => (
                  <ContestCard key={contest.id} contest={contest} status="upcoming" />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <h3 className="empty-title">No upcoming contests found</h3>
                <p className="empty-description">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button className="reset-filters-btn" onClick={clearAllFilters}>
                  Clear Filters
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {currentContests.length > 0 ? (
              <div className="tools-grid">
                {currentContests.map(contest => (
                  <ContestCard key={contest.id} contest={contest} status="past" />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <h3 className="empty-title">No past contests found</h3>
                <p className="empty-description">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button className="reset-filters-btn" onClick={clearAllFilters}>
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
      
      {activeTab === 'past' && sortedPastContests.length > contestsPerPage && (
        <div className="pagination">
          <button 
            className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`} 
            onClick={prevPage} 
            disabled={currentPage === 1}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous
          </button>
          
          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                className={`page-number ${currentPage === number ? 'active' : ''}`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            ))}
          </div>
          
          <button 
            className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`} 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
          >
            Next
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Contests; 