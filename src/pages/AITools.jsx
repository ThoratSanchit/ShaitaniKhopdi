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

  // Extract all unique tags from AI tools
  const allTags = [...new Set(aiTools.flatMap(tool => tool.tags))].sort();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [toolsPerPage] = useState(8); // Tools per page
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const suggestionsRef = useRef(null);
  const tagDropdownRef = useRef(null);

  // Filtered tools by category, search query, and selected tags
  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      tool.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      (tool.description && tool.description.toLowerCase().includes(searchQuery.trim().toLowerCase()));
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => tool.tags.includes(tag));
    return matchesCategory && matchesSearch && matchesTags;
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

  // Helper function for windowed pagination
  const getPaginationNumbers = (current, total) => {
    const pages = [];
    if (total <= 5) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, '...', total);
      } else if (current >= total - 2) {
        pages.push(1, '...', total - 2, total - 1, total);
      } else {
        pages.push(1, '...', current - 1, current, current + 1, '...', total);
      }
    }
    return pages;
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

  // Handle tag selection
  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  // Clear all selected tags
  const clearAllTags = () => {
    setSelectedTags([]);
    setCurrentPage(1);
  };

  // Hide suggestions when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setHighlightedIndex(-1);
      }
      if (tagDropdownRef.current && !tagDropdownRef.current.contains(event.target)) {
        setShowTagDropdown(false);
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

        {/* Tag Filter Dropdown */}
        <div className="tag-filter-container" ref={tagDropdownRef}>
          <div className="tag-filter-header">
            <button 
              className={`tag-dropdown-btn ${showTagDropdown ? 'active' : ''}`}
              onClick={() => setShowTagDropdown(!showTagDropdown)}
            >
              <svg className="tag-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 7H.01V7H7zM7 12H.01V12H7zM7 17H.01V17H7zM9 7H23V9H9V7zM9 12H23V14H9V12zM9 17H23V19H9V17z" fill="currentColor"/>
              </svg>
              Filter by Tags
              {selectedTags.length > 0 && (
                <span className="selected-count">{selectedTags.length}</span>
              )}
              <svg className={`dropdown-arrow ${showTagDropdown ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {selectedTags.length > 0 && (
              <button className="clear-tags-btn" onClick={clearAllTags}>
                Clear All
              </button>
            )}
          </div>

          {showTagDropdown && (
            <div className="tag-dropdown">
              <div className="tag-dropdown-content">
                {allTags.map(tag => (
                  <label key={tag} className="tag-option">
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagToggle(tag)}
                      className="tag-checkbox"
                    />
                    <span className="tag-label">{tag}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Selected Tags Display */}
          {selectedTags.length > 0 && (
            <div className="selected-tags">
              {selectedTags.map(tag => (
                <span key={tag} className="selected-tag">
                  {tag}
                  <button 
                    className="remove-tag-btn"
                    onClick={() => handleTagToggle(tag)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
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
            {getPaginationNumbers(currentPage, totalPages).map((number, idx, arr) => {
              if (number === '...') {
                return (
                  <span key={`ellipsis-${idx}`} className="ellipsis">...</span>
                );
              }
              return (
                <button
                  key={number}
                  className={`page-btn ${currentPage === number ? 'active' : ''}`}
                  onClick={() => paginate(number)}
                  disabled={currentPage === number}
                >
                  {number}
                </button>
              );
            })}
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