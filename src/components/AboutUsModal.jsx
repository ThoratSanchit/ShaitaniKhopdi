import React from 'react';
import './AboutUsModal.css';

const AboutUsModal = ({ onClose }) => {
  return (
    <div className="aboutus-modal-overlay">
      <div className="aboutus-modal-content">
        <button className="aboutus-modal-close" onClick={onClose}>&times;</button>
        <h2>About ShaitaniKhopdi</h2>
        <p>
          ShaitaniKhopdi is your gateway to the world of AI, coding, and cybersecurity. Join a vibrant community of tech enthusiasts, explore the latest AI tools, compete in live coding contests, and stay ahead with cutting-edge tech news.
        </p>
        <ul>
          <li>Discover and review trending AI tools</li>
          <li>Participate in exclusive coding contests</li>
          <li>Get the latest updates in tech and cybersecurity</li>
          <li>Connect with like-minded innovators</li>
        </ul>
        <p>Ready to hack the future? <a href="https://discord.gg/jAYFqV8E" target="_blank" rel="noopener noreferrer">Join our Discord Community!</a></p>
      </div>
    </div>
  );
};

export default AboutUsModal; 