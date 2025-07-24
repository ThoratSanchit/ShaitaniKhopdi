import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog, onClick }) => {
  return (
    <div className="blog-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="blog-image">
        {blog.image ? (
          <img src={blog.image} alt={blog.title} />
        ) : (
          <div className="image-placeholder">📝</div>
        )}
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="date">{blog.date}</span>
        </div>
        <h3>{blog.title}</h3>
        <p className="excerpt">{blog.excerpt}</p>
        <div className="blog-footer">
          <div className="tags">
            {blog.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <button className="btn read-blog-btn" onClick={e => { e.stopPropagation(); onClick(); }}>
          Read Blog
        </button>
      </div>
    </div>
  );
};

export default BlogCard; 