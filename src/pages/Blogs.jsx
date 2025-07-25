import React, { useState, useRef, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import blogs from '../data/blogs';
import './Blogs.css';
import { useNavigate } from 'react-router-dom';

const getBlogsPerPage = () => {
  if (window.innerWidth <= 400) return 1;
  if (window.innerWidth <= 600) return 2;
  if (window.innerWidth <= 900) return 3;
  if (window.innerWidth <= 1200) return 3;
  return 4;
};

const Blogs = () => {
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [blogsPerPage, setBlogsPerPage] = useState(getBlogsPerPage());
  const navigate = useNavigate();

  const categoryDropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setBlogsPerPage(getBlogsPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setCategoryDropdownOpen(false);
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setSortDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'AI', label: 'AI' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Cybersecurity', label: 'Cybersecurity' },
    { value: 'Remote Work', label: 'Remote Work' },
    { value: 'Ethics', label: 'Ethics' },
    { value: 'Productivity', label: 'Productivity' },
    { value: 'Trends', label: 'Trends' },
    { value: 'Enterprise', label: 'Enterprise' },
    { value: 'Collaboration', label: 'Collaboration' },
    { value: 'Quantum', label: 'Quantum' },
    { value: 'Innovation', label: 'Innovation' },
    { value: 'SaaS', label: 'SaaS' },
    { value: 'Scalability', label: 'Scalability' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'comments', label: 'Most Discussed' }
  ];

  const filteredBlogs = blogs
    .filter(blog => category === 'all' || blog.tags.includes(category))
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'popular') {
        return b.views - a.views;
      } else {
        return b.comments - a.comments;
      }
    });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  // Blog click handler for navigation
  const handleBlogClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="blogs-page">
      <div className="blogs-hero">
        <div className="hero-content">
          <h1>Discover <span className="highlight">Blogs</span></h1>
          <p>Explore expert blogs on AI, tech, and productivity.</p>
        </div>
      </div>
      <div className="blogs-container">
        <div className="blogs-header">
          <h2>Latest Blogs</h2>
          <div className="filter-controls">
            <div className="filter-group" ref={categoryDropdownRef}>
              <div className="custom-select-wrapper">
                <button
                  className="custom-select-button"
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                >
                  {categoryOptions.find(opt => opt.value === category)?.label}
                  <svg className={`select-arrow ${categoryDropdownOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {categoryDropdownOpen && (
                  <div className="custom-select-dropdown">
                    {categoryOptions.map((option) => (
                      <button
                        key={option.value}
                        className={`dropdown-option ${category === option.value ? 'selected' : ''}`}
                        onClick={() => {
                          setCategory(option.value);
                          setCurrentPage(1);
                          setCategoryDropdownOpen(false);
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="filter-group" ref={sortDropdownRef}>
              <div className="custom-select-wrapper">
                <button
                  className="custom-select-button"
                  onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                >
                  {sortOptions.find(opt => opt.value === sortBy)?.label}
                  <svg className={`select-arrow ${sortDropdownOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {sortDropdownOpen && (
                  <div className="custom-select-dropdown">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        className={`dropdown-option ${sortBy === option.value ? 'selected' : ''}`}
                        onClick={() => {
                          setSortBy(option.value);
                          setSortDropdownOpen(false);
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {currentBlogs.length > 0 ? (
          <>
            <div className="blogs-grid">
              {currentBlogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} onClick={() => handleBlogClick(blog.id)} />
              ))}
            </div>
            {filteredBlogs.length > blogsPerPage && (
              <div className="pagination">
                <button
                  className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Previous
                </button>
                <div className="page-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                    <button
                      key={number}
                      className={`page-btn ${currentPage === number ? 'active' : ''}`}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>
                <button
                  className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="empty-state">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00ff99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V12" stroke="#00ff99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16H12.01" stroke="#00ff99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>No blogs found</h3>
            <p>Try adjusting your filters or check back later for new content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs; 