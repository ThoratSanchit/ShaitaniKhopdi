import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../data/articles';
import './SinglePost.css';

const SinglePost = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return <div className="not-found">Article not found</div>;
  }

  return (
    <div className="single-post">
      <div className="post-header">
        <div className="post-meta">
          <span className="author">By {article.author}</span>
          <span className="date">{article.date}</span>
        </div>
        <h1>{article.title}</h1>
        <div className="post-tags">
          {article.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="post-image">
        <div className="image-placeholder">📄</div>
      </div>
      <div className="post-content">
        <p>This is a detailed article about {article.title}. In a real implementation, this would be the full content of the article.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
        <h2>Code Example</h2>
        <pre className="code-block">
          <code>
{`function helloWorld() {
  console.log("Hello, ShaitaniKhopdi!");
  return true;
}`}
          </code>
        </pre>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <h2>Conclusion</h2>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
};

export default SinglePost;