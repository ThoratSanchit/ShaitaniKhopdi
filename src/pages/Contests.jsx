import React, { useState } from 'react';
import ContestCard from '../components/ContestCard';
import contests from '../data/contests';
import './Contests.css';

const Contests = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Categorize contests
  const now = new Date();
  const liveContests = contests.filter(contest => new Date(contest.date) > now);
  const pastContests = contests.filter(contest => new Date(contest.date) <= now);

  // Sort contests by date
  const sortedLiveContests = [...liveContests].sort((a, b) => new Date(a.date) - new Date(b.date));
  const sortedPastContests = [...pastContests].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Pagination state for past contests
  const [currentPage, setCurrentPage] = useState(1);
  const contestsPerPage = 10;
  const totalPages = Math.ceil(pastContests.length / contestsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const getPaginationNumbers = (current, total) => {
    const pages = [];
    if (total <= 5) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, '...', total);
      } else if (current >= total - 2) {
        pages.push(1, '...', total - 2, total - 1, total);
      } else {
        pages.push(1, '...', current - 1, current, current + 1, '...', total);
      }
    }
    return pages;
  };

  return (
    <div className="contests-page">
      <div className="contests-hero">
        <div className="hero-content">
          <h1>Discover <span className="highlight">Contests</span></h1>
          <p>Join coding contests and challenge yourself with new problems.</p>
        </div>
      </div>
      
      <div className="contest-tabs">
        <button 
          className={`contest-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Contests
          <span className="badge">{liveContests.length}</span>
        </button>
        <button 
          className={`contest-tab ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past Contests
          <span className="badge">{pastContests.length}</span>
        </button>
      </div>
      
      <div className="contest-content">
        {activeTab === 'upcoming' ? (
          <>
            {sortedLiveContests.length > 0 ? (
              <div className="contest-grid">
                {sortedLiveContests.map(contest => (
                  <ContestCard key={contest.id} contest={contest} status="upcoming" />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00ff99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12" stroke="#00ff99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16H12.01" stroke="#00ff99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>No upcoming contests scheduled</h3>
                <p>Check back later or subscribe to get notified about new contests</p>
                <button className="subscribe-btn">Notify Me</button>
              </div>
            )}
          </>
        ) : (
          <div className="contest-grid">
            {sortedPastContests.map(contest => (
              <ContestCard key={contest.id} contest={contest} status="past" />
            ))}
          </div>
        )}
      </div>
      
      {activeTab === 'past' && pastContests.length > contestsPerPage && (
        <div className="contest-pagination">
          <button className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`} onClick={prevPage} disabled={currentPage === 1}>Previous</button>
          <div className="page-numbers">
            {getPaginationNumbers(currentPage, totalPages).map((number, idx, arr) => {
              if (number === '...') {
                return (
                  <span key={`ellipsis-${idx}`} className="ellipsis">...</span>
                );
              }
              return (
                <button
                  key={number}
                  className={`page-btn ${currentPage === number ? 'active' : ''}`}
                  onClick={() => paginate(number)}
                  disabled={currentPage === number}
                >
                  {number}
                </button>
              );
            })}
          </div>
          <button className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`} onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Contests; 