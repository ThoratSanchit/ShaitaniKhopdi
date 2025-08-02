import React, { useState, useRef } from 'react';
import AIToolCard from '../components/AIToolCard';
import aiTools from '../data/aiTools';
import './AITools.css';

const AITools = () => {
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All', count: aiTools.length },
    { id: 'Foundation', name: 'Foundation Models', count: aiTools.filter(tool => tool.category === 'Foundation').length },
    { id: 'Creative', name: 'Creative Tools', count: aiTools.filter(tool => tool.category === 'Creative').length },
    { id: 'Productivity', name: 'Productivity', count: aiTools.filter(tool => tool.category === 'Productivity').length },
    { id: 'Enterprise', name: 'Enterprise', count: aiTools.filter(tool => tool.category === 'Enterprise').length },
    { id: 'Developer', name: 'Developer Tools', count: aiTools.filter(tool => tool.category === 'Developer').length },
    { id: 'Research', name: 'Research', count: aiTools.filter(tool => tool.category === 'Research').length },
    { id: 'Healthcare', name: 'Healthcare', count: aiTools.filter(tool => tool.category === 'Healthcare').length },
    { id: 'Government', name: 'Government', count: aiTools.filter(tool => tool.category === 'Government').length }
  ];

  // Extract all unique tags and prices
  const allTags = [...new Set(aiTools.flatMap(tool => tool.tags))].sort();
  const allPrices = [...new Set(aiTools.map(tool => tool.price).filter(Boolean))].sort();

  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [toolsPerPage] = useState(9);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  
  // Separate filter dropdown states
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [showTagFilter, setShowTagFilter] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);

  // Refs for click outside handling
  const categoryFilterRef = useRef(null);
  const tagFilterRef = useRef(null);
  const priceFilterRef = useRef(null);

  // Filtered tools
  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      tool.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      (tool.description && tool.description.toLowerCase().includes(searchQuery.trim().toLowerCase()));
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => tool.tags.includes(tag));
    const matchesPrices = selectedPrices.length === 0 || 
      (tool.price && selectedPrices.includes(tool.price));
    return matchesCategory && matchesSearch && matchesTags && matchesPrices;
  });

  // Pagination
  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = filteredTools.slice(indexOfFirstTool, indexOfLastTool);
  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);

  // Helper functions
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  // Calculate total active filters
  const getActiveFiltersCount = () => {
    let count = selectedTags.length + selectedPrices.length;
    if (activeCategory !== 'all') count += 1;
    if (searchQuery.trim() !== '') count += 1;
    return count;
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handlePriceToggle = (price) => {
    setSelectedPrices(prev => 
      prev.includes(price) ? prev.filter(p => p !== price) : [...prev, price]
    );
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedTags([]);
    setSelectedPrices([]);
    setSearchQuery('');
    setActiveCategory('all');
    setCurrentPage(1);
  };

  // Get current category name
  const getCurrentCategoryName = () => {
    const category = categories.find(cat => cat.id === activeCategory);
    return category ? category.name : 'All';
  };

  // Click outside handlers
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryFilterRef.current && !categoryFilterRef.current.contains(event.target)) {
        setShowCategoryFilter(false);
      }
      if (tagFilterRef.current && !tagFilterRef.current.contains(event.target)) {
        setShowTagFilter(false);
      }
      if (priceFilterRef.current && !priceFilterRef.current.contains(event.target)) {
        setShowPriceFilter(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="ai-tools-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover <span className="gradient-text">AI Tools</span>
          </h1>
          <p className="hero-subtitle">
            Explore our curated collection of cutting-edge AI tools and discover the future of technology.
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="search-filter-bar">
        <div className="search-container">
          <div className="search-input-wrapper">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search AI tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filter-buttons">
          {/* Category Filter Button */}
          <div className="filter-button-container" ref={categoryFilterRef}>
            <button 
              className={`filter-button ${activeCategory !== 'all' ? 'active' : ''}`}
              onClick={() => setShowCategoryFilter(!showCategoryFilter)}
            >
              <svg className="filter-button-icon" viewBox="0 0 24 24" fill="none">
                <path d="M3 3H21V5H3V3ZM3 7H21V9H3V7ZM3 11H21V13H3V11ZM3 15H21V17H3V15ZM3 19H21V21H3V19Z" fill="currentColor"/>
              </svg>
              {getCurrentCategoryName()}
              {activeCategory !== 'all' && (
                <span className="filter-button-badge">1</span>
              )}
            </button>

            {showCategoryFilter && (
              <div className="filter-dropdown">
                <div className="filter-dropdown-content">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`filter-option ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setCurrentPage(1);
                        setShowCategoryFilter(false);
                      }}
                    >
                      <span className="filter-option-name">{category.name}</span>
                      <span className="filter-option-count">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tags Filter Button */}
          <div className="filter-button-container" ref={tagFilterRef}>
            <button 
              className={`filter-button ${selectedTags.length > 0 ? 'active' : ''}`}
              onClick={() => setShowTagFilter(!showTagFilter)}
            >
              <svg className="filter-button-icon" viewBox="0 0 24 24" fill="none">
                <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Tags
              {selectedTags.length > 0 && (
                <span className="filter-button-badge">{selectedTags.length}</span>
              )}
            </button>

            {showTagFilter && (
              <div className="filter-dropdown">
                <div className="filter-dropdown-content">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      className={`filter-option ${selectedTags.includes(tag) ? 'active' : ''}`}
                      onClick={() => handleTagToggle(tag)}
                    >
                      <span className="filter-option-name">{tag}</span>
                      {selectedTags.includes(tag) && (
                        <svg className="filter-option-check" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Price Filter Button */}
          <div className="filter-button-container" ref={priceFilterRef}>
            <button 
              className={`filter-button ${selectedPrices.length > 0 ? 'active' : ''}`}
              onClick={() => setShowPriceFilter(!showPriceFilter)}
            >
              <svg className="filter-button-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Pricing
              {selectedPrices.length > 0 && (
                <span className="filter-button-badge">{selectedPrices.length}</span>
              )}
            </button>

            {showPriceFilter && (
              <div className="filter-dropdown">
                <div className="filter-dropdown-content">
                  {allPrices.map(price => (
                    <button
                      key={price}
                      className={`filter-option ${selectedPrices.includes(price) ? 'active' : ''}`}
                      onClick={() => handlePriceToggle(price)}
                    >
                      <span className="filter-option-name">{price}</span>
                      {selectedPrices.includes(price) && (
                        <svg className="filter-option-check" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Clear All Filters Button */}
          {getActiveFiltersCount() > 0 && (
            <button className="clear-all-filters-btn" onClick={clearAllFilters}>
              <svg className="clear-icon" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Results Summary */}
      <div className="results-summary">
        <p className="results-text">
          Showing {currentTools.length} of {filteredTools.length} tools
          {filteredTools.length !== aiTools.length && (
            <span className="filtered-indicator"> (filtered)</span>
          )}
        </p>
      </div>

      {/* Tools Grid */}
      <div className="tools-grid">
        {currentTools.map(tool => (
          <AIToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {/* Empty State */}
      {currentTools.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3 className="empty-title">No tools found</h3>
          <p className="empty-description">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button className="reset-filters-btn" onClick={clearAllFilters}>
            Reset Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {filteredTools.length > toolsPerPage && (
        <div className="pagination">
          <button 
            className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous
          </button>

          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                className={`page-number ${currentPage === number ? 'active' : ''}`}
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
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default AITools;