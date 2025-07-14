import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="logo-icon">☠️</span>
          <h2>ShaitaniKhopdi</h2>
          <p>Hack the Future, One Byte at a Time</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h3>Explore</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/ai-tools">AI Tools</a></li>
              <li><a href="/contests">Contests</a></li>
              <li><a href="/articles">News</a></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h3>Company</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h3>Community</h3>
            <ul>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShaitaniKhopdi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;