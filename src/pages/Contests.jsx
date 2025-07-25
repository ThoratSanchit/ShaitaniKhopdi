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

  return (
    <div className="contests-page">
      <div className="contests-hero">
        <div className="hero-content">
          <h1>Coding Contests <span className="highlight">Challenge Hub</span></h1>
          <p>Compete, learn, and grow with our curated selection of programming challenges</p>
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
      
      {activeTab === 'past' && pastContests.length > 10 && (
        <div className="contest-pagination">
          <button className="pagination-btn">Previous</button>
          <div className="page-numbers">
            <span className="active">1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>5</span>
          </div>
          <button className="pagination-btn">Next</button>
        </div>
      )}
    </div>
  );
};

export default Contests; 