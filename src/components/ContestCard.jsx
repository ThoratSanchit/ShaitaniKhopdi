import React from 'react';
import './ContestCard.css';

const ContestCard = ({ contest }) => {
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
  
  const timerComponents = [];
  
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    
    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  
  return (
    <div className="contest-card pro">
      <div className="contest-header">
        <h3 className="contest-title-pro">{contest.name}</h3>
        <span className="prize-pro">🏆 {contest.prize}</span>
      </div>
      <div className="contest-meta-pro">
        <span className="date-pro">📅 {contest.date}</span>
        <span className="duration-pro">⏱️ {contest.duration}</span>
        <span className="type-pro">{contest.type}</span>
        <span className="location-pro">{contest.location}</span>
      </div>
      <div className="countdown-pro">
        {timerComponents.length ? (
          <div className="timer-pro">
            Starts in: <span className="time-pro">{timerComponents}</span>
          </div>
        ) : (
          <div className="timer-pro">Contest has started!</div>
        )}
      </div>
      <div className="contest-actions-pro">
        <a
          className="btn-pro register-btn-pro"
          href={contest.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default ContestCard;