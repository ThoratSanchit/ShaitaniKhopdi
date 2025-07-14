import React from 'react';
import './SubscribeModal.css';

const SubscribeModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Join the ShaitaniKhopdi Community</h2>
        <p>Get updates on the latest AI tools, coding contests, and tech news.</p>
        
        <form className="subscribe-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your@email.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="hacker123" required />
          </div>
          
          <div className="form-group checkbox-group">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">Receive weekly newsletter</label>
          </div>
          
          <button type="submit" className="btn">Subscribe</button>
        </form>
        
        <div className="social-options">
          <p>Or join our community on:</p>
          <div className="social-buttons">
            <button className="social-btn discord">Discord</button>
            <button className="social-btn github">GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;