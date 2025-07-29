import React from "react";
import "./AIToolCard.css";

const AIToolCard = ({ tool }) => {
  const handleTryNow = () => {
    window.open(tool.link, "_blank"); // Opens in a new tab immediately
  };
  
  return (
    <div className="ai-tool-card">
      <div className="tool-header">
        <div className="tool-icon">{tool.icon}</div>
        <div className="tool-title-section">
          <h3>{tool.name}</h3>
          {tool.price && (
            <span className="tool-price">{tool.price}</span>
          )}
        </div>
      </div>
      <p className="tool-description">{tool.description}</p>
      <div className="tool-tags">
        {tool.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <button className="btn try-now-btn" onClick={handleTryNow}>
        Try Now
      </button>
    </div>
  );
};

export default AIToolCard; 