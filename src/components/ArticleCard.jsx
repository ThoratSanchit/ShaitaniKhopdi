import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
    const handleTryNow = () => {
    window.open(article.source, "_blank");
  };
    
  return (
    <div className="article-card">
      <div className="article-image">
        {article.image ? (
          <img src={article.image} alt={article.title} />
        ) : (
          <div className="image-placeholder">📄</div>
        )}
      </div>
      <div className="article-content">
        <div className="article-meta">
          <span className="author">{article.author}</span>
          <span className="date">{article.date}</span>
        </div>
        <h3>{article.title}</h3>
        <p className="excerpt">{article.excerpt}</p>
        <div className="article-footer">
          <div className="tags">
            {article.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      <button className="btn read-article-btn" onClick={handleTryNow}>
        Read Article
      </button>
      </div>
    </div>
  );
};

export default ArticleCard;