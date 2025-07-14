import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSubscribeClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Function to check if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProfileDropdownOpen(false); // Close profile dropdown when toggling menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="navbar">
      <div className={`navbar-container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} ref={navRef}>
        <div className="navbar-logo">
          <span className="navbar-logo-icon">🧠</span>
          <h1 className="navbar-logo-text">ShaitaniKhopdi</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`navbar-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {/* Mobile menu header */}
          <div className="navbar-mobile-header">
            <div className="navbar-mobile-logo">
              <span className="navbar-logo-icon">🧠</span>
              <span className="navbar-logo-text">ShaitaniKhopdi</span>
            </div>
            <button
              className="navbar-mobile-close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          <ul className="navbar-nav-list">
            <li className="navbar-nav-item">
              <a href="/" onClick={closeMobileMenu} className={isActiveLink('/') ? 'active' : ''}>Home</a>
            </li>
            <li className="navbar-nav-item">
              <a href="/ai-tools" onClick={closeMobileMenu} className={isActiveLink('/ai-tools') ? 'active' : ''}>AI Tools</a>
            </li>
            <li className="navbar-nav-item">
              <a href="/contests" onClick={closeMobileMenu} className={isActiveLink('/contests') ? 'active' : ''}>Contests</a>
            </li>
            <li className="navbar-nav-item">
              <a href="/articles" onClick={closeMobileMenu} className={isActiveLink('/articles') ? 'active' : ''}>News</a>
            </li>
          </ul>

          {/* Mobile Actions */}
          <div className="navbar-actions mobile-actions">
            <div className="navbar-search">
              <input 
                type="text" 
                placeholder="Search..." 
                className="navbar-search-input" 
                aria-label="Search"
              />
              <button className="navbar-search-button">🔍</button>
            </div>
            <button 
              className="navbar-subscribe-btn" 
              onClick={() => {
                onSubscribeClick(); 
                closeMobileMenu();
              }}
            >
              Subscribe
            </button>
            <div className="navbar-profile-container">
              <div 
                className={`navbar-profile ${isProfileDropdownOpen ? 'active' : ''}`}
                onClick={toggleProfileDropdown}
              >
                <div className="navbar-profile-icon">👤 Profile</div>
                <div className="navbar-profile-dropdown">
                  <a href="/profile" onClick={closeMobileMenu}>Profile</a>
                  <a href="/settings" onClick={closeMobileMenu}>Settings</a>
                  <a href="/logout" onClick={closeMobileMenu}>Logout</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav">
          <ul className="navbar-nav-list">
            <li className="navbar-nav-item">
              <a href="/" className={isActiveLink('/') ? 'active' : ''}>Home</a>
            </li>
            <li className="navbar-nav-item">
              <a href="/ai-tools" className={isActiveLink('/ai-tools') ? 'active' : ''}>AI Tools</a>
            </li>
            <li className="navbar-nav-item">
              <a href="/contests" className={isActiveLink('/contests') ? 'active' : ''}>Contests</a>
            </li>
            <li className="navbar-nav-item">
              <a href="/articles" className={isActiveLink('/articles') ? 'active' : ''}>News</a>
            </li>
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions desktop-actions">
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search..."
              className="navbar-search-input"
              aria-label="Search"
            />
            <button className="navbar-search-button">🔍</button>
          </div>
          <button className="navbar-subscribe-btn" onClick={onSubscribeClick}>
            Subscribe
          </button>
          <div className="navbar-profile">
            <div className="navbar-profile-icon">👤</div>
            <div className="navbar-profile-dropdown">
              <a href="/profile">Profile</a>
              <a href="/settings">Settings</a>
              <a href="/logout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;