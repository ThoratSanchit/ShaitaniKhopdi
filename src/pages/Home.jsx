import React, { useState } from 'react';
import AIToolCard from '../components/AIToolCard';
import ArticleCard from '../components/ArticleCard';
import ContestCard from '../components/ContestCard';
import aiTools from '../data/aiTools';
import articles from '../data/articles';
import contests from '../data/contests';
import skullImage from "../assets/real-removebg-preview.png"; // Renamed for clarity
import './Home.css';
import AboutUsModal from '../components/AboutUsModal';

const Home = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const trendingArticles = articles.slice(0, 5);
  const upcomingContests = contests.slice(0, 2);

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="home-hero-content">
          <h1 className="home-hero-title">Hack the Future, One Byte at a Time</h1>
          <p className="home-hero-subtitle">
            Join the ShaitaniKhopdi community to explore cutting-edge AI tools, participate in 
            coding contests, and stay updated with the latest tech news and cybersecurity trends.
          </p>
          <div className="home-hero-buttons">
            <a href="https://discord.gg/jAYFqV8E" target="_blank" rel="noopener noreferrer">
              <button className="home-primary-btn">Join Community</button>
            </a>
            <button className="home-secondary-btn" onClick={() => setShowAboutModal(true)}>Learn More</button>
          </div>
        </div>
        <div className="home-hero-image-container">
          <img 
            src={skullImage} 
            alt="Tech Hacker Skull" 
            className="home-skull-image" 
          />
          <div className="home-image-glow"></div>
        </div>
      </section>

      {/* Trending AI Tools */}
      <section className="home-section">
        <h2 className="home-section-title">Trending AI Tools</h2>
        <div className="home-ai-tools-grid">
          {aiTools.slice(0, 6).map(tool => (
            <AIToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Upcoming Contests */}
      <section className="home-section">
        <h2 className="home-section-title">Upcoming Live Coding Contests</h2>
        <div className="home-contests-grid">
          {upcomingContests.map(contest => (
            <ContestCard key={contest.id} contest={contest} />
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="home-section">
        <h2 className="home-section-title">Latest Tech News</h2>
        <div className="home-articles-grid">
          {trendingArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
      {showAboutModal && <AboutUsModal onClose={() => setShowAboutModal(false)} />}
    </div>
  );
};

export default Home;