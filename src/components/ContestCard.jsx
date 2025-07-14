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
    <div className="contest-card">
      <div className="contest-header">
        <h3>{contest.name}</h3>
        <span className="prize">🏆 ${contest.prize}</span>
      </div>
      <div className="contest-details">
        <p className="description">{contest.description}</p>
        <div className="contest-meta">
          <span className="date">📅 {contest.date}</span>
          <span className="duration">⏱️ {contest.duration}</span>
        </div>
      </div>
      <div className="countdown">
        {timerComponents.length ? (
          <div className="timer">
            Starts in: <span className="time">{timerComponents}</span>
          </div>
        ) : (
          <div className="timer">Contest has started!</div>
        )}
      </div>
      <div className="contest-actions">
        <button className="btn register-btn">Register Now</button>
        <button className="btn outline-btn">View Details</button>
      </div>
    </div>
  );
};

export default ContestCard;