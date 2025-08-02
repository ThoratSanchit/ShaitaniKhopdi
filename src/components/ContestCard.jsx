import React from 'react';
import './ContestCard.css';

const ContestCard = ({ contest, status = "upcoming" }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const contestDate = new Date(contest.date);
    const difference = contestDate - now;
    
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });

  const handleApplyNow = () => {
    window.open(contest.url, "_blank");
  };

  // Function to get status badge color
  const getStatusBadgeColor = () => {
    if (status === "upcoming") return "upcoming";
    if (status === "live") return "live";
    return "past";
  };

  // Function to get status text
  const getStatusText = () => {
    if (status === "upcoming") return "Upcoming";
    if (status === "live") return "Live Now";
    return "Past";
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Extract prize amount for display
  const getPrizeDisplay = () => {
    const prize = contest.prize.toLowerCase();
    const amount = prize.match(/\$?(\d+(?:,\d+)?)/);
    if (amount) {
      return `$${parseInt(amount[1].replace(',', '')).toLocaleString()}`;
    }
    return contest.prize;
  };

  return (
    <div className="clean-card">
      {/* Green accent line */}
      <div className="accent-line"></div>
      
      {/* Card content */}
      <div className="card-content">
        {/* Header with title and status badge */}
        <div className="card-header">
          <h3 className="tool-title">{contest.name}</h3>
          <span className={`pricing-badge ${getStatusBadgeColor()}`}>
            {getStatusText()}
          </span>
        </div>

        {/* Description */}
        <p className="tool-description">
          Join this {contest.type.toLowerCase()} and compete for amazing prizes. 
          {status === "upcoming" && " Don't miss out on this opportunity!"}
        </p>

        {/* Metadata section */}
        <div className="metadata">
          <div className="meta-item">
            <svg className="meta-icon" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="meta-text">{formatDate(contest.date)}</span>
          </div>
          <div className="meta-item">
            <svg className="meta-icon" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="meta-text">{contest.duration}</span>
          </div>
          <div className="meta-item">
            <svg className="meta-icon" viewBox="0 0 24 24" fill="none">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="meta-text">{contest.location}</span>
          </div>
        </div>

        {/* Prize and countdown section */}
        <div className="tags-section">
          <span className="tag prize-tag">
            <svg className="tag-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Prize: {getPrizeDisplay()}
          </span>
          {status === "upcoming" && (
            <span className="tag countdown-tag">
              <svg className="tag-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {timeLeft.days > 0 ? `${timeLeft.days}d ${timeLeft.hours}h` : 
               timeLeft.hours > 0 ? `${timeLeft.hours}h ${timeLeft.minutes}m` : 
               `${timeLeft.minutes}m ${timeLeft.seconds}s`}
            </span>
          )}
          <span className="tag type-tag">
            <svg className="tag-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {contest.type}
          </span>
        </div>

        {/* Action button */}
        <div className="card-actions">
          <button className="try-button" onClick={handleApplyNow}>
            {status === "upcoming" ? "Apply Now" : 
             status === "live" ? "Join Now" : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;