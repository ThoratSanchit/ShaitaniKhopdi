import React from "react";
import "./AIToolCard.css";

const AIToolCard = ({ tool }) => {
  const handleTryNow = () => {
    window.open(tool.link, "_blank");
  };

  // Function to get pricing badge color based on price type
  const getPricingBadgeColor = (price) => {
    if (!price) return "default";
    const priceLower = price.toLowerCase();
    if (priceLower.includes("free")) return "free";
    if (priceLower.includes("paid")) return "paid";
    if (priceLower.includes("trial")) return "trial";
    if (priceLower.includes("bundle")) return "bundled";
    if (priceLower.includes("internal")) return "internal";
    if (priceLower.includes("pay-as-you")) return "payg";
    return "default";
  };

  return (
    <div className="clean-card">
      {/* Green accent line */}
      <div className="accent-line"></div>
      
      {/* Card content */}
      <div className="card-content">
        {/* Header with title and pricing badge */}
        <div className="card-header">
          <h3 className="tool-title">{tool.name}</h3>
          {tool.price && (
            <span className={`pricing-badge ${getPricingBadgeColor(tool.price)}`}>
              {tool.price}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="tool-description">{tool.description}</p>

        {/* Metadata section */}
        <div className="metadata">
          <div className="meta-item">
            <svg className="meta-icon" viewBox="0 0 24 24" fill="none">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="meta-text">{tool.category || 'AI Tools'}</span>
          </div>
          <div className="meta-item">
            <svg className="meta-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="meta-text">ShaitaniKhopdi</span>
          </div>
          <div className="meta-item">
            <svg className="meta-icon" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="meta-text">2025</span>
          </div>
        </div>

        {/* Tags section */}
        <div className="tags-section">
          {tool.tags.slice(0, 4).map((tag, index) => (
            <span key={index} className="tag">
              <svg className="tag-icon" viewBox="0 0 24 24" fill="none">
                <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {tag}
            </span>
          ))}
        </div>

        {/* Action button */}
        <div className="card-actions">
          <button className="try-button" onClick={handleTryNow}>
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIToolCard; 