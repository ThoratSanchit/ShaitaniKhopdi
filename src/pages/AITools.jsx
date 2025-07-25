import React, { useState, useRef } from 'react';
import AIToolCard from '../components/AIToolCard';
import aiTools from '../data/aiTools';
import './AITools.css';

const AITools = () => {
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'llm', name: 'Large Language Models' },
    { id: 'image', name: 'Image Generation' },
    { id: 'code', name: 'Code Assistance' },
    { id: 'audio', name: 'Audio Processing' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'video', name: 'Video Tools' },
    { id: 'research', name: 'Research' }
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [toolsPerPage] = useState(8); // Tools per page
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const suggestionsRef = useRef(null);

  // Filtered tools by category and search query
  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      tool.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      (tool.description && tool.description.toLowerCase().includes(searchQuery.trim().toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Filtered suggestions for autocomplete
  const suggestions = searchInput.trim() === '' ? [] :
    aiTools.filter(tool =>
      tool.name.toLowerCase().includes(searchInput.trim().toLowerCase()) ||
      (tool.description && tool.description.toLowerCase().includes(searchInput.trim().toLowerCase()))
    ).slice(0, 6);

  // Get current tools
  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = filteredTools.slice(indexOfFirstTool, indexOfLastTool);
  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const leftBound = Math.max(1, currentPage - 2);
      const rightBound = Math.min(totalPages, currentPage + 2);
      
      if (leftBound > 1) pageNumbers.push(1);
      if (leftBound > 2) pageNumbers.push('...');
      
      for (let i = leftBound; i <= rightBound; i++) {
        pageNumbers.push(i);
      }
      
      if (rightBound < totalPages - 1) pageNumbers.push('...');
      if (rightBound < totalPages) pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setShowSuggestions(e.target.value.trim() !== '');
    setHighlightedIndex(-1);
  };

  // Handle search button click or Enter key
  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setSearchQuery(searchInput);
    setCurrentPage(1);
    setShowSuggestions(false);
    setHighlightedIndex(-1);
  };

  // Handle Enter, ArrowUp, ArrowDown in search input
  const handleSearchInputKeyDown = (e) => {
    if (showSuggestions && suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex(idx => (idx + 1) % suggestions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex(idx => (idx - 1 + suggestions.length) % suggestions.length);
      } else if (e.key === 'Enter') {
        if (highlightedIndex >= 0) {
          setSearchInput(suggestions[highlightedIndex].name);
          setShowSuggestions(false);
          setHighlightedIndex(-1);
          setTimeout(() => handleSearch(), 0);
        } else {
          handleSearch(e);
        }
      } else if (e.key === 'Escape') {
        setShowSuggestions(false);
        setHighlightedIndex(-1);
      }
    } else if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion.name);
    setShowSuggestions(false);
    setHighlightedIndex(-1);
    setTimeout(() => handleSearch(), 0);
  };

  // Hide suggestions when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="ai-tools-page">
      <div className="ai-tools-hero">
        <div className="hero-content">
          <h1>Discover <span className="highlight">AI Tools</span></h1>
          <p>Explore our curated collection of cutting-edge AI tools.</p>
        </div>
      </div>
      
      <div className="filter-section">
        <div className="search-container" ref={suggestionsRef}>
          <form className="search-bar" onSubmit={handleSearch} autoComplete="off">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search AI tools (e.g. 'image generation', 'code assistant')" 
              className="search-input"
              value={searchInput}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchInputKeyDown}
              autoComplete="off"
              aria-autocomplete="list"
              aria-controls="ai-tools-suggestions"
              aria-activedescendant={highlightedIndex >= 0 ? `suggestion-${highlightedIndex}` : undefined}
            />
            {/* Suggestions dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <ul className="search-suggestions" id="ai-tools-suggestions" role="listbox">
                {suggestions.map((tool, idx) => (
                  <li
                    key={tool.id}
                    id={`suggestion-${idx}`}
                    className={`suggestion-item${highlightedIndex === idx ? ' highlighted' : ''}`}
                    onMouseDown={() => handleSuggestionClick(tool)}
                    role="option"
                    aria-selected={highlightedIndex === idx}
                  >
                    {tool.name}
                  </li>
                ))}
              </ul>
            )}
          </form>
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <button 
              key={category.id} 
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentPage(1); // Reset to first page when changing category
              }}
            >
              {category.name}
              {category.id === 'all' && <span className="tool-count">{aiTools.length}+</span>}
            </button>
          ))}
        </div>
      </div>
      
      <div className="tools-grid">
        {currentTools.map(tool => (
          <AIToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      
      {filteredTools.length > toolsPerPage && (
        <div className="pagination-container">
          <button 
            className={`pagination-btn prev-next ${currentPage === 1 ? 'disabled' : ''}`} 
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous
          </button>
          
          <div className="page-numbers">
            {getPageNumbers().map((number, index) => (
              number === '...' ? (
                <span key={`ellipsis-${index}`} className="page-dots">...</span>
              ) : (
                <button
                  key={number}
                  className={`page-btn ${currentPage === number ? 'active' : ''}`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              )
            ))}
          </div>
          
          <button 
            className={`pagination-btn prev-next ${currentPage === totalPages ? 'disabled' : ''}`} 
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
    </div>
  );
};

export default AITools;