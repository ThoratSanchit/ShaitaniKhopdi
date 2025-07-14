import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import SinglePost from './pages/SinglePost';
import Contests from './pages/Contests';
import AITools from './pages/AITools';
import Footer from './components/Footer';
import SubscribeModal from './components/SubscribeModal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar onSubscribeClick={() => setShowModal(true)} />
        <SubscribeModal show={showModal} onClose={() => setShowModal(false)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<SinglePost />} />
            <Route path="/contests" element={<Contests />} />
            <Route path="/ai-tools" element={<AITools />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;