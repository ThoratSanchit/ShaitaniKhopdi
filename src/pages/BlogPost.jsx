import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs';
import './SinglePost.css';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div className="not-found">Blog not found</div>;
  }

  // Share handler
  const handleShare = () => {
    const shareUrl = `${window.location.origin}/blogs/${blog.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      alert('Sharable link copied to clipboard!');
    } else {
      window.prompt('Copy this link:', shareUrl);
    }
  };

  return (
    <div className="single-post">
      <div className="post-header">
        <div className="post-meta">
          <span className="date">{blog.date}</span>
        </div>
        <h1>{blog.title}</h1>
        <div className="post-tags">
          {blog.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="post-image">
        {blog.image ? (
          <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
        ) : (
          <div className="image-placeholder">📝</div>
        )}
      </div>
      <div className="post-content">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
      {/* Comments section can be added here if needed */}
    </div>
  );
};

export default BlogPost; 